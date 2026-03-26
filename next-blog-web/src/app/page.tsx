import Link from "next/link";
import { mockPosts } from "@/data/mockPosts";

export default function Home() {
  const heroPost = mockPosts[0];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <section>
        <h1 className="text-7xl font-bold tracking-tighter leading-none sm:text-8xl">
          Blog.
        </h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Bài tập thực hành Next.js App Router.
        </p>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-10 sm:mt-20 sm:pt-12">
        <Link
          href={`/blog/${heroPost.id}`}
          className="text-4xl font-bold tracking-tight leading-tight hover:underline sm:text-5xl"
        >
          {heroPost.title}
        </Link>
        <time className="mt-5 block text-sm text-gray-500">{heroPost.date}</time>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-900 sm:text-xl">
          {heroPost.excerpt}
        </p>
      </section>

      <div className="mt-12 sm:mt-14">
        <Link
          href="/blog"
          className="text-base font-semibold tracking-tight hover:underline"
        >
          Xem tất cả bài viết →
        </Link>
      </div>
    </main>
  );
}