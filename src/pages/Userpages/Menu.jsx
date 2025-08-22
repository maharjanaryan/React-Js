import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/userside/Header";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products from backend
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error("Error fetching menu:", err));
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-3">Our Menu</h1>
        <p className="text-gray-600 text-center mb-8">
          Discover our carefully crafted selection of coffee, tea, and fresh food
        </p>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-96 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length === 0 ? (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500 text-lg">No menu items found.</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-6 relative"
              >
                {/* Product Image */}
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-48 w-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </div>

                {/* Name + Price */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-yellow-600 font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>

                {/* Add to cart button */}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg shadow-md transition">
                  + Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;