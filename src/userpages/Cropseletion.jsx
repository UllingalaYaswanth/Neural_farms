// import React, { useState } from "react";

// const CropPrediction = () => {
//   const [cropRequest, setCropRequest] = useState({
//     location: "",
//     previousCrop: "",
//     weatherCondition: "",
//   });

//   const [suggestions, setSuggestions] = useState([]);

//   // Dummy data for map and suggestions
//   const dummyNeighboringFarms = [
//     { id: 1, name: "Farm A", crop: "Wheat" },
//     { id: 2, name: "Farm B", crop: "Rice" },
//     { id: 3, name: "Farm C", crop: "Corn" },
//   ];

//   const handleCropRequest = (e) => {
//     e.preventDefault();

//     // Simulate backend response with crop suggestions
//     const dummySuggestions = [
//       {
//         crop: "Wheat",
//         probability: "75%",
//         profitMargin: "$200/acre",
//         warehouse: "Warehouse A (5km away)",
//         yieldTime: "4 months",
//       },
//       {
//         crop: "Rice",
//         probability: "60%",
//         profitMargin: "$180/acre",
//         warehouse: "Warehouse B (10km away)",
//         yieldTime: "5 months",
//       },
//       {
//         crop: "Corn",
//         probability: "65%",
//         profitMargin: "$220/acre",
//         warehouse: "Warehouse C (8km away)",
//         yieldTime: "3.5 months",
//       },
//     ];

//     setSuggestions(dummySuggestions);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Map Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Your Farm Location</h2>
//         <div className="bg-gray-300 h-64 rounded-lg relative">
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p className="text-lg font-semibold">Your Farm</p>
//             <p className="text-sm text-gray-700">Location: XYZ Coordinates</p>
//           </div>
//           {dummyNeighboringFarms.map((farm) => (
//             <div
//               key={farm.id}
//               className="absolute bottom-4 right-4 bg-white p-2 rounded shadow"
//             >
//               <p className="text-sm font-medium">{farm.name}</p>
//               <p className="text-xs text-gray-600">Growing: {farm.crop}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Crop Request Form */}
//       <form onSubmit={handleCropRequest} className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Raise Crop Prediction Request</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               value={cropRequest.location}
//               onChange={(e) =>
//                 setCropRequest({ ...cropRequest, location: e.target.value })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your farm location"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Previous Crop
//             </label>
//             <input
//               type="text"
//               value={cropRequest.previousCrop}
//               onChange={(e) =>
//                 setCropRequest({ ...cropRequest, previousCrop: e.target.value })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter previous crop"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Weather Condition
//             </label>
//             <input
//               type="text"
//               value={cropRequest.weatherCondition}
//               onChange={(e) =>
//                 setCropRequest({
//                   ...cropRequest,
//                   weatherCondition: e.target.value,
//                 })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter current weather condition"
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Submit Request
//         </button>
//       </form>

//       {/* Crop Suggestions */}
//       {suggestions.length > 0 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Crop Suggestions</h2>
//           <div className="space-y-4">
//             {suggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md space-y-2"
//               >
//                 <p className="text-lg font-semibold">{suggestion.crop}</p>
//                 <p>
//                   <span className="font-medium">Probability:</span>{" "}
//                   {suggestion.probability}
//                 </p>
//                 <p>
//                   <span className="font-medium">Profit Margin:</span>{" "}
//                   {suggestion.profitMargin}
//                 </p>
//                 <p>
//                   <span className="font-medium">Nearby Warehouse:</span>{" "}
//                   {suggestion.warehouse}
//                 </p>
//                 <p>
//                   <span className="font-medium">Estimated Yield Time:</span>{" "}
//                   {suggestion.yieldTime}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CropPrediction;

// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const CropPrediction = () => {
//   const [cropRequest, setCropRequest] = useState({
//     location: "",
//     previousCrop: "",
//     weatherCondition: "",
//   });

//   const [suggestions, setSuggestions] = useState([]);

//   // Dummy data for farmer and neighboring farms
//   const dummyFarms = [
//     { id: 1, name: "Your Farm", crop: "Wheat", position: [51.505, -0.09] }, // Farmer's field
//     { id: 2, name: "Farm A", crop: "Rice", position: [51.51, -0.1] },
//     { id: 3, name: "Farm B", crop: "Corn", position: [51.5, -0.08] },
//     { id: 4, name: "Farm C", crop: "Barley", position: [51.49, -0.07] },
//   ];

//   const handleCropRequest = (e) => {
//     e.preventDefault();

//     // Simulate backend response with crop suggestions
//     const dummySuggestions = [
//       {
//         crop: "Wheat",
//         probability: "75%",
//         profitMargin: "$200/acre",
//         warehouse: "Warehouse A (5km away)",
//         yieldTime: "4 months",
//       },
//       {
//         crop: "Rice",
//         probability: "60%",
//         profitMargin: "$180/acre",
//         warehouse: "Warehouse B (10km away)",
//         yieldTime: "5 months",
//       },
//       {
//         crop: "Corn",
//         probability: "65%",
//         profitMargin: "$220/acre",
//         warehouse: "Warehouse C (8km away)",
//         yieldTime: "3.5 months",
//       },
//     ];

//     setSuggestions(dummySuggestions);
//   };

//   return (
//     <div className="p-6  min-h-screen">
//       {/* Header */}
//       <header className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-green-800">Crop Prediction Service</h1>
//         <p className="text-gray-600 mt-2">Find the best crops for your farm based on weather, soil, and market trends.</p>
//       </header>

//       {/* Map Section */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold text-green-700 mb-4">Map of Your Farm and Neighbors</h2>
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <MapContainer
//             center={[51.505, -0.09]} // Default center (can be dynamic)
//             zoom={13}
//             style={{ height: "400px", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {dummyFarms.map((farm) => (
//               <Marker key={farm.id} position={farm.position}>
//                 <Popup>
//                   <div className="text-center">
//                     <p className="font-bold text-green-800">{farm.name}</p>
//                     <p className="text-sm text-gray-700">Crop: {farm.crop}</p>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </section>

//       {/* Crop Request Form */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold text-green-700 mb-4">Raise Crop Prediction Request</h2>
//         <form onSubmit={handleCropRequest} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               value={cropRequest.location}
//               onChange={(e) =>
//                 setCropRequest({ ...cropRequest, location: e.target.value })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//               placeholder="Enter your farm location"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Previous Crop
//             </label>
//             <input
//               type="text"
//               value={cropRequest.previousCrop}
//               onChange={(e) =>
//                 setCropRequest({ ...cropRequest, previousCrop: e.target.value })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//               placeholder="Enter previous crop"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//             Land Area:
//             </label>
//             <input
//               type="text"
//               value={cropRequest.weatherCondition}
//               onChange={(e) =>
//                 setCropRequest({
//                   ...cropRequest,
//                   weatherCondition: e.target.value,
//                 })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//               placeholder="Enter Land Area"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Estimated Amount
//             </label>
//             <input
//               type="text"
//               value={cropRequest.weatherCondition}
//               onChange={(e) =>
//                 setCropRequest({
//                   ...cropRequest,
//                   weatherCondition: e.target.value,
//                 })
//               }
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//               placeholder="Enter Amount"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
//           >
//             Submit Request
//           </button>
//         </form>
//       </section>

//       {/* Crop Suggestions */}
//       {suggestions.length > 0 && (
//         <section>
//           <h2 className="text-xl font-semibold text-green-700 mb-4">Crop Suggestions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {suggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
//               >
//                 <p className="text-lg font-semibold text-green-800">{suggestion.crop}</p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Probability:</span>{" "}
//                   <span className="text-green-600">{suggestion.probability}</span>
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Profit Margin:</span>{" "}
//                   <span className="text-green-600">{suggestion.profitMargin}</span>
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Nearby Warehouse:</span>{" "}
//                   <span className="text-green-600">{suggestion.warehouse}</span>
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Estimated Yield Time:</span>{" "}
//                   <span className="text-green-600">{suggestion.yieldTime}</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default CropPrediction;

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

const CropPrediction = () => {
  const [cropRequest, setCropRequest] = useState({
    location: "",
    previousCrop: "",
    weatherCondition: "",
  });

  const [suggestions, setSuggestions] = useState([]);

  // Dummy data for farmer and neighboring farms
  const dummyFarms = [
    { id: 1, name: "Your Farm", crop: "Wheat", area:'5 acre', position: [51.505, -0.09] }, // Farmer's field
    { id: 2, name: "Farm A", crop: "Rice", area:'2 acre', position: [51.51, -0.1] },
    { id: 3, name: "Farm B", crop: "Corn", area:'4 acre', position: [51.5, -0.08] },
    { id: 4, name: "Farm C", crop: "Barley", area:'1 acre', position: [51.49, -0.07] },
  ];

  const handleCropRequest = (e) => {
    e.preventDefault();

    // Simulate backend response with crop suggestions
    const dummySuggestions = [
      {
        crop: "Wheat",
        probability: "75%",
        Estimated_cost: "80000",
        profitMargin: "$200/acre",
        warehouse: "Warehouse A (5km away)",
        yieldTime: "4 months",
        yieldData: [200, 250, 300, 350], // Historical, Present, Future
        governmentRateData: [5, 6, 7, 8], // Historical, Present, Future
      },
      {
        crop: "Rice",
        probability: "60%",
        Estimated_cost: "200000",
        profitMargin: "$180/acre",
        warehouse: "Warehouse B (10km away)",
        yieldTime: "5 months",
        yieldData: [150, 180, 200, 220],
        governmentRateData: [4, 5, 6, 7],
      },
      {
        crop: "Corn",
        probability: "65%",
        Estimated_cost: "100000",
        profitMargin: "$220/acre",
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
    <div className="p-6 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">
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
            center={[51.505, -0.09]} // Default center (can be dynamic)
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Land Area:
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
              placeholder="Enter Land Area"
            />
          </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">
               Estimated Amount
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
                {/* <p className="text-gray-600">
                  <span className="font-medium">Estimated Cost:</span>{" "}
                  <span className="text-green-600">
                    {suggestion.Estimated_cost}
                  </span>
                </p> */}
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
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CropPrediction;