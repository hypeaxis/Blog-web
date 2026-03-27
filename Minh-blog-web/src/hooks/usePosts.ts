import { useState } from "react";
import { mockPosts, type MockPost } from "@/data/mockPosts";
import type { BlogPost } from "@/types/post";

const STORAGE_KEY = "blog_posts";

function toBlogPost(post: MockPost): BlogPost {
  const timestamp = `${post.date}T00:00:00.000Z`;

  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content.join("\n\n"),
    tags: [],
    authorName: "Anonymous",
    authorEmail: "",
    createdAt: timestamp,
    updatedAt: timestamp,
    status: "published",
  };
}

function isBlogPost(value: unknown): value is BlogPost {
  if (!value || typeof value !== "object") {
    return false;
  }

  const post = value as Partial<BlogPost>;
  return (
    typeof post.id === "string" &&
    typeof post.title === "string" &&
    typeof post.excerpt === "string" &&
    typeof post.content === "string" &&
    Array.isArray(post.tags) &&
    post.tags.every((tag) => typeof tag === "string") &&
    typeof post.authorName === "string" &&
    typeof post.authorEmail === "string" &&
    typeof post.createdAt === "string" &&
    typeof post.updatedAt === "string" &&
    (post.status === "published" || post.status === "draft")
  );
}

function buildSeedPosts(): BlogPost[] {
  return mockPosts.map(toBlogPost);
}

function readStoredPosts(): BlogPost[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return null;
    }

    return parsed.every(isBlogPost) ? parsed : null;
  } catch {
    return null;
  }
}

function writeStoredPosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function usePosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    if (typeof window === "undefined") {
      return buildSeedPosts();
    }

    const storedPosts = readStoredPosts();

    if (storedPosts && storedPosts.length > 0) {
      return storedPosts;
    } else {
      const seedPosts = buildSeedPosts();
      writeStoredPosts(seedPosts);
      return seedPosts;
    }
  });

  const addPost = (newPost: BlogPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [newPost, ...prevPosts];
      writeStoredPosts(updatedPosts);
      return updatedPosts;
    });
  };

  return { posts, addPost, isLoaded: true };
}