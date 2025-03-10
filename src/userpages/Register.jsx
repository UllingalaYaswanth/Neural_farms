import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

// Modal component for form display
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-600 text-xl">&times;</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [AadharNo, setAadharNo] = useState('');
  const [address, setAddress] = useState('');
  const [landArea, setLandArea] = useState('');
  const [cropType, setCropType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedServices, setSelectedServices] = useState([]); // For storing selected services
  const [experience, setExperience] = useState('');
  const [isFarmer, setIsFarmer] = useState(true); // Default to Farmer registration
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  // Available services
  const serviceOptions = [
    { value: 'Soil Testing', label: 'Soil Testing' },
    { value: 'Drone Service', label: 'Drone Service' },
    { value: 'Irrigation Services', label: 'Irrigation Services' },
    { value: 'Pest and Disease Monitoring', label: 'Pest and Disease Monitoring' },
    { value: 'Fertilization Services', label: 'Fertilization Services' },
    { value: 'Harvest Planning & Equipment Rental', label: 'Harvest Planning & Equipment Rental' },
    { value: 'Crop Health Monitoring', label: 'Crop Health Monitoring' },
    { value: 'Weed Control', label: 'Weed Control' },
    { value: 'Crop Rotation Planning', label: 'Crop Rotation Planning' },
    { value: 'Harvest Storage & Handling', label: 'Harvest Storage & Handling' },
    { value: 'Market Access & Sales Support', label: 'Market Access & Sales Support' },
    { value: 'Precision Agriculture', label: 'Precision Agriculture' },
    { value: 'Climate and Weather Advisory', label: 'Climate and Weather Advisory' },
    { value: 'Post-Harvest Processing', label: 'Post-Harvest Processing' }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = isFarmer
      ? {
          name,
          MobileNo,
          AadharNo,
          address,
          landArea,
          cropType,
          email,
          password,
        }
      : {
          name,
          email,
          mobile,
          address,
          services: selectedServices.map(service => service.value), // Map to an array of values
          experience,
        };

    try {
      const response = await fetch('https://your-backend-endpoint.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        setModalOpen(false);
        navigate('/signin');
      } else {
        console.error('Error submitting form:', response.statusText);
        setErrorMessage('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleRegistrationChoice = (isFarmer) => {
    setIsFarmer(isFarmer);
    setModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-green-700">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Choose Registration Type</h2>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleRegistrationChoice(true)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Farmer Registration
          </button>
          <button
            onClick={() => handleRegistrationChoice(false)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Service Provider Registration
          </button>
        </div>
        <div className="text-center mt-4">
           <p className="text-sm text-gray-600">
           Already registered?{' '}
             <a
              href="/"
              className="text-green-600 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>

      {/* Modal for the form */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={isFarmer ? "Farmer Registration" : "Service Provider Registration"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

          {isFarmer ? (
            <>
              {/* Farmer-specific input fields */}
    

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Mobile No:</label>
                <input
                  type="text"
                  value={MobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Enter Land No"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Aadhar No:</label>
                <input
                  type="text"
                  value={AadharNo}
                  onChange={(e) => setAadharNo(e.target.value)}
                  placeholder="Enter Land No"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Land Area:</label>
                <input
                  type="text"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  placeholder="Enter Land Area"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Crop Type: <span className='text-sm opacity-[0.6]'>(Optional)</span></label>
                <input
                  type="text"
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  placeholder="Enter Crop Type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </>
          ) : (
            <>
              {/* Service Provider-specific input fields */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Mobile Number:</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter Mobile Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Type of Services:</label>
                <Select
                  isMulti
                  name="services"
                  options={serviceOptions}
                  value={selectedServices}
                  onChange={setSelectedServices}
                  className="w-full"
                  placeholder="Select Services"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Experience:</label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Enter Years of Experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
         <div className="text-center mt-4">
           <p className="text-sm text-gray-600">
           Already registered?{' '}
             <a
              href="/"
              className="text-green-600 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterPage;
