import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy Data for Crops
const dummyCrops = [
  {
    id: 1,
    name: "Corn",
    field: "Field 1",
    health: "Good",
    waterRequirement: "50mm/day",
    irrigation: "Active",
    growthStage: "Vegetative",
  },
  {
    id: 2,
    name: "Wheat",
    field: "Field 2",
    health: "Average",
    waterRequirement: "40mm/day",
    irrigation: "Inactive",
    growthStage: "Reproductive",
  },
  {
    id: 3,
    name: "Rice",
    field: "Field 3",
    health: "Excellent",
    waterRequirement: "60mm/day",
    irrigation: "Active",
    growthStage: "Maturity",
  },
];

const CropManagement = () => {
  const [crops, setCrops] = useState(dummyCrops);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    const updatedCrops = crops.filter((crop) => crop.id !== id);
    setCrops(updatedCrops);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter crops based on the search term
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Crop Management</h1>

      {/* Add New Crop Button */}
      <Link
        to="/admin/crops/add"
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-6 inline-block hover:bg-green-600"
      >
        <FaPlus className="inline-block mr-2" /> Add New Crop
      </Link>

      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by crop name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Crops Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Crop Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Field</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Health</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Water Requirement</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Irrigation</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Growth Stage</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCrops.map((crop) => (
              <tr key={crop.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.field}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.health}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.waterRequirement}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.irrigation}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{crop.growthStage}</td>
                <td className="px-6 py-4 text-sm text-gray-800 flex items-center">
                  <Link to={`./subpages/CropForm/${crop.id}`} className="text-blue-500 hover:text-blue-700 mr-3">
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(crop.id)}
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

export default CropManagement;
