// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [response, setResponse] = useState("");
//   const [prompt, setPrompt] = useState("");

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle submit and send data to backend
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", uploadedImage);
//     formData.append("prompt", prompt);

//     const endpoint = "your-model-endpoint-url"; // Replace with your actual endpoint

//     try {
//       setResponse("Processing...");
//       const response = await fetch(endpoint, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       if (data.success) {
//         setResponse(`Detection Result: ${data.result}`);
//         addToHistory(data.result);
//       } else {
//         setResponse("No pests detected.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse("An error occurred while processing.");
//     }
//   };

//   // Add result to history
//   const addToHistory = (result) => {
//     const timestamp = new Date().toLocaleString();
//     setHistory((prevHistory) => [
//       ...prevHistory,
//       { timestamp, result },
//     ]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <p>{response}</p>
//             </div>
//           )}
//         </section>

//         {/* History Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl mb-4">Previous Detection Results</h3>
//           {history.length > 0 ? (
//             <ul>
//               {history.map((item, index) => (
//                 <li key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
//                   <p className="font-medium">{item.timestamp}</p>
//                   <p>{item.result}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No history available.</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [response, setResponse] = useState("");
//   const [responseImage, setResponseImage] = useState(null); // To hold the result image
//   const [prompt, setPrompt] = useState("");

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle submit and send data to backend
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", uploadedImage);
//     formData.append("prompt", prompt);

//     const endpoint = "your-model-endpoint-url"; // Replace with your actual endpoint

//     try {
//       setResponse("Processing...");
//       const response = await fetch(endpoint, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       if (data.success) {
//         setResponse(data.result.description); // Set description text from the model
//         setResponseImage(data.result.imageUrl); // Assuming the backend returns the URL of the result image
//         addToHistory(data.result.description, data.result.imageUrl);
//       } else {
//         setResponse("No pests detected.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse("An error occurred while processing.");
//     }
//   };

//   // Add result to history
//   const addToHistory = (description, imageUrl) => {
//     const timestamp = new Date().toLocaleString();
//     setHistory((prevHistory) => [
//       ...prevHistory,
//       { timestamp, description, imageUrl },
//     ]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <p className="font-medium">{response}</p>
//               {responseImage && (
//                 <div className="mt-4 grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="font-medium">Detected Issue:</p>
//                     <p>{response}</p>
//                   </div>
//                   <div>
//                     <img
//                       src={responseImage}
//                       alt="Detection Result"
//                       className="w-full h-auto rounded-lg"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* History Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl mb-4">Previous Detection Results</h3>
//           {history.length > 0 ? (
//             <ul>
//               {history.map((item, index) => (
//                 <li key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
//                   <p className="font-medium">{item.timestamp}</p>
//                   <p>{item.description}</p>
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       alt="History Image"
//                       className="mt-4 w-full h-auto rounded-lg"
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No history available.</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [response, setResponse] = useState("");
//   const [responseImage, setResponseImage] = useState(null); // To hold the result image
//   const [prompt, setPrompt] = useState("");

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle submit and simulate response
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     // Simulate a dummy backend response
//     setResponse("Processing...");
    
//     // Simulate network delay and response
//     setTimeout(() => {
//       const dummyResponse = {
//         success: true,
//         result: {
//           description: "Pest detected: Aphids on leaf.",
//           imageUrl: "https://via.placeholder.com/500x300?text=Detection+Result",
//         },
//       };

//       if (dummyResponse.success) {
//         setResponse(dummyResponse.result.description); // Set description text from the model
//         setResponseImage(dummyResponse.result.imageUrl); // Use the dummy image URL
//         addToHistory(dummyResponse.result.description, dummyResponse.result.imageUrl);
//       } else {
//         setResponse("No pests detected.");
//       }
//     }, 2000); // Simulating network delay
//   };

//   // Add result to history
//   const addToHistory = (description, imageUrl) => {
//     const timestamp = new Date().toLocaleString();
//     setHistory((prevHistory) => [
//       ...prevHistory,
//       { timestamp, description, imageUrl },
//     ]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <p className="font-medium">{response}</p>
//               {responseImage && (
//                 <div className="mt-4 grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="font-medium">Detected Issue:</p>
//                     <p>{response}</p>
//                   </div>
//                   <div>
//                     <img
//                       src={responseImage}
//                       alt="Detection Result"
//                       className="w-full h-auto rounded-lg"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* History Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl mb-4">Previous Detection Results</h3>
//           {history.length > 0 ? (
//             <ul>
//               {history.map((item, index) => (
//                 <li key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
//                   <p className="font-medium">{item.timestamp}</p>
//                   <p>{item.description}</p>
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       alt="History Image"
//                       className="mt-4 w-full h-auto rounded-lg"
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No history available.</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [response, setResponse] = useState("");
//   const [responseImage, setResponseImage] = useState(null); // To hold the result image
//   const [prompt, setPrompt] = useState("");

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle submit and simulate response
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     // Simulate a dummy backend response
//     setResponse("Processing...");
    
//     // Simulate network delay and response
//     setTimeout(() => {
//       const dummyResponse = {
//         success: true,
//         result: {
//           description: "Pest detected: Aphids on leaf.",
//           imageUrl: "https://via.placeholder.com/500x300?text=Detection+Result",
//         },
//       };

//       if (dummyResponse.success) {
//         setResponse(dummyResponse.result.description); // Set description text from the model
//         setResponseImage(dummyResponse.result.imageUrl); // Use the dummy image URL
//       } else {
//         setResponse("No pests detected.");
//       }
//     }, 2000); // Simulating network delay
//   };

//   // Service providers related to pest detection
//   const serviceProviders = [
//     {
//       name: "John's Pest Control",
//       mobile: "(123) 456-7890",
//       service: "Pest Management",
//       location: "New York, NY",
//       email: "john@pestcontrol.com",
//     },
//     {
//       name: "Green Leaf Solutions",
//       mobile: "(987) 654-3210",
//       service: "Eco-friendly Pest Control",
//       location: "Los Angeles, CA",
//       email: "contact@greenleaf.com",
//     },
//     {
//       name: "SafeCrop Services",
//       mobile: "(555) 123-4567",
//       service: "Organic Pest Control",
//       location: "Chicago, IL",
//       email: "info@safecrop.com",
//     },
//     {
//       name: "Pro Pest Experts",
//       mobile: "(333) 888-0000",
//       service: "Insect and Rodent Control",
//       location: "Dallas, TX",
//       email: "support@propest.com",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <p className="font-medium">{response}</p>
//               {responseImage && (
//                 <div className="mt-4">
//                   <img
//                     src={responseImage}
//                     alt="Detection Result"
//                     className="w-full h-auto rounded-lg"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* Service Providers Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl mb-4">Service Providers for Pest Control</h3>
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Name</th>
//                 <th className="py-2 px-4 border-b text-left">Mobile</th>
//                 <th className="py-2 px-4 border-b text-left">Service Provided</th>
//                 <th className="py-2 px-4 border-b text-left">Location</th>
//                 <th className="py-2 px-4 border-b text-left">Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {serviceProviders.map((provider, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 border-b">{provider.name}</td>
//                   <td className="py-2 px-4 border-b">{provider.mobile}</td>
//                   <td className="py-2 px-4 border-b">{provider.service}</td>
//                   <td className="py-2 px-4 border-b">{provider.location}</td>
//                   <td className="py-2 px-4 border-b">{provider.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [response, setResponse] = useState("");
//   const [responseImage, setResponseImage] = useState(null); // To hold the result image
//   const [prompt, setPrompt] = useState("");
//   const [serviceProviders, setServiceProviders] = useState([]); // To hold the filtered service providers

//   // Hardcoded service provider data
//   const allServiceProviders = [
//     {
//       name: "John's Pest Control",
//       mobile: "(123) 456-7890",
//       service: "Pest Management",
//       location: "New York, NY",
//       email: "john@pestcontrol.com",
//       pests: ["Aphids", "Caterpillars", "Termites"], // Related pests
//     },
//     {
//       name: "Green Leaf Solutions",
//       mobile: "(987) 654-3210",
//       service: "Eco-friendly Pest Control",
//       location: "Los Angeles, CA",
//       email: "contact@greenleaf.com",
//       pests: ["Aphids", "Spider Mites"],
//     },
//     {
//       name: "SafeCrop Services",
//       mobile: "(555) 123-4567",
//       service: "Organic Pest Control",
//       location: "Chicago, IL",
//       email: "info@safecrop.com",
//       pests: ["Moths", "Aphids", "Leafhoppers"],
//     },
//     {
//       name: "Pro Pest Experts",
//       mobile: "(333) 888-0000",
//       service: "Insect and Rodent Control",
//       location: "Dallas, TX",
//       email: "support@propest.com",
//       pests: ["Rodents", "Aphids", "Termites"],
//     },
//   ];

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Simulate pest detection and suggest service providers based on the detected pest
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     // Simulate a dummy backend response
//     setResponse("Processing...");
    
//     // Simulate network delay and response
//     setTimeout(() => {
//       const dummyResponse = {
//         success: true,
//         result: {
//           description: "Pest detected: Aphids on leaf.",
//           imageUrl: "https://via.placeholder.com/500x300?text=Detection+Result",
//           detectedPest: "Aphids", // Detected pest
//         },
//       };

//       if (dummyResponse.success) {
//         setResponse(dummyResponse.result.description); // Set description text from the model
//         setResponseImage(dummyResponse.result.imageUrl); // Use the dummy image URL

//         // Filter service providers based on detected pest
//         const filteredProviders = allServiceProviders.filter((provider) =>
//           provider.pests.includes(dummyResponse.result.detectedPest)
//         );
//         setServiceProviders(filteredProviders);
//       } else {
//         setResponse("No pests detected.");
//       }
//     }, 2000); // Simulating network delay
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <p className="font-medium">{response}</p>
//               {responseImage && (
//                 <div className="mt-4">
//                   <img
//                     src={responseImage}
//                     alt="Detection Result"
//                     className="w-full h-auto rounded-lg"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* Service Providers Section */}
//         {serviceProviders.length > 0 && (
//           <section className="bg-white p-6 rounded-lg shadow-md mt-8">
//             <h3 className="text-2xl mb-4">Service Providers for {response.split(":")[1]}</h3>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b text-left">Name</th>
//                   <th className="py-2 px-4 border-b text-left">Mobile</th>
//                   <th className="py-2 px-4 border-b text-left">Service Provided</th>
//                   <th className="py-2 px-4 border-b text-left">Location</th>
//                   <th className="py-2 px-4 border-b text-left">Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {serviceProviders.map((provider, index) => (
//                   <tr key={index}>
//                     <td className="py-2 px-4 border-b">{provider.name}</td>
//                     <td className="py-2 px-4 border-b">{provider.mobile}</td>
//                     <td className="py-2 px-4 border-b">{provider.service}</td>
//                     <td className="py-2 px-4 border-b">{provider.location}</td>
//                     <td className="py-2 px-4 border-b">{provider.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [response, setResponse] = useState("");
//   const [responseImage, setResponseImage] = useState(null); // To hold the result image
//   const [prompt, setPrompt] = useState("");
//   const [serviceProviders, setServiceProviders] = useState([]); // To hold the filtered service providers

//   // Hardcoded service provider data
//   const allServiceProviders = [
//     {
//       name: "Maharashtra Pest Control",
//       mobile: "+91 98765 43210", // Indian mobile number
//       service: "Pest Management",
//       location: "Mumbai, Maharashtra",
//       email: "contact@maharashtrapestcontrol.com",
//       pests: ["Aphids", "Caterpillars", "Termites"], // Related pests
//       apNumber: "022", // Example Area Code (Mumbai)
//     },
//     {
//       name: "EcoGreen Solutions",
//       mobile: "+91 87654 32109", // Indian mobile number
//       service: "Eco-friendly Pest Control",
//       location: "Pune, Maharashtra",
//       email: "support@ecogreensolutions.com",
//       pests: ["Aphids", "Spider Mites"],
//       apNumber: "020", // Example Area Code (Pune)
//     },
//     {
//       name: "GreenSafe Pest Services",
//       mobile: "+91 76543 21098", // Indian mobile number
//       service: "Organic Pest Control",
//       location: "Nashik, Maharashtra",
//       email: "info@greensafepest.com",
//       pests: ["Moths", "Aphids", "Leafhoppers"],
//       apNumber: "0253", // Example Area Code (Nashik)
//     },
//     {
//       name: "SafeGuard Pest Control",
//       mobile: "+91 65432 10987", // Indian mobile number
//       service: "Insect and Rodent Control",
//       location: "Nagpur, Maharashtra",
//       email: "support@safeguardpest.com",
//       pests: ["Rodents", "Aphids", "Termites"],
//       apNumber: "0712", // Example Area Code (Nagpur)
//     },
//   ];
  

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Simulate pest detection and suggest service providers based on the detected pest
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }

//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }

//     // Simulate a dummy backend response
//     setResponse("Processing...");
    
//     // Simulate network delay and response
//     setTimeout(() => {
//       const dummyResponse = {
//         success: true,
//         result: {
//           description: "Pest detected: Aphids on leaf.",
//           imageUrl: "https://via.placeholder.com/500x300?text=Detection+Result",
//           detectedPest: "Aphids", // Detected pest
//         },
//       };

//       if (dummyResponse.success) {
//         setResponse(dummyResponse.result.description); // Set description text from the model
//         setResponseImage(dummyResponse.result.imageUrl); // Use the dummy image URL

//         // Filter service providers based on detected pest
//         const filteredProviders = allServiceProviders.filter((provider) =>
//           provider.pests.includes(dummyResponse.result.detectedPest)
//         );
//         setServiceProviders(filteredProviders);
//       } else {
//         setResponse("No pests detected.");
//       }
//     }, 2000); // Simulating network delay
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue (optional)"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//             <div className="mt-4 bg-gray-200 p-4 rounded-md">
//               <div className="flex">
//                 {/* Left side: Disease description */}
//                 <div className="w-1/2 pr-4">
//                   <p className="font-medium text-lg">{response}</p>
//                   <p className="mt-2 text-gray-700">
//                     This pest can cause damage to your crops, affecting leaf health and yield.
//                     Please take preventive measures.
//                   </p>
//                 </div>
//                 {/* Right side: Uploaded image */}
//                 <div className="w-1/2 pl-4">
//                   <img
//                     src={uploadedImage}
//                     alt="Uploaded"
//                     className="max-w-full h-auto rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </section>

//         {/* Service Providers Section */}
//         {serviceProviders.length > 0 && (
//           <section className="bg-white p-6 rounded-lg shadow-md mt-8">
//             <h3 className="text-2xl mb-4">Service Providers for {response.split(":")[1]}</h3>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b text-left">Name</th>
//                   <th className="py-2 px-4 border-b text-left">Mobile</th>
//                   <th className="py-2 px-4 border-b text-left">Service Provided</th>
//                   <th className="py-2 px-4 border-b text-left">Location</th>
//                   <th className="py-2 px-4 border-b text-left">Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {serviceProviders.map((provider, index) => (
//                   <tr key={index}>
//                     <td className="py-2 px-4 border-b">{provider.name}</td>
//                     <td className="py-2 px-4 border-b">{provider.mobile}</td>
//                     <td className="py-2 px-4 border-b">{provider.service}</td>
//                     <td className="py-2 px-4 border-b">{provider.location}</td>
//                     <td className="py-2 px-4 border-b">{provider.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;


// import React, { useState } from "react";

// const PestDetectionDashboard = () => {
//   const [uploadedImage, setUploadedImage] = useState(null); // To hold the uploaded image
//   const [response, setResponse] = useState(""); // To hold the analysis result text
//   const [responseImage, setResponseImage] = useState(null); // To hold the detected image URL
//   const [prompt, setPrompt] = useState(""); // To hold the user's symptoms input

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle drag-and-drop functionality
//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         setUploadedImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Submit data to the backend API
//   // const submitData = async () => {
//   //   if (!uploadedImage) {
//   //     alert("Please upload an image first!");
//   //     return;
//   //   }

//   //   if (!prompt) {
//   //     alert("Please provide a description or prompt!");
//   //     return;
//   //   }

//   //   setResponse("Processing...");

//   //   try {
//   //     const formData = new FormData();
//   //     const imageBlob = await fetch(uploadedImage).then((res) => res.blob()); // Convert base64 to Blob
//   //     formData.append("image", imageBlob, "image.jpg"); // Append the uploaded image
//   //     formData.append("symptoms", prompt); // Append the prompt

//   //     const response = await fetch("http://localhost:5000/analyze_image/", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       setResponse(data.analysis_result); // Set the analysis result text
//   //       setResponseImage(data.detected_image_url); // Set the detected image URL
//   //     } else {
//   //       setResponse("An error occurred while processing the request.");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     setResponse("An error occurred while processing the request.");
//   //   }
//   // };
//   const submitData = async () => {
//     if (!uploadedImage) {
//       alert("Please upload an image first!");
//       return;
//     }
  
//     if (!prompt) {
//       alert("Please provide a description or prompt!");
//       return;
//     }
  
//     setResponse("Processing...");
  
//     try {
//       const formData = new FormData();
  
//       // If the uploaded image is a base64 string, convert it to a Blob
//       if (typeof uploadedImage === "string" && uploadedImage.startsWith("data:image")) {
//         const base64Response = await fetch(uploadedImage);
//         const imageBlob = await base64Response.blob();
//         formData.append("image", imageBlob, "image.jpg"); // Append image as Blob
//       } else if (uploadedImage instanceof File) {
//         // If it's already a file object, append it directly
//         formData.append("image", uploadedImage);
//       } else {
//         alert("Invalid image format.");
//         return;
//       }
  
//       // Append the symptoms input field with the correct name `symptoms_input`
//       formData.append("symptoms_input", prompt); // Changed the field name to 'symptoms_input'
  
//       const response = await fetch("http://localhost:8000/analyze_image/", {
//         method: "POST",
//         body: formData,
//       });
  
//       // Check if the response was successful
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error from backend:", errorData);
//         setResponse("An error occurred while processing the request.");
//         return;
//       }
  
//       // If everything goes well, handle the response data
//       const data = await response.json();
  
//       // Assuming the backend returns analysis_result and detected_image_url
//       setResponse(data.analysis_result); // Set the analysis result text
//       setResponseImage(data.detected_image_url); // Set the detected image URL
//     } catch (error) {
//       console.error("An error occurred:", error);
//       setResponse("An error occurred while processing the request.");
//     }
//   };
  


//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center">
//         <h1 className="text-4xl">Pest Detection</h1>
//         <p>Your crop protection starts here</p>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Image Upload Section */}
//         <section className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
//           <div
//             className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             <input
//               type="file"
//               id="fileInput"
//               className="hidden"
//               onChange={handleFileSelect}
//             />
//             <label
//               htmlFor="fileInput"
//               className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
//             >
//               Drag & Drop Image or Click to Upload
//             </label>
//             {uploadedImage && (
//               <div className="mt-4">
//                 <img
//                   src={uploadedImage}
//                   alt="Uploaded"
//                   className="max-w-xs mx-auto"
//                 />
//               </div>
//             )}
//           </div>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the issue"
//             className="w-full p-4 mt-4 border rounded-md"
//           ></textarea>
//           <button
//             onClick={submitData}
//             className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
//           >
//             Submit
//           </button>
//           {response && (
//   <div className="mt-4 bg-gray-200 p-4 rounded-md">
//     <div className="flex flex-col md:flex-row">
//       {/* Left side: Analysis result */}
//       <div className="w-full md:w-1/2 pr-4">
//         <p className="font-medium text-lg">Detected Issue:</p>
//         <p className="font-semibold text-gray-600 text-lg">{response}</p>
//       </div>

//       {/* Right side: Detected image */}
//       <div className="w-full md:w-1/2 pl-4">
//         {responseImage && (
//           <img
//             src={`http://localhost:8000${responseImage}`} // Display the image from the backend
//             alt="Detected"
//             className="max-w-full h-auto rounded-lg"
//           />
//         )}
//       </div>
//     </div>
//   </div>
// )}

//         </section>
//       </div>
//     </div>
//   );
// };

// export default PestDetectionDashboard;

import React, { useState } from "react";

const PestDetectionDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState(null); // To hold the uploaded image
  const [response, setResponse] = useState(null); // To hold the analysis result
  const [responseImage, setResponseImage] = useState(null); // To hold the detected image URL
  const [prompt, setPrompt] = useState(""); // To hold the user's symptoms input
  const [isLoading, setIsLoading] = useState(false); // To handle loading state

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag-and-drop functionality
  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit data to the backend API
  const submitData = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first!");
      return;
    }

    if (!prompt) {
      alert("Please provide a description or prompt!");
      return;
    }

    setIsLoading(true); // Start loading
    setResponse(null); // Reset previous response

    try {
      const formData = new FormData();

      // If the uploaded image is a base64 string, convert it to a Blob
      if (typeof uploadedImage === "string" && uploadedImage.startsWith("data:image")) {
        const base64Response = await fetch(uploadedImage);
        const imageBlob = await base64Response.blob();
        formData.append("image", imageBlob, "image.jpg"); // Append image as Blob
      } else if (uploadedImage instanceof File) {
        // If it's already a file object, append it directly
        formData.append("image", uploadedImage);
      } else {
        alert("Invalid image format.");
        return;
      }

      // Append the symptoms input field with the correct name `symptoms_input`
      formData.append("symptoms_input", prompt); // Changed the field name to 'symptoms_input'

      const response = await fetch("http://localhost:8000/analyze_image/", {
        method: "POST",
        body: formData,
      });

      // Check if the response was successful
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from backend:", errorData);
        setResponse("An error occurred while processing the request.");
        return;
      }

      // If everything goes well, handle the response data
      const data = await response.json();

      // Update state with parsed data
      setResponse({
        analysisResult: data.analysis_result,
        measuresToTake: data.measures_to_take,
        whoToTalkTo: data.who_to_talk_to,
        yoloDetection: data.yolo_detection_results,
        symptomsProvided: data.symptoms_provided,
      });
      setResponseImage(data.detected_image_url); // Set the detected image URL
    } catch (error) {
      console.error("An error occurred:", error);
      setResponse("An error occurred while processing the request.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white py-6 text-center">
        <h1 className="text-4xl">Pest Detection</h1>
        <p>Your crop protection starts here</p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Image Upload Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl text-center mb-4">Upload an Image for Pest Detection</h2>
          <div
            className="border-2 border-dashed border-green-500 p-6 text-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={allowDrop}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*" // Ensure only images are accepted
            />
            <label
              htmlFor="fileInput"
              className="bg-green-500 text-white py-2 px-6 rounded-md cursor-pointer"
            >
              Drag & Drop Image or Click to Upload
            </label>
            {uploadedImage && (
              <div className="mt-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-xs mx-auto"
                />
              </div>
            )}
          </div>
          <div className="flex flex-row gap-5">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Name of the Crop"
            className="w-[30%] p-4 mt-4 border rounded-md"
            rows="4" // Add rows for better textarea sizing
          ></textarea>
          <textarea
            // value={prompt}
            // onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the issue"
            className="w-full p-4 mt-4 border rounded-md"
            rows="4" // Add rows for better textarea sizing
          ></textarea>
          </div>
          <button
            onClick={submitData}
            className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600 disabled:bg-gray-400"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Processing..." : "Submit"}
          </button>
          {response && (
            <div className="mt-4 bg-gray-200 p-4 rounded-md">
              <div className="flex flex-col md:flex-row">
                {/* Left side: Analysis result */}
                <div className="w-full md:w-1/2 pr-4">
                  <p className="font-medium text-lg">Detected Issue:</p>
                  <div className="font-semibold text-gray-600 text-lg">
                    <h3 className="text-xl font-bold">Analysis Result:</h3>
                    <p>{response.analysisResult}</p>
                    <h3 className="text-xl font-bold mt-4">Measures to Take:</h3>
                    <p>{response.measuresToTake}</p>
                    <h3 className="text-xl font-bold mt-4">Who to Talk To:</h3>
                    <p>{response.whoToTalkTo}</p>
                  </div>
                </div>

                {/* Right side: Detected image and YOLO results */}
                <div className="w-full md:w-1/2 pl-4">
                  <h3 className="text-xl font-bold">Detection Results:</h3>
                  <p>{response.yoloDetection}</p>
                  {responseImage && (
                    <img
                      src={`http://localhost:8000${responseImage}`} // Display the image from the backend
                      alt="Detected"
                      className="max-w-full h-auto rounded-lg mt-4"
                    />
                  )}
                  <h3 className="text-xl  mt-4"><span className="font-bold">Crop Type: </span>{response.symptomsProvided}</h3>
                  
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PestDetectionDashboard;