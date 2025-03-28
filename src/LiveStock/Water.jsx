import { useState, useEffect } from 'react'
import { FiDroplet, FiPlus, FiTrendingUp, FiAlertTriangle } from 'react-icons/fi'

const Water = () => {
  const [waterData, setWaterData] = useState({
    dailyConsumption: 420,
    weeklyAverage: 380,
    currentTankLevel: 65,
    lastRefill: '2023-05-28',
    consumptionHistory: [
      { day: 'Mon', consumption: 390 },
      { day: 'Tue', consumption: 410 },
      { day: 'Wed', consumption: 380 },
      { day: 'Thu', consumption: 430 },
      { day: 'Fri', consumption: 450 },
      { day: 'Sat', consumption: 400 },
      { day: 'Sun', consumption: 420 }
    ],
    issues: [
      { id: 1, location: 'Barn A', issue: 'Leaking pipe', status: 'Urgent' },
      { id: 2, location: 'Barn B', issue: 'Low pressure', status: 'Monitor' }
    ]
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWaterData(prev => ({
        ...prev,
        dailyConsumption: prev.dailyConsumption + Math.random() * 2,
        currentTankLevel: Math.max(0, prev.currentTankLevel - 0.1)
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen p-5'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Water Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus className="mr-2" /> Add Water Log
        </button>
      </div>
      
      {/* Water Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <FiDroplet className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold">Daily Consumption</h3>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold">{waterData.dailyConsumption.toFixed(0)}</span>
            <span className="text-gray-500 ml-2">liters</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <FiTrendingUp className="text-green-500 mr-1" />
            <span className="text-green-600">{(waterData.dailyConsumption / waterData.weeklyAverage * 100 - 100).toFixed(1)}% above weekly average</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <FiDroplet className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold">Tank Level</h3>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Current level</span>
              <span>{waterData.currentTankLevel.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  waterData.currentTankLevel > 30 ? 'bg-blue-600' : 'bg-red-600'
                }`} 
                style={{ width: `${waterData.currentTankLevel}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Last refill: {waterData.lastRefill}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <FiDroplet className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold">Weekly Average</h3>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold">{waterData.weeklyAverage}</span>
            <span className="text-gray-500 ml-2">liters/day</span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div className="flex justify-between h-20 items-end">
              {waterData.consumptionHistory.map((day, index) => (
                <div key={index} className="flex-1 mx-0.5">
                  <div 
                    className="bg-blue-500 rounded-t hover:bg-blue-600 transition-all" 
                    style={{ height: `${(day.consumption / 500) * 100}%` }}
                    title={`${day.consumption} liters`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Water Issues */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold flex items-center">
            <FiAlertTriangle className="text-red-500 mr-2" /> Current Water Issues
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View All Issues
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {waterData.issues.map((issue) => (
            <div key={issue.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{issue.location}</h3>
                  <p className="text-sm text-gray-600">{issue.issue}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  issue.status === 'Urgent' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {issue.status}
                </span>
              </div>
              <div className="mt-3 flex space-x-2">
                <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100">
                  Assign
                </button>
                <button className="text-sm bg-gray-50 text-gray-600 px-3 py-1 rounded hover:bg-gray-100">
                  Mark Resolved
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Water System Map */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Water System Overview</h2>
        <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <FiDroplet className="mx-auto text-4xl mb-2" />
            <p>Water system map visualization</p>
            <p className="text-sm">(Would show actual water lines and tanks in production)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Water