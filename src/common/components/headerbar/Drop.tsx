import Link from 'next/link';

import DropItem from './DropItem';

const DROP_ITEMS = [
  { href: '/profile', value: '个人信息' },
  { href: '/', value: '浏览历史' },
  { href: '/', value: '我的关注' },
];

const Drop: React.FC = () => (
  <div className="absolute top-[14vh] flex flex-col gap-4">
    {DROP_ITEMS.map((item, index) => (
      <Link key={index} href={item.href}>
        <DropItem value={item.value} />
      </Link>
    ))}
  </div>
);

export default Drop;
