import { motion } from 'framer-motion';
import Link from 'next/link';

import { useIsLogined } from '@/common/hooks/useIsLogined';

import DropItem from './DropItem';

const DROP_ITEMS = [
  { href: '/profile', value: '个人信息' },
  { href: '/', value: '浏览历史' },
  { href: '/', value: '我的关注' },
];

const Drop: React.FC = () => {
  const { isLogined, setIsLogined } = useIsLogined();
  if (isLogined)
    return (
      <div className="absolute top-[14vh] flex flex-col gap-4">
        {DROP_ITEMS.map((item, index) => (
          <Link key={index} href={item.href}>
            <DropItem value={item.value} />
          </Link>
        ))}
        <motion.p
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="text-[1.7vh] text-[#838383]"
          onClick={() => {
            setIsLogined(false);
          }}
        >
          退出账号
        </motion.p>
      </div>
    );
  else {
    return (
      <p className="absolute top-[17vh] text-[1.5vh] text-[#838383]">
        登录后使用个人服务
      </p>
    );
  }
};

export default Drop;
