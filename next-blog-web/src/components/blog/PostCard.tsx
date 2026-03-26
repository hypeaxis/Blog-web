import Link from "next/link";

type PostCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

export default function PostCard({ id, title, excerpt, date }: PostCardProps) {
  return (
    <article>
      <h2 className="text-3xl font-bold tracking-tight leading-tight">
        <Link href={`/blog/${id}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <time className="mt-4 block text-sm text-gray-500">{date}</time>
      <p className="mt-4 text-lg leading-relaxed text-gray-900">
        {excerpt}
      </p>
    </article>
  );
}
