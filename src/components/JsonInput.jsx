
import React from 'react';

const JsonInput = ({ jsonInput, handleJsonInputChange, isValidJson }) => {
  return (
    <div>
      <label>API Input</label>
      <textarea
        value={jsonInput}
        onChange={handleJsonInputChange}
        placeholder='enter the data here'
      />
      {!isValidJson && <p style={{ color: 'red' }}>Invalid JSON format</p>}
    </div>
  );
};

export default JsonInput;