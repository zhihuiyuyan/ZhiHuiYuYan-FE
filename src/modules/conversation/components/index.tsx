'use client';

import { ChatHistoryItemType } from '@/modules/conversation/components/chatHistory/chatHistoryItem';
import { useState } from 'react';
import ChatHistory from '../components/chatHistory/chatHistory';
import ChatZone from './chatZone';

export let mockData: ChatHistoryItemType[] = [
  {
    date: '2024-04-12',
    active: true,
    title: 'mock1',
  },
];
const ChatPage: React.FC = () => {
  const [history, setHistory] = useState<ChatHistoryItemType[]>(mockData);
  return (
    <div className="flex h-full">
      <ChatHistory histories={history} />
      <ChatZone />
    </div>
  );
};

export default ChatPage;
