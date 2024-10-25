import React from 'react';
import { posts } from '../constants'; 
import PostCard from './PostCard';
import { RiArticleLine } from 'react-icons/ri';
import { GoFileMedia } from 'react-icons/go';
import { LuCalendarDays } from 'react-icons/lu';
import { avatar } from '../assets'; 
import { useStateContext } from '../contexts/ContextProvider';

const Feed = () => {
  const { userInfo } = useStateContext();
  return (
    <div className="flex-1 max-w-2xl mx-auto md:mx-0">
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <form>
          <div className="flex items-center gap-2 mb-3">
            {userInfo?.profile_picture ? (
              <img
                src={userInfo.profile_picture}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
            <img
              src={avatar} 
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
            <input
              type="text"
              className="border border-gray-300 rounded-full w-full p-2 text-sm focus:outline-none focus:border-blue-400"
              placeholder="Start a post"
              disabled
            />
          </div>
          <div className="flex justify-around mt-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <GoFileMedia size={24} className="text-blue-500" />
              <span className="text-gray-600 text-sm">Media</span>
            </div>
            <div className="flex items-center gap-2">
              <LuCalendarDays size={24} className="text-orange-400" />
              <span className="text-gray-600 text-sm">Event</span>
            </div>
            <div className="flex items-center gap-2">
              <RiArticleLine size={24} className="text-red-500" />
              <span className="text-gray-600 text-sm">Write article</span>
            </div>
          </div>
        </form>
      </div>

      <section className="flex flex-col space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Feed;
