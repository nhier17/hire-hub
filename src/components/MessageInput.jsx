import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 flex items-center">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-md p-2"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
