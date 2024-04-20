'use client';

import { Tabs } from './Tabs';
import Collection from './Collection';
import Scholar from './Scholar';

const Follow = () => {
  const TABS = [
    {
      label: '关注学者',
      children: <Scholar />,
    },
    {
      label: '论文收藏',
      children: <Collection />,
    },
  ];

  return <Tabs tabs={TABS} />;
};

export default Follow;
