import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { IoPersonCircleOutline } from 'react-icons/io5';

interface NavItemProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, imgSrc, imgAlt, ...rest }) => {
  return (
    <motion.li whileTap={{ scale: 0.9 }}>
      <Link href={href} passHref {...rest}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={57}
          height={23}
          className="relative top-0.5 h-[3vh] w-full select-none"
        />
      </Link>
    </motion.li>
  );
};

const navItems = [
  { href: '/', imgSrc: '/images/header/实时语情.png', imgAlt: '实时语情' },
  { href: '/', imgSrc: '/images/header/语言资源.png', imgAlt: '语言资源' },
  { href: '/', imgSrc: '/images/header/字典查询.png', imgAlt: '字典查询' },
  { href: '/', imgSrc: '/images/header/科研助手.png', imgAlt: '科研助手' },
];

const HeaderTop: React.FC = () => {
  return (
    <header className="relative h-[8vh] w-full">
      <div className="h-[7vh] w-full bg-[#5B210F]">
        <Image
          src="/images/header/header-bg.png"
          alt="header-bg"
          width={960}
          height={67}
          className="h-[8vh] w-full select-none"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-[7vh] w-full items-center">
        <motion.div whileTap={{ scale: 0.9 }} className="absolute left-[5%]">
          <Link
            href="/"
            passHref
            className="flex items-center justify-center gap-2"
          >
            <Image
              src="/images/header/logo.png"
              alt="logo"
              width={25}
              height={25}
              className="h-[3vh] w-[3vh] select-none"
            />
            <Image
              src="/images/header/民族语研.png"
              alt="logo"
              width={89}
              height={30}
              className="relative top-1 h-[4vh] w-[110%] select-none"
            />
          </Link>
        </motion.div>
        <nav className="absolute left-[25%] top-0 flex h-[7vh] items-center">
          <ul className="flex gap-24">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
          </ul>
        </nav>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute right-[5%] top-0 flex h-[7vh] cursor-pointer items-center"
        >
          <IoPersonCircleOutline className="h-[4vh] w-[4vh] text-white" />
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderTop;
