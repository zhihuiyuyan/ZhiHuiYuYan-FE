import React from 'react';
import Image from 'next/image';

interface ChatRecordProps {
  role?: 'robot' | 'user';
  children?: React.ReactNode;
  avatar?: string;
}
const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, children, avatar} = props
  return (
    <div className={`flex w-full ${role === 'user' && 'flex-row-reverse'}`}>
      <Image src={avatar ? avatar : 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp'} alt='avatar' width={40} height={40} className='flex-shrink-0 h-12 w-12 rounded-full' />
      <div className='max-w-lg ml-4 mt-4 break-words p-4 rounded-md shadow bg-white'>
        {children}
      </div>
    </div>
  )
}

export default ConversationBubble