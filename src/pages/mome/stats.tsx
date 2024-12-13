import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";

const StatsPage = () => {
  return <div className="text-gray-900">통계 페이지</div>;
};

StatsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default StatsPage;
