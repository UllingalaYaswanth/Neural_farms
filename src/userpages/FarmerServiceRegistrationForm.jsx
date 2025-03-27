import React, { useState } from 'react';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://nfbackend.onrender.com/api/service/ser_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
  
      const result = await response.json();
      console.log('Form submitted successfully:', result);
  
      // Show success message
      alert(result.message); // Display success message
  
      // Optionally reset the form after submission
      setFormData({
        name: "",
        farmName: "",
        email: "",
        phone: "",
        cropType: "",
        farmArea: "",
        address: "",
        serviceTypes: [],
      });
  
      // Close the modal after successful submission
      onClose();
    } catch (error) {
      console.error('Error submitting the form:', error.message);
      alert('Failed to submit the form. Please try again.');
    }
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
                'Fertilization & Seeds Services',
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

export default FarmerServiceRegistrationForm;

// import React, { useState, useEffect } from 'react';

// const FarmerServiceRegistrationForm = ({ onClose, onSubmit, initialData }) => {
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

//   // Pre-fill the form if initialData is provided
//   useEffect(() => {
//     if (initialData) {
//       setFormData(initialData);
//     }
//   }, [initialData]);

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

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     onSubmit(formData); // Call the onSubmit function passed from the parent
//   };

//   return (
//     <div className="fixed z-40 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] overflow-y-scroll max-h-[95vh]">
//         <h2 className="text-xl font-bold mb-4">
//           {initialData ? 'Edit Request' : 'Raise Request'}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {/* Form fields (same as before) */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           {/* Add other fields similarly */}
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
//             >
//               {initialData ? 'Update' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FarmerServiceRegistrationForm;