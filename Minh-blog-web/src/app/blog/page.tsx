import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostCard from "@/components/blog/PostCard";
import { getCategories, getPopularPosts, listPosts } from "@/lib/posts";

type BlogListPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
};

const PAGE_SIZE = 6;

function buildPageUrl(
  page: number,
  query?: string,
  category?: string,
) {
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

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const { q, category, page: rawPage } = await searchParams;
  const query = q?.trim();
  const selectedCategory = category?.trim();
  const page = Math.max(1, Number(rawPage ?? "1") || 1);

  const [postResult, categories, popularPosts] = await Promise.all([
    listPosts({ q: query, category: selectedCategory, page, limit: PAGE_SIZE }),
    getCategories(),
    getPopularPosts(4),
  ]);

  const hasPrev = postResult.page > 1;
  const hasNext = postResult.page < postResult.totalPages;

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
            {postResult.items.length > 0 ? (
              postResult.items.map((post) => <PostCard key={post.id} {...post} />)
            ) : (
              <p className="text-sm text-gray-600">Không tìm thấy bài viết phù hợp.</p>
            )}
          </div>

          <div className="mt-10 flex items-center gap-3">
            {hasPrev ? (
              <Link
                href={buildPageUrl(postResult.page - 1, query, selectedCategory)}
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
                href={buildPageUrl(postResult.page + 1, query, selectedCategory)}
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
              Trang {postResult.page}/{postResult.totalPages}
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
