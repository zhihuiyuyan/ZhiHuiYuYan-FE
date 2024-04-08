import DropItem from './DropItem';

const DROP_ITEMS = ['个人信息', '浏览历史', '我的关注'];

const Drop: React.FC = () => (
  <div className="absolute top-[14vh] flex flex-col gap-4">
    {DROP_ITEMS.map((item, index) => (
      <DropItem key={index} value={item} />
    ))}
  </div>
);

export default Drop;
