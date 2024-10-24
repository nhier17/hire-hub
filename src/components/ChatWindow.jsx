import React from 'react';

const ChatWindow = ({ activeConversation }) => {
  if (!activeConversation) {
    return <div className="flex-1 flex items-center justify-center">Select a conversation</div>;
  }

  return (
    <div className="flex-1 bg-white p-6 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {activeConversation.messages.map((message) => (
          <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
            <div
              className={`p-3 rounded-lg ${
                message.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
