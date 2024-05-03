import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import {
  PaperItem as PaperItemType,
  ScholarItem as SchoInfoItem,
  usePaperInfo,
  usePersonInfo,
} from '@/common/hooks/useInfo';
import { getPapers } from '../../../common/utils/loadData';

export const PaperItem: React.FC<{ item: PaperItemType }> = ({ item }) => {
  const { filteredList } = usePaperInfo();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/query/paper/${item.article_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex h-[20vh] w-full flex-col items-center"
    >
      <div className="relative my-[3vh] flex h-[14vh] w-full items-center">
        <p className="absolute left-[5%] top-0 line-clamp-1 flex w-[92%] cursor-pointer justify-center overflow-hidden text-ellipsis text-[2vh] font-semibold hover:underline">
          {item.article_name}
        </p>
        <p className="absolute left-[5%] top-[3vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800">
          {item.article_author}
        </p>
        <div className="absolute left-[5%] top-[5.5vh] line-clamp-3 w-[50%] overflow-hidden text-ellipsis text-[1.3vh] text-gray-700 md:lg:w-[70%]">
          <p className="flex-1">{item.abstract}</p>
        </div>
        <div className="absolute left-[5%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-gray-700">
          <p>{item.topics}</p>
          <p>浏览量：{item.download_count}</p>
        </div>
        <p className="absolute right-[5%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-red-800">
          {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
          已收藏
        </p>
        <p className="absolute right-[5%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-blue-800">
          下载全文
        </p>
      </div>
      {item.article_id !== filteredList[length - 1]?.article_id && (
        <BreaklineDashed className="w-[90%] border-t-2" />
      )}
    </div>
  );
};

const Paper: React.FC<{ scholarID: string }> = ({ scholarID }) => {
  const [paperList, setPaperList] = useState<PaperItemType[]>([]);
  useEffect(() => {
    getPapers(Number(scholarID)).then(res => setPaperList(res))
  }, []);
  return (
    <>
      {paperList && paperList.map((item) => (
        <PaperItem key={item.article_id} item={item} />
      ))}
    </>
  );
};

const RightColumn: React.FC<{ scholarID: string }> = ({ scholarID }) => {
  return (
    <div className="relative top-[2vh] flex h-auto flex-[5] flex-col items-center gap-[2vh] rounded-[1vh] bg-white px-[2%] py-[3vh]">
      <div className="flex h-[23vh] w-full items-center justify-center bg-gray-200">
        研究方向趋势图
      </div>
      <div className="h-[59vh] w-full overflow-x-hidden overflow-y-scroll">
        <Paper scholarID={scholarID} />
      </div>
    </div>
  );
};

export default RightColumn;
