import React from 'react';

import {
  bubbleConfig, bubbleType,
  ChatRecordProps,
} from '@/modules/conversation/components/chatZone/components/conversation/bubble.config';
import ConversationBubble from '@/modules/conversation/components/chatZone/components/conversation/conversationBubble';
import { genKey } from '@/common/utils/keyGen';
interface ConversationProps {
  chatList: ChatRecordProps[]
}
const Conversation: React.FC<ConversationProps> = ({ chatList }) => {
  return (
    <>
      <div className='flex flex-col w-2/3 p-4 flex-1'>
        {chatList.map((chat) => <ConversationBubble key={genKey.next().value as number} {...{ ...chat, ...bubbleConfig[chat.role as bubbleType]}} />)}
      {/*  <ConversationBubble {...bubbleConfig['robot']}>{'banana'}</ConversationBubble>*/}
      {/*  <ConversationBubble {...bubbleConfig['robot']}>{'# Hello \n## Hello, *World*! \n 21 e1dhuiewfhhiewuuuuuiiiiiiiiiiicccccccuiiiiiiddihuwdiuqhiuwehnocwenvowemjdowieddddddddddddddmccccccccccc'}</ConversationBubble>*/}
      </div>
    </>
  );
};

export default Conversation;
