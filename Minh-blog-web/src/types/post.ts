export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  authorName: string;
  authorEmail: string;
  createdAt: string;
  updatedAt: string;
  status: "published" | "draft";
};

export type PostListOptions = {
  q?: string;
  category?: string;
  page?: number;
  limit?: number;
};

export type PostListResult = {
  items: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type CreatePostInput = {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
};
