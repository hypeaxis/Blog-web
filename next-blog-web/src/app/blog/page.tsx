import PostCard from "@/components/blog/PostCard";
import { mockPosts } from "@/data/mockPosts";

export default function BlogListPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-5xl font-bold tracking-tighter leading-none sm:text-6xl lg:text-7xl">
        Tất cả bài viết
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 sm:mt-14 lg:grid-cols-2">
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
