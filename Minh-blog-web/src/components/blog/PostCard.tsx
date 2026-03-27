import Link from "next/link";
import { getPostUiMeta } from "@/data/postUi";

type PostCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

export default function PostCard({ id, title, excerpt, date }: PostCardProps) {
  const meta = getPostUiMeta({
    id,
    title,
    excerpt,
    date,
    content: [],
  });

  return (
    <article className="border-b border-gray-200 pb-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">
        <Link href={`/blog/${id}`} className="hover:text-orange-600">
          {title}
        </Link>
      </h2>
      <p className="mt-3 text-sm text-gray-500">
        {date} · {meta.author}
      </p>
      <p className="mt-5 text-base leading-relaxed text-gray-700">
        {excerpt}
      </p>
      <p className="mt-5 text-sm text-gray-500">
        Tags: {meta.tags.join(", ")} 
      </p>
    </article>
  );
}
