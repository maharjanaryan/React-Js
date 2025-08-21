import React from "react";
import { FaShoppingCart, FaDollarSign, FaUsers } from "react-icons/fa";

const Report = () => {
  const reportData = [
    { id: 1, date: "2025-08-20", orders: 120, revenue: "$2400" },
    { id: 2, date: "2025-08-19", orders: 95, revenue: "$1900" },
    { id: 3, date: "2025-08-18", orders: 150, revenue: "$3000" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reports</h2>

        {/* Summary cards with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-lg flex items-center space-x-4 border-l-4 border-orange-500">
            <FaShoppingCart className="text-orange-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold">365</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg flex items-center space-x-4 border-l-4 border-green-500">
            <FaDollarSign className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$7240</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg flex items-center space-x-4 border-l-4 border-blue-500">
            <FaUsers className="text-blue-500 text-3xl" />
            <div>
              <p className="text-gray-500">Active Users</p>
              <p className="text-2xl font-bold">89</p>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Search by date..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Report Table */}
        <div className="bg-white p-4 rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Date</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Orders</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reportData.map((item, idx) => (
                <tr
                  key={item.id}
                  className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}
                >
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.orders}</td>
                  <td className="px-4 py-2">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
