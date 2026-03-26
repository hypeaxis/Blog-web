# Tài liệu dự án Blog Web (Next.js)

Thư mục `docs/` chứa tài liệu đặc tả và guideline giao diện cho codebase `next-blog-web`.

## Mục tiêu

- Chuẩn hóa yêu cầu chức năng và phạm vi bài tập.
- Đồng bộ UI guideline với những gì đã triển khai trong app.
- Giúp theo dõi phạm vi hiện tại trước khi mở rộng thêm tính năng.

## Trạng thái triển khai hiện tại

- Các route đang có: `/`, `/about`, `/blog`, `/blog/[id]`, `/_not-found`.
- Layout dùng chung có `Navbar` + `Footer`.
- Trang chủ và trang blog áp dụng layout 2 cột (main + sidebar).
- Sidebar gồm search UI, popular posts, categories.
- Dữ liệu đang dùng Mock Data nội bộ.

## Tech stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4

## Tài liệu liên quan

- Đặc tả yêu cầu phần mềm: `docs/SRS.md`
- Guideline giao diện: `docs/UI_Design_Guideline.md`
- README dự án chạy code: `next-blog-web/README.md`