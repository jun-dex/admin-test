import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";

const UsersPage = () => {
  return <div className="text-gray-900">사용자 관리 페이지</div>;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default UsersPage;
