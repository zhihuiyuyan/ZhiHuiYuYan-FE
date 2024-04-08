'use client';

import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const TAB_ITEMS = [
  { id: 1, value: '研究热点' },
  { id: 2, value: '时事新闻' },
];

interface TabFocusProps {
  isFocusded: boolean;
  children: React.ReactNode;
}

const TabFocus: React.FC<TabFocusProps> = ({ isFocusded, children }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="flex w-[25%] cursor-pointer items-center justify-center gap-2"
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
        <div className="flex h-[70vh] w-full px-[2%] pb-10">
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
            <div className="h-full rounded-xl border border-[#BBBBBB]">
              
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
