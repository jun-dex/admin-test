import { ReactElement } from "react";
import AdminLayout from "@/layouts/AdminLayout";

const WalletPage = () => {
  return <div className="text-gray-900">지갑 관리 페이지</div>;
};

WalletPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default WalletPage;

