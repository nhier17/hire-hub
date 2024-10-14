import React from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { BiRepost } from "react-icons/bi";

// Utility function to calculate time since posted
const timeSincePosted = (timestamp) => {
  const now = new Date();
  const postDate = new Date(timestamp);
  const diffInSeconds = Math.floor((now - postDate) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (let interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'Just now';
};

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6 mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={post.user.avatar}
          alt={`${post.user.name} Avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-md font-semibold">{post.user.name}</h3>
          <span className="text-sm text-gray-500">{timeSincePosted(post.timestamp)}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800">{post.content}</p>
        {post.link && (
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 mt-2">
            Read More <FaArrowUpRightFromSquare />
          </a>
        )}
      </div>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="mb-4 rounded-lg w-full h-2/3 object-cover  aspect-square"
        />
      )}

      <div className="flex items-center justify-between text-gray-500 mb-2">
        <div className="flex items-center gap-2">
          <FaThumbsUp /> <span>{post.likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaComment /> <span>{post.comments}</span>
        </div>
      </div>

      <div className="flex items-center justify-evenly gap-6 text-gray-500">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <FaThumbsUp className="size-4" /> <span>Like</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <FaComment className="size-5" /> <span>Comment</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <BiRepost className="size-6" /> <span>Repost</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <IoIosSend className="size-6" /> <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
