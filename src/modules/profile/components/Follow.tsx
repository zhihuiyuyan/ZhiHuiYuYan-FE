'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import Breakline from '@/common/components/elements/BreaklineDashed';

const TAB_ITEMS = [
  { id: 1, content: '关注学者' },
  { id: 2, content: '论文收藏' },
];

const SCHOLAR_ITEMS = [
  {
    id: 1,
    avatar: 'https://www.github.com/BlackishGreen33.png',
    name: '张三',
    field: '计算机科学与技术',
    institution: '清华大学',
    title: '教授',
    citations: 111,
    papers: 111,
    isFollowed: false,
    followers: 99,
  },
  {
    id: 2,
    avatar: 'https://www.github.com/konodioda727.png',
    name: '李四',
    field: '计算机科学与技术',
    institution: '华中师范大学',
    title: '教授',
    citations: 111,
    papers: 111,
    isFollowed: true,
    followers: 100,
  },
];

const Follow = () => {
  const [tabClicked, setTabClicked] = useState(1);

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="flex h-[4vh] w-[80%] items-center">
        {TAB_ITEMS.map((item) => (
          <motion.p
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            key={item.id}
            className={`ml-[6vh] flex h-full cursor-pointer items-center justify-center px-[3vh] text-[1.85vh] ${tabClicked === item.id ? 'rounded-t-[1vh] bg-[#F3F3F3] font-semibold text-[#0B489B]' : 'text-[#707070]'}`}
            onClick={() => setTabClicked(item.id)}
          >
            {item.content}
          </motion.p>
        ))}
      </div>
      <div className="flex h-[63vh] w-[80%] flex-col items-center rounded-[3vh] bg-[#F3F3F3] px-[3vh] py-[2vh]">
        {tabClicked === 1 && (
          <>
            {SCHOLAR_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative flex w-full flex-col items-center"
              >
                <div className="relative flex h-[14vh] w-full items-center">
                  <Avatar className="absolute left-0 top-0 h-[9vh] w-[9vh] rounded-full bg-[#E7E7E7]">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>{item.name}</AvatarFallback>
                  </Avatar>
                  <p className="absolute left-[30%] top-0 text-[2vh] font-semibold md:left-[25%] lg:left-[22%] xl:left-[15%]">
                    {item.name}
                  </p>
                  <p className="absolute left-[30%] top-[4vh] flex items-center gap-[2vh] text-[1.5vh] text-[#0B489B] md:left-[25%] lg:left-[22%] xl:left-[15%]">
                    研究领域：{item.field}
                  </p>
                  <div className="absolute left-[30%] top-[6.5vh] flex w-[50%] flex-col gap-[0.5vh] text-[1.5vh] text-[#0B489B] md:left-[25%] lg:left-[22%] xl:left-[15%] xl:top-[8vh] xl:flex-row xl:items-center">
                    <p className="flex-1">职称：{item.title}</p>
                    <p className="flex-1">所属机构：{item.institution}</p>
                  </div>
                  <div className="absolute left-[25%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-[#676767] md:left-[22%] lg:left-[20%] xl:left-[13%]">
                    <p>引用数：{item.citations}</p>
                    <p>论文数：{item.papers}</p>
                  </div>
                  <p className="absolute right-[2%] top-[2vh] flex items-center gap-[1vh] text-[1.3vh] text-[#943C3C]">
                    {item.isFollowed ? <IoHeart /> : <IoHeartOutline />}
                    关注人数：{item.followers}
                  </p>
                </div>
                <Breakline className="w-[90%] border-t-2" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Follow;
