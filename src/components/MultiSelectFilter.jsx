
import React from 'react';
import Select from 'react-select';

const MultiSelectFilter = ({ selectedFilters, handleFilterChange }) => {
  const filterOptions = [
    { value: 'Alphabets', label: 'Alphabets' },
    { value: 'Numbers', label: 'Numbers' },
    { value: 'Lowercase', label: 'Highest lowercase alphabet' }
  ];

  return (
    <div>
      <label>Multi Filter</label>
      <Select
        isMulti
        options={filterOptions}
        value={selectedFilters}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default MultiSelectFilter;