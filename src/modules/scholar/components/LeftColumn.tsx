'use client';

import { useEffect } from 'react';

import {
  ScholarItem as SchoInfoItem,
  expertInfo,
  usePersonInfo as useInfo,
} from '@/common/hooks/useInfo';

interface LeftColumnProps {
  scholarID: string;
  className?: string;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ scholarID, className }) => {
  const { setAllInfo, allInfo } = useInfo();
  const scholar = allInfo.find(
    (item) => item.expert_id === parseInt(scholarID)
  );

  useEffect(() => {
    !allInfo.length &&
      expertInfo.then((res: any[]) => {
        setAllInfo(
          res.map((item: Partial<SchoInfoItem>) => ({
            ...item,
          }))
        );
      });
  }, []);

  console.log(scholar);

  return <div className={className}>LeftColumn</div>;
};

export default LeftColumn;
