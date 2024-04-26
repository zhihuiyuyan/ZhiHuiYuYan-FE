'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchBarProps {
  type: 'normal' | 'history' | 'advanced';
}

const AdvancedSearch: React.FC = () => {
  return (
    <div className="h-[9vh] border-x-2 border-b-2 border-[#841710] bg-white">
      <div className="flex h-[5vh] w-full items-center gap-[2%] pl-[2%]">
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-[#737374]">
          并且&nbsp;
          <FaChevronDown />
        </button>
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-[#737374]">
          全部&nbsp;
          <FaChevronDown />
        </button>
        <div className="flex h-[3vh] w-[60%]">
          <input
            className="w-full rounded-l-[0.5vh] border-y-2 border-l-2 p-[0.5vh] text-[1.3vh] text-[#737374] outline-none"
            placeholder="搜索"
          />
          <p className="rounded-r-[0.5vh] border-y-2 border-r-2 p-[0.5vh] text-[1.3vh] text-[#737374]">
            <IoSearchOutline />
          </p>
        </div>
        <button className="p-[0.5vh] text-[1.3vh] text-[#737374]">
          <FiMinusCircle />
        </button>
      </div>
      <div className="relative -mt-[1vh] flex h-[5vh] w-full items-center gap-[2%] pl-[2%]">
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-[#737374]">
          <FiPlusCircle />
          &nbsp;&nbsp;添加搜索条件
        </button>
        <div className="absolute right-[2%] flex w-[30%] gap-[2%]">
          <button className="flex h-[3vh] flex-1 items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-[#737374]">
            重置条件
          </button>
          <button className="flex h-[3vh] flex-1 items-center justify-center rounded-[0.5vh] border-2 bg-[#C6C6C6] p-[0.5vh] text-[1.3vh] text-white">
            确定
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchBar: React.FC<SearchBarProps> = ({ type }) => {
  const [isAllClicked, setIsAllClicked] = useState(false);
  const [isAdvancedClicked, setIsAdvancedClicked] = useState(false);

  return (
    <>
      {type === 'normal' && (
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex h-[5vh] w-[43%] min-w-[220px]"
        >
          <input className="flex-[3] rounded-l-lg border-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[4]" />
          <button className="flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
            检索
          </button>
        </motion.div>
      )}
      {type === 'history' && (
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="relative top-[5vh] flex h-[5vh] w-[65%] min-w-[220px]"
        >
          <input className="flex-[4] rounded-l-lg border-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[6]" />
          <button className="flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
            检索
          </button>
        </motion.div>
      )}
      {type === 'advanced' && (
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex w-[43%] min-w-[220px] "
        >
          <div className="flex flex-[5] flex-col">
            <div className="flex h-[5vh] w-full min-w-[220px]">
              <button
                className={`relative flex flex-1 items-center justify-center border-x-2 border-y-2 border-[#841710] bg-white px-[2%] text-[1.8vh] text-[#737374] ${isAdvancedClicked ? 'rounded-tl-lg' : 'rounded-l-lg'}`}
                onClick={() => setIsAllClicked(!isAllClicked)}
              >
                全部&nbsp;
                {isAllClicked ? (
                  <FaChevronUp className="absolute right-2" />
                ) : (
                  <FaChevronDown className="absolute right-2" />
                )}
              </button>
              <input className="flex-[3] border-y-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[4]" />
              <button
                className="flex flex-1 items-center justify-center border-y-2 border-[#841710] bg-white text-[1.3vh] text-[#737374]"
                onClick={() => setIsAdvancedClicked(!isAdvancedClicked)}
              >
                高级检索&nbsp;
                {isAdvancedClicked ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {isAdvancedClicked && <AdvancedSearch />}
          </div>
          <button className="h-[5vh] flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
            检索
          </button>
        </motion.div>
      )}
    </>
  );
};
export default SearchBar;
