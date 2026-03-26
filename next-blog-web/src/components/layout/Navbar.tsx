import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="container mx-auto flex items-center justify-end px-4 py-4">
        <div className="flex items-center gap-4 text-sm">
          <Link href="/">Trang chủ</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
