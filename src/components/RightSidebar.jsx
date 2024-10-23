import React from 'react';

const RightSidebar = () => {
  const suggestions = [
    { name: 'John Doe', occupation: 'Software Engineer', imgSrc: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: 'Jane Smith', occupation: 'Product Manager', imgSrc: 'https://randomuser.me/api/portraits/women/29.jpg' },
    { name: 'Sam Wilson', occupation: 'Designer', imgSrc: 'https://randomuser.me/api/portraits/men/40.jpg' },
  ];

  const trendingTopics = ['Nextjs 15', 'Agile scrum', 'AI', 'Machine learning', 'Java'];

  return (
    <div className="hidden md:block flex-1 bg-gray-50 rounded-lg shadow-lg p-4 max-w-md h-fit">
      <div className="mb-4">
        <h2 className="font-semibold text-lg mb-2">Suggestions for You</h2>
        {suggestions.map((user, index) => (
          <div key={index} className="flex  items-center mb-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
            <img src={user.imgSrc} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <h3 className="text-gray-800">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.occupation}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
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
