import ClientBlogList from "@/components/blog/ClientBlogList";

type BlogListPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
};

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const { q, category, page: rawPage } = await searchParams;
  const query = q?.trim();
  const selectedCategory = category?.trim();
  const page = Math.max(1, Number(rawPage ?? "1") || 1);

  return <ClientBlogList query={query} selectedCategory={selectedCategory} page={page} />;
}
