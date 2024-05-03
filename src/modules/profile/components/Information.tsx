'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { useIsLogined } from '@/common/hooks/useIsLogined';
import { useProfile } from '@/common/hooks/useProfileStore';
import axios from 'axios';
import { useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

const BUTTON_ITEMS = [
  { herf: '/profile/follow', content: '我的关注' },
  { herf: '/profile/history', content: '浏览历史' },
];

const Information = () => {
  const router = useRouter();
  const token = localStorage.getItem('token');
  const { isLogined, setIsLogined } = useIsLogined();
  const { profile, setProfile } = useProfile();

  const handleGetAvatar = async () => {
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
    if (token) {
      handleGetAvatar();
    }

    setIsLogined(!!token);
  }, [token]);

  return (
    <div className="relative flex h-[14vh] w-full items-center">
      {isLogined ? (
        <Avatar className="relative left-[7.5%] top-[1vh] h-[9vh] w-[9vh] rounded-full bg-gray-100">
          <AvatarImage src="https://www.github.com/Wishforpeace.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      ) : (
        <IoPersonCircleOutline className="relative left-[7.5%] top-[1vh] h-[9vh] w-[9vh] text-gray-500" />
      )}
      <p className="absolute left-[30%] top-[4vh] text-[2vh] font-semibold md:left-[25%] lg:left-[22%] xl:left-[18.5%]">
        {profile.name}
      </p>
      <div className="absolute left-[30%] top-[8vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800 md:left-[25%] lg:left-[22%] xl:left-[18.5%]">
        <p>性别：{profile.gender}</p>
        <BreaklineDashed className="h-[2vh] border-r-2 border-gray-300" />
        <p>机构：{profile.institution}</p>
      </div>
      <div className="absolute right-[10%] flex flex-col gap-[1vh] md:flex-row lg:gap-[3vh]">
        {BUTTON_ITEMS.map((item, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            className="h-[4vh] w-[10vh] rounded-[1vh] bg-red-800 text-[1.7vh] text-white lg:h-[5vh] lg:w-[12vh]"
            onClick={() => {
              router.push(item.herf);
            }}
          >
            {item.content}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Information;
