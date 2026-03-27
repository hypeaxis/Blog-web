import Link from "next/link";
import type { BlogPost } from "@/types/post";

type PostCardProps = Pick<
  BlogPost,
  "id" | "title" | "excerpt" | "createdAt" | "authorName" | "tags"
>;

export default function PostCard({
  id,
  title,
  excerpt,
  createdAt,
  authorName,
  tags,
}: PostCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("vi-VN");

  return (
    <article className="border-b border-gray-200 pb-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">
        <Link href={`/blog/${id}`} className="hover:text-orange-600">
          {title}
        </Link>
      </h2>
      <p className="mt-3 text-sm text-gray-500">
        {formattedDate} · {authorName}
      </p>
      <p className="mt-5 text-base leading-relaxed text-gray-700">
        {excerpt}
      </p>
      <p className="mt-5 text-sm text-gray-500">
        Tags: {tags.length > 0 ? tags.join(", ") : "General"}
      </p>
    </article>
  );
}
