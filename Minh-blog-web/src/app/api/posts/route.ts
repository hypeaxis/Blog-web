import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createPost, listPosts } from "@/lib/posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "10");

  const result = await listPosts({
    q,
    category,
    page: Number.isFinite(page) ? page : 1,
    limit: Number.isFinite(limit) ? limit : 10,
  });

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    title?: string;
    excerpt?: string;
    content?: string;
    tags?: string[];
  };

  try {
    const post = await createPost(
      {
        title: body.title ?? "",
        excerpt: body.excerpt ?? "",
        content: body.content ?? "",
        tags: Array.isArray(body.tags) ? body.tags : [],
      },
      {
        name: session.user.name,
        email: session.user.email,
      },
    );

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to create post",
      },
      { status: 400 },
    );
  }
}
