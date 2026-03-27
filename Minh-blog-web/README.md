# Next.js Blog Web (Practice)

Dự án thực hành Next.js App Router với giao diện **Minimalist Professional**.

## Tính năng hiện có

- Trang chủ `/`: featured posts + recent posts + sidebar có search/category.
- Trang blog `/blog`: danh sách bài viết + lọc + phân trang.
- Trang chi tiết `/blog/[id]`: tiêu đề, tác giả, nội dung, tags.
- Trang viết bài `/write`: chỉ cho user đã đăng nhập Google.
- Trang `About` tại `/about`.
- Trang `404` custom (`not-found`).
- API posts `/api/posts` để đọc/tạo bài viết.
- Layout dùng chung: Navbar + Footer cho toàn site.

## Công nghệ

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- NextAuth (Google OAuth + JWT Session)
- In-memory data store (không DB quan hệ)

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Cấu hình môi trường

1. Tạo file env local từ mẫu:

```bash
cp .env.example .env.local
```

2. Điền giá trị thật cho các biến:
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Dữ liệu bài viết đang lưu in-memory, nên bài viết tạo mới không bền vững sau khi server restart hoặc scale.

## Scripts

- `npm run dev` — chạy môi trường phát triển
- `npm run build` — build production
- `npm run start` — chạy production sau build
- `npm run lint` — kiểm tra lint

## Deploy bằng GitHub -> Vercel

1. Push source code lên GitHub (không push `.env.local`).
2. Import repo trên Vercel.
3. Vào Project Settings -> Environment Variables và thêm toàn bộ biến trong `.env.example`.
4. Cập nhật `NEXTAUTH_URL` đúng domain production (ví dụ `https://your-app.vercel.app`).
5. Trong Google Cloud Console, thêm callback URL:
   - `https://your-app.vercel.app/api/auth/callback/google`
6. Redeploy sau khi set env.

Lưu ý bảo mật: nếu secret đã từng lộ trong quá trình dev, hãy rotate lại trước khi production.

## Cấu trúc chính

```text
next-blog-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── not-found.tsx
│   │   ├── login/page.tsx
│   │   ├── write/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── api/auth/[...nextauth]/route.ts
│   │   └── api/posts/route.ts
│   ├── components/
│   │   ├── layout/Navbar.tsx
│   │   └── blog/
│   │      ├── PostCard.tsx
│   │      └── BlogSidebar.tsx
│   ├── lib/
│   │   └── posts.ts
│   └── types/
│       └── post.ts
│   └── data/
│      ├── mockPosts.ts
│      └── postUi.ts
└── docs/
   ├── README.md
   ├── SRS.md
   └── UI_Design_Guideline.md
```
