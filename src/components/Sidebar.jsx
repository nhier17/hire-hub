import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks } from '../constants';
import { useStateContext } from '../contexts/ContextProvider';
import { avatar } from '../assets';

const Sidebar = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const section = query.get('section') || 'account'; 

  const { userInfo } = useStateContext();

  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer flex items-center gap-2">
        {userInfo?.profile_picture ? (
          <img 
            src={userInfo?.profile_picture | avatar}
            width={34}
            height={34} 
            alt="User Avatar"
            className="rounded-full"
          />
          ) : (
          <img src={avatar} width={34} height={34} alt="User Avatar" className="rounded-full" />
          )}
          <h1 className="text-xl font-semibold text-black-1">Settings</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = section === item.route.slice(1); 

          return (
            <Link
              key={item.id}
              to={`/settings?section=${item.route}`} 
              className={`flex items-center gap-2 p-2 rounded-md ${
                isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
              }`}
            >
              <div className="text-xl">
                {item.icon}
              </div>
              <p className={`sidebar-label ${isActive ? 'font-bold' : ''}`}>{item.title}</p>
            </Link>
          );
        })}
      </nav>

    </div>
  );
};

export default Sidebar;
