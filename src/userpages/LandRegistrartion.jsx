// import React, { useState } from "react";

// const LandRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     contactInfo: "",
//     parcels: [{ parcelId: "", location: "", size: "", soilType: "", crops: "" }],
//   });

//   // Handle input changes for owner details
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle input changes for individual parcel fields
//   const handleParcelChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedParcels = [...formData.parcels];
//     updatedParcels[index][name] = value;
//     setFormData({ ...formData, parcels: updatedParcels });
//   };

//   // Add a new parcel field dynamically
//   const addParcel = () => {
//     setFormData({
//       ...formData,
//       parcels: [
//         ...formData.parcels,
//         { parcelId: "", location: "", size: "", soilType: "", crops: "" },
//       ],
//     });
//   };

//   // Remove a parcel field
//   const removeParcel = (index) => {
//     const updatedParcels = formData.parcels.filter((_, i) => i !== index);
//     setFormData({ ...formData, parcels: updatedParcels });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Land details submitted successfully!");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-6 text-center">Land Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Owner Details */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-4">Owner Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Owner Name</label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Contact Information</label>
//               <input
//                 type="text"
//                 name="contactInfo"
//                 value={formData.contactInfo}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Parcel Details */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-4">Land Parcel Details</h2>
//           {formData.parcels.map((parcel, index) => (
//             <div key={index} className="border p-4 mb-4 rounded-lg">
//               <h3 className="text-lg font-medium mb-4">Parcel {index + 1}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Parcel ID</label>
//                   <input
//                     type="text"
//                     name="parcelId"
//                     value={parcel.parcelId}
//                     onChange={(e) => handleParcelChange(index, e)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Location</label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={parcel.location}
//                     onChange={(e) => handleParcelChange(index, e)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Size (Acres)</label>
//                   <input
//                     type="number"
//                     name="size"
//                     value={parcel.size}
//                     onChange={(e) => handleParcelChange(index, e)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Soil Type</label>
//                   <select
//                     name="soilType"
//                     value={parcel.soilType}
//                     onChange={(e) => handleParcelChange(index, e)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     required
//                   >
//                     <option value="">Select Soil Type</option>
//                     <option value="Loamy">Loamy</option>
//                     <option value="Sandy">Sandy</option>
//                     <option value="Clay">Clay</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Crops Grown</label>
//                   <input
//                     type="text"
//                     name="crops"
//                     value={parcel.crops}
//                     onChange={(e) => handleParcelChange(index, e)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => removeParcel(index)}
//                 className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               >
//                 Remove Parcel
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addParcel}
//             className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Add Another Parcel
//           </button>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="w-full md:w-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LandRegistrationForm;

import React, { useState } from "react";

const LandRegistrationForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    contactInfo: "",
    parcels: [{ parcelId: "", location: "", size: "", soilType: "", crops: "" }],
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  // Handle input changes for owner details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle input changes for individual parcel fields
  const handleParcelChange = (index, e) => {
    const { name, value } = e.target;
    const updatedParcels = [...formData.parcels];
    updatedParcels[index][name] = value;
    setFormData({ ...formData, parcels: updatedParcels });
  };

  // Add a new parcel field dynamically
  const addParcel = () => {
    setFormData({
      ...formData,
      parcels: [
        ...formData.parcels,
        { parcelId: "", location: "", size: "", soilType: "", crops: "" },
      ],
    });
  };

  // Remove a parcel field
  const removeParcel = (index) => {
    const updatedParcels = formData.parcels.filter((_, i) => i !== index);
    setFormData({ ...formData, parcels: updatedParcels });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Land details submitted successfully!");
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Button to open modal */}
      <div className="flex justify-center mb-6">
        <button
          onClick={openModal}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Open Land Registration Form
        </button>
      </div>

      {/* Modal (form) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Land Registration Form</h1>
            <form onSubmit={handleSubmit}>
              {/* Owner Details */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Owner Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Information</label>
                    <input
                      type="text"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Parcel Details */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Land Parcel Details</h2>
                {formData.parcels.map((parcel, index) => (
                  <div key={index} className="border p-4 mb-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Parcel {index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Parcel ID</label>
                        <input
                          type="text"
                          name="parcelId"
                          value={parcel.parcelId}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={parcel.location}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Size (Acres)</label>
                        <input
                          type="number"
                          name="size"
                          value={parcel.size}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Soil Type</label>
                        <select
                          name="soilType"
                          value={parcel.soilType}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        >
                          <option value="">Select Soil Type</option>
                          <option value="Loamy">Loamy</option>
                          <option value="Sandy">Sandy</option>
                          <option value="Clay">Clay</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Crops Grown</label>
                        <input
                          type="text"
                          name="crops"
                          value={parcel.crops}
                          onChange={(e) => handleParcelChange(index, e)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeParcel(index)}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Remove Parcel
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addParcel}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Another Parcel
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* Close Modal Button */}
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandRegistrationForm;
