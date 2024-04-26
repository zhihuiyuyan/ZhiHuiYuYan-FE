import Conversation from '@/modules/conversation/components/chatZone/components/conversation';

import Input from './components/input';

const ChatZone: React.FC = () => {
  return (
    <>
      <div className="flex w-4/5 flex-col items-center">
        <Conversation />
        <Input />
      </div>
    </>
  );
};

export default ChatZone;
