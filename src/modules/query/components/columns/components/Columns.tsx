'use client';

import { useState } from 'react';

import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import { useSearchInput } from '@/common/hooks/useSearchInputStore';

import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import Subject from './Subject';
import EChartComponent from '@/common/components/elements/Chart/Chart';

const Columns: React.FC<{submit?: boolean}> = ({submit}) => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();
  const { searchInput } = useSearchInput();
  const [isGraphClicked, setIsGraphClicked] = useState(false);

  const columnStyle =
    'relative top-[2vh] flex h-auto flex-col items-center rounded-[1vh] bg-white';

  return (
    <div className="relative flex h-auto w-full gap-[1%] bg-gray-50 px-[2%] pb-10 xl:px-[10%]">
      {isGraphClicked && !submit ? (
        <Subject
          className={`${columnStyle} flex-[5] gap-[1vh] !bg-transparent pb-[2vh]`}
          columnStyle={columnStyle}
        />
      ) : !submit ? (
        <div
          className={`${columnStyle} flex-1 relative`}
          onClick={() => {
            setIsGraphClicked(true);
          }}
        >
          <EChartComponent complexity='complex' className='w-[80vw] h-[60vh]' type='mind' data={{data: {'123': [123]}, title: '123', xNames: ['123']}}></EChartComponent>
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
