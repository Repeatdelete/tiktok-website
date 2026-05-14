'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <html lang="zh-CN">
      <head>
        <title>CreatOK - AI TikTok 电商视频生成平台</title>
        <meta name="description" content="CreatOK - 用AI生成爆款TikTok电商视频，支持病毒视频克隆、批量生成、直接发布" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={isDark ? 'dark' : ''}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
