import React from 'react';
import ReactMarkdown from 'react-markdown';
import { bubbleType, ChatRecordProps } from '@/common/hooks/useChatStore';

export const bubbleConfig: { [key in bubbleType]: ChatRecordProps } = {
  user: {
    role: 'user',
    renderFunction: (children) => children,
  },
  robot: {
    role: 'robot',
    renderFunction: (children) => (
      <ReactMarkdown>{children as string}</ReactMarkdown>
    ),
    avatar: 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp',
  },
};
