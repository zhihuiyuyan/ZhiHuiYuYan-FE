'use client';

import { useState } from 'react';

import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import { useSearchInput } from '@/common/hooks/useSearchInputStore';

import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import Subject from './Subject';

const Columns: React.FC = () => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();
  const { searchInput } = useSearchInput();
  const [isGraphClicked, setIsGraphClicked] = useState(false);

  const columnStyle =
    'relative top-[2vh] flex h-auto flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      {isGraphClicked ? (
        <Subject
          className={`${columnStyle} flex-[5] gap-[1vh] !bg-transparent pb-[2vh]`}
          columnStyle={columnStyle}
        />
      ) : searchInput === '' ? (
        <div
          className={`${columnStyle} flex-1`}
          onClick={() => {
            setIsGraphClicked(true);
          }}
        >
          点线网图
        </div>
      ) : (
        <>
          <LeftColumn className={`${columnStyle} flex-[1.8]`} />
          <MiddleColumn className={`${columnStyle} flex-[5] pb-[2vh]`} />
          {PaperOrScholarSelected === '论文' && (
            <RightColumn className={`${columnStyle} flex-[1.5]`} />
          )}
        </>
      )}
    </div>
  );
};

export default Columns;
