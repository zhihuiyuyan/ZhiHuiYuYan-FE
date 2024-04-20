'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import Breakline from '@/common/components/elements/Breakline';

type AchievementItem = {
  id: number;
  title: string;
  content: string;
  image: string;
  timestamp: string;
  readings: number;
};

interface AchievementItemProps {
  item: AchievementItem;
}

const ACHIEVEMENT_ITEMS: AchievementItem[] = [
  {
    id: 1,
    title: '标题',
    content: '内容',
    image: '/images/main/article-image.png',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 2,
    title: '标题',
    content: '内容',
    image: '/images/main/article-image.png',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 3,
    title: '标题',
    content: '内容',
    image: '/images/main/article-image.png',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 4,
    title: '标题',
    content: '内容',
    image: '/images/main/article-image.png',
    timestamp: '2024-03-30',
    readings: 999,
  },
];

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
            src={item.image}
            alt="main-bg"
            width={124}
            height={83}
            className={`h-full w-full select-none ${isHovered && 'blur-lg' && 'scale-110'}`}
          />
        </div>
      </motion.div>
      {item.id !== ACHIEVEMENT_ITEMS.length && (
        <Breakline className="w-[90%]" />
      )}
    </>
  );
};

const Achievement = () => {
  return (
    <>
      {ACHIEVEMENT_ITEMS.map((item) => (
        <AchievementItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default Achievement;
