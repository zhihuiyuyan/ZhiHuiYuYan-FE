import React, { useState } from 'react';

import Conversation from '@/modules/conversation/components/chatZone/components/conversation';
import Input from '@/modules/conversation/components/chatZone/components/input';

const ChatZone: React.FC = () => {
  const [converSationDetail, setConverSationDetail] = useState();
  const handleSubmit = (context: string): void => {
    
  }
  return (
    <>
      <div className='flex w-4/5 flex-col items-center'>
        <Conversation></Conversation>
        <Input onSubmit={handleSubmit}></Input>
      </div>
    </>
  );
};

export default ChatZone;
