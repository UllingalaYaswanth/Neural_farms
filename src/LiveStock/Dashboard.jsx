// import { useState, useEffect } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine
// } from 'recharts';

// const Dashboard = () => {
//   const [goatData, setGoatData] = useState({
//     totalGoats: 124,
//     pregnant: 18,
//     sick: 7,
//     kids: 23,
//     males: 45,
//     females: 79,
//     averageWeight: 28.5,
//     dailyFeed: 62,
//     waterConsumption: 380,
//     lastVaccination: '2023-05-15',
//     weightTrend: [
//       { month: 'Jan', weight: 26.2 },
//       { month: 'Feb', weight: 26.8 },
//       { month: 'Mar', weight: 27.5 },
//       { month: 'Apr', weight: 27.9 },
//       { month: 'May', weight: 28.5 },
//     ],
//     barnStats: [
//       { name: 'Barn A', population: 42, capacity: 50 },
//       { name: 'Barn B', population: 38, capacity: 45 },
//       { name: 'Nursery', population: 23, capacity: 30 },
//       { name: 'Quarantine', population: 7, capacity: 10 },
//     ],
//     activityData: [
//       { hour: '6AM', feeding: 10, health: 2, breeding: 1 },
//       { hour: '9AM', feeding: 15, health: 5, breeding: 0 },
//       { hour: '12PM', feeding: 20, health: 3, breeding: 2 },
//       { hour: '3PM', feeding: 18, health: 4, breeding: 1 },
//       { hour: '6PM', feeding: 12, health: 1, breeding: 0 },
//     ],
//     healthMetrics: [
//       { hour: '6AM', temp: 38.5, activity: 85, intake: 75 },
//       { hour: '9AM', temp: 39.1, activity: 45, intake: 85 },
//       { hour: '12PM', temp: 39.8, activity: 60, intake: 90 },
//       { hour: '3PM', temp: 40.2, activity: 30, intake: 80 },
//       { hour: '6PM', temp: 39.5, activity: 75, intake: 70 }
//     ],
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     }
//   });

//   // Simulate live data updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGoatData(prev => ({
//         ...prev,
//         dailyFeed: prev.dailyFeed + Math.random() * 0.5,
//         waterConsumption: prev.waterConsumption + Math.random() * 2,
//         sick: Math.max(3, Math.min(10, prev.sick + (Math.random() > 0.7 ? 1 : -1)))
//       }));
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   // Data for charts
//   const populationData = [
//     { name: 'Males', value: goatData.males, color: '#3b82f6' },
//     { name: 'Females', value: goatData.females, color: '#ec4899' },
//     { name: 'Kids', value: goatData.kids, color: '#f59e0b' }
//   ];

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Goat Farm Dashboard</h1>
//         <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//           <FiCalendar className="text-gray-500" />
//           <span className="text-sm text-gray-700">
//             {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//           </span>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Goats</p>
//               <p className="text-2xl font-bold text-gray-800">{goatData.totalGoats}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//           <div className="mt-3 flex items-center text-sm text-green-600">
//             <span className="animate-pulse mr-1">↑</span>
//             <span>5% from last month</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Pregnant</p>
//               <p className="text-2xl font-bold text-gray-800">{goatData.pregnant}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//           <div className="mt-3 flex items-center text-sm text-green-600">
//             <span className="animate-bounce mr-1">↑</span>
//             <span>3 new this week</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Sick</p>
//               <p className="text-2xl font-bold text-gray-800">{goatData.sick}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//           <div className={`mt-3 flex items-center text-sm ${goatData.sick > 7 ? 'text-red-600' : 'text-green-600'}`}>
//             <span className="animate-ping mr-1">{goatData.sick > 7 ? '↑' : '↓'}</span>
//             <span>{goatData.sick > 7 ? `${goatData.sick - 7} new cases` : `${7 - goatData.sick} recovered`}</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Kids</p>
//               <p className="text-2xl font-bold text-gray-800">{goatData.kids}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//           <div className="mt-3 flex items-center text-sm text-green-600">
//             <span className="animate-pulse mr-1">↑</span>
//             <span>4 new births</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> Weight Trend (Last 5 Months)
//               </h2>
//               <div className="flex space-x-2">
//                 <button className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full">
//                   Monthly
//                 </button>
//                 <button className="px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full">
//                   Weekly
//                 </button>
//               </div>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={goatData.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> Barn Capacity Utilization
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={goatData.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current Population" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Total Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Health Monitoring */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiActivity className="mr-2 text-red-500" /> Health Monitoring
//               </h2>
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</span>
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="p-4 border border-gray-200 rounded-lg">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium text-gray-700">Temperature</span>
//                   <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">3 High</span>
//                 </div>
//                 <div className="h-40">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={goatData.healthMetrics}>
//                       <Area type="monotone" dataKey="temp" stroke="#ef4444" fill="#fee2e2" />
//                       <XAxis dataKey="hour" />
//                       <YAxis domain={[38, 41]} />
//                       <ReferenceLine y={39.5} stroke="#ef4444" strokeDasharray="3 3" />
//                       <Tooltip formatter={(value) => [`${value}°C`, "Temperature"]} />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
              
//               <div className="p-4 border border-gray-200 rounded-lg">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium text-gray-700">Activity</span>
//                   <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">2 Low</span>
//                 </div>
//                 <div className="h-40">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={goatData.healthMetrics}>
//                       <Bar dataKey="activity" fill="#f59e0b" radius={[4, 4, 0, 0]} />
//                       <XAxis dataKey="hour" />
//                       <YAxis domain={[0, 100]} />
//                       <ReferenceLine y={50} stroke="#f59e0b" strokeDasharray="3 3" />
//                       <Tooltip formatter={(value) => [`${value}%`, "Activity"]} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
              
//               <div className="p-4 border border-gray-200 rounded-lg">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium text-gray-700">Feed Intake</span>
//                   <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Normal</span>
//                 </div>
//                 <div className="h-40">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={goatData.healthMetrics}>
//                       <Line type="monotone" dataKey="intake" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
//                       <XAxis dataKey="hour" />
//                       <YAxis domain={[50, 100]} />
//                       <ReferenceLine y={75} stroke="#3b82f6" strokeDasharray="3 3" />
//                       <Tooltip formatter={(value) => [`${value}%`, "Intake"]} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> Population Distribution
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} goats`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activity Pattern
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={goatData.activityData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis 
//                     dataKey="hour" 
//                     tick={{ fontSize: 12 }}
//                     axisLine={false}
//                   />
//                   <YAxis 
//                     tick={{ fontSize: 12 }}
//                     axisLine={false}
//                     tickLine={false}
//                   />
//                   <Tooltip 
//                     contentStyle={{
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                       border: '1px solid #e5e7eb'
//                     }}
//                     formatter={(value, name) => [`${value} activities`, name]}
//                   />
//                   <Legend 
//                     wrapperStyle={{
//                       paddingTop: '20px'
//                     }}
//                   />
//                   <Bar 
//                     dataKey="feeding" 
//                     fill="#8b5cf6" 
//                     name="Feedings" 
//                     radius={[4, 4, 0, 0]} 
//                     animationDuration={1500}
//                   />
//                   <Bar 
//                     dataKey="health" 
//                     fill="#ec4899" 
//                     name="Health Checks" 
//                     radius={[4, 4, 0, 0]} 
//                     animationDuration={1500}
//                   />
//                   <Bar 
//                     dataKey="breeding" 
//                     fill="#f59e0b" 
//                     name="Breeding" 
//                     radius={[4, 4, 0, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{goatData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{goatData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {goatData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {goatData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(goatData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {goatData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-3">
//                     <FiClipboard className="text-purple-500" />
//                   </div>
//                   <h3 className="text-gray-700 font-medium">Daily Feed</h3>
//                 </div>
//               </div>
//               <div className="flex items-end justify-between">
//                 <div>
//                   <p className="text-2xl font-bold text-gray-800">{goatData.dailyFeed.toFixed(1)} kg</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     <span className={`inline-flex items-center ${goatData.dailyFeed > 65 ? 'text-red-500' : 'text-green-500'}`}>
//                       {goatData.dailyFeed > 65 ? '↑ Above' : '↓ Below'} average
//                     </span>
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-purple-500" 
//                     style={{ width: `${Math.min(100, (goatData.dailyFeed / 80) * 100)}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center">
//                   <div className="p-2 bg-gray-100 rounded-lg mr-3">
//                     <FiDroplet className="text-blue-400" />
//                   </div>
//                   <h3 className="text-gray-700 font-medium">Water Usage</h3>
//                 </div>
//               </div>
//               <div className="flex items-end justify-between">
//                 <div>
//                   <p className="text-2xl font-bold text-gray-800">{goatData.waterConsumption.toFixed(0)} L</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {Math.round((goatData.waterConsumption / goatData.totalGoats))} L per goat
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-blue-400" 
//                     style={{ width: `${Math.min(100, (goatData.waterConsumption / 500) * 100)}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState, useEffect } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';

// const Dashboard = () => {
//   // Enhanced data structure for multiple animals
//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats', // default view
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         activityData: [
//           { hour: '6AM', feeding: 10, health: 2, breeding: 1 },
//           { hour: '9AM', feeding: 15, health: 5, breeding: 0 },
//           { hour: '12PM', feeding: 20, health: 3, breeding: 2 },
//           { hour: '3PM', feeding: 18, health: 4, breeding: 1 },
//           { hour: '6PM', feeding: 12, health: 1, breeding: 0 },
//         ],
//         healthMetrics: [
//           { hour: '6AM', temp: 38.5, activity: 85, intake: 75 },
//           { hour: '9AM', temp: 39.1, activity: 45, intake: 85 },
//           { hour: '12PM', temp: 39.8, activity: 60, intake: 90 },
//           { hour: '3PM', temp: 40.2, activity: 30, intake: 80 },
//           { hour: '6PM', temp: 39.5, activity: 75, intake: 70 }
//         ]
//       },
//       sheep: {
//         name: 'Sheep',
//         icon: '🐑',
//         total: 87,
//         pregnant: 12,
//         sick: 4,
//         young: 15,
//         males: 32,
//         females: 55,
//         averageWeight: 45.2,
//         dailyFeed: 95,
//         waterConsumption: 420,
//         lastVaccination: '2023-05-10',
//         weightTrend: [
//           { month: 'Jan', weight: 42.5 },
//           { month: 'Feb', weight: 43.1 },
//           { month: 'Mar', weight: 44.0 },
//           { month: 'Apr', weight: 44.8 },
//           { month: 'May', weight: 45.2 },
//         ],
//         barnStats: [
//           { name: 'Barn C', population: 35, capacity: 40 },
//           { name: 'Barn D', population: 30, capacity: 35 },
//           { name: 'Nursery', population: 15, capacity: 20 },
//           { name: 'Quarantine', population: 4, capacity: 8 },
//         ],
//         activityData: [
//           { hour: '6AM', feeding: 8, health: 1, breeding: 0 },
//           { hour: '9AM', feeding: 12, health: 3, breeding: 1 },
//           { hour: '12PM', feeding: 15, health: 2, breeding: 1 },
//           { hour: '3PM', feeding: 14, health: 3, breeding: 0 },
//           { hour: '6PM', feeding: 10, health: 1, breeding: 0 },
//         ],
//         healthMetrics: [
//           { hour: '6AM', temp: 38.8, activity: 80, intake: 70 },
//           { hour: '9AM', temp: 39.3, activity: 40, intake: 80 },
//           { hour: '12PM', temp: 40.0, activity: 55, intake: 85 },
//           { hour: '3PM', temp: 40.5, activity: 25, intake: 75 },
//           { hour: '6PM', temp: 39.8, activity: 70, intake: 65 }
//         ]
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         activityData: [
//           { hour: '6AM', feeding: 25, health: 5, collection: 30 },
//           { hour: '9AM', feeding: 30, health: 8, collection: 45 },
//           { hour: '12PM', feeding: 28, health: 6, collection: 40 },
//           { hour: '3PM', feeding: 20, health: 4, collection: 35 },
//           { hour: '6PM', feeding: 15, health: 3, collection: 25 },
//         ],
//         healthMetrics: [
//           { hour: '6AM', temp: 41.5, activity: 90, intake: 80 },
//           { hour: '9AM', temp: 42.0, activity: 50, intake: 90 },
//           { hour: '12PM', temp: 42.5, activity: 65, intake: 95 },
//           { hour: '3PM', temp: 43.0, activity: 35, intake: 85 },
//           { hour: '6PM', temp: 42.0, activity: 80, intake: 75 }
//         ]
//       }
//     },
//     // Shared farm data
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     },
//     // Comparative metrics
//     summaryStats: {
//       totalAnimals: 531,
//       feedConsumption: 202,
//       waterUsage: 980,
//       vaccinationStatus: '85% complete',
//       healthAlerts: 23
//     }
//   });

//   // Get current animal data
//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   // Data for population chart
//   const populationData = [
//     { name: 'Males', value: currentAnimal.males, color: '#3b82f6' },
//     { name: 'Females', value: currentAnimal.females, color: '#ec4899' },
//     { name: 'Young', value: currentAnimal.young, color: '#f59e0b' }
//   ];

//   // Data for comparison radar chart
//   const animalComparisonData = [
//     {
//       subject: 'Population',
//       goats: farmData.animals.goats.total,
//       sheep: farmData.animals.sheep.total,
//       chickens: farmData.animals.chickens.total,
//       fullMark: Math.max(
//         farmData.animals.goats.total, 
//         farmData.animals.sheep.total, 
//         farmData.animals.chickens.total
//       ) * 1.2
//     },
//     {
//       subject: 'Feed (kg)',
//       goats: farmData.animals.goats.dailyFeed,
//       sheep: farmData.animals.sheep.dailyFeed,
//       chickens: farmData.animals.chickens.dailyFeed,
//       fullMark: Math.max(
//         farmData.animals.goats.dailyFeed, 
//         farmData.animals.sheep.dailyFeed, 
//         farmData.animals.chickens.dailyFeed
//       ) * 1.2
//     },
//     {
//       subject: 'Water (L)',
//       goats: farmData.animals.goats.waterConsumption,
//       sheep: farmData.animals.sheep.waterConsumption,
//       chickens: farmData.animals.chickens.waterConsumption,
//       fullMark: Math.max(
//         farmData.animals.goats.waterConsumption, 
//         farmData.animals.sheep.waterConsumption, 
//         farmData.animals.chickens.waterConsumption
//       ) * 1.2
//     },
//     {
//       subject: 'Health',
//       goats: 100 - (farmData.animals.goats.sick / farmData.animals.goats.total * 100),
//       sheep: 100 - (farmData.animals.sheep.sick / farmData.animals.sheep.total * 100),
//       chickens: 100 - (farmData.animals.chickens.sick / farmData.animals.chickens.total * 100),
//       fullMark: 100
//     },
//     {
//       subject: 'Weight (kg)',
//       goats: farmData.animals.goats.averageWeight,
//       sheep: farmData.animals.sheep.averageWeight,
//       chickens: farmData.animals.chickens.averageWeight,
//       fullMark: Math.max(
//         farmData.animals.goats.averageWeight, 
//         farmData.animals.sheep.averageWeight, 
//         farmData.animals.chickens.averageWeight
//       ) * 1.2
//     },
//   ];

//   // Simulate live data updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFarmData(prev => {
//         const updatedAnimals = {...prev.animals};
        
//         // Update each animal type
//         Object.keys(updatedAnimals).forEach(animalType => {
//           updatedAnimals[animalType] = {
//             ...updatedAnimals[animalType],
//             dailyFeed: updatedAnimals[animalType].dailyFeed + Math.random() * 0.5,
//             waterConsumption: updatedAnimals[animalType].waterConsumption + Math.random() * 2,
//             sick: Math.max(
//               3, 
//               Math.min(
//                 updatedAnimals[animalType].total * 0.1, 
//                 updatedAnimals[animalType].sick + (Math.random() > 0.7 ? 1 : -1)
//               )
//             )
//           };
          
//           // Special update for chickens (egg production)
//           if (animalType === 'chickens') {
//             updatedAnimals[animalType].eggs = Math.max(
//               200,
//               Math.min(
//                 300,
//                 updatedAnimals[animalType].eggs + (Math.random() > 0.5 ? 1 : -1)
//               )
//               );
            
//           }
//         });
        
//         return {
//           ...prev,
//           animals: updatedAnimals,
//           summaryStats: {
//             ...prev.summaryStats,
//             feedConsumption: Object.values(updatedAnimals).reduce((sum, animal) => sum + animal.dailyFeed, 0),
//             waterUsage: Object.values(updatedAnimals).reduce((sum, animal) => sum + animal.waterConsumption, 0),
//             healthAlerts: Object.values(updatedAnimals).reduce((sum, animal) => sum + animal.sick, 0)
//           }
//         };
//       });
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//           <FiCalendar className="text-gray-500" />
//           <span className="text-sm text-gray-700">
//             {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//           </span>
//         </div>
//       </div>

//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Farm Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//           <div className="mt-3 text-sm text-gray-500">
//             <span>{currentAnimal.name}: {currentAnimal.total}</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//           <div className="mt-3 text-sm text-gray-500">
//             <span>{currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage.toFixed(0)} L</p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiDroplet size={24} />
//             </div>
//           </div>
//           <div className="mt-3 text-sm text-gray-500">
//             <span>{currentAnimal.name}: {currentAnimal.waterConsumption.toFixed(0)} L</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//           <div className={`mt-3 text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-green-600'}`}>
//             <span>{currentAnimal.name}: {currentAnimal.sick}</span>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
//             </div>
//             <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//           <div className="mt-3 text-sm text-gray-500">
//             <span>{currentAnimal.name}: {currentAnimal.lastVaccination}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Animal Comparison Radar Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiFilter className="mr-2 text-purple-500" /> Animal Type Comparison
//               </h2>
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm text-gray-500">Key Metrics</span>
//               </div>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={animalComparisonData}>
//                   <PolarGrid />
//                   <PolarAngleAxis dataKey="subject" />
//                   <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
//                   <Radar name="Goats" dataKey="goats" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
//                   <Radar name="Sheep" dataKey="sheep" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
//                   <Radar name="Chickens" dataKey="chickens" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
//                   <Legend />
//                   <Tooltip />
//                 </RadarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//               <div className="flex space-x-2">
//                 <button className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full">
//                   Monthly
//                 </button>
//                 <button className="px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full">
//                   Weekly
//                 </button>
//               </div>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit={currentAnimal === farmData.animals.chickens ? 'kg' : 'kg'} />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} ${currentAnimal === farmData.animals.chickens ? 'kg' : 'kg'}`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing Capacity
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current Population" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Total Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> {currentAnimal.name} Daily Activity
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={currentAnimal.activityData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis 
//                     dataKey="hour" 
//                     tick={{ fontSize: 12 }}
//                     axisLine={false}
//                   />
//                   <YAxis 
//                     tick={{ fontSize: 12 }}
//                     axisLine={false}
//                     tickLine={false}
//                   />
//                   <Tooltip 
//                     contentStyle={{
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                       border: '1px solid #e5e7eb'
//                     }}
//                     formatter={(value, name) => [`${value} activities`, name]}
//                   />
//                   <Legend 
//                     wrapperStyle={{
//                       paddingTop: '20px'
//                     }}
//                   />
//                   <Bar 
//                     dataKey="feeding" 
//                     fill="#8b5cf6" 
//                     name="Feedings" 
//                     radius={[4, 4, 0, 0]} 
//                     animationDuration={1500}
//                   />
//                   <Bar 
//                     dataKey="health" 
//                     fill="#ec4899" 
//                     name="Health Checks" 
//                     radius={[4, 4, 0, 0]} 
//                     animationDuration={1500}
//                   />
//                   {currentAnimal === farmData.animals.chickens ? (
//                     <Bar 
//                       dataKey="collection" 
//                       fill="#10b981" 
//                       name="Egg Collection" 
//                       radius={[4, 4, 0, 0]} 
//                       animationDuration={1500}
//                     />
//                   ) : (
//                     <Bar 
//                       dataKey="breeding" 
//                       fill="#f59e0b" 
//                       name="Breeding" 
//                       radius={[4, 4, 0, 0]} 
//                       animationDuration={1500}
//                     />
//                   )}
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState, useEffect } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter, FiMap
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';

// const Dashboard = () => {
//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats',
//     showFarmLocations: false, // New state for map view
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         technicalTerms: {
//           male: 'Bucks',
//           female: 'Does',
//           young: 'Kids'
//         },
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         // More realistic activity data (daily totals)
//         dailyActivities: {
//           feeding: 75,
//           healthChecks: 15,
//           breeding: 4,
//           milking: 32
//         }
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         technicalTerms: {
//           male: 'Roosters',
//           female: 'Hens',
//           young: 'Chicks'
//         },
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         dailyActivities: {
//           feeding: 120,
//           healthChecks: 20,
//           eggCollection: 280,
//           cleaning: 8
//         }
//       }
//     },
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     }
//   });

//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   // Simplified population data using technical terms
//   const populationData = [
//     { 
//       name: currentAnimal.technicalTerms.female, 
//       value: currentAnimal.females, 
//       color: '#ec4899' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.male, 
//       value: currentAnimal.males, 
//       color: '#3b82f6' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.young, 
//       value: currentAnimal.young, 
//       color: '#f59e0b' 
//     }
//   ];

//   // Simplified comparison data (just key metrics)
//   const comparisonData = [
//     { 
//       name: 'Goats',
//       population: farmData.animals.goats.total,
//       feed: farmData.animals.goats.dailyFeed,
//       water: farmData.animals.goats.waterConsumption
//     },
//     { 
//       name: 'Chickens',
//       population: farmData.animals.chickens.total,
//       feed: farmData.animals.chickens.dailyFeed,
//       water: farmData.animals.chickens.waterConsumption
//     }
//   ];

//   // Convert daily activities to chart data
//   const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
//     name: activity.split(/(?=[A-Z])/).join(' '), // Convert camelCase to words
//     count
//   }));

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   const toggleFarmLocations = () => {
//     setFarmData(prev => ({
//       ...prev,
//       showFarmLocations: !prev.showFarmLocations
//     }));
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section with Map Button */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={toggleFarmLocations}
//             className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
//           >
//             <FiMap className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
//             </span>
//           </button>
//           <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//             <FiCalendar className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Farm Locations Map View */}
//       {farmData.showFarmLocations && (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//           <h2 className="text-lg font-semibold mb-4 flex items-center">
//             <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
//           </h2>
//           <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
//             <div className="text-center">
//               <FiMap className="mx-auto text-4xl text-gray-400 mb-2" />
//               <p className="text-gray-600">Farm locations map would be displayed here</p>
//               <p className="text-sm text-gray-500 mt-2">Loading GeoJSON data...</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Simple Animal Comparison */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={comparisonData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar 
//                     dataKey="population" 
//                     fill="#6366f1" 
//                     name="Population" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="feed" 
//                     fill="#f59e0b" 
//                     name="Daily Feed (kg)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="water" 
//                     fill="#3b82f6" 
//                     name="Water (L)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activities */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activities
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={activityChartData}
//                   layout="vertical"
//                   margin={{ left: 30 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
//                   <XAxis type="number" />
//                   <YAxis 
//                     dataKey="name" 
//                     type="category" 
//                     width={80}
//                     tick={{ fontSize: 12 }}
//                   />
//                   <Tooltip 
//                     formatter={(value) => [`${value} activities`, "Count"]}
//                   />
//                   <Bar 
//                     dataKey="count" 
//                     fill="#8b5cf6" 
//                     radius={[0, 4, 4, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import { useState, useEffect } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter, FiMap
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';

// const Dashboard = () => {
//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats',
//     showFarmLocations: false,
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         technicalTerms: {
//           male: 'Bucks',
//           female: 'Does',
//           young: 'Kids'
//         },
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         dailyActivities: {
//           feeding: 75,
//           healthChecks: 15,
//           breeding: 4,
//           milking: 32
//         }
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         technicalTerms: {
//           male: 'Roosters',
//           female: 'Hens',
//           young: 'Chicks'
//         },
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         dailyActivities: {
//           feeding: 120,
//           healthChecks: 20,
//           eggCollection: 280,
//           cleaning: 8
//         }
//       }
//     },
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     },
//     // Farm summary stats
//     summaryStats: {
//       totalAnimals: 531,
//       feedConsumption: 202,
//       waterUsage: 980,
//       healthAlerts: 23,
//       vaccinationStatus: '85% complete'
//     }
//   });

//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   const populationData = [
//     { 
//       name: currentAnimal.technicalTerms.female, 
//       value: currentAnimal.females, 
//       color: '#ec4899' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.male, 
//       value: currentAnimal.males, 
//       color: '#3b82f6' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.young, 
//       value: currentAnimal.young, 
//       color: '#f59e0b' 
//     }
//   ];

//   const comparisonData = [
//     { 
//       name: 'Goats',
//       population: farmData.animals.goats.total,
//       feed: farmData.animals.goats.dailyFeed,
//       water: farmData.animals.goats.waterConsumption
//     },
//     { 
//       name: 'Chickens',
//       population: farmData.animals.chickens.total,
//       feed: farmData.animals.chickens.dailyFeed,
//       water: farmData.animals.chickens.waterConsumption
//     }
//   ];

//   const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
//     name: activity.split(/(?=[A-Z])/).join(' '),
//     count
//   }));

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   const toggleFarmLocations = () => {
//     setFarmData(prev => ({
//       ...prev,
//       showFarmLocations: !prev.showFarmLocations
//     }));
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={toggleFarmLocations}
//             className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
//           >
//             <FiMap className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
//             </span>
//           </button>
//           <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//             <FiCalendar className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Farm Locations Map View */}
//       {farmData.showFarmLocations && (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//           <h2 className="text-lg font-semibold mb-4 flex items-center">
//             <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
//           </h2>
//           <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
//             <div className="text-center">
//               <FiMap className="mx-auto text-4xl text-gray-400 mb-2" />
//               <p className="text-gray-600">Farm locations map would be displayed here</p>
//               <p className="text-sm text-gray-500 mt-2">Loading GeoJSON data...</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         {/* Total Animals Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.total}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Daily Feed Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Water Usage Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage} L</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.waterConsumption} L
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiDroplet size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Health Alerts Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
//               <p className={`text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-gray-500'} mt-1`}>
//                 {currentAnimal.name}: {currentAnimal.sick}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Vaccination Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.lastVaccination}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Animal Comparison */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={comparisonData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar 
//                     dataKey="population" 
//                     fill="#6366f1" 
//                     name="Population" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="feed" 
//                     fill="#f59e0b" 
//                     name="Daily Feed (kg)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="water" 
//                     fill="#3b82f6" 
//                     name="Water (L)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activities */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activities
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={activityChartData}
//                   layout="vertical"
//                   margin={{ left: 30 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
//                   <XAxis type="number" />
//                   <YAxis 
//                     dataKey="name" 
//                     type="category" 
//                     width={80}
//                     tick={{ fontSize: 12 }}
//                   />
//                   <Tooltip 
//                     formatter={(value) => [`${value} activities`, "Count"]}
//                   />
//                   <Bar 
//                     dataKey="count" 
//                     fill="#8b5cf6" 
//                     radius={[0, 4, 4, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState, useEffect } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter, FiMap
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for default marker icons in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const Dashboard = () => {
//   const [map, setMap] = useState(null);
//   const [geoJsonLayer, setGeoJsonLayer] = useState(null);
  
//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats',
//     showFarmLocations: false,
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         technicalTerms: {
//           male: 'Bucks',
//           female: 'Does',
//           young: 'Kids'
//         },
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         dailyActivities: {
//           feeding: 75,
//           healthChecks: 15,
//           breeding: 4,
//           milking: 32
//         }
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         technicalTerms: {
//           male: 'Roosters',
//           female: 'Hens',
//           young: 'Chicks'
//         },
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         dailyActivities: {
//           feeding: 120,
//           healthChecks: 20,
//           eggCollection: 280,
//           cleaning: 8
//         }
//       }
//     },
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     },
//     summaryStats: {
//       totalAnimals: 531,
//       feedConsumption: 202,
//       waterUsage: 980,
//       healthAlerts: 23,
//       vaccinationStatus: '85% complete'
//     },
//     farmLocations: {
//       type: 'FeatureCollection',
//       features: [
//         {
//           type: 'Feature',
//           properties: {
//             name: 'Main Farm',
//             description: 'Primary livestock facility',
//             animals: 'Goats & Chickens',
//             area: '5.2 hectares'
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-0.1278, 51.5074] // London coordinates as example
//           }
//         },
//         {
//           type: 'Feature',
//           properties: {
//             name: 'North Pasture',
//             description: 'Grazing land for goats',
//             animals: 'Goats only',
//             area: '3.7 hectares'
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-0.12, 51.51] // Near London
//           }
//         },
//         {
//           type: 'Feature',
//           properties: {
//             name: 'Egg Production Site',
//             description: 'Chicken coops and processing',
//             animals: 'Chickens only',
//             area: '1.8 hectares'
//           },
//           geometry: {
//             type: 'Point',
//             coordinates: [-0.13, 51.505] // Near London
//           }
//         }
//       ]
//     }
//   });

//   useEffect(() => {
//     if (farmData.showFarmLocations && !map) {
//       const newMap = L.map('map-container').setView([51.505, -0.09], 13);
      
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(newMap);

//       // Add GeoJSON layer
//       const geoJsonLayer = L.geoJSON(farmData.farmLocations, {
//         pointToLayer: (feature, latlng) => {
//           return L.marker(latlng, {
//             icon: new L.Icon({
//               iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//               iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//               shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//               iconSize: [25, 41],
//               iconAnchor: [12, 41],
//               popupAnchor: [1, -34],
//               shadowSize: [41, 41]
//             })
//           }).bindPopup(`
//             <b>${feature.properties.name}</b><br>
//             ${feature.properties.description}<br>
//             Animals: ${feature.properties.animals}<br>
//             Area: ${feature.properties.area}
//           `);
//         }
//       }).addTo(newMap);

//       // Fit map to bounds of all markers
//       newMap.fitBounds(geoJsonLayer.getBounds().pad(0.2));

//       setMap(newMap);
//       setGeoJsonLayer(geoJsonLayer);
//     }

//     return () => {
//       if (map) {
//         map.remove();
//         setMap(null);
//         setGeoJsonLayer(null);
//       }
//     };
//   }, [farmData.showFarmLocations]);

//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   const populationData = [
//     { 
//       name: currentAnimal.technicalTerms.female, 
//       value: currentAnimal.females, 
//       color: '#ec4899' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.male, 
//       value: currentAnimal.males, 
//       color: '#3b82f6' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.young, 
//       value: currentAnimal.young, 
//       color: '#f59e0b' 
//     }
//   ];

//   const comparisonData = [
//     { 
//       name: 'Goats',
//       population: farmData.animals.goats.total,
//       feed: farmData.animals.goats.dailyFeed,
//       water: farmData.animals.goats.waterConsumption
//     },
//     { 
//       name: 'Chickens',
//       population: farmData.animals.chickens.total,
//       feed: farmData.animals.chickens.dailyFeed,
//       water: farmData.animals.chickens.waterConsumption
//     }
//   ];

//   const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
//     name: activity.split(/(?=[A-Z])/).join(' '),
//     count
//   }));

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   const toggleFarmLocations = () => {
//     setFarmData(prev => ({
//       ...prev,
//       showFarmLocations: !prev.showFarmLocations
//     }));
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={toggleFarmLocations}
//             className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
//           >
//             <FiMap className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
//             </span>
//           </button>
//           <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//             <FiCalendar className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Farm Locations Map View */}
//       {farmData.showFarmLocations && (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//           <h2 className="text-lg font-semibold mb-4 flex items-center">
//             <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
//           </h2>
//           <div id="map-container" className="h-96 rounded-lg z-0"></div>
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//             {farmData.farmLocations.features.map((farm, index) => (
//               <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
//                 <h3 className="font-medium text-gray-800">{farm.properties.name}</h3>
//                 <p className="text-sm text-gray-600">{farm.properties.description}</p>
//                 <div className="mt-2 flex justify-between text-xs">
//                   <span className="text-gray-500">Animals: {farm.properties.animals}</span>
//                   <span className="text-gray-500">Area: {farm.properties.area}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         {/* Total Animals Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.total}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Daily Feed Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Water Usage Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage} L</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.waterConsumption} L
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiDroplet size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Health Alerts Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
//               <p className={`text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-gray-500'} mt-1`}>
//                 {currentAnimal.name}: {currentAnimal.sick}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Vaccination Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.lastVaccination}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Animal Comparison */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={comparisonData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar 
//                     dataKey="population" 
//                     fill="#6366f1" 
//                     name="Population" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="feed" 
//                     fill="#f59e0b" 
//                     name="Daily Feed (kg)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="water" 
//                     fill="#3b82f6" 
//                     name="Water (L)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activities */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activities
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={activityChartData}
//                   layout="vertical"
//                   margin={{ left: 30 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
//                   <XAxis type="number" />
//                   <YAxis 
//                     dataKey="name" 
//                     type="category" 
//                     width={80}
//                     tick={{ fontSize: 12 }}
//                   />
//                   <Tooltip 
//                     formatter={(value) => [`${value} activities`, "Count"]}
//                   />
//                   <Bar 
//                     dataKey="count" 
//                     fill="#8b5cf6" 
//                     radius={[0, 4, 4, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter, FiMap
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for default marker icons in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// const Dashboard = () => {
//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats',
//     showFarmLocations: false,
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         technicalTerms: {
//           male: 'Bucks',
//           female: 'Does',
//           young: 'Kids'
//         },
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         dailyActivities: {
//           feeding: 75,
//           healthChecks: 15,
//           breeding: 4,
//           milking: 32
//         }
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         technicalTerms: {
//           male: 'Roosters',
//           female: 'Hens',
//           young: 'Chicks'
//         },
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         dailyActivities: {
//           feeding: 120,
//           healthChecks: 20,
//           eggCollection: 280,
//           cleaning: 8
//         }
//       }
//     },
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     },
//     summaryStats: {
//       totalAnimals: 531,
//       feedConsumption: 202,
//       waterUsage: 980,
//       healthAlerts: 23,
//       vaccinationStatus: '85% complete'
//     },
//     farmLocations: [
//       {
//         id: 1,
//         name: 'Main Goat Farm',
//         type: 'goats',
//         coordinates: [51.505, -0.09],
//         animals: 124,
//         status: 'active',
//         lastInspection: '2023-05-10'
//       },
//       {
//         id: 2,
//         name: 'Chicken Coop Complex',
//         type: 'chickens',
//         coordinates: [51.51, -0.1],
//         animals: 320,
//         status: 'active',
//         lastInspection: '2023-05-12'
//       },
//       {
//         id: 3,
//         name: 'North Pasture',
//         type: 'goats',
//         coordinates: [51.52, -0.08],
//         animals: 87,
//         status: 'active',
//         lastInspection: '2023-04-28'
//       },
//       {
//         id: 4,
//         name: 'Egg Production Facility',
//         type: 'chickens',
//         coordinates: [51.495, -0.095],
//         animals: 210,
//         status: 'maintenance',
//         lastInspection: '2023-05-05'
//       }
//     ]
//   });

//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   const populationData = [
//     { 
//       name: currentAnimal.technicalTerms.female, 
//       value: currentAnimal.females, 
//       color: '#ec4899' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.male, 
//       value: currentAnimal.males, 
//       color: '#3b82f6' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.young, 
//       value: currentAnimal.young, 
//       color: '#f59e0b' 
//     }
//   ];

//   const comparisonData = [
//     { 
//       name: 'Goats',
//       population: farmData.animals.goats.total,
//       feed: farmData.animals.goats.dailyFeed,
//       water: farmData.animals.goats.waterConsumption
//     },
//     { 
//       name: 'Chickens',
//       population: farmData.animals.chickens.total,
//       feed: farmData.animals.chickens.dailyFeed,
//       water: farmData.animals.chickens.waterConsumption
//     }
//   ];

//   const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
//     name: activity.split(/(?=[A-Z])/).join(' '),
//     count
//   }));

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   const toggleFarmLocations = () => {
//     setFarmData(prev => ({
//       ...prev,
//       showFarmLocations: !prev.showFarmLocations
//     }));
//   };

//   // Custom marker icons
//   const goatIcon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
//   });

//   const chickenIcon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
//   });

//   // Calculate center of all farms for map view
//   const calculateMapCenter = () => {
//     if (farmData.farmLocations.length === 0) return [51.505, -0.09];
    
//     const latitudes = farmData.farmLocations.map(farm => farm.coordinates[0]);
//     const longitudes = farmData.farmLocations.map(farm => farm.coordinates[1]);
    
//     const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
//     const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
    
//     return [avgLat, avgLng];
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={toggleFarmLocations}
//             className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
//           >
//             <FiMap className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
//             </span>
//           </button>
//           <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//             <FiCalendar className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Farm Locations Map View */}
//       {farmData.showFarmLocations && (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//           <h2 className="text-lg font-semibold mb-4 flex items-center">
//             <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
//           </h2>
//           <div className="h-96 rounded-lg overflow-hidden">
//             <MapContainer 
//               center={calculateMapCenter()} 
//               zoom={13} 
//               style={{ height: '100%', width: '100%' }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               {farmData.farmLocations.map(farm => (
//                 <Marker 
//                   key={farm.id}
//                   position={farm.coordinates}
//                   icon={farm.type === 'goats' ? goatIcon : chickenIcon}
//                 >
//                   <Popup>
//                     <div className="space-y-1">
//                       <h3 className="font-bold">{farm.name}</h3>
//                       <p className="text-sm">
//                         <span className="font-medium">Type:</span> {farmData.animals[farm.type].name}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">Animals:</span> {farm.animals}
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">Status:</span> 
//                         <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
//                           farm.status === 'active' 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {farm.status}
//                         </span>
//                       </p>
//                       <p className="text-sm">
//                         <span className="font-medium">Last Inspection:</span> {farm.lastInspection}
//                       </p>
//                     </div>
//                   </Popup>
//                 </Marker>
//               ))}
//             </MapContainer>
//           </div>
//           <div className="mt-4 flex items-center space-x-4">
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//               <span className="text-sm">Goat Farms</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
//               <span className="text-sm">Chicken Farms</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         {/* Total Animals Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.total}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Daily Feed Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Water Usage Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage} L</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.waterConsumption} L
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiDroplet size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Health Alerts Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
//               <p className={`text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-gray-500'} mt-1`}>
//                 {currentAnimal.name}: {currentAnimal.sick}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Vaccination Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.lastVaccination}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Animal Comparison */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={comparisonData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar 
//                     dataKey="population" 
//                     fill="#6366f1" 
//                     name="Population" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="feed" 
//                     fill="#f59e0b" 
//                     name="Daily Feed (kg)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="water" 
//                     fill="#3b82f6" 
//                     name="Water (L)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activities */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activities
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={activityChartData}
//                   layout="vertical"
//                   margin={{ left: 30 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
//                   <XAxis type="number" />
//                   <YAxis 
//                     dataKey="name" 
//                     type="category" 
//                     width={80}
//                     tick={{ fontSize: 12 }}
//                   />
//                   <Tooltip 
//                     formatter={(value) => [`${value} activities`, "Count"]}
//                   />
//                   <Bar 
//                     dataKey="count" 
//                     fill="#8b5cf6" 
//                     radius={[0, 4, 4, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import { useState } from 'react';
// import { 
//   FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
//   FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
//   FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
//   FiChevronRight, FiFilter, FiMap
// } from 'react-icons/fi';
// import { 
//   AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
//   Legend, LineChart, Line, ReferenceLine, RadarChart,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from 'recharts';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for default marker icons in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// const Dashboard = () => {
//   // GeoJSON data for farm boundaries
//   const farmGeoJSON = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         properties: {
//           id: 1,
//           name: "Main Goat Farm",
//           type: "goats",
//           animals: 124,
//           status: "active",
//           lastInspection: "2023-05-10"
//         },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [37.4000, -1.7000], 
//               [37.4100, -1.7000], 
//               [37.4100, -1.6900], 
//               [37.4000, -1.6900], 
//               [37.4000, -1.7000]  
//             ]
            
//           ]
//         }
//       },
//       {
//         type: "Feature",
//         properties: {
//           id: 2,
//           name: "Chicken Coop Complex",
//           type: "chickens",
//           animals: 320,
//           status: "active",
//           lastInspection: "2023-05-12"
//         },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [34.5500, 0.5600],   
//               [34.5600, 0.5600],   
//               [34.5600, 0.5700],   
//               [34.5500, 0.5700],   
//               [34.5500, 0.5600]    
//             ]
            
//           ]
//         }
//       },
//       {
//         type: "Feature",
//         properties: {
//           id: 3,
//           name: "North Pasture",
//           type: "goats",
//           animals: 87,
//           status: "active",
//           lastInspection: "2023-04-28"
//         },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [37.3000, -0.2000],
//               [37.3100, -0.2000],
//               [37.3100, -0.1900],
//               [37.3000, -0.1900],
//               [37.3000, -0.2000] 
//             ]
            
//           ]
//         }
//       },
//       {
//         type: "Feature",
//         properties: {
//           id: 4,
//           name: "Egg Production Facility",
//           type: "chickens",
//           animals: 210,
//           status: "maintenance",
//           lastInspection: "2023-05-05"
//         },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [38.4000, -3.4000], 
//               [38.4100, -3.4000], 
//               [38.4100, -3.3900], 
//               [38.4000, -3.3900], 
//               [38.4000, -3.4000]  
//             ]
            
//           ]
//         }
//       }
//     ]
//   };

//   const [farmData, setFarmData] = useState({
//     currentAnimalType: 'goats',
//     showFarmLocations: false,
//     animals: {
//       goats: {
//         name: 'Goats',
//         icon: '🐐',
//         technicalTerms: {
//           male: 'Bucks',
//           female: 'Does',
//           young: 'Kids'
//         },
//         total: 124,
//         pregnant: 18,
//         sick: 7,
//         young: 23,
//         males: 45,
//         females: 79,
//         averageWeight: 28.5,
//         dailyFeed: 62,
//         waterConsumption: 380,
//         lastVaccination: '2023-05-15',
//         weightTrend: [
//           { month: 'Jan', weight: 26.2 },
//           { month: 'Feb', weight: 26.8 },
//           { month: 'Mar', weight: 27.5 },
//           { month: 'Apr', weight: 27.9 },
//           { month: 'May', weight: 28.5 },
//         ],
//         barnStats: [
//           { name: 'Barn A', population: 42, capacity: 50 },
//           { name: 'Barn B', population: 38, capacity: 45 },
//           { name: 'Nursery', population: 23, capacity: 30 },
//           { name: 'Quarantine', population: 7, capacity: 10 },
//         ],
//         dailyActivities: {
//           feeding: 75,
//           healthChecks: 15,
//           breeding: 4,
//           milking: 32
//         }
//       },
//       chickens: {
//         name: 'Chickens',
//         icon: '🐔',
//         technicalTerms: {
//           male: 'Roosters',
//           female: 'Hens',
//           young: 'Chicks'
//         },
//         total: 320,
//         eggs: 280,
//         sick: 12,
//         young: 80,
//         males: 40,
//         females: 280,
//         averageWeight: 1.8,
//         dailyFeed: 45,
//         waterConsumption: 180,
//         lastVaccination: '2023-05-18',
//         weightTrend: [
//           { month: 'Jan', weight: 1.6 },
//           { month: 'Feb', weight: 1.65 },
//           { month: 'Mar', weight: 1.7 },
//           { month: 'Apr', weight: 1.75 },
//           { month: 'May', weight: 1.8 },
//         ],
//         barnStats: [
//           { name: 'Coop A', population: 120, capacity: 150 },
//           { name: 'Coop B', population: 100, capacity: 130 },
//           { name: 'Brooder', population: 80, capacity: 100 },
//           { name: 'Quarantine', population: 12, capacity: 20 },
//         ],
//         dailyActivities: {
//           feeding: 120,
//           healthChecks: 20,
//           eggCollection: 280,
//           cleaning: 8
//         }
//       }
//     },
//     weather: {
//       temp: 24.5,
//       condition: 'Partly Cloudy',
//       humidity: 65,
//       wind: 12,
//       forecast: [
//         { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
//         { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
//         { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
//         { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
//         { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
//       ]
//     },
//     summaryStats: {
//       totalAnimals: 531,
//       feedConsumption: 202,
//       waterUsage: 980,
//       healthAlerts: 23,
//       vaccinationStatus: '85% complete'
//     }
//   });

//   const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
//   const populationData = [
//     { 
//       name: currentAnimal.technicalTerms.female, 
//       value: currentAnimal.females, 
//       color: '#ec4899' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.male, 
//       value: currentAnimal.males, 
//       color: '#3b82f6' 
//     },
//     { 
//       name: currentAnimal.technicalTerms.young, 
//       value: currentAnimal.young, 
//       color: '#f59e0b' 
//     }
//   ];

//   const comparisonData = [
//     { 
//       name: 'Goats',
//       population: farmData.animals.goats.total,
//       feed: farmData.animals.goats.dailyFeed,
//       water: farmData.animals.goats.waterConsumption
//     },
//     { 
//       name: 'Chickens',
//       population: farmData.animals.chickens.total,
//       feed: farmData.animals.chickens.dailyFeed,
//       water: farmData.animals.chickens.waterConsumption
//     }
//   ];

//   const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
//     name: activity.split(/(?=[A-Z])/).join(' '),
//     count
//   }));

//   const getWeatherIcon = (condition) => {
//     switch(condition) {
//       case 'sunny': return <FiSun className="text-yellow-400" />;
//       case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
//       case 'rainy': return <FiCloudRain className="text-blue-400" />;
//       default: return <FiCloud className="text-gray-400" />;
//     }
//   };

//   const handleAnimalChange = (animalType) => {
//     setFarmData(prev => ({
//       ...prev,
//       currentAnimalType: animalType
//     }));
//   };

//   const toggleFarmLocations = () => {
//     setFarmData(prev => ({
//       ...prev,
//       showFarmLocations: !prev.showFarmLocations
//     }));
//   };

//   // Style function for GeoJSON features
//   const geoJsonStyle = (feature) => {
//     return {
//       fillColor: feature.properties.type === 'goats' ? '#10b981' : '#f59e0b',
//       weight: 2,
//       opacity: 1,
//       color: 'white',
//       dashArray: '3',
//       fillOpacity: 0.7
//     };
//   };

//   // Highlight feature on hover
//   const highlightFeature = (e) => {
//     const layer = e.target;
//     layer.setStyle({
//       weight: 5,
//       color: '#666',
//       dashArray: '',
//       fillOpacity: 0.7
//     });
//     layer.bringToFront();
//   };

//   // Reset highlight
//   const resetHighlight = (e) => {
//     const layer = e.target;
//     layer.setStyle(geoJsonStyle(layer.feature));
//   };

//   // Zoom to feature on click
//   const zoomToFeature = (e) => {
//     const map = e.target._map;
//     map.fitBounds(e.target.getBounds());
//   };

//   // Add event listeners to each feature
//   const onEachFeature = (feature, layer) => {
//     layer.on({
//       mouseover: highlightFeature,
//       mouseout: resetHighlight,
//       click: zoomToFeature
//     });

//     // Bind popup to each feature
//     const popupContent = `
//       <div class="space-y-1">
//         <h3 class="font-bold">${feature.properties.name}</h3>
//         <p class="text-sm">
//           <span class="font-medium">Type:</span> ${feature.properties.type === 'goats' ? 'Goat Farm' : 'Chicken Farm'}
//         </p>
//         <p class="text-sm">
//           <span class="font-medium">Animals:</span> ${feature.properties.animals}
//         </p>
//         <p class="text-sm">
//           <span class="font-medium">Status:</span> 
//           <span class="ml-1 px-2 py-0.5 rounded-full text-xs ${
//             feature.properties.status === 'active' 
//               ? 'bg-green-100 text-green-800' 
//               : 'bg-yellow-100 text-yellow-800'
//           }">
//             ${feature.properties.status}
//           </span>
//         </p>
//         <p class="text-sm">
//           <span class="font-medium">Last Inspection:</span> ${feature.properties.lastInspection}
//         </p>
//       </div>
//     `;

//     layer.bindPopup(popupContent);
//   };

//   // Calculate center of all farms for map view
//   const calculateMapCenter = () => {
//     if (farmGeoJSON.features.length === 0) return [51.505, -0.09];
    
//     const lats = farmGeoJSON.features.map(f => 
//       f.geometry.coordinates[0][0][1]
//     );
//     const lngs = farmGeoJSON.features.map(f => 
//       f.geometry.coordinates[0][0][0]
//     );
    
//     const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length;
//     const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;
    
//     return [avgLat, avgLng];
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={toggleFarmLocations}
//             className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
//           >
//             <FiMap className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
//             </span>
//           </button>
//           <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
//             <FiCalendar className="text-gray-500" />
//             <span className="text-sm text-gray-700">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Farm Locations Map View */}
//       {farmData.showFarmLocations && (
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//           <h2 className="text-lg font-semibold mb-4 flex items-center">
//             <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
//           </h2>
//           <div className="h-96 rounded-lg overflow-hidden">
//             <MapContainer 
//               center={calculateMapCenter()} 
//               zoom={18} 
//               style={{ height: '100%', width: '100%' }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <GeoJSON
//                 data={farmGeoJSON}
//                 style={geoJsonStyle}
//                 onEachFeature={onEachFeature}
//               />
//             </MapContainer>
//           </div>
//           <div className="mt-4 flex items-center space-x-4">
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
//               <span className="text-sm">Goat Farms</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
//               <span className="text-sm">Chicken Farms</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rest of the dashboard components remain the same */}
//       {/* Animal Type Selector */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {Object.keys(farmData.animals).map(animalType => (
//           <button
//             key={animalType}
//             onClick={() => handleAnimalChange(animalType)}
//             className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
//               ? 'bg-blue-100 text-blue-700 border border-blue-300' 
//               : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
//           >
//             <span className="text-lg">{farmData.animals[animalType].icon}</span>
//             <span>{farmData.animals[animalType].name}</span>
//             {farmData.currentAnimalType === animalType && (
//               <span className="ml-2 text-blue-500">
//                 <FiChevronRight />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//         {/* Total Animals Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.total}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//               <FiUsers size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Daily Feed Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-green-100 text-green-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Water Usage Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage} L</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.waterConsumption} L
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
//               <FiDroplet size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Health Alerts Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
//               <p className={`text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-gray-500'} mt-1`}>
//                 {currentAnimal.name}: {currentAnimal.sick}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-red-100 text-red-600">
//               <FiAlertCircle size={24} />
//             </div>
//           </div>
//         </div>

//         {/* Vaccination Card */}
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
//               <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {currentAnimal.name}: {currentAnimal.lastVaccination}
//               </p>
//             </div>
//             <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
//               <FiClipboard size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Animal Comparison */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={comparisonData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar 
//                     dataKey="population" 
//                     fill="#6366f1" 
//                     name="Population" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="feed" 
//                     fill="#f59e0b" 
//                     name="Daily Feed (kg)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                   <Bar 
//                     dataKey="water" 
//                     fill="#3b82f6" 
//                     name="Water (L)" 
//                     radius={[4, 4, 0, 0]} 
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weight Trend Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold flex items-center">
//                 <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
//               </h2>
//             </div>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={currentAnimal.weightTrend}>
//                   <defs>
//                     <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis unit="kg" />
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <Tooltip 
//                     formatter={(value) => [`${value} kg`, "Average Weight"]}
//                     labelFormatter={(label) => `Month: ${label}`}
//                   />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#6366f1" 
//                     fillOpacity={1} 
//                     fill="url(#colorWeight)" 
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Barn/Housing Capacity */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={currentAnimal.barnStats}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Population Distribution */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={populationData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={5}
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {populationData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     formatter={(value, name) => [`${value} animals`, name]}
//                   />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Daily Activities */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiActivity className="mr-2 text-purple-500" /> Daily Activities
//             </h2>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart 
//                   data={activityChartData}
//                   layout="vertical"
//                   margin={{ left: 30 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
//                   <XAxis type="number" />
//                   <YAxis 
//                     dataKey="name" 
//                     type="category" 
//                     width={80}
//                     tick={{ fontSize: 12 }}
//                   />
//                   <Tooltip 
//                     formatter={(value) => [`${value} activities`, "Count"]}
//                   />
//                   <Bar 
//                     dataKey="count" 
//                     fill="#8b5cf6" 
//                     radius={[0, 4, 4, 0]} 
//                     animationDuration={1500}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Weather Widget */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h2 className="text-lg font-semibold mb-4 flex items-center">
//               <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
//             </h2>
            
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
//                 <div>
//                   <div className="font-medium">{farmData.weather.condition}</div>
//                   <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
//                   <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
//                 </div>
//               </div>
//               <div className="text-4xl">
//                 {getWeatherIcon(farmData.weather.forecast[0].condition)}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-5 gap-2">
//               {farmData.weather.forecast.map((day, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-sm font-medium">{day.day}</div>
//                   <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
//                   <div className="text-xs">
//                     <span className="font-medium">{day.high}°</span>
//                     <span className="text-gray-500 mx-1">/</span>
//                     <span className="text-gray-500">{day.low}°</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from 'react';
import { 
  FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
  FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
  FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
  FiChevronRight, FiFilter, FiMap
} from 'react-icons/fi';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, LineChart, Line, ReferenceLine, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Kenyan farm locations GeoJSON data
const farmGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { 
        "name": "Machakos Fields",
        "type": "goats",
        "animals": 150,
        "status": "active",
        "lastInspection": "2023-06-15"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [37.25, -1.35],
            [37.27, -1.35],
            [37.27, -1.33],
            [37.25, -1.33],
            [37.25, -1.35]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { 
        "name": "Bungoma Farmlands",
        "type": "chickens",
        "animals": 280,
        "status": "active",
        "lastInspection": "2023-06-10"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [37.30, -1.30],
            [37.32, -1.30],
            [37.32, -1.28],
            [37.30, -1.28],
            [37.30, -1.30]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { 
        "name": "Laikipia Ranch",
        "type": "goats",
        "animals": 95,
        "status": "active",
        "lastInspection": "2023-06-05"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [37.20, -1.40],
            [37.22, -1.40],
            [37.22, -1.38],
            [37.20, -1.38],
            [37.20, -1.40]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": { 
        "name": "Taita Taveta Farms",
        "type": "chickens",
        "animals": 320,
        "status": "maintenance",
        "lastInspection": "2023-05-28"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [37.35, -1.45],
            [37.37, -1.45],
            [37.37, -1.43],
            [37.35, -1.43],
            [37.35, -1.45]
          ]
        ]
      }
    }
  ]
};

const Dashboard = () => {
  const [farmData, setFarmData] = useState({
    currentAnimalType: 'goats',
    showFarmLocations: false,
    animals: {
      goats: {
        name: 'Goats',
        icon: '🐐',
        technicalTerms: {
          male: 'Bucks',
          female: 'Does',
          young: 'Kids'
        },
        total: 245, // Updated total to match Kenyan farms
        pregnant: 22,
        sick: 8,
        young: 35,
        males: 80,
        females: 165,
        averageWeight: 28.5,
        dailyFeed: 75,
        waterConsumption: 450,
        lastVaccination: '2023-06-12',
        weightTrend: [
          { month: 'Jan', weight: 26.2 },
          { month: 'Feb', weight: 26.8 },
          { month: 'Mar', weight: 27.5 },
          { month: 'Apr', weight: 27.9 },
          { month: 'May', weight: 28.5 },
        ],
        barnStats: [
          { name: 'Barn A', population: 42, capacity: 50 },
          { name: 'Barn B', population: 38, capacity: 45 },
          { name: 'Nursery', population: 23, capacity: 30 },
          { name: 'Quarantine', population: 7, capacity: 10 },
        ],
        dailyActivities: {
          feeding: 75,
          healthChecks: 15,
          breeding: 4,
          milking: 32
        }
      },
      chickens: {
        name: 'Chickens',
        icon: '🐔',
        technicalTerms: {
          male: 'Roosters',
          female: 'Hens',
          young: 'Chicks'
        },
        total: 600, // Updated total to match Kenyan farms
        eggs: 520,
        sick: 15,
        young: 120,
        males: 60,
        females: 540,
        averageWeight: 1.8,
        dailyFeed: 85,
        waterConsumption: 320,
        lastVaccination: '2023-06-15',
        weightTrend: [
          { month: 'Jan', weight: 1.6 },
          { month: 'Feb', weight: 1.65 },
          { month: 'Mar', weight: 1.7 },
          { month: 'Apr', weight: 1.75 },
          { month: 'May', weight: 1.8 },
        ],
        barnStats: [
          { name: 'Coop A', population: 120, capacity: 150 },
          { name: 'Coop B', population: 100, capacity: 130 },
          { name: 'Brooder', population: 80, capacity: 100 },
          { name: 'Quarantine', population: 12, capacity: 20 },
        ],
        dailyActivities: {
          feeding: 120,
          healthChecks: 20,
          eggCollection: 520,
          cleaning: 8
        }
      }
    },
    weather: {
      temp: 22.5,
      condition: 'Partly Cloudy',
      humidity: 65,
      wind: 12,
      forecast: [
        { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
        { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
        { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
        { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
        { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
      ]
    },
    summaryStats: {
      totalAnimals: 845, // Updated to match Kenyan farms
      feedConsumption: 280,
      waterUsage: 1200,
      healthAlerts: 23,
      vaccinationStatus: '90% complete'
    }
  });

  const currentAnimal = farmData.animals[farmData.currentAnimalType];
  
  const populationData = [
    { 
      name: currentAnimal.technicalTerms.female, 
      value: currentAnimal.females, 
      color: '#ec4899' 
    },
    { 
      name: currentAnimal.technicalTerms.male, 
      value: currentAnimal.males, 
      color: '#3b82f6' 
    },
    { 
      name: currentAnimal.technicalTerms.young, 
      value: currentAnimal.young, 
      color: '#f59e0b' 
    }
  ];

  const comparisonData = [
    { 
      name: 'Goats',
      population: farmData.animals.goats.total,
      feed: farmData.animals.goats.dailyFeed,
      water: farmData.animals.goats.waterConsumption
    },
    { 
      name: 'Chickens',
      population: farmData.animals.chickens.total,
      feed: farmData.animals.chickens.dailyFeed,
      water: farmData.animals.chickens.waterConsumption
    }
  ];

  const activityChartData = Object.entries(currentAnimal.dailyActivities).map(([activity, count]) => ({
    name: activity.split(/(?=[A-Z])/).join(' '),
    count
  }));

  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny': return <FiSun className="text-yellow-400" />;
      case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
      case 'rainy': return <FiCloudRain className="text-blue-400" />;
      default: return <FiCloud className="text-gray-400" />;
    }
  };

  const handleAnimalChange = (animalType) => {
    setFarmData(prev => ({
      ...prev,
      currentAnimalType: animalType
    }));
  };

  const toggleFarmLocations = () => {
    setFarmData(prev => ({
      ...prev,
      showFarmLocations: !prev.showFarmLocations
    }));
  };

  // Style function for GeoJSON features
  const geoJsonStyle = (feature) => {
    return {
      fillColor: feature.properties.type === 'goats' ? '#10b981' : '#f59e0b',
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  // Highlight feature on hover
  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
    layer.bringToFront();
  };

  // Reset highlight
  const resetHighlight = (e) => {
    const layer = e.target;
    layer.setStyle(geoJsonStyle(layer.feature));
  };

  // Zoom to feature on click
  const zoomToFeature = (e) => {
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  // Add event listeners to each feature
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    });

    // Bind popup to each feature
    const popupContent = `
      <div class="space-y-1">
        <h3 class="font-bold">${feature.properties.name}</h3>
        <p class="text-sm">
          <span class="font-medium">Type:</span> ${feature.properties.type === 'goats' ? 'Goat Farm' : 'Chicken Farm'}
        </p>
        <p class="text-sm">
          <span class="font-medium">Animals:</span> ${feature.properties.animals}
        </p>
        <p class="text-sm">
          <span class="font-medium">Status:</span> 
          <span class="ml-1 px-2 py-0.5 rounded-full text-xs ${
            feature.properties.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }">
            ${feature.properties.status}
          </span>
        </p>
        <p class="text-sm">
          <span class="font-medium">Last Inspection:</span> ${feature.properties.lastInspection}
        </p>
      </div>
    `;

    layer.bindPopup(popupContent);
  };

  // Calculate center of all farms for map view
  const calculateMapCenter = () => {
    if (farmGeoJSON.features.length === 0) return [-1.2921, 36.8219]; // Default to Nairobi
    
    const lats = farmGeoJSON.features.map(f => 
      f.geometry.coordinates[0][0][1]
    );
    const lngs = farmGeoJSON.features.map(f => 
      f.geometry.coordinates[0][0][0]
    );
    
    const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length;
    const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;
    
    return [avgLat, avgLng];
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Farm Management Dashboard</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleFarmLocations}
            className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
          >
            <FiMap className="text-gray-500" />
            <span className="text-sm text-gray-700">
              {farmData.showFarmLocations ? 'Hide Map' : 'View Farms'}
            </span>
          </button>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
            <FiCalendar className="text-gray-500" />
            <span className="text-sm text-gray-700">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {/* Farm Locations Map View */}
      {farmData.showFarmLocations && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiMapPin className="mr-2 text-blue-500" /> Farm Locations
          </h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <MapContainer 
              center={calculateMapCenter()} 
              zoom={13} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <GeoJSON
                data={farmGeoJSON}
                style={geoJsonStyle}
                onEachFeature={onEachFeature}
              />
            </MapContainer>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm">Goat Farms</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm">Chicken Farms</span>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the dashboard components */}
      {/* Animal Type Selector */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {Object.keys(farmData.animals).map(animalType => (
          <button
            key={animalType}
            onClick={() => handleAnimalChange(animalType)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${farmData.currentAnimalType === animalType 
              ? 'bg-blue-100 text-blue-700 border border-blue-300' 
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
          >
            <span className="text-lg">{farmData.animals[animalType].icon}</span>
            <span>{farmData.animals[animalType].name}</span>
            {farmData.currentAnimalType === animalType && (
              <span className="ml-2 text-blue-500">
                <FiChevronRight />
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Animals Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Animals</p>
              <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.totalAnimals}</p>
              <p className="text-sm text-gray-500 mt-1">
                {currentAnimal.name}: {currentAnimal.total}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <FiUsers size={24} />
            </div>
          </div>
        </div>

        {/* Daily Feed Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Daily Feed</p>
              <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.feedConsumption.toFixed(1)} kg</p>
              <p className="text-sm text-gray-500 mt-1">
                {currentAnimal.name}: {currentAnimal.dailyFeed.toFixed(1)} kg
              </p>
            </div>
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <FiClipboard size={24} />
            </div>
          </div>
        </div>

        {/* Water Usage Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Water Usage</p>
              <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.waterUsage} L</p>
              <p className="text-sm text-gray-500 mt-1">
                {currentAnimal.name}: {currentAnimal.waterConsumption} L
              </p>
            </div>
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <FiDroplet size={24} />
            </div>
          </div>
        </div>

        {/* Health Alerts Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Health Alerts</p>
              <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.healthAlerts}</p>
              <p className={`text-sm ${currentAnimal.sick > 5 ? 'text-red-600' : 'text-gray-500'} mt-1`}>
                {currentAnimal.name}: {currentAnimal.sick}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <FiAlertCircle size={24} />
            </div>
          </div>
        </div>

        {/* Vaccination Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Vaccination</p>
              <p className="text-2xl font-bold text-gray-800">{farmData.summaryStats.vaccinationStatus}</p>
              <p className="text-sm text-gray-500 mt-1">
                {currentAnimal.name}: {currentAnimal.lastVaccination}
              </p>
            </div>
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <FiClipboard size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Animal Comparison */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiFilter className="mr-2 text-purple-500" /> Animal Comparison
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="population" 
                    fill="#6366f1" 
                    name="Population" 
                    radius={[4, 4, 0, 0]} 
                  />
                  <Bar 
                    dataKey="feed" 
                    fill="#f59e0b" 
                    name="Daily Feed (kg)" 
                    radius={[4, 4, 0, 0]} 
                  />
                  <Bar 
                    dataKey="water" 
                    fill="#3b82f6" 
                    name="Water (L)" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weight Trend Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FiTrendingUp className="mr-2 text-indigo-500" /> {currentAnimal.name} Weight Trend
              </h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentAnimal.weightTrend}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis unit="kg" />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip 
                    formatter={(value) => [`${value} kg`, "Average Weight"]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#6366f1" 
                    fillOpacity={1} 
                    fill="url(#colorWeight)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Barn/Housing Capacity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiUsers className="mr-2 text-green-500" /> {currentAnimal.name} Housing
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentAnimal.barnStats}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="population" fill="#10b981" name="Current" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="capacity" fill="#d1fae5" name="Capacity" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Population Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiPieChart className="mr-2 text-blue-500" /> {currentAnimal.name} Population
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={populationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {populationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value} animals`, name]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Daily Activities */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiActivity className="mr-2 text-purple-500" /> Daily Activities
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={activityChartData}
                  layout="vertical"
                  margin={{ left: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={80}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value} activities`, "Count"]}
                  />
                  <Bar 
                    dataKey="count" 
                    fill="#8b5cf6" 
                    radius={[0, 4, 4, 0]} 
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
            </h2>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="text-5xl font-bold mr-4">{farmData.weather.temp}°C</div>
                <div>
                  <div className="font-medium">{farmData.weather.condition}</div>
                  <div className="text-sm text-gray-500">Humidity: {farmData.weather.humidity}%</div>
                  <div className="text-sm text-gray-500">Wind: {farmData.weather.wind} km/h</div>
                </div>
              </div>
              <div className="text-4xl">
                {getWeatherIcon(farmData.weather.forecast[0].condition)}
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {farmData.weather.forecast.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium">{day.day}</div>
                  <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
                  <div className="text-xs">
                    <span className="font-medium">{day.high}°</span>
                    <span className="text-gray-500 mx-1">/</span>
                    <span className="text-gray-500">{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;