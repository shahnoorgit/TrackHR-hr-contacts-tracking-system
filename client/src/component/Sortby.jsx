import React, { useState } from "react";

function SortOptions() {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  return (
    <div className="relative">
      <button className="btn" onClick={toggleSortOptions}>
        Sort By
        <svg
          className="h-4 w-4 ml-1 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.707 7.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 11H17a1 1 0 100-2H6.414l2.293-2.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showSortOptions && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-10">
          <button className="btn-dropdown">Contacted</button>
          <button className="btn-dropdown">Pending</button>
          <button className="btn-dropdown">Successful</button>
          <button className="btn-dropdown">Call Not Picked</button>
          <button className="btn-dropdown">Failed</button>
        </div>
      )}
    </div>
  );
}

export default SortOptions;
