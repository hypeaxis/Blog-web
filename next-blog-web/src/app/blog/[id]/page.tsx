import Link from "next/link";
import { notFound } from "next/navigation";
import { mockPosts } from "@/data/mockPosts";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = mockPosts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium uppercase tracking-wide hover:underline"
      >
        ← Quay lại
      </Link>

      <header className="mt-8 border-b border-gray-200 pb-8 sm:pb-10">
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight leading-tight sm:text-5xl lg:text-7xl">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm text-gray-500">{post.date}</time>
      </header>

      <article className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-900 sm:text-xl">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
