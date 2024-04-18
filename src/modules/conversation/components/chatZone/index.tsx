import React from 'react';

import Conversation from '@/modules/conversation/components/chatZone/components/conversation';
import Input from '@/modules/conversation/components/chatZone/components/input';

const ChatZone: React.FC = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        <Conversation></Conversation>
        <Input></Input>
      </div>
    </>
  );
};

export default ChatZone;
