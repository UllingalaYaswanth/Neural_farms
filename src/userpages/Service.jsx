// import React, { useState, useEffect } from 'react';
// import FarmerServiceRegistrationForm from './FarmerServiceRegistrationForm';
// import ServiceTable from './ServiceTable';
// import ServiceMap from './ServiceMap';
// import FilterControls from './FilterControls';
// import HistoryTable from './HistoryTable';

// const FarmerDashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false); // Track edit mode
//   const [editData, setEditData] = useState(null); // Store data of the request being edited
//   const [filter, setFilter] = useState({ cropType: '', serviceType: '' });
//   const [view, setView] = useState('table'); // 'table', 'map', or 'history'
//   const [historyData, setHistoryData] = useState([]); // State for history data
//   const [loading, setLoading] = useState(false); // Loading state for API call

//   // Fetch history data from the backend
//   useEffect(() => {
//     if (view === 'history') {
//       fetchHistoryData();
//     }
//   }, [view]);

//   const fetchHistoryData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://nfbackend.onrender.com/api/service/ser_request');
//       if (!response.ok) {
//         throw new Error('Failed to fetch history data');
//       }
//       const data = await response.json();
//       setHistoryData(data);
//     } catch (error) {
//       console.error('Error fetching history data:', error);
//       alert('Failed to fetch history data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Edit Action
//   const handleEdit = (id) => {
//     // Find the item to edit
//     const itemToEdit = historyData.find((item) => item.id === id);
//     if (itemToEdit) {
//       setEditData(itemToEdit); // Set the data to be edited
//       setIsEditMode(true); // Enable edit mode
//       setIsModalOpen(true); // Open the modal
//     }
//   };

//   // Handle Delete Action
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this request?');
//     if (confirmDelete) {
//       try {
//         const response = await fetch(`https://nfbackend.onrender.com/api/service/ser_request/${id}`, {
//           method: 'DELETE',
//         });
//         if (!response.ok) {
//           throw new Error('Failed to delete the request');
//         }
//         // Remove the deleted item from the history data
//         setHistoryData((prevData) => prevData.filter((item) => item.id !== id));
//         alert('Request deleted successfully');
//       } catch (error) {
//         console.error('Error deleting request:', error);
//         alert('Failed to delete the request. Please try again.');
//       }
//     }
//   };

//   // Handle Form Submission (Create or Edit)
//   const handleFormSubmit = async (formData) => {
//     try {
//       const url = isEditMode
//         ? `https://nfbackend.onrender.com/api/service/ser_request/${editData.id}` // Edit endpoint
//         : 'https://nfbackend.onrender.com/api/service/ser_request'; // Create endpoint
//       const method = isEditMode ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to ${isEditMode ? 'update' : 'submit'} the form`);
//       }

//       const result = await response.json();
//       console.log('Form submitted successfully:', result);
//       alert(result.message);

//       // Refresh history data after submission
//       fetchHistoryData();

//       // Reset form and close modal
//       setIsModalOpen(false);
//       setIsEditMode(false);
//       setEditData(null);
//     } catch (error) {
//       console.error('Error submitting the form:', error.message);
//       alert(`Failed to ${isEditMode ? 'update' : 'submit'} the form. Please try again.`);
//     }
//   };

//   const dummyData = [
//     {
//       id: 1,
//       name: 'Sai Kumar',
//       farmName: 'Green Acres',
//       email: 'sai@example.com',
//       phone: '9321567890',
//       cropType: 'Wheat',
//       farmArea: '50',
//       address: '123 Farm Lane',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',

//       ],
//       location: [21.215000, 76.880000], // Latitude and Longitude
//     },
   
//     {
//       id: 5,
//       name: 'Neha Rao',
//       farmName: 'Golden Fields',
//       email: 'neha@example.com',
//       phone: '9345678910',
//       cropType: 'Maize',
//       farmArea: '100',
//       address: '123 Golden Valley',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Market Access & Sales Support',
//         'Precision Agriculture',
//         'Climate and Weather Advisory',
//         'Post-Harvest Processing'
//       ],
//       location: [21.213700, 76.879376],
//     },
//     {
//       id: 6,
//       name: 'Harish Kumar',
//       farmName: 'Mountain View Farms',
//       email: 'harish@example.com',
//       phone: '9988775432',
//       cropType: 'Barley',
//       farmArea: '60',
//       address: '258 Mountain Road',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',
//         'Pest and Disease Monitoring',
//       ],
//       location: [21.214200, 76.877500],
//     },
//     {
//       id: 7,
//       name: 'Meera Iyer',
//       farmName: 'Blue Sky Farms',
//       email: 'meera@example.com',
//       phone: '9876549870',
//       cropType: 'Sugarcane',
//       farmArea: '150',
//       address: '567 Sugarcane Road',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',
//         'Precision Agriculture',
//         'Post-Harvest Processing'
//       ],
//       location: [21.210500, 76.879800],
//     },
//     {
//       id: 8,
//       name: 'Vikram Singh',
//       farmName: 'Eastwood Gardens',
//       email: 'vikram@example.com',
//       phone: '9321561234',
//       cropType: 'Grapes',
//       farmArea: '45',
//       address: '678 Vineyard Street',
//       serviceTypes: [

//         'Climate and Weather Advisory',
//         'Post-Harvest Processing'
//       ],
//       location: [21.211800, 76.876500],
//     },
//     {
//       id: 9,
//       name: 'Priya Gupta',
//       farmName: 'Lush Meadows',
//       email: 'priya@example.com',
//       phone: '9988771122',
//       cropType: 'Peppers',
//       farmArea: '80',
//       address: '101 Lush Meadows Lane',
//       serviceTypes: [
//         'Soil Testing',
//         'Irrigation Services',
//         'Pest and Disease Monitoring',
//         'Fertilization Services',

//       ],
//       location: [21.213300, 76.874600],
//     },
//     {
//       id: 10,
//       name: 'Rahul Desai',
//       farmName: 'Golden Harvests',
//       email: 'rahul@example.com',
//       phone: '9345671234',
//       cropType: 'Cotton',
//       farmArea: '110',
//       address: '89 Cotton Road',
//       serviceTypes: [
//         'Harvest Storage & Handling',
//         'Market Access & Sales Support',
//         'Precision Agriculture',
//         'Post-Harvest Processing'
//       ],
//       location: [21.210000, 76.875200],
//     },
   
//     {
//       id: 12,
//       name: 'Rajesh',
//       farmName: 'Golden Fields',
//       email: 'rajesh@example.com',
//       phone: '9876543210',
//       cropType: 'Corn',
//       farmArea: '100',
//       address: '456 Harvest Road',
//       serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
//       location: [21.214500, 76.873000], // Latitude and Longitude
//     },
//     {
//       id: 13,
//       name: 'Ganesh',
//       farmName: 'Sunrise Farms',
//       email: 'ganesh@example.com',
//       phone: '8347155565',
//       cropType: 'Rice',
//       farmArea: '75',
//       address: '789 Rice Field',
//       serviceTypes: ['Crop Health Monitoring', 'Weed Control'],
//       location: [21.215500, 76.881200], // Latitude and Longitude
//     },
//   ];

//   const serviceProviders = [
//     {
//       id: 1,
//       name: 'AgriTech Solutions',
//       serviceType: 'Soil Testing',
//       location: [21.217000, 76.882000], // Latitude and Longitude
//     },
//     {
//       id: 2,
//       name: 'Drone Masters',
//       serviceType: 'Drone Service',
//       location: [21.218500, 76.877800], // Latitude and Longitude
//     },
//     {
//       id: 3,
//       name: 'Irrigation Pros',
//       serviceType: 'Irrigation Services',
//       location: [21.216200, 76.874300], // Latitude and Longitude
//     },
//   ];

//   const filteredData = dummyData.filter(
//     (item) =>
//       (!filter.cropType || item.cropType === filter.cropType) &&
//       (!filter.serviceType ||
//         item.serviceTypes.some((service) => service === filter.serviceType))
//   );

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="p-6 bg-[#eaece4] min-h-screen">
//       {/* Header */}
//       <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Request</h1>

//       {/* View Toggle Buttons */}
//       <div className='flex justify-between items-center mb-4'>
//         {/* Filters */}
//         <FilterControls filter={filter} handleFilterChange={handleFilterChange} />
//         <div className='flex space-x-5'>
//           <div className="mb-4">
//             <button
//               onClick={() => setView('table')}
//               className={`px-4 py-2 rounded-md mr-2 ${
//                 view === 'table'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               Table View
//             </button>
//             <button
//               onClick={() => setView('map')}
//               className={`px-4 py-2 rounded-md mr-2 ${
//                 view === 'map'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               Map View
//             </button>
//             <button
//               onClick={() => setView('history')}
//               className={`px-4 py-2 rounded-md ${
//                 view === 'history'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               History
//             </button>
//           </div>
//           <button
//             onClick={() => {
//               setIsEditMode(false); // Disable edit mode
//               setIsModalOpen(true); // Open the modal
//             }}
//             className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none mb-4"
//           >
//             Raise Request
//           </button>
//         </div>
//       </div>

//       {/* Table View */}
//       {view === 'table' && <ServiceTable data={filteredData} />}

//       {/* Map View */}
//       {view === 'map' && <ServiceMap farms={dummyData} serviceProviders={serviceProviders} />}

//       {/* History View */}
//       {view === 'history' && (
//         <div>
//           {loading ? (
//             <p>Loading history data...</p>
//           ) : (
//             <HistoryTable
//               data={historyData}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           )}
//         </div>
//       )}

//       {/* Modal */}
//       {isModalOpen && (
//         <FarmerServiceRegistrationForm
//           onClose={() => {
//             setIsModalOpen(false);
//             setIsEditMode(false);
//             setEditData(null);
//           }}
//           onSubmit={handleFormSubmit}
//           initialData={editData} // Pass existing data for editing
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;


// import React, { useState, useEffect } from 'react';
// import FarmerServiceRegistrationForm from './FarmerServiceRegistrationForm';
// import ServiceTable from './ServiceTable';
// import ServiceMap from './ServiceMap';
// import FilterControls from './FilterControls';
// import HistoryTable from './HistoryTable';
// import FarmerServiceEnquiryForm from './FarmerServiceEnquiryForm'; // Import the enquiry form component

// const FarmerDashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); // State for enquiry modal
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [filter, setFilter] = useState({ cropType: '', serviceType: '' });
//   const [view, setView] = useState('table');
//   const [historyData, setHistoryData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (view === 'history') {
//       fetchHistoryData();
//     }
//   }, [view]);

//   const fetchHistoryData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://nfbackend.onrender.com/api/service/ser_request');
//       if (!response.ok) {
//         throw new Error('Failed to fetch history data');
//       }
//       const data = await response.json();
//       setHistoryData(data);
//     } catch (error) {
//       console.error('Error fetching history data:', error);
//       alert('Failed to fetch history data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (id) => {
//     const itemToEdit = historyData.find((item) => item.id === id);
//     if (itemToEdit) {
//       setEditData(itemToEdit);
//       setIsEditMode(true);
//       setIsModalOpen(true);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this request?');
//     if (confirmDelete) {
//       try {
//         const response = await fetch(`https://nfbackend.onrender.com/api/service/ser_request/${id}`, {
//           method: 'DELETE',
//         });
//         if (!response.ok) {
//           throw new Error('Failed to delete the request');
//         }
//         setHistoryData((prevData) => prevData.filter((item) => item.id !== id));
//         alert('Request deleted successfully');
//       } catch (error) {
//         console.error('Error deleting request:', error);
//         alert('Failed to delete the request. Please try again.');
//       }
//     }
//   };

//   const handleFormSubmit = async (formData) => {
//     try {
//       const url = isEditMode
//         ? `https://nfbackend.onrender.com/api/service/ser_request/${editData.id}`
//         : 'https://nfbackend.onrender.com/api/service/ser_request';
//       const method = isEditMode ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to ${isEditMode ? 'update' : 'submit'} the form`);
//       }

//       const result = await response.json();
//       console.log('Form submitted successfully:', result);
//       alert(result.message);

//       fetchHistoryData();
//       setIsModalOpen(false);
//       setIsEditMode(false);
//       setEditData(null);
//     } catch (error) {
//       console.error('Error submitting the form:', error.message);
//       alert(`Failed to ${isEditMode ? 'update' : 'submit'} the form. Please try again.`);
//     }
//   };

//   const dummyData = [
//     {
//       id: 1,
//       name: 'Sai Kumar',
//       farmName: 'Green Acres',
//       email: 'sai@example.com',
//       phone: '9321567890',
//       cropType: 'Wheat',
//       farmArea: '50',
//       address: '123 Farm Lane',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',

//       ],
//       location: [21.215000, 76.880000], // Latitude and Longitude
//     },
   
//     {
//       id: 5,
//       name: 'Neha Rao',
//       farmName: 'Golden Fields',
//       email: 'neha@example.com',
//       phone: '9345678910',
//       cropType: 'Maize',
//       farmArea: '100',
//       address: '123 Golden Valley',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Market Access & Sales Support',
//         'Precision Agriculture',
//         'Climate and Weather Advisory',
//         'Post-Harvest Processing'
//       ],
//       location: [21.213700, 76.879376],
//     },
//     {
//       id: 6,
//       name: 'Harish Kumar',
//       farmName: 'Mountain View Farms',
//       email: 'harish@example.com',
//       phone: '9988775432',
//       cropType: 'Barley',
//       farmArea: '60',
//       address: '258 Mountain Road',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',
//         'Pest and Disease Monitoring',
//       ],
//       location: [21.214200, 76.877500],
//     },
//     {
//       id: 7,
//       name: 'Meera Iyer',
//       farmName: 'Blue Sky Farms',
//       email: 'meera@example.com',
//       phone: '9876549870',
//       cropType: 'Sugarcane',
//       farmArea: '150',
//       address: '567 Sugarcane Road',
//       serviceTypes: [
//         'Soil Testing',
//         'Drone Service',
//         'Irrigation Services',
//         'Precision Agriculture',
//         'Post-Harvest Processing'
//       ],
//       location: [21.210500, 76.879800],
//     },
//     {
//       id: 8,
//       name: 'Vikram Singh',
//       farmName: 'Eastwood Gardens',
//       email: 'vikram@example.com',
//       phone: '9321561234',
//       cropType: 'Grapes',
//       farmArea: '45',
//       address: '678 Vineyard Street',
//       serviceTypes: [

//         'Climate and Weather Advisory',
//         'Post-Harvest Processing'
//       ],
//       location: [21.211800, 76.876500],
//     },
//     {
//       id: 9,
//       name: 'Priya Gupta',
//       farmName: 'Lush Meadows',
//       email: 'priya@example.com',
//       phone: '9988771122',
//       cropType: 'Peppers',
//       farmArea: '80',
//       address: '101 Lush Meadows Lane',
//       serviceTypes: [
//         'Soil Testing',
//         'Irrigation Services',
//         'Pest and Disease Monitoring',
//         'Fertilization Services',

//       ],
//       location: [21.213300, 76.874600],
//     },
//     {
//       id: 10,
//       name: 'Rahul Desai',
//       farmName: 'Golden Harvests',
//       email: 'rahul@example.com',
//       phone: '9345671234',
//       cropType: 'Cotton',
//       farmArea: '110',
//       address: '89 Cotton Road',
//       serviceTypes: [
//         'Harvest Storage & Handling',
//         'Market Access & Sales Support',
//         'Precision Agriculture',
//         'Post-Harvest Processing'
//       ],
//       location: [21.210000, 76.875200],
//     },
   
//     {
//       id: 12,
//       name: 'Rajesh',
//       farmName: 'Golden Fields',
//       email: 'rajesh@example.com',
//       phone: '9876543210',
//       cropType: 'Corn',
//       farmArea: '100',
//       address: '456 Harvest Road',
//       serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
//       location: [21.214500, 76.873000], // Latitude and Longitude
//     },
//     {
//       id: 13,
//       name: 'Ganesh',
//       farmName: 'Sunrise Farms',
//       email: 'ganesh@example.com',
//       phone: '8347155565',
//       cropType: 'Rice',
//       farmArea: '75',
//       address: '789 Rice Field',
//       serviceTypes: ['Crop Health Monitoring', 'Weed Control'],
//       location: [21.215500, 76.881200], // Latitude and Longitude
//     },
//   ];

//   const serviceProviders = [
//     {
//       id: 1,
//       name: 'AgriTech Solutions',
//       serviceType: 'Soil Testing',
//       location: [21.217000, 76.882000], // Latitude and Longitude
//     },
//     {
//       id: 2,
//       name: 'Drone Masters',
//       serviceType: 'Drone Service',
//       location: [21.218500, 76.877800], // Latitude and Longitude
//     },
//     {
//       id: 3,
//       name: 'Irrigation Pros',
//       serviceType: 'Irrigation Services',
//       location: [21.216200, 76.874300], // Latitude and Longitude
//     },
//   ];


//   const filteredData = dummyData.filter(
//     (item) =>
//       (!filter.cropType || item.cropType === filter.cropType) &&
//       (!filter.serviceType ||
//         item.serviceTypes.some((service) => service === filter.serviceType))
//   );

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="p-6 bg-[#eaece4] min-h-screen">
//       {/* Header */}
//       <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Request</h1>

//       {/* View Toggle Buttons */}
//       <div className='flex justify-between items-center mb-4'>
//         {/* Filters */}
//         <FilterControls filter={filter} handleFilterChange={handleFilterChange} />
//         <div className='flex space-x-5'>
//           <div className="mb-4">
//             <button
//               onClick={() => setView('table')}
//               className={`px-4 py-2 rounded-md mr-2 ${
//                 view === 'table'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               Table View
//             </button>
//             <button
//               onClick={() => setView('map')}
//               className={`px-4 py-2 rounded-md mr-2 ${
//                 view === 'map'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               Map View
//             </button>
//             <button
//               onClick={() => setView('history')}
//               className={`px-4 py-2 rounded-md ${
//                 view === 'history'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               History
//             </button>
//           </div>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => {
//                 setIsEditMode(false);
//                 setIsModalOpen(true);
//               }}
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none mb-4"
//             >
//               Raise Request
//             </button>
//             <button
//               onClick={() => setIsEnquiryModalOpen(true)}
//               className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none mb-4"
//             >
//               Enquiry
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Table View */}
//       {view === 'table' && <ServiceTable data={filteredData} />}

//       {/* Map View */}
//       {view === 'map' && <ServiceMap farms={dummyData} serviceProviders={serviceProviders} />}

//       {/* History View */}
//       {view === 'history' && (
//         <div>
//           {loading ? (
//             <p>Loading history data...</p>
//           ) : (
//             <HistoryTable
//               data={historyData}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           )}
//         </div>
//       )}

//       {/* Service Request Modal */}
//       {view === 'history' && isModalOpen && (
//         <FarmerServiceRegistrationForm
//           onClose={() => {
//             setIsModalOpen(false);
//             setIsEditMode(false);
//             setEditData(null);
//           }}
//           onSubmit={handleFormSubmit}
//           initialData={editData}
//         />
//       )}

//       {/* Enquiry Modal */}
//       {isEnquiryModalOpen && (
//         <FarmerServiceEnquiryForm
//           onClose={() => setIsEnquiryModalOpen(false)}
//           onSubmit={(enquiryData) => {
//             // Handle enquiry form submission
//             console.log('Enquiry submitted:', enquiryData);
//             alert('Enquiry submitted successfully!');
//             setIsEnquiryModalOpen(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;
import React, { useState, useEffect } from 'react';
import FarmerServiceRegistrationForm from './FarmerServiceRegistrationForm';
import ServiceTable from './ServiceTable';
import ServiceMap from './ServiceMap';
import FilterControls from './FilterControls';
import HistoryTable from './HistoryTable';
import FarmerServiceEnquiryForm from './FarmerServiceEnquiryForm';

const FarmerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState({ cropType: '', serviceType: '' });
  const [activeTab, setActiveTab] = useState('table');
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === 'history') {
      fetchHistoryData();
    }
  }, [activeTab]);

  const fetchHistoryData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://nfbackend.onrender.com/api/service/ser_request');
      if (!response.ok) {
        throw new Error('Failed to fetch history data');
      }
      const data = await response.json();
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching history data:', error);
      alert('Failed to fetch history data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = historyData.find((item) => item.id === id);
    if (itemToEdit) {
      setEditData(itemToEdit);
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this request?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://nfbackend.onrender.com/api/service/ser_request/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete the request');
        }
        setHistoryData((prevData) => prevData.filter((item) => item.id !== id));
        alert('Request deleted successfully');
      } catch (error) {
        console.error('Error deleting request:', error);
        alert('Failed to delete the request. Please try again.');
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      const url = isEditMode
        ? `https://nfbackend.onrender.com/api/service/ser_request/${editData.id}`
        : 'https://nfbackend.onrender.com/api/service/ser_request';
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isEditMode ? 'update' : 'submit'} the form`);
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      alert(result.message);

      fetchHistoryData();
      setIsModalOpen(false);
      setIsEditMode(false);
      setEditData(null);
    } catch (error) {
      console.error('Error submitting the form:', error.message);
      alert(`Failed to ${isEditMode ? 'update' : 'submit'} the form. Please try again.`);
    }
  };

  const dummyData = [
    {
      id: 1,
      name: 'Sai Kumar',
      farmName: 'Green Acres',
      email: 'sai@example.com',
      phone: '9321567890',
      cropType: 'Wheat',
      farmArea: '50',
      address: '123 Farm Lane',
      serviceTypes: [
        'Soil Testing',
        'Drone Service',
        'Irrigation Services',

      ],
      location: [21.215000, 76.880000], // Latitude and Longitude
    },
   
    {
      id: 5,
      name: 'Neha Rao',
      farmName: 'Golden Fields',
      email: 'neha@example.com',
      phone: '9345678910',
      cropType: 'Maize',
      farmArea: '100',
      address: '123 Golden Valley',
      serviceTypes: [
        'Soil Testing',
        'Drone Service',
        'Market Access & Sales Support',
        'Precision Agriculture',
        'Climate and Weather Advisory',
        'Post-Harvest Processing'
      ],
      location: [21.213700, 76.879376],
    },
    {
      id: 6,
      name: 'Harish Kumar',
      farmName: 'Mountain View Farms',
      email: 'harish@example.com',
      phone: '9988775432',
      cropType: 'Barley',
      farmArea: '60',
      address: '258 Mountain Road',
      serviceTypes: [
        'Soil Testing',
        'Drone Service',
        'Irrigation Services',
        'Pest and Disease Monitoring',
      ],
      location: [21.214200, 76.877500],
    },
    {
      id: 7,
      name: 'Meera Iyer',
      farmName: 'Blue Sky Farms',
      email: 'meera@example.com',
      phone: '9876549870',
      cropType: 'Sugarcane',
      farmArea: '150',
      address: '567 Sugarcane Road',
      serviceTypes: [
        'Soil Testing',
        'Drone Service',
        'Irrigation Services',
        'Precision Agriculture',
        'Post-Harvest Processing'
      ],
      location: [21.210500, 76.879800],
    },
    {
      id: 8,
      name: 'Vikram Singh',
      farmName: 'Eastwood Gardens',
      email: 'vikram@example.com',
      phone: '9321561234',
      cropType: 'Grapes',
      farmArea: '45',
      address: '678 Vineyard Street',
      serviceTypes: [

        'Climate and Weather Advisory',
        'Post-Harvest Processing'
      ],
      location: [21.211800, 76.876500],
    },
    {
      id: 9,
      name: 'Priya Gupta',
      farmName: 'Lush Meadows',
      email: 'priya@example.com',
      phone: '9988771122',
      cropType: 'Peppers',
      farmArea: '80',
      address: '101 Lush Meadows Lane',
      serviceTypes: [
        'Soil Testing',
        'Irrigation Services',
        'Pest and Disease Monitoring',
        'Fertilization Services',

      ],
      location: [21.213300, 76.874600],
    },
    {
      id: 10,
      name: 'Rahul Desai',
      farmName: 'Golden Harvests',
      email: 'rahul@example.com',
      phone: '9345671234',
      cropType: 'Cotton',
      farmArea: '110',
      address: '89 Cotton Road',
      serviceTypes: [
        'Harvest Storage & Handling',
        'Market Access & Sales Support',
        'Precision Agriculture',
        'Post-Harvest Processing'
      ],
      location: [21.210000, 76.875200],
    },
   
    {
      id: 12,
      name: 'Rajesh',
      farmName: 'Golden Fields',
      email: 'rajesh@example.com',
      phone: '9876543210',
      cropType: 'Corn',
      farmArea: '100',
      address: '456 Harvest Road',
      serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
      location: [21.214500, 76.873000], // Latitude and Longitude
    },
    {
      id: 13,
      name: 'Ganesh',
      farmName: 'Sunrise Farms',
      email: 'ganesh@example.com',
      phone: '8347155565',
      cropType: 'Rice',
      farmArea: '75',
      address: '789 Rice Field',
      serviceTypes: ['Crop Health Monitoring', 'Weed Control'],
      location: [21.215500, 76.881200], // Latitude and Longitude
    },
  ];

  const serviceProviders = [
    {
      id: 1,
      name: 'AgriTech Solutions',
      serviceType: 'Soil Testing',
      location: [21.217000, 76.882000], // Latitude and Longitude
    },
    {
      id: 2,
      name: 'Drone Masters',
      serviceType: 'Drone Service',
      location: [21.218500, 76.877800], // Latitude and Longitude
    },
    {
      id: 3,
      name: 'Irrigation Pros',
      serviceType: 'Irrigation Services',
      location: [21.216200, 76.874300], // Latitude and Longitude
    },
  ];
  
  const filteredData = dummyData.filter(
    (item) =>
      (!filter.cropType || item.cropType === filter.cropType) &&
      (!filter.serviceType ||
        item.serviceTypes.some((service) => service === filter.serviceType))
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-[#eaece4] min-h-screen">
    {activeTab === 'table' && <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Providers</h1>}
    {activeTab === 'map' && <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Map</h1>}
    {activeTab === 'history' && <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Request History</h1>}
    {activeTab === 'quotation' && <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Quotation</h1>}

    <div className="flex justify-between items-center">
      {/* Filter Controls - Only shown on table view */}
      <div className="flex-1">
        {activeTab === 'table' && <FilterControls filter={filter} handleFilterChange={handleFilterChange} />}
      </div>
      
      {/* Raise Request Button - Always aligned right */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setIsEditMode(false);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none"
        >
          Raise Request
        </button>
      </div>
    </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('table')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'table'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'map'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'history'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab('quotation')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'quotation'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Quotation
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow p-4">
        {activeTab === 'table' && <ServiceTable data={filteredData} />}
        {activeTab === 'map' && <ServiceMap farms={dummyData} serviceProviders={serviceProviders} />}
        {activeTab === 'history' && (
          <div>
            {loading ? (
              <p>Loading history data...</p>
            ) : (
              <HistoryTable
                data={historyData}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </div>
        )}
        {activeTab === 'quotation' && (
          <FarmerServiceEnquiryForm
            onSubmit={(enquiryData) => {
              console.log('Enquiry submitted:', enquiryData);
              alert('Enquiry submitted successfully!');
            }}
          />
        )}
      </div>

      {/* Service Request Modal */}
      {isModalOpen && (
        <FarmerServiceRegistrationForm
          onClose={() => {
            setIsModalOpen(false);
            setIsEditMode(false);
            setEditData(null);
          }}
          onSubmit={handleFormSubmit}
          initialData={editData}
        />
      )}
    </div>
  );
};

export default FarmerDashboard;