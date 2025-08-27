import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/userside/Header";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const navigate = useNavigate();

    useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role.toLowerCase() !== "user") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const fetchMenuItems = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error("Error fetching menu:", err));
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const itemsByCategory = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-3">Our Menu</h1>
        <p className="text-gray-600 text-center mb-8">
          Discover our carefully crafted selection of coffee, tea, and fresh food
        </p>

        {/* Search and Category Filter */}
        <div className="flex flex-col items-center mb-8 gap-4">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full md:w-96 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category buttons below search bar */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "all"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "drinks"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory("drinks")}
            >
              Drinks
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "dessert"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory("dessert")}
            >
              Desserts
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "food"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory("food")}
            >
              Food
            </button>
          </div>
        </div>

        {Object.keys(itemsByCategory).length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No menu items found.</p>
          </div>
        ) : (
          <>
            {selectedCategory === "all" ? (
              Object.entries(itemsByCategory).map(([category, items]) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 capitalize border-b pb-2">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white shadow-md rounded-xl p-6 relative"
                      >
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

                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <span className="text-yellow-600 font-medium">
                            Rs {item.price.toFixed(2)}
                          </span>
                        </div>

                        <p className="text-gray-500 text-sm mb-4">{item.description}</p>

                        <button
                          onClick={() => handleAddToCart(item)}
                          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg shadow-md transition"
                        >
                          + Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Show only selected category
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-xl p-6 relative"
                  >
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

                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-yellow-600 font-medium">
                        Rs {item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">{item.description}</p>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg shadow-md transition"
                    >
                      + Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Menu;
