import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    firebaseToken?: string;
    googleIdToken?: string;
  }
  interface JWT {
    accessToken?: string;
    firebaseToken?: string;
    googleIdToken?: string;
  }
}
