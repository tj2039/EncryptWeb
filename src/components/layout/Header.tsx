// src/components/layout/Header.tsx
import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, darkMode, toggleDarkMode }) => {
  return (
    <header
      className="sticky top-0 z-50 flex h-14 w-full items-center justify-between 
                 border-b bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 
                 md:hidden"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            <Link to="/">🔐 Encrypt Tools</Link>
        </h1>
      </div>

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;