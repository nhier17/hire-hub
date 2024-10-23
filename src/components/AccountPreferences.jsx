import React from 'react';

const AccountPreferences = () => {
  return (
    <div className="account-preferences space-y-6">
      <h2 className="text-2xl font-bold">Account Preferences</h2>
      
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Username</label>
        <input
          type="text"
          className="p-2 border rounded-md"
          defaultValue="john_doe_92"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Email</label>
        <input
          type="email"
          className="p-2 border rounded-md"
          defaultValue="johndoe@example.com"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Language</label>
        <select className="p-2 border rounded-md">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};

export default AccountPreferences;
