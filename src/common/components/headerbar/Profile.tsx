import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

import Breakline from '@/common/components/elements/Breakline';

import Drop from './Drop';

const Profile: React.FC = () => {
  const [isClickAuth, setIsClickAuth] = useState(false);

  const handleAuthClick = () => {
    setIsClickAuth(!isClickAuth);
  };
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="absolute right-[5%] top-0 flex h-[7vh] cursor-pointer items-center"
      onClick={handleAuthClick}
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <IoPersonCircleOutline className="h-[4vh] w-[4vh] text-white" />
      </motion.div>
      {isClickAuth && (
        <div className="absolute -right-[3.3vh] top-[6vh] z-10 flex w-[25vh] flex-col items-center">
          <div>
            <Image
              src="/images/header/auth.png"
              alt="logo"
              width={153}
              height={160}
              className="h-[27vh] w-full"
            />
            <div className="absolute left-[3vh] top-[3vh] h-[7vh] w-[7vh] select-none rounded-full bg-[#E7E7E7]"></div>
            <motion.p
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="absolute right-[5vh] top-[5.5vh] font-bold text-[#841710]"
            >
              立即登录
            </motion.p>
          </div>
          <Breakline className="absolute top-[10vh] w-[80%]" />
          <Drop />
        </div>
      )}
    </motion.div>
  );
};

export default Profile;
