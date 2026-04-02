import ClientBlogDetail from "@/components/blog/ClientBlogDetail";
import { normalizePostId } from "@/lib/utils";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const decodedId = normalizePostId(decodeURIComponent(id));

  return <ClientBlogDetail id={decodedId} />;
}
