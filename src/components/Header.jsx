import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-white text-orange-500 p-4">
      {/* Circular logo container */}
      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-100 flex items-center justify-center">
        <img 
          src="/images/2ndlogo.png" 
          alt="BrewMaster Logo" 
          className="h-full w-full object-cover"
        />
      </div>
      
      <ul className="flex space-x-6">
        <li className="hover:text-orange-300 cursor-pointer"><NavLink to={"/"}>Home</NavLink></li>
        <li className="hover:text-orange-300 cursor-pointer"><NavLink to={"/gallery"}>Gallery</NavLink></li>
        <li className="hover:text-orange-300 cursor-pointer"><NavLink to={"/aboutus"}>About Us</NavLink></li>
        <li className="hover:text-orange-300 cursor-pointer"><NavLink to={"/login"}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;