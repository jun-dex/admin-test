import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
  },
  callbacks: {
    async signIn({ user }) {
      const email = user.email || "";
      const allowedDomain = "dexlab.space"; // 허용할 도메인

      if (email.endsWith(`@${allowedDomain}`)) {
        return true; // 로그인 허용
      }
      return false;
    },
    async jwt({ token, account }) {
      // Google OAuth 토큰을 Firebase ID 토큰으로 교환
      // 백엔드에서 Firebase ID 토큰으로 토큰 검증 작업 진행
      if (account?.id_token) {
        try {
          // Firebase로 Google ID 토큰(Oauth 토큰) 전달
          const credential = GoogleAuthProvider.credential(account.id_token);
          const userCredential = await signInWithCredential(auth, credential);
          const firebaseIdToken = await userCredential.user.getIdToken();

          // Firebase ID 토큰을 token에 추가
          token.firebaseIdToken = firebaseIdToken;
        } catch (error) {
          console.error("Error exchanging Google token with Firebase:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      // 세션에 Firebase ID 토큰 추가
      session.accessToken = token.firebaseIdToken as string | undefined;
      return session;
    },
  },
});
