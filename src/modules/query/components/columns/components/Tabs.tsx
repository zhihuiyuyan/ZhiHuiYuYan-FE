import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import {
  PaperItem,
  ScholarItem,
  usePaperInfo,
  usePersonInfo,
} from '@/common/hooks/useInfo';

export interface TabProps {
  label: React.ReactNode;
  paper_tag: keyof PaperItem;
  person_tag: keyof ScholarItem;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  type: 'scholar' | 'paper';
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, type }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { setSort } = type === 'paper' ? usePaperInfo() : usePersonInfo();
  const handleTabClick = (
    name: keyof ScholarItem | keyof PaperItem,
    index: number
  ) => {
    // @ts-ignore
    setSort(name);
    setActiveTab(index);
  };

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="flex h-[3vh] w-full items-center">
        {tabs.map((tab, index) => (
          <motion.button
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            key={index}
            className={`ml-[5vh] flex h-full cursor-pointer items-center justify-center px-[3vh] text-[1.5vh] ${activeTab === index ? 'rounded-t-[1vh] bg-gray-100 font-semibold text-red-800' : 'text-gray-700'} `}
            onClick={() =>
              handleTabClick(
                type === 'paper' ? tab.paper_tag : tab.person_tag,
                index
              )
            }
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <div className="flex h-[63vh] w-[95%] flex-col items-center rounded-[3vh] bg-gray-100 px-[2%] py-[1vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
