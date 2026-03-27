import BlogSidebar from "@/components/blog/BlogSidebar";
import PostCard from "@/components/blog/PostCard";
import { mockPosts } from "@/data/mockPosts";

export default function BlogListPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Tất cả bài viết
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section>
          <div className="space-y-10">
            {mockPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-500">
              Trang trước
            </button>
            <button className="border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-600 hover:text-white">
              Trang sau
            </button>
          </div>
        </section>

        <BlogSidebar />
      </div>
    </main>
  );
}
