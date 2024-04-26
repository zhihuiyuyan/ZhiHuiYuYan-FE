import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { useIsLogined } from '@/common/hooks/useIsLogined';
import { useModal } from '@/common/hooks/useModalStore';

import Drop from './Drop';

const Profile: React.FC = () => {
  const [isClickAuth, setIsClickAuth] = useState(false);

  const { onOpen } = useModal();
  const { isLogined } = useIsLogined();

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
              className={`${isLogined ? 'h-[31.5vh]' : 'h-[25vh]'} w-full`}
            />
            <Avatar className="absolute left-[3vh] top-[3vh] h-[7vh] w-[7vh] rounded-full bg-gray-100">
              <AvatarImage src="https://www.github.com/Wishforpeace.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            {isLogined ? (
              <div>
                <p className="absolute left-[11vh] top-[3.5vh] text-[1.7vh] font-bold text-gray-700">
                  名称：111
                </p>
                <p className="absolute left-[11vh] top-[7vh] text-[1.7vh] font-bold text-gray-700">
                  id：111
                </p>
              </div>
            ) : (
              <motion.p
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="absolute right-[5vh] top-[5.5vh] text-[1.8vh] font-bold text-red-800"
                onClick={() => onOpen('auth')}
              >
                立即登录
              </motion.p>
            )}
          </div>
          <BreaklineDashed className="absolute top-[10vh] w-[80%] border-t-2" />
          <Drop />
        </div>
      )}
    </motion.div>
  );
};

export default Profile;
