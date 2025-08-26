import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/userside/Header";

const Profile = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [activeTab, setActiveTab] = useState("orders");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Static values for loyalty points and rewards
  const loyaltyPoints = 850;
  const rewardsAvailable = "Redeem 100 points for a free pastry!";
  const memberSince = "2023"; // or dynamic value

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">My Profile</h1>
        <p className="text-center text-gray-600 mb-8">Manage your account and view your activity</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* User Info */}
            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-yellow-600 text-white rounded-full mx-auto flex items-center justify-center text-4xl font-bold">
                {user.firstName[0]?.toUpperCase()}
              </div>
              <h2 className="mt-4 font-semibold text-xl">{user.firstName} {user.lastName}</h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-xs text-gray-400 mt-1">Member since {memberSince}</p>
              <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition">
                Edit Profile
              </button>
            </div>

            {/* Loyalty Status */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">⭐</span> Loyalty Status
              </h3>
              <p className="text-3xl font-bold text-yellow-600">{loyaltyPoints}</p>
              <p className="text-sm text-gray-500 mb-2">Points</p>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Gold Member</span>
              <div className="h-2 bg-gray-200 rounded-full mt-4">
                <div className="h-2 bg-yellow-600 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <div className="mt-2 text-xs bg-gray-100 p-2 rounded">{rewardsAvailable}</div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`px-4 py-2 mr-2 font-medium rounded-t-lg ${activeTab === "orders" ? "bg-yellow-100 text-yellow-700" : "text-gray-500"}`}
                >
                  Order History
                </button>
                <button
                  onClick={() => setActiveTab("reservations")}
                  className={`px-4 py-2 mr-2 font-medium rounded-t-lg ${activeTab === "reservations" ? "bg-yellow-100 text-yellow-700" : "text-gray-500"}`}
                >
                  Reservations
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === "payment" ? "bg-yellow-100 text-yellow-700" : "text-gray-500"}`}
                >
                  Payment
                </button>
              </div>

              <div>
                {activeTab === "orders" && (
                  <p className="text-gray-500">You have no recent orders. Start exploring our menu!</p>
                )}
                {activeTab === "reservations" && (
                  <p className="text-gray-500">No reservations yet.</p>
                )}
                {activeTab === "payment" && (
                  <div>
                    <h4 className="font-semibold mb-2">Payment Methods</h4>
                    <div className="bg-gray-50 p-4 rounded-md mb-2 flex justify-between items-center">
                      <span>•••• •••• •••• 4242</span>
                      <span className="text-xs px-2 py-1 bg-yellow-600 text-white rounded-full">Primary</span>
                    </div>
                    <button className="w-full mt-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                      Add Payment Method
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
