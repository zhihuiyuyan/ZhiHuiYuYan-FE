'use client';

import { useEffect, useState } from 'react';

import { PaperItem, usePaperInfo } from '@/common/hooks/useInfo';

import { PaperItem as Item } from './columns/components/Paper';

const PaperDetail: React.FC<{ paper_id: string }> = ({ paper_id }) => {
  const { filteredList } = usePaperInfo();
  const [curItem, setCurItem] = useState<PaperItem>();
  const [recommend, setRecommend] = useState<PaperItem[]>();
  useEffect(() => {
    setCurItem(
      filteredList.filter((item, index) => {
        let judge = item.article_id === Number(paper_id);
        judge && setRecommend(filteredList.slice(1, index + 6).reverse());
        return judge;
      })[0]
    );
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mr-8 mt-8 h-[84vh] w-[70vw] flex-col justify-between ">
        <div className="h-[50vh] w-full  overflow-scroll rounded-2xl bg-white p-4 shadow">
          <h4 className="mt-4 text-center">{curItem?.article_name}</h4>
          <h6 className="mt-2 text-center">{curItem?.article_author}</h6>
          <div className="relative mt-8 h-[24vh] rounded-md bg-bgDefault p-4 shadow">
            <span className="absolute -top-[4vh] left-[2vw] rounded-t-md bg-bgDefault px-4 py-2 text-center text-sm text-darkRed">
              摘要
            </span>
            {curItem?.abstract}
          </div>
          <div className="mt-4 flex gap-8 text-blue-500">
            <a href={curItem?.article_url} target={'_blank'}>
              原文链接
            </a>
            <a href={curItem?.article_url} target={'_blank'}>
              PDF下载
            </a>
            <span>收藏</span>
          </div>
        </div>
        <div className="mt-8 h-[30vh] w-full rounded-2xl bg-white p-4 shadow">
          <h4 className="text-center text-blue-500">文章脑图</h4>
        </div>
      </div>
      <div className="mt-8 h-[84vh] w-[20vw] overflow-scroll rounded-2xl bg-white p-4 shadow">
        <h5 className="text-blue-500">相关论文</h5>
        {recommend && recommend.map((item) => <Item item={item} />)}
      </div>
    </div>
  );
};

export default PaperDetail;
