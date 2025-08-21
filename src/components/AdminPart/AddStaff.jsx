import React from "react";

const AddStaff = ({ isOpen, onClose, newStaff, handleChange, handleAddStaff }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add Staff</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStaff.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newStaff.role}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newStaff.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAddStaff}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
