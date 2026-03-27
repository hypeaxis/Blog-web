"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoggedIn = Boolean(session?.user);

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

          {status === "loading" ? (
            <span className="text-xs text-gray-500">Loading...</span>
          ) : isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link
                href="/write"
                className="rounded bg-gray-900 px-3 py-1 text-xs font-semibold text-white hover:bg-black"
              >
                Write
              </Link>
              <span className="hidden text-xs text-gray-600 sm:inline">
                {session?.user?.name ?? session?.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="rounded border border-orange-600 px-3 py-1 text-xs font-semibold text-orange-600 hover:bg-orange-50"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded bg-orange-600 px-3 py-1 text-xs font-semibold text-white hover:bg-orange-700"
            >
              Login with Google
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
