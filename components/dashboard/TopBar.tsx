'use client';

import { Bell, Search, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-16 border-b border-dark-200 dark:border-dark-700 flex items-center justify-between px-6 bg-white dark:bg-dark-900 ml-80"
    >
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-dark-400" />
          <input
            type="text"
            placeholder="搜索..."
            className="w-full pl-10 pr-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </motion.button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-dark-200 dark:border-dark-700">
          <div className="text-right">
            <p className="text-sm font-semibold">张三</p>
            <p className="text-xs text-dark-600 dark:text-dark-300">用户</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold"
          >
            Z
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
