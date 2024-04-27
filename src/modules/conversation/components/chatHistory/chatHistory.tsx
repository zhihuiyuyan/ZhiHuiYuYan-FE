'use client';

import { useMemo } from 'react';

import { genKey } from '@/common/utils/keyGen';

import { HistoryByDateType, useChat } from '@/common/hooks/useChatStore';
import { HistoryByDate, HistoryHeader } from './chatHistoryItem';

const ChatHistory: React.FC = () => {
  const { chatHistories, addNewHistory } = useChat();
  const historiesByDate: HistoryByDateType = useMemo(() => {
    let historiesByDate: HistoryByDateType = {};
    chatHistories.forEach((chatHistory) => {
      if (historiesByDate[chatHistory.date])
        historiesByDate[chatHistory.date].push(chatHistory);
      else historiesByDate[chatHistory.date] = [chatHistory];
    });
    return historiesByDate;
  }, [chatHistories]);
  const handleNewChat = () => {
    addNewHistory('test');
  };

  return (
    <>
      <div className="h-full w-1/5 bg-lightGray p-4 shadow">
        <HistoryHeader></HistoryHeader>
        {Object.keys(historiesByDate).map((item) => (
          <HistoryByDate
            date={item}
            itemList={historiesByDate[item]}
            key={genKey.next().value as number}
          />
        ))}
      </div>
    </>
  );
};

export default ChatHistory;
