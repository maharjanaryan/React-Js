import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser({ firstName: "User" });
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold border-b-2 border-orange-600"
      : "text-gray-700 hover:text-orange-500 transition-colors duration-200";

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/"); // redirect to home page
  };

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 relative">
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

      {/* Navigation links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <NavLink to="/menu" className={getNavLinkClass}>
            Menu
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/cartpage" className={getNavLinkClass}>
            Cart
          </NavLink>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </li>
        <li className="relative" ref={dropdownRef}>
          {/* Avatar button */}
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-100 bg-orange-500 text-white flex items-center justify-center hover:scale-105 transition"
          >
            <span className="font-semibold text-lg">
              {user?.firstName ? user.firstName[0]?.toUpperCase() : "U"}
            </span>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
              >
                Logout
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
