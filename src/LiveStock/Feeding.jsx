// import { useState } from 'react'
// import { FiPlus, FiCalendar, FiClipboard } from 'react-icons/fi'

// const Feeding = () => {
//   const [activeTab, setActiveTab] = useState('schedule')
  
//   const feedingSchedule = [
//     { id: 1, time: 'Morning', feedType: 'Alfalfa Hay', quantity: '20 kg', assignedTo: 'Barn A' },
//     { id: 2, time: 'Afternoon', feedType: 'Grain Mix', quantity: '15 kg', assignedTo: 'All Barns' },
//     { id: 3, time: 'Evening', feedType: 'Alfalfa Hay', quantity: '25 kg', assignedTo: 'Barn B' }
//   ]
  
//   const feedInventory = [
//     { id: 1, type: 'Alfalfa Hay', quantity: '450 kg', lastDelivery: '2023-05-20', status: 'Good' },
//     { id: 2, type: 'Grain Mix', quantity: '120 kg', lastDelivery: '2023-05-25', status: 'Low' },
//     { id: 3, type: 'Mineral Supplement', quantity: '15 kg', lastDelivery: '2023-05-10', status: 'Critical' }
//   ]

//   return (
//     <div className='min-h-screen p-5'>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Feeding Management</h1>
//         <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <FiPlus className="mr-2" /> Add New Record
//         </button>
//       </div>
      
//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'schedule' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('schedule')}
//         >
//           <FiCalendar className="mr-2" /> Feeding Schedule
//         </button>
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'inventory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('inventory')}
//         >
//           <FiClipboard className="mr-2" /> Feed Inventory
//         </button>
//       </div>
      
//       {activeTab === 'schedule' ? (
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feed Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {feedingSchedule.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.feedType}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assignedTo}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
//                       <button className="text-red-600 hover:text-red-900">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {feedInventory.map((item) => (
//             <div key={item.id} className="bg-white p-6 rounded-lg shadow">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-lg font-semibold">{item.type}</h3>
//                 <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                   item.status === 'Good' ? 'bg-green-100 text-green-800' :
//                   item.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
//                 }`}>
//                   {item.status}
//                 </span>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Quantity:</span>
//                   <span className="font-medium">{item.quantity}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Last Delivery:</span>
//                   <span>{item.lastDelivery}</span>
//                 </div>
//               </div>
//               <div className="mt-6 pt-4 border-t border-gray-100">
//                 <button className="w-full py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
//                   Order More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Feeding
import { useState } from 'react'
import { FiPlus, FiCalendar, FiClipboard, FiEdit2, FiTrash2, FiInfo, FiClock, FiTruck, FiFilter, FiSearch } from 'react-icons/fi'

const Feeding = () => {
  const [activeTab, setActiveTab] = useState('schedule')
  const [showModal, setShowModal] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [animalTypeFilter, setAnimalTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  // Feeding data for all animal types
  const feedingData = {
    schedule: [
      { 
        id: 1, 
        time: '06:00 AM', 
        feedType: 'Alfalfa Hay', 
        quantity: '20 kg', 
        assignedTo: 'Barn A', 
        animalType: 'Goat',
        status: 'Active',
        notes: 'For adult goats only'
      },
      { 
        id: 2, 
        time: '12:00 PM', 
        feedType: 'Grain Mix', 
        quantity: '15 kg', 
        assignedTo: 'All Barns', 
        animalType: 'All',
        status: 'Active',
        notes: 'Standard grain mixture'
      },
      { 
        id: 3, 
        time: '05:00 PM', 
        feedType: 'Pasture Grass', 
        quantity: 'Free graze', 
        assignedTo: 'Pasture 1', 
        animalType: 'Sheep',
        status: 'Active',
        notes: 'Rotational grazing'
      },
      { 
        id: 4, 
        time: '07:00 AM', 
        feedType: 'Corn Silage', 
        quantity: '50 kg', 
        assignedTo: 'Barn C', 
        animalType: 'Cattle',
        status: 'Pending',
        notes: 'For beef cattle'
      },
      { 
        id: 5, 
        time: '03:00 PM', 
        feedType: 'Layer Pellets', 
        quantity: '10 kg', 
        assignedTo: 'Coop A', 
        animalType: 'Poultry',
        status: 'Active',
        notes: 'For egg-laying hens'
      }
    ],
    inventory: [
      { 
        id: 1, 
        type: 'Alfalfa Hay', 
        quantity: '450 kg', 
        lastDelivery: '2023-05-20', 
        status: 'Good',
        animalType: 'Goat/Sheep',
        supplier: 'Green Fields Co.'
      },
      { 
        id: 2, 
        type: 'Grain Mix', 
        quantity: '120 kg', 
        lastDelivery: '2023-05-25', 
        status: 'Low',
        animalType: 'All',
        supplier: 'Farmers Supply'
      },
      { 
        id: 3, 
        type: 'Corn Silage', 
        quantity: '800 kg', 
        lastDelivery: '2023-05-15', 
        status: 'Good',
        animalType: 'Cattle',
        supplier: 'Midwest Feeds'
      },
      { 
        id: 4, 
        type: 'Layer Pellets', 
        quantity: '25 kg', 
        lastDelivery: '2023-06-01', 
        status: 'Critical',
        animalType: 'Poultry',
        supplier: 'Avian Nutrition'
      },
      { 
        id: 5, 
        type: 'Mineral Blocks', 
        quantity: '12 units', 
        lastDelivery: '2023-05-10', 
        status: 'Low',
        animalType: 'All',
        supplier: 'Mineral Solutions'
      }
    ]
  }

  const filteredSchedule = feedingData.schedule.filter(item => {
    const matchesSearch = item.feedType.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAnimalType = animalTypeFilter === 'all' || item.animalType.toLowerCase() === animalTypeFilter.toLowerCase()
    const matchesStatus = statusFilter === 'all' || item.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesAnimalType && matchesStatus
  })

  const filteredInventory = feedingData.inventory.filter(item => {
    const matchesSearch = item.type.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAnimalType = animalTypeFilter === 'all' || item.animalType.toLowerCase().includes(animalTypeFilter.toLowerCase())
    const matchesStatus = statusFilter === 'all' || item.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesAnimalType && matchesStatus
  })

  const handleAddNew = () => {
    setSelectedRecord(null)
    setShowModal(true)
  }

  const handleEdit = (record) => {
    setSelectedRecord(record)
    setShowModal(true)
  }

  return (
    <div className='min-h-screen p-5 bg-gray-50'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Animal Feeding Management</h1>
          {/* <p className="text-sm text-gray-600">Manage feeding schedules and inventory for all animals</p> */}
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleAddNew}
        >
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
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={`Search ${activeTab === 'schedule' ? 'feed type or location' : 'feed type or supplier'}...`}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-500" />
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setAnimalTypeFilter(e.target.value)}
                value={animalTypeFilter}
              >
                <option value="all">All Animal Types</option>
                <option value="goat">Goats</option>
                <option value="sheep">Sheep</option>
                <option value="cattle">Cattle</option>
                <option value="poultry">Poultry</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiClock className="mr-2 text-gray-400" />
                        <span className="font-medium">{item.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.feedType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.animalType === 'Goat' ? 'bg-purple-100 text-purple-800' :
                        item.animalType === 'Sheep' ? 'bg-green-100 text-green-800' :
                        item.animalType === 'Cattle' ? 'bg-blue-100 text-blue-800' :
                        item.animalType === 'Poultry' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.animalType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assignedTo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'Active' ? 'bg-green-100 text-green-800' :
                        item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleEdit(item)}
                        >
                          <FiEdit2 />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => {/* Delete functionality */}}
                        >
                          <FiTrash2 />
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => setSelectedRecord(item)}
                        >
                          <FiInfo />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInventory.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{item.type}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Good' ? 'bg-green-100 text-green-800' :
                  item.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{item.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">For:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    item.animalType.includes('Goat') ? 'bg-purple-100 text-purple-800' :
                    item.animalType.includes('Sheep') ? 'bg-green-100 text-green-800' :
                    item.animalType.includes('Cattle') ? 'bg-blue-100 text-blue-800' :
                    item.animalType.includes('Poultry') ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.animalType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Delivery:</span>
                  <span>{new Date(item.lastDelivery).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Supplier:</span>
                  <span className="text-sm">{item.supplier}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-2">
                <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 flex items-center justify-center">
                  <FiEdit2 className="mr-1" /> Edit
                </button>
                <button className="flex-1 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 flex items-center justify-center">
                  <FiTruck className="mr-1" /> Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Record Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {activeTab === 'schedule' ? 'Feeding Schedule Details' : 'Feed Inventory Details'}
                  </h2>
                  <p className="text-sm text-gray-600">Record ID: {selectedRecord.id}</p>
                </div>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedRecord(null)}
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTab === 'schedule' ? (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Schedule Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Time:</span> {selectedRecord.time}</p>
                        <p><span className="text-gray-600">Feed Type:</span> {selectedRecord.feedType}</p>
                        <p><span className="text-gray-600">Quantity:</span> {selectedRecord.quantity}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Assignment</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Animal Type:</span> {selectedRecord.animalType}</p>
                        <p><span className="text-gray-600">Location:</span> {selectedRecord.assignedTo}</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            selectedRecord.status === 'Active' ? 'bg-green-100 text-green-800' :
                            selectedRecord.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {selectedRecord.status}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                      <h3 className="font-medium text-gray-800 mb-2">Notes</h3>
                      <p className="text-gray-700">{selectedRecord.notes || 'No additional notes'}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Feed Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Type:</span> {selectedRecord.type}</p>
                        <p><span className="text-gray-600">Quantity:</span> {selectedRecord.quantity}</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            selectedRecord.status === 'Good' ? 'bg-green-100 text-green-800' :
                            selectedRecord.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {selectedRecord.status}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Supply Details</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">For:</span> {selectedRecord.animalType}</p>
                        <p><span className="text-gray-600">Last Delivery:</span> {new Date(selectedRecord.lastDelivery).toLocaleDateString()}</p>
                        <p><span className="text-gray-600">Supplier:</span> {selectedRecord.supplier}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedRecord(null)}
                >
                  Close
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => {
                    handleEdit(selectedRecord)
                    setSelectedRecord(null)
                  }}
                >
                  Edit Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedRecord ? 'Edit Record' : 'Add New Record'}
                </h2>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>

              <form className="mt-6 space-y-4">
                {activeTab === 'schedule' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Time</label>
                      <input
                        type="time"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.time || ''}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Feed Type</label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>Alfalfa Hay</option>
                        <option>Grain Mix</option>
                        <option>Corn Silage</option>
                        <option>Pasture Grass</option>
                        <option>Layer Pellets</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Quantity</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.quantity || ''}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Animal Type</label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>All</option>
                        <option>Goat</option>
                        <option>Sheep</option>
                        <option>Cattle</option>
                        <option>Poultry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.assignedTo || ''}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Notes</label>
                      <textarea
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.notes || ''}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Feed Type</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.type || ''}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Quantity</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.quantity || ''}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Animal Type</label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>All</option>
                        <option>Goat</option>
                        <option>Sheep</option>
                        <option>Cattle</option>
                        <option>Poultry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Supplier</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={selectedRecord?.supplier || ''}
                      />
                    </div>
                  </>
                )}

                <div className="pt-4 mt-6 flex justify-end space-x-3 border-t border-gray-200">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {selectedRecord ? 'Update Record' : 'Add Record'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feeding