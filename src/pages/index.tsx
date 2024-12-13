import AdminLayout from "@/layouts/AdminLayout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div className="bg-slate-400">
      Welcome DexLab Admin!!
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Home;

