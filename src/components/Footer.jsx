import { NavLink } from "react-router-dom";

const Footer = ()=>{
  return(
    <div>
          {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">Jojolapa</h3>
              <p className="text-gray-400">
                Experience the perfect blend of creativity
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-orange-300 transition-colors">About</a></li>
                <li><a href="/menu" className="text-gray-400 hover:text-orange-300 transition-colors">Menu</a></li>
                <li><a href="/gallery" className="text-gray-400 hover:text-orange-300 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>123 Coffee Street</li>
                <li>Harisiddhi, lalitpur-28</li>
                <li>(977) 9800000000</li>
                <li>jojolapacafe@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Mon-Fri: 7am - 9pm</li>
                <li>Sat-Sun: 8am - 10pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Jojolapa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
  );
}

export default Footer;