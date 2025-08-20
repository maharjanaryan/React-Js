import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#f9f5f0] to-[#f0e1d0] text-[#3e2723] py-12 px-4 mt-auto relative overflow-hidden">
      {/* Subtle Coffee Beans Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/coffee-beans.png')]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#6f4e37] mb-4">Jojolapa</h3>
            <p className="text-[#5d4037] mb-4 leading-relaxed">
              Experience the perfect blend of creativity and flavor
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-[#795548] hover:text-[#d17f4b] transition transform hover:scale-110">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-[#795548] hover:text-[#d17f4b] transition transform hover:scale-110">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-[#795548] hover:text-[#d17f4b] transition transform hover:scale-110">
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#6f4e37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Menu", "Gallery", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="text-[#5d4037] hover:text-[#d17f4b] transition-colors duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-[#d17f4b] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-[#6f4e37] mb-4">Contact</h4>
            <ul className="text-[#5d4037] space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#d17f4b] mt-1 mr-3 w-4"></i>
                <span>123 Coffee Street, Harisiddhi, Lalitpur-28</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-[#d17f4b] mt-1 mr-3 w-4"></i>
                <span>(977) 9800000000</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-[#d17f4b] mt-1 mr-3 w-4"></i>
                <span>jojolapacafe@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-[#6f4e37] mb-4">Hours</h4>
            <ul className="text-[#5d4037] space-y-2">
              <li className="flex justify-between border-b border-[#e0d7ce] pb-1">
                <span>Mon-Fri:</span>
                <span>7am - 9pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sat-Sun:</span>
                <span>8am - 10pm</span>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-[#6f4e37] mb-2">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-3 bg-[#efe6dd] text-[#3e2723] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#d17f4b] w-full"
                />
                <button className="bg-[#d17f4b] text-white px-2 py-1 rounded-r-md font-medium hover:bg-[#b25c2e] transition-colors duration-300">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-[#e0d7ce] pt-8 text-center relative z-10">
          <p className="text-[#6d4c41]">
            © {new Date().getFullYear()} Jojolapa Café. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm text-[#8d6e63]">
            <a href="#" className="hover:text-[#d17f4b] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#d17f4b] transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
