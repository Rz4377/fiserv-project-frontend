
import React from 'react';

const FilteredResponse = ({ filteredResponse }) => {
  return (
    <div>
      {filteredResponse && (
        <>
          <h3>Filtered Response</h3>
          <p>{filteredResponse}</p>
        </>
      )}
    </div>
  );
};

export default FilteredResponse;