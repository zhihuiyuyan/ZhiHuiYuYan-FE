'use client';

import { useState } from 'react';
import ChatHistory from '../components/chatHistory/chatHistory';
import ChatZone from './chatZone';
import { ChatHistoryItemType } from '@/common/hooks/useChatStore';

const ChatPage: React.FC = () => {
  return (
    <div className="flex h-full">
      <ChatHistory />
      <ChatZone />
    </div>
  );
};

export default ChatPage;
