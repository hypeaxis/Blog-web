import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold">
          Blog MVP
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
