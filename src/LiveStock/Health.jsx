// import { useState } from 'react'
// import { FiPlus, FiActivity, FiAlertTriangle, FiCalendar } from 'react-icons/fi'

// const Health = () => {
//   const [activeTab, setActiveTab] = useState('records')
  
//   const healthRecords = [
//     { id: 1, goatId: 101, name: 'Daisy', issue: 'Routine Checkup', date: '2023-05-28', status: 'Completed' },
//     { id: 2, goatId: 105, name: 'Bella', issue: 'Worm Infection', date: '2023-05-27', status: 'Ongoing' },
//     { id: 3, goatId: 102, name: 'Rocky', issue: 'Vaccination', date: '2023-05-25', status: 'Completed' }
//   ]
  
//   const medications = [
//     { id: 1, name: 'Dewormer', quantity: '25 doses', nextDelivery: '2023-06-15' },
//     { id: 2, name: 'Antibiotics', quantity: '15 doses', nextDelivery: '2023-06-10' },
//     { id: 3, name: 'Vitamin Supplement', quantity: '30 doses', nextDelivery: '2023-06-20' }
//   ]

//   return (
//     <div className='min-h-screen p-5'>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Health Management</h1>
//         <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <FiPlus className="mr-2" /> Add New Record
//         </button>
//       </div>
      
//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'records' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('records')}
//         >
//           <FiActivity className="mr-2" /> Health Records
//         </button>
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'medications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('medications')}
//         >
//           <FiAlertTriangle className="mr-2" /> Medications
//         </button>
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'vaccinations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('vaccinations')}
//         >
//           <FiCalendar className="mr-2" /> Vaccination Schedule
//         </button>
//       </div>
      
//       {activeTab === 'records' && (
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goat ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Issue</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {healthRecords.map((record) => (
//                   <tr key={record.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{record.goatId}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.issue}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         record.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {record.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
//                       <button className="text-gray-600 hover:text-gray-900">Edit</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
      
//       {activeTab === 'medications' && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {medications.map((med) => (
//             <div key={med.id} className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-2">{med.name}</h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Quantity Available:</span>
//                   <span className="font-medium">{med.quantity}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Next Delivery:</span>
//                   <span>{med.nextDelivery}</span>
//                 </div>
//               </div>
//               <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-2">
//                 <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
//                   Order
//                 </button>
//                 <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100">
//                   Log Usage
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
      
//       {activeTab === 'vaccinations' && (
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg font-semibold">Upcoming Vaccinations</h2>
//             <button className="text-sm text-blue-600 hover:text-blue-800">
//               View Full Schedule
//             </button>
//           </div>
          
//           <div className="space-y-4">
//             {[
//               { id: 1, vaccine: 'CD&T', dueDate: '2023-06-10', goats: 'All adults' },
//               { id: 2, vaccine: 'Rabies', dueDate: '2023-06-15', goats: 'Barn A' },
//               { id: 3, vaccine: 'Pneumonia', dueDate: '2023-06-20', goats: 'Kids' }
//             ].map(item => (
//               <div key={item.id} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
//                 <div className="p-2 bg-blue-100 rounded-full mr-4">
//                   <FiCalendar className="text-blue-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-medium">{item.vaccine}</h3>
//                   <p className="text-sm text-gray-600">Due: {item.dueDate}</p>
//                   <p className="text-sm text-gray-600 mt-1">For: {item.goats}</p>
//                 </div>
//                 <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100">
//                   Schedule
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Health

import { useState } from 'react'
import { FiPlus, FiActivity, FiAlertTriangle, FiCalendar, FiFilter, FiSearch, FiEdit2, FiTrash2, FiInfo } from 'react-icons/fi'

const Health = () => {
  const [activeTab, setActiveTab] = useState('records')
  const [showModal, setShowModal] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [animalTypeFilter, setAnimalTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  // Health data for all animal types
  const healthData = {
    records: [
      { 
        id: 1, 
        animalId: 'GT-101', 
        name: 'Daisy', 
        type: 'Goat',
        issue: 'Routine Checkup', 
        date: '2023-05-28', 
        status: 'Completed',
        treatment: 'General examination - healthy',
        medication: 'None',
        notes: 'Weight gain observed since last visit'
      },
      { 
        id: 2, 
        animalId: 'SH-205', 
        name: 'Bella', 
        type: 'Sheep',
        issue: 'Worm Infection', 
        date: '2023-05-27', 
        status: 'Ongoing',
        treatment: 'Deworming medication',
        medication: 'Ivermectin 1ml/50kg',
        notes: 'Retest in 2 weeks'
      },
      { 
        id: 3, 
        animalId: 'CT-302', 
        name: 'Rocky', 
        type: 'Cattle',
        issue: 'Vaccination', 
        date: '2023-05-25', 
        status: 'Completed',
        treatment: 'Annual vaccination',
        medication: 'Blackleg vaccine',
        notes: 'No adverse reactions'
      },
      { 
        id: 4, 
        animalId: 'PL-401', 
        name: 'Clucky', 
        type: 'Poultry',
        issue: 'Respiratory Infection', 
        date: '2023-05-30', 
        status: 'Ongoing',
        treatment: 'Antibiotics in water',
        medication: 'Tylosin 1g/4L water',
        notes: 'Isolate from flock'
      }
    ],
    medications: [
      { 
        id: 1, 
        name: 'Dewormer', 
        type: 'Goat/Sheep',
        quantity: '25 doses', 
        remaining: '18 doses',
        lastUsed: '2023-05-27',
        nextDelivery: '2023-06-15',
        status: 'Adequate'
      },
      { 
        id: 2, 
        name: 'Antibiotics', 
        type: 'All',
        quantity: '15 doses', 
        remaining: '5 doses',
        lastUsed: '2023-05-30',
        nextDelivery: '2023-06-10',
        status: 'Low'
      },
      { 
        id: 3, 
        name: 'Vitamin Supplement', 
        type: 'All',
        quantity: '30 doses', 
        remaining: '28 doses',
        lastUsed: '2023-05-15',
        nextDelivery: '2023-06-20',
        status: 'Adequate'
      },
      { 
        id: 4, 
        name: 'Poultry Antibiotic', 
        type: 'Poultry',
        quantity: '500g powder', 
        remaining: '200g',
        lastUsed: '2023-05-30',
        nextDelivery: '2023-06-05',
        status: 'Critical'
      }
    ],
    vaccinations: [
      { 
        id: 1, 
        vaccine: 'CD&T', 
        type: 'Goat/Sheep',
        dueDate: '2023-06-10', 
        animals: 'All adults',
        status: 'Upcoming',
        lastAdministered: '2022-06-10'
      },
      { 
        id: 2, 
        vaccine: 'Rabies', 
        type: 'All',
        dueDate: '2023-06-15', 
        animals: 'Barn A',
        status: 'Upcoming',
        lastAdministered: '2022-06-15'
      },
      { 
        id: 3, 
        vaccine: 'Pneumonia', 
        type: 'Cattle',
        dueDate: '2023-06-20', 
        animals: 'All calves',
        status: 'Upcoming',
        lastAdministered: '2022-12-20'
      },
      { 
        id: 4, 
        vaccine: 'Newcastle', 
        type: 'Poultry',
        dueDate: '2023-06-05', 
        animals: 'All chickens',
        status: 'Due',
        lastAdministered: '2023-01-05'
      }
    ]
  }

  const filteredRecords = healthData.records.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.issue.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAnimalType = animalTypeFilter === 'all' || record.type.toLowerCase() === animalTypeFilter.toLowerCase()
    const matchesStatus = statusFilter === 'all' || record.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesAnimalType && matchesStatus
  })

  const filteredMedications = healthData.medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         med.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAnimalType = animalTypeFilter === 'all' || med.type.toLowerCase().includes(animalTypeFilter.toLowerCase())
    const matchesStatus = statusFilter === 'all' || med.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesAnimalType && matchesStatus
  })

  const filteredVaccinations = healthData.vaccinations.filter(vac => {
    const matchesSearch = vac.vaccine.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         vac.animals.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAnimalType = animalTypeFilter === 'all' || vac.type.toLowerCase().includes(animalTypeFilter.toLowerCase())
    const matchesStatus = statusFilter === 'all' || vac.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesAnimalType && matchesStatus
  })

  const handleAddNew = () => {
    setSelectedRecord(null)
    setShowModal(true)
  }

  const handleViewDetails = (record) => {
    setSelectedRecord(record)
  }

  return (
    <div className='min-h-screen p-5 bg-gray-50'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Animal Health Management</h1>
          {/* <p className="text-sm text-gray-600">Track health records, medications, and vaccinations for all animals</p> */}
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
          <FiCalendar className="mr-2" /> Vaccinations
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
              placeholder={`Search ${activeTab === 'records' ? 'animal or issue' : activeTab === 'medications' ? 'medication name' : 'vaccine name'}...`}
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
                {activeTab === 'records' && (
                  <>
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                  </>
                )}
                {activeTab === 'medications' && (
                  <>
                    <option value="adequate">Adequate</option>
                    <option value="low">Low</option>
                    <option value="critical">Critical</option>
                  </>
                )}
                {activeTab === 'vaccinations' && (
                  <>
                    <option value="upcoming">Upcoming</option>
                    <option value="due">Due</option>
                    <option value="overdue">Overdue</option>
                  </>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {activeTab === 'records' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.animalId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        record.type === 'Goat' ? 'bg-purple-100 text-purple-800' :
                        record.type === 'Sheep' ? 'bg-green-100 text-green-800' :
                        record.type === 'Cattle' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.type}
                      </span>
                    </td>
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
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleViewDetails(record)}
                        >
                          <FiInfo />
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => {/* Edit functionality */}}
                        >
                          <FiEdit2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : activeTab === 'medications' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedications.map((med) => (
            <div key={med.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{med.name}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  med.status === 'Adequate' ? 'bg-green-100 text-green-800' :
                  med.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {med.status}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">For:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    med.type.includes('Goat') ? 'bg-purple-100 text-purple-800' :
                    med.type.includes('Sheep') ? 'bg-green-100 text-green-800' :
                    med.type.includes('Cattle') ? 'bg-blue-100 text-blue-800' :
                    med.type.includes('Poultry') ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {med.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{med.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-medium">{med.remaining}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Used:</span>
                  <span>{med.lastUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Delivery:</span>
                  <span>{med.nextDelivery}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-2">
                <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 flex items-center justify-center">
                  <FiEdit2 className="mr-1" /> Edit
                </button>
                <button className="flex-1 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 flex items-center justify-center">
                  <FiPlus className="mr-1" /> Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccine</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Administered</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVaccinations.map((vac) => (
                  <tr key={vac.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vac.vaccine}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        vac.type.includes('Goat') ? 'bg-purple-100 text-purple-800' :
                        vac.type.includes('Sheep') ? 'bg-green-100 text-green-800' :
                        vac.type.includes('Cattle') ? 'bg-blue-100 text-blue-800' :
                        vac.type.includes('Poultry') ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {vac.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vac.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vac.animals}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vac.lastAdministered}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        vac.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                        vac.status === 'Due' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {vac.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">Schedule</button>
                        <button className="text-gray-600 hover:text-gray-900">Log</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Record Detail Modal */}
      {selectedRecord && activeTab === 'records' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Health Record Details</h2>
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
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Animal Information</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">ID:</span> {selectedRecord.animalId}</p>
                    <p><span className="text-gray-600">Name:</span> {selectedRecord.name}</p>
                    <p><span className="text-gray-600">Type:</span> 
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedRecord.type === 'Goat' ? 'bg-purple-100 text-purple-800' :
                        selectedRecord.type === 'Sheep' ? 'bg-green-100 text-green-800' :
                        selectedRecord.type === 'Cattle' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedRecord.type}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Health Details</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Issue:</span> {selectedRecord.issue}</p>
                    <p><span className="text-gray-600">Date:</span> {selectedRecord.date}</p>
                    <p><span className="text-gray-600">Status:</span> 
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedRecord.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedRecord.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Treatment</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Treatment:</span> {selectedRecord.treatment}</p>
                    <p><span className="text-gray-600">Medication:</span> {selectedRecord.medication}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-medium text-gray-800 mb-2">Notes</h3>
                  <p className="text-gray-700">{selectedRecord.notes}</p>
                </div>
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
                    // Edit functionality
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
                  {selectedRecord ? 'Edit Health Record' : 'Add New Health Record'}
                </h2>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Animal ID</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.animalId || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Animal Type</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Goat</option>
                    <option>Sheep</option>
                    <option>Cattle</option>
                    <option>Poultry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Health Issue</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.issue || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.date || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Treatment</label>
                  <textarea
                    rows={2}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.treatment || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Medication</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.medication || ''}
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

export default Health