'use client';

import { useEffect } from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import {
  ScholarItem as SchoInfoItem,
  expertInfo,
  usePersonInfo as useInfo,
} from '@/common/hooks/useInfo';

interface LeftColumnProps {
  scholarID: string;
}

type ScholarItem = {
  name: string;
  avatar: string;
  institution: string;
};

interface ScholarProps {
  item: ScholarItem;
}

const SCHOLAR_ITEMS: ScholarItem[] = [
  {
    name: '姓名',
    avatar: 'https://www.github.com/Wishforpeace.png',
    institution: '所属机构',
  },
  {
    name: '姓名',
    avatar: 'https://www.github.com/BlackishGreen33.png',
    institution: '所属机构',
  },
  {
    name: '姓名',
    avatar: 'https://www.github.com/konodioda727.png',
    institution: '所属机构',
  },
];

const Scholar: React.FC<ScholarProps> = ({ item }) => {
  return (
    <div className="flex h-[5vh] w-[75%] gap-[5%]">
      <Avatar className="h-[5vh] w-[5vh] rounded-full bg-gray-100">
        <AvatarImage src={item.avatar} />
        <AvatarFallback>{item.name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center gap-[0.5vh]">
        <p className="text-[1.3vh] font-semibold text-gray-700">{item.name}</p>
        <p className="text-[1.3vh] font-semibold text-gray-700">
          {item.institution}
        </p>
      </div>
    </div>
  );
};

const LeftColumn: React.FC<LeftColumnProps> = ({ scholarID }) => {
  const { setAllInfo, allInfo } = useInfo();
  const scholar = allInfo.find(
    (item) => item.expert_id === parseInt(scholarID)
  );
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
  } = scholar!;

  useEffect(() => {
    !allInfo.length &&
      expertInfo.then((res: any[]) => {
        setAllInfo(
          res.map((item: Partial<SchoInfoItem>) => ({
            ...item,
          }))
        );
      });
  }, []);

  return (
    <div className="flex flex-[1.8] flex-col gap-[2vh]">
      <div className="relative top-[2vh] flex h-auto flex-col rounded-[1vh] bg-white px-[8%] pb-[4vh] pt-[3vh] shadow-md">
        <div className="relative flex">
          <Avatar className="h-[9vh] w-[9vh] rounded-full bg-gray-100">
            <AvatarImage src={expert_img} />
            <AvatarFallback>{expert_name}</AvatarFallback>
          </Avatar>
          <div className="relative left-[8%] flex w-full flex-col gap-[1vh]">
            <p className="text-[2vh] font-semibold">{expert_name}</p>
            <div className="flex w-[78%] flex-col gap-[1vh] overflow-hidden text-ellipsis text-[1.5vh] text-blue-800">
              <p className="h-auto">所属机构：{work_organization}</p>
              <p className="h-auto">职称：{job_title}</p>
              <p className="h-auto">研究领域：{research_direction}</p>
            </div>
          </div>
        </div>
        <div className="relative left-[5%] top-[2vh] flex w-[60%] justify-between text-[1.3vh] text-gray-700">
          <p>引用数：{citations}</p>
          <p>论文数：{paper_num}</p>
        </div>
      </div>
      <div className="relative top-[2vh] flex flex-col items-center rounded-[1vh] bg-white shadow-md">
        <div className="flex w-full flex-col items-center gap-[1.5vh] pb-[2vh] pt-[2vh]">
          <p className="text-[1.8vh] font-semibold text-blue-800">合作学者</p>
          <div className="flex h-auto w-full flex-col items-center gap-[2vh]">
            {SCHOLAR_ITEMS.map((item, index) => (
              <Scholar key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
