import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mt-10">
        Chào mừng đến với Blog thực hành Next.js
      </h1>
      <p className="text-center text-gray-600 mt-4">
        Đây là bài tập cơ bản để luyện App Router, layout dùng chung và dynamic route theo id.
      </p>
      <div className="mt-8 flex justify-center">
        <Link
          href="/blog"
          className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Xem danh sách Blog
        </Link>
      </div>
    </main>
  );
}