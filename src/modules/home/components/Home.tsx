'use client';

import Image from 'next/image';

import ArticleColumn from './ArticleColumn';
import RecordColumn from './RecordColumn';
import Search from './Search';

const Home = () => {
  return (
    <>
      <div className="relative h-[25vh] w-full">
        <Search />
        <Image
          src="/images/main/breakline.png"
          alt="main-bg"
          width={960}
          height={12}
          className="w-full select-none"
        />
        <div className="flex h-auto w-full px-[2%] pb-10">
          <ArticleColumn />
          <RecordColumn />
        </div>
      </div>
    </>
  );
};

export default Home;
