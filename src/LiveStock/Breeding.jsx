// import { useState } from 'react';
// import { FiPlus, FiCalendar, FiUsers, FiFilter, FiSearch } from 'react-icons/fi';

// const Breeding = () => {
//   const [activeTab, setActiveTab] = useState('records');
//   const [searchTerm, setSearchTerm] = useState('');

//   const breedingRecords = [
//     { id: 1, doeId: 101, doeName: 'Daisy', buckId: 102, buckName: 'Rocky', date: '2023-05-15', dueDate: '2023-10-10', status: 'Confirmed' },
//     { id: 2, doeId: 103, doeName: 'Luna', buckId: 102, buckName: 'Rocky', date: '2023-05-20', dueDate: '2023-10-15', status: 'Confirmed' },
//     { id: 3, doeId: 105, doeName: 'Bella', buckId: 102, buckName: 'Rocky', date: '2023-05-10', dueDate: '2023-10-05', status: 'Suspected' }
//   ];

//   const upcomingBirths = [
//     { id: 1, doeId: 101, doeName: 'Daisy', dueDate: '2023-10-10', expectedKids: 2, notes: 'First pregnancy' },
//     { id: 2, doeId: 103, doeName: 'Luna', dueDate: '2023-10-15', expectedKids: 3, notes: 'Third pregnancy' }
//   ];

//   return (
//     <div className='min-h-screen p-5'>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Breeding Management</h1>
//         <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <FiPlus className="mr-2" /> New Breeding Record
//         </button>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'records' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('records')}
//         >
//           <FiCalendar className="mr-2" /> Breeding Records
//         </button>
//         <button
//           className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'births' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('births')}
//         >
//           <FiUsers className="mr-2" /> Upcoming Births
//         </button>
//       </div>

//       {/* Search and Filter */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="relative flex-1">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FiSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by doe name or ID..."
//               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FiFilter className="text-gray-500" />
//             <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//               <option>All Status</option>
//               <option>Confirmed</option>
//               <option>Suspected</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {activeTab === 'records' ? (
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doe</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buck</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breeding Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {breedingRecords.map((record) => (
//                   <tr key={record.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium">#{record.doeId}</div>
//                       <div className="text-sm text-gray-500">{record.doeName}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium">#{record.buckId}</div>
//                       <div className="text-sm text-gray-500">{record.buckName}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.dueDate}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         record.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {upcomingBirths.map((birth) => {
//             const dueInDays = Math.max(
//               Math.floor((new Date(birth.dueDate) - new Date()) / (1000 * 60 * 60 * 24)),
//               0
//             );

//             return (
//               <div key={birth.id} className="bg-white p-6 rounded-lg shadow">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-lg font-semibold">{birth.doeName}</h3>
//                     <p className="text-sm text-gray-600">ID: #{birth.doeId}</p>
//                   </div>
//                   <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
//                     Due in {dueInDays} days
//                   </span>
//                 </div>
//                 <button className="w-full py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
//                   View Pregnancy Details
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Breeding;


import { useState } from 'react';
import { FiPlus, FiCalendar, FiUsers, FiFilter, FiSearch, FiEdit2, FiTrash2, FiInfo, FiClock } from 'react-icons/fi';

const Breeding = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [animalTypeFilter, setAnimalTypeFilter] = useState('all');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Breeding data for all animal types
  const breedingData = {
    records: [
      { 
        id: 1, 
        femaleId: 'GT-101', 
        femaleName: 'Daisy', 
        maleId: 'GT-102', 
        maleName: 'Rocky', 
        type: 'Goat',
        breedingDate: '2023-05-15', 
        dueDate: '2023-10-10', 
        status: 'Confirmed',
        method: 'Natural',
        expectedOffspring: 2,
        notes: 'First breeding for Daisy'
      },
      { 
        id: 2, 
        femaleId: 'SH-201', 
        femaleName: 'Luna', 
        maleId: 'SH-202', 
        maleName: 'Thor', 
        type: 'Sheep',
        breedingDate: '2023-05-20', 
        dueDate: '2023-10-15', 
        status: 'Confirmed',
        method: 'AI',
        expectedOffspring: 3,
        notes: 'AI with premium genetics'
      },
      { 
        id: 3, 
        femaleId: 'CT-301', 
        femaleName: 'Bella', 
        maleId: 'CT-302', 
        maleName: 'Max', 
        type: 'Cattle',
        breedingDate: '2023-05-10', 
        dueDate: '2023-10-05', 
        status: 'Suspected',
        method: 'Natural',
        expectedOffspring: 1,
        notes: 'Need to confirm pregnancy'
      },
      { 
        id: 4, 
        femaleId: 'PL-401', 
        femaleName: 'Henny', 
        maleId: 'PL-402', 
        maleName: 'Rooster', 
        type: 'Poultry',
        breedingDate: '2023-06-01', 
        dueDate: '2023-06-21', 
        status: 'Confirmed',
        method: 'Natural',
        expectedOffspring: 12,
        notes: 'Incubation period'
      }
    ],
    upcomingBirths: [
      { 
        id: 1, 
        femaleId: 'GT-101', 
        femaleName: 'Daisy', 
        type: 'Goat',
        dueDate: '2023-10-10', 
        expectedOffspring: 2, 
        status: 'On Track',
        notes: 'First pregnancy, monitor closely',
        lastCheckup: '2023-08-15'
      },
      { 
        id: 2, 
        femaleId: 'SH-201', 
        femaleName: 'Luna', 
        type: 'Sheep',
        dueDate: '2023-10-15', 
        expectedOffspring: 3, 
        status: 'On Track',
        notes: 'Third pregnancy, experienced mother',
        lastCheckup: '2023-08-20'
      },
      { 
        id: 3, 
        femaleId: 'CT-301', 
        femaleName: 'Bella', 
        type: 'Cattle',
        dueDate: '2023-10-05', 
        expectedOffspring: 1, 
        status: 'High Risk',
        notes: 'First-time heifer, watch for dystocia',
        lastCheckup: '2023-08-10'
      }
    ]
  };

  const filteredRecords = breedingData.records.filter(record => {
    const matchesSearch = record.femaleName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.femaleId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesAnimalType = animalTypeFilter === 'all' || record.type.toLowerCase() === animalTypeFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesAnimalType;
  });

  const filteredBirths = breedingData.upcomingBirths.filter(birth => {
    const matchesSearch = birth.femaleName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         birth.femaleId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || birth.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesAnimalType = animalTypeFilter === 'all' || birth.type.toLowerCase() === animalTypeFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesAnimalType;
  });

  const handleAddNew = () => {
    setSelectedRecord(null);
    setShowModal(true);
  };

  const handleViewDetails = (record) => {
    setSelectedRecord(record);
  };

  const calculateDueInDays = (dueDate) => {
    return Math.max(
      Math.floor((new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24),
      0
    ));
  };

  return (
    <div className='min-h-screen p-5 bg-gray-50'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Breeding Management</h1>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleAddNew}
        >
          <FiPlus className="mr-2" /> New Breeding Record
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'records' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('records')}
        >
          <FiCalendar className="mr-2" /> Breeding Records
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm flex items-center ${activeTab === 'births' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('births')}
        >
          <FiUsers className="mr-2" /> Upcoming Births
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={`Search by ${activeTab === 'records' ? 'female name or ID' : 'mother name or ID'}...`}
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
                {activeTab === 'records' ? (
                  <>
                    <option value="confirmed">Confirmed</option>
                    <option value="suspected">Suspected</option>
                  </>
                ) : (
                  <>
                    <option value="on track">On Track</option>
                    <option value="high risk">High Risk</option>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Female</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Male</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breeding Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">#{record.femaleId}</div>
                      <div className="text-sm text-gray-500">{record.femaleName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">#{record.maleId}</div>
                      <div className="text-sm text-gray-500">{record.maleName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        record.type === 'Goat' ? 'bg-purple-100 text-purple-800' :
                        record.type === 'Sheep' ? 'bg-green-100 text-green-800' :
                        record.type === 'Cattle' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.breedingDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBirths.map((birth) => {
            const dueInDays = calculateDueInDays(birth.dueDate);
            
            return (
              <div key={birth.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{birth.femaleName}</h3>
                    <p className="text-sm text-gray-600">ID: #{birth.femaleId}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    dueInDays < 7 ? 'bg-red-100 text-red-800' :
                    dueInDays < 14 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    Due in {dueInDays} days
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Animal Type:</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      birth.type === 'Goat' ? 'bg-purple-100 text-purple-800' :
                      birth.type === 'Sheep' ? 'bg-green-100 text-green-800' :
                      birth.type === 'Cattle' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {birth.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span>{birth.dueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Offspring:</span>
                    <span>{birth.expectedOffspring}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      birth.status === 'On Track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {birth.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 flex items-center justify-center"
                    onClick={() => handleViewDetails(birth)}
                  >
                    <FiInfo className="mr-1" /> Details
                  </button>
                  <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 flex items-center justify-center">
                    <FiEdit2 className="mr-1" /> Log Birth
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Record Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">
                  {activeTab === 'records' ? 'Breeding Record Details' : 'Pregnancy Details'}
                </h2>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedRecord(null)}
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTab === 'records' ? (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Female Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">ID:</span> {selectedRecord.femaleId}</p>
                        <p><span className="text-gray-600">Name:</span> {selectedRecord.femaleName}</p>
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
                      <h3 className="font-medium text-gray-800 mb-2">Male Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">ID:</span> {selectedRecord.maleId}</p>
                        <p><span className="text-gray-600">Name:</span> {selectedRecord.maleName}</p>
                        <p><span className="text-gray-600">Breeding Method:</span> {selectedRecord.method}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Breeding Details</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Breeding Date:</span> {selectedRecord.breedingDate}</p>
                        <p><span className="text-gray-600">Due Date:</span> {selectedRecord.dueDate}</p>
                        <p><span className="text-gray-600">Expected Offspring:</span> {selectedRecord.expectedOffspring}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Status</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Status:</span> 
                          <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            selectedRecord.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {selectedRecord.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Mother Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">ID:</span> {selectedRecord.femaleId}</p>
                        <p><span className="text-gray-600">Name:</span> {selectedRecord.femaleName}</p>
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
                      <h3 className="font-medium text-gray-800 mb-2">Pregnancy Details</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Due Date:</span> {selectedRecord.dueDate}</p>
                        <p><span className="text-gray-600">Due In:</span> {calculateDueInDays(selectedRecord.dueDate)} days</p>
                        <p><span className="text-gray-600">Expected Offspring:</span> {selectedRecord.expectedOffspring}</p>
                        <p><span className="text-gray-600">Last Checkup:</span> {selectedRecord.lastCheckup}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800 mb-2">Status</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Status:</span> 
                          <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            selectedRecord.status === 'On Track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {selectedRecord.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                )}

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
                    setSelectedRecord(null);
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
                  {selectedRecord ? 'Edit Breeding Record' : 'Add New Breeding Record'}
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
                  <label className="block text-sm font-medium text-gray-700">Animal Type</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Goat</option>
                    <option>Sheep</option>
                    <option>Cattle</option>
                    <option>Poultry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Female ID</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.femaleId || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Male ID</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.maleId || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Breeding Method</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Natural</option>
                    <option>AI (Artificial Insemination)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Breeding Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.breedingDate || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expected Due Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={selectedRecord?.dueDate || ''}
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
  );
};

export default Breeding;