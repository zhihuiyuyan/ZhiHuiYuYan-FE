'use client';

import { Tabs } from '@/modules/profile/components/Tabs';

import Scholar from './Scholar';

const Follow = () => {
  const TABS = [
    {
      label: '关注学者',
      children: <Scholar />,
    },
    {
      label: '论文收藏',
      children: <></>,
    },
  ];

  return <Tabs tabs={TABS} />;
};

export default Follow;
