// src/components/Filter.js
import React from "react";

const Filter = ({ categories, onSelect}) => {
  return (
    <div className="p-4">
      <select
        className="border rounded p-2 w-full"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>

    // <div className="mb-3">
    //   <select
    //     className="form-select"
    //     value={filterCategory}
    //     onChange={(e) => onFilterChange(e.target.value)}
    //   >
    //     <option value="">All Categories</option>
    //     <option value="Programming">Programming</option>
    //     <option value="Data Science">Data Science</option>
    //     <option value="Design">Design</option>
    //     <option value="Marketing">Marketing</option>

    //   </select>
    // </div>
  );
};

export default Filter;
