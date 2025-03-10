// import React, { useState } from 'react';

// const FarmerServiceRegistrationForm = () => {
//   // State to handle form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     phone: '',
//     cropType: '',
//     farmArea: '',
//     address: '',
//     serviceTypes: [],
//   });

//   // Handle checkbox change
//   const handleServiceChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => {
//       const newServices = prevData.serviceTypes.includes(value)
//         ? prevData.serviceTypes.filter((service) => service !== value)
//         : [...prevData.serviceTypes, value];
//       return { ...prevData, serviceTypes: newServices };
//     });
//   };

//   // Handle input change for text fields
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // You can send the form data to your API or handle accordingly
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
//         Farmer Service Registration
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//             />
//           </div>

//           {/* Crop Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Crop Type</label>
//             <input
//               type="text"
//               name="cropType"
//               value={formData.cropType}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//               placeholder="E.g., Wheat, Corn, Rice"
//             />
//           </div>

//           {/* Farm Area */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Farm Area (in acres)</label>
//             <input
//               type="number"
//               name="farmArea"
//               value={formData.farmArea}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//               placeholder="E.g., 50 acres"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Farm Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md mt-1"
//               placeholder="Enter farm's full address"
//             />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Select Services</label>
//             <div className="space-y-2 mt-2">
//               {[
//                 "Soil Testing",
//                 "Drone Service",
//                 "Irrigation Services",
//                 "Pest and Disease Monitoring",
//                 "Fertilization Services",
//                 "Harvest Planning & Equipment Rental",
//                 "Crop Health Monitoring",
//                 "Weed Control",
//                 "Crop Rotation Planning",
//                 "Harvest Storage & Handling",
//                 "Market Access & Sales Support",
//                 "Precision Agriculture",
//                 "Climate and Weather Advisory",
//                 "Post-Harvest Processing"
//               ].map((service) => (
//                 <div key={service} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     value={service}
//                     checked={formData.serviceTypes.includes(service)}
//                     onChange={handleServiceChange}
//                     className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                   />
//                   <label className="ml-2 text-sm text-gray-700">{service}</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FarmerServiceRegistrationForm;


// import React, { useState } from 'react';

// // Dummy data for the table
// const dummyData = [
//   {
//     name: 'John Doe',
//     farmName: 'Doe Farm',
//     email: 'john@example.com',
//     phone: '123-456-7890',
//     cropType: 'Wheat',
//     farmArea: '100',
//     address: '123 Farm Road, City, Country',
//     serviceTypes: ['Soil Testing', 'Irrigation Services']
//   },
//   {
//     name: 'Jane Smith',
//     farmName: 'Smith Farms',
//     email: 'jane@example.com',
//     phone: '987-654-3210',
//     cropType: 'Corn',
//     farmArea: '50',
//     address: '456 Farm Lane, City, Country',
//     serviceTypes: ['Pest and Disease Monitoring', 'Fertilization Services']
//   },
//   // Add more data as needed
// ];

// const FarmerServiceRegistrationForm = ({ onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     phone: '',
//     cropType: '',
//     farmArea: '',
//     address: '',
//     serviceTypes: [],
//   });

//   const handleServiceChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => {
//       const newServices = prevData.serviceTypes.includes(value)
//         ? prevData.serviceTypes.filter((service) => service !== value)
//         : [...prevData.serviceTypes, value];
//       return { ...prevData, serviceTypes: newServices };
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(formData); // Handle form submission
//     onClose(); // Close the form modal after submitting
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
//           Farmer Service Registration
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Your Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-md mt-1"
//               />
//             </div>
//             {/* Add other fields similarly */}
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 font-bold">
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// const FarmerTableWithFilters = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [filteredData, setFilteredData] = useState(dummyData);
//   const [filter, setFilter] = useState('');

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filterData = () => {
//     const filtered = dummyData.filter((data) => {
//       return (
//         data.name.toLowerCase().includes(filter.toLowerCase()) ||
//         data.farmName.toLowerCase().includes(filter.toLowerCase()) ||
//         data.email.toLowerCase().includes(filter.toLowerCase()) ||
//         data.phone.includes(filter) ||
//         data.cropType.toLowerCase().includes(filter.toLowerCase()) ||
//         data.address.toLowerCase().includes(filter.toLowerCase()) ||
//         data.serviceTypes.some((service) =>
//           service.toLowerCase().includes(filter.toLowerCase())
//         )
//       );
//     });
//     setFilteredData(filtered);
//   };

//   const handleOpenForm = () => {
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   const handleFormSubmit = (formData) => {
//     // Handle form submission, possibly adding it to the data table
//     console.log(formData);
//   };

//   return (
//     <div className="p-6">
//       {/* Filter Input - All fields filter */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={filter}
//           onChange={handleFilterChange}
//           placeholder="Filter by any field (e.g., Name, Farm, Email, etc.)"
//           className="p-2 border border-gray-300 rounded-md w-full mb-4"
//         />
//         <button
//           onClick={filterData}
//           className="py-2 px-4 bg-blue-600 text-white rounded-md"
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Table */}
//       <div className="relative">
//         <button
//           onClick={handleOpenForm}
//           className="absolute top-0 right-0 py-2 px-4 bg-green-600 text-white rounded-md"
//         >
//           Raise Request
//         </button>
//         <table className="w-full table-auto border-collapse mt-8">
//           <thead>
//             <tr>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Farm Name</th>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">Phone</th>
//               <th className="border p-2">Crop Type</th>
//               <th className="border p-2">Farm Area</th>
//               <th className="border p-2">Address</th>
//               <th className="border p-2">Services</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((data, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{data.name}</td>
//                 <td className="border p-2">{data.farmName}</td>
//                 <td className="border p-2">{data.email}</td>
//                 <td className="border p-2">{data.phone}</td>
//                 <td className="border p-2">{data.cropType}</td>
//                 <td className="border p-2">{data.farmArea}</td>
//                 <td className="border p-2">{data.address}</td>
//                 <td className="border p-2">{data.serviceTypes.join(', ')}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showForm && <FarmerServiceRegistrationForm onClose={handleCloseForm} onSubmit={handleFormSubmit} />}
//     </div>
//   );
// };

// export default FarmerTableWithFilters;


// import React, { useState } from 'react';

// const FarmerServiceRegistrationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     phone: '',
//     cropType: '',
//     farmArea: '',
//     address: '',
//     serviceTypes: [],
//   });

//   const handleServiceChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => {
//       const newServices = prevData.serviceTypes.includes(value)
//         ? prevData.serviceTypes.filter((service) => service !== value)
//         : [...prevData.serviceTypes, value];
//       return { ...prevData, serviceTypes: newServices };
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     onClose(); // Close the modal after submission
//   };

//   return (
//     <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl overflow-y-scroll max-h-[95vh]">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
//           Farmer Service Registration
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {/* Form Fields */}
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="Phone Number"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               name="cropType"
//               value={formData.cropType}
//               onChange={handleInputChange}
//               placeholder="Crop Type"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="number"
//               name="farmArea"
//               value={formData.farmArea}
//               onChange={handleInputChange}
//               placeholder="Farm Area (in acres)"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               placeholder="Farm Address"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Services</label>
//               <div className="space-y-2 mt-2">
//                 {[
//                   "Soil Testing",
//                   "Drone Service",
//                   "Irrigation Services",
//                   "Pest and Disease Monitoring",
//                   "Fertilization Services",
//                   "Harvest Planning & Equipment Rental",
//                   "Crop Health Monitoring",
//                   "Weed Control",
//                   "Crop Rotation Planning",
//                   "Harvest Storage & Handling",
//                   "Market Access & Sales Support",
//                   "Precision Agriculture",
//                   "Climate and Weather Advisory",
//                   "Post-Harvest Processing",
//                 ].map((service) => (
//                   <div key={service} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       value={service}
//                       checked={formData.serviceTypes.includes(service)}
//                       onChange={handleServiceChange}
//                       className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                     />
//                     <label className="ml-2 text-sm text-gray-700">{service}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const FarmerDashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filter, setFilter] = useState({ cropType: '', serviceType: '' });

//   const dummyData = [
//     {
//       id: 1,
//       name: 'John Doe',
//       farmName: 'Green Acres',
//       email: 'john@example.com',
//       phone: '1234567890',
//       cropType: 'Wheat',
//       farmArea: '50',
//       address: '123 Farm Lane',
//       serviceTypes: ['Soil Testing', 'Drone Service'],
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       farmName: 'Golden Fields',
//       email: 'jane@example.com',
//       phone: '9876543210',
//       cropType: 'Corn',
//       farmArea: '100',
//       address: '456 Harvest Road',
//       serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
//     },
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       farmName: 'Sunrise Farms',
//       email: 'alice@example.com',
//       phone: '5555555555',
//       cropType: 'Rice',
//       farmArea: '75',
//       address: '789 Rice Field',
//       serviceTypes: ['Crop Health Monitoring', 'Weed Control'],
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
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//         >
//           Raise Request
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-6">
//         <select
//           name="cropType"
//           value={filter.cropType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Crop Types</option>
//           <option value="Wheat">Wheat</option>
//           <option value="Corn">Corn</option>
//           <option value="Rice">Rice</option>
//         </select>
//         <select
//           name="serviceType"
//           value={filter.serviceType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Service Types</option>
//           <option value="Soil Testing">Soil Testing</option>
//           <option value="Drone Service">Drone Service</option>
//           <option value="Irrigation Services">Irrigation Services</option>
//           <option value="Pest and Disease Monitoring">Pest and Disease Monitoring</option>
//         </select>
//       </div>

//       {/* Table */}
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-3 text-left text-gray-700">Name</th>
//             <th className="p-3 text-left text-gray-700">Farm Name</th>
//             <th className="p-3 text-left text-gray-700">Crop Type</th>
//             <th className="p-3 text-left text-gray-700">Farm Area</th>
//             <th className="p-3 text-left text-gray-700">Services</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id} className="border-b">
//               <td className="p-3">{item.name}</td>
//               <td className="p-3">{item.farmName}</td>
//               <td className="p-3">{item.cropType}</td>
//               <td className="p-3">{item.farmArea} acres</td>
//               <td className="p-3">{item.serviceTypes.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal */}
//       {isModalOpen && (
//         <FarmerServiceRegistrationForm onClose={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// const FarmerServiceRegistrationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     phone: '',
//     cropType: '',
//     farmArea: '',
//     address: '',
//     serviceTypes: [],
//   });

//   const handleServiceChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => {
//       const newServices = prevData.serviceTypes.includes(value)
//         ? prevData.serviceTypes.filter((service) => service !== value)
//         : [...prevData.serviceTypes, value];
//       return { ...prevData, serviceTypes: newServices };
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     onClose(); // Close the modal after submission
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
//           Farmer Service Registration
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {/* Form Fields */}
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="Phone Number"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               name="cropType"
//               value={formData.cropType}
//               onChange={handleInputChange}
//               placeholder="Crop Type"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="number"
//               name="farmArea"
//               value={formData.farmArea}
//               onChange={handleInputChange}
//               placeholder="Farm Area (in acres)"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               placeholder="Farm Address"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Services</label>
//               <div className="space-y-2 mt-2">
//                 {[
//                   "Soil Testing",
//                   "Drone Service",
//                   "Irrigation Services",
//                   "Pest and Disease Monitoring",
//                   "Fertilization Services",
//                   "Harvest Planning & Equipment Rental",
//                   "Crop Health Monitoring",
//                   "Weed Control",
//                   "Crop Rotation Planning",
//                   "Harvest Storage & Handling",
//                   "Market Access & Sales Support",
//                   "Precision Agriculture",
//                   "Climate and Weather Advisory",
//                   "Post-Harvest Processing",
//                 ].map((service) => (
//                   <div key={service} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       value={service}
//                       checked={formData.serviceTypes.includes(service)}
//                       onChange={handleServiceChange}
//                       className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                     />
//                     <label className="ml-2 text-sm text-gray-700">{service}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const FarmerDashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filter, setFilter] = useState({ cropType: '', serviceType: '' });
//   const [viewMode, setViewMode] = useState('table'); // 'table' or 'map'

//   const dummyData = [
//     {
//       id: 1,
//       name: 'John Doe',
//       farmName: 'Green Acres',
//       email: 'john@example.com',
//       phone: '1234567890',
//       cropType: 'Wheat',
//       farmArea: '50',
//       address: '123 Farm Lane',
//       serviceTypes: ['Soil Testing', 'Drone Service'],
//       lat: 40.7128,
//       lng: -74.006,
//       type: 'farmer',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       farmName: 'Golden Fields',
//       email: 'jane@example.com',
//       phone: '9876543210',
//       cropType: 'Corn',
//       farmArea: '100',
//       address: '456 Harvest Road',
//       serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
//       lat: 34.0522,
//       lng: -118.2437,
//       type: 'farmer',
//     },
//     {
//       id: 3,
//       name: 'AgriTech Solutions',
//       farmName: '',
//       email: 'agritech@example.com',
//       phone: '5555555555',
//       cropType: '',
//       farmArea: '',
//       address: '789 Tech Park',
//       serviceTypes: ['Drone Service', 'Crop Health Monitoring'],
//       lat: 37.7749,
//       lng: -122.4194,
//       type: 'serviceProvider',
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

//   // Define custom icons for farmers and service providers
//   const farmerIcon = new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149067.png', // Farmer icon
//     iconSize: [38, 38],
//     iconAnchor: [19, 38],
//   });

//   const serviceProviderIcon = new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', // Service provider icon
//     iconSize: [38, 38],
//     iconAnchor: [19, 38],
//   });

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h1>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setViewMode('table')}
//             className={`px-4 py-2 ${
//               viewMode === 'table'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-300 text-gray-700'
//             } font-semibold rounded-md hover:bg-indigo-700 focus:outline-none`}
//           >
//             Table View
//           </button>
//           <button
//             onClick={() => setViewMode('map')}
//             className={`px-4 py-2 ${
//               viewMode === 'map'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-300 text-gray-700'
//             } font-semibold rounded-md hover:bg-indigo-700 focus:outline-none`}
//           >
//             Map View
//           </button>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//           >
//             Raise Request
//           </button>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-6">
//         <select
//           name="cropType"
//           value={filter.cropType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Crop Types</option>
//           <option value="Wheat">Wheat</option>
//           <option value="Corn">Corn</option>
//           <option value="Rice">Rice</option>
//         </select>
//         <select
//           name="serviceType"
//           value={filter.serviceType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Service Types</option>
//           <option value="Soil Testing">Soil Testing</option>
//           <option value="Drone Service">Drone Service</option>
//           <option value="Irrigation Services">Irrigation Services</option>
//           <option value="Pest and Disease Monitoring">Pest and Disease Monitoring</option>
//         </select>
//       </div>

//       {/* Conditional Rendering: Table or Map */}
//       {viewMode === 'table' ? (
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-3 text-left text-gray-700">Name</th>
//               <th className="p-3 text-left text-gray-700">Farm Name</th>
//               <th className="p-3 text-left text-gray-700">Crop Type</th>
//               <th className="p-3 text-left text-gray-700">Farm Area</th>
//               <th className="p-3 text-left text-gray-700">Services</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item) => (
//               <tr key={item.id} className="border-b">
//                 <td className="p-3">{item.name}</td>
//                 <td className="p-3">{item.farmName}</td>
//                 <td className="p-3">{item.cropType}</td>
//                 <td className="p-3">{item.farmArea} acres</td>
//                 <td className="p-3">{item.serviceTypes.join(', ')}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <MapContainer
//           center={[39.8283, -98.5795]} // Center of the USA
//           zoom={4}
//           style={{ height: '500px', width: '100%' }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           {filteredData.map((item) => (
//             <Marker
//               key={item.id}
//               position={[item.lat, item.lng]}
//               icon={item.type === 'farmer' ? farmerIcon : serviceProviderIcon}
//             >
//               <Popup>
//                 <div>
//                   <h3 className="font-bold">{item.name}</h3>
//                   <p>{item.type === 'farmer' ? `Farmer | Crop: ${item.cropType}` : 'Service Provider'}</p>
//                   <p>{item.address}</p>
//                   {item.type === 'serviceProvider' && (
//                     <p><strong>Services:</strong> {item.serviceTypes.join(', ')}</p>
//                   )}
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}

//       {/* Modal */}
//       {isModalOpen && (
//         <FarmerServiceRegistrationForm onClose={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for default marker icons in Leaflet
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// const FarmerServiceRegistrationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     phone: '',
//     cropType: '',
//     farmArea: '',
//     address: '',
//     serviceTypes: [],
//   });

//   const handleServiceChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => {
//       const newServices = prevData.serviceTypes.includes(value)
//         ? prevData.serviceTypes.filter((service) => service !== value)
//         : [...prevData.serviceTypes, value];
//       return { ...prevData, serviceTypes: newServices };
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     onClose(); // Close the modal after submission
//   };

//   return (
//     <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl overflow-y-scroll max-h-[95vh]">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
//           Farmer Service Registration
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {/* Form Fields */}
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="Phone Number"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               name="cropType"
//               value={formData.cropType}
//               onChange={handleInputChange}
//               placeholder="Crop Type"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="number"
//               name="farmArea"
//               value={formData.farmArea}
//               onChange={handleInputChange}
//               placeholder="Farm Area (in acres)"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               placeholder="Farm Address"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Services</label>
//               <div className="space-y-2 mt-2">
//                 {[
//                   "Soil Testing",
//                   "Drone Service",
//                   "Irrigation Services",
//                   "Pest and Disease Monitoring",
//                   "Fertilization Services",
//                   "Harvest Planning & Equipment Rental",
//                   "Crop Health Monitoring",
//                   "Weed Control",
//                   "Crop Rotation Planning",
//                   "Harvest Storage & Handling",
//                   "Market Access & Sales Support",
//                   "Precision Agriculture",
//                   "Climate and Weather Advisory",
//                   "Post-Harvest Processing",
//                 ].map((service) => (
//                   <div key={service} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       value={service}
//                       checked={formData.serviceTypes.includes(service)}
//                       onChange={handleServiceChange}
//                       className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                     />
//                     <label className="ml-2 text-sm text-gray-700">{service}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const FarmerDashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filter, setFilter] = useState({ cropType: '', serviceType: '' });

//   const dummyData = [
//     {
//       id: 1,
//       name: 'John Doe',
//       farmName: 'Green Acres',
//       email: 'john@example.com',
//       phone: '1234567890',
//       cropType: 'Wheat',
//       farmArea: '50',
//       address: '123 Farm Lane',
//       serviceTypes: ['Soil Testing', 'Drone Service'],
//       location: [51.505, -0.09], // Latitude and Longitude
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       farmName: 'Golden Fields',
//       email: 'jane@example.com',
//       phone: '9876543210',
//       cropType: 'Corn',
//       farmArea: '100',
//       address: '456 Harvest Road',
//       serviceTypes: ['Irrigation Services', 'Pest and Disease Monitoring'],
//       location: [51.51, -0.1], // Latitude and Longitude
//     },
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       farmName: 'Sunrise Farms',
//       email: 'alice@example.com',
//       phone: '5555555555',
//       cropType: 'Rice',
//       farmArea: '75',
//       address: '789 Rice Field',
//       serviceTypes: ['Crop Health Monitoring', 'Weed Control'],
//       location: [51.49, -0.08], // Latitude and Longitude
//     },
//   ];

//   const serviceProviders = [
//     {
//       id: 1,
//       name: 'AgriTech Solutions',
//       serviceType: 'Soil Testing',
//       location: [51.505, -0.08], // Latitude and Longitude
//     },
//     {
//       id: 2,
//       name: 'Drone Masters',
//       serviceType: 'Drone Service',
//       location: [51.51, -0.09], // Latitude and Longitude
//     },
//     {
//       id: 3,
//       name: 'Irrigation Pros',
//       serviceType: 'Irrigation Services',
//       location: [51.49, -0.1], // Latitude and Longitude
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
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
//         >
//           Raise Request
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-6">
//         <select
//           name="cropType"
//           value={filter.cropType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Crop Types</option>
//           <option value="Wheat">Wheat</option>
//           <option value="Corn">Corn</option>
//           <option value="Rice">Rice</option>
//         </select>
//         <select
//           name="serviceType"
//           value={filter.serviceType}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All Service Types</option>
//           <option value="Soil Testing">Soil Testing</option>
//           <option value="Drone Service">Drone Service</option>
//           <option value="Irrigation Services">Irrigation Services</option>
//           <option value="Pest and Disease Monitoring">Pest and Disease Monitoring</option>
//         </select>
//       </div>

//       {/* Table */}
//       <table className="w-full border-collapse mb-6">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-3 text-left text-gray-700">Name</th>
//             <th className="p-3 text-left text-gray-700">Farm Name</th>
//             <th className="p-3 text-left text-gray-700">Crop Type</th>
//             <th className="p-3 text-left text-gray-700">Farm Area</th>
//             <th className="p-3 text-left text-gray-700">Services</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id} className="border-b">
//               <td className="p-3">{item.name}</td>
//               <td className="p-3">{item.farmName}</td>
//               <td className="p-3">{item.cropType}</td>
//               <td className="p-3">{item.farmArea} acres</td>
//               <td className="p-3">{item.serviceTypes.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Map */}
//       <div className="h-[500px] w-full mb-6">
//         <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           {/* Farm Markers */}
//           {dummyData.map((farm) => (
//             <Marker key={farm.id} position={farm.location}>
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{farm.farmName}</h3>
//                   <p>Crop Type: {farm.cropType}</p>
//                   <p>Services: {farm.serviceTypes.join(', ')}</p>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//           {/* Service Provider Markers */}
//           {serviceProviders.map((provider) => (
//             <Marker key={provider.id} position={provider.location}>
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{provider.name}</h3>
//                   <p>Service: {provider.serviceType}</p>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <FarmerServiceRegistrationForm onClose={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FarmerServiceRegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    email: '',
    phone: '',
    cropType: '',
    farmArea: '',
    address: '',
    serviceTypes: [],
  });

  const handleServiceChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => {
      const newServices = prevData.serviceTypes.includes(value)
        ? prevData.serviceTypes.filter((service) => service !== value)
        : [...prevData.serviceTypes, value];
      return { ...prevData, serviceTypes: newServices };
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed z-40 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] overflow-y-scroll max-h-[95vh]">
        <h2 className="text-xl font-bold mb-4">Raise Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Farm Name</label>
            <input
              type="text"
              name="farmName"
              value={formData.farmName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Crop Type</label>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Farm Area (acres)</label>
            <input
              type="number"
              name="farmArea"
              value={formData.farmArea}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Services</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {[
                'Soil Testing',
                'Drone Service',
                'Irrigation Services',
                'Pest and Disease Monitoring',
                'Fertilization Services',
                'Harvest Planning & Equipment Rental',
                'Crop Health Monitoring',
                'Weed Control',
                'Crop Rotation Planning',
                'Harvest Storage & Handling',
                'Market Access & Sales Support',
                'Precision Agriculture',
                'Climate and Weather Advisory',
                'Post-Harvest Processing',
              ].map((service) => (
                <label key={service} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.serviceTypes.includes(service)}
                    onChange={handleServiceChange}
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FarmerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState({ cropType: '', serviceType: '' });
  const [view, setView] = useState('table'); // 'table' or 'map'

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
      id: 11,
      name: 'Sai kumar',
      farmName: 'Green Acres',
      email: 'sai@example.com',
      phone: '9321567890',
      cropType: 'Wheat',
      farmArea: '50',
      address: '123 Farm Lane',
      serviceTypes: ['Soil Testing', 'Drone Service'],
      location: [21.212000, 76.874000], // Latitude and Longitude
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
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-6 text-center text-green-700">Service Request</h1>

      {/* View Toggle Buttons */}
  
<div className='flex justify-between items-center mb-4'>
      {/* Filters */}
      <div className="mb-4 flex space-x-4">
        {/* <select
          name="cropType"
          value={filter.cropType}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-md"
        >
          <option value="">All Crop Types</option>
          <option value="Wheat">Wheat</option>
          <option value="Corn">Corn</option>
          <option value="Rice">Rice</option>
        </select> */}
        <select
          name="serviceType"
          value={filter.serviceType}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-md"
        >
          <option value="">All Service Types</option>
          <option value="Soil Testing">Soil Testing</option>
          <option value="Drone Service">Drone Service</option>
          <option value="Irrigation Services">Irrigation Services</option>
          <option value="Pest and Disease Monitoring">Pest and Disease Monitoring</option>
        </select>
      </div>
    <div className='flex space-x-5'>
      <div className="mb-4">
        <button
          onClick={() => setView('table')}
          className={`px-4 py-2 rounded-md mr-2 ${
            view === 'table'
              ? 'bg-green-600 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
        >
          Table View
        </button>
        <button
          onClick={() => setView('map')}
          className={`px-4 py-2 rounded-md ${
            view === 'map'
              ? 'bg-green-600 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
        >
          Map View
        </button>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none mb-4"
      >
        Raise Request
      </button>
      </div>
      </div>
      {/* Table View */}
      {view === 'table' && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Services</th>
              <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
              <th className="border border-gray-300 px-4 py-2">Email Id</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.serviceTypes.join(', ')}</td>
                <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{item.email} acres</td>
                <td className="border border-gray-300 px-4 py-2">{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Map View */}
      {view === 'map' && (
        <MapContainer
          center={[21.216200, 76.874300]}
          zoom={16}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Farm Markers */}
          {dummyData.map((farm) => (
            <Marker key={farm.id} position={farm.location}>
              <Popup>
                <strong>{farm.farmName}</strong>
                <br />
                Crop Type: {farm.cropType}
                <br />
                Services: {farm.serviceTypes.join(', ')}
              </Popup>
            </Marker>
          ))}
          {/* Service Provider Markers */}
          {serviceProviders.map((provider) => (
            <Marker key={provider.id} position={provider.location}>
              <Popup>
                <strong>{provider.name}</strong>
                <br />
                Service: {provider.serviceType}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      {/* Modal */}
      {isModalOpen && <FarmerServiceRegistrationForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default FarmerDashboard;