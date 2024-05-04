'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import Load from '@/common/components/elements/Load/Load';
import { ChatRecordProps } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';
import { useState } from 'react';

const ConversationBubble: React.FC<ChatRecordProps> = (props) => {
  const { role, children, last, additionalElem, renderFunction } = props;
  const [readyState, setReadyState] = useState<boolean>(false);
  return (
    <div
      className={`flex w-full ${role === 'user' && 'flex-row-reverse'} relative`}
    >
      {role === 'user' ? (
        <Avatar className={`absolute -right-14`}>
          <AvatarImage
            src={'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp'}
          ></AvatarImage>
          <AvatarFallback>avatar</AvatarFallback>
        </Avatar>
      ) : (
        <Load
          unique_id={genKey.next().value as number}
          className="absolute -left-8"
          paused={!last || readyState}
        ></Load>
      )}
      <div className="mt-4 max-w-full whitespace-pre-wrap break-words rounded-md bg-white px-4 py-2 text-blackText shadow">
        {renderFunction
          ? renderFunction(
              children as string,
              additionalElem,
              () => setReadyState(true),
              last
            )
          : children}
      </div>
    </div>
  );
};

export default ConversationBubble;
