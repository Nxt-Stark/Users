import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { MdArrowDropDown } from "react-icons/md";


function Search() {
  return (
    <div className="ml-64 flex justify-between items-center mb-6">
      <div className="relative flex-grow">
        <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-indigo-600" />
        <input
          type="text"
          placeholder="Search here..."
          className="pl-12 pr-4 pt-4 pb-4 rounded-full border border-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          style={{ width: '300px' }}
        />
      </div>
      <div className="flex gap-4">
      <div className="flex items-center">
  <button className="text-[#4D12B9] hover:text-white rounded-full px-5 py-3 border border-[#4D12B9] hover:bg-indigo-700 transition flex items-center text-sm">
    Newest <MdArrowDropDown className="ml-1" />
  </button>
</div>

        <button className="bg-[#4D12B9] text-white rounded-full px-5 py-3 hover:bg-[#4D60B9] transition text-sm">
          + New User
        </button>
      </div>
    </div>
  );
}

export default Search;
