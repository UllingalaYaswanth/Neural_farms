import { useState } from 'react'
import { FiPlus, FiCalendar, FiClipboard } from 'react-icons/fi'

const Feeding = () => {
  const [activeTab, setActiveTab] = useState('schedule')
  
  const feedingSchedule = [
    { id: 1, time: 'Morning', feedType: 'Alfalfa Hay', quantity: '20 kg', assignedTo: 'Barn A' },
    { id: 2, time: 'Afternoon', feedType: 'Grain Mix', quantity: '15 kg', assignedTo: 'All Barns' },
    { id: 3, time: 'Evening', feedType: 'Alfalfa Hay', quantity: '25 kg', assignedTo: 'Barn B' }
  ]
  
  const feedInventory = [
    { id: 1, type: 'Alfalfa Hay', quantity: '450 kg', lastDelivery: '2023-05-20', status: 'Good' },
    { id: 2, type: 'Grain Mix', quantity: '120 kg', lastDelivery: '2023-05-25', status: 'Low' },
    { id: 3, type: 'Mineral Supplement', quantity: '15 kg', lastDelivery: '2023-05-10', status: 'Critical' }
  ]

  return (
    <div className='min-h-screen p-5'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Feeding Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus className="mr-2" /> Add New Record
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'schedule' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('schedule')}
        >
          <FiCalendar className="mr-2" /> Feeding Schedule
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'inventory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('inventory')}
        >
          <FiClipboard className="mr-2" /> Feed Inventory
        </button>
      </div>
      
      {activeTab === 'schedule' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feed Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {feedingSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.feedType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assignedTo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedInventory.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{item.type}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Good' ? 'bg-green-100 text-green-800' :
                  item.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{item.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Delivery:</span>
                  <span>{item.lastDelivery}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                  Order More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Feeding