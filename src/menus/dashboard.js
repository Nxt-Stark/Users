import React from 'react';
import Heading from '../components/heading';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

function Dashboard() {
  return (
    <div className="lg:ml-64 pt-1">
      <Heading title="Dashboard" />
      <SearchBar placeholder="Search here..." width="w-1/3" />
      <Pagination totalData={100} dataPerPage={5} />
    </div>
  );
}

export default Dashboard;
