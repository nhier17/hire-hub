import React from 'react'
import { RightSidebar } from '../components';
import UserProfile from './UserProfile';

function Profile() {
  return (
    <div className="flex w-full justify-center gap-4 bg-gray-100 p-2 md:p-6">
      <div>
        <UserProfile />
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Profile