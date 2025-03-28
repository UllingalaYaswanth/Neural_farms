import { useState, useEffect } from 'react';
import { 
  FiUsers, FiClipboard, FiAlertCircle, FiDroplet, 
  FiPieChart, FiTrendingUp, FiActivity, FiCalendar,
  FiMapPin, FiClock, FiSun, FiCloud, FiCloudRain,
  FiChevronRight
} from 'react-icons/fi';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, LineChart, Line, ReferenceLine
} from 'recharts';

const Dashboard = () => {
  const [goatData, setGoatData] = useState({
    totalGoats: 124,
    pregnant: 18,
    sick: 7,
    kids: 23,
    males: 45,
    females: 79,
    averageWeight: 28.5,
    dailyFeed: 62,
    waterConsumption: 380,
    lastVaccination: '2023-05-15',
    weightTrend: [
      { month: 'Jan', weight: 26.2 },
      { month: 'Feb', weight: 26.8 },
      { month: 'Mar', weight: 27.5 },
      { month: 'Apr', weight: 27.9 },
      { month: 'May', weight: 28.5 },
    ],
    barnStats: [
      { name: 'Barn A', population: 42, capacity: 50 },
      { name: 'Barn B', population: 38, capacity: 45 },
      { name: 'Nursery', population: 23, capacity: 30 },
      { name: 'Quarantine', population: 7, capacity: 10 },
    ],
    activityData: [
      { hour: '6AM', feeding: 10, health: 2, breeding: 1 },
      { hour: '9AM', feeding: 15, health: 5, breeding: 0 },
      { hour: '12PM', feeding: 20, health: 3, breeding: 2 },
      { hour: '3PM', feeding: 18, health: 4, breeding: 1 },
      { hour: '6PM', feeding: 12, health: 1, breeding: 0 },
    ],
    healthMetrics: [
      { hour: '6AM', temp: 38.5, activity: 85, intake: 75 },
      { hour: '9AM', temp: 39.1, activity: 45, intake: 85 },
      { hour: '12PM', temp: 39.8, activity: 60, intake: 90 },
      { hour: '3PM', temp: 40.2, activity: 30, intake: 80 },
      { hour: '6PM', temp: 39.5, activity: 75, intake: 70 }
    ],
    weather: {
      temp: 24.5,
      condition: 'Partly Cloudy',
      humidity: 65,
      wind: 12,
      forecast: [
        { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
        { day: 'Tue', high: 28, low: 20, condition: 'partly-cloudy' },
        { day: 'Wed', high: 30, low: 22, condition: 'sunny' },
        { day: 'Thu', high: 25, low: 19, condition: 'rainy' },
        { day: 'Fri', high: 22, low: 17, condition: 'rainy' },
      ]
    }
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGoatData(prev => ({
        ...prev,
        dailyFeed: prev.dailyFeed + Math.random() * 0.5,
        waterConsumption: prev.waterConsumption + Math.random() * 2,
        sick: Math.max(3, Math.min(10, prev.sick + (Math.random() > 0.7 ? 1 : -1)))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Data for charts
  const populationData = [
    { name: 'Males', value: goatData.males, color: '#3b82f6' },
    { name: 'Females', value: goatData.females, color: '#ec4899' },
    { name: 'Kids', value: goatData.kids, color: '#f59e0b' }
  ];

  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny': return <FiSun className="text-yellow-400" />;
      case 'partly-cloudy': return <FiCloud className="text-gray-400" />;
      case 'rainy': return <FiCloudRain className="text-blue-400" />;
      default: return <FiCloud className="text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Goat Farm Dashboard</h1>
        <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
          <FiCalendar className="text-gray-500" />
          <span className="text-sm text-gray-700">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Goats</p>
              <p className="text-2xl font-bold text-gray-800">{goatData.totalGoats}</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <FiUsers size={24} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-green-600">
            <span className="animate-pulse mr-1">↑</span>
            <span>5% from last month</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Pregnant</p>
              <p className="text-2xl font-bold text-gray-800">{goatData.pregnant}</p>
            </div>
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <FiClipboard size={24} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-green-600">
            <span className="animate-bounce mr-1">↑</span>
            <span>3 new this week</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Sick</p>
              <p className="text-2xl font-bold text-gray-800">{goatData.sick}</p>
            </div>
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <FiAlertCircle size={24} />
            </div>
          </div>
          <div className={`mt-3 flex items-center text-sm ${goatData.sick > 7 ? 'text-red-600' : 'text-green-600'}`}>
            <span className="animate-ping mr-1">{goatData.sick > 7 ? '↑' : '↓'}</span>
            <span>{goatData.sick > 7 ? `${goatData.sick - 7} new cases` : `${7 - goatData.sick} recovered`}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Kids</p>
              <p className="text-2xl font-bold text-gray-800">{goatData.kids}</p>
            </div>
            <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
              <FiUsers size={24} />
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-green-600">
            <span className="animate-pulse mr-1">↑</span>
            <span>4 new births</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weight Trend Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FiTrendingUp className="mr-2 text-indigo-500" /> Weight Trend (Last 5 Months)
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full">
                  Monthly
                </button>
                <button className="px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full">
                  Weekly
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={goatData.weightTrend}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis unit="kg" />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip 
                    formatter={(value) => [`${value} kg`, "Average Weight"]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#6366f1" 
                    fillOpacity={1} 
                    fill="url(#colorWeight)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Barn Capacity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiUsers className="mr-2 text-green-500" /> Barn Capacity Utilization
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={goatData.barnStats}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="population" fill="#10b981" name="Current Population" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="capacity" fill="#d1fae5" name="Total Capacity" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Health Monitoring */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FiActivity className="mr-2 text-red-500" /> Health Monitoring
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Temperature</span>
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">3 High</span>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={goatData.healthMetrics}>
                      <Area type="monotone" dataKey="temp" stroke="#ef4444" fill="#fee2e2" />
                      <XAxis dataKey="hour" />
                      <YAxis domain={[38, 41]} />
                      <ReferenceLine y={39.5} stroke="#ef4444" strokeDasharray="3 3" />
                      <Tooltip formatter={(value) => [`${value}°C`, "Temperature"]} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Activity</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">2 Low</span>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={goatData.healthMetrics}>
                      <Bar dataKey="activity" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <XAxis dataKey="hour" />
                      <YAxis domain={[0, 100]} />
                      <ReferenceLine y={50} stroke="#f59e0b" strokeDasharray="3 3" />
                      <Tooltip formatter={(value) => [`${value}%`, "Activity"]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Feed Intake</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Normal</span>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={goatData.healthMetrics}>
                      <Line type="monotone" dataKey="intake" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                      <XAxis dataKey="hour" />
                      <YAxis domain={[50, 100]} />
                      <ReferenceLine y={75} stroke="#3b82f6" strokeDasharray="3 3" />
                      <Tooltip formatter={(value) => [`${value}%`, "Intake"]} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Population Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiPieChart className="mr-2 text-blue-500" /> Population Distribution
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={populationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {populationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value} goats`, name]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Daily Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiActivity className="mr-2 text-purple-500" /> Daily Activity Pattern
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={goatData.activityData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="hour" 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #e5e7eb'
                    }}
                    formatter={(value, name) => [`${value} activities`, name]}
                  />
                  <Legend 
                    wrapperStyle={{
                      paddingTop: '20px'
                    }}
                  />
                  <Bar 
                    dataKey="feeding" 
                    fill="#8b5cf6" 
                    name="Feedings" 
                    radius={[4, 4, 0, 0]} 
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="health" 
                    fill="#ec4899" 
                    name="Health Checks" 
                    radius={[4, 4, 0, 0]} 
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="breeding" 
                    fill="#f59e0b" 
                    name="Breeding" 
                    radius={[4, 4, 0, 0]} 
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiMapPin className="mr-2 text-blue-500" /> Farm Weather
            </h2>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="text-5xl font-bold mr-4">{goatData.weather.temp}°C</div>
                <div>
                  <div className="font-medium">{goatData.weather.condition}</div>
                  <div className="text-sm text-gray-500">Humidity: {goatData.weather.humidity}%</div>
                  <div className="text-sm text-gray-500">Wind: {goatData.weather.wind} km/h</div>
                </div>
              </div>
              <div className="text-4xl">
                {getWeatherIcon(goatData.weather.forecast[0].condition)}
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {goatData.weather.forecast.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium">{day.day}</div>
                  <div className="my-1 text-xl">{getWeatherIcon(day.condition)}</div>
                  <div className="text-xs">
                    <span className="font-medium">{day.high}°</span>
                    <span className="text-gray-500 mx-1">/</span>
                    <span className="text-gray-500">{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <FiClipboard className="text-purple-500" />
                  </div>
                  <h3 className="text-gray-700 font-medium">Daily Feed</h3>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{goatData.dailyFeed.toFixed(1)} kg</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className={`inline-flex items-center ${goatData.dailyFeed > 65 ? 'text-red-500' : 'text-green-500'}`}>
                      {goatData.dailyFeed > 65 ? '↑ Above' : '↓ Below'} average
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-purple-500" 
                    style={{ width: `${Math.min(100, (goatData.dailyFeed / 80) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <FiDroplet className="text-blue-400" />
                  </div>
                  <h3 className="text-gray-700 font-medium">Water Usage</h3>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">{goatData.waterConsumption.toFixed(0)} L</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {Math.round((goatData.waterConsumption / goatData.totalGoats))} L per goat
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-400" 
                    style={{ width: `${Math.min(100, (goatData.waterConsumption / 500) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;