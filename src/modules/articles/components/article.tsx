'use client';

import { AnimatePresence, motion } from 'framer-motion';

const ArticlePage: React.FC<{ article: string }> = ({ article }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div>{article}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticlePage;
