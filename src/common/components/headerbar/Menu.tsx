import MenuItem from './MenuItem';

const Menu_ITEMS = [
  { href: '/', value: '实时语情' },
  { href: '/', value: '语言资源' },
  { href: '/', value: '字典查询' },
  { href: '/', value: '科研助手' },
];

const Menu: React.FC = () => {
  return (
    <nav className="absolute left-[25%] top-0 flex h-[7vh] items-center">
      <ul className="flex gap-24">
        {Menu_ITEMS.map((item, index) => (
          <MenuItem key={index} href={item.href} value={item.value} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
