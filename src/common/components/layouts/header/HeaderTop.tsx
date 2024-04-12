'use client';

import Image from 'next/image';

import Navigation from '../../headerbar/Navigation';

const HEADER_BG_WIDTH = 960;
const HEADER_BG_HEIGHT = 67;

const HeaderTop: React.FC = () => {
  return (
    <header className="relative h-[8vh] w-full">
      <div className="h-[7vh] w-full bg-[#5B210F]">
        <Image
          src="/images/header/header-bg.png"
          alt="header-bg"
          width={HEADER_BG_WIDTH}
          height={HEADER_BG_HEIGHT}
          className="h-[8vh] w-full select-none "
        />
      </div>
      <Navigation />
    </header>
  );
};

export default HeaderTop;
