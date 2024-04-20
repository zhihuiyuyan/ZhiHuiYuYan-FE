'use client';

import React from 'react';

import ChatHistory from '@/modules/conversation/components/chatHistory/chatHistory';
import ChatZone from '@/modules/conversation/components/chatZone';

const ChatPage: React.FC = () => {
  return (
    <div className='h-full flex'>
      <ChatHistory histories={[{
        date: '2024-04-12',
        active: true,
        title: 'mock1'
      }]}></ChatHistory>
      <ChatZone></ChatZone>
    </div>
  );
};

export default ChatPage;
