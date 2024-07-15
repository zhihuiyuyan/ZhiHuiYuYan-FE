import ChatHistory from '../components/chatHistory/chatHistory';
import ChatZone from './chatZone';

interface ChatPageProps {
  sessionId: string;
}

const ChatPage: React.FC<ChatPageProps> = ({ sessionId }) => {
  return (
    <div className="flex h-full">
      <ChatHistory />
      <ChatZone sessionId={sessionId} />
    </div>
  );
};

export default ChatPage;
