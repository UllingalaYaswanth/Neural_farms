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


import React, { useState } from "react";

const PestDetectionDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState("");
  const [responseImage, setResponseImage] = useState(null); // To hold the result image
  const [prompt, setPrompt] = useState("");

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

  // Handle submit and send data to backend
  const submitData = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first!");
      return;
    }

    if (!prompt) {
      alert("Please provide a description or prompt!");
      return;
    }

    const formData = new FormData();
    formData.append("image", uploadedImage);
    formData.append("prompt", prompt);

    const endpoint = "your-model-endpoint-url"; // Replace with your actual endpoint

    try {
      setResponse("Processing...");
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResponse(data.result.description); // Set description text from the model
        setResponseImage(data.result.imageUrl); // Assuming the backend returns the URL of the result image
        addToHistory(data.result.description, data.result.imageUrl);
      } else {
        setResponse("No pests detected.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while processing.");
    }
  };

  // Add result to history
  const addToHistory = (description, imageUrl) => {
    const timestamp = new Date().toLocaleString();
    setHistory((prevHistory) => [
      ...prevHistory,
      { timestamp, description, imageUrl },
    ]);
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
              <p className="font-medium">{response}</p>
              {responseImage && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Detected Issue:</p>
                    <p>{response}</p>
                  </div>
                  <div>
                    <img
                      src={responseImage}
                      alt="Detection Result"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* History Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4">Previous Detection Results</h3>
          {history.length > 0 ? (
            <ul>
              {history.map((item, index) => (
                <li key={index} className="bg-gray-100 p-4 mb-4 rounded-md">
                  <p className="font-medium">{item.timestamp}</p>
                  <p>{item.description}</p>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt="History Image"
                      className="mt-4 w-full h-auto rounded-lg"
                    />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No history available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default PestDetectionDashboard;
