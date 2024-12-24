import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data for Fields
const dummyFields = [
  {
    id: 1,
    name: "Field 1",
    location: "California",
    size: "10 acres",
    crops: "Corn, Soybean",
    irrigation: "Active",
  },
  {
    id: 2,
    name: "Field 2",
    location: "Texas",
    size: "5 acres",
    crops: "Wheat, Barley",
    irrigation: "Inactive",
  },
  {
    id: 3,
    name: "Field 3",
    location: "Florida",
    size: "8 acres",
    crops: "Rice, Cotton",
    irrigation: "Active",
  },
];

const FieldManagement = () => {
  const [fields, setFields] = useState(dummyFields); // Set state to the dummy data (replace with API calls in a real app)
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter fields based on search term
  const filteredFields = fields.filter((field) =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Field Management</h1>

      {/* Add New Field Button */}
      <Link
        to="/admin/fields/add"
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-6 inline-block hover:bg-green-600"
      >
        <FaPlus className="inline-block mr-2" /> Add New Field
      </Link>

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by field name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Fields Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Field Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Size</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Crops</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Irrigation Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFields.map((field) => (
              <tr key={field.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{field.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.location}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.size}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.crops}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.irrigation}</td>
                <td className="px-6 py-4 text-sm text-gray-800 flex items-center">
                  <Link to={`/admin/fields/edit/${field.id}`} className="text-blue-500 hover:text-blue-700 mr-3">
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(field.id)}
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

export default FieldManagement;
