import { useMemo } from 'react';

import { genKey } from '@/common/utils/keyGen';

import { ChatHistoryItemType, HistoryByDate } from './chatHistoryItem';

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

  return (
    <>
      <div className="h-full w-1/5 bg-lightGray p-4 shadow">
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
