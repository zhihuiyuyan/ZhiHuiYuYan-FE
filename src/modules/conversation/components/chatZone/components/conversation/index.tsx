import React from 'react';
import ConversationBubble from '@/modules/conversation/components/chatZone/components/conversation/conversationBubble';

const Conversation: React.FC = () => {
  return (
    <>
      <div className='flex flex-col w-4/5 p-4 flex-1'>
        <ConversationBubble></ConversationBubble>
      </div>
    </>
  )
}

export default Conversation