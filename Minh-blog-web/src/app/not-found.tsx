import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-orange-600">404</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight leading-none text-gray-900 sm:text-7xl">
        Không tìm thấy trang.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
        Liên kết bạn truy cập có thể không còn tồn tại hoặc đã được thay đổi.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-base font-semibold text-orange-600 hover:underline">
          Quay về trang chủ →
        </Link>
      </div>
    </main>
  );
}