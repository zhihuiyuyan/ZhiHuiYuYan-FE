'use client';

import Collection from './Collection';
import Scholar from './Scholar';
import { Tabs } from './Tabs';

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
