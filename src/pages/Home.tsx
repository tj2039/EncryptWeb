// src/pages/Home.tsx

import React from "react";
import { MENU_ITEMS } from "../constants/menuItems";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">온라인 암호화 도구</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        다양한 인코딩, 해싱, 암호화 기능을 웹에서 테스트해보세요.
      </p>

      {/* 대분류 */}
      {MENU_ITEMS.map((category) => (
        <div key={category.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>

          {/* 중분류 */}
          {category.items.map((group) => (
            <div key={group.label} className="mb-4">
              <h3 className="text-xl font-medium mb-2 text-blue-600 dark:text-blue-300">
                {group.label}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.children.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;