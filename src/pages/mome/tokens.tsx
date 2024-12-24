import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { loginUser } from "@/api/auth";

const TokenPage = () => {
  const handelOnClick = async () => {
    try {
      // API 테스트 용도
      const response = await loginUser(); // API 호출
      console.log("Login Response: ", response);
    } catch (error) {
      console.error("Login Error: ", error);
    }
  }

  return (
    <div className="text-gray-900">토큰 관리 페이지
      <div>
        <button
          onClick={handelOnClick}
        >
          테스트 버튼
        </button>
      </div>
    </div>
  );
};

TokenPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // 번역 데이터 로드
    },
  };
}

export default TokenPage;
