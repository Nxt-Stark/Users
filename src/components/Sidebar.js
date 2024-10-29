import React from 'react';

function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <i className="bi bi-house-door text-lg"></i> },
    { name: 'Users', icon: <i className="bi bi-people text-lg"></i> },
    { name: 'Service Providers', icon: <span className="material-symbols-rounded">engineering</span> },
    { name: 'Franchisee', icon: <i className="bi bi-building text-lg"></i> },
    { name: 'Finance', icon: <i className="bi bi-cash-coin text-lg"></i> },
    { name: 'Accounts', icon: <i className="bi bi-safe text-lg"></i> },
    { name: 'Profile', icon: <i className="bi bi-person text-lg"></i> },
    { name: 'Chat', icon: <i className="bi bi-chat text-lg"></i> },
    { name: 'Settings', icon: <i className="bi bi-gear text-lg"></i> },
    { name: 'Service Management', icon: <i className="bi bi-briefcase text-lg"></i> },
    { name: 'Ads Management', icon: <i className="bi bi-badge-ad text-lg"></i> },
    { name: 'Notifications', icon: <i className="bi bi-bell text-lg"></i> },
  ];

  return (
    <div className="w-64 h-screen bg-[#4D12B9] text-white py-4 pr-0 pl-4 fixed overflow-hidden top-0 left-0">
      <div className="font-bold text-lg mb-6"><span className="bg-orange-500 px-2 py-0 rounded mr-2">S</span>SC</div>
      <nav className="flex flex-col justify-between">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 py-2 px-3 text-sm cursor-pointer rounded-l-full 
              ${item.name === 'Users' ? 'bg-white text-[#4D12B9]' : 'hover:bg-[#ffffff30]'}`}
            onMouseOver={(e) => {
              if (item.name !== 'Users') {
                e.currentTarget.classList.add('bg-[#ffffff30]');
              }
            }}
            onMouseOut={(e) => {
              if (item.name !== 'Users') {
                e.currentTarget.classList.remove('bg-[#ffffff30]');
              }
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
      <div className="font-bold text-sm mt-8">Service Connect</div>
      <div className="text-sm mt-2">Lets Grow Together</div>
    </div>
  );
}

export default Sidebar;
