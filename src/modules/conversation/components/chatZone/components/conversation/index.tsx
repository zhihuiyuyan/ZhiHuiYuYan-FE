'use client';

import { bubbleType, useChat } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';

import { bubbleConfig } from './bubble.config';
import ConversationBubble from './conversationBubble';

const Conversation: React.FC = () => {
  const { chatRecords } = useChat();

  return (
    <>
      <div className="mt-12 flex h-3/4vh w-full flex-col overflow-auto px-32 lg:px-52">
        {chatRecords.map((chat) => (
          <ConversationBubble
            key={genKey.next().value as number}
            {...{ ...chat, ...bubbleConfig[chat.role as bubbleType] }}
          />
        ))}
      </div>
    </>
  );
};

export default Conversation;
