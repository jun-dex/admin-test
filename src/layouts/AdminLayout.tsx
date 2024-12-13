import React from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex h-screen">
      {/* 왼쪽 사이드바 */}
      <Sidebar />

      {/* 메인 컨텐츠 페이지 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 */}
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <div>검색 바 또는 페이지 제목</div>
          <div>프로필 및 알림</div>
          <div className="flex items-center space-x-4">
            {/* 언어 변경 버튼 */}
            <button
              onClick={() => switchLanguage("ko")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm rounded"
            >
              한국어
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm rounded"
            >
              English
            </button>
          </div>
        </header>

        {/* 페이지 컨텐츠 */}
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
