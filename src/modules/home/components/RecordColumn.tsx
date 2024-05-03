'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { useIsLogined } from '@/common/hooks/useIsLogined';
import { useProfile } from '@/common/hooks/useProfileStore';

type RecordItem = {
  id: number;
  type: string;
  value: number;
};

interface RecordItemProps {
  item: RecordItem;
}

const RECORD_ITEMS: RecordItem[] = [
  { id: 1, type: '我的关注', value: 0 },
  { id: 2, type: '浏览记录', value: 0 },
  { id: 3, type: '收藏论文', value: 0 },
];

const RecordItem: React.FC<RecordItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-4">
        <p className="text-[1.8vh] text-red-800">{item.value}</p>
        <p className="text-[1.8vh] font-bold text-blue-800">{item.type}</p>
      </div>
      {item.id !== 3 && (
        <BreaklineDashed className="relative -bottom-5 border-r-2" />
      )}
    </>
  );
};

const RecordColumn: React.FC = () => {
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
        console.log(response.data.data);
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
    <div className="hidden flex-1 lg:block">
      <div className="relative flex h-[17vh] w-full items-center gap-4">
        <div className="absolute left-[15%] flex gap-7">
          {!isLogined ? (
            <Avatar className="h-[9vh] w-[9vh] rounded-full bg-gray-100">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          ) : (
            <IoPersonCircleOutline className="h-[10vh] w-[10vh] text-gray-500" />
          )}
          <p className="relative top-[1vh] text-[2.2vh] font-bold text-gray-700">
            {isLogined ? profile.name : '尚未登录'}
          </p>
        </div>
      </div>
      <div className="relative flex h-[50vh] w-full flex-col items-center">
        <div className="relative -mt-3 flex w-[90%]">
          {RECORD_ITEMS.map((item) => (
            <RecordItem key={item.id} item={item} />
          ))}
        </div>
        <BreaklineDashed className="w-[90%] border-t-2" />
        <p className="relative left-[10%] top-0 w-full text-[2vh] text-gray-500">
          最近浏览
        </p>
      </div>
    </div>
  );
};
export default RecordColumn;
