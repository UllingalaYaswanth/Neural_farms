import { useState } from 'react';
import { FiPlus, FiCalendar, FiUsers, FiFilter, FiSearch } from 'react-icons/fi';

const Breeding = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [searchTerm, setSearchTerm] = useState('');

  const breedingRecords = [
    { id: 1, doeId: 101, doeName: 'Daisy', buckId: 102, buckName: 'Rocky', date: '2023-05-15', dueDate: '2023-10-10', status: 'Confirmed' },
    { id: 2, doeId: 103, doeName: 'Luna', buckId: 102, buckName: 'Rocky', date: '2023-05-20', dueDate: '2023-10-15', status: 'Confirmed' },
    { id: 3, doeId: 105, doeName: 'Bella', buckId: 102, buckName: 'Rocky', date: '2023-05-10', dueDate: '2023-10-05', status: 'Suspected' }
  ];

  const upcomingBirths = [
    { id: 1, doeId: 101, doeName: 'Daisy', dueDate: '2023-10-10', expectedKids: 2, notes: 'First pregnancy' },
    { id: 2, doeId: 103, doeName: 'Luna', dueDate: '2023-10-15', expectedKids: 3, notes: 'Third pregnancy' }
  ];

  return (
    <div className='min-h-screen p-5'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Breeding Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
              placeholder="Search by doe name or ID..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FiFilter className="text-gray-500" />
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Suspected</option>
            </select>
          </div>
        </div>
      </div>

      {activeTab === 'records' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buck</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breeding Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {breedingRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">#{record.doeId}</div>
                      <div className="text-sm text-gray-500">{record.doeName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">#{record.buckId}</div>
                      <div className="text-sm text-gray-500">{record.buckName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingBirths.map((birth) => {
            const dueInDays = Math.max(
              Math.floor((new Date(birth.dueDate) - new Date()) / (1000 * 60 * 60 * 24)),
              0
            );

            return (
              <div key={birth.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{birth.doeName}</h3>
                    <p className="text-sm text-gray-600">ID: #{birth.doeId}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
                    Due in {dueInDays} days
                  </span>
                </div>
                <button className="w-full py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                  View Pregnancy Details
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breeding;
