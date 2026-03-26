# SRS - Blog Web thực hành (Next.js App Router)

## 1. Giới thiệu
### 1.1 Mục tiêu
Dự án là bài tập thực hành Next.js nhằm rèn luyện:
- Kiến trúc App Router.
- Tổ chức layout/component tái sử dụng.
- Dynamic routing cho trang chi tiết bài viết.
- Dàn trang theo phong cách **Minimalist Professional**.

### 1.2 Phạm vi
Trong phạm vi hiện tại:
- Render nội dung blog từ Mock Data.
- Điều hướng giữa các trang bằng Link client-side.
- Layout responsive 1 cột/2 cột tùy trang.
- Sidebar hiển thị search UI, popular posts, categories.

Ngoài phạm vi:
- Database/CMS thực tế.
- Chức năng tìm kiếm, lọc, phân trang backend (chỉ có UI pagination).
- Upload ảnh thật, quản trị nội dung, phân quyền người dùng.

## 2. Công nghệ sử dụng
- **Framework:** Next.js 16 (App Router, TypeScript).
- **UI:** Tailwind CSS v4.
- **Data:** Mock Data nội bộ (`src/data/mockPosts.ts`).
- **Auth Route:** Có route khung `api/auth/[...nextauth]` (chưa mở rộng nghiệp vụ trong phạm vi bài tập UI).

## 3. Yêu cầu chức năng

### 3.1 Trang chủ (`/`)
- Hiển thị phần giới thiệu ngắn về dự án.
- Hiển thị nhóm bài viết nổi bật (featured posts).
- Hiển thị danh sách bài viết gần đây (recent posts).
- Có CTA dẫn tới trang danh sách blog.
- Trên desktop: layout 2 cột (main content + sidebar).

### 3.2 Trang danh sách blog (`/blog`)
- Hiển thị toàn bộ danh sách bài viết từ Mock Data.
- Mỗi bài viết hiển thị: tiêu đề, ngày đăng, tác giả (meta), excerpt, tags.
- Có cụm nút phân trang giao diện: “Trang trước”, “Trang sau” (UI-only).
- Có sidebar ở cột phải: search UI, popular posts, categories.

### 3.3 Trang chi tiết bài viết (`/blog/[id]`)
- Đọc `id` từ URL để render đúng bài viết.
- Hiển thị header bài viết: tiêu đề, ngày đăng, tác giả.
- Hiển thị nội dung chi tiết theo từng đoạn.
- Có nút “Quay lại danh sách”.
- Có footer bài viết: tags và nhóm nút chia sẻ (UI-only).
- Nếu không có bài viết theo `id`, trả về trang 404.

### 3.4 Trang About (`/about`)
- Hiển thị mô tả ngắn về dự án/blog.

### 3.5 Trang 404 (`/_not-found`)
- Hiển thị thông báo không tìm thấy trang và link quay về trang chủ.

## 4. Yêu cầu UI/UX
- Phong cách tối giản chuyên nghiệp, nền sáng, chữ rõ ràng.
- Navbar trên cùng: logo blog, menu điều hướng, search icon, social links.
- Footer chung toàn site: bản quyền + “Powered by Next.js”.
- Màu nhấn dùng tông đỏ/cam cho CTA và trạng thái hover quan trọng.
- Responsive:
  - Mobile: ưu tiên 1 cột.
  - Desktop: trang chủ và blog list dùng 2 cột.

## 5. Cấu trúc thư mục chính

```text
next-blog-web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/page.tsx
│  │  └─ api/auth/[...nextauth]/route.ts
│  ├─ components/
│  │  ├─ layout/Navbar.tsx
│  │  └─ blog/
│  │     ├─ PostCard.tsx
│  │     └─ BlogSidebar.tsx
│  └─ data/
│     ├─ mockPosts.ts
│     └─ postUi.ts
└─ docs/
   ├─ README.md
   ├─ SRS.md
   └─ UI_Design_Guideline.md
```