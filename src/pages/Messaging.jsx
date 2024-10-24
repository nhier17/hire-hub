import React, { useState } from 'react';
import { ConversationList, ChatWindow,  MessageInput } from '../components';
import { conversations as dummyConversations } from '../constants';

const Messaging = () => {
  const [conversations, setConversations] = useState(dummyConversations);
  const [activeConversationId, setActiveConversationId] = useState(null);

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  const selectConversation = (id) => {
    setActiveConversationId(id);
  };

  const sendMessage = (content) => {
    if (activeConversation) {
      const newMessage = { id: Date.now(), from: 'user', content };
      const updatedConversations = conversations.map((conv) =>
        conv.id === activeConversationId
          ? { ...conv, messages: [...conv.messages, newMessage], lastMessage: content }
          : conv
      );
      setConversations(updatedConversations);
    }
  };

  return (
    <div className="flex h-screen">
      <ConversationList
        conversations={conversations}
        selectConversation={selectConversation}
        activeConversationId={activeConversationId}
      />
      <div className="flex-1 flex flex-col">
        <ChatWindow activeConversation={activeConversation} />
        {activeConversation && <MessageInput sendMessage={sendMessage} />}
      </div>
    </div>
  );
};

export default Messaging;
