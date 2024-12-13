import AdminLayout from "@/layouts/AdminLayout";
import { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-slate-400">
      <h1>{t("welcome")}</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // 번역 데이터 로드
    },
  };
}

export default Home;
