import React, { useState } from "react";
import { FaWater, FaPlay, FaStop, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dummy data for irrigation control
const dummyFields = [
  {
    id: 1,
    name: "Field 1",
    irrigationStatus: "Active",
    waterUsage: "50mm/day",
    irrigationSchedule: "Daily",
    waterLevel: "80%",
  },
  {
    id: 2,
    name: "Field 2",
    irrigationStatus: "Inactive",
    waterUsage: "30mm/day",
    irrigationSchedule: "Every 3 days",
    waterLevel: "60%",
  },
  {
    id: 3,
    name: "Field 3",
    irrigationStatus: "Active",
    waterUsage: "40mm/day",
    irrigationSchedule: "Every 2 days",
    waterLevel: "70%",
  },
];

const IrrigationControl = () => {
  const [fields, setFields] = useState(dummyFields);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleIrrigation = (id) => {
    const updatedFields = fields.map((field) =>
      field.id === id
        ? { ...field, irrigationStatus: field.irrigationStatus === "Active" ? "Inactive" : "Active" }
        : field
    );
    setFields(updatedFields);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter fields based on the search term
  const filteredFields = fields.filter((field) =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Irrigation Control</h1>

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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Water Usage</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Irrigation Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Water Level</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Schedule</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFields.map((field) => (
              <tr key={field.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{field.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.waterUsage}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      field.irrigationStatus === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {field.irrigationStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.waterLevel}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{field.irrigationSchedule}</td>
                <td className="px-6 py-4 text-sm text-gray-800 flex items-center">
                  <button
                    onClick={() => handleToggleIrrigation(field.id)}
                    className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
                      field.irrigationStatus === "Active" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                    }`}
                  >
                    {field.irrigationStatus === "Active" ? <FaStop /> : <FaPlay />}{" "}
                    {field.irrigationStatus === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <Link
                    to={`/admin/irrigation/edit/${field.id}`}
                    className="ml-3 text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IrrigationControl;
