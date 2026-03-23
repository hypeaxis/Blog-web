#  Next.js MVP Blog 

Một nền tảng blog cá nhân theo hướng tối giản (Minimalism) và tối ưu hiệu suất. Dự án được xây dựng để ghi lại và chia sẻ các kiến thức về Web Development, Data Science, kỹ thuật mạng lưới và hành trình xây dựng các dự án Startup.

Dự án này đóng vai trò là một MVP (Minimum Viable Product), tập trung vào trải nghiệm đọc, tốc độ tải trang cực nhanh (SSG/SSR) và tối ưu hóa SEO.

##  Tính năng nổi bật (Features)

- **Tốc độ siêu tốc:** Được xây dựng trên Next.js App Router với React Server Components.
- **Quản lý nội dung bằng Markdown:** Hỗ trợ viết bài bằng MDX, cho phép nhúng trực tiếp các React component vào bài viết.
- **Thiết kế Tối giản & Hiện đại:** Giao diện được styling bằng Tailwind CSS, hỗ trợ responsive hoàn hảo trên mọi thiết bị.
- **Tối ưu SEO:** Tự động tạo metadata, Open Graph tags cho từng bài viết.
- **Chế độ hiển thị:** Hỗ trợ Dark/Light mode thân thiện với mắt người đọc.

##  Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** MDX (Markdown + JSX)
- **Deployment:** [Vercel](https://vercel.com/) (Khuyên dùng)

## Cấu trúc Thư mục Chính

```text
next-blog-mvp/
├── src/
│   ├── app/          # Chứa các route chính của Next.js (Home, Blog, About)
│   ├── components/   # Các UI Component dùng chung (Navbar, Footer, PostCard)
│   ├── content/      # Nơi lưu trữ toàn bộ các bài viết dạng .mdx
│   └── lib/          # Các hàm tiện ích (VD: đọc/parse file MDX)
└── public/           # Chứa các tài nguyên tĩnh (Hình ảnh, favicon)