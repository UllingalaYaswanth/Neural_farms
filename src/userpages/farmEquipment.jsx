// import React, { useState } from "react";
// import { FaTractor, FaTruck, FaTools } from "react-icons/fa"; // Tractor, Truck, Tools icons
// import { Line } from "react-chartjs-2"; // For equipment usage over time
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
// } from "chart.js";

// // Registering Chart.js components
// ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement);

// const FarmEquipment = () => {
//   const [equipmentList] = useState([
//     {
//       id: 1,
//       name: "Tractor",
//       status: "Active",
//       usageHours: 120,
//       maintenance: "2024-12-30",
//     },
//     {
//       id: 2,
//       name: "Plow",
//       status: "Inactive",
//       usageHours: 50,
//       maintenance: "2025-01-15",
//     },
//     {
//       id: 3,
//       name: "Harvester",
//       status: "Active",
//       usageHours: 200,
//       maintenance: "2025-02-01",
//     },
//     {
//       id: 4,
//       name: "Water Pump",
//       status: "Active",
//       usageHours: 300,
//       maintenance: "2024-12-20",
//     },
//   ]);

//   const equipmentUsageData = {
//     labels: ["Tractor", "Plow", "Harvester", "Water Pump"],
//     datasets: [
//       {
//         label: "Equipment Usage (Hours)",
//         data: [120, 50, 200, 300],
//         borderColor: "#4caf50",
//         backgroundColor: "#4caf50",
//         fill: false,
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-center">Farm Equipment Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Active Equipment List */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaTools className="mr-2 text-3xl text-orange-500" />
//             Active Equipment
//           </h2>
//           <ul>
//             {equipmentList.map((equipment) => (
//               <li key={equipment.id} className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   {equipment.status === "Active" ? (
//                     <FaTractor className="mr-2 text-green-500" />
//                   ) : (
//                     <FaTruck className="mr-2 text-red-500" />
//                   )}
//                   <p className="text-lg">{equipment.name}</p>
//                 </div>
//                 <p className="text-sm text-gray-500">{equipment.status}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Equipment Usage Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Equipment Usage (Hours)</h2>
//           <Line data={equipmentUsageData} options={{ responsive: true }} />
//         </div>

//         {/* Equipment Maintenance Schedule */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Maintenance Schedule</h2>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Equipment</th>
//                 <th className="px-4 py-2 text-left">Next Maintenance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {equipmentList.map((equipment) => (
//                 <tr key={equipment.id}>
//                   <td className="border px-4 py-2">{equipment.name}</td>
//                   <td className="border px-4 py-2">{equipment.maintenance}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmEquipment;


// import React, { useState } from "react";
// import { FaTractor, FaTruck, FaTools } from "react-icons/fa"; // Tractor, Truck, Tools icons
// import { Line } from "react-chartjs-2"; // For equipment usage over time
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
// } from "chart.js";

// // Registering Chart.js components
// ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement);

// const FarmEquipment = () => {
//   const [equipmentList] = useState([
//     {
//       id: 1,
//       name: "Tractor",
//       status: "Active",
//       usageHours: 120,
//       maintenance: "2024-12-30",
//       lastUsed: "2025-02-20", // Example of when the equipment was last used
//     },
//     {
//       id: 2,
//       name: "Plow",
//       status: "Inactive",
//       usageHours: 50,
//       maintenance: "2025-01-15",
//       lastUsed: "2025-01-10",
//     },
//     {
//       id: 3,
//       name: "Harvester",
//       status: "Active",
//       usageHours: 200,
//       maintenance: "2025-02-01",
//       lastUsed: "2025-02-15",
//     },
//     {
//       id: 4,
//       name: "Water Pump",
//       status: "Active",
//       usageHours: 300,
//       maintenance: "2024-12-20",
//       lastUsed: "2025-02-18",
//     },
//   ]);

//   const equipmentUsageData = {
//     labels: ["Tractor", "Plow", "Harvester", "Water Pump"],
//     datasets: [
//       {
//         label: "Equipment Usage (Hours)",
//         data: [120, 50, 200, 300],
//         borderColor: "#4caf50",
//         backgroundColor: "#4caf50",
//         fill: false,
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-center">Farm Equipment Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Active Equipment List */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaTools className="mr-2 text-3xl text-orange-500" />
//             Active Equipment
//           </h2>
//           <ul>
//             {equipmentList.map((equipment) => (
//               <li key={equipment.id} className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   {equipment.status === "Active" ? (
//                     <FaTractor className="mr-2 text-green-500" />
//                   ) : (
//                     <FaTruck className="mr-2 text-red-500" />
//                   )}
//                   <p className="text-lg">{equipment.name}</p>
//                 </div>
//                 <p className="text-sm text-gray-500">{equipment.status}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Equipment Usage Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Equipment Usage (Hours)</h2>
//           <Line data={equipmentUsageData} options={{ responsive: true }} />
//         </div>

//         {/* Equipment Maintenance Schedule */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Maintenance Schedule</h2>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Equipment</th>
//                 <th className="px-4 py-2 text-left">Next Maintenance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {equipmentList.map((equipment) => (
//                 <tr key={equipment.id}>
//                   <td className="border px-4 py-2">{equipment.name}</td>
//                   <td className="border px-4 py-2">{equipment.maintenance}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* New Table for All Equipment Details */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//         <h2 className="text-xl font-semibold mb-4">All Farm Equipment Details</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left">Equipment</th>
//               <th className="px-4 py-2 text-left">Status</th>
//               <th className="px-4 py-2 text-left">Usage Hours</th>
//               <th className="px-4 py-2 text-left">Last Used</th>
//               <th className="px-4 py-2 text-left">Next Maintenance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {equipmentList.map((equipment) => (
//               <tr key={equipment.id}>
//                 <td className="border px-4 py-2">{equipment.name}</td>
//                 <td className="border px-4 py-2">{equipment.status}</td>
//                 <td className="border px-4 py-2">{equipment.usageHours}</td>
//                 <td className="border px-4 py-2">{equipment.lastUsed}</td>
//                 <td className="border px-4 py-2">{equipment.maintenance}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FarmEquipment;

import React, { useState } from "react";
import { FaTractor, FaTruck, FaTools } from "react-icons/fa"; // Tractor, Truck, Tools icons
import { Bar } from "react-chartjs-2"; // For equipment usage over time
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const FarmEquipment = () => {
  const [equipmentList] = useState([
    {
      id: 1,
      name: "Tractor",
      status: "Active",
      usageHours: 120,
      maintenance: "2024-12-30",
      lastUsed: "2025-02-20", // Example of when the equipment was last used
    },
    {
      id: 2,
      name: "Plow",
      status: "Inactive",
      usageHours: 50,
      maintenance: "2025-01-15",
      lastUsed: "2025-01-10",
    },
    {
      id: 3,
      name: "Harvester",
      status: "Active",
      usageHours: 200,
      maintenance: "2025-02-01",
      lastUsed: "2025-02-15",
    },
    {
      id: 4,
      name: "Water Pump",
      status: "Active",
      usageHours: 300,
      maintenance: "2024-12-20",
      lastUsed: "2025-02-18",
    },
  ]);

  // Equipment usage data for the bar chart
  const equipmentUsageData = {
    labels: ["Tractor", "Plow", "Harvester", "Water Pump"], // Equipment names as labels
    datasets: [
      {
        label: "Equipment Usage (Hours)",
        data: [120, 50, 200, 300], // Usage hours for each piece of equipment
        backgroundColor: "#4caf50", // Bar color
        borderColor: "#4caf50", // Border color for the bars
        borderWidth: 1, // Border width for the bars
      },
    ],
  };

  return (
    <div className="p-8 bg-[#eaece4] min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Farm Equipment Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Equipment List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaTools className="mr-2 text-3xl text-orange-500" />
            Active Equipment
          </h2>
          <ul>
            {equipmentList.map((equipment) => (
              <li key={equipment.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {equipment.status === "Active" ? (
                    <FaTractor className="mr-2 text-green-500" />
                  ) : (
                    <FaTruck className="mr-2 text-red-500" />
                  )}
                  <p className="text-lg">{equipment.name}</p>
                </div>
                <p className="text-sm text-gray-500">{equipment.status}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Equipment Usage Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Equipment Usage (Hours)</h2>
          <Bar data={equipmentUsageData} options={{ responsive: true }} />
        </div>

        {/* Equipment Maintenance Schedule */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Maintenance Schedule</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Equipment</th>
                <th className="px-4 py-2 text-left">Next Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {equipmentList.map((equipment) => (
                <tr key={equipment.id}>
                  <td className="border px-4 py-2">{equipment.name}</td>
                  <td className="border px-4 py-2">{equipment.maintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Table for All Equipment Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">All Farm Equipment Details</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Equipment</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Usage Hours</th>
              <th className="px-4 py-2 text-left">Last Used</th>
              <th className="px-4 py-2 text-left">Next Maintenance</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment) => (
              <tr key={equipment.id}>
                <td className="border px-4 py-2">{equipment.name}</td>
                <td className="border px-4 py-2">{equipment.status}</td>
                <td className="border px-4 py-2">{equipment.usageHours}</td>
                <td className="border px-4 py-2">{equipment.lastUsed}</td>
                <td className="border px-4 py-2">{equipment.maintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmEquipment;
