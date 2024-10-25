import React from 'react';

const Security = () => {
  return (
    <div className="security-settings space-y-6">
      <h2 className="text-2xl font-bold">Sign-in & Security</h2>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Password</label>
        <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md">
          Change Password
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Two-Factor Authentication</label>
        <button className="p-2 bg-green-500 text-white rounded-md">
          Enable 2FA
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Recent Sign-in Activity</label>
        <ul className="list-disc list-inside">
          <li>Nairobi - Chrome Browser - Oct 20, 2024</li>
          <li>Nairobi - Safari Browser - Oct 18, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Security;
