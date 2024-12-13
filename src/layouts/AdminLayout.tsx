import React from "react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* 왼쪽 사이드바 */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        hello
      </aside>

      {/* 메인 컨텐츠 페이지 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 */}
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <div>검색 바 또는 페이지 제목</div>
          <div>프로필 및 알림</div>
        </header>

        {/* 페이지 컨텐츠 */}
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
