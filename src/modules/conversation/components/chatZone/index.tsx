import React from 'react';

import Input from '@/modules/conversation/components/chatZone/components/input';
import Conversation from '@/modules/conversation/components/chatZone/components/conversation';

const ChatZone: React.FC = () => {
  return (
    <>
      <div className='flex flex-1 flex-col items-center'>
        <Conversation></Conversation>
        <Input></Input>
      </div>
    </>
  )
}

export default ChatZone