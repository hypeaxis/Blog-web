# Next.js Practice Blog (Basic)

Dự án bài tập Next.js cơ bản, tập trung vào App Router, layout dùng chung và dynamic route theo `id`.

## Phạm vi

- Có 3 trang chính:
	- `/` (Homepage)
	- `/blog` (Blog list)
	- `/blog/[id]` (Blog detail)
- Dữ liệu bài viết dùng **Mock Data** trong code.
- Không dùng database, không dùng MDX, không có dark mode/search/filter/pagination.

## Công nghệ

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Chạy dự án

```bash
npm install
npm run dev
```

Mở trình duyệt tại http://localhost:3000

## Scripts

- `npm run dev` - chạy môi trường phát triển
- `npm run lint` - kiểm tra lint
- `npm run build` - build production
- `npm run start` - chạy production sau khi build

## Cấu trúc chính

```text
next-blog-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [id]/page.tsx
│   ├── components/
│   │   ├── blog/
│   │   └── layout/
│   └── data/
│       └── mockPosts.ts
└── docs/
		├── README.md
		├── SRS.md
		└── UI_Design_Guideline.md
```
