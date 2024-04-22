import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import '@/common/styles/globals.scss';

import ProgressBar from '@/common/components/elements/ProgressBar';
import Layout from '@/common/components/layouts';
import { ModalProvider } from '@/common/components/providers/modal-provider';
import StyledComponentsRegistry from '@/common/libs/registry';
import GlobalStyles from '@/common/styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '智汇语研',
  description: '基于人工智能大模型的智慧文献辅助分析系统',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider attribute="class" defaultTheme="light">
            <ModalProvider />
            <Layout>
              {children}
              <ProgressBar />
            </Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
