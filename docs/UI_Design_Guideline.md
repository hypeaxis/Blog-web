# Gợi ý Layout và Giao diện - Dự án Bài tập Blog Web

## 1. Phong cách Thiết kế (Design Language)
* **Phong cách:** Tối giản (Minimalism). Tập trung hoàn toàn vào việc dàn trang cơ bản và hiển thị văn bản rõ ràng.
* **Màu sắc chủ đạo:** 
  * Chỉ sử dụng Light Mode: Trắng / Xám nhạt (không yêu cầu làm Dark Mode cho bài tập này).
  * Màu nhấn (Accent color): Xanh dương (`blue-600`) cho các nút bấm và link liên kết.
* **Typography:** Văn bản thường sử dụng font không chân (Sans-serif) như `Inter` hoặc `Roboto`.
* **Thành phần dùng chung (Global Layout):**
  * **Header (Navbar):** Nằm ở trên cùng, gồm Logo đơn giản ở bên trái; Menu điều hướng gồm Home, Blog (đã lược bỏ các trang phụ khác).
  * **Footer:** Nằm dưới cùng, chứa thông tin bản quyền đơn giản.

---

## 2. Mockup Giao diện Chi tiết

### 2.1. Trang chủ (Homepage)
Tập trung vào việc chào mừng và điều hướng người dùng sang trang danh sách bài viết.
* **Hero Section (Phần chào mừng):**
  * **Tiêu đề (H1):** Lời chào lớn, ví dụ: *"Chào mừng đến với Blog thực hành Next.js của tôi"*.
  * **Đoạn văn phụ:** Tóm tắt ngắn gọn về bản thân và mục đích của bài tập này.
  * **Call-to-Action (CTA):** Một nút bấm duy nhất: **"Xem danh sách Blog"** (Màu nhấn, nổi bật) để chuyển trang sang `/blog`.

### 2.2. Trang Danh sách Blog (Blog List)
Hiển thị danh sách các bài viết từ mảng dữ liệu giả (Mock Data).
* **Header Trang:** Tiêu đề "Tất cả bài viết" ở góc trên.
* **Blog List / Grid:**
  * Hiển thị danh sách các thẻ bài viết dạng dọc hoặc lưới đơn giản.
  * Mỗi Card gồm: Tiêu đề (in đậm có chứa link), Ngày tháng, và một đoạn mô tả ngắn. 
  * *(Ghi chú: Đã lược bỏ thanh tìm kiếm, bộ lọc tags và phân trang để phù hợp với bài tập cơ bản).*

### 2.3. Trang Chi tiết Bài viết (Blog Detail)
Tập trung vào việc render nội dung bài viết tương ứng với URL (ID).
* **Điều hướng nhanh:** Một nút hoặc Link `"<- Quay lại danh sách"` ở góc trên cùng.
* **Article Header:** Tiêu đề bài viết (H1 - Kích thước lớn) và Ngày xuất bản.
* **Nội dung chính (Body):**
  * Căn giữa trang, giới hạn chiều rộng (`max-w-3xl`) để tối ưu góc nhìn của mắt khi đọc dòng dài.
  * Các đoạn văn (Paragraph) và Heading có khoảng cách lề (margin) rộng rãi.
  * *(Ghi chú: Đã lược bỏ các phần không cần thiết như cụm nút chia sẻ mạng xã hội, tags bài viết, bài viết tiếp theo).*