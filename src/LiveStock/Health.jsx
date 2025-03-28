import { useState } from 'react'
import { FiPlus, FiActivity, FiAlertTriangle, FiCalendar } from 'react-icons/fi'

const Health = () => {
  const [activeTab, setActiveTab] = useState('records')
  
  const healthRecords = [
    { id: 1, goatId: 101, name: 'Daisy', issue: 'Routine Checkup', date: '2023-05-28', status: 'Completed' },
    { id: 2, goatId: 105, name: 'Bella', issue: 'Worm Infection', date: '2023-05-27', status: 'Ongoing' },
    { id: 3, goatId: 102, name: 'Rocky', issue: 'Vaccination', date: '2023-05-25', status: 'Completed' }
  ]
  
  const medications = [
    { id: 1, name: 'Dewormer', quantity: '25 doses', nextDelivery: '2023-06-15' },
    { id: 2, name: 'Antibiotics', quantity: '15 doses', nextDelivery: '2023-06-10' },
    { id: 3, name: 'Vitamin Supplement', quantity: '30 doses', nextDelivery: '2023-06-20' }
  ]

  return (
    <div className='min-h-screen p-5'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Health Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus className="mr-2" /> Add New Record
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'records' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('records')}
        >
          <FiActivity className="mr-2" /> Health Records
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'medications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('medications')}
        >
          <FiAlertTriangle className="mr-2" /> Medications
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'vaccinations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('vaccinations')}
        >
          <FiCalendar className="mr-2" /> Vaccination Schedule
        </button>
      </div>
      
      {activeTab === 'records' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goat ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {healthRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{record.goatId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.issue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'medications' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medications.map((med) => (
            <div key={med.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">{med.name}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity Available:</span>
                  <span className="font-medium">{med.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Delivery:</span>
                  <span>{med.nextDelivery}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-2">
                <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                  Order
                </button>
                <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100">
                  Log Usage
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'vaccinations' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Upcoming Vaccinations</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View Full Schedule
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 1, vaccine: 'CD&T', dueDate: '2023-06-10', goats: 'All adults' },
              { id: 2, vaccine: 'Rabies', dueDate: '2023-06-15', goats: 'Barn A' },
              { id: 3, vaccine: 'Pneumonia', dueDate: '2023-06-20', goats: 'Kids' }
            ].map(item => (
              <div key={item.id} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <FiCalendar className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.vaccine}</h3>
                  <p className="text-sm text-gray-600">Due: {item.dueDate}</p>
                  <p className="text-sm text-gray-600 mt-1">For: {item.goats}</p>
                </div>
                <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100">
                  Schedule
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Health