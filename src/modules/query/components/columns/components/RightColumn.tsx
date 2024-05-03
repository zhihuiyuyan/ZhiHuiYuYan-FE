import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { useEffect, useState } from 'react';
import { ScholarItem, usePaperInfo } from '@/common/hooks/useInfo';
import { getRelatedScholars } from '@/common/utils/loadData';


interface RightColumnProps {
  className: string;
}

interface ScholarProps {
  item: ScholarItem;
}

const Scholar: React.FC<ScholarProps> = ({ item }) => {
  return (
    <div className="flex h-[5vh] w-[75%] gap-[5%]">
      <Avatar className="h-[5vh] w-[5vh] rounded-full bg-gray-100">
        <AvatarImage src={item.expert_img} />
        <AvatarFallback>{item.expert_name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center gap-[0.5vh]">
        <p className="text-[1.3vh] font-semibold text-gray-700">{item.expert_name}</p>
        <p className="text-[1.3vh] font-semibold text-gray-700">
          {item.work_organization}
        </p>
      </div>
    </div>
  );
};

const RightColumn: React.FC<RightColumnProps> = ({ className }) => {
  const {filteredList, sort} = usePaperInfo()
  const [relatedScholars, setRelatedScholars] = useState<ScholarItem[]>([]);
  useEffect(() => {
    getRelatedScholars(filteredList.map((item) => item.article_author.split(';')).flat(Infinity) as string[]).then(res => {
      setRelatedScholars(res.data)
    })
  }, [filteredList, sort]);
  const columnItemStyle =
    'flex w-full flex-col items-center pt-[1.5vh] gap-[1.5vh]';

  return (
    <div className={className}>
      <div className={columnItemStyle}>
        <div className="flex h-[18vh] w-[80%] items-center justify-center">
          折线图
        </div>
      </div>
      <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
      <div className={columnItemStyle}>
        <p className="text-[1.8vh] font-semibold text-blue-800">相关专家</p>
        <div className="flex h-[3vh] w-full flex-col items-center gap-[2vh]">
          {relatedScholars.length && relatedScholars.map((item, index) => (
            <Scholar key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
