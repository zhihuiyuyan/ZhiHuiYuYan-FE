import React from 'react';

import ConversationBubbleTemplate, {
  ChatRecordProps,
} from '@/modules/conversation/components/chatZone/components/conversation/bubbles/conversationBubbleTemplate';

const UserBubble: React.FC<Partial<ChatRecordProps>> = ({children, ...restProps}) => {
  return (
    <>
      <ConversationBubbleTemplate {...restProps} role='user'>{children}</ConversationBubbleTemplate>
    </>
  )
}

export default UserBubble