import React from 'react';

const HistoryTable = ({ data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Farm Name</th>
          <th className="border border-gray-300 px-4 py-2">Crop Type</th>
          <th className="border border-gray-300 px-4 py-2">Services</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>
          <th className="border border-gray-300 px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">{item.farmName}</td>
            <td className="border border-gray-300 px-4 py-2">{item.cropType}</td>
            <td className="border border-gray-300 px-4 py-2">{item.serviceTypes}</td>
            <td className="border border-gray-300 px-4 py-2">{item.status}</td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(item.createdAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;