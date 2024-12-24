import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { saveAs } from "file-saver"; // For saving CSV file
import { FaLeaf } from "react-icons/fa"; // Crop icon
import { GiWateringCan } from "react-icons/gi"; // Soil, Irrigation, and Tractor icons
import { WiDaySunny } from "react-icons/wi"; // Weather icon
import { FaSeedling } from "react-icons/fa";  // Crop Monitoring icon  // Weather icon
import { FaWater } from "react-icons/fa"; 
import { GiEarthAmerica } from "react-icons/gi";

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
  const cropYieldData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Crop Yield (kg/ha)",
        data: [400, 420, 460, 480, 500, 520],
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
        data: [80, 85, 90, 92, 94, 95],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  // Sample function to export data as CSV
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

  const cropMonitoringData = [
    { crop: "Corn", growthStage: "Vegetative", healthStatus: "Healthy", lastUpdated: "2024-12-01" },
    { crop: "Wheat", growthStage: "Reproductive", healthStatus: "Needs Attention", lastUpdated: "2024-12-03" },
    { crop: "Rice", growthStage: "Maturity", healthStatus: "Healthy", lastUpdated: "2024-12-05" },
  ];

  const weatherData = {
    temperature: "22°C",
    rain: "10mm tomorrow",
    condition: "Sunny",
  };

  const irrigationData = {
    status: "Active",
    nextWatering: "2024-12-02, 6:00 AM",
  };

  const soilMoistureData = {
    level: "75%", // Example moisture level
    lastChecked: "2024-12-20", // Last time it was checked
  };

  const cropHealthData = {
    health: "80%", // Example crop health percentage
    condition: "Good", // Example condition
  };

  const irrigationStatusData = {
    status: "Active", // Status of irrigation system
    lastRun: "2024-12-22", // Last time irrigation system ran
  };

  return (
    <div className="p-8 bg-gray-100">
    <h1 className="text-3xl text-center font-semibold mb-6">Farm Overview</h1>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Soil Moisture Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Soil Moisture</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{soilMoistureData.level}</p>
            <GiEarthAmerica className="text-3xl text-brown-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Last Checked: {soilMoistureData.lastChecked}</p>
        </div>

        {/* Crop Health Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Crop Health</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{cropHealthData.health}</p>
            <FaLeaf className="text-3xl text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Condition: {cropHealthData.condition}</p>
        </div>

        {/* Irrigation Status Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Irrigation Status</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{irrigationStatusData.status}</p>
            <GiWateringCan className="text-3xl text-blue-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Last Run: {irrigationStatusData.lastRun}</p>
        </div>

      </div>

        {/* Data Visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Crop Monitoring */}
        <div className="bg-white shadow-lg rounded-lg p-6 ">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaSeedling className="text-green-500" />
            <span>Crop Monitoring</span>
          </h2>

          {/* Crop Monitoring Data */}
          <div className="space-y-4 overflow-y-scroll max-h-[200px]">
            {cropMonitoringData.map((item, index) => (
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

        {/* Weather & Climate */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <WiDaySunny className="text-yellow-500" />
            <span>Weather & Climate</span>
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-lg">Temperature: {weatherData.temperature}</p>
            <WiDaySunny className="text-3xl text-yellow-500" />
          </div>
          <p className="text-sm text-gray-500">Rain: {weatherData.rain}</p>
          <p className="text-sm text-gray-500">Condition: {weatherData.condition}</p>
        </div>

        {/* Irrigation Control */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaWater className="text-blue-500" />
            <span>Irrigation Control</span>
          </h2>
          <p className="text-gray-600">System Status: {irrigationData.status}</p>
          <p className="text-sm text-gray-500">Next Watering: {irrigationData.nextWatering}</p>
        </div>
      </div>
      </div>

      <div className="flex-1 ">


        {/* Analytics & Reports Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Analytics & Reports</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crop Yield Line Chart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Crop Yield Performance</h3>
              <Line data={cropYieldData} options={{ responsive: true, plugins: { title: { display: true, text: "Crop Yield Over Time" } } }} />
            </div>

            {/* Irrigation Efficiency Bar Chart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Irrigation Efficiency</h3>
              <Bar data={irrigationEfficiencyData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency Over Time" } } }} />
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
      </div>
    </div>
  );
};

export default Dashboard;
