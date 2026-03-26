import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-orange-600 sm:text-4xl"
        >
          DevBlog
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <Link href="/" className="font-medium hover:text-orange-600">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-orange-600">
            About
          </Link>
          <Link href="/blog" className="font-medium hover:text-orange-600">
            Blog
          </Link>
          <button
            aria-label="Search"
            className="font-semibold text-orange-600 hover:text-orange-700"
          >
            ⌕
          </button>
          <Link href="#" className="text-xs font-semibold hover:text-orange-600">
            FB
          </Link>
          <Link href="#" className="text-xs font-semibold hover:text-orange-600">
            TW
          </Link>
          <Link href="#" className="text-xs font-semibold hover:text-orange-600">
            GH
          </Link>
        </div>
      </nav>
    </header>
  );
}
