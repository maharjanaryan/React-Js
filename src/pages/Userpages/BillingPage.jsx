import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/userside/Header";

const BillingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

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

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and submit order
    // In a real application, you would process the payment here
    // For now, just navigate to confirmation
    navigate("/order-confirmation", { state: { cart, total, deliveryOption } });
  };

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'%3E%3Crect width='80' height='80' fill='%23F8F9FA'/%3E%3Cpath d='M50 30L30 50M40 40L30 30M50 50L40 40M40 40L50 30' stroke='%236C757D' stroke-width='2'/%3E%3C/svg%3E";
  };

  return (
    <>
      <Header />
      <div className="min-h-screen p-4 md:p-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Billing Information</h2>
          <p className="text-sm text-gray-500 mb-8">
            Delivery Option: <span className="font-medium capitalize">{deliveryOption}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Order Items */}
              <div className="lg:col-span-2">
                <div className="bg-white shadow-md rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">
                    Order Items
                  </h3>
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between border-b pb-5"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                            <img
                              src={item.imageUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'%3E%3Crect width='80' height='80' fill='%23F8F9FA'/%3E%3Cpath d='M50 30L30 50M40 40L30 30M50 50L40 40M40 40L50 30' stroke='%236C757D' stroke-width='2'/%3E%3C/svg%3E"}
                              alt={item.name}
                              onError={handleImageError}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              Unit Price: Rs {item.price.toFixed(2)}
                            </p>
                            <div className="flex items-center mt-2">
                              <span className="text-gray-600">Qty: {item.quantity}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-lg font-semibold text-gray-800">
                          Rs {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Payment & Summary */}
              <div className="space-y-8">
                {/* Payment Method */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">
                    Payment Method
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cash"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                      />
                      <label htmlFor="cash" className="ml-3 block text-gray-700 font-medium">
                        Cash on Delivery
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                      />
                      <label htmlFor="card" className="ml-3 block text-gray-700 font-medium">
                        Card Payment
                      </label>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-xl space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm font-medium">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={cardInfo.cardNumber}
                            onChange={handleCardInputChange}
                            className="w-full border border-gray-300 rounded-xl p-3 shadow-sm 
                                     focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2 text-sm font-medium">Expiry Date</label>
                            <input
                              type="text"
                              name="cardExpiry"
                              value={cardInfo.cardExpiry}
                              onChange={handleCardInputChange}
                              className="w-full border border-gray-300 rounded-xl p-3 shadow-sm 
                                       focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none"
                              placeholder="MM/YY"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 mb-2 text-sm font-medium">CVC</label>
                            <input
                              type="text"
                              name="cardCVC"
                              value={cardInfo.cardCVC}
                              onChange={handleCardInputChange}
                              className="w-full border border-gray-300 rounded-xl p-3 shadow-sm 
                                       focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">
                    Order Summary
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>Rs {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery Fee</span>
                      <span>Rs {deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span>Rs {tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl text-yellow-700 mt-4 pt-4 border-t">
                      <span>Total</span>
                      <span>Rs {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-6 py-3 rounded-xl bg-yellow-600 text-white font-semibold 
                             hover:bg-yellow-700 transition shadow-md focus:outline-none focus:ring-2 
                             focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BillingPage;