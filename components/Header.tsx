'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '功能', href: '#features' },
    { label: '工作流程', href: '#how-it-works' },
    { label: '定价', href: '#pricing' },
    { label: '关于', href: '/about' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 transition-colors duration-300">
      <nav className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
            C
          </div>
          <span className="font-bold text-xl gradient-text hidden sm:inline">CreatOK</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-primary dark:text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors duration-300"
            >
              登录
            </Link>
            <Link
              href="/signup"
              className="btn-primary"
            >
              开始使用
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700"
        >
          <div className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-dark-700">
              <Link
                href="/login"
                className="block text-center px-4 py-2 text-primary dark:text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                登录
              </Link>
              <Link
                href="/signup"
                className="block text-center btn-primary"
              >
                开始使用
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
