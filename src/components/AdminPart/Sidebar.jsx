import { CiSettings } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { TbReport } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-screen bg-gray-800 text-white border-r border-gray-700">
        {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        </div>
        
        {/* Sidebar content */}
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            <a
              href="/admin/dashboard"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
             <MdOutlineSpaceDashboard /> Dashboard
            </a>
            
            <a
              href="/admin/users"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
             <GrUserManager /> User Management
            </a>
            
            <a
              href="/admin/products"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
             <AiOutlineProduct /> Products
            </a>
            
            <a
              href="/admin/analytics"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
             <IoMdAnalytics /> Analytics
            </a>

            <a
              href="/admin/reports"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              <TbReport />Reports
            </a>
            
            <a
              href="/admin/settings"
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              <CiSettings />Settings
            </a>
          </nav>
        </div>
        
        {/* Sidebar footer */}
        <div className="px-4 py-4 border-t border-gray-700">
          <button className="flex items-center justify-center w-full px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;