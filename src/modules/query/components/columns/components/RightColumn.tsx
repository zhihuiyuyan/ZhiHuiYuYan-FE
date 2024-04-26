import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

type ScholarItem = {
  name: string;
  avatar: string;
  institution: string;
};

interface RightColumnProps {
  className: string;
}

interface ScholarProps {
  item: ScholarItem;
}

const SCHOLAR_ITEMS: ScholarItem[] = [
  {
    name: '姓名',
    avatar: 'https://www.github.com/Wishforpeace.png',
    institution: '所属单位',
  },
  {
    name: '姓名',
    avatar: 'https://www.github.com/BlackishGreen33.png',
    institution: '所属单位',
  },
  {
    name: '姓名',
    avatar: 'https://www.github.com/konodioda727.png',
    institution: '所属单位',
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

const RightColumn: React.FC<RightColumnProps> = ({ className }) => {
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
          {SCHOLAR_ITEMS.map((item, index) => (
            <Scholar key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
