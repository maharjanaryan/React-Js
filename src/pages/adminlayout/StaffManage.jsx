import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import AddStaff from "../../components/AdminPart/AddStaff";
import DeleteStaffModal from "../../components/AdminPart/DeleteStaffModal";

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [newStaff, setNewStaff] = useState({ name: "", role: "", email: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);

  // Fetch staff from db.json
  useEffect(() => {
    fetch("http://localhost:5000/staff")
      .then((res) => res.json())
      .then((data) => setStaffList(data))
      .catch((err) => console.error("Error fetching staff:", err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prev) => ({ ...prev, [name]: value }));
  };

  // Add or edit staff
  const handleSaveStaff = () => {
    const { name, role, email } = newStaff;
    if (!name || !role || !email) {
      alert("All fields are required!");
      return;
    }

    if (isEditing) {
      // Edit existing staff
      fetch(`http://localhost:5000/staff/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStaff),
      })
        .then((res) => res.json())
        .then((updatedStaff) => {
          setStaffList((prev) =>
            prev.map((s) => (s.id === editingId ? updatedStaff : s))
          );
          resetModal();
        })
        .catch((err) => console.error("Error updating staff:", err));
    } else {
      // Add new staff
      fetch("http://localhost:5000/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStaff),
      })
        .then((res) => res.json())
        .then((data) => {
          setStaffList((prev) => [...prev, data]);
          resetModal();
        })
        .catch((err) => console.error("Error adding staff:", err));
    }
  };

  // Delete staff
  const handleDelete = () => {
    fetch(`http://localhost:5000/staff/${staffToDelete.id}`, { method: "DELETE" })
      .then(() => {
        setStaffList((prev) => prev.filter((s) => s.id !== staffToDelete.id));
        setStaffToDelete(null);
        setDeleteModalOpen(false);
      })
      .catch((err) => console.error("Error deleting staff:", err));
  };

  // Open modal for editing
  const handleEdit = (staff) => {
    setNewStaff({ name: staff.name, role: staff.role, email: staff.email });
    setEditingId(staff.id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Open delete confirmation modal
  const handleOpenDeleteModal = (staff) => {
    setStaffToDelete(staff);
    setDeleteModalOpen(true);
  };

  // Reset modal
  const resetModal = () => {
    setNewStaff({ name: "", role: "", email: "" });
    setIsEditing(false);
    setEditingId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Staff Management</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          <AiOutlineUserAdd /> Add Staff
        </button>
      </div>

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
                  <button
                    onClick={() => handleEdit(staff)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <AiOutlineEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleOpenDeleteModal(staff)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Staff Modal */}
      <AddStaff
        isOpen={isModalOpen}
        onClose={resetModal}
        newStaff={newStaff}
        handleChange={handleChange}
        handleAddStaff={handleSaveStaff}
        isEditing={isEditing}
      />

      {/* Delete Confirmation Modal */}
      <DeleteStaffModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        staffName={staffToDelete?.name}
        handleConfirmDelete={handleDelete}
      />
    </div>
  );
};

export default StaffManagement;
