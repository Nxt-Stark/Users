import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserStats from './components/UserStats';
import UserTable from './components/UserTable';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-5 bg-gray-50">
        <Header />
        <UserStats />
        <Search />
        <UserTable />
      </div>
    </div>
  );
}

export default App;
