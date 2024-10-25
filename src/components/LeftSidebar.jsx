import React from 'react';
import { avatar } from '../assets';
import { useStateContext } from '../contexts/ContextProvider';

const LeftSidebar = () => {
  const { userInfo } = useStateContext();

  const recentPosts = (post) => {
    return (
      <div className="hover:bg-gray-200 flex gap-2 text-sm cursor-pointer p-2 text-gray-500 hover:text-gray-800 rounded-md">
        <span>#</span>
        <p>{post}</p>
      </div>
    );
  };

  return (
    <div className="hidden md:block sticky top-[80px] flex-1 max-w-xs">
      <div className="flex flex-col items-center border border-gray-200 bg-white p-4 rounded-lg shadow-md mb-4">
        <img 
          src="https://www.gstatic.com/webp/gallery/1.webp" 
          alt="" 
          className="mb-[-30px] w-full h-[60px] object-cover rounded-t-md"
        />
        <img src={avatar} alt="avatar" className="h-12 w-12 object-cover rounded-full" />
        <h2 className="text-lg font-semibold">{userInfo?.name}</h2>
        <h4 className="text-gray-600 text-sm">Software Engineer</h4>
        <p className="text-gray-400 text-sm">Nairobi, Nairobi County</p>
        <p className="text-gray-400 text-sm">LutherCorp</p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <p>Who viewed you</p>
          <p className="font-bold text-blue-600">2,545</p>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>Views on posts</p>
          <p className="font-bold text-blue-600">2,333</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <p className="font-semibold text-gray-600 mb-2">Recent</p>
        {recentPosts('Collaborative topic on agile scrum')}
        {recentPosts('Devin AI')}
        {recentPosts('Healthcare management')}
        {recentPosts('Fintech companies')}
        {recentPosts('Nextjs 15 dropping')}
      </div>
    </div>
  );
};

export default LeftSidebar;
