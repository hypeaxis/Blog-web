import { list, put } from "@vercel/blob";
import { mockPosts } from "@/data/mockPosts";
import { getPostUiMeta } from "@/data/postUi";
import type { BlogPost, CreatePostInput, PostListOptions, PostListResult } from "@/types/post";

const POSTS_INDEX_PATH = "posts/index.json";
const DEFAULT_LIMIT = 10;

let memoryPosts: BlogPost[] | null = null;

function nowIso() {
  return new Date().toISOString();
}

function normalizeTag(tag: string) {
  return tag.trim().replace(/\s+/g, " ");
}

function buildSeedPosts(): BlogPost[] {
  return mockPosts.map((post) => {
    const meta = getPostUiMeta(post);
    const fallbackDate = `${post.date}T00:00:00.000Z`;

    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content.join("\n\n"),
      tags: meta.tags,
      authorName: meta.author,
      authorEmail: "author@devblog.local",
      createdAt: fallbackDate,
      updatedAt: fallbackDate,
      status: "published",
    };
  });
}

function hasBlobToken() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readBlobPosts(): Promise<BlogPost[] | null> {
  if (!hasBlobToken()) {
    return null;
  }

  const result = await list({
    prefix: POSTS_INDEX_PATH,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  const indexBlob = result.blobs.find((blob) => blob.pathname === POSTS_INDEX_PATH);

  if (!indexBlob) {
    return null;
  }

  const response = await fetch(indexBlob.url, { cache: "no-store" });
  if (!response.ok) {
    return null;
  }

  const parsed = (await response.json()) as BlogPost[];
  return Array.isArray(parsed) ? parsed : null;
}

async function writeBlobPosts(posts: BlogPost[]) {
  if (!hasBlobToken()) {
    return;
  }

  await put(POSTS_INDEX_PATH, JSON.stringify(posts, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

async function readAllPosts(): Promise<BlogPost[]> {
  if (memoryPosts) {
    return memoryPosts;
  }

  const blobPosts = await readBlobPosts();

  if (blobPosts && blobPosts.length > 0) {
    memoryPosts = blobPosts;
    return memoryPosts;
  }

  memoryPosts = buildSeedPosts();
  return memoryPosts;
}

async function persistPosts(posts: BlogPost[]) {
  memoryPosts = posts;
  await writeBlobPosts(posts);
}

function filterPosts(posts: BlogPost[], q?: string, category?: string) {
  let filtered = posts;

  if (q) {
    const term = q.trim().toLowerCase();
    if (term) {
      filtered = filtered.filter((post) => {
        const searchable = `${post.title}\n${post.excerpt}\n${post.content}`.toLowerCase();
        return searchable.includes(term);
      });
    }
  }

  if (category) {
    const normalized = category.trim().toLowerCase();
    if (normalized) {
      filtered = filtered.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === normalized),
      );
    }
  }

  return filtered;
}

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function listPosts(options: PostListOptions = {}): Promise<PostListResult> {
  const page = Math.max(1, options.page ?? 1);
  const limit = Math.max(1, options.limit ?? DEFAULT_LIMIT);
  const allPosts = sortPosts(await readAllPosts()).filter((post) => post.status === "published");
  const filtered = filterPosts(allPosts, options.q, options.category);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return {
    items,
    total,
    page,
    limit,
    totalPages,
  };
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await readAllPosts();
  return posts.find((post) => post.id === id && post.status === "published") ?? null;
}

export async function getCategories(): Promise<string[]> {
  const posts = await readAllPosts();
  const tags = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      if (tag.trim()) {
        tags.add(tag);
      }
    }
  }

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

export async function createPost(
  input: CreatePostInput,
  user: { name?: string | null; email?: string | null },
): Promise<BlogPost> {
  const cleanedTitle = input.title.trim();
  const cleanedExcerpt = input.excerpt.trim();
  const cleanedContent = input.content.trim();
  const cleanedTags = Array.from(
    new Set(input.tags.map(normalizeTag).filter((tag) => tag.length > 0)),
  );

  if (!cleanedTitle || !cleanedExcerpt || !cleanedContent) {
    throw new Error("Missing required post fields");
  }

  const timestamp = nowIso();
  const newPost: BlogPost = {
    id: crypto.randomUUID(),
    title: cleanedTitle,
    excerpt: cleanedExcerpt,
    content: cleanedContent,
    tags: cleanedTags,
    authorName: user.name?.trim() || "Anonymous",
    authorEmail: user.email?.trim() || "",
    createdAt: timestamp,
    updatedAt: timestamp,
    status: "published",
  };

  const posts = await readAllPosts();
  await persistPosts([newPost, ...posts]);

  return newPost;
}

export async function getPopularPosts(limit = 4): Promise<BlogPost[]> {
  const { items } = await listPosts({ page: 1, limit });
  return items;
}
