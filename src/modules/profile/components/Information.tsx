'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

const BUTTON_ITEMS = [
  { herf: '/profile/follow', content: '我的关注' },
  { herf: '/profile/history', content: '浏览历史' },
];

const Information = () => {
  const router = useRouter();

  return (
    <div className="relative flex h-[14vh] w-full items-center">
      <div className="relative left-[7.5%] top-[1vh] h-[9vh] w-[9vh] rounded-full bg-[#E7E7E7]"></div>
      <p className="absolute left-[30%] top-[4vh] text-[2vh] font-semibold md:left-[25%] lg:left-[22%] xl:left-[18.5%]">
        姓名
      </p>
      <div className="absolute left-[30%] top-[8vh] flex items-center gap-[2vh] text-[1.5vh] text-[#0B489B] md:left-[25%] lg:left-[22%] xl:left-[18.5%]">
        <p>性别：女</p>
        <BreaklineDashed className="h-[2vh] border-r-2 border-[#B9B9B9]" />
        <p>机构：</p>
      </div>
      <div className="absolute right-[10%] flex flex-col gap-[1vh] md:flex-row lg:gap-[3vh]">
        {BUTTON_ITEMS.map((item, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            className="h-[4vh] w-[10vh] rounded-[1vh] bg-[#841710] text-[1.7vh] text-white lg:h-[5vh] lg:w-[12vh]"
            onClick={() => {
              router.push(item.herf);
            }}
          >
            {item.content}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Information;
