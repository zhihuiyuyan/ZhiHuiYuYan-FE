'use client';

import { useTheme } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  setTheme('light');

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
