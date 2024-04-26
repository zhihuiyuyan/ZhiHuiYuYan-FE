'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex w-full flex-[2.5] flex-col">
      <div className="flex h-[8vh] w-full items-center">
        {tabs.map((tab, index) => (
          <motion.button
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            key={index}
            className="flex w-[40%] cursor-pointer items-center justify-center gap-2 text-[2.5vh] font-bold text-red-800 lg:w-[25%]"
            onClick={() => handleTabClick(index)}
          >
            {activeTab === index && (
              <Image
                src="/images/main/tab-focus-left.png"
                alt="main-bg"
                width={45}
                height={21}
                className="h-[2.5vh] w-[15%]"
              />
            )}
            {tab.label}
            {activeTab === index && (
              <Image
                src="/images/main/tab-focus-right.png"
                alt="main-bg"
                width={45}
                height={21}
                className="h-[2.5vh] w-[15%]"
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="flex h-full flex-col items-center rounded-xl border border-gray-300 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="flex h-full w-full flex-col items-center overflow-scroll"
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
