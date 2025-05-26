import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search courses..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
  );
};

export default SearchBar;
