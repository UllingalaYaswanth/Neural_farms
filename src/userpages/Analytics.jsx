import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2"; // For charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
} from "chart.js"; // Chart.js components

import { FaDownload, FaRegChartBar } from "react-icons/fa";

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

const AnalyticsAndReports = () => {
  // Dummy data for analytics and reports
  const [reportData] = useState({
    cropYield: [300, 400, 350, 450, 500, 600],
    irrigationEfficiency: [85, 80, 90, 75, 95, 85],
    weatherImpact: [10, 15, 5, 20, 25, 10],
  });

  const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

  // Chart Data for Crop Yield, Irrigation Efficiency, and Weather Impact
  const cropYieldData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Crop Yield (kg/ha)",
        data: reportData.cropYield,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const irrigationEfficiencyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Irrigation Efficiency (%)",
        data: reportData.irrigationEfficiency,
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const weatherImpactData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Weather Impact (mm)",
        data: reportData.weatherImpact,
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Handle date range selection
  const handleDateRangeChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Analytics & Reports</h1>

      {/* Date Range Filter */}
      <div className="mb-6 flex justify-between items-center">
        <select
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="Last 6 months">Last 6 months</option>
          <option value="Last 1 year">Last 1 year</option>
          <option value="Last 3 years">Last 3 years</option>
        </select>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
        {/* Crop Yield */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaRegChartBar className="mr-2 text-3xl text-green-500" />
            Crop Yield
          </h2>
          <p className="text-lg">{`${reportData.cropYield[reportData.cropYield.length - 1]} kg/ha`}</p>
          <p className="text-sm text-gray-500">Average yield for the last 6 months</p>
        </div>

        {/* Irrigation Efficiency */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaRegChartBar className="mr-2 text-3xl text-blue-500" />
            Irrigation Efficiency
          </h2>
          <p className="text-lg">{`${reportData.irrigationEfficiency[reportData.irrigationEfficiency.length - 1]}%`}</p>
          <p className="text-sm text-gray-500">Efficiency over the last 6 months</p>
        </div>

        {/* Weather Impact */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaRegChartBar className="mr-2 text-3xl text-orange-500" />
            Weather Impact
          </h2>
          <p className="text-lg">{`${reportData.weatherImpact[reportData.weatherImpact.length - 1]} mm`}</p>
          <p className="text-sm text-gray-500">Total rainfall impact over the last 6 months</p>
        </div>
      </div>

      {/* Charts for Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {/* Crop Yield Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Crop Yield Analysis</h2>
          <Line data={cropYieldData} options={{ responsive: true }} />
        </div>

        {/* Irrigation Efficiency Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
          <Line data={irrigationEfficiencyData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Weather Impact Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Weather Impact Analysis</h2>
        <Line data={weatherImpactData} options={{ responsive: true }} />
      </div>

      {/* Reports Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Download Reports</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-500">Generate a full report based on selected data range.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
            <FaDownload className="mr-2" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAndReports;
