import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      {/* Logo and brand name */}
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-100 flex items-center justify-center bg-white shadow-sm">
          <img
            src="/images/2ndlogo.png"
            alt="Jojolapa Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-orange-600 hidden sm:block">
          Jojolapa Café 
        </h1>
      </div>

      {/* Profile avatar on the right */}
      <div className="flex items-center space-x-2">
        <span className="hidden sm:block text-gray-700 font-medium">Admin</span>
        <NavLink to="/admin/profile">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-100 bg-white shadow-sm flex items-center justify-center">
            <img
              src="/images/admin.png"
              alt="Admin Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default AdminHeader;
