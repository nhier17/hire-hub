import React from 'react';
import { notifications } from '../constants';

const Notifications = () => {
  return (
    <div className="container mx-auto px-4 py-2 w-full md:w-1/2">
      <div className="flex items-center gap-3 mt-10 mb-4 bg-white shadow-lg rounded-md p-4">
        <button className="bg-gray-100 text-[#0A66c2] px-5 py-2.5 rounded ring-1 ring-blue-500 hover:bg-gray-200 transition">All</button>
        <button className="bg-gray-100 text-[#0A66c2] px-5 py-2.5 rounded ring-1 ring-blue-500 hover:bg-gray-200 transition">Jobs</button>
        <button className="bg-gray-100 text-[#0A66c2] px-5 py-2.5 rounded ring-1 ring-blue-500 hover:bg-gray-200 transition">posts</button>
        <button className="bg-gray-100 text-[#0A66c2] px-5 py-2.5 rounded ring-1 ring-blue-500 hover:bg-gray-200 transition">Mentions</button>
      </div>
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {notifications.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No notifications available.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 flex items-start space-x-4 transition-all duration-300 ease-in-out hover:bg-gray-50 cursor-pointer ${
                !notification.isRead ? 'bg-gray-100' : ''
              }`}
            >
              <div className="mt-1">
                <span className="block text-xl text-gray-500">
                  🔔
                </span>
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>

              <div className="text-sm text-gray-400">
                {new Date(notification.timestamp).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
