import React from 'react';

const Visibility = () => {
  return (
    <div className="visibility-settings space-y-6">
      <h2 className="text-2xl font-bold">Visibility</h2>
      
      <div className="flex items-center gap-2">
        <label className="text-gray-600">Profile Visibility</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-600">Activity Status</label>
        <input type="checkbox" className="toggle-checkbox" defaultChecked={false} />
      </div>

      <p className="text-gray-500">Control who can see your profile and status.</p>
    </div>
  );
};

export default Visibility;
