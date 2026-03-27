# SRS - Blog Web thực hành (Next.js App Router)

## 1. Giới thiệu
### 1.1 Mục tiêu
Dự án là bài tập thực hành Next.js nhằm rèn luyện:
- Kiến trúc App Router và chia layout/component tái sử dụng.
- Dynamic routing cho trang chi tiết bài viết theo id (`/blog/[id]`).
- Tích hợp xác thực Google OAuth với NextAuth (JWT session, không dùng DB quan hệ).
- Xây luồng tạo bài viết sau đăng nhập.
- Triển khai tìm kiếm, lọc category và phân trang trên danh sách bài viết.

### 1.2 Phạm vi
**Trong phạm vi hiện tại:**
- Trang Home, Blog list, Blog detail, About, Login, Write post.
- Xác thực Google qua NextAuth.
- Tạo bài viết qua API sau khi đăng nhập.
- Search + category filter thông qua URL query params.
- Dữ liệu bài viết theo id, có tags và tác giả.
- Deploy lên Vercel, không dùng database quan hệ.

**Ngoài phạm vi:**
- Dashboard quản trị CMS đầy đủ (duyệt bài, role phức tạp).
- Upload media lớn và xử lý ảnh nâng cao.
- Hệ thống bình luận/reaction realtime.
- Full-text search engine chuyên dụng.

## 2. Công nghệ sử dụng
- **Framework:** Next.js 16 (App Router, TypeScript).
- **UI:** Tailwind CSS v4.
- **Authentication:** NextAuth.js với Google Provider, strategy `jwt`.
- **Data layer:** Service `posts` lưu dữ liệu in-memory.
- **Seed dữ liệu:** lấy từ `mockPosts` khi khởi tạo runtime.

## 3. Yêu cầu chức năng

### 3.1 Trang chủ (`/`)
- Hiển thị phần intro.
- Hiển thị featured posts và recent posts.
- Hiển thị sidebar: search, popular posts, categories.
- Hỗ trợ query `q` và `category` để lọc bài viết trên trang chủ.

### 3.2 Trang danh sách blog (`/blog`)
- Hiển thị danh sách bài viết có phân trang.
- Hỗ trợ lọc theo từ khóa (`q`) và category (`category`).
- Hiển thị trạng thái khi không có kết quả.
- Sidebar đồng bộ với bộ lọc hiện tại.

### 3.3 Trang chi tiết bài viết (`/blog/[id]`)
- Đọc `id` từ URL để lấy đúng bài viết.
- Hiển thị tiêu đề, ngày đăng, tác giả, nội dung, tags.
- Có nút quay lại danh sách.
- Nếu không tìm thấy bài viết theo `id`, trả về 404.

### 3.4 Trang About (`/about`)
- Hiển thị mô tả ngắn về dự án/blog.

### 3.5 Xác thực người dùng
- **Navbar state:**
  - Khách: hiển thị nút login dẫn tới `/login`.
  - Đã đăng nhập: hiển thị thông tin user, nút `Write`, nút logout.
- **Trang Login (`/login`):**
  - Đăng nhập bằng Google OAuth.
  - Hỗ trợ callback URL để quay lại trang cần tiếp tục.

### 3.6 Tạo bài viết (`/write`)
- Chỉ user đã đăng nhập mới tạo được bài viết.
- Form gồm: title, excerpt, content, tags.
- Submit gọi API `/api/posts` (POST).
- Tạo thành công sẽ điều hướng sang `/blog/{id}`.

### 3.7 API bài viết (`/api/posts`)
- **GET:** trả về danh sách bài viết theo `q`, `category`, `page`, `limit`.
- **POST:** tạo bài viết mới, yêu cầu phiên đăng nhập hợp lệ.

### 3.8 Trang 404 (`/_not-found`)
- Hiển thị thông báo không tìm thấy trang và link quay về trang chủ.

## 4. Yêu cầu phi chức năng
- **Responsive:**
  - Mobile ưu tiên 1 cột.
  - Desktop Home/Blog sử dụng layout 2 cột.
- **Bảo mật:**
  - Không commit `.env.local`.
  - Quản lý secret qua Vercel Environment Variables.
- **Vận hành:**
  - Build và lint pass trước deploy.
  - Dữ liệu tạo mới không đảm bảo tồn tại bền vững sau khi scale/restart serverless.

## 5. Cấu trúc thư mục chính (cập nhật)

```text
Minh-blog-web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ login/page.tsx
│  │  ├─ write/page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/page.tsx
│  │  └─ api/
│  │     ├─ auth/[...nextauth]/route.ts
│  │     └─ posts/route.ts
│  ├─ components/
│  │  ├─ layout/Navbar.tsx
│  │  └─ blog/
│  │     ├─ PostCard.tsx
│  │     └─ BlogSidebar.tsx
│  ├─ lib/
│  │  └─ posts.ts
│  ├─ types/
│  │  └─ post.ts
│  └─ data/
│     ├─ mockPosts.ts
│     └─ postUi.ts
└─ docs/
   ├─ README.md
   ├─ SRS.md
   └─ UI_Design_Guideline.md
```

## 6. Tiêu chí hoàn thành
- Đăng nhập Google thành công trên local và production.
- Tạo bài viết mới thành công khi đã đăng nhập.
- Bài viết mới xuất hiện trên Home/Blog list và mở được trang detail theo id.
- Search/category hoạt động đúng theo URL query params.
- Build production thành công và deploy được trên Vercel.