# Gợi ý Layout và Giao diện - Dự án Bài tập Blog Web (Text-only Typography)

## 1. Phong cách Thiết kế (Design Language)
* **Phong cách:** Tối giản tuyệt đối (Minimalism). Lược bỏ hoàn toàn hình ảnh, chỉ dùng Typography (Nghệ thuật xếp chữ) làm điểm nhấn chính.
* **Màu sắc chủ đạo:** * Nền trắng (`bg-white`), chữ đen (`text-black`) hoặc xám đậm (`text-slate-900`).
  * Các đường viền (border) dùng màu xám thật nhạt (`border-gray-200`) để phân cách.
* **Typography:**
  * Font chữ mặc định của Tailwind (Inter).
  * **Đặc trưng:** Tiêu đề cực lớn, in đậm (`font-bold`), khoảng cách chữ hẹp (`tracking-tighter`). Chữ chính là thành phần trang trí cho web.
* **Thành phần dùng chung (Global Layout):**
  * **Header (Navbar):** Tiêu đề "Blog." cực to ở góc trái, liên kết về trang chủ. Góc phải là link "Tất cả bài viết".
  * **Footer:** Đơn giản với một dòng text bản quyền nhỏ ở giữa.

---

## 2. Mockup Giao diện Chi tiết

### 2.1. Trang chủ (Homepage)
* **Page Intro:** Một dòng Header lớn trên cùng: **"Blog."** cực to (`text-8xl font-bold tracking-tighter`) kết hợp với một câu mô tả nhỏ bên dưới: *"Bài tập thực hành Next.js App Router."*
* **Hero Post (Bài viết nổi bật - Hiển thị bài đầu tiên):**
  * Không dùng ảnh bìa. 
  * Tiêu đề bài viết hiển thị kích thước lớn (`text-4xl` hoặc `text-5xl`), hover có gạch chân.
  * Ngay bên dưới là Ngày đăng (`text-gray-500`) và đoạn trích dẫn (Excerpt) chữ to rõ ràng (`text-lg`).
* **Call-to-Action:** Nút text "Xem tất cả bài viết ->" đơn giản để điều hướng sang trang `/blog`.

### 2.2. Trang Danh sách Blog (Blog List)
* **Header Trang:** Tiêu đề "Tất cả bài viết" với kích thước `text-6xl` hoặc `text-7xl`, `font-bold`, margin lớn ở phía trên.
* **Blog Grid:**
  * Layout lưới 2 cột trên Desktop (`grid-cols-2`), 1 cột trên Mobile.
  * **Cấu trúc mỗi Bài viết (Text Card):**
    1. Tiêu đề bài viết (`text-3xl`, in đậm, hover gạch chân).
    2. Ngày đăng (`text-gray-500` format nhỏ).
    3. Đoạn trích ngắn (Excerpt) hiển thị 2-3 dòng.
    4. *Lưu ý: Không dùng thẻ bao quanh (không có border card hay shadow), chỉ dùng khoảng cách lề (margin/padding) để tạo không gian thở (whitespace) giữa các bài.*

### 2.3. Trang Chi tiết Bài viết (Blog Detail)
* **Article Header:**
  * Nút "<- Quay lại" ở trên cùng.
  * Tiêu đề bài viết: Căn trái, kích thước cực lớn (`text-5xl` đến `text-7xl`), `leading-tight`.
  * Ngày đăng: Nằm ngay dưới tiêu đề, màu xám nhẹ. 
  * Kẻ một đường line mỏng ngang qua (`border-b pb-8`) để ngăn cách với nội dung.
* **Nội dung chính (Body):**
  * Căn giữa hoặc căn trái, giới hạn chiều rộng (`max-w-2xl` hoặc `max-w-3xl`) để dễ đọc.
  * Text nội dung to (`text-lg` hoặc `text-xl`), khoảng cách dòng rộng (`leading-relaxed`).
  * *Mẹo:* Sử dụng class `prose prose-lg` (nếu dùng `@tailwindcss/typography`) để tự động làm đẹp các thẻ bên trong.