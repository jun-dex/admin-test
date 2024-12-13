import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";

const TransactionsPage = () => {
  return <div className="text-gray-900">트랜잭션 관리 페이지</div>;
};

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default TransactionsPage;

