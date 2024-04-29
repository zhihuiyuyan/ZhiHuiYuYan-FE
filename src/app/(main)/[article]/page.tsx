'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';

import ArticlePage from '@/modules/articles';

const Article: NextPage = () => {
  const params = useParams<{ article: string }>();

  return (
    <>
      <ArticlePage article={params.article}></ArticlePage>
    </>
  );
};

export default Article;
