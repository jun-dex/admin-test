import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
  },
  callbacks: {
    async signIn({ user }) {
      console.log("Sigin In");
      const email = user.email || "";
      const allowedDomain = "dexlab.space"; // 허용할 도메인

      if (email.endsWith(`@${allowedDomain}`)) {
        return true; // 로그인 허용
      }
      return false;
    },
    async jwt({ token, account }) {
      if (account) {
        console.log("account: ", account);
        const credential = GoogleAuthProvider.credential(account.id_token, account.access_token);
        const userCredential = await signInWithCredential(auth, credential);
        const firebaseToken = await userCredential.user.getIdToken(true);   // Firebase ID Token 반환

        token.googleIdToken = account.id_token;
        token.accessToken = account.access_token;
        token.firebaseToken = firebaseToken;                                // Firebase ID Token 추가;
      }

      return token;
    },
    async session({ session, token }) {
      session.googleIdToken = token.googleIdToken as string | undefined;    // Google ID Token
      session.accessToken = token.accessToken as string | undefined;        // Google Access Token
      session.firebaseToken = token.firebaseToken as string;                // Firebase ID Token
      return session;
    },
  },
});
