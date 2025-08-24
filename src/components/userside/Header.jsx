import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // ✅ import CartContext

const Header = () => {
  const { cart } = useCart(); // get cart items
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); // total items

  // Function to determine active link styling
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold border-b-2 border-orange-600"
      : "text-gray-700 hover:text-orange-500 transition-colors duration-200";

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
        <li>
          <NavLink to="/profile" className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-100 bg-gray-200 hover:scale-105 transition">
              <img
                src="/images/admin.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
