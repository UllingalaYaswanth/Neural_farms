import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy Data
const dummyReportData = {
  totalFields: 10,
  totalCrops: 15,
  totalWaterUsage: "5000 liters",
  averageSoilMoisture: 75,
  averageCropHealth: 80,
  irrigationEfficiency: 90,
};

// Dummy charts data
const chartData = {
  labels: ["Field 1", "Field 2", "Field 3", "Field 4", "Field 5"],
  datasets: [
    {
      label: "Soil Moisture (%)",
      data: [75, 80, 65, 70, 90],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Crop Health (%)",
      data: [80, 85, 70, 75, 88],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};

const barChartData = {
  labels: ["Field 1", "Field 2", "Field 3", "Field 4", "Field 5"],
  datasets: [
    {
      label: "Irrigation Efficiency (%)",
      data: [95, 80, 85, 92, 90],
      backgroundColor: "rgba(53, 162, 235, 0.2)",
      borderColor: "rgba(53, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const ReportAnalytics = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownloadReport = () => {
    // Logic for downloading the report (e.g., in CSV format)
    console.log("Downloading Report...");
    setShowDownloadModal(false);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Reports & Analytics</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Field Overview</h2>
          <p className="text-lg">Total Fields: {dummyReportData.totalFields}</p>
          <p className="text-lg">Total Crops: {dummyReportData.totalCrops}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Water Usage</h2>
          <p className="text-lg">Total Water Usage: {dummyReportData.totalWaterUsage}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Soil & Crop Health</h2>
          <p className="text-lg">Average Soil Moisture: {dummyReportData.averageSoilMoisture}%</p>
          <p className="text-lg">Average Crop Health: {dummyReportData.averageCropHealth}%</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
          <p className="text-lg">Efficiency: {dummyReportData.irrigationEfficiency}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Soil Moisture & Crop Health</h2>
        <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: "Soil Moisture & Crop Health Over Time" } } }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
        <Bar data={barChartData} options={{ responsive: true, plugins: { title: { display: true, text: "Irrigation Efficiency by Field" } } }} />
      </div>
      </div>
      {/* Download Report Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Download Report</h3>
            <p className="text-lg mb-4">Would you like to download the report as a CSV file?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDownloadReport}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Download CSV
              </button>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Button */}
      <div className="mt-6 text-right">
        <button
          onClick={() => setShowDownloadModal(true)}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 flex items-center"
        >
          <FaDownload className="mr-2" />
          Download Report
        </button>
      </div>
    </div>
  );
};

export default ReportAnalytics;
