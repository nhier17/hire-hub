import React from 'react';
import { LeftSidebar, Hero, RightSidebar } from '../components';

const Home = () => {
  return (
    <div className="flex w-full justify-center gap-4 bg-gray-100 p-6">
      <div>
      <LeftSidebar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <RightSidebar />
        </div>
    </div>
  );
};

export default Home;
