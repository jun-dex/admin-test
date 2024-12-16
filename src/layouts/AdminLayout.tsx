import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* 왼쪽 사이드바 */}
      <Sidebar />

      {/* 메인 컨텐츠 페이지 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 */}
        <Navbar />
        {/* 페이지 컨텐츠 */}
        <main className="p-6 bg-gray-100 flex-1 md:ml-64">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
