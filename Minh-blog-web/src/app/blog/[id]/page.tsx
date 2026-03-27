import Link from "next/link";
import { notFound } from "next/navigation";
import { mockPosts } from "@/data/mockPosts";
import { getPostUiMeta } from "@/data/postUi";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = mockPosts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  const meta = getPostUiMeta(post);

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-orange-600 hover:underline"
      >
        ← Quay lại danh sách
      </Link>

      <header className="mt-8 border-b border-gray-200 pb-8 sm:pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          {post.date} · {meta.author}
        </p>
      </header>

      <div className="mt-8 h-64 border border-gray-200 bg-gray-50" />

      <article className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <footer className="mt-12 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-600">Tags: {meta.tags.join(", ")}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-orange-600 hover:text-orange-600">
            Facebook
          </button>
          <button className="border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-orange-600 hover:text-orange-600">
            Twitter
          </button>
          <button className="border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-orange-600 hover:text-orange-600">
            Linkedin
          </button>
        </div>
      </footer>
    </main>
  );
}
