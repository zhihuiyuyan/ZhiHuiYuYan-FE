'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const Search: React.FC = () => {
  const [isAllClicked, setIsAllClicked] = useState(false);
  const [isAdvancedClicked, setIsAdvancedClicked] = useState(false);

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
          <p
            className="relative flex flex-1 cursor-pointer items-center justify-center rounded-l-lg border-x-2 border-y-2 border-[#841710] bg-white px-[2%] text-[1.8vh] text-[#737374]"
            onClick={() => setIsAllClicked(!isAllClicked)}
          >
            全部&nbsp;
            {isAllClicked ? (
              <FaChevronUp className="absolute right-2" />
            ) : (
              <FaChevronDown className="absolute right-2" />
            )}
          </p>
          <input className="flex-[3] border-y-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[4]" />
          <p
            className="flex flex-1 cursor-pointer items-center justify-center border-y-2 border-[#841710] bg-white text-[1.3vh] text-[#737374]"
            onClick={() => setIsAdvancedClicked(!isAdvancedClicked)}
          >
            高级检索&nbsp;
            {isAdvancedClicked ? <FaChevronUp /> : <FaChevronDown />}
          </p>
          <button className="flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
            检索
          </button>
        </motion.div>
      </div>
    </>
  );
};
export default Search;
