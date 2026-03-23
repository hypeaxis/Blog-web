# Gợi ý Layout và Giao diện (Mockup) - Dự án Blog MVP

## 1. Phong cách Thiết kế (Design Language)
* **Phong cách:** Tối giản (Minimalism) kết hợp hơi hướng công nghệ (Tech/Startup vibe).
* **Màu sắc chủ đạo:** * Light Mode: Trắng / Xám nhạt.
  * Dark Mode: Xám đậm / Đen (ví dụ: `bg-slate-900` của Tailwind).
  * Màu nhấn (Accent color): Xanh dương (`blue-600`) hoặc Xanh ngọc (`teal-500`) cho nút bấm và link liên kết.
* **Typography:** * Văn bản thường: Font không chân (Sans-serif) như `Inter` hoặc `Roboto`.
  * Code/Logo: Font `Monospace` để tạo cảm giác kỹ thuật, gọn gàng.
* **Thành phần dùng chung (Global Layout):**
  * **Header (Navbar):** Cố định (Sticky) ở trên cùng. Gồm Logo (trái); Menu điều hướng (Home, Blog, About) và nút chuyển Dark/Light mode (phải).
  * **Footer:** Nằm dưới cùng, chứa thông tin bản quyền và icon mạng xã hội (GitHub, LinkedIn).

---

## 2. Mockup Giao diện Chi tiết

### 2.1. Trang chủ (Homepage)
* **Hero Section (Phần chào mừng):**
  * **Tiêu đề (H1):** Lời chào mạnh mẽ, ví dụ: *"Xây dựng Sản phẩm, Khám phá Dữ liệu & Hành trình Khởi nghiệp"*.
  * **Đoạn văn phụ:** Tóm tắt ngắn gọn về bản thân và mục đích của blog.
  * **Call-to-Action (CTA):** Hai nút bấm: **"Đọc Blog"** (Màu nhấn, nổi bật) và **"Xem Dự án"** (Màu nền trong suốt, viền xám).
* **Featured Projects (Dự án nổi bật):**
  * Layout lưới (Grid 2 cột).
  * Hiển thị dạng Card: Ví dụ *Ứng dụng Đấu giá Trực tuyến* hoặc *Phân tích dữ liệu mạng* (kèm mô tả tech stack và tiến độ).
* **Recent Posts (Bài viết mới nhất):**
  * Hiển thị 3 bài blog mới nhất dưới dạng Card (bao gồm: Tiêu đề, ngày đăng, trích dẫn ngắn).

### 2.2. Trang Danh sách Blog (Blog List)
* **Header Trang:** Tiêu đề "Tất cả bài viết" và Thanh tìm kiếm (Search bar) lớn nằm ngay dưới.
* **Category Tags (Bộ lọc chủ đề):**
  * Hàng ngang các nút tag để lọc nhanh: `Tất cả`, `Web Dev`, `Startup`, `Data Science`, `Japanese`, `Game Design`.
* **Blog Grid:**
  * Lưới 2 hoặc 3 cột chứa các thẻ bài viết (Blog Card).
  * Mỗi Card gồm: Thumbnail (tùy chọn), Tag chủ đề (có màu nền nổi), Tiêu đề (in đậm), Ngày tháng, và Thời gian đọc dự kiến (*VD: 5 min read*).
* **Pagination (Phân trang):** Nút "Trang trước", "Trang sau" hoặc "Tải thêm" ở cuối danh sách.

### 2.3. Trang Chi tiết Bài viết (Blog Detail)
* **Article Header:**
  * Breadcrumb điều hướng: `Home > Blog > Tên Chuyên Mục`.
  * Tiêu đề bài viết (H1 - Kích thước lớn).
  * Thông tin Meta: Avatar nhỏ, Tên tác giả (Tuấn Minh), Ngày xuất bản.
* **Nội dung chính (Body):**
  * Căn giữa trang, giới hạn chiều rộng (`max-w-3xl`) để tối ưu góc nhìn của mắt khi đọc dòng dài.
  * Heading (H2, H3) có khoảng cách lề (margin) rộng rãi.
  * Code blocks có nền tối (Syntax highlighting) kèm nút "Copy code" ở góc.
* **Article Footer:**
  * Các thẻ tag liên quan đến bài viết.
  * Cụm nút chia sẻ mạng xã hội (Share on Facebook/LinkedIn).
  * Điều hướng nhanh: Nút "Bài viết trước" / "Bài viết tiếp theo".