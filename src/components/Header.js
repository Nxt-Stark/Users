import React from 'react';

function Header() {
  return (
    <header className="ml-[250px] flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold text-[#111184]">User Management</h1>
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full bg-white">
          🔔
        </button>
        <button className="relative w-10 h-10 rounded-full bg-white">
          ⚙️
        </button>
        <div className="text-right">
          <p className="text-[#111184] font-bold text-[10px]">Leonal Messi</p>
          <p className="text-[#11118450] text-[10px]">Admin</p>
        </div>
        <img
          src="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/1:1/w_1707,h_1707,c_limit/Rosen-Messi-Miami.jpg"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;

