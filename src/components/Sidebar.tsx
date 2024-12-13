import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import menuData from "@/data/menuData";

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen">
      <div className="p-4 font-bold text-lg border-b border-gray-700">DexLab Admin</div>
      {/* 사이드바 메뉴 */}
      <nav className="flex-1">
        {menuData.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <span className={
                      `block px-4 py-2 rounded cursor-pointer 
                        ${router.pathname === item.link ?
                        "bg-gray-700 text-white font-bold"
                        : "text-gray-200 hover:bg-gray-700 hover:text-white"}`
                    }>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;