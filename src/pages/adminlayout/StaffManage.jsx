import React from "react";
import { AiOutlineUserAdd, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const StaffManagement = () => {
  // Sample staff data
  const staffList = [
    { id: 1, name: "Alice Johnson", role: "Chef", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", role: "Waiter", email: "bob@example.com" },
    { id: 3, name: "Charlie Lee", role: "Manager", email: "charlie@example.com" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Staff Management</h1>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          <AiOutlineUserAdd /> Add Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-4">Staff List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{staff.id}</td>
                <td className="p-3">{staff.name}</td>
                <td className="p-3">{staff.role}</td>
                <td className="p-3">{staff.email}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <AiOutlineEdit size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffManagement;
