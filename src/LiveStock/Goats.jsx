import { useState } from 'react'
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2 } from 'react-icons/fi'

const Goats = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  
  const goats = [
    { id: 101, name: 'Daisy', gender: 'Female', age: '2 years', weight: '32 kg', status: 'Healthy', barn: 'A' },
    { id: 102, name: 'Rocky', gender: 'Male', age: '3 years', weight: '45 kg', status: 'Healthy', barn: 'B' },
    { id: 103, name: 'Luna', gender: 'Female', age: '1 year', weight: '28 kg', status: 'Pregnant', barn: 'A' },
    { id: 104, name: 'Max', gender: 'Male', age: '4 months', weight: '15 kg', status: 'Kid', barn: 'Nursery' },
    { id: 105, name: 'Bella', gender: 'Female', age: '5 years', weight: '38 kg', status: 'Sick', barn: 'Quarantine' }
  ]

  const filteredGoats = goats.filter(goat => {
    const matchesSearch = goat.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         goat.id.toString().includes(searchTerm)
    const matchesTab = activeTab === 'all' || goat.status.toLowerCase() === activeTab.toLowerCase()
    return matchesSearch && matchesTab
  })

  return (
    <div className='min-h-screen p-5'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Goats Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FiPlus className="mr-2" /> Add New Goat
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
              placeholder="Search by name or ID..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <FiFilter className="text-gray-500" />
            <select 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setActiveTab(e.target.value)}
              value={activeTab}
            >
              <option value="all">All Goats</option>
              <option value="healthy">Healthy</option>
              <option value="pregnant">Pregnant</option>
              <option value="sick">Sick</option>
              <option value="kid">Kids</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Goats Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barn</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGoats.map((goat) => (
                <tr key={goat.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{goat.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      goat.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                      goat.status === 'Pregnant' ? 'bg-purple-100 text-purple-800' :
                      goat.status === 'Sick' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {goat.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{goat.barn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FiEdit2 />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
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
    </div>
  )
}

export default Goats