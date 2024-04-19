import React from 'react';
import ReactMarkdown from 'react-markdown'

import ConversationBubbleTemplate, {
  ChatRecordProps,
} from '@/modules/conversation/components/chatZone/components/conversation/bubbles/conversationBubbleTemplate';

const BotBubble: React.FC<Partial<ChatRecordProps>> = ({children, ...restProps}) => {
  const handleRender = (children: React.ReactNode) => {
    return <ReactMarkdown>{children as string}</ReactMarkdown>
  }
  return (
    <>
      <ConversationBubbleTemplate {...restProps} role='robot' renderFunction={handleRender}>{children}</ConversationBubbleTemplate>
    </>
  )
}

export default BotBubble