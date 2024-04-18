import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

type RecordItem = {
  id: number;
  type: string;
  value: number;
};

interface RecordItemProps {
  item: RecordItem;
}

const RECORD_ITEMS: RecordItem[] = [
  { id: 1, type: '我的关注', value: 0 },
  { id: 2, type: '浏览记录', value: 0 },
  { id: 3, type: '收藏论文', value: 0 },
];

const RecordItem: React.FC<RecordItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-4">
        <p className="text-[1.8vh] text-[#AC6461]">{item.value}</p>
        <p className="text-[1.8vh] font-bold text-[#0B489B]">{item.type}</p>
      </div>
      {item.id !== 3 && (
        <BreaklineDashed className="relative -bottom-5 border-r-2" />
      )}
    </>
  );
};

const RecordColumn: React.FC = () => {
  return (
    <div className="hidden flex-1 lg:block">
      <div className="relative flex h-[17vh] w-full items-center gap-4">
        <div className="absolute left-[15%] flex gap-7">
          <Avatar className="h-[9vh] w-[9vh] rounded-full bg-[#E7E7E7]">
            <AvatarImage src="https://www.github.com/Wishforpeace.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <p className="relative text-[2.2vh] font-bold text-[#474747]">
            用户名
          </p>
        </div>
      </div>
      <div className="relative flex h-[50vh] w-full flex-col items-center">
        <div className="relative -mt-3 flex w-[90%]">
          {RECORD_ITEMS.map((item) => (
            <RecordItem key={item.id} item={item} />
          ))}
        </div>
        <BreaklineDashed className="w-[90%] border-t-2" />
        <p className="relative left-[10%] top-0 w-full text-[2vh] text-[#6F6F6F]">
          最近浏览
        </p>
      </div>
    </div>
  );
};
export default RecordColumn;
