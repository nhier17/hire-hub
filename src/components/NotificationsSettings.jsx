import React from 'react';

const NotificationsSettings = () => {
  return (
    <div className="notification-settings space-y-6">
      <h2 className="text-2xl font-bold">Notifications</h2>

      <div className="flex items-center gap-2">
        <label className="text-gray-600">Email Notifications</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-600">Push Notifications</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-600">SMS Notifications</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked={false} />
      </div>

      <p className="text-gray-500">
        Control how you receive notifications about activity on your account.
      </p>
    </div>
  );
};

export default NotificationsSettings;
