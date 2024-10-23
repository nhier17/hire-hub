import React from 'react';
import { Settings, Sidebar } from '../components';

const SettingsPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div>
        <Sidebar />
      </div>
      
      <div className="w-3/4 ">
        <Settings />
      </div>
    </div>
  );
};

export default SettingsPage;
