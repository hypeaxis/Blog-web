import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt", // Không dùng DB nên lưu session bằng JWT Token
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider) {
        token.provider = account.provider;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.image = (token.picture as string) ?? session.user.image;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };