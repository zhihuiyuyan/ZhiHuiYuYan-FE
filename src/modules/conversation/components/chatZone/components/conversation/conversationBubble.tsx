'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import { ChatRecordProps } from '@/common/hooks/useChatStore';

const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, children, additionalElem, renderFunction } = props;
  return (
    <div className={`flex w-full ${role === 'user' && 'flex-row-reverse'}`}>
      <Avatar>
        <AvatarImage
          src={'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp'}
        ></AvatarImage>
        <AvatarFallback>avatar</AvatarFallback>
      </Avatar>
      <div className="m-4 mt-4 max-w-4/5 whitespace-pre-wrap break-words rounded-md bg-white px-4 py-2 text-blackText shadow">
        {renderFunction
          ? renderFunction(children as string, additionalElem)
          : children}
      </div>
    </div>
  );
};

export default ConversationBubble;
