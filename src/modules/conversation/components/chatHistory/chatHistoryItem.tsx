import React from 'react';

import { genKey } from '@/common/utils/keyGen';
import Image from 'next/image';

export type ChatHistoryItemType = {
  active?: boolean;
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

interface HistoryHeaderProps {
  onClick?: () => void;
}

export const ChatHistoryItem: React.FC<Partial<ChatHistoryItemType>> = (
  props
) => {
  const { active, title } = props;

  return (
    <>
      <div
        className={` relative flex h-8 w-full cursor-pointer items-center rounded-lg px-2 text-sm text-blackText shadow transition-all hover:scale-105 hover:bg-mdGray hover:shadow ${active && 'bg-mdGray'}`}
      >
        {title}
        {active && (
          <p className="absolute right-2 top-auto rounded-lg text-mdDarkGrayText">
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
      <p className="px-1 py-2 text-xs text-mdDarkGrayText">{date}</p>
      {itemList.map((item) => (
        <ChatHistoryItem key={genKey.next().value as number} {...item} />
      ))}
    </div>
  );
};

export const HistoryHeader: React.FC<HistoryHeaderProps> = ({ onClick }) => {
  return (
    <>
      <div
        onClick={() => onClick && onClick()}
        className="mb-4 flex cursor-pointer justify-between rounded py-2 text-sm transition-all hover:scale-105 hover:bg-mdGray hover:shadow"
      >
        <span className="ml-1">建立新对话</span>
        <Image
          className="mr-1"
          src="https://s2.loli.net/2024/04/20/pvKyeMCAcqiIQXV.png"
          alt="new"
          width={20}
          height={20}
        ></Image>
      </div>
    </>
  );
};
