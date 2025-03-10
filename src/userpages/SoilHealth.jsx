import React from "react";
import { FaLeaf } from "react-icons/fa"; // Leaf icon
import { FiThermometer } from "react-icons/fi"; // Thermometer icon for temperature
import { Line } from "react-chartjs-2"; // For Line Chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { GiEarthAmerica } from "react-icons/gi";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SoilHealth = () => {
  // Dummy Data for Soil Health
  const soilHealthData = {
    ph: 6.5, // pH level
    nitrogen: 80, // Nitrogen level in percentage
    phosphorus: 75, // Phosphorus level in percentage
    potassium: 70, // Potassium level in percentage
    organicMatter: 5, // Organic matter percentage
    moisture: 60, // Soil moisture content in percentage
    lastTest: "2024-12-15", // Last soil test date
    temperature: "22°C", // Temperature
  };

  // Line chart data for showing soil pH over time (dummy data)
  const pHChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Months
    datasets: [
      {
        label: "Soil pH Level",
        data: [6.4, 6.5, 6.7, 6.8, 6.6, 6.5], // Dummy pH data over time
        fill: false,
        borderColor: "#28a745",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Soil pH Level Over Time",
      },
    },
  };

  return (
    <div className="p-8 bg-[#eaece4]">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Soil Health Overview</h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

        {/* Soil pH Section with Progress Bar */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Soil pH</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">{soilHealthData.ph}</p>
            <GiEarthAmerica className="text-3xl text-brown-500" />
          </div>
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              style={{ width: `${(soilHealthData.ph - 5) * 20}%` }} // Dynamic width based on pH
            >
              {soilHealthData.ph} pH
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Optimal pH range: 6-7.5</p>
        </div>

        {/* Soil Nutrient Levels */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Soil Nutrients</h2>
          <div className="space-y-4">
            {/* Nitrogen Level */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Nitrogen</p>
              <FaLeaf className="text-2xl text-green-500" />
            </div>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                style={{ width: `${soilHealthData.nitrogen}%` }} // Dynamic width based on Nitrogen
              >
                {soilHealthData.nitrogen}%
              </div>
            </div>

            {/* Phosphorus Level */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Phosphorus</p>
              <FaLeaf className="text-2xl text-green-500" />
            </div>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                style={{ width: `${soilHealthData.phosphorus}%` }} // Dynamic width based on Phosphorus
              >
                {soilHealthData.phosphorus}%
              </div>
            </div>

            {/* Potassium Level */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Potassium</p>
              <FaLeaf className="text-2xl text-green-500" />
            </div>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                style={{ width: `${soilHealthData.potassium}%` }} // Dynamic width based on Potassium
              >
                {soilHealthData.potassium}%
              </div>
            </div>
          </div>
        </div>

        {/* Soil Temperature and Moisture */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Soil Temperature & Moisture</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FiThermometer className="text-2xl text-red-500 mr-2" />
              <p className="text-lg font-semibold">{soilHealthData.temperature}</p>
            </div>
            <div className="flex items-center">
              <GiEarthAmerica className="text-2xl text-blue-500 mr-2" />
              <p className="text-lg font-semibold">{soilHealthData.moisture}%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Optimal moisture range: 50%-70%</p>
        </div>

      </div>

      {/* Soil pH Over Time Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <Line data={pHChartData} options={chartOptions} />
      </div>

      {/* Last Soil Test */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">Soil Test Details</h2>
        <p className="text-lg font-semibold">Last Test: {soilHealthData.lastTest}</p>
        <p className="text-sm text-gray-500">Test Frequency: Annually</p>
      </div>

    </div>
  );
};

export default SoilHealth;
