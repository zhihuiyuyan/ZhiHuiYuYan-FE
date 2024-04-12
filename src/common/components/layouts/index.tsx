'use client';

import { useTheme } from 'next-themes';

import HeaderTop from './header/HeaderTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme!);

  return (
    <>
      <div className="flex flex-col">
        <HeaderTop />
        <main className="transition-all duration-300">{children}</main>
      </div>
    </>
  );
};

export default Layout;
