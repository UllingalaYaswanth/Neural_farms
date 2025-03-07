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


import React, { useState } from "react";

const PestDetectionDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [response, setResponse] = useState("");
  const [responseImage, setResponseImage] = useState(null); // To hold the result image
  const [prompt, setPrompt] = useState("");
  const [serviceProviders, setServiceProviders] = useState([]); // To hold the filtered service providers

  // Hardcoded service provider data
  const allServiceProviders = [
    {
      name: "Maharashtra Pest Control",
      mobile: "+91 98765 43210", // Indian mobile number
      service: "Pest Management",
      location: "Mumbai, Maharashtra",
      email: "contact@maharashtrapestcontrol.com",
      pests: ["Aphids", "Caterpillars", "Termites"], // Related pests
      apNumber: "022", // Example Area Code (Mumbai)
    },
    {
      name: "EcoGreen Solutions",
      mobile: "+91 87654 32109", // Indian mobile number
      service: "Eco-friendly Pest Control",
      location: "Pune, Maharashtra",
      email: "support@ecogreensolutions.com",
      pests: ["Aphids", "Spider Mites"],
      apNumber: "020", // Example Area Code (Pune)
    },
    {
      name: "GreenSafe Pest Services",
      mobile: "+91 76543 21098", // Indian mobile number
      service: "Organic Pest Control",
      location: "Nashik, Maharashtra",
      email: "info@greensafepest.com",
      pests: ["Moths", "Aphids", "Leafhoppers"],
      apNumber: "0253", // Example Area Code (Nashik)
    },
    {
      name: "SafeGuard Pest Control",
      mobile: "+91 65432 10987", // Indian mobile number
      service: "Insect and Rodent Control",
      location: "Nagpur, Maharashtra",
      email: "support@safeguardpest.com",
      pests: ["Rodents", "Aphids", "Termites"],
      apNumber: "0712", // Example Area Code (Nagpur)
    },
  ];
  

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

  // Simulate pest detection and suggest service providers based on the detected pest
  const submitData = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first!");
      return;
    }

    if (!prompt) {
      alert("Please provide a description or prompt!");
      return;
    }

    // Simulate a dummy backend response
    setResponse("Processing...");
    
    // Simulate network delay and response
    setTimeout(() => {
      const dummyResponse = {
        success: true,
        result: {
          description: "Pest detected: Aphids on leaf.",
          imageUrl: "https://via.placeholder.com/500x300?text=Detection+Result",
          detectedPest: "Aphids", // Detected pest
        },
      };

      if (dummyResponse.success) {
        setResponse(dummyResponse.result.description); // Set description text from the model
        setResponseImage(dummyResponse.result.imageUrl); // Use the dummy image URL

        // Filter service providers based on detected pest
        const filteredProviders = allServiceProviders.filter((provider) =>
          provider.pests.includes(dummyResponse.result.detectedPest)
        );
        setServiceProviders(filteredProviders);
      } else {
        setResponse("No pests detected.");
      }
    }, 2000); // Simulating network delay
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
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the issue (optional)"
            className="w-full p-4 mt-4 border rounded-md"
          ></textarea>
          <button
            onClick={submitData}
            className="bg-green-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-green-600"
          >
            Submit
          </button>
          {response && (
            <div className="mt-4 bg-gray-200 p-4 rounded-md">
              <div className="flex">
                {/* Left side: Disease description */}
                <div className="w-1/2 pr-4">
                  <p className="font-medium text-lg">{response}</p>
                  <p className="mt-2 text-gray-700">
                    This pest can cause damage to your crops, affecting leaf health and yield.
                    Please take preventive measures.
                  </p>
                </div>
                {/* Right side: Uploaded image */}
                <div className="w-1/2 pl-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Service Providers Section */}
        {serviceProviders.length > 0 && (
          <section className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl mb-4">Service Providers for {response.split(":")[1]}</h3>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Mobile</th>
                  <th className="py-2 px-4 border-b text-left">Service Provided</th>
                  <th className="py-2 px-4 border-b text-left">Location</th>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {serviceProviders.map((provider, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{provider.name}</td>
                    <td className="py-2 px-4 border-b">{provider.mobile}</td>
                    <td className="py-2 px-4 border-b">{provider.service}</td>
                    <td className="py-2 px-4 border-b">{provider.location}</td>
                    <td className="py-2 px-4 border-b">{provider.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
};

export default PestDetectionDashboard;
