import Link from "next/link";

type PostCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

export default function PostCard({ id, title, excerpt, date }: PostCardProps) {
  return (
    <article className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-xl font-semibold">
        <Link href={`/blog/${id}`}>{title}</Link>
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{excerpt}</p>
      <time className="mt-4 block text-xs text-gray-500 dark:text-gray-400">{date}</time>
    </article>
  );
}
