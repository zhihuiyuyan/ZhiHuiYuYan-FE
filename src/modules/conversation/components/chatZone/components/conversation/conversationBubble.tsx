import Image from 'next/image';
import React from 'react';

interface ChatRecordProps {
  role: 'robot' | 'user';
  content: React.ReactNode;
  avatar?: string;
}
const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, content, avatar } = props;
  return (
    <div className={`flex ${role === 'user' && 'flex-row-reverse'}`}>
      <Image
        src={avatar ? avatar : 'default'}
        alt="avatar"
        className="w-20 rounded-full"
      />
      <div className="max-w-lg break-words rounded-md bg-white p-4 shadow">
        {content}
      </div>
    </div>
  );
};

export default ConversationBubble;
