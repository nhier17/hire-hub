import React, { useState } from 'react';
import { networks } from '../constants';
import { AiOutlineLinkedin } from 'react-icons/ai';

const MyNetwork = () => {
  const [activeTab, setActiveTab] = useState('Grow');

  return (
    <div className="container px-4 py-8 mx-auto pt-20">
      <div className="">
        <div className="bg-white shadow-md rounded-md p-4 flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'Grow' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('Grow')}
          >
            Grow
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'Catch up' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('Catch up')}
          >
            Catch up
          </button>
        </div>

        {activeTab === 'Grow' && (
          <div>
            <h3 className="text-gray-500 flex justify-between mb-4 text-xl">
              People you may know from jobs you're interested in
              <button className="text-blue-500 hover:underline">Show all</button>
            </h3>
            <div className="bg-white shadow rounded-md grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {networks.map((network) => (
                <div
                  key={network.id}
                  className="bg-white rounded-md shadow transition transform hover:scale-105 hover:shadow-xl duration-300"
                >
                  <div className="flex flex-col items-center gap-4 p-4">
                    <img
                      className="aspect-square rounded-full object-cover"
                      src={network.avatar}
                      alt={`${network.name}'s avatar`}
                      width={100}
                      height={100}
                    />
                    <h4 className="text-gray-800 font-medium text-center">{network.name}</h4>
                    <p className="text-gray-600 text-sm text-center">{network.occupation}</p>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition flex items-center gap-2">
                      <AiOutlineLinkedin size={20} />
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Catch Up Tab Content */}
        {activeTab === 'Catch up' && (
          <div>
            <h3 className="text-gray-500 flex justify-between mb-4 text-xl">
              People you've recently connected with
              <button className="text-blue-500 hover:underline">Show all</button>
            </h3>
            {/* Placeholder for future content */}
            <div className="bg-white shadow rounded-md p-6 text-center text-gray-600">
              <p>No recent connections yet. Stay tuned!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNetwork;
