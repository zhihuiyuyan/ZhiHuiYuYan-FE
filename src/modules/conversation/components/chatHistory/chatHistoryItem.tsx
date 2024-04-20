import React from 'react';

import { genKey } from '@/common/utils/keyGen';


export type ChatHistoryItemType = {
  active: boolean,
  date: string,
  title: string,
}
export type HistoryByDate = {
  [key: string]: ChatHistoryItemType[]
}
interface HistoryByDateProps {
  date: string,
  itemList: ChatHistoryItemType[]
}
export const ChatHistoryItem: React.FC<Partial<ChatHistoryItemType>> = (props) => {
  const { active, title } = props;
  return (
    <>
      <div className={`w-full h-8 flex items-center hover:shadow hover:bg-mdGray rounded-lg shadow relative text-sm px-2 text-blackText ${active && 'bg-mdGray'}`}>
        {title}
        {active && <p className="absolute right-2 text-mdDarkGrayText rounded-lg top-auto">|</p>}
      </div>
    </>
  );
}

export const HistoryByDate: React.FC<HistoryByDateProps> = (props) => {
  const {date, itemList} = props
  return (
    <div className='mb-6'>
      <p className='text-xs text-mdDarkGrayText px-1 py-2'>{date}</p>
      {itemList.map((item) => <ChatHistoryItem key={genKey.next().value as number} {...item} />)}
    </div>
  )
}