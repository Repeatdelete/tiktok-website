'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Plus,
  Library,
  Users,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { icon: LayoutDashboard, label: '仪表板', href: '/app' },
  { icon: Plus, label: '创建视频', href: '/app/create' },
  { icon: FileText, label: '我的项目', href: '/app/projects' },
  { icon: Library, label: '资源库', href: '/app/library' },
  { icon: Users, label: '团队', href: '/app/team' },
  { icon: CreditCard, label: '订阅与计费', href: '/app/billing' },
  { icon: Settings, label: '设置', href: '/app/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen bg-white dark:bg-dark-900 border-r border-dark-200 dark:border-dark-700 transition-all duration-300 z-40"
      animate={{ width: isOpen ? 280 : 80 }}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 border-b border-dark-200 dark:border-dark-700 flex items-center justify-between px-4">
          {isOpen && <span className="font-bold text-lg gradient-text">CreatOK</span>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
          >
            {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`mx-2 px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isOpen && <span className="font-semibold">{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Help & Support */}
        <div className="border-t border-dark-200 dark:border-dark-700 p-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
            <HelpCircle className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-semibold">帮助</span>}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
