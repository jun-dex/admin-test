import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    googleIdToken?: string;
    firebaseToken?: string;
  }
  interface JWT {
    accessToken?: string;
    googleIdToken?: string;
    firebaseToken?: string;
  }
}
