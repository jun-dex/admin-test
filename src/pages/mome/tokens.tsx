import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";

const TokenPage = () => {
  return <div className="text-gray-900">토큰 관리 페이지</div>;
};

TokenPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default TokenPage;
