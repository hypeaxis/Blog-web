import PostCard from "@/components/blog/PostCard";

const demoPosts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Bài viết đầu tiên của blog MVP.",
    date: "2026-03-20",
  },
];

export default function BlogListPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
