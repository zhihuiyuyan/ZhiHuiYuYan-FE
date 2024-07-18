import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface MenuItemProps {
  href: string;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = React.memo(({ href, value }) => {
  const [link, setLink] = useState('');

  if (href === '/conversation') {
    useEffect(() => {
      const token = localStorage.getItem('token');
      (async () => {
        try {
          console.log(`Bearer ${token}`);
          const { data } = await axios.post(
            'http://124.222.113.16:5000/llm/sessions',
            {},
            {
              headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
              },
            }
          );
          setLink(`/conversation/${data.data.session_id}`);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('请求出错:', error);
        }
      })();
    }, []);
  }

  return (
    <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <Link
        href={href === '/conversation' ? link : href}
        passHref
        className="h-[3vh] w-full select-none font-zheng text-[1.8vh] text-white"
      >
        {value}
      </Link>
    </motion.li>
  );
});

export default MenuItem;
