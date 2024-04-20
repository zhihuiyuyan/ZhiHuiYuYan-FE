import { genKey } from '@/common/utils/keyGen';
import {
  bubbleConfig,
  bubbleType,
  ChatRecordProps,
} from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';
import ConversationBubble from '@/modules/conversation/components/chatZone/components/conversation/conversationBubble';

interface ConversationProps {
  chatList: ChatRecordProps[];
}

const Conversation: React.FC<ConversationProps> = ({ chatList }) => {
  return (
    <>
      <div className="flex w-2/3 flex-1 flex-col p-4">
        {chatList.map((chat) => (
          <ConversationBubble
            key={genKey.next().value as number}
            {...{ ...chat, ...bubbleConfig[chat.role as bubbleType] }}
          />
        ))}
        {/*  <ConversationBubble {...bubbleConfig['robot']}>{'banana'}</ConversationBubble>*/}
        {/*  <ConversationBubble {...bubbleConfig['robot']}>{'# Hello \n## Hello, *World*! \n 21 e1dhuiewfhhiewuuuuuiiiiiiiiiiicccccccuiiiiiiddihuwdiuqhiuwehnocwenvowemjdowieddddddddddddddmccccccccccc'}</ConversationBubble>*/}
      </div>
    </>
  );
};

export default Conversation;
