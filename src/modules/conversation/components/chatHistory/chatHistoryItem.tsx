import React from 'react';

import { genKey } from '@/common/utils/keyGen';

export type ChatHistoryItemType = {
  active: boolean;
  date: string;
  title: string;
};

export type HistoryByDate = {
  [key: string]: ChatHistoryItemType[];
};

interface HistoryByDateProps {
  date: string;
  itemList: ChatHistoryItemType[];
}

export const ChatHistoryItem: React.FC<Partial<ChatHistoryItemType>> = (
  props
) => {
  const { active, title } = props;

  return (
    <>
      <div
        className={`hover:bg-mdGray text-blackText relative flex h-8 w-full items-center rounded-lg px-2 text-sm shadow hover:shadow ${active && 'bg-mdGray'}`}
      >
        {title}
        {active && (
          <p className="text-mdDarkGrayText absolute right-2 top-auto rounded-lg">
            |
          </p>
        )}
      </div>
    </>
  );
};

export const HistoryByDate: React.FC<HistoryByDateProps> = (props) => {
  const { date, itemList } = props;

  return (
    <div className="mb-6">
      <p className="text-mdDarkGrayText px-1 py-2 text-xs">{date}</p>
      {itemList.map((item) => (
        <ChatHistoryItem key={genKey.next().value as number} {...item} />
      ))}
    </div>
  );
};
