'use client';

import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

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

const TAB_ITEMS = [
  { id: 1, value: '研究热点' },
  { id: 2, value: '时事新闻' },
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

const TabFocus: React.FC<TabFocusProps> = ({ isFocusded, children }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="flex w-[25%] cursor-pointer items-center justify-center gap-2 -mr-10"
    >
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-left.png"
          alt="main-bg"
          width={45}
          height={21}
        />
      )}
      {children}
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-right.png"
          alt="main-bg"
          width={45}
          height={21}
        />
      )}
    </motion.div>
  );
};

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          <h3 className={`text-xl ${isHovered && 'underline'}`}>
            {item.title}
          </h3>
          <p className="pt-1 text-[#939393]">{item.content}</p>
          <span className="absolute bottom-0 flex text-sm text-[#9F9F9F]">
            <p>发布时间：{item.timestamp}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>阅读量：{item.readings}</p>
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <Image
            src="/images/main/article-image.png"
            alt="main-bg"
            width={124}
            height={83}
            className={`h-full w-full select-none ${isHovered && 'blur-lg' && 'scale-110'}`}
          />
        </div>
      </motion.div>
      <Breakline className="w-[90%]" />
    </>
  );
};

const HomePage: NextPage = () => {
  const [focusedItem, setFocusedItem] = useState(1);

  return (
    <>
      <div className="relative h-[25vh] w-full">
        <Image
          src="/images/main/main-bg.png"
          alt="main-bg"
          width={1015}
          height={626}
          className="relative top-1 -z-10 h-full w-full select-none"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex h-[5vh] w-[43%]"
          >
            <input className="flex-[3] rounded-l-lg border-2 border-[#841710] px-3 text-lg outline-none" />
            <button className="flex-1 rounded-r-lg bg-[#841710] text-white">
              检索
            </button>
          </motion.div>
        </div>
        <Image
          src="/images/main/breakline.png"
          alt="main-bg"
          width={960}
          height={12}
          className="w-full select-none"
        />
        <div className="flex h-auto w-full px-[2%] pb-10">
          <div className="flex flex-[2.5] flex-col">
            <div className="flex h-[8vh] items-center">
              {TAB_ITEMS.map((item) => (
                <TabFocus key={item.id} isFocusded={focusedItem === item.id}>
                  <p
                    className="text-2xl font-bold text-[#9B361C]"
                    onClick={() => {
                      setFocusedItem(item.id);
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
          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
