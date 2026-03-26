# Tài liệu dự án Blog Web (Next.js)

Thư mục `docs/` chứa tài liệu đặc tả và guideline giao diện cho codebase `next-blog-web`.

## Mục tiêu

- Chuẩn hóa yêu cầu chức năng và phạm vi bài tập.
- Đồng bộ UI guideline với những gì đã triển khai trong app.
- Mở rộng chức năng: Tích hợp luồng Xác thực người dùng (Authentication) hoàn chỉnh về mặt giao diện và Session logic.
- Giúp theo dõi phạm vi hiện tại trước khi mở rộng thêm tính năng.

## Trạng thái triển khai

- **Routes nội dung:** `/`, `/about`, `/blog`, `/blog/[id]`, `/_not-found`.
- **Routes xác thực (New):** `/login`, `/register`.
- Layout dùng chung có `Navbar` + `Footer`. Navbar đã hỗ trợ hiển thị trạng thái đăng nhập/đăng xuất.
- Trang chủ và trang blog áp dụng layout 2 cột (main + sidebar).
- Form đăng nhập/đăng ký áp dụng layout 1 cột, center card.
- Dữ liệu đang dùng Mock Data nội bộ cho cả Bài viết (`mockPosts`) và Người dùng (`mockUsers`).
- Xử lý Session thông qua NextAuth.js.

## Tech stack

- Next.js App Router (v16)
- React + TypeScript
- Tailwind CSS v4
- **NextAuth.js (Auth.js) cho Authentication**
- Lucide React (Icons)

## Tài liệu liên quan

- Đặc tả yêu cầu phần mềm: `docs/SRS.md`
- Guideline giao diện: `docs/UI_Design_Guideline.md`
- README dự án chạy code: `next-blog-web/README.md`