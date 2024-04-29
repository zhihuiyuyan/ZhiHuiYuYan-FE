import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { ScholarItem as SchoInfoItem, expertInfo, usePersonInfo as useInfo } from '@/common/hooks/useInfo';
import { useEffect, useState } from 'react';
import { randomFunc } from '@/common/hooks/utils';
interface ScholarItemProps {
  item: SchoInfoItem;
}

const ScholarItem: React.FC<ScholarItemProps> = ({ item }) => {
  const {expert_name, expert_id,paper_num, expert_img, books, followers, isFollowed, personal_profile, research_direction, work_organization, job_title, citations} = item
  const {allInfo} = useInfo()
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="relative flex h-[14vh] w-full items-center">
        <Avatar className="absolute left-0 top-0 h-[9vh] w-[9vh] rounded-full bg-gray-100">
          <AvatarImage src={expert_img} />
          <AvatarFallback>{expert_name}</AvatarFallback>
        </Avatar>
        <p className="absolute left-[30%] top-0 text-[2vh] font-semibold md:left-[25%] lg:left-[22%] xl:left-[15%]">
          {expert_name}
        </p>
        <p className="absolute left-[30%] top-[4vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800 md:left-[25%] lg:left-[22%] xl:left-[15%]">
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
      {expert_id !== allInfo[allInfo.length - 1].expert_id && (
        <BreaklineDashed className="w-[90%] border-t-2" />
      )}
    </div>
  );
};

const Scholar = () => {
  const {filteredList, setAllInfo, allInfo, setFilterList} = useInfo()
  const [pagination, setPagination] = useState<number>(1);
  const nums = 3;
  useEffect(() => {
    !allInfo.length && expertInfo.then((res: {items: any[]}) => {
      console.log(res);
      setAllInfo(res?.items.map((item: Partial<SchoInfoItem>) => ({...item, citations: randomFunc(20, 80), paper_num: randomFunc(8, 12), followers: randomFunc(8, 80)})))
      setFilterList('job_title')
      setFilterList('work_organization')
    })
  }, []);
  return (
    <>
      {filteredList.map((item) => (
        <ScholarItem key={item.expert_id} item={item} />
      )).slice((pagination - 1)*nums, pagination*nums)}
    </>
  );
};

export default Scholar;
