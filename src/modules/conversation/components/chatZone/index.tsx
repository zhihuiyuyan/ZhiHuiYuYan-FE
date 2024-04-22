import { useState } from 'react';

import Conversation from '@/modules/conversation/components/chatZone/components/conversation';

import { ChatRecordProps } from '@/common/hooks/useChatStore';
import Input from './components/input';

const ChatZone: React.FC = () => {
  const [conversationDetail, setConversationDetail] = useState<
    ChatRecordProps[]
  >([]);
  const handleSubmit = (context: string): void => {
    setConversationDetail(
      conversationDetail.concat({
        role: 'user',
        children: context,
      })
    );
  };

  return (
    <>
      <div className="flex w-4/5 flex-col items-center">
        <Conversation />
        <Input onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default ChatZone;
