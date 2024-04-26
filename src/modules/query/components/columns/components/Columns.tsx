import LeftColumn from './LeftColumn';

const Columns: React.FC = () => {
  const columnStyle =
    'relative top-[2vh] flex h-[60vh] flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-[#F9FAFC] px-[2%] pb-10 xl:px-[10%]">
      <LeftColumn className={`${columnStyle} flex-[1.8]`} />
      <div className={`${columnStyle} flex-[5]`}></div>
      <div className={`${columnStyle} flex-[1.5]`}></div>
    </div>
  );
};
export default Columns;
