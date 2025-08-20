import { NavLink } from "react-router-dom";

const Header = () => {
  // Function to determine active link styling
  const getNavLinkClass = ({ isActive }) => 
    isActive 
      ? "text-orange-600 font-semibold border-b-2 border-orange-600" 
      : "text-gray-700 hover:text-orange-500 transition-colors duration-200";

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      {/* Logo and brand name */}
      <div className="flex items-center space-x-3">
        {/* Circular logo container */}
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-100 flex items-center justify-center bg-white shadow-sm">
          <img 
            src="/images/2ndlogo.png" 
            alt="Jojolapa Logo" 
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-orange-600 hidden sm:block">Jojolapa Café</h1>
      </div>
      
      {/* Navigation links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <NavLink 
            to="/" 
            className={getNavLinkClass}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/gallery" 
            className={getNavLinkClass}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/aboutus" 
            className={getNavLinkClass}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;