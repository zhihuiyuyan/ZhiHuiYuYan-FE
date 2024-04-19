import React from 'react';

import BotBubble from './bubbles/botBubble'
import UserBubble from '@/modules/conversation/components/chatZone/components/conversation/bubbles/userBubble';
const Conversation: React.FC = () => {
  return (
    <>
      <div className='flex flex-col w-2/3 p-4 flex-1'>
        <UserBubble>{'banana'}</UserBubble>
        <BotBubble>{'# Hello \n## Hello, *World*! \n 21 e1dhuiewfhhiewuuuuuiiiiiiiiiiicccccccuiiiiiiddihuwdiuqhiuwehnocwenvowemjdowieddddddddddddddmccccccccccc'}</BotBubble>
      </div>
    </>
  )
}

export default Conversation