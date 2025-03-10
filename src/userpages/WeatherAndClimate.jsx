import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
} from "chart.js";
import { WiDaySunny, WiRain, WiWindy, WiFog } from "react-icons/wi";
import { MdAir } from "react-icons/md";

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement);

const WeatherAndClimate = () => {
  const [weatherData] = useState({
    temperature: 22, // Current temperature in °C
    humidity: 65, // Humidity percentage
    condition: "Sunny", // Weather condition (e.g., Sunny, Rainy)
    windSpeed: 15, // Wind speed in km/h
    windDirection: "NE", // Wind direction
    airQuality: 52, // Air quality index (AQI)
    forecast: [
      { day: "Mon", temp: 25, rain: 5 },
      { day: "Tue", temp: 28, rain: 0 },
      { day: "Wed", temp: 23, rain: 10 },
      { day: "Thu", temp: 22, rain: 2 },
      { day: "Fri", temp: 24, rain: 0 },
    ], // 5-day forecast
    temperatureData: [22, 24, 26, 28, 30, 29, 27], // Temperature over the past week
  });

  // Chart data for Temperature Over Time
  const temperatureData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.temperatureData,
        borderColor: "#FF6347",
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Chart data for 5-day forecast
  const forecastData = {
    labels: weatherData.forecast.map(forecast => forecast.day),
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.forecast.map(forecast => forecast.temp),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Rain (mm)",
        data: weatherData.forecast.map(forecast => forecast.rain),
        borderColor: "#1E90FF",
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weather & Climate</h1>

      {/* Current Weather Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
            <WiDaySunny className="mr-3 text-yellow-500 text-4xl" />
            Current Weather
          </h2>
          <p className="text-3xl font-bold text-gray-800">{`${weatherData.temperature}°C`}</p>
          <p className="text-lg text-gray-500">{weatherData.condition}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Humidity: {weatherData.humidity}%</p>
            <p className="text-sm text-gray-600">Wind: {weatherData.windSpeed} km/h {weatherData.windDirection}</p>
            <p className="text-sm text-gray-600">Air Quality Index (AQI): {weatherData.airQuality}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <WiDaySunny className="text-8xl text-yellow-500" />
        </div>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 5-Day Forecast Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <WiRain className="mr-3 text-blue-500 text-4xl" />
          5-Day Forecast
        </h2>
        <Bar data={forecastData} options={{ responsive: true }} />
      </div>

      {/* Temperature Over Time Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <WiWindy className="mr-3 text-green-500 text-4xl" />
          Temperature Over Time
        </h2>
        <Line data={temperatureData} options={{ responsive: true }} />
      </div>
      </div>
      {/* Wind Speed Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
            <WiWindy className="mr-3 text-gray-500 text-4xl" />
            Wind Speed & Direction
          </h2>
          <p className="text-2xl font-bold text-gray-800">{weatherData.windSpeed} km/h</p>
          <p className="text-lg text-gray-500">Direction: {weatherData.windDirection}</p>
        </div>
        <div className="flex justify-center items-center">
          <WiWindy className="text-6xl text-gray-500" />
        </div>
      </div>

      {/* Air Quality Index Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <MdAir className="mr-3 text-indigo-500 text-4xl" />
          Air Quality Index (AQI)
        </h2>
        <p className="text-2xl font-bold text-gray-800">{weatherData.airQuality}</p>
        <p className="text-lg text-gray-500">
          {weatherData.airQuality <= 50
            ? "Good"
            : weatherData.airQuality <= 100
            ? "Moderate"
            : weatherData.airQuality <= 150
            ? "Unhealthy for Sensitive Groups"
            : weatherData.airQuality <= 200
            ? "Unhealthy"
            : weatherData.airQuality <= 300
            ? "Very Unhealthy"
            : "Hazardous"}
        </p>
      </div>
    </div>
  );
};

export default WeatherAndClimate;
