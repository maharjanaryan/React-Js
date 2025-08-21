import { CiSettings } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { useNavigate, NavLink, Navigate } from "react-router-dom";

const Sidebar = ({ onLinkClick }) => {

  const navigate = useNavigate();

  const handleBtnClick =() =>{
    localStorage.removeItem('AUTH_TOKEN');
      navigate('/');
  }
  const linkClasses = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-orange-600 text-white shadow"
        : "text-gray-800 hover:bg-orange-500 hover:text-white"
    }`;

  return (
    <div className="flex flex-col h-full bg-white shadow-lg border-r border-gray-200">
     
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 bg-orange-500 text-white font-bold">
        Cafe Admin
      </div>

      <div className="flex flex-col flex-grow px-2 py-4 overflow-y-auto space-y-2">
        <NavLink to="overview" className={linkClasses} end onClick={onLinkClick}>
          <MdOutlineSpaceDashboard className="mr-3 text-lg" /> Overview
        </NavLink>
        <NavLink to="Staffmanage" className={linkClasses} onClick={onLinkClick}>
          <GrUserManager className="mr-3 text-lg" /> Staff Management
        </NavLink>
        <NavLink to="products" className={linkClasses} onClick={onLinkClick}>
          <AiOutlineProduct className="mr-3 text-lg" /> Products
        </NavLink>
        <NavLink to="analytics" className={linkClasses} onClick={onLinkClick}>
          <IoMdAnalytics className="mr-3 text-lg" /> Analytics
        </NavLink>
        <NavLink to="report" className={linkClasses} onClick={onLinkClick}>
          <TbReport className="mr-3 text-lg" /> Report
        </NavLink>
        <NavLink to="settings" className={linkClasses} onClick={onLinkClick}>
          <CiSettings className="mr-3 text-lg" /> Settings
        </NavLink>
      </div>

    
      <div className="px-4 py-4 border-t border-gray-200">
        <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200"
        onClick={()=> handleBtnClick()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
