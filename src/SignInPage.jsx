import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy check for email and password
    if (email === 'admin@gmail.com' && password === '123') {
      // Store the role in localStorage
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else if (email === 'user@gmail.com' && password === '123') {
      localStorage.setItem('role', 'user');
      navigate('/user');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-green-700">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome to Neural Farms</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
