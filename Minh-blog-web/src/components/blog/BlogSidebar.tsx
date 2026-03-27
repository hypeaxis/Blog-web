import Link from "next/link";
import type { BlogPost } from "@/types/post";

type BlogSidebarProps = {
  basePath: "/" | "/blog";
  categories: string[];
  popularPosts: BlogPost[];
  currentQuery?: string;
  currentCategory?: string;
};

function buildUrl(
  basePath: "/" | "/blog",
  query?: string,
  category?: string,
) {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  if (category) {
    params.set("category", category);
  }

  const queryString = params.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
}

export default function BlogSidebar({
  basePath,
  categories,
  popularPosts,
  currentQuery,
  currentCategory,
}: BlogSidebarProps) {

  return (
    <aside className="space-y-8 lg:sticky lg:top-8">
      <section className="border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Tìm kiếm
        </h2>
        <form action={basePath} method="get" className="mt-4">
          <div className="flex items-center border border-gray-200 bg-white px-3 py-2">
            <span className="text-orange-600">⌕</span>
            <input
              type="text"
              name="q"
              defaultValue={currentQuery}
              placeholder="Tìm bài viết..."
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
          {currentCategory ? (
            <input type="hidden" name="category" value={currentCategory} />
          ) : null}
          <button
            type="submit"
            className="mt-3 w-full rounded border border-orange-600 px-3 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Áp dụng
          </button>
        </form>
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
                  href={`/blog/${encodeURIComponent(post.id)}`}
                  className="text-sm font-semibold text-gray-800 hover:text-orange-600"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                </p>
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
          <li>
            <Link
              href={buildUrl(basePath, currentQuery)}
              className={
                currentCategory
                  ? "hover:text-orange-600"
                  : "font-semibold text-orange-600"
              }
            >
              Tất cả
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={buildUrl(basePath, currentQuery, category)}
                className={
                  category === currentCategory
                    ? "font-semibold text-orange-600"
                    : "hover:text-orange-600"
                }
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
