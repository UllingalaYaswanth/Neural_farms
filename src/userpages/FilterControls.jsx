import React from 'react';

const FilterControls = ({ filter, handleFilterChange }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <select
        name="serviceType"
        value={filter.serviceType}
        onChange={handleFilterChange}
        className="px-3 py-2 border rounded-md"
      >
        <option value="">All Service Types</option>
        <option value="Soil Testing">Soil Testing</option>
        <option value="Drone Service">Drone Service</option>
        <option value="Irrigation Services">Irrigation Services</option>
        <option value="Pest and Disease Monitoring">Pest and Disease Monitoring</option>
      </select>
    </div>
  );
};

export default FilterControls;