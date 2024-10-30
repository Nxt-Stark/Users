import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './menus/dashboard';
import Users from './menus/users';
import ServiceProviders from './menus/servicepro';
import Franchisee from './menus/franchesee';
import Finance from './menus/finance';
import Accounts from './menus/account';
import Profile from './menus/profile';
import Chat from './menus/chats';
import Settings from './menus/settings';
import ServiceManagement from './menus/servicemanagment';
import AdsManagement from './menus/ads';
import Notifications from './menus/notifications';
import './App.css';

const menuItems = [
  { name: 'Dashboard', menus: <Dashboard /> },
  { name: 'Users', menus: <Users /> },
  { name: 'Service Providers', menus: <ServiceProviders /> },
  { name: 'Franchisee', menus: <Franchisee /> },
  { name: 'Finance', menus: <Finance /> },
  { name: 'Accounts', menus: <Accounts /> },
  { name: 'Profile', menus: <Profile /> },
  { name: 'Chat', menus: <Chat /> },
  { name: 'Settings', menus: <Settings /> },
  { name: 'Service Management', menus: <ServiceManagement /> },
  { name: 'Ads Management', menus: <AdsManagement /> },
  { name: 'Notifications', menus: <Notifications /> },
];

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const renderContent = () => {
    const activeItem = menuItems.find(item => item.name === activeMenu);
    return activeItem ? activeItem.menus : <Dashboard />;
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 p-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
