// import { useState } from 'react'
// import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiInfo } from 'react-icons/fi'

// const Animals = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [activeTab, setActiveTab] = useState('all')
//   const [selectedGoat, setSelectedGoat] = useState(null)
  
//   const animals = [
//     { 
//       id: 'GT-2023-001', 
//       earTag: 'A123', 
//       gender: 'Female', 
//       age: '2 years', 
//       weight: '32 kg', 
//       status: 'Healthy', 
//       barn: 'A',
//       breed: 'Saanen',
//       acquisitionDate: '2021-05-15',
//       notes: 'High milk yield'
//     },
//     { 
//       id: 'GT-2023-002', 
//       earTag: 'B456', 
//       gender: 'Male', 
//       age: '3 years', 
//       weight: '45 kg', 
//       status: 'Healthy', 
//       barn: 'B',
//       breed: 'Boer',
//       acquisitionDate: '2020-06-20',
//       notes: 'Primary breeder'
//     },
//     { 
//       id: 'GT-2023-003', 
//       earTag: 'A789', 
//       gender: 'Female', 
//       age: '1 year', 
//       weight: '28 kg', 
//       status: 'Pregnant', 
//       barn: 'A',
//       breed: 'Alpine',
//       acquisitionDate: '2022-07-10',
//       notes: 'First pregnancy'
//     },
//     { 
//       id: 'GT-2023-004', 
//       earTag: 'N012', 
//       gender: 'Male', 
//       age: '4 months', 
//       weight: '15 kg', 
//       status: 'Kid', 
//       barn: 'Nursery',
//       breed: 'Mixed',
//       acquisitionDate: '2023-08-05',
//       notes: 'From GT-2023-001'
//     },
//     { 
//       id: 'GT-2023-005', 
//       earTag: 'Q345', 
//       gender: 'Female', 
//       age: '5 years', 
//       weight: '38 kg', 
//       status: 'Sick', 
//       barn: 'Quarantine',
//       breed: 'Nubian',
//       acquisitionDate: '2018-09-12',
//       notes: 'Treating for parasites'
//     }
//   ]

//   const filteredAnimals = animals.filter(goat => {
//     const matchesSearch = goat.id.includes(searchTerm) || 
//                          goat.earTag.includes(searchTerm)
//     const matchesTab = activeTab === 'all' || goat.status.toLowerCase() === activeTab.toLowerCase()
//     return matchesSearch && matchesTab
//   })

//   return (
//     <div className='min-h-screen p-5 bg-gray-50'>
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Goat Registry</h1>
//           <p className="text-sm text-gray-600">Track and manage your herd using unique identifiers</p>
//         </div>
//         <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <FiPlus className="mr-2" /> Register New Goat
//         </button>
//       </div>
      
//       {/* Filters and Search */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="relative flex-1">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FiSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by ID or ear tag..."
//               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <FiFilter className="text-gray-500" />
//             <select 
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               onChange={(e) => setActiveTab(e.target.value)}
//               value={activeTab}
//             >
//               <option value="all">All Animals</option>
//               <option value="healthy">Healthy</option>
//               <option value="pregnant">Pregnant</option>
//               <option value="sick">Sick</option>
//               <option value="kid">Kids</option>
//             </select>
//           </div>
//         </div>
//       </div>
      
//       {/* Animals Table */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System ID</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ear Tag</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barn</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredAnimals.map((goat) => (
//                 <tr 
//                   key={goat.id} 
//                   className="hover:bg-gray-50 cursor-pointer"
//                   onClick={() => setSelectedGoat(goat)}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-blue-600">{goat.id}</div>
//                     <div className="text-xs text-gray-500">{goat.breed}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{goat.earTag}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.gender}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.age}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.weight}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       goat.status === 'Healthy' ? 'bg-green-100 text-green-800' :
//                       goat.status === 'Pregnant' ? 'bg-purple-100 text-purple-800' :
//                       goat.status === 'Sick' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {goat.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.barn}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button 
//                         className="text-blue-600 hover:text-blue-900"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           // Edit functionality
//                         }}
//                       >
//                         <FiEdit2 />
//                       </button>
//                       <button 
//                         className="text-red-600 hover:text-red-900"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           // Delete functionality
//                         }}
//                       >
//                         <FiTrash2 />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Goat Detail Modal */}
//       {selectedGoat && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Goat Details</h2>
//                   <p className="text-sm text-gray-600">System ID: {selectedGoat.id}</p>
//                 </div>
//                 <button 
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={() => setSelectedGoat(null)}
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-medium text-gray-800 mb-2">Identification</h3>
//                   <div className="space-y-2">
//                     <p><span className="text-gray-600">Ear Tag:</span> {selectedGoat.earTag}</p>
//                     <p><span className="text-gray-600">Gender:</span> {selectedGoat.gender}</p>
//                     <p><span className="text-gray-600">Breed:</span> {selectedGoat.breed}</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-medium text-gray-800 mb-2">Physical Attributes</h3>
//                   <div className="space-y-2">
//                     <p><span className="text-gray-600">Age:</span> {selectedGoat.age}</p>
//                     <p><span className="text-gray-600">Weight:</span> {selectedGoat.weight}</p>
//                     <p><span className="text-gray-600">Status:</span> 
//                       <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         selectedGoat.status === 'Healthy' ? 'bg-green-100 text-green-800' :
//                         selectedGoat.status === 'Pregnant' ? 'bg-purple-100 text-purple-800' :
//                         selectedGoat.status === 'Sick' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {selectedGoat.status}
//                       </span>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-medium text-gray-800 mb-2">Location</h3>
//                   <div className="space-y-2">
//                     <p><span className="text-gray-600">Barn:</span> {selectedGoat.barn}</p>
//                     <p><span className="text-gray-600">Acquisition Date:</span> {selectedGoat.acquisitionDate}</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-medium text-gray-800 mb-2">Notes</h3>
//                   <p className="text-gray-700">{selectedGoat.notes}</p>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end space-x-3">
//                 <button 
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                   onClick={() => setSelectedGoat(null)}
//                 >
//                   Close
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                   onClick={() => {
//                     // Edit functionality
//                     setSelectedGoat(null);
//                   }}
//                 >
//                   Edit Record
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Animals

import { useState } from 'react'
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiInfo } from 'react-icons/fi'

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [activeType, setActiveType] = useState('all')
  
  const animals = [
    // Goats
    { 
      id: 'GT-2023-001', 
      type: 'Goat',
      earTag: 'A123', 
      gender: 'Female', 
      age: '2 years', 
      weight: '32 kg', 
      status: 'Healthy', 
      barn: 'A',
      breed: 'Saanen',
      acquisitionDate: '2021-05-15',
      notes: 'High milk yield'
    },
    { 
      id: 'GT-2023-002', 
      type: 'Goat',
      earTag: 'B456', 
      gender: 'Male', 
      age: '3 years', 
      weight: '45 kg', 
      status: 'Healthy', 
      barn: 'B',
      breed: 'Boer',
      acquisitionDate: '2020-06-20',
      notes: 'Primary breeder'
    },
    
    // Sheep
    { 
      id: 'SH-2023-001', 
      type: 'Sheep',
      earTag: 'S123', 
      gender: 'Female', 
      age: '3 years', 
      weight: '55 kg', 
      status: 'Pregnant', 
      barn: 'C',
      breed: 'Dorper',
      acquisitionDate: '2020-07-10',
      notes: 'Expected twins'
    },
    { 
      id: 'SH-2023-002', 
      type: 'Sheep',
      earTag: 'S456', 
      gender: 'Male', 
      age: '4 years', 
      weight: '75 kg', 
      status: 'Healthy', 
      barn: 'D',
      breed: 'Suffolk',
      acquisitionDate: '2019-08-15',
      notes: 'Primary ram'
    },
    
    // Cattle
    { 
      id: 'CT-2023-001', 
      type: 'Cattle',
      earTag: 'C123', 
      gender: 'Female', 
      age: '5 years', 
      weight: '450 kg', 
      status: 'Healthy', 
      barn: 'E',
      breed: 'Angus',
      acquisitionDate: '2018-09-20',
      notes: 'High quality beef'
    },
    { 
      id: 'CT-2023-002', 
      type: 'Cattle',
      earTag: 'C456', 
      gender: 'Male', 
      age: '2 years', 
      weight: '350 kg', 
      status: 'Sick', 
      barn: 'Quarantine',
      breed: 'Hereford',
      acquisitionDate: '2021-10-25',
      notes: 'Treating for respiratory infection'
    },
    
    // Poultry
    { 
      id: 'PL-2023-001', 
      type: 'Poultry',
      earTag: 'P123', 
      gender: 'Female', 
      age: '8 months', 
      weight: '1.8 kg', 
      status: 'Healthy', 
      barn: 'Coop A',
      breed: 'Rhode Island Red',
      acquisitionDate: '2023-02-15',
      notes: 'Good egg layer'
    },
    { 
      id: 'PL-2023-002', 
      type: 'Poultry',
      earTag: 'P456', 
      gender: 'Male', 
      age: '1 year', 
      weight: '2.5 kg', 
      status: 'Healthy', 
      barn: 'Coop B',
      breed: 'Leghorn',
      acquisitionDate: '2022-12-10',
      notes: 'Rooster for breeding'
    }
  ]

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.id.includes(searchTerm) || 
                         animal.earTag.includes(searchTerm)
    const matchesTab = activeTab === 'all' || animal.status.toLowerCase() === activeTab.toLowerCase()
    const matchesType = activeType === 'all' || animal.type.toLowerCase() === activeType.toLowerCase()
    return matchesSearch && matchesTab && matchesType
  })

  return (
    <div className='min-h-screen p-5 bg-gray-50'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Animal Registry</h1>
          {/* <p className="text-sm text-gray-600">Track and manage all your farm animals</p> */}
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus className="mr-2" /> Register New Animal
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by ID or ear tag..."
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
                onChange={(e) => setActiveType(e.target.value)}
                value={activeType}
              >
                <option value="all">All Types</option>
                <option value="goat">Goats</option>
                <option value="sheep">Sheep</option>
                <option value="cattle">Cattle</option>
                <option value="poultry">Poultry</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setActiveTab(e.target.value)}
                value={activeTab}
              >
                <option value="all">All Statuses</option>
                <option value="healthy">Healthy</option>
                <option value="pregnant">Pregnant</option>
                <option value="sick">Sick</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animals Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ear Tag</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barn</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAnimals.map((animal) => (
                <tr 
                  key={animal.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedAnimal(animal)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{animal.id}</div>
                    <div className="text-xs text-gray-500">{animal.breed}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      animal.type === 'Goat' ? 'bg-purple-100 text-purple-800' :
                      animal.type === 'Sheep' ? 'bg-green-100 text-green-800' :
                      animal.type === 'Cattle' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {animal.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{animal.earTag}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      animal.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                      animal.status === 'Pregnant' ? 'bg-purple-100 text-purple-800' :
                      animal.status === 'Sick' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {animal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.barn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Edit functionality
                        }}
                      >
                        <FiEdit2 />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Delete functionality
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Animal Detail Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{selectedAnimal.type} Details</h2>
                  <p className="text-sm text-gray-600">System ID: {selectedAnimal.id}</p>
                </div>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedAnimal(null)}
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Identification</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Type:</span> {selectedAnimal.type}</p>
                    <p><span className="text-gray-600">Ear Tag:</span> {selectedAnimal.earTag}</p>
                    <p><span className="text-gray-600">Gender:</span> {selectedAnimal.gender}</p>
                    <p><span className="text-gray-600">Breed:</span> {selectedAnimal.breed}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Physical Attributes</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Age:</span> {selectedAnimal.age}</p>
                    <p><span className="text-gray-600">Weight:</span> {selectedAnimal.weight}</p>
                    <p><span className="text-gray-600">Status:</span> 
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedAnimal.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                        selectedAnimal.status === 'Pregnant' ? 'bg-purple-100 text-purple-800' :
                        selectedAnimal.status === 'Sick' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedAnimal.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Location</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Barn:</span> {selectedAnimal.barn}</p>
                    <p><span className="text-gray-600">Acquisition Date:</span> {selectedAnimal.acquisitionDate}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Notes</h3>
                  <p className="text-gray-700">{selectedAnimal.notes}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedAnimal(null)}
                >
                  Close
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => {
                    // Edit functionality
                    setSelectedAnimal(null);
                  }}
                >
                  Edit Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Animals