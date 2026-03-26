# Tài liệu Yêu cầu Bài tập - Dự án Blog Web Cơ bản (Next.js)

## 1. Giới thiệu dự án
### 1.1. Mục đích
Dự án này là một bài tập thực hành nhỏ dành cho người mới bắt đầu học Next.js. Mục tiêu chính là làm quen với kiến trúc **App Router**, cách tạo các trang tĩnh, dynamic routing (định tuyến động) và cách tổ chức layout cơ bản.

### 1.2. Phạm vi dự án
Bài tập chỉ yêu cầu xây dựng chính xác **3 trang web** liên kết với nhau.
- **Có trong phạm vi:** Tạo giao diện cơ bản, hiển thị dữ liệu bài viết giả (Mock Data) hoặc đọc file tĩnh đơn giản, có khả năng click chuyển trang qua lại mượt mà.
- **Nằm ngoài phạm vi:** Không yêu cầu kết nối Database, không cần đăng nhập, không yêu cầu tối ưu SEO, phân trang, bộ lọc tìm kiếm hay giao diện phức tạp (Dark/Light mode).

## 2. Công nghệ sử dụng
- **Framework:** Next.js (App Router).
- **Styling:** CSS cơ bản hoặc Tailwind CSS (chỉ dùng các class cơ bản để dàn trang, tạo lưới).
- **Nguồn dữ liệu:** Dùng mảng Object JavaScript (Mock Data) lưu trực tiếp trong code để thực hành.

## 3. Yêu cầu Chức năng (Functional Requirements)

Hệ thống bao gồm 3 trang chính:

### 3.1. Trang chủ (Homepage - `/`)
- Hiển thị lời chào mừng (Ví dụ: "Chào mừng đến với Blog thực hành của tôi").
- Một đoạn giới thiệu ngắn về bản thân.
- Có một nút (Button) hoặc đường link (Link) nổi bật để người dùng bấm chuyển sang trang Danh sách bài viết.

### 3.2. Trang Danh sách Blog (Blog List - `/blog`)
- Hiển thị danh sách các bài viết hiện có.
- Dữ liệu mỗi bài viết cần hiển thị tối thiểu: Tiêu đề, một đoạn mô tả ngắn, và ngày tháng.
- Khi người dùng click vào Tiêu đề của một bài viết, hệ thống sẽ chuyển hướng sang Trang Chi tiết của bài viết đó.

### 3.3. Trang Chi tiết Bài viết (Blog Detail - `/blog/[id]`)
- Đọc tham số trên URL (id) để hiển thị đúng nội dung của bài viết được chọn.
- Nội dung bao gồm: Tiêu đề bài viết (to, rõ ràng), Ngày đăng, và Nội dung chi tiết (các đoạn văn bản).
- Bắt buộc có một nút "Quay lại danh sách" để trở về trang Blog List.

## 4. Yêu cầu Giao diện & Trải nghiệm (UI/UX)
- Có một thanh điều hướng chung (Navbar) xuất hiện ở tất cả các trang, chứa link bấm về "Trang chủ" và "Blog".
- Bố cục (Layout) gọn gàng, nội dung căn giữa màn hình để dễ đọc.
- Không yêu cầu phải đẹp xuất sắc, nhưng các thành phần (tiêu đề, đoạn văn, link) phải phân biệt rõ ràng.

## 5. Cấu trúc Thư mục Thực hành (Cơ bản)

```text
my-practice-blog/
├─ app/
│  ├─ layout.tsx              # Chứa Navbar và giao diện chung
│  ├─ page.tsx                # 1. Trang chủ (Homepage)
│  ├─ globals.css             # File CSS cấu hình cơ bản
│  └─ blog/
│     ├─ page.tsx             # 2. Trang danh sách bài viết (Blog List)
│     └─ [id]/
│        └─ page.tsx          # 3. Trang chi tiết bài viết (Blog Detail)
│
└─ data/
   └─ mockPosts.ts            # Nơi chứa mảng dữ liệu giả các bài blog