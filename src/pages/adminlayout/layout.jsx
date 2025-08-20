import { useState } from "react";
import Header from "../../components/AdminPart/Header";
import Sidebar from "../../components/AdminPart/Sidebar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Function to close sidebar (used for overlay & sidebar links)
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header className="sticky top-0 z-50" />

      {/* Hamburger button for mobile */}
      <div className="md:hidden bg-orange-600 text-white p-2">
        <button
          className="flex items-center p-2 rounded-md bg-orange-500 hover:bg-orange-400 transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          <span className="ml-2 font-medium">Menu</span>
        </button>
      </div>

      <div className="flex flex-1 relative">
        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 md:hidden bg-black/30 backdrop-blur-sm z-40"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="relative h-full w-64 bg-orange-600 text-white md:bg-gray-100 md:text-gray-800 border-r border-gray-300"
          >
            {/* Pass closeSidebar to Sidebar so it closes when clicking a link */}
            <Sidebar onLinkClick={closeSidebar} />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50 md:bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
