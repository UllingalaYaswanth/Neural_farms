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
    <div className="min-h-screen bg-[#eaece4]">
      {/* Header */}
      <header className="text-center py-4">
        <h1 className="text-4xl font-extrabold text-green-700">Pest Detection</h1>
        <p className="text-gray-600 text-xl pt-2">Your crop protection starts here</p>
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