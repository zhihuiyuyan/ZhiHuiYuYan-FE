'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { IoPersonCircleOutline } from 'react-icons/io5';

import Breakline from '../../elements/Breakline';

const NAV_ITEMS = [
  { href: '/', imgSrc: '/images/header/实时语情.png', imgAlt: '实时语情' },
  { href: '/', imgSrc: '/images/header/语言资源.png', imgAlt: '语言资源' },
  { href: '/', imgSrc: '/images/header/字典查询.png', imgAlt: '字典查询' },
  { href: '/', imgSrc: '/images/header/科研助手.png', imgAlt: '科研助手' },
];

const HEADER_BG_WIDTH = 960;
const HEADER_BG_HEIGHT = 67;
const NAV_ITEM_WIDTH = 57;
const NAV_ITEM_HEIGHT = 23;

interface NavItemProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, imgSrc, imgAlt }) => (
  <motion.li whileTap={{ scale: 0.9 }}>
    <Link href={href} passHref>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={NAV_ITEM_WIDTH}
        height={NAV_ITEM_HEIGHT}
        className="relative top-0.5 h-[3vh] w-full select-none"
      />
    </Link>
  </motion.li>
);

const HeaderTop: React.FC = () => {
  const [isClickAuth, setIsClickAuth] = useState(false);

  return (
    <header className="relative h-[8vh] w-full">
      <div className="h-[7vh] w-full bg-[#5B210F]">
        <Image
          src="/images/header/header-bg.png"
          alt="header-bg"
          width={HEADER_BG_WIDTH}
          height={HEADER_BG_HEIGHT}
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
            {NAV_ITEMS.map((item, index) => (
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
          onClick={() => setIsClickAuth(!isClickAuth)}
        >
          <IoPersonCircleOutline className="h-[4vh] w-[4vh] text-white" />
          {isClickAuth && (
            <div className="absolute -right-[3.3vh] top-[6vh] flex w-[25vh] flex-col items-center">
              <div>
                <Image
                  src="/images/header/auth.png"
                  alt="logo"
                  width={153}
                  height={160}
                  className="h-[27vh] w-full"
                />
                <div className="absolute left-[3vh] top-[3vh] h-[7vh] w-[7vh] select-none rounded-full bg-[#E7E7E7]"></div>
                <motion.p
                  whileTap={{ scale: 1.1 }}
                  className="absolute right-[5vh] top-[5.5vh] font-bold text-[#841710]"
                >
                  立即登录
                </motion.p>
              </div>
              <Breakline className="absolute top-[10vh] w-[80%]" />
              <motion.p
                whileTap={{ scale: 1.1 }}
                className="absolute top-[14vh] text-[#0B489B]"
              >
                个人信息
              </motion.p>
              <motion.p
                whileTap={{ scale: 1.1 }}
                className="absolute top-[18vh] text-[#0B489B]"
              >
                浏览历史
              </motion.p>
              <motion.p
                whileTap={{ scale: 1.1 }}
                className="absolute top-[22vh] text-[#0B489B]"
              >
                我的关注
              </motion.p>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderTop;
