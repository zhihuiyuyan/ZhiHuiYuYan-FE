'use client';

import ChatZone from './chatZone';
import ChatHistory from '../components/chatHistory/chatHistory';

const ChatPage: React.FC = () => {
  return (
    <div className="flex h-full">
      <ChatHistory
        histories={[
          {
            date: '2024-04-12',
            active: true,
            title: 'mock1',
          },
        ]}
      />
      <ChatZone />
    </div>
  );
};

export default ChatPage;
