import React from 'react';

import { ChatHistoryItemType, useChat } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';
import Image from 'next/image';

interface HistoryHeaderProps {
  onClick?: () => void;
}
interface HistoryByDateProps {
  date: string;
  itemList: ChatHistoryItemType[];
}

export const ChatHistoryItem: React.FC<ChatHistoryItemType> = (props) => {
  const { title, id } = props;
  const { currentSelect, setCurrentSelect } = useChat();
  const active = id === currentSelect;
  const handleClick = () => setCurrentSelect(id);
  return (
    <>
      <div
        onClick={handleClick}
        className={`relative my-1 flex h-8 w-full cursor-pointer items-center rounded-lg px-2 text-sm text-blackText transition-all hover:scale-102 hover:bg-mdGray hover:shadow ${active && 'bg-mdGray'}`}
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

export const HistoryHeader: React.FC = () => {
  const { addNewHistory } = useChat();
  return (
    <>
      <div
        onClick={() => addNewHistory(`mock-${genKey.next().value}`)}
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
