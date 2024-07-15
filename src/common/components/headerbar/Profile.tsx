import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { useIsLogined } from '@/common/hooks/useIsLogined';
import { useModal } from '@/common/hooks/useModalStore';
import { useProfile } from '@/common/hooks/useProfileStore';

import Drop from './Drop';

const Profile: React.FC = () => {
  const { onOpen } = useModal();
  const { isLogined, setIsLogined } = useIsLogined();
  const { profile, setProfile } = useProfile();

  const [isClickAuth, setIsClickAuth] = useState(false);

  const handleAuthClick = () => {
    setIsClickAuth(!isClickAuth);
  };

  const handleGetAvatar = async (token: string) => {
    try {
      const response = await axios.get(
        'http://124.222.113.16:5000/user/profile',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setProfile(response.data.data);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      handleGetAvatar(token);
    }

    setIsLogined(!!token);
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="absolute right-[5%] top-0 z-50 flex h-[7vh] cursor-pointer items-center will-change-transform"
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
            {isLogined ? (
              <Avatar className="absolute left-[3vh] top-[3vh] h-[7vh] w-[7vh] rounded-full bg-gray-100">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            ) : (
              <IoPersonCircleOutline className="absolute left-[3vh] top-[3vh] h-[7vh] w-[7vh] text-gray-500" />
            )}
            {isLogined ? (
              <div>
                <p className="absolute left-[11vh] top-[3.5vh] text-[1.7vh] font-bold text-gray-700">
                  名称：{profile.name}
                </p>
                <p className="absolute left-[11vh] top-[7vh] text-[1.7vh] font-bold text-gray-700">
                  id：{profile.id}
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
