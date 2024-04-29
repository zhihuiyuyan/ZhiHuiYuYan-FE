'use client';

import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import { useMemo } from 'react';
import Paper from './Paper';
import Scholar from './Scholar';
import { TabProps, Tabs } from './Tabs';

interface MiddleColumnProps {
  className: string;
}

type SelecterItem = '论文' | '专家';

const SELECTER_ITEMS: SelecterItem[] = ['论文', '专家'];

const Selector: React.FC = () => {
  const { PaperOrScholarSelected, setPaperOrScholarSelected } =
    usePaperOrScholarSelected();

  const selecterItems = useMemo(
    () =>
      SELECTER_ITEMS.map((content) => (
        <button
          key={content}
          className={`h-[3.5vh] w-[12%] rounded-[1vh] text-[1.5vh] font-semibold ${PaperOrScholarSelected === content ? 'bg-red-800 text-white' : 'bg-gray-100 text-gray-500'}`}
          onClick={() => setPaperOrScholarSelected(content)}
        >
          {content}
        </button>
      )),
    [PaperOrScholarSelected]
  );

  return <>{selecterItems}</>;
};

const MiddleColumn: React.FC<MiddleColumnProps> = ({ className }) => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();

  const tabItems = useMemo(() => {
    return PaperOrScholarSelected === '论文' ? <Paper /> : <Scholar />;
  }, [PaperOrScholarSelected]);

  const tabs: TabProps[] = useMemo(
    () => [
      {
        label: '最新',
        paper_tag: 'publish_time',
        person_tag: 'books',
        children: tabItems,
      },
      {
        label: '综合',
        paper_tag: 'article_id',
        person_tag: 'followers',
        children: tabItems,
      },
      {
        label: '引用数',
        paper_tag: 'download_count',
        person_tag: 'citations',
        children: tabItems,
      },
    ],
    [tabItems]
  );

  return (
    <div className={className}>
      <div className="flex w-full gap-[2%] px-[5%] py-[2vh]">
        <Selector />
      </div>
      <Tabs
        tabs={tabs}
        type={PaperOrScholarSelected === '论文' ? 'paper' : 'scholar'}
      />
    </div>
  );
};

export default MiddleColumn;
