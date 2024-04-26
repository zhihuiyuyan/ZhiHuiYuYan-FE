'use client';

import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const Columns: React.FC = () => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();

  const columnStyle =
    'relative top-[2vh] flex h-auto flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      <LeftColumn className={`${columnStyle} flex-[1.8]`} />
      <MiddleColumn className={`${columnStyle} flex-[5] pb-[2vh]`} />
      {PaperOrScholarSelected === '论文' && (
        <RightColumn className={`${columnStyle} flex-[1.5]`} />
      )}
    </div>
  );
};

export default Columns;
