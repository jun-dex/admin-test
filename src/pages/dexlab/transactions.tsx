import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TransactionsPage = () => {
  return <div className="text-gray-900">트랜잭션 관리 페이지</div>;
};

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // 번역 데이터 로드
    },
  };
}

export default TransactionsPage;

