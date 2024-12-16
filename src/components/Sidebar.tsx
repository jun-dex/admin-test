import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import menuData from "@/data/menuData";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded shadow-lg"
        aria-label="Toggle Sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* 사이드 바 */}
      <aside className={
        `fixed top-0 left-0 w-64 bg-gray-900 text-white flex flex-col h-screen transition-transform transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 z-40`
      }>
        <div className="p-4 font-bold text-lg border-b border-gray-700">
          <Link href="/">
            DexLab Admin
          </Link>
        </div>
        {/* 사이드바 메뉴 */}
        <nav className="flex-1">
          {menuData.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {t(section.title)}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className={
                        `block px-4 py-2 rounded cursor-pointer 
                        ${router.pathname === item.link ?
                          "bg-gray-700 text-white font-bold"
                          : "text-gray-200 hover:bg-gray-700 hover:text-white"}`
                      }>
                        {t(item.name)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      {/* 사이드바 오버레이 (작은 화면용도) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;