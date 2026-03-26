# SRS - Blog Web thực hành (Next.js App Router)

## 1. Giới thiệu
### 1.1 Mục tiêu
Dự án là bài tập thực hành Next.js nhằm rèn luyện:
- Kiến trúc App Router.
- Tổ chức layout/component tái sử dụng.
- Dynamic routing cho trang chi tiết bài viết.
- Tích hợp xác thực người dùng (Authentication) cơ bản với NextAuth.js.

### 1.2 Phạm vi
**Trong phạm vi hiện tại:**
- Render nội dung blog từ Mock Data.
- Điều hướng giữa các trang bằng Link client-side.
- Layout responsive 1 cột/2 cột tùy trang.
- Sidebar hiển thị search UI, popular posts, categories.
- Luồng Đăng nhập / Đăng ký cơ bản (UI & Logic Session) dùng NextAuth.

**Ngoài phạm vi:**
- Database/CMS thực tế cho bài viết (vẫn dùng Mock).
- Chức năng tìm kiếm, lọc, phân trang backend (chỉ có UI pagination).
- Upload ảnh thật, quản trị nội dung.
- Phân quyền (Role-based) phức tạp (chỉ dừng ở mức Có/Không đăng nhập).

## 2. Công nghệ sử dụng
- **Framework:** Next.js 16 (App Router, TypeScript).
- **UI:** Tailwind CSS v4, Lucide React (Icons).
- **Data:** Mock Data nội bộ (`src/data/mockPosts.ts`, `mockUsers.ts`).
- **Authentication:** NextAuth.js (Auth.js v5) sử dụng Credentials Provider.

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

### 3.5 Xác thực người dùng (Authentication)
- **Navbar State:** 
  - Khách: Hiển thị nút "Đăng nhập" dẫn tới `/login`.
  - Đã đăng nhập: Hiển thị tên/avatar người dùng và nút "Đăng xuất" (kết thúc session).
- **Trang Đăng nhập (`/login`):**
  - Form nhập Email và Password.
  - Xử lý xác thực qua NextAuth (so khớp với Mock Users).
  - Hiển thị lỗi nếu sai thông tin.
- **Trang Đăng ký (`/register`):**
  - Form nhập Tên, Email, Password, Xác nhận Password.
  - Validate form cơ bản ở client-side.
  - (Mô phỏng) Thêm user vào Mock Data và chuyển hướng sang Login.

### 3.6 Trang 404 (`/_not-found`)
- Hiển thị thông báo không tìm thấy trang và link quay về trang chủ.

## 4. Yêu cầu UI/UX
- Phong cách tối giản chuyên nghiệp, nền sáng, chữ rõ ràng.
- Navbar trên cùng: logo blog, menu điều hướng, search icon, **trạng thái user**.
- Footer chung toàn site: bản quyền + “Powered by Next.js”.
- Màu nhấn dùng tông đỏ/cam cho CTA, trạng thái hover, và active focus của form inputs.
- Form xác thực thiết kế dạng Card ra giữa màn hình.
- Responsive:
  - Mobile: ưu tiên 1 cột.
  - Desktop: trang chủ và blog list dùng 2 cột, auth dùng 1 cột căn giữa.

## 5. Cấu trúc thư mục chính

```text
next-blog-web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ (auth)/           <-- Nhóm route xác thực
│  │  │  ├─ login/page.tsx
│  │  │  └─ register/page.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/page.tsx
│  │  └─ api/auth/[...nextauth]/route.ts <-- Endpoint xử lý NextAuth
│  ├─ components/
│  │  ├─ layout/Navbar.tsx
│  │  ├─ blog/
│  │  │  ├─ PostCard.tsx
│  │  │  └─ BlogSidebar.tsx
│  │  └─ auth/             <-- Components cho form
│  │     ├─ LoginForm.tsx
│  │     └─ RegisterForm.tsx
│  ├─ lib/
│  │  └─ auth.ts           <-- Cấu hình NextAuth
│  └─ data/
│     ├─ mockPosts.ts
│     ├─ mockUsers.ts      <-- Data giả lập user
│     └─ postUi.ts
└─ docs/
   ├─ README.md
   ├─ SRS.md
   └─ UI_Design_Guideline.md