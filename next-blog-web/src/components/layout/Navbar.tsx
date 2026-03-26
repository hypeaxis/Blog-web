import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="text-4xl font-bold tracking-tighter leading-none sm:text-5xl"
        >
          Blog.
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium uppercase tracking-wide hover:underline"
        >
          Tất cả bài viết
        </Link>
      </nav>
    </header>
  );
}
