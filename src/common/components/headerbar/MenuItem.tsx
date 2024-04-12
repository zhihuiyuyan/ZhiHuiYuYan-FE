import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, value }) => (
  <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
    <Link
      href={href}
      passHref
      className="h-[3vh] w-full select-none font-zheng text-white text-[1.8vh]"
    >
      {value}
    </Link>
  </motion.li>
);

export default MenuItem;
