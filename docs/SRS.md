# Tài liệu Đặc tả Yêu cầu Phần mềm (SRS) - Dự án MVP Blog Web

## 1. Giới thiệu (Introduction)
### 1.1. Mục đích (Purpose)
Tài liệu này đặc tả các yêu cầu chức năng và phi chức năng cho website blog cá nhân/kỹ thuật phiên bản MVP. Mục tiêu là làm rõ phạm vi, hành vi hệ thống, tiêu chí chất lượng và định hướng kỹ thuật để nhóm phát triển có thể triển khai thống nhất, giảm sai lệch giữa yêu cầu và sản phẩm thực tế.
### 1.2. Phạm vi dự án (Project Scope)
Dự án được triển khai dưới dạng MVP, tập trung vào:
- Xuất bản và hiển thị nội dung bài viết tĩnh từ Markdown/MDX.
- Tối ưu tốc độ tải trang (ưu tiên render phía server/static generation).
- Tối ưu SEO kỹ thuật và metadata để dễ lập chỉ mục trên công cụ tìm kiếm.

Ngoài phạm vi MVP:
- Hệ thống tài khoản người dùng (đăng ký/đăng nhập/phân quyền động).
- Bình luận thời gian thực hoặc moderation workflow phức tạp.
- E-commerce, thanh toán, membership, newsletter automation nâng cao.
### 1.3. Định nghĩa và Viết tắt (Definitions & Acronyms)
- SSR (Server-Side Rendering): HTML được render trên server tại thời điểm request.
- SSG (Static Site Generation): Trang được build sẵn thành file tĩnh trước khi deploy.
- CSR (Client-Side Rendering): Giao diện được render chủ yếu trên trình duyệt bằng JavaScript.
- SEO (Search Engine Optimization): Tập hợp kỹ thuật tối ưu khả năng hiển thị trên công cụ tìm kiếm.
- MDX (Markdown + JSX): Định dạng cho phép viết Markdown kết hợp component React.
- MVP (Minimum Viable Product): Phiên bản sản phẩm tối thiểu để đưa vào sử dụng sớm với tính năng cốt lõi.

## 2. Tổng quan Hệ thống (Overall Description)
### 2.1. Phân quyền Người dùng (User Classes and Characteristics)
Hệ thống có 2 nhóm người dùng chính:

1) Guest/Reader
- Không cần đăng nhập để truy cập nội dung.
- Có thể đọc danh sách bài viết và chi tiết bài viết.
- Có thể tìm kiếm bài theo tiêu đề, lọc theo tags.
- Có thể chuyển đổi giao diện Dark/Light mode.

2) Admin/Author
- Quản lý nội dung thông qua repository (không có CMS UI trong MVP).
- Viết/chỉnh sửa bài bằng file Markdown/MDX trong thư mục content.
- Cập nhật metadata bài viết (title, description, date, tags, cover image, slug).
### 2.2. Môi trường Hoạt động (Operating Environment)
- Hỗ trợ trình duyệt hiện đại: Chrome, Safari, Edge (2 phiên bản gần nhất).
- Responsive cho các breakpoint chính: Mobile, Tablet, Desktop.
- Triển khai production trên nền tảng Vercel.
- Môi trường phát triển cục bộ: Node.js LTS, npm/pnpm/yarn.
### 2.3. Tech Stack (Công nghệ sử dụng)
- Next.js (App Router) cho routing, data fetching và render chiến lược SSR/SSG.
- Tailwind CSS cho hệ thống style tiện dụng và tối ưu hiệu năng build.
- MDX để quản lý và render nội dung bài viết.
- Vercel cho CI/CD và hosting tối ưu cho Next.js.

## 3. Yêu cầu Chức năng (Functional Requirements)
### 3.1. Tính năng Trang chủ (Homepage)
- Hiển thị Hero section gồm tiêu đề blog, mô tả ngắn và CTA điều hướng đến danh sách bài viết.
- Hiển thị khu vực Featured Posts: tối đa N bài viết nổi bật (xác định bằng metadata).
- Hiển thị khu vực Recent Posts: danh sách bài mới nhất sắp xếp theo ngày giảm dần.
- Mỗi card bài viết hiển thị tối thiểu: tiêu đề, mô tả ngắn, ngày đăng, tags chính, ảnh đại diện (nếu có).
### 3.2. Tính năng Danh sách Bài viết (Blog List & Pagination)
- Trang blog list hiển thị bài viết dạng lưới (grid).
- Cung cấp phân trang theo page number hoặc cơ chế Load more cho MVP.
- Mỗi lần tải thêm/trang mới phải đảm bảo thứ tự bài theo ngày đăng giảm dần.
- URL thân thiện SEO (ví dụ: /blog, /blog?page=2).
### 3.3. Tính năng Chi tiết Bài viết (Blog Detail)
- Render nội dung bài từ file MDX theo slug.
- Hỗ trợ đầy đủ markdown cơ bản: heading, bold, italic, blockquote, list, link, image.
- Hỗ trợ code block với syntax highlighting rõ ràng theo ngôn ngữ lập trình.
- Hiển thị metadata bài viết: tiêu đề, ngày đăng, tags, thời gian đọc ước tính (nếu có).
- Trường hợp slug không tồn tại phải trả về trang 404 chuẩn.
### 3.4. Tính năng Phân loại & Tìm kiếm (Categories/Tags & Search)
- Cho phép lọc danh sách bài viết theo 1 hoặc nhiều tags.
- Tìm kiếm cục bộ theo tiêu đề bài viết (client-side cho MVP).
- Kết quả lọc/tìm kiếm phản hồi nhanh và có trạng thái “không tìm thấy” rõ ràng.
- URL có thể phản ánh trạng thái lọc/tìm kiếm để hỗ trợ chia sẻ liên kết (khuyến nghị cho MVP).

## 4. Yêu cầu Phi chức năng (Non-Functional Requirements)
### 4.1. Hiệu năng (Performance)
- Ưu tiên đạt mức “Good” cho các chỉ số Core Web Vitals trên thiết bị phổ biến.
- Mục tiêu First Contentful Paint (FCP) dưới 1.5 giây trong điều kiện mạng chuẩn.
- Tối ưu hình ảnh tự động (responsive image, lazy loading, định dạng tối ưu).
- Hạn chế JavaScript phía client không cần thiết để giảm bundle size.
### 4.2. SEO & Metadata
- Tự động sinh `sitemap.xml` và `robots.txt` khi build/deploy.
- Mỗi trang và mỗi bài viết có metadata riêng: title, description, canonical URL.
- Hỗ trợ Open Graph/Twitter Card động theo từng bài viết để chia sẻ mạng xã hội.
- Cấu trúc heading semantic và URL thân thiện SEO.
### 4.3. Giao diện (UI/UX)
- Giao diện tối giản, tập trung vào khả năng đọc nội dung.
- Hỗ trợ chuyển đổi Dark/Light mode mượt mà, giữ trạng thái theo phiên/người dùng.
- Tránh hiện tượng FOUC khi tải trang lần đầu.
- Đảm bảo độ tương phản và khả năng truy cập cơ bản (a11y) cho văn bản và thành phần tương tác.
### 4.4. Khả năng mở rộng (Scalability)
- Tách biệt rõ lớp hiển thị, dữ liệu nội dung, và tiện ích dùng chung.
- Kiến trúc thư mục linh hoạt để mở rộng sang:
	- Component tương tác phức tạp (ví dụ chart, widget kỹ thuật).
	- Tích hợp nguồn dữ liệu ngoài/Headless CMS.
	- Bổ sung tính năng tìm kiếm nâng cao hoặc analytics.

## 5. Cấu trúc Thư mục Dự kiến (Project Structure)
```text
blog-web/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                      # Homepage
│  ├─ globals.css
│  ├─ blog/
│  │  ├─ page.tsx                   # Blog list + pagination/load more
│  │  ├─ [slug]/
│  │  │  └─ page.tsx                # Blog detail
│  │  └─ loading.tsx
│  ├─ tags/
│  │  └─ [tag]/
│  │     └─ page.tsx                # Filter theo tag
│  ├─ sitemap.ts                    # Tạo sitemap.xml
│  ├─ robots.ts                     # Tạo robots.txt
│  └─ not-found.tsx
├─ components/
│  ├─ ui/
│  │  ├─ button.tsx
│  │  ├─ card.tsx
│  │  └─ pagination.tsx
│  ├─ blog/
│  │  ├─ hero.tsx
│  │  ├─ featured-posts.tsx
│  │  ├─ recent-posts.tsx
│  │  ├─ post-card.tsx
│  │  ├─ post-content.tsx
│  │  ├─ tag-filter.tsx
│  │  └─ search-box.tsx
│  └─ theme/
│     └─ theme-toggle.tsx
├─ content/
│  └─ posts/
│     ├─ hello-world.mdx
│     └─ nextjs-mvp-blog.mdx
├─ lib/
│  ├─ mdx.ts                        # Parse/serialize MDX
│  ├─ posts.ts                      # Đọc metadata, sort, filter, paginate
│  ├─ seo.ts                        # Tạo metadata/OG helpers
│  └─ utils.ts
├─ public/
│  ├─ images/
│  └─ og/
├─ styles/
│  └─ prose.css                     # Optional markdown prose styling
├─ types/
│  └─ post.ts
├─ next.config.ts
├─ tailwind.config.ts
├─ package.json
└─ tsconfig.json
```

Ghi chú:
- Nội dung bài viết được quản lý trong `content/posts` để phù hợp mô hình static-first của MVP.
- Tách `lib/posts.ts` và `lib/seo.ts` để dễ chuyển sang CMS hoặc data source khác trong tương lai.