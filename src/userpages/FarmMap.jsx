// import React from "react";
// import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix for default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const FarmMap = ({ farmsData, selectedFarm, setSelectedFarm }) => {
//   // Sample GeoJSON data for farm fields (replace with your actual data)
//   const farmFieldsGeoJSON = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         properties: { farmId: 0, fieldName: "North Field", cropType: "Corn" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [76.868376, 21.222700],
//               [76.878376, 21.222700],
//               [76.878376, 21.202700],
//               [76.868376, 21.202700],
//               [76.868376, 21.222700],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 0, fieldName: "South Field", cropType: "Wheat" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [76.878376, 21.192700],
//               [76.888376, 21.192700],
//               [76.888376, 21.182700],
//               [76.878376, 21.182700],
//               [76.878376, 21.192700],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 1, fieldName: "East Field", cropType: "Barley" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [77.003559, 21.253382],
//               [77.013559, 21.253382],
//               [77.013559, 21.233382],
//               [77.003559, 21.233382],
//               [77.003559, 21.253382],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 2, fieldName: "West Field", cropType: "Potato" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [77.025789, 21.259142],
//               [77.035789, 21.259142],
//               [77.035789, 21.239142],
//               [77.025789, 21.239142],
//               [77.025789, 21.259142],
//             ],
//           ],
//         },
//       },
//     ],
//   };

//   // Style for GeoJSON fields
//   const fieldStyle = (feature) => {
//     const farmId = feature.properties.farmId;
//     const colors = ["#4CAF50", "#2196F3", "#FFC107"]; // Different colors for different farms
    
//     return {
//       fillColor: colors[farmId],
//       weight: 2,
//       opacity: 1,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.7,
//     };
//   };

//   // Highlight field on hover
//   const highlightField = (e) => {
//     const layer = e.target;
//     layer.setStyle({
//       weight: 5,
//       color: "#666",
//       dashArray: "",
//       fillOpacity: 0.7,
//     });
//     layer.bringToFront();
//   };

//   // Reset field style on mouseout
//   const resetFieldHighlight = (e) => {
//     const layer = e.target;
//     layer.setStyle(fieldStyle(layer.feature));
//   };

//   // Add event listeners to each field
//   const onEachField = (feature, layer) => {
//     layer.on({
//       mouseover: highlightField,
//       mouseout: resetFieldHighlight,
//       click: () => setSelectedFarm(feature.properties.farmId),
//     });

//     const popupContent = `
//       <div>
//         <h3>${feature.properties.fieldName}</h3>
//         <p>Crop: ${feature.properties.cropType}</p>
//         <p>Farm: ${farmsData[feature.properties.farmId].name}</p>
//       </div>
//     `;
//     layer.bindPopup(popupContent);
//   };

//   return (
//     <MapContainer
//       center={farmsData[selectedFarm].location}
//       zoom={12}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
      
//       {/* Render farm fields */}
//       <GeoJSON
//         data={farmFieldsGeoJSON}
//         style={fieldStyle}
//         onEachFeature={onEachField}
//       />
      
//       {/* Render farm markers */}
//       {farmsData.map((farm, index) => (
//         <Marker key={index} position={farm.location}>
//           <Popup>
//             <div>
//               <h3>{farm.name}</h3>
//               <p>Area: {farm.area}</p>
//               <button
//                 onClick={() => setSelectedFarm(index)}
//                 className="text-blue-500 hover:underline"
//               >
//                 View Data
//               </button>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default FarmMap;


// import React from "react";
// import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix for default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const FarmMap = ({ farmsData, selectedFarm, setSelectedFarm }) => {
//   // Sample GeoJSON data for farm fields
//   const farmFieldsGeoJSON = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         properties: { farmId: 0, fieldName: "North Field", cropType: "Corn", area: "40 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [76.868376, 21.222700],
//               [76.878376, 21.222700],
//               [76.878376, 21.202700],
//               [76.868376, 21.202700],
//               [76.868376, 21.222700],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 0, fieldName: "South Field", cropType: "Wheat", area: "60 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [76.878376, 21.192700],
//               [76.888376, 21.192700],
//               [76.888376, 21.182700],
//               [76.878376, 21.182700],
//               [76.878376, 21.192700],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 1, fieldName: "East Field", cropType: "Barley", area: "50 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [77.003559, 21.253382],
//               [77.013559, 21.253382],
//               [77.013559, 21.233382],
//               [77.003559, 21.233382],
//               [77.003559, 21.253382],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 1, fieldName: "West Field", cropType: "Oats", area: "70 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [76.993559, 21.253382],
//               [77.003559, 21.253382],
//               [77.003559, 21.233382],
//               [76.993559, 21.233382],
//               [76.993559, 21.253382],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 2, fieldName: "Main Field", cropType: "Potato", area: "80 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [77.025789, 21.259142],
//               [77.035789, 21.259142],
//               [77.035789, 21.239142],
//               [77.025789, 21.239142],
//               [77.025789, 21.259142],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { farmId: 2, fieldName: "Orchard", cropType: "Tomato", area: "70 ha" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [77.035789, 21.249142],
//               [77.045789, 21.249142],
//               [77.045789, 21.239142],
//               [77.035789, 21.239142],
//               [77.035789, 21.249142],
//             ],
//           ],
//         },
//       },
//     ],
//   };

//   // Style for GeoJSON fields
//   const fieldStyle = (feature) => {
//     const farmId = feature.properties.farmId;
//     const colors = ["#4CAF50", "#2196F3", "#FFC107"]; // Different colors for different farms
    
//     return {
//       fillColor: colors[farmId],
//       weight: 2,
//       opacity: 1,
//       color: "white",
//       dashArray: "3",
//       fillOpacity: 0.7,
//     };
//   };

//   // Highlight field on hover
//   const highlightField = (e) => {
//     const layer = e.target;
//     layer.setStyle({
//       weight: 5,
//       color: "#666",
//       dashArray: "",
//       fillOpacity: 0.7,
//     });
//     layer.bringToFront();
//   };

//   // Reset field style on mouseout
//   const resetFieldHighlight = (e) => {
//     const layer = e.target;
//     layer.setStyle(fieldStyle(layer.feature));
//   };

//   // Add event listeners to each field
//   const onEachField = (feature, layer) => {
//     layer.on({
//       mouseover: highlightField,
//       mouseout: resetFieldHighlight,
//       click: () => setSelectedFarm(feature.properties.farmId),
//     });

//     const popupContent = `
//       <div class="p-2">
//         <h3 class="font-bold text-lg">${feature.properties.fieldName}</h3>
//         <p><span class="font-medium">Crop:</span> ${feature.properties.cropType}</p>
//         <p><span class="font-medium">Area:</span> ${feature.properties.area}</p>
//         <p><span class="font-medium">Farm:</span> ${farmsData[feature.properties.farmId].name}</p>
//         <button class="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
//           View Farm Details
//         </button>
//       </div>
//     `;
//     layer.bindPopup(popupContent);
//   };

//   return (
//     <MapContainer
//       center={farmsData[selectedFarm].location}
//       zoom={12}
//       style={{ height: "400px", width: "100%" }}
//       className="rounded-md"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
      
//       {/* Render farm fields */}
//       <GeoJSON
//         data={farmFieldsGeoJSON}
//         style={fieldStyle}
//         onEachFeature={onEachField}
//       />
      
//       {/* Render farm markers */}
//       {farmsData.map((farm, index) => (
//         <Marker 
//           key={index} 
//           position={farm.location}
//           eventHandlers={{
//             click: () => setSelectedFarm(index),
//           }}
//         >
//           <Popup>
//             <div className="p-2">
//               <h3 className="font-bold text-lg">{farm.name}</h3>
//               <p className="text-sm">Area: {farm.area}</p>
//               <button 
//                 onClick={() => setSelectedFarm(index)}
//                 className="mt-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
//               >
//                 View Farm Data
//               </button>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default FarmMap;

import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create custom marker icons
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const FarmMap = ({ farmsData, selectedFarm, setSelectedFarm }) => {
  // ... (rest of your component code remains the same)
  const farmFieldsGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { farmId: 0, fieldName: "North Field", cropType: "Corn", area: "40 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [76.868376, 21.222700],
              [76.878376, 21.222700],
              [76.878376, 21.202700],
              [76.868376, 21.202700],
              [76.868376, 21.222700],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { farmId: 0, fieldName: "South Field", cropType: "Wheat", area: "60 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [76.878376, 21.192700],
              [76.888376, 21.192700],
              [76.888376, 21.182700],
              [76.878376, 21.182700],
              [76.878376, 21.192700],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { farmId: 1, fieldName: "East Field", cropType: "Barley", area: "50 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.003559, 21.253382],
              [77.013559, 21.253382],
              [77.013559, 21.233382],
              [77.003559, 21.233382],
              [77.003559, 21.253382],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { farmId: 1, fieldName: "West Field", cropType: "Oats", area: "70 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [76.993559, 21.253382],
              [77.003559, 21.253382],
              [77.003559, 21.233382],
              [76.993559, 21.233382],
              [76.993559, 21.253382],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { farmId: 2, fieldName: "Main Field", cropType: "Potato", area: "80 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.025789, 21.259142],
              [77.035789, 21.259142],
              [77.035789, 21.239142],
              [77.025789, 21.239142],
              [77.025789, 21.259142],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { farmId: 2, fieldName: "Orchard", cropType: "Tomato", area: "70 ha" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.035789, 21.249142],
              [77.045789, 21.249142],
              [77.045789, 21.239142],
              [77.035789, 21.239142],
              [77.035789, 21.249142],
            ],
          ],
        },
      },
    ],
  };

  // Style for GeoJSON fields
  const fieldStyle = (feature) => {
    const farmId = feature.properties.farmId;
    const colors = ["#4CAF50", "#2196F3", "#FFC107"]; // Different colors for different farms
    
    return {
      fillColor: colors[farmId],
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  // Highlight field on hover
  const highlightField = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
    layer.bringToFront();
  };

  // Reset field style on mouseout
  const resetFieldHighlight = (e) => {
    const layer = e.target;
    layer.setStyle(fieldStyle(layer.feature));
  };

  // Add event listeners to each field
  const onEachField = (feature, layer) => {
    layer.on({
      mouseover: highlightField,
      mouseout: resetFieldHighlight,
      click: () => setSelectedFarm(feature.properties.farmId),
    });

    const popupContent = `
      <div class="p-2">
        <h3 class="font-bold text-lg">${feature.properties.fieldName}</h3>
        <p><span class="font-medium">Crop:</span> ${feature.properties.cropType}</p>
        <p><span class="font-medium">Area:</span> ${feature.properties.area}</p>
        <p><span class="font-medium">Farm:</span> ${farmsData[feature.properties.farmId].name}</p>
        <button class="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
          View Farm Details
        </button>
      </div>
    `;
    layer.bindPopup(popupContent);
  };
  return (
    <MapContainer
      center={farmsData[selectedFarm].location}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
      className="rounded-md"
    >
      {/* ... (rest of your JSX remains the same) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Render farm fields */}
      <GeoJSON
        data={farmFieldsGeoJSON}
        style={fieldStyle}
        onEachFeature={onEachField}
      />
      
      {/* Render farm markers */}
      {farmsData.map((farm, index) => (
        <Marker 
          key={index} 
          position={farm.location}
          eventHandlers={{
            click: () => setSelectedFarm(index),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{farm.name}</h3>
              <p className="text-sm">Area: {farm.area}</p>
              <button 
                onClick={() => setSelectedFarm(index)}
                className="mt-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                View Farm Data
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default FarmMap;