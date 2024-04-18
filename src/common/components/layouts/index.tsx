'use client';

import { useTheme } from 'next-themes';

import HeaderTop from './header/HeaderTop';
import { HTMLAttributes } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme!);

  return (
    <>
      <div className='flex flex-col h-dvh bg-bgDefault' >
        <HeaderTop />
        <main className="transition-all duration-300 flex-1">{children}</main>
      </div>
    </>
  );
};

export default Layout;
