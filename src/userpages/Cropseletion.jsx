import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import ReactFlow from "reactflow"; // Import ReactFlow
import "reactflow/dist/style.css"; // Import styles


const FlowChart = ({ crop }) => {
  // Define crop-specific data
  const cropData = {
    Wheat: {
      sow: {
        uses: "Planting",
        methods: ["Broadcasting", "Drilling", "Drones"],
      },
      fertilize: {
        uses: "Nutrient Supply",
        methods: ["Spraying", "Spreading", "Drones"],
      },
      irrigate: {
        uses: "Watering",
        methods: ["Drip", "Sprinkler", "Pivot"],
      },
      pestControl: {
        uses: "Protection",
        methods: ["Spraying", "Trapping", "Drones"],
      },
      reap: {
        uses: "Reaping",
        methods: ["Manual", "Combine", "Autonomous"],
      },
      store: {
        uses: "Preservation",
        methods: ["Silo", "Barn", "AI Monitoring"],
      },
    },
    Rice: {
      sow: {
        uses: "Planting",
        methods: ["Transplanting", "Broadcasting", "Drones"],
      },
      fertilize: {
        uses: "Nutrient Supply",
        methods: ["Spraying", "Manual Spreading", "Drones"],
      },
      irrigate: {
        uses: "Watering",
        methods: ["Flood Irrigation", "Drip", "Sprinkler"],
      },
      pestControl: {
        uses: "Protection",
        methods: ["Spraying", "Biological Control", "Drones"],
      },
      reap: {
        uses: "Reaping",
        methods: ["Hand Cutting", "Combine Harvester", "Autonomous Machines"],
      },
      store: {
        uses: "Preservation",
        methods: ["Silo", "Warehouse", "Humidity Control"],
      },
    },
    Corn: {
      sow: {
        uses: "Planting",
        methods: ["Seed Drilling", "Precision Planter", "Drones"],
      },
      fertilize: {
        uses: "Nutrient Supply",
        methods: ["Spraying", "Side Dressing", "Drones"],
      },
      irrigate: {
        uses: "Watering",
        methods: ["Drip", "Center Pivot", "Sprinkler"],
      },
      pestControl: {
        uses: "Protection",
        methods: ["Spraying", "Genetic Resistance", "Drones"],
      },
      reap: {
        uses: "Reaping",
        methods: ["Hand Picking", "Combine Harvester", "AI-assisted Machines"],
      },
      store: {
        uses: "Preservation",
        methods: ["Silo", "Cribs", "Controlled Atmosphere"],
      },
    },
  };

  // Validate crop prop
  const selectedCrop = cropData[crop] ? crop : "Wheat"; // Fallback to "Wheat" if crop is invalid
  const cropInfo = cropData[selectedCrop];

  // Define nodes in a horizontal flow
  const nodes = [
    {
      id: "1",
      position: { x: 50, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>🌱 {selectedCrop}</h3>
          </div>
        ),
      },
      type: "input",
      style: {
        background: "#FFD700",
        color: "#000",
        border: "2px solid #FFA500",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "2",
      position: { x: 350, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>🌾 Sow</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.sow.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.sow.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#87CEEB",
        color: "#000",
        border: "2px solid #4682B4",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "3",
      position: { x: 650, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>🌿 Fertilize</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.fertilize.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.fertilize.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#90EE90",
        color: "#000",
        border: "2px solid #32CD32",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "4",
      position: { x: 950, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>💧 Irrigate</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.irrigate.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.irrigate.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#ADD8E6",
        color: "#000",
        border: "2px solid #1E90FF",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "5",
      position: { x: 1250, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>🐞 Pest Control</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.pestControl.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.pestControl.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#FFA07A",
        color: "#000",
        border: "2px solid #FF4500",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "6",
      position: { x: 1550, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>🔪 Reap</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.reap.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.reap.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#FFDAB9",
        color: "#000",
        border: "2px solid #FF8C00",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "7",
      position: { x: 1850, y: 100 },
      data: {
        label: (
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>📦 Store</h3>
            <div style={{ fontSize: "14px" }}>
              <p><strong>Uses:</strong> {cropInfo.store.uses}</p>
              <p><strong>Methods:</strong> {cropInfo.store.methods.join(", ")}</p>
            </div>
          </div>
        ),
      },
      style: {
        background: "#DDA0DD",
        color: "#000",
        border: "2px solid #800080",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
      },
    },
  ];

  // Define edges with labels (horizontal flow)
  const edges = [
    { id: "e1-2", source: "1", target: "2", label: "Sow", animated: true, style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
    { id: "e2-3", source: "2", target: "3", label: "Fertilize", animated: true,style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
    { id: "e3-4", source: "3", target: "4", label: "Irrigate", animated: true,style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
    { id: "e4-5", source: "4", target: "5", label: "Pest Control", animated: true,style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
    { id: "e5-6", source: "5", target: "6", label: "Reap", animated: true,style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
    { id: "e6-7", source: "6", target: "7", label: "Store", animated: true,style: { stroke: "#000000"}, markerEnd: { type: "arrowclosed" } },
  ];

  return (
    <div style={{ height: 500, width: "100%", border: "1px solid #ccc", marginTop: "20px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
};





// CropPrediction Component
const CropPrediction = () => {
  const [cropRequest, setCropRequest] = useState({
    location: "",
    previousCrop: "",
    weatherCondition: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Dummy data for farmer and neighboring farms
  const dummyFarms = [
    { id: 1, name: "Farm B", crop: "Wheat", area: '5 acre', position: [21.212700, 76.899396] }, // Farmer's field
    { id: 2, name: "Farm A", crop: "Rice", area: '2 acre', position: [21.219142, 76.899396] },
    { id: 3, name: "Your Farm", crop: "Corn", area: '4 acre', position: [21.212700, 76.878376] },
    { id: 4, name: "Farm C", crop: "Barley", area: '1 acre', position: [21.223700, 76.860096] },
  ];

  const handleCropRequest = (e) => {
    e.preventDefault();

    // Simulate backend response with crop suggestions
    const dummySuggestions = [
      {
        crop: "Wheat",
        probability: "75%",
        Estimated_cost: "80000",
        profitMargin: "₹20000/acre",
        warehouse: "Warehouse A (5km away)",
        yieldTime: "4 months",
        yieldData: [200, 250, 300, 350], // Historical, Present, Future
        governmentRateData: [5, 6, 7, 8], // Historical, Present, Future
      },
      {
        crop: "Rice",
        probability: "60%",
        Estimated_cost: "200000",
        profitMargin: "₹18000/acre",
        warehouse: "Warehouse B (10km away)",
        yieldTime: "5 months",
        yieldData: [150, 180, 200, 220],
        governmentRateData: [4, 5, 6, 7],
      },
      {
        crop: "Corn",
        probability: "65%",
        Estimated_cost: "100000",
        profitMargin: "₹22000/acre",
        warehouse: "Warehouse C (8km away)",
        yieldTime: "3.5 months",
        yieldData: [220, 240, 260, 280],
        governmentRateData: [6, 7, 8, 9],
      },
    ];

    setSuggestions(dummySuggestions);
  };

  // Chart data for each crop
  const getChartData = (yieldData, governmentRateData) => ({
    labels: ["2020", "2022", "2023", "2024"], // Time periods
    datasets: [
      {
        label: "Crop Yield (kg/acre)",
        data: yieldData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Government Rate ($/kg)",
        data: governmentRateData,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  });

  return (
    <div className="p-6 min-h-screen bg-[#eaece4]">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-center text-green-700">
          Crop Prediction Service
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best crops for your farm based on weather, soil, and market
          trends.
        </p>
      </header>

      {/* Map Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Map of Your Farm and Neighbors
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[21.212700, 76.878376]} // Default center (can be dynamic)
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
            />
            {dummyFarms.map((farm) => (
              <Marker key={farm.id} position={farm.position}>
                <Popup>
                  <div className="text-center">
                    <p className="font-bold text-green-800">{farm.name}</p>
                    <p className="text-sm text-gray-700">Crop: {farm.crop}</p>
                    <p className="text-sm text-gray-700">Acre: {farm.area}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* Crop Request Form */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Raise Crop Prediction Request
        </h2>
        <form onSubmit={handleCropRequest} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={cropRequest.location}
              onChange={(e) =>
                setCropRequest({ ...cropRequest, location: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your farm location"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Crop
            </label>
            <input
              type="text"
              value={cropRequest.previousCrop}
              onChange={(e) =>
                setCropRequest({ ...cropRequest, previousCrop: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter previous crop"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Land Area:
            </label>
            <input
              type="text"
              // value={cropRequest.weatherCondition}
              // onChange={(e) =>
              //   setCropRequest({
              //     ...cropRequest,
              //     weatherCondition: e.target.value,
              //   })
              // }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter Land Area"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Investment Amount
            </label>
            <input
              type="text"
              value={cropRequest.weatherCondition}
              onChange={(e) =>
                setCropRequest({
                  ...cropRequest,
                  weatherCondition: e.target.value,
                })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter Amount"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Crop Suggestions */}
      {suggestions.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Crop Suggestions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <p className="text-lg font-semibold text-green-800">
                  {suggestion.crop}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Probability:</span>{" "}
                  <span className="text-green-600">
                    {suggestion.probability}
                  </span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Profit Margin:</span>{" "}
                  <span className="text-green-600">
                    {suggestion.profitMargin}
                  </span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Nearby Warehouse:</span>{" "}
                  <span className="text-green-600">{suggestion.warehouse}</span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Estimated Yield Time:</span>{" "}
                  <span className="text-green-600">{suggestion.yieldTime}</span>
                </p>
                <div>
                  <h3 className="text-md font-semibold text-green-700 mb-2">
                    Yield and Government Rate Trends
                  </h3>
                  <Line
                    data={getChartData(
                      suggestion.yieldData,
                      suggestion.governmentRateData
                    )}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: `${suggestion.crop} Trends`,
                        },
                      },
                    }}
                  />
                </div>
                <button
                  onClick={() => setSelectedCrop(suggestion.crop)}
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Select
                </button>
               
              </div>
            ))}
          </div>
          {selectedCrop && (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Flowchart for {selectedCrop}
        </h2>
        <FlowChart crop={selectedCrop} />
      </div>
    )}
        </section>
      )}
    </div>
  );
};

export default CropPrediction;