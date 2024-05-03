'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

import { useSearchInput } from '@/common/hooks/useSearchInputStore';

interface SearchBarProps {
  type: 'normal' | 'advanced' | 'history';
  onSubmit?: (e: any) => void;
}

const AdvancedSearch: React.FC = () => {
  return (
    <div className="h-[9vh] border-x-2 border-b-2 border-red-800 bg-white">
      <div className="flex h-[5vh] w-full items-center gap-[2%] pl-[2%]">
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-gray-500">
          并且&nbsp;
          <FaChevronDown />
        </button>
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-gray-500">
          全部&nbsp;
          <FaChevronDown />
        </button>
        <div className="flex h-[3vh] w-[60%]">
          <input
            className="w-full rounded-l-[0.5vh] border-y-2 border-l-2 p-[0.5vh] text-[1.3vh] text-gray-500 outline-none"
            placeholder="搜索"
          />
          <p className="rounded-r-[0.5vh] border-y-2 border-r-2 p-[0.5vh] text-[1.3vh] text-gray-500">
            <IoSearchOutline />
          </p>
        </div>
        <button className="p-[0.5vh] text-[1.3vh] text-gray-500">
          <FiMinusCircle />
        </button>
      </div>
      <div className="relative -mt-[1vh] flex h-[5vh] w-full items-center gap-[2%] pl-[2%]">
        <button className="flex h-[3vh] items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-gray-500">
          <FiPlusCircle />
          &nbsp;&nbsp;添加搜索条件
        </button>
        <div className="absolute right-[2%] flex w-[30%] gap-[2%]">
          <button className="flex h-[3vh] flex-1 items-center justify-center rounded-[0.5vh] border-2 p-[0.5vh] text-[1.3vh] text-gray-500">
            重置条件
          </button>
          <button className="flex h-[3vh] flex-1 items-center justify-center rounded-[0.5vh] border-2 bg-gray-300 p-[0.5vh] text-[1.3vh] text-white">
            确定
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchBar: React.FC<SearchBarProps> = ({ type, onSubmit }) => {
  const [isAllClicked, setIsAllClicked] = useState(false);
  const [isAdvancedClicked, setIsAdvancedClicked] = useState(false);
  const { searchInput, setSearchInput } = useSearchInput();
  const inputStyle =
    'rounded-l-lg border-2 border-red-800 px-[2%] text-[1.8vh] outline-none';
  const handleInput = (e: any) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit && onSubmit(searchInput);
  };
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className={`flex min-w-[220px] ${type === 'history' ? 'relative top-[5vh] w-[65%]' : 'w-[43%]'} ${type === 'advanced' ? '' : 'h-[5vh]'}`}
    >
      {type === 'advanced' ? (
        <div className="flex flex-[5] flex-col">
          <div className="flex h-[5vh] w-full min-w-[220px]">
            <button
              className={`relative flex flex-1 items-center justify-center border-x-2 border-y-2 border-red-800 bg-white px-[2%] text-[1.8vh] text-gray-500 ${isAdvancedClicked ? 'rounded-tl-lg' : 'rounded-l-lg'}`}
              onClick={() => setIsAllClicked(!isAllClicked)}
            >
              全部&nbsp;
              {isAllClicked ? (
                <FaChevronUp className="absolute right-2" />
              ) : (
                <FaChevronDown className="absolute right-2" />
              )}
            </button>
            <input
              value={searchInput}
              onInput={handleInput}
              className="flex-[3] border-y-2 border-red-800 px-[2%] text-[1.8vh] outline-none lg:flex-[4]"
            />
            <button
              className="flex flex-1 items-center justify-center border-y-2 border-red-800 bg-white text-[1.3vh] text-gray-500"
              onClick={() => setIsAdvancedClicked(!isAdvancedClicked)}
            >
              高级检索&nbsp;
              {isAdvancedClicked ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isAdvancedClicked && <AdvancedSearch />}
        </div>
      ) : (
        <input
          className={`${inputStyle} ${type === 'normal' && 'flex-[3] lg:flex-[4]'} ${type === 'history' && 'flex-[4] lg:flex-[6]'}`}
        />
      )}
      <button
        onClick={handleSubmit}
        className={`flex-1 rounded-r-lg bg-red-800 px-[2%] text-[1.8vh] text-white ${type === 'advanced' ? 'h-[5vh]' : ''}`}
      >
        检索
      </button>
    </motion.div>
  );
};
export default SearchBar;
