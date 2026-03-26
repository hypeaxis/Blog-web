# Next.js Blog Web (Practice)

Dự án thực hành Next.js App Router với giao diện **Minimalist Professional**, dùng Mock Data để hiển thị nội dung blog.

## Tính năng hiện có

- Trang chủ `/`: intro + featured posts + recent posts + sidebar.
- Trang blog `/blog`: danh sách bài viết + sidebar + pagination UI.
- Trang chi tiết `/blog/[id]`: tiêu đề, meta, nội dung, tags, share actions.
- Trang `About` tại `/about`.
- Trang `404` custom (`not-found`).
- Layout dùng chung: Navbar + Footer cho toàn site.

## Công nghệ

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- NextAuth route scaffold (`/api/auth/[...nextauth]`)

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Scripts

- `npm run dev` — chạy môi trường phát triển
- `npm run build` — build production
- `npm run start` — chạy production sau build
- `npm run lint` — kiểm tra lint

## Cấu trúc chính

```text
next-blog-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── not-found.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── api/auth/[...nextauth]/route.ts
│   ├── components/
│   │   ├── layout/Navbar.tsx
│   │   └── blog/
│   │      ├── PostCard.tsx
│   │      └── BlogSidebar.tsx
│   └── data/
│      ├── mockPosts.ts
│      └── postUi.ts
└── docs/
   ├── README.md
   ├── SRS.md
   └── UI_Design_Guideline.md
```
