import PageLayout from "@/layouts/PageLayout";
import { useEffect, ReactElement } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/router";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  // 이미 로그인된 상태일 때 메인 페이지로 리다이렉트
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/"); // 메인 페이지로 리다이렉트
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-800 min-h-screen flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* 로고 & Sign In Slug  */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="dexlab-logo"
          src="https://www.dexlab.space/assets/symbol_withtext.5e81c415.svg"
          className="mx-auto w-48 h-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Welcome, Admin!<br />Sign in to your account
        </h2>
      </div>

      {/* Google 로그인 버튼 */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <button
          onClick={() => signIn('google')}
          className="w-full flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default LoginPage;
