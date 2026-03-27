import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id).trim();

  if (!decodedId) {
    notFound();
  }

  const post = await getPostById(decodedId);

  if (!post) {
    notFound();
  }
  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);
  const formattedDate = new Date(post.createdAt).toLocaleDateString("vi-VN");

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
          {formattedDate} · {post.authorName}
        </p>
      </header>

      <img
        src="https://picsum.photos/400"
        alt={post.title}
        className="mt-8 h-64 w-full rounded-md border border-gray-200 object-cover sm:h-72 lg:h-80"
      />

      <article className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <footer className="mt-12 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-600">
          Tags: {post.tags.length > 0 ? post.tags.join(", ") : "General"}
        </p>
      </footer>
    </main>
  );
}
