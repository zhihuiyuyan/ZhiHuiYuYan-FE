import { NextPage } from 'next';

import ConversationPage from '@/modules/conversation';

interface ConversationProps {
  params: {
    sessionId: string;
  };
}

const Conversation: NextPage<ConversationProps> = ({ params }) => {
  return (
    <>
      <ConversationPage sessionId={params.sessionId} />
    </>
  );
};

export default Conversation;
