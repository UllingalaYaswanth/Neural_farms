// // import React, { useState } from "react";
// // import { Line, Bar } from "react-chartjs-2"; // For charts
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   LineElement,
// // } from "chart.js"; // Chart.js components

// // import { FaDownload, FaRegChartBar } from "react-icons/fa";

// // // Registering chart components
// // ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

// // const AnalyticsAndReports = () => {
// //   // Dummy data for analytics and reports
// //   const [reportData] = useState({
// //     cropYield: [300, 400, 350, 450, 500, 600],
// //     irrigationEfficiency: [85, 80, 90, 75, 95, 85],
// //     weatherImpact: [10, 15, 5, 20, 25, 10],
// //   });

// //   const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

// //   // Chart Data for Crop Yield, Irrigation Efficiency, and Weather Impact
// //   const cropYieldData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Crop Yield (kg/ha)",
// //         data: reportData.cropYield,
// //         borderColor: "#4caf50",
// //         backgroundColor: "rgba(76, 175, 80, 0.2)",
// //         fill: true,
// //         tension: 0.1,
// //       },
// //     ],
// //   };

// //   const irrigationEfficiencyData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Irrigation Efficiency (%)",
// //         data: reportData.irrigationEfficiency,
// //         borderColor: "#2196f3",
// //         backgroundColor: "rgba(33, 150, 243, 0.2)",
// //         fill: true,
// //         tension: 0.1,
// //       },
// //     ],
// //   };

// //   const weatherImpactData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Weather Impact (mm)",
// //         data: reportData.weatherImpact,
// //         borderColor: "#ff9800",
// //         backgroundColor: "rgba(255, 152, 0, 0.2)",
// //         fill: true,
// //         tension: 0.1,
// //       },
// //     ],
// //   };

// //   // Handle date range selection
// //   const handleDateRangeChange = (event) => {
// //     setSelectedDateRange(event.target.value);
// //   };

// //   return (
// //     <div className="p-8 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-semibold mb-6 text-center">Analytics & Reports</h1>

// //       {/* Date Range Filter */}
// //       <div className="mb-6 flex justify-between items-center">
// //         <select
// //           value={selectedDateRange}
// //           onChange={handleDateRangeChange}
// //           className="px-4 py-2 rounded-md border border-gray-300"
// //         >
// //           <option value="Last 6 months">Last 6 months</option>
// //           <option value="Last 1 year">Last 1 year</option>
// //           <option value="Last 3 years">Last 3 years</option>
// //         </select>
// //       </div>

// //       {/* Overview Metrics */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
// //         {/* Crop Yield */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-green-500" />
// //             Crop Yield
// //           </h2>
// //           <p className="text-lg">{`${reportData.cropYield[reportData.cropYield.length - 1]} kg/ha`}</p>
// //           <p className="text-sm text-gray-500">Average yield for the last 6 months</p>
// //         </div>

// //         {/* Irrigation Efficiency */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-blue-500" />
// //             Irrigation Efficiency
// //           </h2>
// //           <p className="text-lg">{`${reportData.irrigationEfficiency[reportData.irrigationEfficiency.length - 1]}%`}</p>
// //           <p className="text-sm text-gray-500">Efficiency over the last 6 months</p>
// //         </div>

// //         {/* Weather Impact */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-orange-500" />
// //             Weather Impact
// //           </h2>
// //           <p className="text-lg">{`${reportData.weatherImpact[reportData.weatherImpact.length - 1]} mm`}</p>
// //           <p className="text-sm text-gray-500">Total rainfall impact over the last 6 months</p>
// //         </div>
// //       </div>

// //       {/* Charts for Detailed Analysis */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
// //         {/* Crop Yield Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-xl font-semibold mb-4">Crop Yield Analysis</h2>
// //           <Line data={cropYieldData} options={{ responsive: true }} />
// //         </div>

// //         {/* Irrigation Efficiency Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <h2 className="text-xl font-semibold mb-4">Irrigation Efficiency</h2>
// //           <Line data={irrigationEfficiencyData} options={{ responsive: true }} />
// //         </div>
// //       </div>

// //       {/* Weather Impact Chart */}
// //       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
// //         <h2 className="text-xl font-semibold mb-4">Weather Impact Analysis</h2>
// //         <Line data={weatherImpactData} options={{ responsive: true }} />
// //       </div>

// //       {/* Reports Section */}
// //       <div className="bg-white shadow-lg rounded-lg p-6">
// //         <h2 className="text-xl font-semibold mb-4">Download Reports</h2>
// //         <div className="flex justify-between items-center">
// //           <p className="text-lg text-gray-500">Generate a full report based on selected data range.</p>
// //           <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
// //             <FaDownload className="mr-2" />
// //             Download Report
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnalyticsAndReports;

// // import React, { useState } from "react";
// // import { Line, Bar } from "react-chartjs-2"; // For charts
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   LineElement,
// //   Filler,
// // } from "chart.js"; // Chart.js components
// // import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import DataLabels plugin

// // import { FaDownload, FaRegChartBar } from "react-icons/fa";

// // // Registering chart components
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   LineElement,
// //   Filler,
// //   ChartDataLabels // Register DataLabels plugin
// // );

// // const AnalyticsAndReports = () => {
// //   // Dummy data for business analytics
// //   const [reportData] = useState({
// //     revenue: [2000, 2500, 3000, 4000, 3500, 4500],
// //     costOfGoodsSold: [1000, 1200, 1100, 1400, 1300, 1500],
// //     profitMargin: [1000, 1300, 1900, 2600, 2200, 3000],
// //     cropYield: [300, 400, 350, 450, 500, 600],
// //     laborCost: [500, 550, 600, 700, 650, 800],
// //   });

// //   const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

// //   // Chart Data for Revenue, Cost of Goods Sold (COGS), and Profit Margin
// //   const revenueData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Revenue ($)",
// //         data: reportData.revenue,
// //         borderColor: "#4caf50",
// //         backgroundColor: "rgba(76, 175, 80, 0.5)",
// //         fill: true,
// //         tension: 0.4,
// //         borderWidth: 3,
// //       },
// //     ],
// //   };

// //   const costOfGoodsSoldData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Cost of Goods Sold ($)",
// //         data: reportData.costOfGoodsSold,
// //         borderColor: "#2196f3",
// //         backgroundColor: "rgba(33, 150, 243, 0.5)",
// //         fill: true,
// //         tension: 0.4,
// //         borderWidth: 3,
// //       },
// //     ],
// //   };

// //   const profitMarginData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Profit Margin ($)",
// //         data: reportData.profitMargin,
// //         borderColor: "#ff9800",
// //         backgroundColor: "rgba(255, 152, 0, 0.5)",
// //         fill: true,
// //         tension: 0.4,
// //         borderWidth: 3,
// //       },
// //     ],
// //   };

// //   const laborCostData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Labor Cost ($)",
// //         data: reportData.laborCost,
// //         borderColor: "#f44336",
// //         backgroundColor: "rgba(244, 67, 54, 0.5)",
// //         fill: true,
// //         tension: 0.4,
// //         borderWidth: 3,
// //       },
// //     ],
// //   };

// //   // Handle date range selection
// //   const handleDateRangeChange = (event) => {
// //     setSelectedDateRange(event.target.value);
// //   };

// //   return (
// //     <div className="p-8 bg-gray-50 min-h-screen">
// //       <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Farm Analytics & Reports</h1>

// //       {/* Date Range Filter */}
// //       <div className="mb-6 flex justify-between items-center">
// //         <select
// //           value={selectedDateRange}
// //           onChange={handleDateRangeChange}
// //           className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
// //         >
// //           <option value="Last 6 months">Last 6 months</option>
// //           <option value="Last 1 year">Last 1 year</option>
// //           <option value="Last 3 years">Last 3 years</option>
// //         </select>
// //       </div>

// //       {/* Overview Metrics */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
// //         {/* Revenue */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-green-500" />
// //             Revenue
// //           </h2>
// //           <p className="text-lg font-bold">{`$${reportData.revenue[reportData.revenue.length - 1]}`}</p>
// //           <p className="text-sm text-gray-500">Total revenue for the last 6 months</p>
// //         </div>

// //         {/* Cost of Goods Sold */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-blue-500" />
// //             Cost of Goods Sold (COGS)
// //           </h2>
// //           <p className="text-lg font-bold">{`$${reportData.costOfGoodsSold[reportData.costOfGoodsSold.length - 1]}`}</p>
// //           <p className="text-sm text-gray-500">Total COGS for the last 6 months</p>
// //         </div>

// //         {/* Profit Margin */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4 flex items-center">
// //             <FaRegChartBar className="mr-2 text-3xl text-orange-500" />
// //             Profit Margin
// //           </h2>
// //           <p className="text-lg font-bold">{`$${reportData.profitMargin[reportData.profitMargin.length - 1]}`}</p>
// //           <p className="text-sm text-gray-500">Profit margin for the last 6 months</p>
// //         </div>
// //       </div>

// //       {/* Graphs for Revenue, COGS, Profit Margin */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
// //         {/* Revenue Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4">Revenue Analysis</h2>
// //           <Line data={revenueData} options={{
// //             responsive: true,
// //             plugins: {
// //               tooltip: {
// //                 callbacks: {
// //                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
// //                 }
// //               },
// //               datalabels: {
// //                 color: '#000',
// //                 anchor: 'end',
// //                 align: 'top',
// //                 font: { weight: 'bold' },
// //               }
// //             },
// //           }} />
// //         </div>

// //         {/* COGS Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4">Cost of Goods Sold</h2>
// //           <Line data={costOfGoodsSoldData} options={{
// //             responsive: true,
// //             plugins: {
// //               tooltip: {
// //                 callbacks: {
// //                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
// //                 }
// //               },
// //               datalabels: {
// //                 color: '#000',
// //                 anchor: 'end',
// //                 align: 'top',
// //                 font: { weight: 'bold' },
// //               }
// //             },
// //           }} />
// //         </div>
// //       </div>

// //       {/* Profit Margin and Labor Cost */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
// //         {/* Profit Margin Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4">Profit Margin Analysis</h2>
// //           <Line data={profitMarginData} options={{
// //             responsive: true,
// //             plugins: {
// //               tooltip: {
// //                 callbacks: {
// //                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
// //                 }
// //               },
// //               datalabels: {
// //                 color: '#000',
// //                 anchor: 'end',
// //                 align: 'top',
// //                 font: { weight: 'bold' },
// //               }
// //             },
// //           }} />
// //         </div>

// //         {/* Labor Cost Chart */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //           <h2 className="text-xl font-semibold mb-4">Labor Cost Analysis</h2>
// //           <Bar data={laborCostData} options={{
// //             responsive: true,
// //             plugins: {
// //               tooltip: {
// //                 callbacks: {
// //                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
// //                 }
// //               },
// //             },
// //           }} />
// //         </div>
// //       </div>

// //       {/* Reports Section */}
// //       <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
// //         <h2 className="text-xl font-semibold mb-4">Download Reports</h2>
// //         <div className="flex justify-between items-center">
// //           <p className="text-lg text-gray-500">Generate a full report based on selected data range.</p>
// //           <button className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center">
// //             <FaDownload className="mr-2" />
// //             Download Report
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnalyticsAndReports;


// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2"; // For charts
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   LineElement,
//   Filler,
// } from "chart.js"; // Chart.js components
// import ChartDataLabels from "chartjs-plugin-datalabels"; // Import DataLabels plugin

// import { FaDownload, FaRegChartBar } from "react-icons/fa";

// // Registering chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   LineElement,
//   Filler,
//   ChartDataLabels // Register DataLabels plugin
// );

// const AnalyticsAndReports = () => {
//   // Dummy data for business analytics
//   const [reportData, setReportData] = useState({
//     revenue: {
//       "Last 6 months": [2000, 2500, 3000, 4000, 3500, 4500],
//       "Last 1 year": [2500, 2800, 3300, 4000, 3700, 4500, 5000, 4700, 5100, 4900, 5200, 5400],
//       "Last 3 years": [2000, 3000, 3500, 5000, 6000, 7000, 7500, 8000, 8200, 8500, 8700, 9000, 9500, 9800, 10000],
//     },
//     laborCost: {
//       "Last 6 months": [500, 550, 600, 700, 650, 800],
//       "Last 1 year": [550, 600, 650, 750, 700, 850, 900, 950, 1000, 1100, 1150, 1200],
//       "Last 3 years": [600, 650, 700, 800, 950, 1000, 1050, 1100, 1200, 1250, 1300, 1400, 1500, 1600, 1700],
//     },
//     costOfGoodsSold: {
//       "Last 6 months": [1000, 1200, 1100, 1400, 1300, 1500],
//       "Last 1 year": [1200, 1250, 1300, 1450, 1500, 1600, 1700, 1750, 1800, 1850, 1900, 2000],
//       "Last 3 years": [1100, 1200, 1300, 1450, 1500, 1600, 1650, 1700, 1750, 1800, 1900, 2000, 2100, 2200, 2300],
//     },
//     profitMargin: {
//       "Last 6 months": [1000, 1300, 1900, 2600, 2200, 3000],
//       "Last 1 year": [1300, 1400, 1600, 2000, 2300, 2500, 2800, 3000, 3200, 3400, 3600, 3800],
//       "Last 3 years": [1400, 1600, 1800, 2100, 2500, 2700, 3000, 3200, 3400, 3500, 3700, 3800, 4000, 4200, 4300],
//     },
//   });

//   const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

//   // Dynamically change the data based on selected date range
//   const updateData = (range) => {
//     return {
//       revenue: reportData.revenue[range],
//       laborCost: reportData.laborCost[range],
//       costOfGoodsSold: reportData.costOfGoodsSold[range],
//       profitMargin: reportData.profitMargin[range],
//     };
//   };

//   const data = updateData(selectedDateRange);

//   // Chart Data for Revenue, Cost of Goods Sold (COGS), and Profit Margin
//   const revenueData = {
//     labels: data.revenue.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Revenue ($)",
//         data: data.revenue,
//         borderColor: "#4caf50",
//         backgroundColor: "rgba(76, 175, 80, 0.5)",
//         fill: true,
//         tension: 0.4,
//         borderWidth: 3,
//       },
//     ],
//   };

//   const laborCostData = {
//     labels: data.laborCost.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Labor Cost ($)",
//         data: data.laborCost,
//         backgroundColor: "#f44336",
//         borderColor: "#d32f2f",
//         borderWidth: 2,
//         hoverBackgroundColor: "#e57373",
//       },
//     ],
//   };

//   const costOfGoodsSoldData = {
//     labels: data.costOfGoodsSold.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Cost of Goods Sold ($)",
//         data: data.costOfGoodsSold,
//         backgroundColor: "rgba(33, 150, 243, 0.5)",
//         borderColor: "#2196f3",
//         borderWidth: 2,
//         hoverBackgroundColor: "rgba(33, 150, 243, 0.7)",
//       },
//     ],
//   };

//   const profitMarginData = {
//     labels: data.profitMargin.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Profit Margin ($)",
//         data: data.profitMargin,
//         backgroundColor: "rgba(255, 152, 0, 0.5)",
//         borderColor: "#ff9800",
//         borderWidth: 2,
//         hoverBackgroundColor: "rgba(255, 152, 0, 0.7)",
//       },
//     ],
//   };

//   // Handle date range selection
//   const handleDateRangeChange = (event) => {
//     setSelectedDateRange(event.target.value);
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Farm Analytics & Reports</h1>

//       {/* Date Range Filter */}
//       <div className="mb-6 flex justify-between items-center">
//         <select
//           value={selectedDateRange}
//           onChange={handleDateRangeChange}
//           className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
//         >
//           <option value="Last 6 months">Last 6 months</option>
//           <option value="Last 1 year">Last 1 year</option>
//           <option value="Last 3 years">Last 3 years</option>
//         </select>
//       </div>

//       {/* Overview Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//         {/* Revenue */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaRegChartBar className="mr-2 text-3xl text-green-500" />
//             Revenue
//           </h2>
//           <p className="text-lg font-bold">{`$${data.revenue[data.revenue.length - 1]}`}</p>
//           <p className="text-sm text-gray-500">Total revenue for the selected range</p>
//         </div>

//         {/* Labor Cost */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaRegChartBar className="mr-2 text-3xl text-red-500" />
//             Labor Cost
//           </h2>
//           <p className="text-lg font-bold">{`$${data.laborCost[data.laborCost.length - 1]}`}</p>
//           <p className="text-sm text-gray-500">Labor cost for the selected range</p>
//         </div>
//       </div>

//       {/* Graphs for Revenue, COGS, Profit Margin */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//         {/* Revenue Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4">Revenue Analysis</h2>
//           <Line data={revenueData} options={{
//             responsive: true,
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 }
//               },
//               datalabels: {
//                 color: '#000',
//                 anchor: 'end',
//                 align: 'top',
//                 font: { weight: 'bold' },
//               }
//             },
//           }} />
//         </div>

//         {/* Labor Cost Chart (Horizontal Bar) */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4">Labor Cost Analysis</h2>
//           <Bar data={laborCostData} options={{
//             responsive: true,
//             indexAxis: 'y',  // Horizontal bar chart
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 }
//               },
//               datalabels: {
//                 color: '#fff',
//                 anchor: 'center',
//                 align: 'center',
//                 font: { weight: 'bold' },
//               }
//             },
//           }} />
//         </div>
//       </div>

//       {/* Profit Margin and COGS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//         {/* Profit Margin Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4">Profit Margin Analysis</h2>
//           <Line data={profitMarginData} options={{
//             responsive: true,
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 }
//               },
//               datalabels: {
//                 color: '#000',
//                 anchor: 'end',
//                 align: 'top',
//                 font: { weight: 'bold' },
//               }
//             },
//           }} />
//         </div>


//       </div>

//     </div>
//   );
// };

// export default AnalyticsAndReports;


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
  Filler,
} from "chart.js"; // Chart.js components
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import DataLabels plugin

import { FaDownload, FaRegChartBar } from "react-icons/fa";

// Registering chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  Filler,
  ChartDataLabels // Register DataLabels plugin
);

const AnalyticsAndReports = () => {
  // Dummy data for business analytics
  const [reportData, setReportData] = useState({
    revenue: {
      "Last 6 months": [2000, 2500, 3000, 4000, 3500, 4500],
      "Last 1 year": [2500, 2800, 3300, 4000, 3700, 4500, 5000, 4700, 5100, 4900, 5200, 5400],
      "Last 3 years": [2000, 3000, 3500, 5000, 6000, 7000, 7500, 8000, 8200, 8500, 8700, 9000, 9500, 9800, 10000],
    },
    laborCost: {
      "Last 6 months": [500, 550, 600, 700, 650, 800],
      "Last 1 year": [550, 600, 650, 750, 700, 850, 900, 950, 1000, 1100, 1150, 1200],
      "Last 3 years": [600, 650, 700, 800, 950, 1000, 1050, 1100, 1200, 1250, 1300, 1400, 1500, 1600, 1700],
    },
    costOfGoodsSold: {
      "Last 6 months": [1000, 1200, 1100, 1400, 1300, 1500],
      "Last 1 year": [1200, 1250, 1300, 1450, 1500, 1600, 1700, 1750, 1800, 1850, 1900, 2000],
      "Last 3 years": [1100, 1200, 1300, 1450, 1500, 1600, 1650, 1700, 1750, 1800, 1900, 2000, 2100, 2200, 2300],
    },
    profitMargin: {
      "Last 6 months": [1000, 1300, 1900, 2600, 2200, 3000],
      "Last 1 year": [1300, 1400, 1600, 2000, 2300, 2500, 2800, 3000, 3200, 3400, 3600, 3800],
      "Last 3 years": [1400, 1600, 1800, 2100, 2500, 2700, 3000, 3200, 3400, 3500, 3700, 3800, 4000, 4200, 4300],
    },
    farmEquipmentUsage : {
      "Last 6 months": [
        { 
          equipment: "Tractor", 
          used: "Jan, Mar, Jun", 
          totalUsage: 3, 
          frequency: "Every 2 months", 
          price: "₹500 per use"
        },
        { 
          equipment: "Plow", 
          used: "Feb, Apr, May", 
          totalUsage: 3, 
          frequency: "Every 2 months", 
          price: "₹300 per use"
        },
        { 
          equipment: "Harvester", 
          used: "Apr, Jun", 
          totalUsage: 2, 
          frequency: "Every 3 months", 
          price: "₹700 per use"
        },
      ],
      "Last 1 year": [
        { 
          equipment: "Tractor", 
          used: "Jan, Mar, Apr, May, Nov", 
          totalUsage: 5, 
          frequency: "Every 2-3 months", 
          price: "₹500 per use"
        },
        { 
          equipment: "Plow", 
          used: "Feb, Jun, Sep, Oct", 
          totalUsage: 4, 
          frequency: "Every 3 months", 
          price: "₹300 per use"
        },
        { 
          equipment: "Harvester", 
          used: "Mar, Jun, Oct", 
          totalUsage: 3, 
          frequency: "Every 4 months", 
          price: "₹700 per use"
        },
      ],
      "Last 3 years": [
        { 
          equipment: "Tractor", 
          used: "Jan, Mar, Apr, May, Jul, Aug", 
          totalUsage: 6, 
          frequency: "Every 2-3 months", 
          price: "₹500 per use"
        },
        { 
          equipment: "Plow", 
          used: "Feb, Jun, Sep, Oct", 
          totalUsage: 4, 
          frequency: "Every 3 months", 
          price: "₹300 per use"
        },
        { 
          equipment: "Harvester", 
          used: "Mar, Apr, Jul, Oct", 
          totalUsage: 4, 
          frequency: "Every 3 months", 
          price: "₹700 per use"
        },
      ],
    }
    
  });

  const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

  // Dynamically change the data based on selected date range
  const updateData = (range) => {
    return {
      revenue: reportData.revenue[range],
      laborCost: reportData.laborCost[range],
      costOfGoodsSold: reportData.costOfGoodsSold[range],
      profitMargin: reportData.profitMargin[range],
      farmEquipmentUsage: reportData.farmEquipmentUsage[range],
    };
  };

  const data = updateData(selectedDateRange);

  // Chart Data for Revenue, Cost of Goods Sold (COGS), and Profit Margin
  const revenueData = {
    labels: data.revenue.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: data.revenue,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.5)",
        fill: true,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };

  const laborCostData = {
    labels: data.laborCost.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Labor Cost (₹)",
        data: data.laborCost,
        backgroundColor: "#f44336",
        borderColor: "#d32f2f",
        borderWidth: 2,
        hoverBackgroundColor: "#e57373",
      },
    ],
  };

  const costOfGoodsSoldData = {
    labels: data.costOfGoodsSold.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cost of Goods Sold (₹)",
        data: data.costOfGoodsSold,
        backgroundColor: "rgba(33, 150, 243, 0.5)",
        borderColor: "#2196f3",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(33, 150, 243, 0.7)",
      },
    ],
  };

  const profitMarginData = {
    labels: data.profitMargin.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profit Margin (₹)",
        data: data.profitMargin,
        backgroundColor: "rgba(255, 152, 0, 0.5)",
        borderColor: "#ff9800",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255, 152, 0, 0.7)",
      },
    ],
  };

  // Handle date range selection
  const handleDateRangeChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  return (
    <div className="p-8 bg-[#eaece4] min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Farm Analytics & Reports</h1>

      {/* Date Range Filter */}
      <div className="mb-6 flex justify-between items-center">
        <select
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
        >
          <option value="Last 6 months">Last 6 months</option>
          <option value="Last 1 year">Last 1 year</option>
          <option value="Last 3 years">Last 3 years</option>
        </select>
      </div>

      {/* Revenue Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaRegChartBar className="mr-2 text-3xl text-green-500" />
            Revenue, Investment & Profit
          </h2>
          <p className="text-lg font-bold">{`Revenue: ₹${data.revenue[data.revenue.length - 1]}`}</p>
          <p className="text-sm text-gray-500">Investment: ₹1500</p>
          <p className="text-sm text-gray-500">Profit: ₹{data.profitMargin[data.profitMargin.length - 1]}</p>
        </div>
         {/* Labor Cost */}
         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
           <h2 className="text-xl font-semibold mb-4 flex items-center">
             <FaRegChartBar className="mr-2 text-3xl text-red-500" />
             Labor Cost
           </h2>
           <p className="text-lg font-bold">{`₹${data.laborCost[data.laborCost.length - 1]}`}</p>
           <p className="text-sm text-gray-500">Labor cost for the selected range</p>
      </div>
      </div>

 

      {/* Graphs for Revenue, COGS, Profit Margin */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4">Revenue Analysis</h2>
          <Line data={revenueData} options={{
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `₹${tooltipItem.raw.toFixed(2)}`,
                }
              },
              datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'top',
                font: { weight: 'bold' },
              }
            },
          }} />
        </div>

        {/* Labor Cost Chart (Horizontal Bar) */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4">Labor Cost Analysis</h2>
          <Bar data={laborCostData} options={{
            responsive: true,
            indexAxis: 'y',  // Horizontal bar chart
            plugins: {
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
                }
              },
              datalabels: {
                color: '#fff',
                anchor: 'center',
                align: 'center',
                font: { weight: 'bold' },
              }
            },
          }} />
        </div>
      </div>

      {/* Profit Margin and COGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {/* Profit Margin Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4">Profit Margin Analysis</h2>
          <Line data={profitMarginData} options={{
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
                }
              },
              datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'top',
                font: { weight: 'bold' },
              }
            },
          }} />
        </div>
             {/* Farm Equipment Usage Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all mb-6">
        <h2 className="text-xl font-semibold mb-4">Farm Equipment Usage</h2>
        <div className="space-y-4">
          {data.farmEquipmentUsage.map((equipment, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{equipment.equipment}</h3>
              <p className="text-sm text-gray-600">Used: {equipment.used}</p>
              <p className="text-sm text-gray-600">Total Usage: {equipment.totalUsage}</p>
              <p className="text-sm text-gray-600">Price: {equipment.price}</p>
              <p className="text-sm text-gray-600">Frequency: {equipment.frequency}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default AnalyticsAndReports;



// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   LineElement,
//   Filler,
// } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// import { FaDownload, FaRegChartBar } from "react-icons/fa";

// // Register chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   LineElement,
//   Filler,
//   ChartDataLabels
// );

// const AnalyticsAndReports = () => {
//   // Dynamic data for farm equipment and reports
//   const [reportData, setReportData] = useState({
//     revenue: {
//       "Last 6 months": [5000, 5500, 6000, 7000, 6800, 7500],
//       "Last 1 year": [5200, 5600, 6000, 6800, 7000, 7200, 7400, 7600, 7800, 7900, 8000, 8100],
//       "Last 3 years": [5000, 5600, 6000, 7000, 7500, 8000, 8500, 8800, 9000, 9200, 9500, 9700, 10000, 10200, 10500],
//     },
//     investment: {
//       "Last 6 months": [2000, 2200, 2500, 2700, 2600, 2800],
//       "Last 1 year": [2200, 2300, 2500, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600],
//       "Last 3 years": [2100, 2300, 2600, 2900, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200],
//     },
//     profit: {
//       "Last 6 months": [3000, 3300, 3500, 4300, 4200, 4700],
//       "Last 1 year": [3000, 3300, 3500, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800],
//       "Last 3 years": [2900, 3200, 3500, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200],
//     },
//     laborCost: {
//       "Last 6 months": [500, 550, 600, 700, 650, 800],
//       "Last 1 year": [550, 600, 650, 750, 700, 850, 900, 950, 1000, 1100, 1150, 1200],
//       "Last 3 years": [600, 650, 700, 800, 950, 1000, 1050, 1100, 1200, 1250, 1300, 1400, 1500, 1600, 1700],
//     },
//     profitMargin: {
//       "Last 6 months": [1000, 1300, 1900, 2600, 2200, 3000],
//       "Last 1 year": [1300, 1400, 1600, 2000, 2300, 2500, 2800, 3000, 3200, 3400, 3600, 3800],
//       "Last 3 years": [1400, 1600, 1800, 2100, 2500, 2700, 3000, 3200, 3400, 3500, 3700, 3800, 4000, 4200, 4300],
//     },
//     farmEquipmentUsage: {
//       "Last 6 months": [
//         { equipment: "Tractor", used: "Jan, Mar, Jun", totalUsage: 3, frequency: "Every 2 months" },
//         { equipment: "Plow", used: "Feb, Apr, May", totalUsage: 3, frequency: "Every 2 months" },
//         { equipment: "Harvester", used: "Apr, Jun", totalUsage: 2, frequency: "Every 3 months" },
//       ],
//       "Last 1 year": [
//         { equipment: "Tractor", used: "Jan, Mar, Apr, May, Nov", totalUsage: 5, frequency: "Every 2-3 months" },
//         { equipment: "Plow", used: "Feb, Jun, Sep, Oct", totalUsage: 4, frequency: "Every 3 months" },
//         { equipment: "Harvester", used: "Mar, Jun, Oct", totalUsage: 3, frequency: "Every 4 months" },
//       ],
//       "Last 3 years": [
//         { equipment: "Tractor", used: "Jan, Mar, Apr, May, Jul, Aug", totalUsage: 6, frequency: "Every 2-3 months" },
//         { equipment: "Plow", used: "Feb, Jun, Sep, Oct", totalUsage: 4, frequency: "Every 3 months" },
//         { equipment: "Harvester", used: "Mar, Apr, Jul, Oct", totalUsage: 4, frequency: "Every 3 months" },
//       ],
//     },
//   });

//   const [selectedDateRange, setSelectedDateRange] = useState("Last 6 months");

//   // Dynamically change the data based on selected date range
//   const updateData = (range) => {
//     return {
//       revenue: reportData.revenue[range],
//       investment: reportData.investment[range],
//       profit: reportData.profit[range],
//       laborCost: reportData.laborCost[range],
//       profitMargin: reportData.profitMargin[range],
//       farmEquipmentUsage: reportData.farmEquipmentUsage[range],
//     };
//   };

//   const data = updateData(selectedDateRange);

//   // Chart Data for Revenue, Investment, and Profit
//   const revenueData = {
//     labels: data.revenue.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Revenue ($)",
//         data: data.revenue,
//         borderColor: "#4caf50",
//         backgroundColor: "rgba(76, 175, 80, 0.5)",
//         fill: true,
//         tension: 0.4,
//         borderWidth: 3,
//       },
//       {
//         label: "Investment ($)",
//         data: data.investment,
//         borderColor: "#2196f3",
//         backgroundColor: "rgba(33, 150, 243, 0.5)",
//         fill: true,
//         tension: 0.4,
//         borderWidth: 3,
//       },
//       {
//         label: "Profit ($)",
//         data: data.profit,
//         borderColor: "#ff9800",
//         backgroundColor: "rgba(255, 152, 0, 0.5)",
//         fill: true,
//         tension: 0.4,
//         borderWidth: 3,
//       },
//     ],
//   };

//   // Chart Data for Labor Cost
//   const laborCostData = {
//     labels: data.laborCost.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Labor Cost ($)",
//         data: data.laborCost,
//         backgroundColor: "#f44336",
//         borderColor: "#d32f2f",
//         borderWidth: 2,
//         hoverBackgroundColor: "#e57373",
//       },
//     ],
//   };

//   // Chart Data for Profit Margin
//   const profitMarginData = {
//     labels: data.profitMargin.length > 6 ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Profit Margin ($)",
//         data: data.profitMargin,
//         backgroundColor: "rgba(255, 152, 0, 0.5)",
//         borderColor: "#ff9800",
//         borderWidth: 2,
//         hoverBackgroundColor: "rgba(255, 152, 0, 0.7)",
//       },
//     ],
//   };

//   // Handle date range selection
//   const handleDateRangeChange = (event) => {
//     setSelectedDateRange(event.target.value);
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Farm Analytics & Reports</h1>

//       {/* Date Range Filter */}
//       <div className="mb-6 flex justify-between items-center">
//         <select
//           value={selectedDateRange}
//           onChange={handleDateRangeChange}
//           className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
//         >
//           <option value="Last 6 months">Last 6 months</option>
//           <option value="Last 1 year">Last 1 year</option>
//           <option value="Last 3 years">Last 3 years</option>
//         </select>
//       </div>

//       {/* Overview Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
//         {/* Revenue */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaRegChartBar className="mr-2 text-3xl text-green-500" />
//             Revenue
//           </h2>
//           <p className="text-lg font-bold">{`$${data.revenue[data.revenue.length - 1]}`}</p>
//           <p className="text-sm text-gray-500">Total revenue for the selected range</p>
//         </div>

//         {/* Labor Cost */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaRegChartBar className="mr-2 text-3xl text-red-500" />
//             Labor Cost
//           </h2>
//           <p className="text-lg font-bold">{`$${data.laborCost[data.laborCost.length - 1]}`}</p>
//           <p className="text-sm text-gray-500">Labor cost for the selected range</p>
//         </div>

//         {/* Profit Margin */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4 flex items-center">
//             <FaRegChartBar className="mr-2 text-3xl text-orange-500" />
//             Profit Margin
//           </h2>
//           <p className="text-lg font-bold">{`$${data.profitMargin[data.profitMargin.length - 1]}`}</p>
//           <p className="text-sm text-gray-500">Profit margin for the selected range</p>
//         </div>
//       </div>

//       {/* Graphs for Revenue, Investment, and Profit */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//         {/* Revenue Analysis */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4">Revenue, Investment, and Profit</h2>
//           <Line data={revenueData} options={{
//             responsive: true,
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 }
//               },
//               datalabels: {
//                 color: '#000',
//                 anchor: 'end',
//                 align: 'top',
//                 font: { weight: 'bold' },
//               }
//             },
//           }} />
//         </div>

//         {/* Labor Cost */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//           <h2 className="text-xl font-semibold mb-4">Labor Cost Analysis</h2>
//           <Bar data={laborCostData} options={{
//             responsive: true,
//             indexAxis: 'y',  // Horizontal bar chart
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 }
//               },
//               datalabels: {
//                 color: '#fff',
//                 anchor: 'center',
//                 align: 'center',
//                 font: { weight: 'bold' },
//               }
//             },
//           }} />
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
//         <h2 className="text-xl font-semibold mb-4">Profit Margin Analysis</h2>
//         <Line data={profitMarginData} options={{
//           responsive: true,
//           plugins: {
//             tooltip: {
//               callbacks: {
//                 label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//               }
//             },
//             datalabels: {
//               color: '#000',
//               anchor: 'end',
//               align: 'top',
//               font: { weight: 'bold' },
//             }
//           },
//         }} />
//       </div>

//       {/* Farm Equipment List */}
//       <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all mt-6">
//         <h2 className="text-xl font-semibold mb-4">Farm Services</h2>
//         <ul>map((equipment, index) => (
//             <li key={index} classNa
//           {data.farmEquipmentUsage.me="mb-2">
//               <strong>{equipment.equipment}</strong>: Used in {equipment.used}
//             </li>
//           ))}
//         </ul>
//       </div>
//       </div>

//       {/* Profit Margin */}
    
//     </div>
//   );
// };

// export default AnalyticsAndReports;
