'use client';

import { bubbleType, useChat } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';
import { bubbleConfig } from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';
import ConversationBubble from '@/modules/conversation/components/chatZone/components/conversation/conversationBubble';

const Conversation: React.FC = () => {
  const { chatRecords } = useChat();

  return (
    <>
      <div className="flex w-full mt-12 flex-col px-[15vw] h-3/4vh overflow-auto">
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
