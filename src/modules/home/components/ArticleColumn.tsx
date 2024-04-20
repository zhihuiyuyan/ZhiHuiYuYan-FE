'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import Breakline from '@/common/components/elements/Breakline';
import { Tabs } from './Tabs';

type ArticleItem = {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  readings: number;
};

interface ArticleItemProps {
  item: ArticleItem;
}

interface AchievementItemProps {
  item: ArticleItem;
}

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
      </motion.div>
      {item.id !== ARTICLE_ITEMS.length && <Breakline className="w-[90%]" />}
    </>
  );
};

const AchievementItem: React.FC<AchievementItemProps> = ({ item }) => {
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
      {item.id !== ARTICLE_ITEMS.length && <Breakline className="w-[90%]" />}
    </>
  );
};

const Article = () => {
  return (
    <>
      {ARTICLE_ITEMS.map((item) => (
        <ArticleItem key={item.id} item={item} />
      ))}
    </>
  );
};

const Achievement = () => {
  return (
    <>
      {ARTICLE_ITEMS.map((item) => (
        <AchievementItem key={item.id} item={item} />
      ))}
    </>
  );
};

const ArticleColumn: React.FC = () => {
  const TABS = [
    {
      label: '学术动态',
      children: <Article />,
    },
    {
      label: '前沿成果',
      children: <Achievement />,
    },
  ];

  return <Tabs tabs={TABS} />;
};

export default ArticleColumn;
