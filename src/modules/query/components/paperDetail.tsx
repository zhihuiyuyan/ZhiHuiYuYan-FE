"use client"

import { PaperItem, usePaperInfo } from '@/common/hooks/useInfo';
import {PaperItem as Item} from './columns/components/Paper'
import { useEffect, useState } from 'react';
const PaperDetail: React.FC<{paper_id: number}> = ({paper_id}) => {
  const {allInfo} = usePaperInfo()
  const [curItem, setCurItem] = useState<PaperItem>();
  const [recommend, setRecommend] = useState<PaperItem[]>();
  useEffect(() => {
    setCurItem(allInfo.filter((item, index) => {
      let judge = item.article_id === Number(paper_id)
      judge && setRecommend(allInfo.slice(index + 1, index + 6))
      judge && console.log(item)
      return judge
    })[0])
  }, []);
  return (
    <div className='w-full h-full justify-center flex items-center'>
      <div className='w-[70vw] h-[90vh] mr-8 flex-col mt-8 '>
        <div className='w-full h-[54vh] rounded-2xl bg-white p-4 overflow-scroll'>
          <h4 className="text-center mt-4">{curItem?.article_name}</h4>
          <h6 className="text-center mt-2">{curItem?.article_author}</h6>
          <div className="bg-bgDefault h-[26vh] rounded-md p-4 relative mt-8">
            <span
              className='bg-bgDefault text-sm text-darkRed text-center rounded-t-md absolute -top-[4vh] left-[2vw] py-2 px-4'>摘要</span>
            {curItem?.abstract}
          </div>
          <div className='flex gap-8 text-blue-500 mt-4'>
            <a href={curItem?.article_url} target={'_blank'}>原文链接</a>
            <a href={curItem?.article_url} target={'_blank'}>PDF下载</a>
            <span>收藏</span>
          </div>
        </div>
        <div className='w-full h-[30vh] rounded-2xl mt-8 bg-white p-4'>
          <h4 className='text-center text-blue-500'>文章脑图</h4>
        </div>
      </div>
      <div className='w-[20vw] h-[90vh] rounded-2xl bg-white p-4 mt-8 overflow-scroll'>
        <h6 className='text-blue-500'>相关论文</h6>
        {recommend && recommend.map((item) => <Item item={item}></Item>)}
      </div>
    </div>
  )
}

export default PaperDetail