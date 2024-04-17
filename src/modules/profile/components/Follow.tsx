'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import Breakline from '@/common/components/elements/BreaklineDashed';

const TAB_ITEMS = [
  { id: 1, content: '关注学者' },
  { id: 2, content: '论文收藏' },
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

      <div className="flex h-[63vh] w-[80%] flex-col items-center rounded-[2vh] bg-[#F3F3F3] p-[2vh]">
        {tabClicked === 1 && (
          <>
            <div className="">123</div>
            <Breakline className="w-[90%] border-t-2" />
          </>
        )}
      </div>
    </div>
  );
};

export default Follow;
