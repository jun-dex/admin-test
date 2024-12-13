import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const UsersPage = () => {
  return <div className="text-gray-900">사용자 관리 페이지</div>;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // 번역 데이터 로드
    },
  };
}

export default UsersPage;
