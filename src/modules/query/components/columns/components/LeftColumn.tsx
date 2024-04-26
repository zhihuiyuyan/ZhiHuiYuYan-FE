'use client';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import { useState } from 'react';

interface LeftColumnProps {
  className: string;
}

const RadioItem = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="flex cursor-pointer items-center gap-[0.5vh]"
      onClick={() => setIsClicked(!isClicked)}
    >
      <button
        className={`h-[1.3vh] w-[1.3vh] rounded-[0.5vh] border-2 border-gray-100 ${isClicked ? 'bg-[#943C3C]' : 'bg-white'}`}
      ></button>
      <p className="text-[1.3vh] text-gray-500">选项1</p>
    </div>
  );
};

const LeftColumn: React.FC<LeftColumnProps> = ({ className }) => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();

  const columnItemStyle =
    'flex w-full flex-col items-center pt-[1.5vh] gap-[1.5vh]';

  return (
    <div className={className}>
      {PaperOrScholarSelected === '论文' && (
        <>
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">日期</p>
            <div className="flex h-[3vh] w-full justify-center gap-[2%]">
              <button className="w-[30%] rounded-[0.5vh] bg-gray-100 pl-[5%] text-left text-[1.2vh] text-gray-500">
                选择
              </button>
              <BreaklineDashed className="w-[10%] border-b-2" />
              <button className="w-[30%] rounded-[0.5vh] bg-gray-100 pl-[5%] text-left text-[1.2vh] text-gray-500">
                选择
              </button>
            </div>
          </div>
          <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">学科</p>
            <div className="h-[15vh] w-[75%] rounded-[0.5vh] bg-gray-100 p-[1vh]">
              <div className="flex flex-col gap-[0.5vh]">
                <p className="text-[1.3vh] text-gray-800">医学（9）</p>
                <p className="text-[1.3vh] text-gray-800">理学（9）</p>
                <p className="text-[1.3vh] text-gray-800">工学（9）</p>
              </div>
            </div>
          </div>
          <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">期刊</p>
            <div className="grid w-[75%] grid-cols-2 grid-rows-2">
              <RadioItem />
              <RadioItem />
              <RadioItem />
              <RadioItem />
            </div>
          </div>
        </>
      )}
      {PaperOrScholarSelected === '专家' && (
        <div className={columnItemStyle}>
          <p className="text-[1.8vh] font-semibold text-blue-800">职称</p>
          <div className="grid w-[75%] grid-cols-2 grid-rows-2">
            <RadioItem />
            <RadioItem />
            <RadioItem />
            <RadioItem />
          </div>
        </div>
      )}
      <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
      <div className={columnItemStyle}>
        <p className="text-[1.8vh] font-semibold text-blue-800">机构</p>
        <div className="grid w-[75%] grid-cols-2 grid-rows-1">
          <RadioItem />
          <RadioItem />
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
