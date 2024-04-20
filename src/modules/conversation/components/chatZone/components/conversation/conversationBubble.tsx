import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/elements/Avatar';
import {
  ChatRecordProps
} from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';


const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, children, avatar, renderFunction} = props
  return (
    <div className={`flex w-full ${role === 'user' && 'flex-row-reverse'}`}>
      <Avatar>
        <AvatarImage src={avatar || 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp'}></AvatarImage>
        <AvatarFallback>avatar</AvatarFallback>
      </Avatar>
      <div className='max-w-4/5 text-blackText m-4 mt-4 break-words px-4 py-2 rounded-md shadow bg-white'>
        {renderFunction ? renderFunction(children) : children}
      </div>
    </div>
  )
}

export default ConversationBubble