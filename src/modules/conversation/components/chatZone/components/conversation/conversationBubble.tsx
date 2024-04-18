import React from 'react';
import Image from 'next/image';

interface ChatRecordProps {
  role: 'robot' | 'user';
  content: React.ReactNode;
  avatar?: string;
}
const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, content, avatar} = props
  return (
    <div className={`flex ${role === 'user' && 'flex-row-reverse'}`}>
      <Image src={avatar ? avatar : 'default'} alt='avatar' className='rounded-full w-20' />
      <div className='max-w-lg break-words p-4 rounded-md shadow bg-white'>
        {content}
      </div>
    </div>
  )
}

export default ConversationBubble