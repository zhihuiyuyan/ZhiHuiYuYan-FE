import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import Pagination from '@/common/components/elements/Pagination';
import {
  ScholarItem as SchoInfoItem,
  usePersonInfo as useInfo,
} from '@/common/hooks/useInfo';

interface ScholarItemProps {
  item: SchoInfoItem;
}

const ScholarItem: React.FC<ScholarItemProps> = ({ item }) => {
  const {
    expert_name,
    expert_id,
    paper_num,
    expert_img,
    books,
    followers,
    isFollowed,
    personal_profile,
    research_direction,
    work_organization,
    job_title,
    citations,
  } = item;
  const { filteredList } = useInfo();
  const router = useRouter();

  return (
    <div className="relative flex w-full flex-col items-center pt-[2vh]">
      <div className="relative flex h-[14vh] w-full items-center">
        <Avatar className="absolute left-[3%] top-0 h-[9vh] w-[9vh] rounded-full bg-gray-100">
          <AvatarImage src={expert_img} />
          <AvatarFallback>{expert_name}</AvatarFallback>
        </Avatar>
        <p
          className="absolute left-[30%] top-0 cursor-pointer text-[2vh] font-semibold hover:underline md:left-[25%] lg:left-[22%] xl:left-[15%]"
          onClick={() => {
            router.push(`/query/scholar/${expert_id}`);
          }}
        >
          {expert_name}
        </p>
        <p className="absolute left-[30%] top-[3.8vh] line-clamp-1 w-[50%] gap-[2vh] overflow-hidden text-ellipsis text-[1.5vh] text-blue-800 md:left-[25%] lg:left-[22%] lg:w-[60%] xl:left-[15%] xl:line-clamp-2 xl:w-[70%]">
          研究领域：{research_direction}
        </p>
        <div className="absolute left-[30%] top-[6.5vh] flex w-[50%] flex-col gap-[0.5vh] text-[1.5vh] text-blue-800 md:left-[25%] lg:left-[22%] xl:left-[15%] xl:top-[8vh] xl:flex-row xl:items-center">
          <p className="flex-1">职称：{job_title}</p>
          <p className="flex-1">所属机构：{work_organization}</p>
        </div>
        <div className="absolute left-[25%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-gray-700 md:left-[22%] lg:left-[20%] xl:left-[13%]">
          <p>引用数：{citations}</p>
          <p>论文数：{paper_num}</p>
        </div>
        <p className="absolute right-[2%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-red-800">
          {isFollowed ? <IoHeart /> : <IoHeartOutline />}
          关注人数：{followers}
        </p>
      </div>
      {expert_id !== filteredList[filteredList.length - 1].expert_id && (
        <BreaklineDashed className="w-[90%] border-t-2" />
      )}
    </div>
  );
};

const Scholar = () => {
  const {
    filteredList,
    search,
    pageSize,
    setCurPage,
    sort,
    filters,
    curPage,
    totalNum,
    setFilteredList,
  } = useInfo();

  useEffect(() => {
    setFilteredList({
      name: 'scholar',
      search,
      page: 1,
      pageSize: pageSize,
      sort: sort as keyof SchoInfoItem,
      filters,
    });
  }, [filters, pageSize]);
  const handleChoose = (index: number) => {
    setCurPage(index);
    setFilteredList({
      page: index,
      search,
      name: 'scholar',
      sort: sort as keyof SchoInfoItem,
      pageSize: pageSize,
      filters,
    });
  };
  return (
    <>
      {filteredList.map((item) => (
        <ScholarItem key={item.expert_id} item={item} />
      ))}
      <Pagination
        pageSize={pageSize}
        dataLength={totalNum}
        onChosen={handleChoose}
        className="relative flex w-full justify-center"
      ></Pagination>
    </>
  );
};

export default Scholar;
