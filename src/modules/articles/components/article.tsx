'use client';

import { AnimatePresence, motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import Breakline from '@/common/components/elements/Breakline';
import { MockArticle, splitWords } from '@/modules/articles/components/mock';
import { ARTICLE_ITEMS, ArticleItem } from '@/modules/home/components/Article';
const ArticlePage: React.FC<{ article: string }> = ({ article }) => {
  const data = ARTICLE_ITEMS.find(
    (item) => item.id === Number(article)
  ) as ArticleItem;
  const { content, readings, title, timestamp } = data;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {MockArticle[article] && (
          <div className="relative mx-auto box-border h-full w-[80vw] bg-mdGray px-8 py-8">
            <header className="m-8 mt-4 text-center text-3xl font-bold text-gray-700">
              国际音标
            </header>
            <div className="mx-auto flex w-4/5 justify-between text-gray-400">
              <span></span>
              <span>日期：XXXX</span>
              <span>浏览次数：XXXX</span>
            </div>
            <Breakline className="mx-auto mb-12 w-11/12"></Breakline>
            {splitWords(MockArticle[article]).map((item) => (
              // <div className="mx-auto mb-2 w-4/5 whitespace-pre-wrap break-words text-xl font-bold">
              //
              // </div>
              <ReactMarkdown>{item}</ReactMarkdown>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticlePage;
