import React, { useState } from 'react';

const Pagination = ({ totalData, dataPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalData / dataPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-full mx-1 ${
            currentPage === i
              ? 'bg-indigo-900 text-white shadow-md'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
      <span className="mb-2 sm:mb-0 mr-4">
        Showing <span style={{ color: '#1A237E' }}>{dataPerPage * (currentPage - 1) + 1}</span>-
        <span style={{ color: '#1A237E' }}>{Math.min(dataPerPage * currentPage, totalData)}</span> from 
        <span style={{ color: '#1A237E' }}> {totalData}</span> data
      </span>

      <div className="flex items-center">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-500 text-lg px-2 disabled:opacity-50"
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 text-lg px-2 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
