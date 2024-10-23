import React from 'react';
import { useLocation } from 'react-router-dom';
import { AccountPreferences, Security, Visibility, DataPrivacy, NotificationsSettings } from '.'; // Adjust imports as necessary

const Settings = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const section = query.get('section') || 'account';

  // Render the appropriate section
  const renderSection = () => {
    switch (section) {
      case 'account':
        return <AccountPreferences />;
      case 'security':
        return <Security />;
      case 'visibility':
        return <Visibility />;
      case 'data-privacy':
        return <DataPrivacy />;
      case 'notifications':
        return <NotificationsSettings />;
      default:
        return <AccountPreferences />;
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg pt-20">
      <div className="settings-content transition-opacity duration-500 ease-in-out">
        {renderSection()}
      </div>
    </div>
  );
};

export default Settings;
