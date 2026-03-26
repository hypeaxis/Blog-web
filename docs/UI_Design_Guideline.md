# Gợi ý Layout và Giao diện - Dự án Bài tập Blog Web (Tối giản Chuyên nghiệp)

## 1. Phong cách Thiết kế (Design Language)
* **Phong cách:** Tối giản chuyên nghiệp (Minimalist Professional). Bố cục sạch sẽ, tập trung vào nội dung và Typography rõ ràng. Cảm hứng từ `image_14.png`, nhưng đơn giản hóa layout và chuyển Navbar.
* **Màu sắc chủ đạo:** * Cảm hứng từ mã màu của `image_14.png`: Nền chính trắng tinh (`bg-white`), chữ đen (`text-black`) hoặc xám đậm (`text-gray-800`).
  * Màu điểm nhấn: Đỏ/Cam (`text-red-600` / `text-orange-600`) cho logo, nút, và các icon tương tác.
  * Màu border/nền phụ: Xám nhạt (`border-gray-200`, `bg-gray-50`).
* **Typography:** Font chữ Sans-serif sạch sẽ (ví dụ: Inter). Tiêu đề bài viết to, rõ ràng và đậm.
* **Thành phần dùng chung (Global Layout):**
  * **Header (Navbar):** Thanh ngang trên cùng.
    * **Trái:** Logo chữ 'RARETI' (hoặc tên blog giả lập 'DevBlog') lớn, màu đỏ/cam.
    * **Phải:** Menu ngang (Home, About, ...), icon Tìm kiếm (kính lúp màu đỏ/cam), và các Social icons nhỏ (Facebook, Twitter, Github, ...). (Đã chuyển từ sidebar dọc).
  * **Layout Trang:** Trên Desktop, sử dụng cấu trúc 2 cột. Cột chính bên trái to hơn hiển thị nội dung chính. Cột Sidebar bên phải nhỏ hơn hiển thị các thành phần bổ trợ. Trên Mobile, chuyển thành 1 cột danh sách dọc.
  * **Footer:** Đơn giản với thông tin bản quyền và "Powered by Next.js" (hoặc Blogger).

---

## 2. Mockup Giao diện Chi tiết

### 2.1. Trang chủ (Homepage)
* **Page Intro:** Giữ đơn giản như SRS ban đầu, nhưng áp dụng typography mới chuyên nghiệp. Tiêu đề lớn chào mừng và giới thiệu bản thân.
* **Featured Posts:** Hiển thị 2-3 bài viết nổi bật.
* **Recent Posts (Cột chính):** Danh sách dọc 3-4 bài viết mới nhất. Cấu trúc mỗi thẻ bài viết (Post Card) mô phỏng chính xác `image_14.png`.
  * **Cấu trúc mỗi Post Card:**
    1. Tiêu đề bài viết (Chữ đen, to, in đậm, hover đổi màu).
    2. Meta-info (Thời gian nhỏ, Tác giả).
    3. Ảnh bìa Thumbnail (Nếu có, nằm ngay dưới meta).
    4. Đoạn trích dẫn (Excerpt) hiển thị 2-3 dòng.
    5. Nút text "Đọc tiếp" (`border`, màu đỏ/cam, hover đổi màu).
    6. Dòng Tags và số Comments count.
* **Sidebar (Cột phải):**
  * Thanh tìm kiếm (icon kính lúp đỏ/cam).
  * Mục 'Popular Posts' (Danh sách 3-4 Thumbnail nhỏ + Tiêu đề).
  * Mục 'Categories' (Danh sách tags).

### 2.2. Trang Danh sách Blog (Blog List)
* **Header Trang:** Tiêu đề "Tất cả bài viết" với kích thước `text-5xl` hoặc `text-7xl`, `font-bold`, margin lớn ở phía trên.
* **Main Area (Cột chính):** Danh sách dọc tất cả bài viết, mỗi Post Card có cấu trúc đầy đủ và chuyên nghiệp như trong `image_14.png`.
* **Sidebar (Cột phải):** Giữ nguyên Popular Posts, Danh mục.
* **Pagination:** Nút "Trang trước", "Trang sau" ở cuối danh sách.

### 2.3. Trang Chi tiết Bài viết (Blog Detail)
* **Layout:** Chuyển sang layout 1 cột tập trung vào nội dung bài viết. (Sidebar có thể không hiển thị hoặc chỉ ở cuối).
* **Article Header:**
  * Tiêu đề bài viết kích thước lớn.
  * Meta info (Ngày, Tác giả).
* **Main Image (Optional):** Ảnh bìa lớn (Nếu có).
* **Nội dung chính:** Text rõ ràng, Heading H2/H3 đậm. Sử dụng class `prose prose-lg` (nếu dùng `@tailwindcss/typography`) để tự động làm đẹp các thẻ bên trong.
* **Footer Bài viết:** Nút "<- Quay lại danh sách", Tags, cụm nút chia sẻ mạng xã hội.