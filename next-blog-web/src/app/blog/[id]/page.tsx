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
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Quay lại danh sách
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <time className="mt-2 block text-sm text-gray-600">{post.date}</time>
      <article className="mt-6 space-y-4 text-gray-800">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
