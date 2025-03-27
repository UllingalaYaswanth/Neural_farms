// import React from 'react';

// const HistoryTable = ({ data }) => {
//   return (
//     <table className="w-full border-collapse border border-gray-300">
//       <thead>
//         <tr className="bg-gray-200">
//           <th className="border border-gray-300 px-4 py-2">Name</th>
//           <th className="border border-gray-300 px-4 py-2">Farm Name</th>
//           <th className="border border-gray-300 px-4 py-2">Crop Type</th>
//           <th className="border border-gray-300 px-4 py-2">Services</th>
//           <th className="border border-gray-300 px-4 py-2">Status</th>
//           <th className="border border-gray-300 px-4 py-2">Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td className="border border-gray-300 px-4 py-2">{item.name}</td>
//             <td className="border border-gray-300 px-4 py-2">{item.farmName}</td>
//             <td className="border border-gray-300 px-4 py-2">{item.cropType}</td>
//             <td className="border border-gray-300 px-4 py-2">{item.serviceTypes}</td>
//             <td className="border border-gray-300 px-4 py-2">{item.status}</td>
//             <td className="border border-gray-300 px-4 py-2">
//               {new Date(item.createdAt).toLocaleDateString()}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default HistoryTable;

import React from 'react';

const HistoryTable = ({ data, onEdit, onDelete }) => {
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
          <th className="border border-gray-300 px-4 py-2">Actions</th> {/* New column for actions */}
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
            <td className="border border-gray-300 px-4 py-2">
              {/* Edit Button */}
              <button
                onClick={() => onEdit(item.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
              >
                Edit
              </button>
              {/* Delete Button */}
              <button
                onClick={() => onDelete(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;