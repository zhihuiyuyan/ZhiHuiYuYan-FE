import { genKey } from '@/common/utils/keyGen';
import {
  bubbleConfig,
} from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';
import ConversationBubble from '@/modules/conversation/components/chatZone/components/conversation/conversationBubble';
import { bubbleType, ChatRecordProps, useChat } from '@/common/hooks/useChatStore';

const Conversation: React.FC = () => {
  const {chatRecords} = useChat()
  return (
    <>
      <div className="flex w-2/3 flex-1 flex-col p-4">
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
