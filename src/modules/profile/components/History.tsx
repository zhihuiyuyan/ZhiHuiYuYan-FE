'use client';

import { motion } from 'framer-motion';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

type PaperItem = {
  id: number;
  title: string;
  author: string;
  content: string;
  type: string;
  collections: number;
  isCollected: boolean;
  followers: number;
};

interface PaperItemProps {
  item: PaperItem;
}

const RECENT_PAPER_ITEMS: PaperItem[] = [
  {
    id: 1,
    title: '文章',
    author: '作者',
    content: '內容',
    type: '期刊',
    collections: 999,
    isCollected: true,
    followers: 99,
  },
];

const SEVENDAYS_PAPER_ITEMS: PaperItem[] = [
  {
    id: 1,
    title: '文章',
    author: '作者',
    content: '內容',
    type: '期刊',
    collections: 999,
    isCollected: true,
    followers: 99,
  },
  {
    id: 2,
    title: '文章',
    author: '作者',
    content: '內容',
    type: '期刊',
    collections: 999,
    isCollected: true,
    followers: 100,
  },
  {
    id: 3,
    title: '文章',
    author: '作者',
    content: '內容',
    type: '期刊',
    collections: 999,
    isCollected: true,
    followers: 100,
  },
];

const PaperItem: React.FC<PaperItemProps> = ({ item }) => {
  return (
    <div className="relative my-[1vh] flex h-[20vh] w-full flex-col items-center rounded-[2vh] bg-[#F3F3F3]">
      <div className="relative my-[3vh] flex h-[14vh] w-full items-center">
        <p className="absolute left-[5%] top-0 text-[2vh] font-semibold">
          {item.title}
        </p>
        <p className="absolute left-[5%] top-[3vh] flex items-center gap-[2vh] text-[1.5vh] text-[#0B489B]">
          {item.author}
        </p>
        <div className="absolute left-[5%] top-[5.5vh] w-[50%] text-[1.3vh] text-[#545454]">
          <p className="flex-1">{item.content}</p>
        </div>
        <div className="absolute left-[5%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-[#676767]">
          <p>{item.type}</p>
          <p>收藏数：{item.collections}</p>
        </div>
        <p className="absolute right-[7%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-[#943C3C]">
          {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
          已收藏
        </p>
        <p className="absolute right-[8%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-[#676767]">
          下载全文
        </p>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="relative top-[5vh] flex h-[5vh] w-[65%] min-w-[220px]"
      >
        <input className="flex-[4] rounded-l-lg border-2 border-[#841710] px-[2%] text-[1.8vh] outline-none lg:flex-[6]" />
        <button className="flex-1 rounded-r-lg bg-[#841710] px-[2%] text-[1.8vh] text-white">
          检索
        </button>
      </motion.div>
    </>
  );
};

const History = () => {
  return (
    <>
      <Search />
      <div className="relative top-[8vh] flex h-[73vh] w-[85%] flex-col overflow-y-auto scrollbar-hide">
        <p className="relative left-[5%] my-[1vh] w-[95%] text-[2.3vh] font-semibold text-[#0B489B]">
          最近
        </p>
        <div>
          {RECENT_PAPER_ITEMS.map((item) => (
            <PaperItem key={item.id} item={item} />
          ))}
        </div>
        <p className="relative left-[5%] my-[1vh] w-[95%] text-[2.3vh] font-semibold  text-[#0B489B]">
          七天内
        </p>
        {SEVENDAYS_PAPER_ITEMS.map((item) => (
          <PaperItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default History;
