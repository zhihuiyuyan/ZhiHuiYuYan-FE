'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';

import ArticlePage from '@/modules/articles';

const Page: NextPage = () => {
  const params = useParams<{ article: string }>();

  return (
    <>
      <ArticlePage article={params.article}></ArticlePage>
    </>
  );
};

export default Page;
