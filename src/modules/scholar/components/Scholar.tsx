import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

interface ScholarProps {
  scholarID: string;
}

const Scholar: React.FC<ScholarProps> = ({ scholarID }) => {
  const columnStyle =
    'relative top-[2vh] flex h-auto flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      <LeftColumn scholarID={scholarID} />
      <RightColumn className={`${columnStyle} flex-[5] pb-[2vh]`} />
    </div>
  );
};

export default Scholar;
