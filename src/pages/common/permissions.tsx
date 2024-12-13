import AdminLayout from "@/layouts/AdminLayout";
import { ReactElement } from "react";

const PermissionsPage = () => {
  return <div className="text-gray-900">사용자 권한 관리 페이지</div>;
};

PermissionsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default PermissionsPage;
