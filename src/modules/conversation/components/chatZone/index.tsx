import Conversation from '@/modules/conversation/components/chatZone/components/conversation';

import Input from './components/input';

const ChatZone: React.FC = () => {
  return (
    <>
      <div className="flex w-[80vw] flex-col items-center">
        <Conversation />
        <Input />
      </div>
    </>
  );
};

export default ChatZone;
