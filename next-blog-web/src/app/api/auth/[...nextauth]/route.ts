import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Tài khoản mặc định",
      credentials: {
        username: { label: "Tên đăng nhập (gõ: admin)", type: "text", placeholder: "admin" },
        password: { label: "Mật khẩu (gõ: 123456)", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return { id: "1", name: "Admin User", email: "admin@blog.com" };
        }
        return null; // Trả về null nếu sai tài khoản
      }
    })
  ]
};

const handler = NextAuth(authOptions);

// Bắt buộc phải export cả GET và POST cho App Router
export { handler as GET, handler as POST };