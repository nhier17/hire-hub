import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai'

const RightSidebar = () => {
  const suggestions = [
    { name: 'John Doe', occupation: 'Software Engineer', imgSrc: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: 'Jane Smith', occupation: 'Product Manager', imgSrc: 'https://randomuser.me/api/portraits/women/29.jpg' },
    { name: 'Sam Wilson', occupation: 'Designer', imgSrc: 'https://randomuser.me/api/portraits/men/40.jpg' },
  ];

  const trendingTopics = ['Nextjs 15', 'Agile scrum', 'AI', 'Machine learning', 'Java'];

  return (
    <div className="hidden md:block flex-1 ">
      <div className="mb-4 bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-semibold text-lg mb-2">Suggestions for You</h2>
        {suggestions.map((user, index) => (
          <div key={index} className="flex  items-center mb-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
            <img src={user.imgSrc} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <h3 className="text-gray-800">{user.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{user.occupation}</p>
              <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-xl hover:bg-blue-500 hover:text-white transition flex items-center gap-2">
                  <AiOutlineLinkedin size={20} />
                  Connect
                </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mt-2">
        <h2 className="font-semibold text-lg mb-2">Trending Topics</h2>
        <div className="flex flex-col">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="bg-white hover:bg-gray-200 text-gray-700 p-2 rounded-md mb-2 cursor-pointer">
              <span>#</span>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
