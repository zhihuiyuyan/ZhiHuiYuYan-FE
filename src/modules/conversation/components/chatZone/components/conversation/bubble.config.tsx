'use client';

import ReactMarkdown from 'react-markdown';
import {motion} from 'framer-motion';
import rehypeRaw from 'rehype-raw';

import { bubbleType, ChatRecordProps } from '@/common/hooks/useChatStore';
import { useEffect, useState } from 'react';

export const bubbleConfig: { [key in bubbleType]: ChatRecordProps } = {
  user: {
    role: 'user',
    renderFunction: (children, additionalElem) => (
      <>
        {additionalElem}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
      </>
    ),
  },
  robot: {
    role: 'robot',
    renderFunction: (children, additionalElem, setReadyState, last) => {
      const [renderedText, setRenderedText] = useState<string>('');
      const [readystate, setInnerReadystate] = useState<boolean>(false);
      useEffect(() => {
        let count = 0
        if(last) {
          let timer = setInterval(() => {
            count++;
            setRenderedText(children.slice(0, count))
            if(count >= children.length) {
              setInnerReadystate(true)
              setReadyState && setReadyState()
              clearInterval(timer)
            }
          }, 82)
        } else {
          setRenderedText(children)
          setReadyState && setReadyState()
        }
      }, []);
      return (
        <>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{renderedText}</ReactMarkdown>
          {last &&readystate && <motion.div initial={{ opacity: 0, y: -50 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     exit={{ opacity: 0, y: 50 }}
                                     transition={{ duration: 0.5 }}>{additionalElem}</motion.div>}
          {!last && <div>{additionalElem}</div>}
        </>
      )
    },
  },
};
