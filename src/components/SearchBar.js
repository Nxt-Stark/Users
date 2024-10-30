import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  placeholder = "Search here...",
  width = "w-64",
  iconColor = "text-indigo-900",
  onSearch
}) => {
  return (
    <div className={`flex items-center bg-white shadow-md rounded-full px-4 py-2 ${width}`}>
      <FaSearch className={`${iconColor} mr-2`} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
      />
    </div>
  );
};

export default SearchBar;
