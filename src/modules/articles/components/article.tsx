'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Breakline from '@/common/components/elements/Breakline';
import { MockArticle, splitWords } from '@/modules/articles/components/mock';

const ArticlePage: React.FC<{ article: string }> = ({ article }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}>
        {MockArticle[article] && (<div className='w-[90vw] mx-auto h-full bg-mdGray box-border relative py-8 px-8'>
          <header className='text-center text-3xl font-bold text-gray-700 m-8 mt-4'>国际音标</header>
          <div className="flex text-gray-400 justify-between w-4/5 mx-auto">
            <span>作者：XXXX</span>
            <span>日期：XXXX</span>
            <span>浏览次数：XXXX</span>
          </div>
          <Breakline className='w-11/12 mx-auto mb-12'></Breakline>
          {splitWords(MockArticle[article]).map((item) => <div className='mb-2 w-4/5 text-xl font-bold break-words whitespace-pre-wrap mx-auto'>{item}</div>)}
        </div>) }
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticlePage;
