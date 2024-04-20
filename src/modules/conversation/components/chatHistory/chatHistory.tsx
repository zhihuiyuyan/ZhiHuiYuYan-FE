import React, { useMemo } from 'react';
import { ChatHistoryItemType, HistoryByDate } from '@/modules/conversation/components/chatHistory/chatHistoryItem';
import { genKey } from '@/common/utils/keyGen';


interface ChatHistoryItemProps {
  histories: ChatHistoryItemType[]
}
const ChatHistory: React.FC<ChatHistoryItemProps> = ({histories}) => {
  const data = useMemo(() => {
    const ret: HistoryByDate = {}
    histories.forEach((history) => {
      if(ret[history.date]) ret[history.date].push(history)
      else ret[history.date] = [history]
    })
    return ret
  }, [histories]);
  return (
    <>
      <div className='w-1/5 h-full bg-lightGray p-4 shadow'>
        {Object.keys(data).map((item) => <HistoryByDate date={item} itemList={data[item]} key={genKey.next().value as number}></HistoryByDate>)}
      </div>
    </>
  );
};

export default ChatHistory;
