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

import { FaWater, FaExclamationCircle, FaSprayCan, FaLeaf, FaVirus } from "react-icons/fa";

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

const CropMonitoring = () => {
  // Dummy data for crop monitoring
  const [cropData] = useState({
    growthStages: [10, 30, 50, 70, 90], // Percentage progression in different growth stages
    cropHealth: 85, // Crop health percentage
    waterLevel: "Medium", // Water level (Low, Medium, High)
    pestInfestation: "Moderate", // Pest infestation (None, Moderate, Severe)
    pesticideEffect: "Effective", // Pesticide effect (Effective, Ineffective, Pending)
    leafDamage: "20%", // Leaf damage percentage
    diseasesDetected: ["Powdery mildew", "Root rot"], // Diseases detected
    alerts: ["Pest activity detected", "Watering system requires adjustment"],
  });

  const [selectedCrop, setSelectedCrop] = useState("Corn");

  // Chart Data for Crop Growth
  const growthStagesData = {
    labels: ["Germination", "Vegetative", "Flowering", "Maturation", "Harvest"],
    datasets: [
      {
        label: "Growth Stages (%)",
        data: cropData.growthStages,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Handle crop selection
  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Crop Monitoring</h1>

      {/* Crop Selection */}
      <div className="mb-6 flex justify-between items-center">
        <select
          value={selectedCrop}
          onChange={handleCropChange}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="Corn">Corn</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
        </select>
        <p className="text-lg text-gray-500">Selected Crop: {selectedCrop}</p>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Crop Health */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Crop Health
          </h2>
          <p className="text-lg">{`${cropData.cropHealth}%`}</p>
          <p className="text-sm text-gray-500">Health status of the selected crop</p>
        </div>

        {/* Growth Stage */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Growth Stage
          </h2>
          <p className="text-lg">{`Current Stage: ${cropData.growthStages[4]}% of Maturation`}</p>
          <p className="text-sm text-gray-500">Stage progress of the selected crop</p>
        </div>

        {/* Water Level */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaWater className="mr-2 text-3xl text-blue-500" />
            Water Level
          </h2>
          <p className="text-lg">{cropData.waterLevel}</p>
          <p className="text-sm text-gray-500">Current water level status of the crop</p>
        </div>
      </div>

      {/* Pest & Pesticides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Pest Infestation */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaExclamationCircle className="mr-2 text-3xl text-yellow-500" />
            Pest Infestation
          </h2>
          <p className="text-lg">{cropData.pestInfestation}</p>
          <p className="text-sm text-gray-500">Current pest infestation level in the crop</p>
        </div>

        {/* Pesticide Effect */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaSprayCan className="mr-2 text-3xl text-red-500" />
            Pesticide Effect
          </h2>
          <p className="text-lg">{cropData.pesticideEffect}</p>
          <p className="text-sm text-gray-500">Effectiveness of pesticide treatment</p>
        </div>

        {/* Leaf Damage */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLeaf className="mr-2 text-3xl text-green-500" />
            Leaf Damage
          </h2>
          <p className="text-lg">{cropData.leafDamage}</p>
          <p className="text-sm text-gray-500">Percentage of leaf damage</p>
        </div>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
      {/* Disease Detection */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FaVirus className="mr-2 text-3xl text-red-500" />
          Diseases Detected
        </h2>
        <ul className="text-sm text-gray-500">
          {cropData.diseasesDetected.map((disease, index) => (
            <li key={index}>{disease}</li>
          ))}
        </ul>
      </div>

      {/* Immediate Actions */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Immediate Actions</h2>
        <ul className="text-sm text-gray-500">
          <li>Spray pesticide for pest control</li>
          <li>Increase irrigation levels</li>
          <li>Apply fungicide for disease control</li>
          <li>Trim affected leaves to reduce infection spread</li>
        </ul>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
      {/* Crop Growth Stages Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Crop Growth Stages</h2>
        <Bar data={growthStagesData} options={{ responsive: true }} />
      </div>

      {/* Crop Health Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Crop Health Over Time</h2>
        <Line
          data={{
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            datasets: [
              {
                label: "Crop Health (%)",
                data: [80, 85, 90, 88, 85],
                borderColor: "#4caf50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                fill: true,
                tension: 0.1,
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </div>
      </div>
    </div>
  );
};

export default CropMonitoring;
