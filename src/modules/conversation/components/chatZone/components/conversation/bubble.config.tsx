import { bubbleType, ChatRecordProps } from '@/common/hooks/useChatStore';
import ReactMarkdown from 'react-markdown';

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
  },
};
