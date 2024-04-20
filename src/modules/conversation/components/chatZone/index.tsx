import React, { useState } from 'react';

import Conversation from '@/modules/conversation/components/chatZone/components/conversation';
import Input from '@/modules/conversation/components/chatZone/components/input';
import { ChatRecordProps } from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';

const ChatZone: React.FC = () => {
  const [conversationDetail, setConversationDetail] = useState<ChatRecordProps[]>([]);
  const handleSubmit = (context: string): void => {
    setConversationDetail(conversationDetail.concat({role: 'user', children: context}))
  }
  return (
    <>
      <div className='flex w-4/5 flex-col items-center'>
        <Conversation chatList={conversationDetail}></Conversation>
        <Input onSubmit={handleSubmit}></Input>
      </div>
    </>
  );
};

export default ChatZone;
