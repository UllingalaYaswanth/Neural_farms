import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data for Users
const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    location: "California",
    crops: "Corn, Soybean",
    fields: 5,
    irrigation: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    location: "Texas",
    crops: "Wheat, Barley",
    fields: 3,
    irrigation: "Inactive",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaelj@example.com",
    location: "Florida",
    crops: "Rice, Cotton",
    fields: 2,
    irrigation: "Active",
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(dummyUsers); // Set state to the dummy data (replace with API calls in a real app)
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">User Management</h1>

      {/* Add New User Button */}
      <Link
        to="/admin/users/add"
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-6 inline-block hover:bg-green-600"
      >
        <FaPlus className="inline-block mr-2" /> Add New User
      </Link>

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Crops</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Fields</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Irrigation Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.location}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.crops}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.fields}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.irrigation}</td>
                <td className="px-6 py-4 text-sm text-gray-800 flex items-center">
                  <Link to={`/admin/users/edit/${user.id}`} className="text-blue-500 hover:text-blue-700 mr-3">
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
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

export default UserManagement;
