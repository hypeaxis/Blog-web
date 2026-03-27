import ClientBlogDetail from "@/components/blog/ClientBlogDetail";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id).trim();

  return <ClientBlogDetail id={decodedId} />;
}
