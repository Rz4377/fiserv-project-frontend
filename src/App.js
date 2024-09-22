
import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import MultiSelectFilter from './components/MultiSelectFilter';
import FilteredResponse from './components/FilteredResponse';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState('');

  const handleJsonInputChange = (e) => {
    const inputValue = e.target.value;
    setJsonInput(inputValue);
    validateJson(inputValue);
  };

  const validateJson = (inputValue) => {
    try {
      JSON.parse(inputValue);
      setIsValidJson(true);
    } catch (err) {
      setIsValidJson(false);
    }
  };

  const handleFilterChange = (selected) => {
    setSelectedFilters(selected || []);
  };

  const applyFilters = (data) => {
    let filteredData = data;

    if (isSelected('Alphabets')) {
      filteredData = filterAlphabets(filteredData);
    }

    if (isSelected('Numbers')) {
      filteredData = filterNumbers(filteredData);
    }

    if (isSelected('Lowercase')) {
      filteredData = filterLowercase(filteredData);
    }

    return filteredData;
  };

  const isSelected = (filterName) => {
    return selectedFilters.some((filter) => filter.value === filterName);
  };

  const filterAlphabets = (data) => {
    return data.filter((item) => /^[A-Za-z]+$/.test(item));
  };

  const filterNumbers = (data) => {
    return data.filter((item) => /^[0-9]+$/.test(item));
  };

  const filterLowercase = (data) => {
    const lowercaseData = data.filter((item) => /^[a-z]+$/.test(item));
    lowercaseData.sort();
    return lowercaseData.slice(-1); 
  };

  const handleSubmit = () => {
    if (!isValidJson) return;

    const parsedData = JSON.parse(jsonInput).data;
    const filteredData = applyFilters(parsedData);
    setFilteredResponse(filteredData.join(', '));
  };

  return (
    <div className="App">
      <h1>JSON Filter App</h1>

      <JsonInput
        jsonInput={jsonInput}
        handleJsonInputChange={handleJsonInputChange}
        isValidJson={isValidJson}
      />

      <MultiSelectFilter
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
      />

      <button onClick={handleSubmit} disabled={!isValidJson}>
        Submit
      </button>

      <FilteredResponse filteredResponse={filteredResponse} />
    </div>
  );
}

export default App;