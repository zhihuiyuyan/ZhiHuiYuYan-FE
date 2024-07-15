'use client';

import { useEffect } from 'react';

import { bubbleType, useChat } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';

import axios from 'axios';
import { bubbleConfig } from './bubble.config';
import ConversationBubble from './conversationBubble';

interface ConversationProps {
  sessionId: string;
}

const Conversation: React.FC<ConversationProps> = ({ sessionId }) => {
  const { chatRecords } = useChat();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(
          `http://124.222.113.16:5000/llm/chats/${sessionId}`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('请求出错:', error);
      }
    })();
  }, []);

  return (
    <>
      <div className="mt-12 flex h-[70vh] w-full flex-col overflow-auto px-[15vw]">
        {chatRecords.map((chat, index) => (
          <ConversationBubble
            key={genKey.next().value as number}
            last={index === chatRecords.length - 1}
            {...{ ...chat, ...bubbleConfig[chat.role as bubbleType] }}
          />
        ))}
      </div>
    </>
  );
};

export default Conversation;
