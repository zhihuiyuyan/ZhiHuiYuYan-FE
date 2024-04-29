'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';

import Scholar from '@/modules/scholar';

const Page: NextPage = () => {
  const params = useParams<{ scholar: string }>();

  return (
    <>
      <Scholar scholarID={params.scholar} />
    </>
  );
};

export default Page;
