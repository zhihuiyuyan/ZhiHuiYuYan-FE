'use client';

import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';

const HomePage: NextPage = () => {
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
      </div>
    </>
  );
};

export default HomePage;
