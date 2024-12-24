import React, { useState } from "react";
import { FaUsers, FaCogs, FaLeaf, FaChartLine } from "react-icons/fa";
import { Line } from "react-chartjs-2"; // Chart for showing sales data or crop trends
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Dummy data for the dashboard
  const users = 150;
  const totalFarmArea = 500; // in hectares
  const crops = ["Wheat", "Rice", "Corn", "Soybean"];
  const cropHealth = [75, 80, 65, 90]; // Health of the crops as percentages
  const salesData = [5000, 6000, 5500, 7000, 8000, 10000]; // Sales data (units sold)
  const weatherData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 24, 21, 23, 25, 28],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Rainfall (mm)",
        data: [10, 5, 0, 15, 0, 3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-indigo-600">{users}</p>
          </div>
          <FaUsers className="text-4xl text-indigo-600" />
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total Farm Area</h3>
            <p className="text-2xl font-bold text-indigo-600">{totalFarmArea} Ha</p>
          </div>
          <FaLeaf className="text-4xl text-green-600" />
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Crops in Field</h3>
            <ul className="list-disc pl-4">
              {crops.map((crop, index) => (
                <li key={index} className="text-gray-600">
                  {crop}: {cropHealth[index]}% health
                </li>
              ))}
            </ul>
          </div>
          <FaCogs className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Sales (Last 6 Months)</h3>
            <p className="text-2xl font-bold text-indigo-600">${salesData.reduce((a, b) => a + b, 0)}</p>
          </div>
          <FaChartLine className="text-4xl text-blue-500" />
        </div>
      </div>

      {/* Weather and Climate Trends */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Weather and Climate</h2>
        <Line data={weatherData} />
      </div>

      {/* Detailed Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Field Health Insights</h3>
          <p className="text-gray-600">
            Based on our monitoring, the fields show healthy growth, with most crops having a
            health percentage above 75%. The irrigation system is functional, and weather data
            suggests no extreme events in the near future.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Crop Yield Prediction</h3>
          <p className="text-gray-600">
            Our system predicts an average yield increase of 15% based on the current weather
            patterns and crop health data. The forecast suggests a high demand for corn this season.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Sales Potential</h3>
          <p className="text-gray-600">
            The market shows a rising demand for wheat, and our analysis indicates a potential for
            a 10% increase in sales if we increase the supply. The pricing trends suggest good
            returns for soybean and rice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
