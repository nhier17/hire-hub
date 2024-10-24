import React from 'react';

const ConversationList = ({ conversations, selectConversation, activeConversationId }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-4">Messages</h3>
      <ul className="space-y-4">
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            onClick={() => selectConversation(conversation.id)}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
              conversation.id === activeConversationId ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={conversation.contactAvatar}
              alt={conversation.contactName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{conversation.contactName}</p>
              <p className="text-gray-500 text-sm truncate">{conversation.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
