import React from 'react';

const ServiceTable = ({ data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Services</th>
          <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
          <th className="border border-gray-300 px-4 py-2">Email Id</th>
          <th className="border border-gray-300 px-4 py-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">{item.serviceTypes.join(', ')}</td>
            <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
            <td className="border border-gray-300 px-4 py-2">{item.email} acres</td>
            <td className="border border-gray-300 px-4 py-2">{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;