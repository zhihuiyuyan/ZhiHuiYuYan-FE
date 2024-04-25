'use client';

import { motion } from 'framer-motion';

const Search: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${'/images/main/main-bg.png'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative left-0 top-0 flex h-full w-full items-center justify-center"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex h-[5vh] w-[43%] min-w-[220px]"
        >
          <input className="flex-[3] rounded-l-lg border-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[4]" />
          <button className="flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
            检索
          </button>
        </motion.div>
      </div>
    </>
  );
};
export default Search;
