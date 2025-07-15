import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Base64Encode from "./pages/Base64Encode";
import Base64Decode from "./pages/Base64Decode";
import Sha256Tool from "./pages/Sha256Tool";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* 사이드바 */}
          <Sidebar
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />

          {/* 메인 컨텐츠 영역 */}
          <div className="flex flex-col flex-1">
            {/* 상단 헤더 */}
            <Header
              toggleSidebar={toggleSidebar}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />

            {/* 라우터 영역 */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/base64/encode" element={<Base64Encode />} />
                <Route path="/base64/decode" element={<Base64Decode />} />
                <Route path="/sha256" element={<Sha256Tool />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;