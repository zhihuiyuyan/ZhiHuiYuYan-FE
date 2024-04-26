'use client';

import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import Paper from './Paper';
import Scholar from './Scholar';
import { Tabs } from './Tabs';

interface MiddleColumnProps {
  className: string;
}

const PaperItems = () => {
  return <Paper />;
};

const MiddleColumn: React.FC<MiddleColumnProps> = ({ className }) => {
  const { PaperOrScholarSelected, setPaperOrScholarSelected } =
    usePaperOrScholarSelected();

  const PAPER_TABS = [
    {
      label: '最新',
      children: <PaperItems />,
    },
    {
      label: '综合',
      children: <PaperItems />,
    },
    {
      label: '引用数',
      children: <PaperItems />,
    },
  ];

  const SCHOLAR_TABS = [
    {
      label: '最新',
      children: <Scholar />,
    },
    {
      label: '综合',
      children: <Scholar />,
    },
    {
      label: '引用数',
      children: <Scholar />,
    },
  ];

  return (
    <div className={className}>
      <div className="flex w-full gap-[2%] px-[5%] py-[2vh]">
        <button
          className={`h-[3.5vh] w-[12%] rounded-[1vh] text-[1.5vh] font-semibold ${PaperOrScholarSelected === '论文' ? 'bg-[#943C3C] text-white' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => setPaperOrScholarSelected('论文')}
        >
          论文
        </button>
        <button
          className={`h-[3.5vh] w-[12%] rounded-[1vh] text-[1.5vh] font-semibold ${PaperOrScholarSelected === '专家' ? 'bg-[#943C3C] text-white' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => setPaperOrScholarSelected('专家')}
        >
          专家
        </button>
      </div>
      <Tabs
        tabs={PaperOrScholarSelected === '论文' ? PAPER_TABS : SCHOLAR_TABS}
      />
    </div>
  );
};

export default MiddleColumn;
