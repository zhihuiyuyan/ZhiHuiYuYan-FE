import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import Breakline from '@/common/components/elements/BreaklineDashed';

const PAPER_ITEMS = [
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
];

const Collection = () => {
  return (
    <>
      {PAPER_ITEMS.map((item) => (
        <div
          key={item.id}
          className="relative flex w-full flex-col items-center"
        >
          <div className="relative flex h-[14vh] w-full items-center">
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
            <p className="absolute right-[2%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-[#943C3C]">
              {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
              已收藏
            </p>
            <p className="absolute right-[3%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-[#676767]">
              下载全文
            </p>
          </div>
          {item.id !== PAPER_ITEMS.length && (
            <Breakline className="w-[90%] border-t-2" />
          )}
        </div>
      ))}
    </>
  );
};

export default Collection;
