// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
// import { saveAs } from "file-saver";
// import { FaLeaf } from "react-icons/fa"; 
// import { GiWateringCan } from "react-icons/gi"; 
// import { WiDaySunny } from "react-icons/wi"; 
// import { FaSeedling } from "react-icons/fa"; 
// import { FaWater } from "react-icons/fa"; 
// import { GiEarthAmerica } from "react-icons/gi"; 
// import { FaBug } from "react-icons/fa"; 
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

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
//   const [selectedFarm, setSelectedFarm] = useState(0); // Default to farm 0

//   const farmsData = [
//     {
//       name: "Farm 1",
//       location: { lat: 21.212700, lng: 76.878376 }, // San Francisco, for example
//       area: "100 hectares",
//       cropYieldData: [400, 420, 460, 480, 500, 520],
//       irrigationEfficiencyData: [80, 85, 90, 92, 94, 95],
//       soilHealthData: {
//         ph: 6.5,
//         texture: "Loamy",
//         organicMatter: "High",
//         healthCondition: "Optimal",
//       },
//       color:'#4CAF50' ,
//       cropHealthData: { health: "80%", condition: "Good" },
//       irrigationData: { status: "Active", nextWatering: "2024-12-02, 6:00 AM" },
//       pestData: { status: "None", lastChecked: "2024-12-20" },
//       soilPhData: [6.5, 6.7, 6.8, 6.6, 6.9, 7.0],
//       weatherData: { temperature: "22°C", rain: "10mm tomorrow", condition: "Sunny" },
//       cropMonitoringData: [
//         { crop: "Corn", growthStage: "Vegetative", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
//         { crop: "Wheat", growthStage: "Reproductive", healthStatus: "Needs Attention", lastUpdated: "2024-12-03" },
//         { crop: "Rice", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-05" },
//       ],
//     },
//     {
//       name: "Farm 2",
//       location: { lat: 21.243382, lng: 77.013559 }, // Los Angeles, for example
//       area: "120 hectares",
//       cropYieldData: [380, 410, 450, 470, 490, 510],
//       irrigationEfficiencyData: [75, 80, 85, 88, 90, 92],
//       soilHealthData: {
//         ph: 5.9,
//         texture: "Sandy",
//         organicMatter: "Medium",
//         healthCondition: "Needs Improvement",
//       },
//       cropHealthData: { health: "75%", condition: "Fair" },
//       irrigationData: { status: "Inactive", nextWatering: "N/A" },
//       pestData: { status: "Aphids Detected", lastChecked: "2024-12-18" },
//       soilPhData: [6.0, 6.2, 6.3, 6.4, 6.5, 6.6],
//       weatherData: { temperature: "20°C", rain: "5mm tomorrow", condition: "Partly Cloudy" },
//       cropMonitoringData: [
//         { crop: "Barley", growthStage: "Tillering", healthStatus: "Healthy", lastUpdated: "2024-12-02" },
//         { crop: "Oats", growthStage: "Flowering", healthStatus: "Healthy", lastUpdated: "2024-12-04" },
//         { crop: "Soybean", growthStage: "Pod Development", healthStatus: "Needs Attention", lastUpdated: "2024-12-06" },
//       ],
//     },
//     {
//       name: "Farm 3",
//       location: { lat: 21.249142, lng: 77.035789 }, // New York, for example
//       area: "150 hectares",
//       cropYieldData: [420, 440, 480, 500, 520, 540],
//       irrigationEfficiencyData: [85, 88, 90, 92, 94, 96],
//       soilHealthData: {
//         ph: 7.2,
//         texture: "Clayey",
//         organicMatter: "Low",
//         healthCondition: "Needs Improvement",
//       },
//       cropHealthData: { health: "85%", condition: "Excellent" },
//       irrigationData: { status: "Active", nextWatering: "2024-12-03, 7:00 AM" },
//       pestData: { status: "Spider Mites Detected", lastChecked: "2024-12-21" },
//       soilPhData: [7.0, 7.1, 7.2, 7.3, 7.4, 7.5],
//       weatherData: { temperature: "24°C", rain: "No rain expected", condition: "Clear" },
//       cropMonitoringData: [
//         { crop: "Potato", growthStage: "Tuber Initiation", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
//         { crop: "Tomato", growthStage: "Fruit Setting", healthStatus: "Healthy", lastUpdated: "2024-12-03" },
//         { crop: "Carrot", growthStage: "Root Development", healthStatus: "Needs Attention", lastUpdated: "2024-12-05" },
//       ],
//     },
//   ];

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

//   const selectedFarmData = farmsData[selectedFarm];

//   const cropYieldData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Crop Yield (kg/ha)",
//         data: selectedFarmData.cropYieldData,
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
//         data: selectedFarmData.irrigationEfficiencyData,
//         fill: false,
//         borderColor: "rgb(255, 99, 132)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const soilPhData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Soil pH",
//         data: selectedFarmData.soilPhData,
//         fill: false,
//         borderColor: "rgb(255, 159, 64)",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="p-8 bg-[#eaece4]">
//       {/* <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1> */}

//       {/* Map and Farm Locations */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-4">Farm Locations</h2>
//         <MapContainer center={[21.212700, 76.878376]} zoom={10} style={{ height: "400px", width: "100%" }}>
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {farmsData.map((farm, index) => (
//             <Marker key={index} position={farm.location}>
//               <Popup>
//                 <div>
//                   <h3>{farm.name}</h3>
//                   <p>Area: {farm.area}</p>
//                   <a
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setSelectedFarm(index); // Dynamically update selected farm
//                     }}
//                   >
//                     View Data
//                   </a>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       {/* Farm Information & Stats */}
//       <div className="group bg-white shadow-lg rounded-lg p-6 mb-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//         <h2 className="text-xl  font-semibold mb-4">Farm Details</h2>
//         <div className="flex flex-col text-gray-500 group-hover:text-white transition duration-300">
//           <p className="text-sm">Farm Name: {selectedFarmData.name}</p>
//           <p className="text-sm">Location: {selectedFarmData.location.lat}, {selectedFarmData.location.lng}</p>
//           <p className="text-sm">Area: {selectedFarmData.area}</p>
//         </div>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Soil Health</h2>
//           <div className="mt-4 flex justify-between items-center">
//             <div>
//               <p className="text-sm ">Soil pH: {selectedFarmData.soilHealthData.ph}</p>
//               <p className="text-sm ">Soil Texture: {selectedFarmData.soilHealthData.texture}</p>
//               <p className="text-sm ">Organic Matter: {selectedFarmData.soilHealthData.organicMatter}</p>
//               <p className="text-sm ">Health Condition: {selectedFarmData.soilHealthData.healthCondition}</p>
//             </div>
//             <GiEarthAmerica className="text-3xl text-brown-500" />
//           </div>
//         </div>

//         <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Crop Health</h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg font-semibold ">{selectedFarmData.cropHealthData.health}</p>
//             <FaLeaf className="text-3xl text-green-500 " />
//           </div>
//           <p className="text-sm text-gray-500 mt-2 group-hover:text-white transition duration-300">Condition: {selectedFarmData.cropHealthData.condition}</p>
//         </div>

//         <div className="group bg-white shadow-lg rounded-lg p-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Irrigation Status & Control</h2>
//           <div className="flex justify-between items-center">
//             <p className="text-lg font-semibold">{selectedFarmData.irrigationData.status}</p>
//             <GiWateringCan className="text-3xl text-blue-500" />
//           </div>
//           <p className="text-sm text-gray-500 mt-2 group-hover:text-white transition duration-300">Next Watering: {selectedFarmData.irrigationData.nextWatering}</p>
//         </div>

//         <div className="group bg-white shadow-lg rounded-lg p-6 mb-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <FaSeedling className="text-green-500" />
//             <span>Crop Monitoring</span>
//           </h2>

//           {/* Crop Monitoring Data */}
//           <div className="space-y-4 overflow-y-scroll max-h-[200px] scroll-hidden">
//             {selectedFarmData.cropMonitoringData.map((item, index) => (
//               <div key={index} className="border-b pb-4">
//                 <h3 className="font-semibold">{item.crop}</h3>
//                 <p className="text-gray-600 group-hover:text-white transition duration-300">Growth Stage: {item.growthStage}</p>
//                 <p className={`text-sm ${item.healthStatus === "Healthy" ? "text-green-600" : "text-red-600"}`}>
//                   Health Status: {item.healthStatus}
//                 </p>
//                 <p className="text-gray-500 group-hover:text-white transition duration-300">Last Updated: {item.lastUpdated}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="group bg-white shadow-lg rounded-lg p-6 mb-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//            <h2 className="text-xl font-semibold mb-2">Pest Monitoring</h2>
//            <div className="flex justify-between items-center">
//              <p className="text-lg font-semibold group-hover:text-white transition duration-300">{selectedFarmData.pestData.status}</p>
//              <FaBug className="text-3xl text-red-500" />
//            </div>
//            <p className="text-sm text-gray-500 mt-2 group-hover:text-white transition duration-300">Last Checked: {selectedFarmData.pestData.lastChecked}</p>
//          </div>
      

//        {/* Weather & Climate */}
//        <div className="group bg-white shadow-lg rounded-lg p-6 mb-6 hover:bg-[#4CAF50] text-gray-500 hover:text-white transition duration-300">
//          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//            <WiDaySunny className="text-yellow-500" />
//            <span>Weather & Climate</span>
//          </h2>
//          <div className="flex justify-between items-center">
//            <p className="text-lg">Temperature: {selectedFarmData.weatherData.temperature}</p>
//            <WiDaySunny className="text-3xl text-yellow-500" />
//          </div>
//          <p className="text-sm text-gray-500 group-hover:text-white transition duration-300">Rain: {selectedFarmData.weatherData.rain}</p>
//          <p className="text-sm text-gray-500 group-hover:text-white transition duration-300">Condition: {selectedFarmData.weatherData.condition}</p>
//        </div>
  
//       </div>

//       {/* Data Visualizations */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold mb-4">Crop Yield Performance</h3>
//           <Line data={cropYieldData} options={{ responsive: true, plugins: { title: { display: true, text: "Crop Yield Over Time" } } }} />
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold mb-4">Irrigation Efficiency</h3>
//           <Bar data={irrigationEfficiencyData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency Over Time" } } }} />
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold mb-4">Soil pH Levels</h3>
//           <Line data={soilPhData} options={{ responsive: true, plugins: { title: { display: true, text: "Soil pH Over Time" } } }} />
//         </div>
//       </div>

//       {/* Export Options */}
//       <div className="mt-6 flex space-x-4">
//         <button
//           onClick={downloadCSV}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//         >
//           Download CSV Report
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState,useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { saveAs } from "file-saver";
import { FaLeaf, FaSeedling, FaWater, FaBug } from "react-icons/fa"; 
import { GiWateringCan, GiEarthAmerica } from "react-icons/gi"; 

import FarmMap from "./FarmMap";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayCloudy,
} from "react-icons/wi";


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

const getWeatherIcon = (condition) => {
  const c = condition.toLowerCase();
  if (c.includes("clear") || c.includes("sunny")) return <WiDaySunny className="text-5xl text-yellow-400" />;
  if (c.includes("cloud")) return <WiCloudy className="text-5xl text-gray-400" />;
  if (c.includes("rain")) return <WiRain className="text-5xl text-blue-500" />;
  if (c.includes("thunder")) return <WiThunderstorm className="text-5xl text-purple-600" />;
  if (c.includes("snow")) return <WiSnow className="text-5xl text-white" />;
  if (c.includes("fog") || c.includes("mist") || c.includes("haze")) return <WiFog className="text-5xl text-gray-300" />;
  return <WiDayCloudy className="text-5xl text-blue-300" />; // Default fallback
};


const Dashboard = () => {
  const [selectedFarm, setSelectedFarm] = useState(0); // Default to farm 0
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const farmsData = [
    {
      name: "Green Valley Farm",
      location: { lat: 21.212700, lng: 76.878376 },
      area: "100 hectares",
      cropYieldData: [400, 420, 460, 480, 500, 520],
      irrigationEfficiencyData: [80, 85, 90, 92, 94, 95],
      soilHealthData: {
        ph: 6.5,
        texture: "Loamy",
        organicMatter: "High",
        healthCondition: "Optimal",
      },
      color: '#4CAF50',
      cropHealthData: { health: "80%", condition: "Good" },
      irrigationData: { status: "Active", nextWatering: "2025-08-08, 6:00 AM" },
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
      name: "Sunny Acres Farm",
      location: { lat: 21.243382, lng: 77.013559 },
      area: "120 hectares",
      cropYieldData: [380, 410, 450, 470, 490, 510],
      irrigationEfficiencyData: [75, 80, 85, 88, 90, 92],
      soilHealthData: {
        ph: 5.9,
        texture: "Sandy",
        organicMatter: "Medium",
        healthCondition: "Needs Improvement",
      },
      color: '#2196F3',
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
      name: "Riverbend Farm",
      location: { lat: 21.249142, lng: 77.035789 },
      area: "150 hectares",
      cropYieldData: [420, 440, 480, 500, 520, 540],
      irrigationEfficiencyData: [85, 88, 90, 92, 94, 96],
      soilHealthData: {
        ph: 7.2,
        texture: "Clayey",
        organicMatter: "Low",
        healthCondition: "Needs Improvement",
      },
      color: '#FFC107',
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
      ["January", farmsData[selectedFarm].cropYieldData[0], farmsData[selectedFarm].irrigationEfficiencyData[0]],
      ["February", farmsData[selectedFarm].cropYieldData[1], farmsData[selectedFarm].irrigationEfficiencyData[1]],
      ["March", farmsData[selectedFarm].cropYieldData[2], farmsData[selectedFarm].irrigationEfficiencyData[2]],
      ["April", farmsData[selectedFarm].cropYieldData[3], farmsData[selectedFarm].irrigationEfficiencyData[3]],
      ["May", farmsData[selectedFarm].cropYieldData[4], farmsData[selectedFarm].irrigationEfficiencyData[4]],
      ["June", farmsData[selectedFarm].cropYieldData[5], farmsData[selectedFarm].irrigationEfficiencyData[5]],
    ];

    const csvContent = data.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${farmsData[selectedFarm].name}_performance_report.csv`);
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

useEffect(() => {
  const fetchWeather = async () => {
    try {
      const res = await fetch("https://nfbackend.onrender.com/api/weather");
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  fetchWeather();
}, []);

  return (
    <div className="p-4 bg-[#eaece4]">
      {/* <h1 className="text-3xl font-semibold mb-6 text-gray-800">Farm Management Dashboard</h1> */}

      {/* Map and Farm Locations */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-green-600 text-white">
          <h2 className="text-xl font-semibold">Farm Locations & Fields</h2>
        </div>
        <div className="p-2">
          <FarmMap 
            farmsData={farmsData} 
            selectedFarm={selectedFarm} 
            setSelectedFarm={setSelectedFarm} 
          />
        </div>
      </div>

      {/* Farm Information & Stats */}
      <div className="group bg-white shadow-lg rounded-lg p-6 mb-8 hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Farm Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium">Farm Name:</p>
            <p className="text-lg font-semibold">{selectedFarmData.name}</p>
          </div>
          <div>
            <p className="font-medium">Location:</p>
            <p className="text-sm">{selectedFarmData.location.lat.toFixed(6)}, {selectedFarmData.location.lng.toFixed(6)}</p>
          </div>
          <div>
            <p className="font-medium">Area:</p>
            <p className="text-lg font-semibold">{selectedFarmData.area}</p>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Soil Health Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
          <div className="p-4 bg-green-700 text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Soil Health</h2>
            <GiEarthAmerica className="text-2xl" />
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p><span className="font-medium">Soil pH:</span> {selectedFarmData.soilHealthData.ph}</p>
              <p><span className="font-medium">Texture:</span> {selectedFarmData.soilHealthData.texture}</p>
              <p><span className="font-medium">Organic Matter:</span> {selectedFarmData.soilHealthData.organicMatter}</p>
              <div className="mt-3">
                <span className="font-medium">Condition:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedFarmData.soilHealthData.healthCondition === "Optimal" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {selectedFarmData.soilHealthData.healthCondition}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Crop Health Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
          <div className="p-4 bg-green-700 text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Crop Health</h2>
            <FaLeaf className="text-2xl" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold">{selectedFarmData.cropHealthData.health}</span>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                selectedFarmData.cropHealthData.condition === "Excellent" 
                  ? "bg-green-100 text-green-600" 
                  : selectedFarmData.cropHealthData.condition === "Good" 
                    ? "bg-blue-100 text-blue-600" 
                    : "bg-yellow-100 text-yellow-600"
              }`}>
                <FaLeaf className="text-2xl" />
              </div>
            </div>
            <div>
              <span className="font-medium">Condition:</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedFarmData.cropHealthData.condition === "Excellent" 
                  ? "bg-green-100 text-green-800" 
                  : selectedFarmData.cropHealthData.condition === "Good" 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-yellow-100 text-yellow-800"
              }`}>
                {selectedFarmData.cropHealthData.condition}
              </span>
            </div>
          </div>
        </div>

        {/* Irrigation Card */}
        <div className="bg-white group shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
          <div className="p-4 bg-green-700 text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Irrigation Status</h2>
            <GiWateringCan className="text-2xl" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xl font-semibold ${
                selectedFarmData.irrigationData.status === "Active" 
                  ? "text-green-600 group-hover:text-white" 
                  : "text-gray-500 group-hover:text-white"
              }`}>
                {selectedFarmData.irrigationData.status}
              </span>
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200">
                <GiWateringCan className="text-2xl" />
              </div>
            </div>
            {selectedFarmData.irrigationData.nextWatering !== "N/A" && (
              <div className="mt-2">
                <p className="font-medium">Next Watering:</p>
                <p>{selectedFarmData.irrigationData.nextWatering}</p>
              </div>
            )}
          </div>
        </div>

        {/* Crop Monitoring Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
          <div className="p-4 bg-green-700 text-white flex items-center space-x-2">
            <FaSeedling className="text-xl" />
            <h2 className="text-xl font-semibold">Crop Monitoring</h2>
          </div>
          <div className="p-4 h-64 overflow-y-auto group">
            {selectedFarmData.cropMonitoringData.map((item, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{item.crop}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.healthStatus === "Healthy" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {item.healthStatus}
                  </span>
                </div>
                <p className="text-sm mt-1 ">Growth Stage: {item.growthStage}</p>
                <p className="text-xs text-gray-500 mt-1 group-hover:text-white/70">Last Updated: {item.lastUpdated}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pest Monitoring Card */}
        <div className="bg-white group shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
          <div className="p-4 bg-green-700 text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Pest Monitoring</h2>
            <FaBug className="text-xl" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xl font-semibold ${
                selectedFarmData.pestData.status === "None" 
                  ? "text-green-600 group-hover:text-white" 
                  : "text-red-600 group-hover:text-white"
              }`}>
                {selectedFarmData.pestData.status}
              </span>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                selectedFarmData.pestData.status === "None" 
                  ? "bg-green-100 text-green-600" 
                  : "bg-red-100 text-red-600"
              }`}>
                <FaBug className="text-2xl" />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-medium">Last Checked:</p>
              <p>{selectedFarmData.pestData.lastChecked}</p>
            </div>
          </div>
        </div>

        {/* Weather Card */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-green-600 text-gray-700 hover:text-white transition duration-300">
  <div className="p-4 bg-green-700 text-white flex items-center space-x-2">
    <WiDaySunny className="text-2xl" />
    <h2 className="text-xl font-semibold">Weather & Climate</h2>
  </div>

  <div className="p-4 min-h-[150px] flex flex-col justify-center">
    {loading ? (
      <div className="animate-pulse space-y-2">
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>
      </div>
    ) : error ? (
      <p className="text-red-600">{error}</p>
    ) : weatherData.length > 0 ? (
      <>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold">{weatherData[0].maxtemp}</p>
            <p className="text-sm">{weatherData[0].weatherCondition || "Condition Unknown"}</p>
          </div>
          {getWeatherIcon(weatherData[0].weatherCondition || "")}
        </div>
        <div className="space-y-2">
          <p><span className="font-medium">Rain Forecast:</span> {weatherData[0].precipitation}</p>
          <div className="mt-3">
            <p className="font-medium">Recommendation:</p>
            <p className="text-sm">
              {(weatherData[0].precipitation?.toLowerCase().includes("rain") || parseFloat(weatherData[0].precipitation) > 0)
                ? "Delay irrigation scheduled for tomorrow"
                : "Proceed with scheduled irrigation"}
            </p>
          </div>
        </div>
      </>
    ) : (
      <p>No weather data available.</p>
    )}
  </div>
</div>


      </div>

      {/* Data Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-green-700 text-white">
            <h3 className="font-semibold">Crop Yield Performance</h3>
          </div>
          <div className="p-4">
            <Line 
              data={cropYieldData} 
              options={{ 
                responsive: true, 
                plugins: { 
                  legend: { position: 'top' },
                  tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                  y: { beginAtZero: false }
                }
              }} 
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-green-700 text-white">
            <h3 className="font-semibold">Irrigation Efficiency</h3>
          </div>
          <div className="p-4">
            <Bar 
              data={irrigationEfficiencyData} 
              options={{ 
                responsive: true, 
                plugins: { 
                  legend: { position: 'top' },
                  tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                  y: { beginAtZero: true, max: 100 }
                }
              }} 
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-green-700 text-white">
            <h3 className="font-semibold">Soil pH Levels</h3>
          </div>
          <div className="p-4">
            <Line 
              data={soilPhData} 
              options={{ 
                responsive: true, 
                plugins: { 
                  legend: { position: 'top' },
                  tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                  y: { min: 5, max: 8 }
                }
              }} 
            />
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-end">
        <button
          onClick={downloadCSV}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>Download Performance Report</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;