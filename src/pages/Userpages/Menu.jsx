import React, { useState } from "react";
import Header from "../../components/userside/Header";


const menuItems = [
  { id: 1, name: "Espresso", price: 2.5, desc: "Rich, bold shot of our signature blend", tag: "Popular" },
  { id: 2, name: "Cappuccino", price: 4.25, desc: "Perfect balance of espresso, steamed milk, and foam", tag: "Popular" },
  { id: 3, name: "Avocado Toast", price: 8.5, desc: "Fresh avocado on artisan sourdough with tomatoes", tag: "Vegetarian" },
  { id: 4, name: "Croissant", price: 3.75, desc: "Buttery, flaky pastry baked fresh daily", tag: "" },
  { id: 5, name: "Green Tea Latte", price: 4.75, desc: "Matcha powder with steamed milk and honey", tag: "Vegetarian" },
  { id: 6, name: "Chocolate Muffin", price: 3.25, desc: "Rich chocolate muffin with chocolate chips", tag: "" },
];

const Menu = () => {
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Title */}
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

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          <button className="px-4 py-2 rounded-full bg-yellow-500 text-white font-medium shadow hover:bg-yellow-600">All</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-100">Coffee</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-100">Tea</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-100">Food</button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-yellow-100">Pastries</button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-xl p-6 relative">
              {/* Tag */}
              {item.tag && (
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  item.tag === "Popular" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
                }`}>
                  {item.tag}
                </span>
              )}

              {/* Placeholder for image */}
              <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>

              {/* Name + Price */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-yellow-600 font-medium">${item.price.toFixed(2)}</span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

              {/* Add to cart button */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg shadow-md transition">
                + Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
