// import express from 'express';
// import cors from 'cors';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Enable CORS for your frontend
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
//   credentials: true
// }));

// app.use(express.json());

// // Air Quality API endpoint
// app.get('/api/air-quality', async (req, res) => {
//   try {
//     const { lat, lng } = req.query;
    
//     if (!lat || !lng) {
//       return res.status(400).json({ error: 'Latitude and longitude are required' });
//     }

//     console.log(`Fetching air quality data for lat: ${lat}, lng: ${lng}`);

//     const response = await axios.get(
//       `https://api.ambeedata.com/latest/by-lat-lng`,
//       {
//         params: { lat, lng },
//         headers: {
//           'X-API-Key': process.env.AMBEE_API_KEY,
//           'Content-Type': 'application/json'
//         },
//         timeout: 10000 // 10 second timeout
//       }
//     );

//     const data = response.data;
    
//     // Add timestamp for real-time tracking
//     if (data.stations && data.stations.length > 0) {
//       data.stations[0].fetchedAt = new Date().toISOString();
//       console.log('✅ Real-time data fetched successfully');
//     }
    
//     res.json(data);
//   } catch (error) {
//     console.error('❌ Air quality API error:', error.response?.data || error.message);
    
//     // Return detailed error info for debugging
//     res.status(500).json({ 
//       error: 'Failed to fetch air quality data',
//       message: error.response?.data?.message || error.message,
//       statusCode: error.response?.status || 500
//     });
//   }
// });

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     timestamp: new Date().toISOString(),
//     message: 'Air Quality API Backend is running!'
//   });
// });

// // Root endpoint
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Air Quality API Backend',
//     endpoints: {
//       health: '/health',
//       airQuality: '/api/air-quality?lat=25.671704&lng=55.742820'
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Air Quality API server running on http://localhost:${PORT}`);
//   console.log(`📍 Test endpoint: http://localhost:${PORT}/api/air-quality?lat=25.671704&lng=55.742820`);
//   console.log(`🔍 Health check: http://localhost:${PORT}/health`);
// });

const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // For parsing JSON payloads

const API_KEY = process.env.API_KEY;
const FARM_ID = process.env.FARM_ID;

console.log("API_KEY:", API_KEY);
console.log("FARM_ID:", FARM_ID);




app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
