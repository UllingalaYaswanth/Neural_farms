// import React, { useState } from "react";
// import { GiWateringCan } from "react-icons/gi"; // Watering can icon
// import { FaLeaf } from "react-icons/fa"; // For plant health
// import { MdSchedule } from "react-icons/md"; // For scheduling
// import { Doughnut, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   Title,
//   CategoryScale,
//   LinearScale,
// } from "chart.js";

// // Registering Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

// const IrrigationControl = () => {
//   const [irrigationStatus, setIrrigationStatus] = useState(true);
//   const [wateringSchedule, setWateringSchedule] = useState(30); // Default to 30 minutes

//   // Dummy Data for Irrigation Control
//   const irrigationData = {
//     waterFlow: 15, // Water flow in liters per minute
//     totalWaterConsumption: 450, // Total water consumed so far (in liters)
//     nextWatering: "2024-12-25 10:00 AM", // Next watering schedule
//     moistureLevel: 65, // Current soil moisture level
//     efficiency: 75, // Irrigation efficiency
//   };

//   // Doughnut chart data for water usage
//   const waterUsageChartData = {
//     labels: ["Used", "Remaining"],
//     datasets: [
//       {
//         label: "Water Usage",
//         data: [60, 40], // 60% used, 40% remaining (dummy data)
//         backgroundColor: ["#4caf50", "#e0e0e0"],
//         borderColor: ["#4caf50", "#e0e0e0"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Bar chart data for efficiency (dummy data)
//   const efficiencyChartData = {
//     labels: ["Efficiency"],
//     datasets: [
//       {
//         label: "Irrigation Efficiency",
//         data: [irrigationData.efficiency],
//         backgroundColor: "#4caf50",
//       },
//     ],
//   };

//   const toggleIrrigationStatus = () => {
//     setIrrigationStatus(!irrigationStatus); // Toggle irrigation status (active/inactive)
//   };

//   return (
//     <div className="p-8 bg-[#eaece4] min-h-screen">
//       <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Irrigation Control Dashboard</h1>

//       {/* Main Dashboard Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* Irrigation Status */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <GiWateringCan className="mr-2 text-3xl text-blue-500" />
//             Irrigation Status
//           </h2>
//           {/* Use flex to align and reduce unnecessary space */}
//           <div className="flex items-center justify-between mb-4">
//             <p className="text-lg font-semibold">
//               {irrigationStatus ? "Active" : "Inactive"}
//             </p>
//             <div
//               className={`p-2 rounded-full cursor-pointer ${
//                 irrigationStatus ? "bg-green-500" : "bg-red-500"
//               }`}
//               onClick={toggleIrrigationStatus}
//             >
//               <p className="text-white text-sm">{irrigationStatus ? "Deactivate" : "Activate"}</p>
//             </div>
//           </div>

//           {/* Dummy data */}
//           <div className="mb-4">
//             <p className="text-sm text-gray-600">Water Flow Rate: <strong>{irrigationData.waterFlow} L/min</strong></p>
//             <p className="text-sm text-gray-600">Total Water Consumed: <strong>{irrigationData.totalWaterConsumption} L</strong></p>
//             <p className="text-sm text-gray-600">Next Irrigation: <strong>{irrigationData.nextWatering}</strong></p>
//           </div>
//         </div>

//         {/* Water Usage */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Water Usage</h2>
//           <Doughnut data={waterUsageChartData} options={{ responsive: true }} />
//           <p className="text-sm text-gray-500 mt-4">Used 60% of available water this week</p>
//         </div>

//         {/* Moisture Level */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Soil Moisture Level</h2>
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-lg font-semibold">{irrigationData.moistureLevel}%</p>
//             <FaLeaf className="text-3xl text-green-500" />
//           </div>
//           <div className="w-full bg-gray-200 rounded-full">
//             <div
//               className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
//               style={{ width: `${irrigationData.moistureLevel}%` }}
//             >
//               {irrigationData.moistureLevel}%
//             </div>
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Ideal moisture range: 50%-70%</p>
//         </div>

//       </div>

//       {/* Efficiency and Watering Schedule */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
//         {/* Efficiency */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
//           <Bar data={efficiencyChartData} options={{ responsive: true, indexAxis: "y" }} />
//           <p className="text-sm text-gray-500 mt-4">Current efficiency: {irrigationData.efficiency}%</p>
//         </div>

//         {/* Watering Schedule */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Watering Schedule</h2>
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-lg">Next watering: {irrigationData.nextWatering}</p>
//             <MdSchedule className="text-3xl text-orange-500" />
//           </div>
//           <div className="flex items-center mb-4">
//             <label className="mr-2">Set Watering Duration (minutes):</label>
//             <input
//               type="number"
//               value={wateringSchedule}
//               onChange={(e) => setWateringSchedule(e.target.value)}
//               className="border p-2 rounded-lg w-16"
//               min={1}
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default IrrigationControl;

import React, { useState } from "react";
import { GiWateringCan } from "react-icons/gi"; // Watering can icon
import { FaLeaf } from "react-icons/fa"; // For plant health
import { MdSchedule } from "react-icons/md"; // For scheduling
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const IrrigationControl = () => {
  // Dummy Data for 3 Farms
  const farmData = {
    farm1: {
      waterFlow: 15, // Water flow in liters per minute
      totalWaterConsumption: 450, // Total water consumed so far (in liters)
      nextWatering: "2024-12-25 10:00 AM", // Next watering schedule
      moistureLevel: 65, // Current soil moisture level
      efficiency: 75, // Irrigation efficiency
      wateringSchedule: 30, // Default watering schedule for farm1
    },
    farm2: {
      waterFlow: 20,
      totalWaterConsumption: 500,
      nextWatering: "2024-12-26 09:00 AM",
      moistureLevel: 55,
      efficiency: 80,
      wateringSchedule: 35, // Default watering schedule for farm2
    },
    farm3: {
      waterFlow: 18,
      totalWaterConsumption: 400,
      nextWatering: "2024-12-24 11:00 AM",
      moistureLevel: 70,
      efficiency: 85,
      wateringSchedule: 40, // Default watering schedule for farm3
    },
  };

  const [selectedFarm, setSelectedFarm] = useState("farm1"); // State for selected farm
  const [irrigationStatus, setIrrigationStatus] = useState(true); // Default irrigation status to true

  // Get data for the selected farm
  const irrigationData = farmData[selectedFarm];

  // Doughnut chart data for water usage
  const waterUsageChartData = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "Water Usage",
        data: [60, 40], // 60% used, 40% remaining (dummy data)
        backgroundColor: ["#4caf50", "#e0e0e0"],
        borderColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data for efficiency (dummy data)
  const efficiencyChartData = {
    labels: ["Efficiency"],
    datasets: [
      {
        label: "Irrigation Efficiency",
        data: [irrigationData.efficiency],
        backgroundColor: "#4caf50",
      },
    ],
  };

  const toggleIrrigationStatus = () => {
    setIrrigationStatus(!irrigationStatus); // Toggle irrigation status (active/inactive)
  };

  const handleFarmChange = (e) => {
    setSelectedFarm(e.target.value); // Update the selected farm when changed
  };

  return (
    <div className="p-8 bg-[#eaece4] min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">
        Irrigation Control Dashboard
      </h1>

      {/* Farm Selection Dropdown */}
      <div className="mb-6">
        <label htmlFor="farmSelect" className="text-lg font-semibold">
          Select Farm:{" "}
        </label>
        <select
          id="farmSelect"
          className="ml-4 p-2 border rounded"
          value={selectedFarm}
          onChange={handleFarmChange}
        >
          <option value="farm1">Farm 1</option>
          <option value="farm2">Farm 2</option>
          <option value="farm3">Farm 3</option>
        </select>
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Irrigation Status */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <GiWateringCan className="mr-2 text-3xl text-blue-500" />
            Irrigation Status
          </h2>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">
              {irrigationStatus ? "Active" : "Inactive"}
            </p>
            <div
              className={`p-2 rounded-full cursor-pointer ${
                irrigationStatus ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleIrrigationStatus}
            >
              <p className="text-white text-sm">
                {irrigationStatus ? "Deactivate" : "Activate"}
              </p>
            </div>
          </div>

          {/* Dummy data */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Water Flow Rate: <strong>{irrigationData.waterFlow} L/min</strong>
            </p>
            <p className="text-sm text-gray-600">
              Total Water Consumed:{" "}
              <strong>{irrigationData.totalWaterConsumption} L</strong>
            </p>
            <p className="text-sm text-gray-600">
              Next Irrigation: <strong>{irrigationData.nextWatering}</strong>
            </p>
          </div>
        </div>

        {/* Water Usage */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Water Usage</h2>
          <Doughnut data={waterUsageChartData} options={{ responsive: true }} />
          <p className="text-sm text-gray-500 mt-4">
            Used 60% of available water this week
          </p>
        </div>

        {/* Moisture Level */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Soil Moisture Level</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">{irrigationData.moistureLevel}%</p>
            <FaLeaf className="text-3xl text-green-500" />
          </div>
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: `${irrigationData.moistureLevel}%` }}
            >
              {irrigationData.moistureLevel}%
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Ideal moisture range: 50%-70%</p>
        </div>

      </div>

      {/* Efficiency and Watering Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Efficiency */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
          <Bar data={efficiencyChartData} options={{ responsive: true, indexAxis: "y" }} />
          <p className="text-sm text-gray-500 mt-4">
            Current efficiency: {irrigationData.efficiency}%
          </p>
        </div>

        {/* Watering Schedule */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Watering Schedule</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">Next watering: {irrigationData.nextWatering}</p>
            <MdSchedule className="text-3xl text-orange-500" />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">Set Watering Duration (minutes):</label>
            <input
              type="number"
              value={irrigationData.wateringSchedule}
              onChange={(e) => {
                // Update watering schedule for the selected farm
                const newSchedule = e.target.value;
                const updatedFarmData = { ...farmData[selectedFarm], wateringSchedule: newSchedule };
                farmData[selectedFarm] = updatedFarmData;
              }}
              className="border p-2 rounded-lg w-16"
              min={1}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default IrrigationControl;
