import type { MockPost } from "@/data/mockPosts";

type PostUiMeta = {
  author: string;
  tags: string[];
  comments: number;
};

const AUTHORS = [
  "An Nguyen",
  "Linh Tran",
  "Bao Le",
  "Minh Pham",
  "Hoang Vu",
];

const TAG_POOL = [
  "Next.js",
  "React",
  "TypeScript",
  "Life",
  "Travel",
  "Book",
  "Productivity",
  "Career",
  "Food",
  "Movie",
];

function pickTagSeed(post: MockPost) {
  return post.id.length + post.title.length;
}

export function getPostUiMeta(post: MockPost): PostUiMeta {
  const seed = pickTagSeed(post);
  const author = AUTHORS[seed % AUTHORS.length];
  const firstTag = TAG_POOL[seed % TAG_POOL.length];
  const secondTag = TAG_POOL[(seed + 3) % TAG_POOL.length];
  const comments = (seed % 18) + 2;

  return {
    author,
    tags: firstTag === secondTag ? [firstTag] : [firstTag, secondTag],
    comments,
  };
}
