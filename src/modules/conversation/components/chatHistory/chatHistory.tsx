import { useMemo } from 'react';

import { genKey } from '@/common/utils/keyGen';

import { mockData } from '@/modules/conversation/components';
import {
  ChatHistoryItemType,
  HistoryByDate,
  HistoryHeader,
} from './chatHistoryItem';

interface ChatHistoryItemProps {
  histories: ChatHistoryItemType[];
}

const ChatHistory: React.FC<ChatHistoryItemProps> = ({ histories }) => {
  const data = useMemo(() => {
    const ret: HistoryByDate = {};
    histories.forEach((history) => {
      if (ret[history.date]) ret[history.date].push(history);
      else ret[history.date] = [history];
    });
    return ret;
  }, [histories]);
  const handleNewChat = () => {
    const curDate = new Date().toDateString();
    mockData.push({
      date: curDate,
      title: '123',
      active: true,
    });
  };
  return (
    <>
      <div className="h-full w-1/5 bg-lightGray p-4 shadow">
        <HistoryHeader onClick={handleNewChat}></HistoryHeader>
        {Object.keys(data).map((item) => (
          <HistoryByDate
            date={item}
            itemList={data[item]}
            key={genKey.next().value as number}
          />
        ))}
      </div>
    </>
  );
};

export default ChatHistory;
