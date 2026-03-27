import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBlog",
  description: "Blog thực hành Next.js App Router - Minimalist Professional UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {/* Bọc toàn bộ ứng dụng bằng AuthProvider */}
        <AuthProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-gray-200 bg-gray-50 px-6 py-6 text-center text-xs text-gray-500 sm:px-10">
            © 2026 DevBlog. All rights reserved. · Powered by Next.js
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}