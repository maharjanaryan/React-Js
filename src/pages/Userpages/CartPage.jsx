import React, { useState } from "react";
import Header from "../../components/userside/Header";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("Delivery");

  const itemPrice = 2.5;
  const subtotal = itemPrice * quantity;
  const deliveryFee = deliveryOption === "Delivery" ? 3.99 : 0;
  const tax = 0.2;
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white p-8">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Item */}
          <div className="col-span-2 bg-white shadow rounded-2xl p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Espresso</h3>
                <p className="text-gray-500 text-sm">Coffee</p>
                <p className="text-yellow-600 font-semibold">$2.50</p>
              </div>
            </div>

            {/* Quantity & Remove */}
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <button className="text-red-500">🗑️</button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Delivery Options</h3>
              <div className="space-y-3 text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={deliveryOption === "Dine In"}
                    onChange={() => setDeliveryOption("Dine In")}
                  />
                  Dine In
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={deliveryOption === "Takeaway"}
                    onChange={() => setDeliveryOption("Takeaway")}
                  />
                  Takeaway
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={deliveryOption === "Delivery"}
                    onChange={() => setDeliveryOption("Delivery")}
                  />
                  Delivery (+$3.99)
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-orange-600 mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg shadow transition mb-3">
                Proceed to Checkout
              </button>
              <button className="w-full border border-gray-300 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition">
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
