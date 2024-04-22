'use client';

import ChatHistory from '../components/chatHistory/chatHistory';
import ChatZone from './chatZone';

const ChatPage: React.FC = () => {
  return (
    <div className="flex h-full">
      <ChatHistory />
      <ChatZone />
    </div>
  );
};

export default ChatPage;
