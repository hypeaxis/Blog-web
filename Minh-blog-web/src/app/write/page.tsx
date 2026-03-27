"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function parseTags(input: string) {
  return input
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export default function WritePostPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tagsText, setTagsText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const callbackUrl = useMemo(() => encodeURIComponent("/write"), []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (submitting) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          tags: parseTags(tagsText),
        }),
      });

      const payload = (await response.json()) as {
        post?: { id: string };
        error?: string;
      };

      if (!response.ok || !payload.post) {
        setError(payload.error ?? "Không thể tạo bài viết.");
        return;
      }

      router.push("not-found");
    } catch {
      setError("Có lỗi xảy ra khi gửi bài viết.");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "loading") {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="text-sm text-gray-500">Đang kiểm tra phiên đăng nhập...</p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Viết bài mới</h1>
        <p className="mt-3 text-sm text-gray-600">Bạn cần đăng nhập để tạo bài viết.</p>
        <Link
          href={`/login?callbackUrl=${callbackUrl}`}
          className="mt-6 inline-flex rounded bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
        >
          Đăng nhập với Google
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Tạo bài viết</h1>
      <p className="mt-3 text-sm text-gray-600">
        Đăng bài với tài khoản {session.user.email ?? session.user.name}.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Tiêu đề</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none ring-orange-500 focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Tóm tắt</span>
          <textarea
            value={excerpt}
            onChange={(event) => setExcerpt(event.target.value)}
            required
            rows={3}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none ring-orange-500 focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Nội dung</span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            rows={12}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none ring-orange-500 focus:ring-2"
            placeholder="Mỗi đoạn cách nhau 1 dòng trống"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Tags</span>
          <input
            value={tagsText}
            onChange={(event) => setTagsText(event.target.value)}
            placeholder="Ví dụ: Next.js, TypeScript, Career"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none ring-orange-500 focus:ring-2"
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-60"
        >
          {submitting ? "Đang đăng..." : "Đăng bài"}
        </button>
      </form>
    </main>
  );
}
