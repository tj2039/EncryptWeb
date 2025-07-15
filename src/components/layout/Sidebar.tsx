import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/menuItems";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* 모바일용 배경 오버레이 */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 사이드바 */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r shadow-md p-4 z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">🔐 Encrypt Tools</h2>
          <button
            onClick={toggleDarkMode}
            className="text-sm px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* 메뉴 렌더링 */}
        {MENU_ITEMS.map((group) => (
          <div key={group.category} className="mb-4">
            <h3 className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
              {group.category}
            </h3>

            {group.items.map((menu) => (
              <div key={menu.label} className="ml-2 mb-1">
                <button
                  onClick={() => toggleMenu(menu.label)}
                  className="w-full text-left px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {menu.label} {openMenus[menu.label] ? "▲" : "▼"}
                </button>

                {openMenus[menu.label] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {menu.children.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsOpen(false)} // 메뉴 클릭 시 닫기
                        className={`block px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-800 ${
                          location.pathname === sub.path
                            ? "bg-blue-200 dark:bg-blue-700 font-bold"
                            : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;