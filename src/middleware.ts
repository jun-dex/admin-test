import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionToken =                                             // NextAuth 세션 토큰 확인
    request.cookies.get("next-auth.session-token")?.value ||        // 기본 쿠키 이름
    request.cookies.get("__Secure-next-auth.session-token")?.value; // 보안 쿠키 이름 (프로덕션)

  // 로그인이 되어 있지 않은 경우 로그인 페이지로 리다이렉트
  if (!sessionToken && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 이미 로그인된 상태에서 /login 페이지에 접근 시 메인 페이지로 리다이렉트
  if (sessionToken && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next(); // 정상 접근 허용
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    "/",
    "/dexlab/:path*",
    "/mome/:path*"
  ], // 보호할 경로 설정
};
