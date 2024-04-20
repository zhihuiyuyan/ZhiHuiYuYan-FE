import { Tabs } from './Tabs';
import Article from './Article';
import Achievement from './Achievement';

const ArticleColumn: React.FC = () => {
  const TABS = [
    {
      label: '学术动态',
      children: <Article />,
    },
    {
      label: '前沿成果',
      children: <Achievement />,
    },
  ];

  return <Tabs tabs={TABS} />;
};

export default ArticleColumn;
