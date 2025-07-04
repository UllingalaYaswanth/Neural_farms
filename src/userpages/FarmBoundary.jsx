// import React, { useEffect, useRef, useCallback, useState } from 'react';
// import { 
//   MapPin, 
//   Navigation, 
//   Square, 
//   Save, 
//   Trash2, 
//   Download, 
//   Calculator,
//   Eye,
//   EyeOff,
//   Home,
//   Layers,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw
// } from 'lucide-react';

// const FarmBoundary = () => {
//   const mapRef = useRef(null);
//   const canvasRef = useRef(null);
  
//   // State management
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [boundaryPoints, setBoundaryPoints] = useState([]);
//   const [farmLocation, setFarmLocation] = useState(null);
//   const [userLocation, setUserLocation] = useState('');
//   const [farmArea, setFarmArea] = useState(0);
//   const [savedFarms, setSavedFarms] = useState([]);
//   const [currentFarmName, setCurrentFarmName] = useState('');
//   const [isLocationSearch, setIsLocationSearch] = useState(false);
//   const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // India center
//   const [zoomLevel, setZoomLevel] = useState(5);
//   const [mapType, setMapType] = useState('satellite'); // 'satellite', 'street', 'terrain'
//   const [showBoundary, setShowBoundary] = useState(true);

//   // Map tiles configuration
//   const mapTiles = {
//     satellite: {
//       name: 'Satellite',
//       url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//       attribution: 'Esri, Maxar, GeoEye'
//     },
//     street: {
//       name: 'Street',
//       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//       attribution: 'OpenStreetMap contributors'
//     },
//     terrain: {
//       name: 'Terrain',
//       url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
//       attribution: 'OpenTopoMap'
//     }
//   };

//   // Convert lat/lng to pixel coordinates
//   const latLngToPixel = useCallback((lat, lng, mapWidth, mapHeight) => {
//     const zoom = Math.pow(2, zoomLevel);
//     const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
//     const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     const pointX = (lng + 180) / 360 * 256 * zoom;
//     const pointY = (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     return {
//       x: mapWidth / 2 + (pointX - centerX),
//       y: mapHeight / 2 + (pointY - centerY)
//     };
//   }, [mapCenter, zoomLevel]);

//   // Convert pixel coordinates to lat/lng
//   const pixelToLatLng = useCallback((x, y, mapWidth, mapHeight) => {
//     const zoom = Math.pow(2, zoomLevel);
//     const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
//     const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     const pointX = centerX + (x - mapWidth / 2);
//     const pointY = centerY + (y - mapHeight / 2);
    
//     const lng = pointX / (256 * zoom) * 360 - 180;
//     const lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * pointY / (256 * zoom)))) * 180 / Math.PI;
    
//     return { lat, lng };
//   }, [mapCenter, zoomLevel]);

//   // Load map tiles
//   const loadMapTile = useCallback(async (x, y, z) => {
//     const tile = mapTiles[mapType];
//     let url = tile.url
//       .replace('{x}', x)
//       .replace('{y}', y)
//       .replace('{z}', z)
//       .replace('{s}', 'a'); // Use 'a' as subdomain

//     try {
//       const img = new Image();
//       img.crossOrigin = 'anonymous';
      
//       return new Promise((resolve, reject) => {
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error('Failed to load tile'));
//         img.src = url;
//       });
//     } catch (error) {
//       console.error('Error loading tile:', error);
//       return null;
//     }
//   }, [mapType]);

//   // Draw map
//   const drawMap = useCallback(async () => {
//     const canvas = canvasRef.current;
//     const container = mapRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const rect = container.getBoundingClientRect();
    
//     // Set canvas size
//     canvas.width = rect.width;
//     canvas.height = rect.height;
    
//     // Clear canvas
//     ctx.fillStyle = '#1a202c';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Calculate tile coordinates
//     const zoom = Math.floor(zoomLevel);
//     const scale = Math.pow(2, zoomLevel - zoom);
    
//     const centerTileX = Math.floor((mapCenter.lng + 180) / 360 * Math.pow(2, zoom));
//     const centerTileY = Math.floor((1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    
//     const tilesX = Math.ceil(canvas.width / 256 / scale) + 2;
//     const tilesY = Math.ceil(canvas.height / 256 / scale) + 2;
    
//     // Load and draw tiles
//     const tilePromises = [];
//     for (let x = -tilesX; x <= tilesX; x++) {
//       for (let y = -tilesY; y <= tilesY; y++) {
//         const tileX = centerTileX + x;
//         const tileY = centerTileY + y;
        
//         if (tileX >= 0 && tileY >= 0 && tileX < Math.pow(2, zoom) && tileY < Math.pow(2, zoom)) {
//           tilePromises.push(
//             loadMapTile(tileX, tileY, zoom).then(img => {
//               if (img) {
//                 const pixelX = canvas.width / 2 + x * 256 * scale;
//                 const pixelY = canvas.height / 2 + y * 256 * scale;
//                 ctx.drawImage(img, pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
//               }
//             }).catch(() => {
//               // Draw placeholder for failed tiles
//               const pixelX = canvas.width / 2 + x * 256 * scale;
//               const pixelY = canvas.height / 2 + y * 256 * scale;
//               ctx.fillStyle = '#2d3748';
//               ctx.fillRect(pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
//             })
//           );
//         }
//       }
//     }

//     try {
//       await Promise.all(tilePromises);
//     } catch (error) {
//       console.error('Error loading some tiles:', error);
//     }

//     // Draw boundary and points
//     drawBoundaryAndPoints(ctx, canvas.width, canvas.height);
    
//     // Draw farm location
//     if (farmLocation) {
//       drawLocationMarker(ctx, farmLocation, canvas.width, canvas.height, '📍', '#ef4444');
//     }

//   }, [mapCenter, zoomLevel, mapType, loadMapTile, boundaryPoints, farmLocation]);

//   // Draw boundary and points
//   const drawBoundaryAndPoints = useCallback((ctx, width, height) => {
//     if (!showBoundary || boundaryPoints.length === 0) return;

//     const pixels = boundaryPoints.map(point => latLngToPixel(point.lat, point.lng, width, height));

//     // Draw polygon
//     if (pixels.length > 2) {
//       ctx.beginPath();
//       ctx.moveTo(pixels[0].x, pixels[0].y);
//       for (let i = 1; i < pixels.length; i++) {
//         ctx.lineTo(pixels[i].x, pixels[i].y);
//       }
//       ctx.closePath();
      
//       // Fill
//       ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
//       ctx.fill();
      
//       // Border
//       ctx.strokeStyle = '#22c55e';
//       ctx.lineWidth = 3;
//       ctx.stroke();
//     }

//     // Draw points
//     pixels.forEach((pixel, index) => {
//       // Point circle
//       ctx.beginPath();
//       ctx.arc(pixel.x, pixel.y, 8, 0, 2 * Math.PI);
//       ctx.fillStyle = '#fbbf24';
//       ctx.fill();
//       ctx.strokeStyle = '#000';
//       ctx.lineWidth = 2;
//       ctx.stroke();

//       // Point label
//       ctx.fillStyle = '#000';
//       ctx.font = 'bold 12px sans-serif';
//       ctx.textAlign = 'center';
//       ctx.fillText(`P${index + 1}`, pixel.x, pixel.y - 15);
//     });

//   }, [boundaryPoints, latLngToPixel, showBoundary]);

//   // Draw location marker
//   const drawLocationMarker = useCallback((ctx, location, width, height, emoji, color) => {
//     const pixel = latLngToPixel(location.lat, location.lng, width, height);
    
//     // Draw marker
//     ctx.font = '24px serif';
//     ctx.textAlign = 'center';
//     ctx.fillText(emoji, pixel.x, pixel.y);
    
//     // Draw label
//     if (location.name) {
//       ctx.fillStyle = color;
//       ctx.font = 'bold 14px sans-serif';
//       ctx.fillText(location.name.split(',')[0], pixel.x, pixel.y + 30);
//     }
//   }, [latLngToPixel]);

//   // Handle canvas click
//   const handleCanvasClick = useCallback((event) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     if (isDrawing) {
//       const coords = pixelToLatLng(x, y, canvas.width, canvas.height);
//       setBoundaryPoints(prev => [...prev, coords]);
//     }
//   }, [isDrawing, pixelToLatLng]);

//   // Handle canvas right click
//   const handleCanvasRightClick = useCallback((event) => {
//     event.preventDefault();
//     if (isDrawing && boundaryPoints.length >= 3) {
//       finishDrawing();
//     }
//   }, [isDrawing, boundaryPoints]);

//   // Initialize map
//   useEffect(() => {
//     drawMap();
//   }, [drawMap]);

//   // Search and go to location
//   const searchLocation = async () => {
//     if (!userLocation.trim()) return;

//     setIsLocationSearch(true);
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(userLocation)}&limit=1`
//       );
//       const data = await response.json();

//       if (data && data.length > 0) {
//         const location = data[0];
//         const lat = parseFloat(location.lat);
//         const lng = parseFloat(location.lon);

//         setFarmLocation({ lat, lng, name: location.display_name });
//         setMapCenter({ lat, lng });
//         setZoomLevel(15);
//       } else {
//         alert('Location not found. Please try a different search term.');
//       }
//     } catch (error) {
//       console.error('Location search failed:', error);
//       alert('Location search failed. Please check your internet connection.');
//     } finally {
//       setIsLocationSearch(false);
//     }
//   };

//   // Get user's GPS location
//   const getUserLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by this browser.');
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         setFarmLocation({ lat, lng, name: 'Your Location' });
//         setUserLocation(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
//         setMapCenter({ lat, lng });
//         setZoomLevel(16);
//       },
//       (error) => {
//         console.error('GPS location error:', error);
//         alert('Unable to get your location. Please enter it manually.');
//       }
//     );
//   };

//   // Start drawing boundary
//   const startDrawing = () => {
//     setIsDrawing(true);
//     setBoundaryPoints([]);
//     setFarmArea(0);
//   };

//   // Finish drawing and create polygon
//   const finishDrawing = useCallback(() => {
//     if (boundaryPoints.length < 3) return;
//     setIsDrawing(false);
//     calculateArea();
//   }, [boundaryPoints]);

//   // Calculate farm area using shoelace formula
//   const calculateArea = useCallback(() => {
//     if (boundaryPoints.length < 3) return;

//     let area = 0;
//     const n = boundaryPoints.length;

//     for (let i = 0; i < n; i++) {
//       const j = (i + 1) % n;
//       area += boundaryPoints[i].lng * boundaryPoints[j].lat;
//       area -= boundaryPoints[j].lng * boundaryPoints[i].lat;
//     }

//     area = Math.abs(area) / 2;
    
//     // Convert to hectares (approximate)
//     const areaInSqMeters = area * 111000 * 111000 * Math.cos(mapCenter.lat * Math.PI / 180);
//     const areaInHectares = areaInSqMeters / 10000;
    
//     setFarmArea(areaInHectares);
//   }, [boundaryPoints, mapCenter.lat]);

//   // Clear all boundaries
//   const clearBoundary = () => {
//     setBoundaryPoints([]);
//     setIsDrawing(false);
//     setFarmArea(0);
//   };

//   // Save farm boundary
//   const saveFarm = () => {
//     if (!currentFarmName.trim() || boundaryPoints.length < 3) {
//       alert('Please enter a farm name and draw a boundary with at least 3 points.');
//       return;
//     }

//     const farmData = {
//       id: Date.now().toString(),
//       name: currentFarmName,
//       location: farmLocation,
//       boundary: boundaryPoints,
//       area: farmArea,
//       createdAt: new Date().toISOString(),
//     };

//     setSavedFarms(prev => [...prev, farmData]);
//     alert(`Farm "${currentFarmName}" saved successfully!`);
//     setCurrentFarmName('');
//   };

//   // Export farm data
//   const exportFarmData = () => {
//     if (boundaryPoints.length < 3) {
//       alert('Please draw a boundary first.');
//       return;
//     }

//     const exportData = {
//       farmName: currentFarmName || 'Unnamed Farm',
//       location: farmLocation,
//       boundary: boundaryPoints,
//       area: farmArea,
//       exportedAt: new Date().toISOString(),
//       format: 'GeoJSON',
//       geometry: {
//         type: 'Polygon',
//         coordinates: [boundaryPoints.map(p => [p.lng, p.lat])]
//       }
//     };

//     const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${currentFarmName || 'farm'}_boundary.json`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Zoom controls
//   const zoomIn = () => setZoomLevel(prev => Math.min(prev + 1, 18));
//   const zoomOut = () => setZoomLevel(prev => Math.max(prev - 1, 1));

//   // Load saved farm
//   const loadSavedFarm = (farm) => {
//     setBoundaryPoints(farm.boundary);
//     setFarmLocation(farm.location);
//     setCurrentFarmName(farm.name);
//     setFarmArea(farm.area);
//     if (farm.location) {
//       setMapCenter({ lat: farm.location.lat, lng: farm.location.lng });
//       setZoomLevel(15);
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
//       {/* Map Container */}
//       <div
//         ref={mapRef}
//         className="w-full h-full relative"
//       >
//         <canvas
//           ref={canvasRef}
//           onClick={handleCanvasClick}
//           onContextMenu={handleCanvasRightClick}
//           className="w-full h-full cursor-crosshair"
//           style={{ cursor: isDrawing ? 'crosshair' : 'grab' }}
//         />
//       </div>

//       {/* Header Controls */}
//       <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-4">
//         {/* Location Search */}
//         <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
//           <input
//             type="text"
//             placeholder="Enter your location or coordinates..."
//             value={userLocation}
//             onChange={(e) => setUserLocation(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-64"
//             onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
//           />
//           <button
//             onClick={searchLocation}
//             disabled={isLocationSearch}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
//           >
//             <MapPin size={16} />
//             {isLocationSearch ? 'Searching...' : 'Search'}
//           </button>
//           <button
//             onClick={getUserLocation}
//             className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
//           >
//             <Navigation size={16} />
//             GPS
//           </button>
//         </div>

//         {/* Map Controls */}
//         <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
//           <select
//             value={mapType}
//             onChange={(e) => setMapType(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
//           >
//             {Object.entries(mapTiles).map(([key, tile]) => (
//               <option key={key} value={key}>{tile.name}</option>
//             ))}
//           </select>
          
//           <button
//             onClick={() => setShowBoundary(!showBoundary)}
//             className={`${showBoundary ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white px-3 py-2 rounded flex items-center gap-2 transition-colors`}
//           >
//             {showBoundary ? <Eye size={16} /> : <EyeOff size={16} />}
//             Boundary
//           </button>
//         </div>
//       </div>

//       {/* Zoom Controls */}
//       <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
//         <button
//           onClick={zoomIn}
//           className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
//         >
//           <ZoomIn size={20} />
//         </button>
//         <button
//           onClick={zoomOut}
//           className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
//         >
//           <ZoomOut size={20} />
//         </button>
//         <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded backdrop-blur-sm text-sm text-center">
//           {zoomLevel.toFixed(1)}
//         </div>
//       </div>

//       {/* Drawing Controls */}
//       <div className="absolute top-20 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
//         <h3 className="text-white font-bold mb-3">Farm Boundary Tools</h3>
        
//         <div className="space-y-3">
//           <input
//             type="text"
//             placeholder="Farm name..."
//             value={currentFarmName}
//             onChange={(e) => setCurrentFarmName(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-full"
//           />
          
//           <div className="flex flex-col gap-2">
//             <button
//               onClick={startDrawing}
//               disabled={isDrawing}
//               className={`${isDrawing ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center`}
//             >
//               <Square size={16} />
//               {isDrawing ? 'Drawing... (Right-click to finish)' : 'Start Drawing Boundary'}
//             </button>
            
//             <button
//               onClick={clearBoundary}
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Trash2 size={16} />
//               Clear Boundary
//             </button>
            
//             <button
//               onClick={saveFarm}
//               disabled={boundaryPoints.length < 3 || !currentFarmName.trim()}
//               className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Save size={16} />
//               Save Farm
//             </button>
            
//             <button
//               onClick={exportFarmData}
//               disabled={boundaryPoints.length < 3}
//               className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Download size={16} />
//               Export Data
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Farm Information Panel */}
//       {(farmLocation || boundaryPoints.length > 0) && (
//         <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm min-w-80">
//           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
//             <Calculator size={16} />
//             Farm Information
//           </h3>
          
//           <div className="space-y-2 text-white text-sm">
//             {farmLocation && (
//               <div>
//                 <strong>Location:</strong> {farmLocation.name || `${farmLocation.lat.toFixed(4)}, ${farmLocation.lng.toFixed(4)}`}
//               </div>
//             )}
            
//             <div>
//               <strong>Boundary Points:</strong> {boundaryPoints.length}
//             </div>
            
//             {farmArea > 0 && (
//               <div>
//                 <strong>Estimated Area:</strong> {farmArea.toFixed(2)} hectares
//               </div>
//             )}
            
//             <div>
//               <strong>Map Type:</strong> {mapTiles[mapType].name}
//             </div>
            
//             <div>
//               <strong>Zoom Level:</strong> {zoomLevel.toFixed(1)}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Saved Farms List */}
//       {savedFarms.length > 0 && (
//         <div className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm max-w-sm">
//           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
//             <Home size={16} />
//             Saved Farms ({savedFarms.length})
//           </h3>
          
//           <div className="space-y-2 max-h-48 overflow-y-auto">
//             {savedFarms.map((farm) => (
//               <div 
//                 key={farm.id} 
//                 className="bg-gray-800 rounded p-2 text-white text-sm cursor-pointer hover:bg-gray-700 transition-colors"
//                 onClick={() => loadSavedFarm(farm)}
//               >
//                 <div className="font-semibold">{farm.name}</div>
//                 <div className="text-gray-400">
//                   {farm.area.toFixed(2)} hectares • {farm.boundary.length} points
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   {new Date(farm.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Instructions */}
//       <div className="absolute top-4 right-20 z-10 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm max-w-xs">
//         <h4 className="text-white font-bold mb-2">Instructions</h4>
//         <ul className="text-white text-xs space-y-1">
//           <li>1. Search for your location or use GPS</li>
//           <li>2. Click "Start Drawing Boundary"</li>
//           <li>3. Click on map to add boundary points</li>
//           <li>4. Right-click to finish drawing</li>
//           <li>5. Save your farm for future reference</li>
//           <li>6. Click saved farms to load them</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FarmBoundary;





// import React, { useEffect, useRef, useCallback, useState } from 'react';
// import { 
//   MapPin, 
//   Navigation, 
//   Square, 
//   Save, 
//   Trash2, 
//   Download, 
//   Calculator,
//   Eye,
//   EyeOff,
//   Home,
//   Layers,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw
// } from 'lucide-react';

// const FarmBoundary = () => {
//   const mapRef = useRef(null);
//   const canvasRef = useRef(null);
  
//   // State management
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [boundaryPoints, setBoundaryPoints] = useState([]);
//   const [farmLocation, setFarmLocation] = useState(null);
//   const [userLocation, setUserLocation] = useState('');
//   const [farmArea, setFarmArea] = useState(0);
//   const [savedFarms, setSavedFarms] = useState([]);
//   const [currentFarmName, setCurrentFarmName] = useState('');
//   const [isLocationSearch, setIsLocationSearch] = useState(false);
//   const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // India center
//   const [zoomLevel, setZoomLevel] = useState(5);
//   const [mapType, setMapType] = useState('openstreetmap'); // default to OpenStreetMap
//   const [showBoundary, setShowBoundary] = useState(true);
//   const [isDragging, setIsDragging] = useState(false);
//   const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

//   // Map tiles configuration
//   const mapTiles = {
//     openstreetmap: {
//       name: 'OpenStreetMap',
//       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//       attribution: 'OpenStreetMap contributors'
//     },
//     satellite: {
//       name: 'Satellite',
//       url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
//       attribution: 'Esri, Maxar, GeoEye'
//     },
//     terrain: {
//       name: 'Terrain',
//       url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
//       attribution: 'OpenTopoMap'
//     }
//   };

//   // Convert lat/lng to pixel coordinates
//   const latLngToPixel = useCallback((lat, lng, mapWidth, mapHeight) => {
//     const zoom = Math.pow(2, zoomLevel);
//     const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
//     const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     const pointX = (lng + 180) / 360 * 256 * zoom;
//     const pointY = (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     return {
//       x: mapWidth / 2 + (pointX - centerX),
//       y: mapHeight / 2 + (pointY - centerY)
//     };
//   }, [mapCenter, zoomLevel]);

//   // Convert pixel coordinates to lat/lng
//   const pixelToLatLng = useCallback((x, y, mapWidth, mapHeight) => {
//     const zoom = Math.pow(2, zoomLevel);
//     const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
//     const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
//     const pointX = centerX + (x - mapWidth / 2);
//     const pointY = centerY + (y - mapHeight / 2);
    
//     const lng = pointX / (256 * zoom) * 360 - 180;
//     const lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * pointY / (256 * zoom)))) * 180 / Math.PI;
    
//     return { lat, lng };
//   }, [mapCenter, zoomLevel]);

//   // Load map tiles
//   const loadMapTile = useCallback(async (x, y, z) => {
//     const tile = mapTiles[mapType];
//     let url = tile.url
//       .replace('{x}', x)
//       .replace('{y}', y)
//       .replace('{z}', z)
//       .replace('{s}', ['a', 'b', 'c'][Math.floor(Math.random() * 3)]); // Random subdomain

//     try {
//       const img = new Image();
//       img.crossOrigin = 'anonymous';
      
//       return new Promise((resolve, reject) => {
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error('Failed to load tile'));
//         img.src = url;
//       });
//     } catch (error) {
//       console.error('Error loading tile:', error);
//       return null;
//     }
//   }, [mapType]);

//   // Draw map
//   const drawMap = useCallback(async () => {
//     const canvas = canvasRef.current;
//     const container = mapRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const rect = container.getBoundingClientRect();
    
//     // Set canvas size
//     canvas.width = rect.width;
//     canvas.height = rect.height;
    
//     // Clear canvas
//     ctx.fillStyle = '#1a202c';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Calculate tile coordinates
//     const zoom = Math.floor(zoomLevel);
//     const scale = Math.pow(2, zoomLevel - zoom);
    
//     const centerTileX = Math.floor((mapCenter.lng + 180) / 360 * Math.pow(2, zoom));
//     const centerTileY = Math.floor((1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    
//     const tilesX = Math.ceil(canvas.width / 256 / scale) + 2;
//     const tilesY = Math.ceil(canvas.height / 256 / scale) + 2;
    
//     // Load and draw tiles
//     const tilePromises = [];
//     for (let x = -tilesX; x <= tilesX; x++) {
//       for (let y = -tilesY; y <= tilesY; y++) {
//         const tileX = centerTileX + x;
//         const tileY = centerTileY + y;
        
//         if (tileX >= 0 && tileY >= 0 && tileX < Math.pow(2, zoom) && tileY < Math.pow(2, zoom)) {
//           tilePromises.push(
//             loadMapTile(tileX, tileY, zoom).then(img => {
//               if (img) {
//                 const pixelX = canvas.width / 2 + x * 256 * scale;
//                 const pixelY = canvas.height / 2 + y * 256 * scale;
//                 ctx.drawImage(img, pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
//               }
//             }).catch(() => {
//               // Draw placeholder for failed tiles
//               const pixelX = canvas.width / 2 + x * 256 * scale;
//               const pixelY = canvas.height / 2 + y * 256 * scale;
//               ctx.fillStyle = '#2d3748';
//               ctx.fillRect(pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
//             })
//           );
//         }
//       }
//     }

//     try {
//       await Promise.all(tilePromises);
//     } catch (error) {
//       console.error('Error loading some tiles:', error);
//     }

//     // Draw boundary and points
//     drawBoundaryAndPoints(ctx, canvas.width, canvas.height);
    
//     // Draw farm location
//     if (farmLocation) {
//       drawLocationMarker(ctx, farmLocation, canvas.width, canvas.height, '📍', '#ef4444');
//     }

//   }, [mapCenter, zoomLevel, mapType, loadMapTile, boundaryPoints, farmLocation]);

//   // Draw boundary and points
//   const drawBoundaryAndPoints = useCallback((ctx, width, height) => {
//     if (!showBoundary || boundaryPoints.length === 0) return;

//     const pixels = boundaryPoints.map(point => latLngToPixel(point.lat, point.lng, width, height));

//     // Draw polygon
//     if (pixels.length > 2) {
//       ctx.beginPath();
//       ctx.moveTo(pixels[0].x, pixels[0].y);
//       for (let i = 1; i < pixels.length; i++) {
//         ctx.lineTo(pixels[i].x, pixels[i].y);
//       }
//       ctx.closePath();
      
//       // Fill
//       ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
//       ctx.fill();
      
//       // Border
//       ctx.strokeStyle = '#22c55e';
//       ctx.lineWidth = 3;
//       ctx.stroke();
//     }

//     // Draw points
//     pixels.forEach((pixel, index) => {
//       // Point circle
//       ctx.beginPath();
//       ctx.arc(pixel.x, pixel.y, 8, 0, 2 * Math.PI);
//       ctx.fillStyle = '#fbbf24';
//       ctx.fill();
//       ctx.strokeStyle = '#000';
//       ctx.lineWidth = 2;
//       ctx.stroke();

//       // Point label
//       ctx.fillStyle = '#000';
//       ctx.font = 'bold 12px sans-serif';
//       ctx.textAlign = 'center';
//       ctx.fillText(`P${index + 1}`, pixel.x, pixel.y - 15);
//     });

//   }, [boundaryPoints, latLngToPixel, showBoundary]);

//   // Draw location marker
//   const drawLocationMarker = useCallback((ctx, location, width, height, emoji, color) => {
//     const pixel = latLngToPixel(location.lat, location.lng, width, height);
    
//     // Draw marker
//     ctx.font = '24px serif';
//     ctx.textAlign = 'center';
//     ctx.fillText(emoji, pixel.x, pixel.y);
    
//     // Draw label
//     if (location.name) {
//       ctx.fillStyle = color;
//       ctx.font = 'bold 14px sans-serif';
//       ctx.fillText(location.name.split(',')[0], pixel.x, pixel.y + 30);
//     }
//   }, [latLngToPixel]);

//   // Handle canvas click
//   const handleCanvasClick = useCallback((event) => {
//     const canvas = canvasRef.current;
//     if (!canvas || isDragging) return;

//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     if (isDrawing) {
//       const coords = pixelToLatLng(x, y, canvas.width, canvas.height);
//       setBoundaryPoints(prev => [...prev, coords]);
//     }
//   }, [isDrawing, pixelToLatLng, isDragging]);

//   // Handle canvas right click
//   const handleCanvasRightClick = useCallback((event) => {
//     event.preventDefault();
//     if (isDrawing && boundaryPoints.length >= 3) {
//       finishDrawing();
//     }
//   }, [isDrawing, boundaryPoints]);

//   // Handle mouse wheel for zoom
//   const handleWheel = useCallback((event) => {
//     event.preventDefault();
//     const delta = event.deltaY > 0 ? -1 : 1;
//     setZoomLevel(prev => Math.max(1, Math.min(18, prev + delta * 0.5)));
//   }, []);

//   // Handle mouse drag for panning
//   const handleMouseDown = useCallback((event) => {
//     if (isDrawing) return;
//     setIsDragging(true);
//     setLastMousePos({ x: event.clientX, y: event.clientY });
//   }, [isDrawing]);

//   const handleMouseMove = useCallback((event) => {
//     if (!isDragging || isDrawing) return;

//     const deltaX = event.clientX - lastMousePos.x;
//     const deltaY = event.clientY - lastMousePos.y;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     // Convert pixel movement to lat/lng movement
//     const zoom = Math.pow(2, zoomLevel);
//     const lngDelta = -deltaX / (256 * zoom) * 360;
//     const latDelta = deltaY / (256 * zoom) * 360 * Math.cos(mapCenter.lat * Math.PI / 180);

//     setMapCenter(prev => ({
//       lat: Math.max(-85, Math.min(85, prev.lat + latDelta)),
//       lng: ((prev.lng + lngDelta + 180) % 360) - 180
//     }));

//     setLastMousePos({ x: event.clientX, y: event.clientY });
//   }, [isDragging, isDrawing, lastMousePos, zoomLevel, mapCenter]);

//   const handleMouseUp = useCallback(() => {
//     setIsDragging(false);
//   }, []);

//   // Initialize map
//   useEffect(() => {
//     drawMap();
//   }, [drawMap]);

//   // Add event listeners for mouse interactions
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.addEventListener('wheel', handleWheel, { passive: false });
//     canvas.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       canvas.removeEventListener('wheel', handleWheel);
//       canvas.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

//   // Search and go to location
//   const searchLocation = async () => {
//     if (!userLocation.trim()) return;

//     setIsLocationSearch(true);
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(userLocation)}&limit=1`
//       );
//       const data = await response.json();

//       if (data && data.length > 0) {
//         const location = data[0];
//         const lat = parseFloat(location.lat);
//         const lng = parseFloat(location.lon);

//         setFarmLocation({ lat, lng, name: location.display_name });
//         setMapCenter({ lat, lng });
//         setZoomLevel(15);
//       } else {
//         alert('Location not found. Please try a different search term.');
//       }
//     } catch (error) {
//       console.error('Location search failed:', error);
//       alert('Location search failed. Please check your internet connection.');
//     } finally {
//       setIsLocationSearch(false);
//     }
//   };

//   // Get user's GPS location
//   const getUserLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by this browser.');
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         setFarmLocation({ lat, lng, name: 'Your Location' });
//         setUserLocation(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
//         setMapCenter({ lat, lng });
//         setZoomLevel(16);
//       },
//       (error) => {
//         console.error('GPS location error:', error);
//         alert('Unable to get your location. Please enter it manually.');
//       }
//     );
//   };

//   // Start drawing boundary
//   const startDrawing = () => {
//     setIsDrawing(true);
//     setBoundaryPoints([]);
//     setFarmArea(0);
//   };

//   // Finish drawing and create polygon
//   const finishDrawing = useCallback(() => {
//     if (boundaryPoints.length < 3) return;
//     setIsDrawing(false);
//     calculateArea();
//   }, [boundaryPoints]);

//   // Calculate farm area using shoelace formula
//   const calculateArea = useCallback(() => {
//     if (boundaryPoints.length < 3) return;

//     let area = 0;
//     const n = boundaryPoints.length;

//     for (let i = 0; i < n; i++) {
//       const j = (i + 1) % n;
//       area += boundaryPoints[i].lng * boundaryPoints[j].lat;
//       area -= boundaryPoints[j].lng * boundaryPoints[i].lat;
//     }

//     area = Math.abs(area) / 2;
    
//     // Convert to hectares (approximate)
//     const areaInSqMeters = area * 111000 * 111000 * Math.cos(mapCenter.lat * Math.PI / 180);
//     const areaInHectares = areaInSqMeters / 10000;
    
//     setFarmArea(areaInHectares);
//   }, [boundaryPoints, mapCenter.lat]);

//   // Clear all boundaries
//   const clearBoundary = () => {
//     setBoundaryPoints([]);
//     setIsDrawing(false);
//     setFarmArea(0);
//   };

//   // Save farm boundary
//   const saveFarm = () => {
//     if (!currentFarmName.trim() || boundaryPoints.length < 3) {
//       alert('Please enter a farm name and draw a boundary with at least 3 points.');
//       return;
//     }

//     const farmData = {
//       id: Date.now().toString(),
//       name: currentFarmName,
//       location: farmLocation,
//       boundary: boundaryPoints,
//       area: farmArea,
//       createdAt: new Date().toISOString(),
//     };

//     setSavedFarms(prev => [...prev, farmData]);
//     alert(`Farm "${currentFarmName}" saved successfully!`);
//     setCurrentFarmName('');
//   };

//   // Export farm data
//   const exportFarmData = () => {
//     if (boundaryPoints.length < 3) {
//       alert('Please draw a boundary first.');
//       return;
//     }

//     const exportData = {
//       farmName: currentFarmName || 'Unnamed Farm',
//       location: farmLocation,
//       boundary: boundaryPoints,
//       area: farmArea,
//       exportedAt: new Date().toISOString(),
//       format: 'GeoJSON',
//       geometry: {
//         type: 'Polygon',
//         coordinates: [boundaryPoints.map(p => [p.lng, p.lat])]
//       }
//     };

//     const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${currentFarmName || 'farm'}_boundary.json`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Zoom controls
//   const zoomIn = () => setZoomLevel(prev => Math.min(prev + 1, 18));
//   const zoomOut = () => setZoomLevel(prev => Math.max(prev - 1, 1));

//   // Load saved farm
//   const loadSavedFarm = (farm) => {
//     setBoundaryPoints(farm.boundary);
//     setFarmLocation(farm.location);
//     setCurrentFarmName(farm.name);
//     setFarmArea(farm.area);
//     if (farm.location) {
//       setMapCenter({ lat: farm.location.lat, lng: farm.location.lng });
//       setZoomLevel(15);
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
//       {/* Map Container */}
//       <div
//         ref={mapRef}
//         className="w-full h-full relative"
//       >
//         <canvas
//           ref={canvasRef}
//           onClick={handleCanvasClick}
//           onContextMenu={handleCanvasRightClick}
//           className="w-full h-full"
//           style={{ 
//             cursor: isDrawing ? 'crosshair' : isDragging ? 'grabbing' : 'grab'
//           }}
//         />
//       </div>

//       {/* Header Controls */}
//       <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-4">
//         {/* Location Search */}
//         <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
//           <input
//             type="text"
//             placeholder="Enter your location or coordinates..."
//             value={userLocation}
//             onChange={(e) => setUserLocation(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-64"
//             onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
//           />
//           <button
//             onClick={searchLocation}
//             disabled={isLocationSearch}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
//           >
//             <MapPin size={16} />
//             {isLocationSearch ? 'Searching...' : 'Search'}
//           </button>
//           <button
//             onClick={getUserLocation}
//             className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
//           >
//             <Navigation size={16} />
//             GPS
//           </button>
//         </div>

//         {/* Map Controls */}
//         <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
//           <select
//             value={mapType}
//             onChange={(e) => setMapType(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
//           >
//             {Object.entries(mapTiles).map(([key, tile]) => (
//               <option key={key} value={key}>{tile.name}</option>
//             ))}
//           </select>
          
//           <button
//             onClick={() => setShowBoundary(!showBoundary)}
//             className={`${showBoundary ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white px-3 py-2 rounded flex items-center gap-2 transition-colors`}
//           >
//             {showBoundary ? <Eye size={16} /> : <EyeOff size={16} />}
//             Boundary
//           </button>
//         </div>
//       </div>

//       {/* Zoom Controls */}
//       <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
//         <button
//           onClick={zoomIn}
//           className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
//         >
//           <ZoomIn size={20} />
//         </button>
//         <button
//           onClick={zoomOut}
//           className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
//         >
//           <ZoomOut size={20} />
//         </button>
//         <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded backdrop-blur-sm text-sm text-center">
//           {zoomLevel.toFixed(1)}
//         </div>
//       </div>

//       {/* Drawing Controls */}
//       <div className="absolute top-20 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
//         <h3 className="text-white font-bold mb-3">Farm Boundary Tools</h3>
        
//         <div className="space-y-3">
//           <input
//             type="text"
//             placeholder="Farm name..."
//             value={currentFarmName}
//             onChange={(e) => setCurrentFarmName(e.target.value)}
//             className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-full"
//           />
          
//           <div className="flex flex-col gap-2">
//             <button
//               onClick={startDrawing}
//               disabled={isDrawing}
//               className={`${isDrawing ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center`}
//             >
//               <Square size={16} />
//               {isDrawing ? 'Drawing... (Right-click to finish)' : 'Start Drawing Boundary'}
//             </button>
            
//             <button
//               onClick={clearBoundary}
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Trash2 size={16} />
//               Clear Boundary
//             </button>
            
//             <button
//               onClick={saveFarm}
//               disabled={boundaryPoints.length < 3 || !currentFarmName.trim()}
//               className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Save size={16} />
//               Save Farm
//             </button>
            
//             <button
//               onClick={exportFarmData}
//               disabled={boundaryPoints.length < 3}
//               className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
//             >
//               <Download size={16} />
//               Export Data
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Farm Information Panel */}
//       {(farmLocation || boundaryPoints.length > 0) && (
//         <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm min-w-80">
//           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
//             <Calculator size={16} />
//             Farm Information
//           </h3>
          
//           <div className="space-y-2 text-white text-sm">
//             {farmLocation && (
//               <div>
//                 <strong>Location:</strong> {farmLocation.name || `${farmLocation.lat.toFixed(4)}, ${farmLocation.lng.toFixed(4)}`}
//               </div>
//             )}
            
//             <div>
//               <strong>Boundary Points:</strong> {boundaryPoints.length}
//             </div>
            
//             {farmArea > 0 && (
//               <div>
//                 <strong>Estimated Area:</strong> {farmArea.toFixed(2)} hectares
//               </div>
//             )}
            
//             <div>
//               <strong>Map Type:</strong> {mapTiles[mapType].name}
//             </div>
            
//             <div>
//               <strong>Zoom Level:</strong> {zoomLevel.toFixed(1)}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Saved Farms List */}
//       {savedFarms.length > 0 && (
//         <div className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm max-w-sm">
//           <h3 className="text-white font-bold mb-3 flex items-center gap-2">
//             <Home size={16} />
//             Saved Farms ({savedFarms.length})
//           </h3>
          
//           <div className="space-y-2 max-h-48 overflow-y-auto">
//             {savedFarms.map((farm) => (
//               <div 
//                 key={farm.id} 
//                 className="bg-gray-800 rounded p-2 text-white text-sm cursor-pointer hover:bg-gray-700 transition-colors"
//                 onClick={() => loadSavedFarm(farm)}
//               >
//                 <div className="font-semibold">{farm.name}</div>
//                 <div className="text-gray-400">
//                   {farm.area.toFixed(2)} hectares • {farm.boundary.length} points
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   {new Date(farm.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Instructions */}
//       <div className="absolute top-4 right-20 z-10 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm max-w-xs">
//         <h4 className="text-white font-bold mb-2">Instructions</h4>
//         <ul className="text-white text-xs space-y-1">
//           <li>• Search for your location or use GPS</li>
//           <li>• Use mouse wheel to zoom in/out</li>
//           <li>• Drag to pan the map</li>
//           <li>• Click "Start Drawing" to mark boundaries</li>
//           <li>• Click on map to add boundary points</li>
//           <li>• Right-click to finish drawing</li>
//           <li>• Save your farm for future reference</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FarmBoundary;



import React, { useEffect, useRef, useCallback, useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Square, 
  Save, 
  Trash2, 
  Download, 
  Calculator,
  Eye,
  EyeOff,
  Home,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';

const FarmBoundary = () => {
  const mapRef = useRef(null);
  const canvasRef = useRef(null);
  
  // State management
  const [isDrawing, setIsDrawing] = useState(false);
  const [boundaryPoints, setBoundaryPoints] = useState([]);
  const [farmLocation, setFarmLocation] = useState(null);
  const [userLocation, setUserLocation] = useState('');
  const [farmArea, setFarmArea] = useState(0);
  const [savedFarms, setSavedFarms] = useState([]);
  const [currentFarmName, setCurrentFarmName] = useState('');
  const [isLocationSearch, setIsLocationSearch] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // India center
  const [zoomLevel, setZoomLevel] = useState(5);
  const [mapType, setMapType] = useState('openstreetmap'); // default to OpenStreetMap
  const [showBoundary, setShowBoundary] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [copiedText, setCopiedText] = useState('');

  // Map tiles configuration
  const mapTiles = {
    openstreetmap: {
      name: 'OpenStreetMap',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'OpenStreetMap contributors'
    },
    satellite: {
      name: 'Satellite',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Esri, Maxar, GeoEye'
    },
    terrain: {
      name: 'Terrain',
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attribution: 'OpenTopoMap'
    }
  };

  // Convert lat/lng to pixel coordinates
  const latLngToPixel = useCallback((lat, lng, mapWidth, mapHeight) => {
    const zoom = Math.pow(2, zoomLevel);
    const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
    const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
    const pointX = (lng + 180) / 360 * 256 * zoom;
    const pointY = (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
    return {
      x: mapWidth / 2 + (pointX - centerX),
      y: mapHeight / 2 + (pointY - centerY)
    };
  }, [mapCenter, zoomLevel]);

  // Convert pixel coordinates to lat/lng
  const pixelToLatLng = useCallback((x, y, mapWidth, mapHeight) => {
    const zoom = Math.pow(2, zoomLevel);
    const centerX = (mapCenter.lng + 180) / 360 * 256 * zoom;
    const centerY = (1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * 256 * zoom;
    
    const pointX = centerX + (x - mapWidth / 2);
    const pointY = centerY + (y - mapHeight / 2);
    
    const lng = pointX / (256 * zoom) * 360 - 180;
    const lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * pointY / (256 * zoom)))) * 180 / Math.PI;
    
    return { lat, lng };
  }, [mapCenter, zoomLevel]);

  // Load map tiles
  const loadMapTile = useCallback(async (x, y, z) => {
    const tile = mapTiles[mapType];
    let url = tile.url
      .replace('{x}', x)
      .replace('{y}', y)
      .replace('{z}', z)
      .replace('{s}', ['a', 'b', 'c'][Math.floor(Math.random() * 3)]); // Random subdomain

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Failed to load tile'));
        img.src = url;
      });
    } catch (error) {
      console.error('Error loading tile:', error);
      return null;
    }
  }, [mapType]);

  // Draw map
  const drawMap = useCallback(async () => {
    const canvas = canvasRef.current;
    const container = mapRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const rect = container.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Clear canvas
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate tile coordinates
    const zoom = Math.floor(zoomLevel);
    const scale = Math.pow(2, zoomLevel - zoom);
    
    const centerTileX = Math.floor((mapCenter.lng + 180) / 360 * Math.pow(2, zoom));
    const centerTileY = Math.floor((1 - Math.log(Math.tan(mapCenter.lat * Math.PI / 180) + 1 / Math.cos(mapCenter.lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    
    const tilesX = Math.ceil(canvas.width / 256 / scale) + 2;
    const tilesY = Math.ceil(canvas.height / 256 / scale) + 2;
    
    // Load and draw tiles
    const tilePromises = [];
    for (let x = -tilesX; x <= tilesX; x++) {
      for (let y = -tilesY; y <= tilesY; y++) {
        const tileX = centerTileX + x;
        const tileY = centerTileY + y;
        
        if (tileX >= 0 && tileY >= 0 && tileX < Math.pow(2, zoom) && tileY < Math.pow(2, zoom)) {
          tilePromises.push(
            loadMapTile(tileX, tileY, zoom).then(img => {
              if (img) {
                const pixelX = canvas.width / 2 + x * 256 * scale;
                const pixelY = canvas.height / 2 + y * 256 * scale;
                ctx.drawImage(img, pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
              }
            }).catch(() => {
              // Draw placeholder for failed tiles
              const pixelX = canvas.width / 2 + x * 256 * scale;
              const pixelY = canvas.height / 2 + y * 256 * scale;
              ctx.fillStyle = '#2d3748';
              ctx.fillRect(pixelX - 128 * scale, pixelY - 128 * scale, 256 * scale, 256 * scale);
            })
          );
        }
      }
    }

    try {
      await Promise.all(tilePromises);
    } catch (error) {
      console.error('Error loading some tiles:', error);
    }

    // Draw boundary and points
    drawBoundaryAndPoints(ctx, canvas.width, canvas.height);
    
    // Draw farm location
    if (farmLocation) {
      drawLocationMarker(ctx, farmLocation, canvas.width, canvas.height, '📍', '#ef4444');
    }

  }, [mapCenter, zoomLevel, mapType, loadMapTile, boundaryPoints, farmLocation]);

  // Draw boundary and points
  const drawBoundaryAndPoints = useCallback((ctx, width, height) => {
    if (!showBoundary || boundaryPoints.length === 0) return;

    const pixels = boundaryPoints.map(point => latLngToPixel(point.lat, point.lng, width, height));

    // Draw polygon
    if (pixels.length > 2) {
      ctx.beginPath();
      ctx.moveTo(pixels[0].x, pixels[0].y);
      for (let i = 1; i < pixels.length; i++) {
        ctx.lineTo(pixels[i].x, pixels[i].y);
      }
      ctx.closePath();
      
      // Fill
      ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
      ctx.fill();
      
      // Border
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    // Draw points
    pixels.forEach((pixel, index) => {
      // Point circle
      ctx.beginPath();
      ctx.arc(pixel.x, pixel.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Point label
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`P${index + 1}`, pixel.x, pixel.y - 15);
    });

  }, [boundaryPoints, latLngToPixel, showBoundary]);

  // Draw location marker
  const drawLocationMarker = useCallback((ctx, location, width, height, emoji, color) => {
    const pixel = latLngToPixel(location.lat, location.lng, width, height);
    
    // Draw marker
    ctx.font = '24px serif';
    ctx.textAlign = 'center';
    ctx.fillText(emoji, pixel.x, pixel.y);
    
    // Draw label
    if (location.name) {
      ctx.fillStyle = color;
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(location.name.split(',')[0], pixel.x, pixel.y + 30);
    }
  }, [latLngToPixel]);

  // Copy to clipboard function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy to clipboard');
    }
  };

  // Handle canvas click
  const handleCanvasClick = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas || isDragging) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (isDrawing) {
      const coords = pixelToLatLng(x, y, canvas.width, canvas.height);
      setBoundaryPoints(prev => [...prev, coords]);
    }
  }, [isDrawing, pixelToLatLng, isDragging]);

  // Handle canvas right click
  const handleCanvasRightClick = useCallback((event) => {
    event.preventDefault();
    if (isDrawing && boundaryPoints.length >= 3) {
      finishDrawing();
    }
  }, [isDrawing, boundaryPoints]);

  // Handle mouse wheel for zoom
  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -1 : 1;
    setZoomLevel(prev => Math.max(1, Math.min(18, prev + delta * 0.5)));
  }, []);

  // Handle mouse drag for panning
  const handleMouseDown = useCallback((event) => {
    if (isDrawing) return;
    setIsDragging(true);
    setLastMousePos({ x: event.clientX, y: event.clientY });
  }, [isDrawing]);

  const handleMouseMove = useCallback((event) => {
    if (!isDragging || isDrawing) return;

    const deltaX = event.clientX - lastMousePos.x;
    const deltaY = event.clientY - lastMousePos.y;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Convert pixel movement to lat/lng movement
    const zoom = Math.pow(2, zoomLevel);
    const lngDelta = -deltaX / (256 * zoom) * 360;
    const latDelta = deltaY / (256 * zoom) * 360 * Math.cos(mapCenter.lat * Math.PI / 180);

    setMapCenter(prev => ({
      lat: Math.max(-85, Math.min(85, prev.lat + latDelta)),
      lng: ((prev.lng + lngDelta + 180) % 360) - 180
    }));

    setLastMousePos({ x: event.clientX, y: event.clientY });
  }, [isDragging, isDrawing, lastMousePos, zoomLevel, mapCenter]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Initialize map
  useEffect(() => {
    drawMap();
  }, [drawMap]);

  // Add event listeners for mouse interactions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

  // Search and go to location
  const searchLocation = async () => {
    if (!userLocation.trim()) return;

    setIsLocationSearch(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(userLocation)}&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const location = data[0];
        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lon);

        setFarmLocation({ lat, lng, name: location.display_name });
        setMapCenter({ lat, lng });
        setZoomLevel(15);
      } else {
        alert('Location not found. Please try a different search term.');
      }
    } catch (error) {
      console.error('Location search failed:', error);
      alert('Location search failed. Please check your internet connection.');
    } finally {
      setIsLocationSearch(false);
    }
  };

  // Get user's GPS location
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setFarmLocation({ lat, lng, name: 'Your Location' });
        setUserLocation(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        setMapCenter({ lat, lng });
        setZoomLevel(16);
      },
      (error) => {
        console.error('GPS location error:', error);
        alert('Unable to get your location. Please enter it manually.');
      }
    );
  };

  // Start drawing boundary
  const startDrawing = () => {
    setIsDrawing(true);
    setBoundaryPoints([]);
    setFarmArea(0);
  };

  // Finish drawing and create polygon
  const finishDrawing = useCallback(() => {
    if (boundaryPoints.length < 3) return;
    setIsDrawing(false);
    calculateArea();
  }, [boundaryPoints]);

  // Calculate farm area using shoelace formula
  const calculateArea = useCallback(() => {
    if (boundaryPoints.length < 3) return;

    let area = 0;
    const n = boundaryPoints.length;

    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += boundaryPoints[i].lng * boundaryPoints[j].lat;
      area -= boundaryPoints[j].lng * boundaryPoints[i].lat;
    }

    area = Math.abs(area) / 2;
    
    // Convert to hectares (approximate)
    const areaInSqMeters = area * 111000 * 111000 * Math.cos(mapCenter.lat * Math.PI / 180);
    const areaInHectares = areaInSqMeters / 10000;
    
    setFarmArea(areaInHectares);
  }, [boundaryPoints, mapCenter.lat]);

  // Clear all boundaries
  const clearBoundary = () => {
    setBoundaryPoints([]);
    setIsDrawing(false);
    setFarmArea(0);
  };

  // Save farm boundary
  const saveFarm = () => {
    if (!currentFarmName.trim() || boundaryPoints.length < 3) {
      alert('Please enter a farm name and draw a boundary with at least 3 points.');
      return;
    }

    const farmData = {
      id: Date.now().toString(),
      name: currentFarmName,
      location: farmLocation,
      boundary: boundaryPoints,
      area: farmArea,
      mapType: mapType,
      createdAt: new Date().toISOString(),
    };

    setSavedFarms(prev => [...prev, farmData]);
    alert(`Farm "${currentFarmName}" saved successfully!`);
    setCurrentFarmName('');
  };

  // Export farm data
  const exportFarmData = () => {
    if (boundaryPoints.length < 3) {
      alert('Please draw a boundary first.');
      return;
    }

    const exportData = {
      farmName: currentFarmName || 'Unnamed Farm',
      location: farmLocation,
      boundary: boundaryPoints,
      area: farmArea,
      mapType: mapType,
      exportedAt: new Date().toISOString(),
      format: 'GeoJSON',
      geometry: {
        type: 'Polygon',
        coordinates: [boundaryPoints.map(p => [p.lng, p.lat])]
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentFarmName || 'farm'}_boundary.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Zoom controls
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 1, 18));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 1, 1));

  // Load saved farm
  const loadSavedFarm = (farm) => {
    setBoundaryPoints(farm.boundary);
    setFarmLocation(farm.location);
    setCurrentFarmName(farm.name);
    setFarmArea(farm.area);
    setMapType(farm.mapType || 'openstreetmap');
    if (farm.location) {
      setMapCenter({ lat: farm.location.lat, lng: farm.location.lng });
      setZoomLevel(15);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-full relative"
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onContextMenu={handleCanvasRightClick}
          className="w-full h-full"
          style={{ 
            cursor: isDrawing ? 'crosshair' : isDragging ? 'grabbing' : 'grab'
          }}
        />
      </div>

      {/* Header Controls */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-4">
        {/* Location Search */}
        <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Enter your location or coordinates..."
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-64"
            onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
          />
          <button
            onClick={searchLocation}
            disabled={isLocationSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <MapPin size={16} />
            {isLocationSearch ? 'Searching...' : 'Search'}
          </button>
          <button
            onClick={getUserLocation}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <Navigation size={16} />
            GPS
          </button>
        </div>

        {/* Map Controls */}
        <div className="flex items-center gap-2 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm">
          <select
            value={mapType}
            onChange={(e) => setMapType(e.target.value)}
            className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
          >
            {Object.entries(mapTiles).map(([key, tile]) => (
              <option key={key} value={key}>{tile.name}</option>
            ))}
          </select>
          
          <button
            onClick={() => setShowBoundary(!showBoundary)}
            className={`${showBoundary ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white px-3 py-2 rounded flex items-center gap-2 transition-colors`}
          >
            {showBoundary ? <Eye size={16} /> : <EyeOff size={16} />}
            Boundary
          </button>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={zoomOut}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded backdrop-blur-sm"
        >
          <ZoomOut size={20} />
        </button>
        <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded backdrop-blur-sm text-sm text-center">
          {zoomLevel.toFixed(1)}
        </div>
      </div>

      {/* Drawing Controls */}
      <div className="absolute top-20 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-white font-bold mb-3">Farm Boundary Tools</h3>
        
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Farm name..."
            value={currentFarmName}
            onChange={(e) => setCurrentFarmName(e.target.value)}
            className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none w-full"
          />
          
          <div className="flex flex-col gap-2">
            <button
              onClick={startDrawing}
              disabled={isDrawing}
              className={`${isDrawing ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center`}
            >
              <Square size={16} />
              {isDrawing ? 'Drawing... (Right-click to finish)' : 'Start Drawing Boundary'}
            </button>
            
            <button
              onClick={clearBoundary}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
            >
              <Trash2 size={16} />
              Clear Boundary
            </button>
            
            <button
              onClick={saveFarm}
              disabled={boundaryPoints.length < 3 || !currentFarmName.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
            >
              <Save size={16} />
              Save Farm
            </button>
            
            <button
              onClick={exportFarmData}
              disabled={boundaryPoints.length < 3}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors w-full justify-center"
            >
              <Download size={16} />
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Farm Information Panel */}
      {(farmLocation || boundaryPoints.length > 0 || currentFarmName || savedFarms.some(farm => farm.name === currentFarmName)) && (
        <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm min-w-96 max-w-lg">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Calculator size={16} />
            Farm Information
          </h3>
          
          <div className="space-y-3 text-white text-sm max-h-80 overflow-y-auto">
            {/* Farm Name */}
            {(currentFarmName || savedFarms.find(farm => farm.boundary === boundaryPoints)) && (
              <div className="bg-gray-800 rounded p-2">
                <div className="flex items-center justify-between">
                  <strong className="text-green-400">Farm Name:</strong>
                  <button
                    onClick={() => copyToClipboard(currentFarmName || savedFarms.find(farm => farm.boundary === boundaryPoints)?.name || '', 'farmName')}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    {copiedText === 'farmName' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="text-gray-300 mt-1">
                  {currentFarmName || savedFarms.find(farm => farm.boundary === boundaryPoints)?.name || 'Unnamed Farm'}
                </div>
              </div>
            )}

            {/* Location Information */}
            {farmLocation && (
              <div className="bg-gray-800 rounded p-2">
                <div className="flex items-center justify-between">
                  <strong className="text-blue-400">Location Name:</strong>
                  <button
                    onClick={() => copyToClipboard(farmLocation.name || 'Location not available', 'locationName')}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    {copiedText === 'locationName' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="text-gray-300 mt-1 break-words">
                  {farmLocation.name || 'Location not available'}
                </div>
              </div>
            )}

            {/* Coordinates */}
            {farmLocation && (
              <div className="bg-gray-800 rounded p-2">
                <div className="flex items-center justify-between">
                  <strong className="text-yellow-400">Coordinates:</strong>
                  <button
                    onClick={() => copyToClipboard(`${farmLocation.lat.toFixed(6)}, ${farmLocation.lng.toFixed(6)}`, 'coordinates')}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    {copiedText === 'coordinates' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="text-gray-300 mt-1">
                  <div>Latitude: {farmLocation.lat.toFixed(6)}°</div>
                  <div>Longitude: {farmLocation.lng.toFixed(6)}°</div>
                </div>
              </div>
            )}

            {/* Boundary Points */}
            {boundaryPoints.length > 0 && (
              <div className="bg-gray-800 rounded p-2">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-400">Boundary Points ({boundaryPoints.length}):</strong>
                  <button
                    onClick={() => copyToClipboard(
                      boundaryPoints.map((point, index) => 
                        `P${index + 1}: ${point.lat.toFixed(6)}, ${point.lng.toFixed(6)}`
                      ).join('\n'), 
                      'boundaryPoints'
                    )}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    {copiedText === 'boundaryPoints' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="text-gray-300 mt-1 max-h-32 overflow-y-auto">
                  {boundaryPoints.map((point, index) => (
                    <div key={index} className="text-xs">
                      P{index + 1}: {point.lat.toFixed(6)}°, {point.lng.toFixed(6)}°
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Area Information */}
            {farmArea > 0 && (
              <div className="bg-gray-800 rounded p-2">
                <div className="flex items-center justify-between">
                  <strong className="text-green-400">Estimated Area:</strong>
                  <button
                    onClick={() => copyToClipboard(`${farmArea.toFixed(2)} hectares`, 'area')}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    {copiedText === 'area' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="text-gray-300 mt-1">
                  {farmArea.toFixed(2)} hectares ({(farmArea * 2.471).toFixed(2)} acres)
                </div>
              </div>
            )}

            {/* Map Type */}
            <div className="bg-gray-800 rounded p-2">
              <div className="flex items-center justify-between">
                <strong className="text-orange-400">Map Type:</strong>
                <button
                  onClick={() => copyToClipboard(mapTiles[mapType].name, 'mapType')}
                  className="text-blue-400 hover:text-blue-300 p-1"
                >
                  {copiedText === 'mapType' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <div className="text-gray-300 mt-1">
                {mapTiles[mapType].name}
              </div>
            </div>

            {/* Zoom Level */}
            <div className="bg-gray-800 rounded p-2">
              <strong className="text-cyan-400">Current Zoom:</strong>
              <span className="text-gray-300 ml-2">{zoomLevel.toFixed(1)}</span>
            </div>

            {/* Export All Data Button */}
            {(farmLocation || boundaryPoints.length > 0) && (
              <button
                onClick={() => {
                  const allData = {
                    farmName: currentFarmName || 'Unnamed Farm',
                    locationName: farmLocation?.name || 'Not available',
                    coordinates: farmLocation ? `${farmLocation.lat.toFixed(6)}, ${farmLocation.lng.toFixed(6)}` : 'Not available',
                    boundaryPoints: boundaryPoints.map((point, index) => 
                      `P${index + 1}: ${point.lat.toFixed(6)}, ${point.lng.toFixed(6)}`
                    ).join('\n'),
                    area: farmArea > 0 ? `${farmArea.toFixed(2)} hectares` : 'Not calculated',
                    mapType: mapTiles[mapType].name,
                    zoomLevel: zoomLevel.toFixed(1)
                  };
                  
                  const formattedData = Object.entries(allData)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join('\n\n');
                    
                  copyToClipboard(formattedData, 'allData');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2 justify-center transition-colors"
              >
                {copiedText === 'allData' ? <Check size={16} /> : <Copy size={16} />}
                {copiedText === 'allData' ? 'Copied!' : 'Copy All Data'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Saved Farms List */}
      {savedFarms.length > 0 && (
        <div className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-70 rounded-lg p-4 backdrop-blur-sm max-w-sm">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Home size={16} />
            Saved Farms ({savedFarms.length})
          </h3>
          
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {savedFarms.map((farm) => (
              <div 
                key={farm.id} 
                className="bg-gray-800 rounded p-2 text-white text-sm cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => loadSavedFarm(farm)}
              >
                <div className="font-semibold">{farm.name}</div>
                <div className="text-gray-400">
                  {farm.area.toFixed(2)} hectares • {farm.boundary.length} points
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(farm.createdAt).toLocaleDateString()}
                </div>
                <div className="text-xs text-blue-400">
                  Map: {mapTiles[farm.mapType || 'openstreetmap'].name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 right-20 z-10 bg-black bg-opacity-70 rounded-lg p-3 backdrop-blur-sm max-w-xs">
        <h4 className="text-white font-bold mb-2">Instructions</h4>
        <ul className="text-white text-xs space-y-1">
          <li>• Search for your location or use GPS</li>
          <li>• Use mouse wheel to zoom in/out</li>
          <li>• Drag to pan the map</li>
          <li>• Click "Start Drawing" to mark boundaries</li>
          <li>• Click on map to add boundary points</li>
          <li>• Right-click to finish drawing</li>
          <li>• Save your farm for future reference</li>
          <li>• Click copy buttons to copy data</li>
        </ul>
      </div>
    </div>
  );
};

export default FarmBoundary;