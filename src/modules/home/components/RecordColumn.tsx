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
        <p className="text-[#AC6461]">{item.value}</p>
        <p className="font-bold text-[#0B489B]">{item.type}</p>
      </div>
      {item.id !== 3 && (
        <BreaklineDashed className="relative -bottom-5 border-r-2" />
      )}
    </>
  );
};

const RecordColumn: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative flex h-[17vh] w-full items-center gap-4">
        <div className="absolute left-[10%] flex gap-7">
          <div className="h-[9vh] w-[9vh] rounded-full bg-[#E7E7E7]"></div>
          <p className="relative text-xl font-bold text-[#474747]">用户名</p>
        </div>
      </div>
      <div className="relative flex h-[50vh] w-full flex-col items-center">
        <div className="relative -mt-3 flex w-full">
          {RECORD_ITEMS.map((item) => (
            <RecordItem key={item.id} item={item} />
          ))}
        </div>
        <BreaklineDashed className="w-[90%] border-t-2" />
        <p className="absolute left-[10%] top-[8.5vh] text-lg text-[#6F6F6F]">
          最近浏览
        </p>
      </div>
    </div>
  );
};
export default RecordColumn;
