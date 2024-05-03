import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

interface ScholarProps {
  scholarID: string;
}

const Scholar: React.FC<ScholarProps> = ({ scholarID }) => {
  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      <LeftColumn scholarID={scholarID} />
      <RightColumn scholarID={scholarID} />
    </div>
  );
};

export default Scholar;
