// import LeftColumn from './LeftColumn';
// import RightColumn from './RightColumn';

type ScholarProps = {
  scholar: string;
};

const Scholar: React.FC<ScholarProps> = ({ scholar }) => {
  const columnStyle =
    'relative top-[2vh] flex h-auto flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      {/* <LeftColumn className={`${columnStyle} flex-[1.8]`} />
      <RightColumn className={`${columnStyle} flex-[5] pb-[2vh]`} /> */}
      {scholar}
    </div>
  );
};

export default Scholar;
