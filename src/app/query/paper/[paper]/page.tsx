'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';

import PaperDetail from '@/modules/query/components/paperDetail';

const Page: NextPage = () => {
  const params = useParams<{ paper: string }>();

  return (
    <>
      <PaperDetail paper_id={params.paper}></PaperDetail>
    </>
  );
};

export default Page;
