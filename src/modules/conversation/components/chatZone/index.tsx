import Conversation from '@/modules/conversation/components/chatZone/components/conversation';

import Input from './components/input';

interface ChatZoneProps{
  sessionId: string;
}

const ChatZone: React.FC<ChatZoneProps> = ({ sessionId }) => {
  return (
    <>
      <div className="flex w-[80vw] flex-col items-center">
        <Conversation sessionId={sessionId}/>
        <Input sessionId={sessionId}/>
      </div>
    </>
  );
};

export default ChatZone;
