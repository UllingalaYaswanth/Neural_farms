import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utility to format missing values
  const safeValue = (val) => val ?? 'N/A';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/weather'); // Adjust if hosted elsewhere
        const data = await res.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch weather data:', err);
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="ml-16 md:ml-64 p-6 text-gray-700">Loading weather data...</div>;
  }

  if (error) {
    return <div className="ml-16 md:ml-64 p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-[#286243]">Weather for next 14 days</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Min Temp</th>
              <th className="p-2 border">Max Temp</th>
              <th className="p-2 border">Weather</th>
              <th className="p-2 border">Relative Humidity</th>
              <th className="p-2 border">Clouds</th>
              <th className="p-2 border">Wind</th>
              <th className="p-2 border">Precipitation</th>
              <th className="p-2 border">Evapotranspiration</th>
              <th className="p-2 border">Direct Solar Radiation</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            {weatherData.map((day, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-2 border text-sm">
                  {new Date(day.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
                <td className="p-2 border text-sm">{safeValue(day.mintemp)}</td>
                <td className="p-2 border text-sm">{safeValue(day.maxtemp)}</td>
                <td className="p-2 border">
                  {day.weather ? (
                    <img src={day.weather} alt="weather icon" className="mx-auto w-8 h-8" />
                  ) : (
                    'N/A'
                  )}
                </td>
                <td className="p-2 border text-sm">{safeValue(day['relative humidity'])}</td>
                <td className="p-2 border text-sm">{safeValue(day.clouds)}</td>
                <td className="p-2 border text-sm">{safeValue(day.wind)}</td>
                <td className="p-2 border text-sm">{safeValue(day.precipitation)}</td>
                <td className="p-2 border text-sm">{safeValue(day.evapotranspiration)}</td>
                <td className="p-2 border text-sm">{safeValue(day['direct solar radiation'])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Weather;
