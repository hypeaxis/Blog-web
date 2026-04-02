"use client";

import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostCard from "@/components/blog/PostCard";
import { usePosts } from "@/hooks/usePosts";
import { normalizeTag, normalizeText } from "@/lib/utils";

type ClientBlogListProps = {
  query?: string;
  selectedCategory?: string;
  page: number;
};

const PAGE_SIZE = 6;

function buildPageUrl(page: number, query?: string, category?: string) {
  const params = new URLSearchParams();
  params.set("page", String(page));

  if (query) {
    params.set("q", query);
  }

  if (category) {
    params.set("category", category);
  }

  return `/blog?${params.toString()}`;
}

function byNewest(a: { createdAt: string }, b: { createdAt: string }) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

export default function ClientBlogList({
  query,
  selectedCategory,
  page,
}: ClientBlogListProps) {
  const { posts } = usePosts();
  const normalizedQuery = query ? normalizeText(query) : undefined;
  const normalizedCategory = selectedCategory ? normalizeText(selectedCategory) : undefined;

  const publishedPosts = [...posts]
    .filter((post) => post.status === "published")
    .sort(byNewest);

  const filteredPosts = publishedPosts.filter((post) => {
    if (normalizedQuery) {
      const searchable = `${post.title}\n${post.excerpt}\n${post.content}`.toLowerCase();
      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }

    if (normalizedCategory) {
      return post.tags.some((tag) => tag.toLowerCase() === normalizedCategory);
    }

    return true;
  });

  const categories = Array.from(
    new Set(
      publishedPosts
        .flatMap((post) => post.tags)
        .map(normalizeTag)
        .filter(Boolean),
    ),
  ).sort((a, b) => a.localeCompare(b));

  const popularPosts = publishedPosts.slice(0, 4);
  const total = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredPosts.slice(start, start + PAGE_SIZE);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Tất cả bài viết
      </h1>
      {(query || selectedCategory) && (
        <p className="mt-4 text-sm text-gray-600">
          Bộ lọc hiện tại: {query ? `Từ khóa "${query}"` : "Tất cả"}
          {selectedCategory ? ` · Category ${selectedCategory}` : ""}
        </p>
      )}

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section>
          <div className="space-y-10">
            {pageItems.length > 0 ? (
              pageItems.map((post) => <PostCard key={post.id} {...post} />)
            ) : (
              <p className="text-sm text-gray-600">Không tìm thấy bài viết phù hợp.</p>
            )}
          </div>

          <div className="mt-10 flex items-center gap-3">
            {hasPrev ? (
              <Link
                href={buildPageUrl(currentPage - 1, query, selectedCategory)}
                className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-500"
              >
                Trang trước
              </Link>
            ) : (
              <span className="border border-gray-200 px-4 py-2 text-sm font-medium text-gray-400">
                Trang trước
              </span>
            )}
            {hasNext ? (
              <Link
                href={buildPageUrl(currentPage + 1, query, selectedCategory)}
                className="border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-600 hover:text-white"
              >
                Trang sau
              </Link>
            ) : (
              <span className="border border-gray-200 px-4 py-2 text-sm font-medium text-gray-400">
                Trang sau
              </span>
            )}
            <span className="text-sm text-gray-500">
              Trang {currentPage}/{totalPages}
            </span>
          </div>
        </section>

        <BlogSidebar
          basePath="/blog"
          categories={categories}
          popularPosts={popularPosts}
          currentQuery={query}
          currentCategory={selectedCategory}
        />
      </div>
    </main>
  );
}