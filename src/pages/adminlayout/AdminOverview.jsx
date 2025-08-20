import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlinePieChart, AiOutlineDollar } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

const AdminOverview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Orders Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="p-3 bg-blue-100 rounded-full">
            <AiOutlineShoppingCart className="text-blue-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Orders</p>
            <p className="text-2xl font-bold text-gray-800">1,250</p>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="p-3 bg-green-100 rounded-full">
            <AiOutlineDollar className="text-green-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Revenue</p>
            <p className="text-2xl font-bold text-gray-800">$25,400</p>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </div>
        </div>

        {/* Customers Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="p-3 bg-yellow-100 rounded-full">
            <AiOutlineUser className="text-yellow-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Customers</p>
            <p className="text-2xl font-bold text-gray-800">830</p>
            <p className="text-xs text-green-600 mt-1">+5% from last month</p>
          </div>
        </div>

        {/* Reservations Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="p-3 bg-purple-100 rounded-full">
            <AiOutlinePieChart className="text-purple-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Reservations</p>
            <p className="text-2xl font-bold text-gray-800">120</p>
            <p className="text-xs text-green-600 mt-1">+15% from last month</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2">
            <AiOutlineShoppingCart /> Add Product
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2">
            <AiOutlineUser /> Manage Users
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2">
            <AiOutlinePieChart /> View Orders
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2">
            <AiOutlineDollar /> View Reports
          </button>
        </div>
      </div>

      {/* Two-column layout for Recent Orders and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Table */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left text-sm font-medium text-gray-600">Order ID</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-600">Customer</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-600">Amount</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm">#1001</td>
                  <td className="p-3 text-sm">John Doe</td>
                  <td className="p-3 text-sm">$120</td>
                  <td className="p-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm">#1002</td>
                  <td className="p-3 text-sm">Jane Smith</td>
                  <td className="p-3 text-sm">$80</td>
                  <td className="p-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm">#1003</td>
                  <td className="p-3 text-sm">Mark Lee</td>
                  <td className="p-3 text-sm">$200</td>
                  <td className="p-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Revenue Analytics</h2>
          <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
            <BsGraphUp size={60} className="text-gray-400 mb-3" />
            <p className="text-gray-500 text-sm">Chart visualization will appear here</p>
            <p className="text-gray-400 text-xs mt-2">(Integrate with Chart.js or Recharts)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;