import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PostCard from "@/components/blog/PostCard";
import { getCategories, getPopularPosts, listPosts } from "@/lib/posts";

type HomePageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { q, category } = await searchParams;
  const query = q?.trim();
  const selectedCategory = category?.trim();

  const [{ items: filteredPosts }, categories, popularPosts] = await Promise.all([
    listPosts({ q: query, category: selectedCategory, page: 1, limit: 12 }),
    getCategories(),
    getPopularPosts(4),
  ]);

  const featuredPosts = filteredPosts.slice(0, 3);
  const recentPosts = filteredPosts.slice(0, 4);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Đây là dự án test.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
          Dự án được hoàn thành với mục đích học tập và thực hành các tính năng của Next.js 13, đặc biệt là App Router. Nội dung của blog sẽ xoay quanh các chủ đề về lập trình, công nghệ và phát triển web.
        </p>
        {(query || selectedCategory) && (
          <p className="mt-4 text-sm text-gray-600">
            Bộ lọc hiện tại: {query ? `Từ khóa "${query}"` : "Tất cả"}
            {selectedCategory ? ` · Category ${selectedCategory}` : ""}
          </p>
        )}
      </section>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section className="space-y-10">
          <div className="border border-gray-200 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              Featured Posts
            </p>
            <div className="mt-5 space-y-6">
              {featuredPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-2xl font-bold text-gray-900 hover:text-orange-600"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Recent Posts</h2>
            <div className="mt-6 space-y-8">
              {recentPosts.length > 0 ? (
                recentPosts.map((post) => <PostCard key={post.id} {...post} />)
              ) : (
                <p className="text-sm text-gray-600">Không tìm thấy bài viết phù hợp.</p>
              )}
            </div>
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-600 hover:text-white"
              >
                Xem tất cả bài viết
              </Link>
            </div>
          </div>
        </section>

        <BlogSidebar
          basePath="/"
          categories={categories}
          popularPosts={popularPosts}
          currentQuery={query}
          currentCategory={selectedCategory}
        />
      </div>
    </main>
  );
}