import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const AccountPreferences = () => {
  const { userInfo } = useStateContext();
  return (
    <div className="account-preferences space-y-6">
      <h2 className="text-2xl font-bold">Account Preferences</h2>
      
      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Username</label>
        <input
          type="text"
          className="p-2 border rounded-md"
          defaultValue={userInfo?.name}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Email</label>
        <input
          type="email"
          className="p-2 border rounded-md"
          defaultValue={userInfo?.email}
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
