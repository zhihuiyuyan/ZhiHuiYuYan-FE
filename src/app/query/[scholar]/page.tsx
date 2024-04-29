'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';

import Scholar from '@/modules/scholar';

const Page: NextPage = () => {
  const params = useParams<{ expert_name: string }>();

  return (
    <>
      <Scholar />
    </>
  );
};

export default Page;
