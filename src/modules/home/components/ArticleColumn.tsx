'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { create } from 'zustand';

import Breakline from '@/common/components/elements/Breakline';

type ArticleItem = {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  readings: number;
};

interface TabFocusProps {
  isFocusded: boolean;
  children: React.ReactNode;
}

interface ArticleItemProps {
  item: ArticleItem;
}

interface TabFocusedStoreProps {
  tabFocused: number;
  setTabFocused: (newTabFocused: number) => void;
}

const TAB_ITEMS = [
  { id: 1, value: '学术动态' },
  { id: 2, value: '前沿成果' },
];

const ARTICLE_ITEMS: ArticleItem[] = [
  {
    id: 1,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 2,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 3,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 4,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
];

const useTabFocusedStore = create<TabFocusedStoreProps>((set) => ({
  tabFocused: 1,
  setTabFocused: (newTabFocused) => set({ tabFocused: newTabFocused }),
}));

const TabFocus: React.FC<TabFocusProps> = ({ isFocusded, children }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="flex w-[40%] cursor-pointer items-center justify-center gap-2 text-[2vh] lg:w-[25%]"
    >
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-left.png"
          alt="main-bg"
          width={45}
          height={21}
          className="h-[2.5vh] w-[15%]"
        />
      )}
      {children}
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-right.png"
          alt="main-bg"
          width={45}
          height={21}
          className="h-[2.5vh] w-[15%]"
        />
      )}
    </motion.div>
  );
};

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { tabFocused } = useTabFocusedStore();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex h-[18vh] w-full cursor-pointer px-[7%] pt-[2vh]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex flex-[4] flex-col">
          <h3 className={`text-[2.3vh] ${isHovered && 'underline'}`}>
            {item.title}
          </h3>
          <p className="pt-1 text-[1.9vh] text-[#939393]">{item.content}</p>
          <span className="absolute bottom-0 flex text-[1.5vh] text-[#9F9F9F]">
            <p>发布时间：{item.timestamp}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>阅读量：{item.readings}</p>
          </span>
        </div>
        {tabFocused === 2 && (
          <div className="flex-1 overflow-hidden">
            <Image
              src="/images/main/article-image.png"
              alt="main-bg"
              width={124}
              height={83}
              className={`h-full w-full select-none ${isHovered && 'blur-lg' && 'scale-110'}`}
            />
          </div>
        )}
      </motion.div>
      <Breakline className="w-[90%]" />
    </>
  );
};

const ArticleColumn: React.FC = () => {
  const { tabFocused, setTabFocused } = useTabFocusedStore();

  return (
    <div className="flex w-full flex-[2.5] flex-col">
      <div className="flex h-[8vh] w-full  items-center">
        {TAB_ITEMS.map((item) => (
          <TabFocus key={item.id} isFocusded={tabFocused === item.id}>
            <p
              className="text-[2.5vh] font-bold text-[#9B361C]"
              onClick={() => {
                setTabFocused(item.id);
              }}
            >
              {item.value}
            </p>
          </TabFocus>
        ))}
      </div>
      <div className="flex h-full flex-col items-center rounded-xl border border-[#BBBBBB]">
        {ARTICLE_ITEMS.map((item) => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ArticleColumn;
