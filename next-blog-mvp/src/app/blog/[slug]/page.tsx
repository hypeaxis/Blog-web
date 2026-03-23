type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Chi tiết bài viết</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">Slug: {slug}</p>
    </main>
  );
}
