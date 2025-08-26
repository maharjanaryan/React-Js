import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/userside/Header";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Delivery option state
  const [deliveryOption, setDeliveryOption] = useState("Dine In");

  // Calculate fees
  const deliveryFee = deliveryOption === "Delivery" ? 3.99 : 0;
  const tax = 0.2; // flat tax for demo
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white p-8">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow rounded-2xl p-6 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">Image</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-yellow-600 font-semibold">
                        Rs {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center gap-3">
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Delivery Options</h3>
              <div className="flex flex-col gap-2">
                {["Dine In", "Takeaway", "Delivery"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value={option}
                      checked={deliveryOption === option}
                      onChange={() => setDeliveryOption(option)}
                    />
                    {option} {option === "Delivery" ? "(+Rs 50)" : ""}
                  </label>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Delivery Fee</span>
                <span>Rs {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Tax</span>
                <span>Rs {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-orange-600 mb-4">
                <span>Total</span>
                <span>Rs {total.toFixed(2)}</span>
              </div>

              {/* ✅ Send data to billing */}
              <button
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg shadow transition mb-3"
                onClick={() =>
                  navigate("/billingpage", {
                    state: { cart, deliveryOption, subtotal, deliveryFee, tax, total },
                  })
                }
              >
                Proceed to Checkout
              </button>

              <button
                className="w-full border border-gray-300 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition"
                onClick={() => navigate("/menu")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
