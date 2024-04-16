'use client';
import { motion } from 'framer-motion';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

const Profile = () => {
  return (
    <>
      <div className="flex h-[92vh] w-full items-center justify-center bg-[#F9FAFC]">
        <div className="relative flex h-[88vh] w-[60%] min-w-[50vh] flex-col items-center rounded-[3vh] bg-white">
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
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="h-[4vh] w-[10vh] rounded-[1vh] bg-[#841710] text-[1.7vh] text-white lg:h-[5vh] lg:w-[12vh]"
              >
                我的关注
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="h-[4vh] w-[10vh] rounded-[1vh] bg-[#841710] text-[1.7vh] text-white lg:h-[5vh] lg:w-[12vh]"
              >
                浏览历史
              </motion.button>
            </div>
          </div>
          <BreaklineDashed className="relative w-[85%] border-t-2 border-[#B9B9B9]" />
          <div className="relative flex w-full flex-col items-center gap-[1vh]">
            <p className="relative left-[7.5%] w-full text-[2vh] font-semibold text-[#0B489B]">
              科研经历
            </p>
            <div className="h-[65vh] w-[85%] rounded-[2vh] bg-[#F3F3F3]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
