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

import React, { useState, useEffect } from "react";
import { GiWateringCan } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
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

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const IrrigationControl = () => {
  // Form state
  const [formData, setFormData] = useState({
    crop_name: "corn",
    sowing_date: "2025-07-01",
    irrigation_method: "drip",
    soil_type: "loamy"
  });

  // Results state
  const [selectedFarm, setSelectedFarm] = useState("farm1");
  const [farmData, setFarmData] = useState(null);
  const [irrigationStatus, setIrrigationStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/irrigation-requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.data || !data.data[0]) {
        throw new Error("No irrigation data received");
      }

      const irrigation = data.data[0];
      
      const waterUsedPercentage = Math.round(
        (irrigation.farm_irrigation_water_liters / irrigation.farm_available_water_liters) * 100
      );

      const newFarmData = {
        farm1: {
          waterFlow: (irrigation.farm_irrigation_water_liters / 60).toFixed(2),
          totalWaterConsumption: (irrigation.farm_irrigation_water_liters / 1000).toFixed(1) + " m³",
          nextWatering: irrigation.date,
          moistureLevel: (irrigation.soil_moisture_percent * 100).toFixed(0),
          efficiency: ((irrigation.crop_evapotranspiration_mm / irrigation.reference_evapotranspiration_mm) * 100).toFixed(0),
          waterUsage: {
            used: waterUsedPercentage,
            remaining: 100 - waterUsedPercentage,
            totalAvailable: (irrigation.farm_available_water_liters / 1000).toFixed(1) + " m³",
          },
          evapotranspiration: irrigation.crop_evapotranspiration_mm.toFixed(2) + " mm",
          deficit: irrigation.water_deficit_mm.toFixed(2) + " mm",
          precipitation: irrigation.daily_precipitation_mm.toFixed(2) + " mm",
          irrigationMessage: irrigation.irrigation_message,
          cropStage: irrigation.stage,
          area: (irrigation.area_sqm / 10000).toFixed(2) + " ha",
        },
      };

      setFarmData(newFarmData);
    } catch (error) {
      console.error("Error fetching irrigation data:", error);
      setError(`Failed to load data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Chart data functions
  const getWaterUsageChartData = () => ({
    labels: ["Used", "Remaining"],
    datasets: [{
      label: "Water Usage",
      data: [
        farmData?.farm1?.waterUsage?.used || 0,
        farmData?.farm1?.waterUsage?.remaining || 100
      ],
      backgroundColor: ["#4caf50", "#e0e0e0"],
      borderColor: ["#4caf50", "#e0e0e0"],
      borderWidth: 1,
    }],
  });

  const getEfficiencyChartData = () => ({
    labels: ["Efficiency"],
    datasets: [{
      label: "Irrigation Efficiency",
      data: [farmData?.farm1?.efficiency || 0],
      backgroundColor: "#4caf50",
    }],
  });

  return (
    <div className="p-8 bg-[#eaece4] min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">
        Irrigation Control Dashboard
      </h1>

      {/* Input Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Irrigation Parameters</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Name</label>
            <input
              type="text"
              name="crop_name"
              value={formData.crop_name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sowing Date</label>
            <input
              type="date"
              name="sowing_date"
              value={formData.sowing_date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Irrigation Method</label>
            <select
              name="irrigation_method"
              value={formData.irrigation_method}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="drip">Drip</option>
              <option value="sprinkler">Sprinkler</option>
              <option value="flood">Flood</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
            <select
              name="soil_type"
              value={formData.soil_type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="loamy">Loamy</option>
              <option value="clay">Clay</option>
              <option value="sandy">Sandy</option>
              <option value="silty">Silty</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Calculate Irrigation Requirements"}
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="text-center p-8">Loading irrigation data...</div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>Error: {error}</p>
        </div>
      )}

      {submitted && !loading && !error && farmData && (
        <>
          {/* Farm Selection */}
          <div className="mb-6">
            <label htmlFor="farmSelect" className="text-lg font-semibold">
              Select Farm:{" "}
            </label>
            <select
              id="farmSelect"
              className="ml-4 p-2 border rounded"
              value={selectedFarm}
              onChange={(e) => setSelectedFarm(e.target.value)}
            >
              <option value="farm1">Farm 1</option>
            </select>
          </div>

          {/* Dashboard Results */}
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
                <button
                  onClick={() => setIrrigationStatus(!irrigationStatus)}
                  className={`p-2 rounded-full text-white text-sm ${
                    irrigationStatus ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {irrigationStatus ? "Deactivate" : "Activate"}
                </button>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Water Flow Rate: <strong>{farmData.farm1.waterFlow} L/min</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Total Water Consumed: <strong>{farmData.farm1.totalWaterConsumption}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Next Irrigation: <strong>{farmData.farm1.nextWatering}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Recommendation: <strong>{farmData.farm1.irrigationMessage}</strong>
                </p>
              </div>
            </div>

            {/* Water Usage */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Water Usage</h2>
              <Doughnut data={getWaterUsageChartData()} />
              <p className="text-sm text-gray-500 mt-4">
                Used {farmData.farm1.waterUsage.used}% of available water ({farmData.farm1.waterUsage.totalAvailable})
              </p>
            </div>

            {/* Moisture Level */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Soil Moisture Level</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">{farmData.farm1.moistureLevel}%</p>
                <FaLeaf className="text-3xl text-green-500" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-green-500 h-6 text-xs font-medium text-blue-100 text-center p-1.5 leading-none rounded-l-full"
                  style={{ width: `${farmData.farm1.moistureLevel}%` }}
                >
                  {farmData.farm1.moistureLevel}%
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Ideal moisture range: 50%-70%</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* Farm Info */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Farm Information</h2>
              <p className="text-sm text-gray-600 mb-2">
                Crop Stage: <strong>{farmData.farm1.cropStage}</strong>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Farm Area: <strong>{farmData.farm1.area}</strong>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Precipitation: <strong>{farmData.farm1.precipitation}</strong>
              </p>
            </div>

            {/* Evapotranspiration */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Evapotranspiration</h2>
              <p className="text-2xl font-bold mb-2">{farmData.farm1.evapotranspiration}</p>
              <p className="text-sm text-gray-500">Crop water demand</p>
            </div>

            {/* Water Deficit */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Water Deficit</h2>
              <p className="text-2xl font-bold mb-2">{farmData.farm1.deficit}</p>
              <p className="text-sm text-gray-500">Additional water needed</p>
            </div>

            {/* Efficiency */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
              <Bar 
                data={getEfficiencyChartData()} 
                options={{ 
                  responsive: true, 
                  indexAxis: "y",
                  scales: {
                    x: {
                      min: 0,
                      max: 100
                    }
                  }
                }} 
              />
              <p className="text-sm text-gray-500 mt-2">
                Current efficiency: {farmData.farm1.efficiency}%
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IrrigationControl;