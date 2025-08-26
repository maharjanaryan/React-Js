import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/userside/Header";

const BillingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <>
        <Header />
        <div className="p-8 min-h-screen flex flex-col justify-center items-center bg-gray-50">
          <p className="text-gray-700 text-lg">No order found. Please return to the cart.</p>
          <button
            onClick={() => navigate("/cart")}
            className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-xl shadow-md hover:bg-yellow-700 transition"
          >
            Go to Cart
          </button>
        </div>
      </>
    );
  }

  const { cart, deliveryOption, subtotal, deliveryFee, tax, total } = state;

  return (
    <>
      <Header />
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Billing</h2>
          <p className="text-sm text-gray-500 mb-8">
            Delivery Option: <span className="font-medium">{deliveryOption}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Payment options */}
            <div className="col-span-2 bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Payment Options</h3>
              <div className="flex gap-4 mb-8">
                {["Cash", "Credit Card", "Mobile Payment"].map((method) => (
                  <button
                    key={method}
                    className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 
                               hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600 
                               transition shadow-sm"
                  >
                    {method}
                  </button>
                ))}
              </div>

              <label className="block font-medium mb-2 text-gray-700">Enter Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-xl p-3 mb-8 shadow-sm 
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />

              <button className="w-full py-3 rounded-xl bg-yellow-600 text-white font-semibold 
                                 hover:bg-yellow-700 transition shadow-md">
                Process Payment
              </button>
            </div>

            {/* Right: Order Summary */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h3>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-gray-700 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="my-5" />
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-yellow-700 mt-5">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
