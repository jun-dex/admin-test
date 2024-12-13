import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const StatsPage = () => {
  return <div className="text-gray-900">통계 페이지</div>;
};

StatsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // 번역 데이터 로드
    },
  };
}

export default StatsPage;
