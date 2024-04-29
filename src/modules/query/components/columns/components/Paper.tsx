import { useEffect, useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import {
  PaperItem as PaperItemType,
  paperInfo,
  usePaperInfo,
} from '@/common/hooks/useInfo';
import { useRouter } from 'next/navigation';

interface PaperItemProps {
  item: PaperItemType;
}

export const PaperItem: React.FC<PaperItemProps> = ({ item }) => {
  const { allInfo } = usePaperInfo();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/query/paper/${item.article_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex h-[20vh] w-full flex-col items-center bg-gray-100"
    >
      <div className="relative my-[3vh] flex h-[14vh] w-full items-center">
        <p className="absolute left-[5%] top-0 text-[2vh] font-semibold">
          {item.article_name}
        </p>
        <p className="absolute left-[5%] top-[3vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800">
          {item.article_author}
        </p>
        <div className="absolute left-[5%] top-[5.5vh] h-[6vh] w-[50%] overflow-hidden text-[1.3vh]  text-gray-700">
          <p className="flex-1">{item.abstract}</p>
        </div>
        <div className="absolute left-[5%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-gray-700">
          <p>{item.topics}</p>
          <p>收藏数：{item.download_count}</p>
        </div>
        <p className="absolute right-[7%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-red-800">
          {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
          已收藏
        </p>
        <p className="absolute right-[8%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-gray-700">
          查看全文
        </p>
      </div>
      {item.article_id !== allInfo[length - 1]?.article_id && (
        <BreaklineDashed className="w-[90%] border-t-2" />
      )}
    </div>
  );
};

const Paper = () => {
  const { filteredList, setAllInfo, setFilterList } = usePaperInfo();
  const [pagination, setPagination] = useState<number>(1);
  const nums = 3;
  useEffect(() => {
    paperInfo.then((res) => {
      setAllInfo(res.items);
      setFilterList('topics');
      setFilterList('belong_db');
    });
  }, []);
  return (
    <>
      {filteredList
        .map((item) => <PaperItem key={item.article_id} item={item} />)
        .slice(0, 3)}
    </>
  );
};

export default Paper;
