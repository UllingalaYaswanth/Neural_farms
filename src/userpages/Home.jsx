// import React from "react";
// import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
// import { saveAs } from "file-saver"; // For saving CSV file
// import { FaLeaf } from "react-icons/fa"; // Crop icon
// import { GiWateringCan } from "react-icons/gi"; // Soil, Irrigation, and Tractor icons
// import { WiDaySunny } from "react-icons/wi"; // Weather icon
// import { FaSeedling } from "react-icons/fa";  // Crop Monitoring icon  // Weather icon
// import { FaWater } from "react-icons/fa"; 
// import { GiEarthAmerica } from "react-icons/gi";

// // Registering the chart elements
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const cropYieldData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Crop Yield (kg/ha)",
//         data: [400, 420, 460, 480, 500, 520],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const irrigationEfficiencyData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Irrigation Efficiency (%)",
//         data: [80, 85, 90, 92, 94, 95],
//         fill: false,
//         borderColor: "rgb(255, 99, 132)",
//         tension: 0.1,
//       },
//     ],
//   };

//   // Sample function to export data as CSV
//   const downloadCSV = () => {
//     const data = [
//       ["Month", "Crop Yield (kg/ha)", "Irrigation Efficiency (%)"],
//       ["January", 400, 80],
//       ["February", 420, 85],
//       ["March", 460, 90],
//       ["April", 480, 92],
//       ["May", 500, 94],
//       ["June", 520, 95],
//     ];

//     const csvContent = data.map((row) => row.join(",")).join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "performance_report.csv");
//   };

//   const cropMonitoringData = [
//     { crop: "Corn", growthStage: "Vegetative", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
//     { crop: "Wheat", growthStage: "Reproductive", healthStatus: "Needs Attention", lastUpdated: "2024-12-03" },
//     { crop: "Rice", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-05" },
//   ];

//   const weatherData = {
//     temperature: "22°C",
//     rain: "10mm tomorrow",
//     condition: "Sunny",
//   };

//   const irrigationData = {
//     status: "Active",
//     nextWatering: "2024-12-02, 6:00 AM",
//   };

//   const soilMoistureData = {
//     level: "75%", // Example moisture level
//     lastChecked: "2024-12-20", // Last time it was checked
//   };

//   const cropHealthData = {
//     health: "80%", // Example crop health percentage
//     condition: "Good", // Example condition
//   };

//   const irrigationStatusData = {
//     status: "Active", // Status of irrigation system
//     lastRun: "2024-12-22", // Last time irrigation system ran
//   };

//   return (
//     <div className="p-8 bg-gray-100">
//     <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>
//       <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        
//         {/* Soil Moisture Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-2">Soil Moisture</h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg font-semibold">{soilMoistureData.level}</p>
//             <GiEarthAmerica className="text-3xl text-brown-500" />
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Last Checked: {soilMoistureData.lastChecked}</p>
//         </div>

//         {/* Crop Health Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-2">Crop Health</h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg font-semibold">{cropHealthData.health}</p>
//             <FaLeaf className="text-3xl text-green-500" />
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Condition: {cropHealthData.condition}</p>
//         </div>

//         {/* Irrigation Status Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-2">Irrigation Status</h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg font-semibold">{irrigationStatusData.status}</p>
//             <GiWateringCan className="text-3xl text-blue-500" />
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Last Run: {irrigationStatusData.lastRun}</p>
//         </div>

//       </div>

//         {/* Data Visualizations */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Crop Monitoring */}
//         <div className="bg-white shadow-lg rounded-lg p-6 ">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <FaSeedling className="text-green-500" />
//             <span>Crop Monitoring</span>
//           </h2>

//           {/* Crop Monitoring Data */}
//           <div className="space-y-4 overflow-y-scroll max-h-[200px]">
//             {cropMonitoringData.map((item, index) => (
//               <div key={index} className="border-b pb-4">
//                 <h3 className="font-semibold">{item.crop}</h3>
//                 <p className="text-gray-600">Growth Stage: {item.growthStage}</p>
//                 <p className={`text-sm ${item.healthStatus === "Healthy" ? "text-green-600" : "text-red-600"}`}>
//                   Health Status: {item.healthStatus}
//                 </p>
//                 <p className="text-gray-500">Last Updated: {item.lastUpdated}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Weather & Climate */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <WiDaySunny className="text-yellow-500" />
//             <span>Weather & Climate</span>
//           </h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg">Temperature: {weatherData.temperature}</p>
//             <WiDaySunny className="text-3xl text-yellow-500" />
//           </div>
//           <p className="text-sm text-gray-500">Rain: {weatherData.rain}</p>
//           <p className="text-sm text-gray-500">Condition: {weatherData.condition}</p>
//         </div>

//         {/* Irrigation Control */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <FaWater className="text-blue-500" />
//             <span>Irrigation Control</span>
//           </h2>
//           <p className="text-gray-600">System Status: {irrigationData.status}</p>
//           <p className="text-sm text-gray-500">Next Watering: {irrigationData.nextWatering}</p>
//         </div>
//       </div>
//       </div>

//       <div className="flex-1 ">


//         {/* Analytics & Reports Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//           <h2 className="text-xl font-semibold mb-4">Analytics & Reports</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Crop Yield Line Chart */}
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold mb-4">Crop Yield Performance</h3>
//               <Line data={cropYieldData} options={{ responsive: true, plugins: { title: { display: true, text: "Crop Yield Over Time" } } }} />
//             </div>

//             {/* Irrigation Efficiency Bar Chart */}
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-semibold mb-4">Irrigation Efficiency</h3>
//               <Bar data={irrigationEfficiencyData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency Over Time" } } }} />
//             </div>
//           </div>

//           {/* Export Options */}
//           <div className="mt-6 flex space-x-4">
//             <button
//               onClick={downloadCSV}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               Download CSV Report
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
// import { saveAs } from "file-saver"; // For saving CSV file
// import { FaLeaf } from "react-icons/fa"; // Crop icon
// import { GiWateringCan } from "react-icons/gi"; // Soil, Irrigation, and Tractor icons
// import { WiDaySunny } from "react-icons/wi"; // Weather icon
// import { FaSeedling } from "react-icons/fa";  // Crop Monitoring icon
// import { FaWater } from "react-icons/fa"; 
// import { GiEarthAmerica } from "react-icons/gi"; 
// import { GiAnt } from "react-icons/gi";
// // Registering the chart elements
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [selectedField, setSelectedField] = useState("Field 1");

//   const fieldsData = {
//     "Field 1": {
//       cropYieldData: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             label: "Crop Yield (kg/ha)",
//             data: [400, 420, 460, 480, 500, 520],
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       },
//       irrigationEfficiencyData: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             label: "Irrigation Efficiency (%)",
//             data: [80, 85, 90, 92, 94, 95],
//             fill: false,
//             borderColor: "rgb(255, 99, 132)",
//             tension: 0.1,
//           },
//         ],
//       },
//       soilMoistureData: {
//         level: "75%",
//         lastChecked: "2024-12-20",
//         ph: "6.5", // Added pH
//         lastTested: "2024-12-15", // Added last tested date for soil pH
//       },
//       cropHealthData: {
//         health: "80%",
//         condition: "Good",
//       },
//       pestsData: {
//         status: "Active",
//         lastChecked: "2024-12-21",
//       },
//       cropMonitoringData: [
//         { crop: "Corn", growthStage: "Vegetative", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
//         { crop: "Wheat", growthStage: "Reproductive", healthStatus: "Needs Attention", lastUpdated: "2024-12-03" },
//         { crop: "Rice", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-05" },
//       ],
//       weatherData: {
//         temperature: "22°C",
//         rain: "10mm tomorrow",
//         condition: "Sunny",
//       },
//     },
//     "Field 2": {
//       cropYieldData: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             label: "Crop Yield (kg/ha)",
//             data: [350, 370, 400, 420, 450, 470],
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       },
//       irrigationEfficiencyData: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             label: "Irrigation Efficiency (%)",
//             data: [78, 82, 86, 90, 92, 94],
//             fill: false,
//             borderColor: "rgb(255, 99, 132)",
//             tension: 0.1,
//           },
//         ],
//       },
//       soilMoistureData: {
//         level: "65%",
//         lastChecked: "2024-12-19",
//         ph: "6.2",
//         lastTested: "2024-12-10",
//       },
//       cropHealthData: {
//         health: "70%",
//         condition: "Fair",
//       },
//       pestsData: {
//         status: "Inactive",
//         lastChecked: "2024-12-20",
//       },
//       cropMonitoringData: [
//         { crop: "Barley", growthStage: "Vegetative", healthStatus: "Needs Attention", lastUpdated: "2024-12-02" },
//         { crop: "Oats", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-04" },
//       ],
//       weatherData: {
//         temperature: "20°C",
//         rain: "5mm tomorrow",
//         condition: "Cloudy",
//       },
//     },
//   };

//   // Sample function to export data as CSV
//   const downloadCSV = () => {
//     const data = [
//       ["Month", "Crop Yield (kg/ha)", "Irrigation Efficiency (%)"],
//       ["January", 400, 80],
//       ["February", 420, 85],
//       ["March", 460, 90],
//       ["April", 480, 92],
//       ["May", 500, 94],
//       ["June", 520, 95],
//     ];

//     const csvContent = data.map((row) => row.join(",")).join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "performance_report.csv");
//   };

//   const fieldData = fieldsData[selectedField];

//   return (
//     <div className="p-8 bg-gray-100">
//       <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>

//       {/* Filter Field Selector */}
//       <div className="mb-6">
//         <select
//           value={selectedField}
//           onChange={(e) => setSelectedField(e.target.value)}
//           className="p-2 border rounded-lg"
//         >
//           <option value="Field 1">Field 1</option>
//           <option value="Field 2">Field 2</option>
//         </select>
//       </div>

//       <div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//           {/* Soil Moisture Section with pH */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">Soil Moisture</h2>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-semibold">{fieldData.soilMoistureData.level}</p>
//               <GiEarthAmerica className="text-3xl text-brown-500" />
//             </div>
//             <p className="text-sm text-gray-500 mt-2">Last Checked: {fieldData.soilMoistureData.lastChecked}</p>
//             <p className="text-sm text-gray-500">Soil pH: {fieldData.soilMoistureData.ph}</p>
//             <p className="text-sm text-gray-500">Last pH Test: {fieldData.soilMoistureData.lastTested}</p>
//           </div>

//           {/* Crop Health Section */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">Crop Health</h2>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-semibold">{fieldData.cropHealthData.health}</p>
//               <FaLeaf className="text-3xl text-green-500" />
//             </div>
//             <p className="text-sm text-gray-500 mt-2">Condition: {fieldData.cropHealthData.condition}</p>
//           </div>

//           {/* Pests Monitoring Section */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">Pests Monitoring</h2>
//             <div className="flex justify-between items-center">
//               <p className="text-lg font-semibold">{fieldData.pestsData.status}</p>
//               <GiAnt className="text-3xl text-red-500" />
//             </div>
//             <p className="text-sm text-gray-500 mt-2">Last Checked: {fieldData.pestsData.lastChecked}</p>
//           </div>
//         </div>

//         {/* Data Visualizations */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Crop Monitoring */}
//           <div className="bg-white shadow-lg rounded-lg p-6 ">
//             <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//               <FaSeedling className="text-green-500" />
//               <span>Crop Monitoring</span>
//             </h2>

//             {/* Crop Monitoring Data */}
//             <div className="space-y-4 overflow-y-scroll max-h-[200px]">
//               {fieldData.cropMonitoringData.map((item, index) => (
//                 <div key={index} className="border-b pb-4">
//                   <h3 className="font-semibold">{item.crop}</h3>
//                   <p className="text-gray-600">Growth Stage: {item.growthStage}</p>
//                   <p className={`text-sm ${item.healthStatus === "Healthy" ? "text-green-600" : "text-red-600"}`}>
//                     Health Status: {item.healthStatus}
//                   </p>
//                   <p className="text-gray-500">Last Updated: {item.lastUpdated}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Weather & Climate */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//               <WiDaySunny className="text-yellow-500" />
//               <span>Weather & Climate</span>
//             </h2>
//             <div className="flex justify-between items-center">
//               <p className="text-lg">Temperature: {fieldData.weatherData.temperature}</p>
//               <WiDaySunny className="text-3xl text-yellow-500" />
//             </div>
//             <p className="text-sm text-gray-500">Rain: {fieldData.weatherData.rain}</p>
//             <p className="text-sm text-gray-500">Condition: {fieldData.weatherData.condition}</p>
//           </div>

//         </div>

//         <div className="flex-1 ">
//           {/* Analytics & Reports Section */}
//           <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
//             <h2 className="text-xl font-semibold mb-4">Analytics & Reports</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Crop Yield Line Chart */}
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-4">Crop Yield Performance</h3>
//                 <Line data={fieldData.cropYieldData} options={{ responsive: true, plugins: { title: { display: true, text: "Crop Yield Over Time" } } }} />
//               </div>

//               {/* Irrigation Efficiency Bar Chart */}
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-4">Irrigation Efficiency</h3>
//                 <Bar data={fieldData.irrigationEfficiencyData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency Over Time" } } }} />
//               </div>
//             </div>

//             {/* Export Options */}
//             <div className="mt-6 flex space-x-4">
//               <button
//                 onClick={downloadCSV}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               >
//                 Download CSV Report
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { saveAs } from "file-saver";
import { FaLeaf } from "react-icons/fa"; 
import { GiWateringCan } from "react-icons/gi"; 
import { WiDaySunny } from "react-icons/wi"; 
import { FaSeedling } from "react-icons/fa"; 
import { FaWater } from "react-icons/fa"; 
import { GiEarthAmerica } from "react-icons/gi"; 
import { FaBug } from "react-icons/fa"; 

// Registering the chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedFarm, setSelectedFarm] = useState(0); // Default to farm 0

  const farmsData = [
    {
      name: "Farm 1",
      cropYieldData: [400, 420, 460, 480, 500, 520],
      irrigationEfficiencyData: [80, 85, 90, 92, 94, 95],
      soilHealthData: {
        ph: 6.5,
        texture: "Loamy",
        organicMatter: "High",
        healthCondition: "Optimal",
      },
      cropHealthData: { health: "80%", condition: "Good" },
      irrigationData: { status: "Active", nextWatering: "2024-12-02, 6:00 AM" },
      pestData: { status: "None", lastChecked: "2024-12-20" },
      soilPhData: [6.5, 6.7, 6.8, 6.6, 6.9, 7.0],
      weatherData: { temperature: "22°C", rain: "10mm tomorrow", condition: "Sunny" },
      cropMonitoringData: [
        { crop: "Corn", growthStage: "Vegetative", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
        { crop: "Wheat", growthStage: "Reproductive", healthStatus: "Needs Attention", lastUpdated: "2024-12-03" },
        { crop: "Rice", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-05" },
      ],
    },
    {
      name: "Farm 2",
      cropYieldData: [380, 410, 450, 470, 490, 510],
      irrigationEfficiencyData: [75, 80, 85, 88, 90, 92],
      soilHealthData: {
        ph: 5.9,
        texture: "Sandy",
        organicMatter: "Medium",
        healthCondition: "Needs Improvement",
      },
      cropHealthData: { health: "75%", condition: "Fair" },
      irrigationData: { status: "Inactive", nextWatering: "N/A" },
      pestData: { status: "Aphids Detected", lastChecked: "2024-12-18" },
      soilPhData: [6.0, 6.2, 6.3, 6.4, 6.5, 6.6],
      weatherData: { temperature: "20°C", rain: "5mm tomorrow", condition: "Partly Cloudy" },
      cropMonitoringData: [
        { crop: "Barley", growthStage: "Tillering", healthStatus: "Healthy", lastUpdated: "2024-12-02" },
        { crop: "Oats", growthStage: "Flowering", healthStatus: "Healthy", lastUpdated: "2024-12-04" },
        { crop: "Soybean", growthStage: "Pod Development", healthStatus: "Needs Attention", lastUpdated: "2024-12-06" },
      ],
    },
    {
      name: "Farm 3",
      cropYieldData: [420, 440, 480, 500, 520, 540],
      irrigationEfficiencyData: [85, 88, 90, 92, 94, 96],
      soilHealthData: {
        ph: 7.2,
        texture: "Clayey",
        organicMatter: "Low",
        healthCondition: "Needs Improvement",
      },
      cropHealthData: { health: "85%", condition: "Excellent" },
      irrigationData: { status: "Active", nextWatering: "2024-12-03, 7:00 AM" },
      pestData: { status: "Spider Mites Detected", lastChecked: "2024-12-21" },
      soilPhData: [7.0, 7.1, 7.2, 7.3, 7.4, 7.5],
      weatherData: { temperature: "24°C", rain: "No rain expected", condition: "Clear" },
      cropMonitoringData: [
        { crop: "Potato", growthStage: "Tuber Initiation", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
        { crop: "Tomato", growthStage: "Fruit Setting", healthStatus: "Healthy", lastUpdated: "2024-12-03" },
        { crop: "Carrot", growthStage: "Root Development", healthStatus: "Needs Attention", lastUpdated: "2024-12-05" },
      ],
    },
  ];

  const downloadCSV = () => {
    const data = [
      ["Month", "Crop Yield (kg/ha)", "Irrigation Efficiency (%)"],
      ["January", 400, 80],
      ["February", 420, 85],
      ["March", 460, 90],
      ["April", 480, 92],
      ["May", 500, 94],
      ["June", 520, 95],
    ];

    const csvContent = data.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "performance_report.csv");
  };

  const selectedFarmData = farmsData[selectedFarm];

  const cropYieldData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Crop Yield (kg/ha)",
        data: selectedFarmData.cropYieldData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const irrigationEfficiencyData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Irrigation Efficiency (%)",
        data: selectedFarmData.irrigationEfficiencyData,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const soilPhData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Soil pH",
        data: selectedFarmData.soilPhData,
        fill: false,
        borderColor: "rgb(255, 159, 64)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>

      {/* Farm Filter */}
      <div className="flex justify-end mb-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedFarm(Number(e.target.value))}
          value={selectedFarm}
        >
          {farmsData.map((farm, index) => (
            <option key={index} value={index}>
              {farm.name}
            </option>
          ))}
        </select>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-xl font-semibold mb-2">Soil Health</h2>
        {/* Additional Soil Health Information */}
        <div className="mt-4 flex justify-between items-center">
          <div>
          {/* <h3 className="text-lg font-semibold">Soil Health</h3> */}
          <p className="text-sm text-gray-500">Soil pH: {selectedFarmData.soilHealthData.ph}</p>
          <p className="text-sm text-gray-500">Soil Texture: {selectedFarmData.soilHealthData.texture}</p>
          <p className="text-sm text-gray-500">Organic Matter: {selectedFarmData.soilHealthData.organicMatter}</p>
          <p className="text-sm text-gray-500">Health Condition: {selectedFarmData.soilHealthData.healthCondition}</p>
          </div>
          <GiEarthAmerica className="text-3xl text-brown-500" />
        </div>
        
      </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Crop Health</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{selectedFarmData.cropHealthData.health}</p>
            <FaLeaf className="text-3xl text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Condition: {selectedFarmData.cropHealthData.condition}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Irrigation Status & Control</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{selectedFarmData.irrigationData.status}</p>
            <GiWateringCan className="text-3xl text-blue-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Next Watering: {selectedFarmData.irrigationData.nextWatering}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaSeedling className="text-green-500" />
          <span>Crop Monitoring</span>
        </h2>

        {/* Crop Monitoring Data */}
        <div className="space-y-4 overflow-y-scroll max-h-[200px]">
          {selectedFarmData.cropMonitoringData.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold">{item.crop}</h3>
              <p className="text-gray-600">Growth Stage: {item.growthStage}</p>
              <p className={`text-sm ${item.healthStatus === "Healthy" ? "text-green-600" : "text-red-600"}`}>
                Health Status: {item.healthStatus}
              </p>
              <p className="text-gray-500">Last Updated: {item.lastUpdated}</p>
            </div>
          ))}
        </div>
      </div>
        {/* Pest Monitoring Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Pest Monitoring</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{selectedFarmData.pestData.status}</p>
            <FaBug className="text-3xl text-red-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Last Checked: {selectedFarmData.pestData.lastChecked}</p>
        </div>
      

      {/* Weather & Climate */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <WiDaySunny className="text-yellow-500" />
          <span>Weather & Climate</span>
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-lg">Temperature: {selectedFarmData.weatherData.temperature}</p>
          <WiDaySunny className="text-3xl text-yellow-500" />
        </div>
        <p className="text-sm text-gray-500">Rain: {selectedFarmData.weatherData.rain}</p>
        <p className="text-sm text-gray-500">Condition: {selectedFarmData.weatherData.condition}</p>
      </div>
      </div>

      {/* Crop Monitoring */}


      {/* Data Visualizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-semibold mb-4">Crop Yield Performance</h3>
          <Line data={cropYieldData} options={{ responsive: true, plugins: { title: { display: true, text: "Crop Yield Over Time" } } }} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-semibold mb-4">Irrigation Efficiency</h3>
          <Bar data={irrigationEfficiencyData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency Over Time" } } }} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-semibold mb-4">Soil pH Levels</h3>
          <Line data={soilPhData} options={{ responsive: true, plugins: { title: { display: true, text: "Soil pH Over Time" } } }} />
        </div>
      </div>

      {/* Export Options */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={downloadCSV}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Download CSV Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
