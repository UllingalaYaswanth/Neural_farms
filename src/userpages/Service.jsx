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
          style={{ height: '700px', width: '100%',padding:'100px' }}
          className='fixed z-0 top-56 inset-0 flex p-5 justify-center items-center'
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