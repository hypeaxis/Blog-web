import Link from "next/link";
import { getCategories, getPopularPosts } from "@/data/postUi";

export default function BlogSidebar() {
  const popularPosts = getPopularPosts(4);
  const categories = getCategories();

  return (
    <aside className="space-y-8 lg:sticky lg:top-8">
      <section className="border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Tìm kiếm
        </h2>
        <div className="mt-4 flex items-center border border-gray-200 bg-white px-3 py-2">
          <span className="text-orange-600">⌕</span>
          <input
            type="text"
            placeholder="Tìm bài viết..."
            className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </section>

      <section className="border border-gray-200 p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Popular Posts
        </h2>
        <div className="mt-4 space-y-4">
          {popularPosts.map((post) => (
            <article key={post.id} className="flex gap-3">
              <div className="h-12 w-12 shrink-0 border border-gray-200 bg-gray-100" />
              <div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-semibold text-gray-800 hover:text-orange-600"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-xs text-gray-500">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border border-gray-200 p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Categories
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {categories.map((category) => (
            <li key={category}>
              <button className="hover:text-orange-600">{category}</button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
