# Next.js Practice Blog (Basic)

Đây là tài liệu tổng quan cho bài tập thực hành Next.js mức cơ bản, tập trung vào App Router, layout dùng chung, và dynamic route cho trang chi tiết bài viết.

## Mục tiêu

- Làm quen với cấu trúc dự án Next.js App Router.
- Xây dựng luồng điều hướng giữa các trang cơ bản.
- Render danh sách bài viết từ dữ liệu giả hoặc file tĩnh đơn giản.
- Đọc tham số `id` để hiển thị đúng bài viết chi tiết.

## Phạm vi bài tập

Trong phạm vi:
- 3 trang chính: Trang chủ (`/`), Danh sách blog (`/blog`), Chi tiết bài viết (`/blog/[id]`).
- Có `Navbar` dùng chung để chuyển trang.
- Giao diện rõ ràng, dễ đọc, bố cục gọn.

Ngoài phạm vi:
- Database, đăng nhập, phân quyền.
- SEO nâng cao (OG/Twitter Card/sitemap/robots).
- Dark/Light mode, search/filter/pagination.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** CSS cơ bản hoặc [Tailwind CSS](https://tailwindcss.com/)
- **Data source:** Mock Data hoặc file tĩnh đơn giản

## Cấu trúc thư mục tham chiếu

```text
next-blog-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout chung + Navbar/Footer
│   │   ├── page.tsx             # Trang chủ
│   │   └── blog/
│   │       ├── page.tsx         # Danh sách bài viết
│   │       └── [id]/page.tsx    # Chi tiết bài viết
│   ├── components/
│   │   ├── layout/
│   │   └── blog/
│   └── data/                    # Mock data cho bài viết
└── public/
```

## Tài liệu liên quan

- Chi tiết yêu cầu chức năng: `docs/SRS.md`
- Gợi ý giao diện: `docs/UI_Design_Guideline.md`