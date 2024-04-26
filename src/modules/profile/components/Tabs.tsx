import { AnimatePresence, motion } from 'framer-motion';
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
    <div className="relative flex w-full flex-col items-center">
      <div className="flex h-[4vh] w-[80%] items-center">
        {tabs.map((tab, index) => (
          <motion.button
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            key={index}
            className={`ml-[6vh] flex h-full cursor-pointer items-center justify-center px-[3vh] text-[1.85vh] ${activeTab === index ? 'rounded-t-[1vh] bg-gray-100 font-semibold text-blue-800' : 'text-gray-700'} `}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      <div className="flex h-[63vh] w-[80%] flex-col items-center rounded-[3vh] bg-gray-100 px-[3vh] py-[2vh]">
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
