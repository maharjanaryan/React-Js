import React from "react";

const EditStaffModal = ({ isOpen, onClose, staffData, handleChange, handleUpdateStaff }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Staff</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={staffData.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={staffData.role}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={staffData.email}
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
            onClick={handleUpdateStaff}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStaffModal;
