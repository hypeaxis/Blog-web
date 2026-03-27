# Dự án Bài tập Blog Web

## 1. Phong cách thiết kế (Design Language)
- **Phong cách:** Tối giản chuyên nghiệp (Minimalist Professional), ưu tiên nội dung và khả năng đọc.
- **Màu sắc chủ đạo:**
  - Nền chính: trắng (`bg-white`).
  - Chữ chính: đen/xám đậm (`text-black`, `text-gray-800`).
  - Màu nhấn: cam (`text-orange-600`, `bg-orange-600`) cho CTA, hover, focus.
  - Border/nền phụ: xám nhạt (`border-gray-200`, `bg-gray-50`).
- **Typography:** sans-serif sạch sẽ, heading đậm và rõ ràng.

## 2. Thành phần dùng chung
- **Navbar:**
  - Bên trái: logo blog.
  - Bên phải: menu Home/About/Blog + trạng thái auth.
  - Chưa đăng nhập: nút login.
  - Đã đăng nhập: tên user + nút `Write` + `Logout`.
- **Footer:** thông tin bản quyền + Powered by Next.js.
- **Responsive:**
  - Mobile: ưu tiên 1 cột.
  - Desktop: Home và Blog list sử dụng 2 cột (main + sidebar).

## 3. Quy chuẩn input/form
- Input: nền trắng, border xám, bo góc nhẹ, dễ nhìn/dễ bấm.
- Focus: ring màu cam.
- Label: `text-sm`, dễ đọc, cách khối input rõ ràng.
- Error text: màu đỏ, ngắn gọn, đặt gần trường lỗi.

## 4. Mockup giao diện theo trang

### 4.1 Trang chủ (`/`)
- Intro section trên cùng.
- Khối `Featured Posts` và `Recent Posts` hiển thị từ dữ liệu thực.
- Sidebar gồm:
  - Search form (có nút áp dụng).
  - Popular posts.
  - Categories (link lọc).
- Khi có filter (`q`, `category`) cần hiển thị trạng thái bộ lọc đang áp dụng.

### 4.2 Trang blog list (`/blog`)
- Tiêu đề lớn "Tất cả bài viết".
- Danh sách post card đầy đủ: title, meta, excerpt, tags.
- Sidebar giống trang chủ.
- Pagination hoạt động thật (Prev/Next + chỉ số trang).
- Nếu không có kết quả, hiển thị empty state rõ ràng.

### 4.3 Trang chi tiết bài viết (`/blog/[id]`)
- Layout 1 cột, tập trung vào nội dung bài.
- Header bài: title lớn + ngày + tác giả.
- Nội dung chia đoạn để đọc.
- Footer bài: tags + nút chia sẻ UI.
- Có link quay lại danh sách.

### 4.4 Trang login (`/login`)
- Card căn giữa màn hình, gọn gàng.
- Nút chính: `Continue with Google`.
- Hỗ trợ callback URL để quay lại trang trước đó.
- Trạng thái loading trong quá trình xử lý session.

### 4.5 Trang viết bài (`/write`)
- Nếu chưa đăng nhập: hiển thị thông báo và CTA đăng nhập.
- Nếu đã đăng nhập: hiển thị form tạo bài với các trường:
  - Title
  - Excerpt
  - Content
  - Tags (nhập dạng comma-separated)
- Submit thành công: redirect đến trang chi tiết bài vừa tạo.

## 5. Hướng dẫn UI cho search và category
- Search và category phải đồng bộ với URL query params:
  - `q`
  - `category`
  - `page`
- Khi click category, giữ nguyên query `q` nếu đang có.
- Có mục `Tất cả` để bỏ lọc category nhanh.

## 6. Khả năng deploy trên Vercel
- UI cần luôn có fallback trong trường hợp data storage chậm/lỗi.
- Không phụ thuộc vào ghi file local trên serverless runtime.
- Các thông báo lỗi phải thân thiện, không lộ stack trace cho end-user.