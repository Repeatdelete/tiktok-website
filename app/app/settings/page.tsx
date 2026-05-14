'use client';

import { motion } from 'framer-motion';
import { User, Lock, Bell, Zap, LogOut } from 'lucide-react';
import { useState } from 'react';

const settingsMenus = [
  { id: 'profile', icon: User, label: '个人资料' },
  { id: 'security', icon: Lock, label: '账户安全' },
  { id: 'notifications', icon: Bell, label: '通知设置' },
  { id: 'integrations', icon: Zap, label: '集成' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <motion.div
      className="p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-3xl font-bold mb-6">设置</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="glass-effect rounded-lg overflow-hidden">
            {settingsMenus.map((menu) => {
              const Icon = menu.icon;
              return (
                <button
                  key={menu.id}
                  onClick={() => setActiveTab(menu.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors border-b border-dark-200 dark:border-dark-700 last:border-b-0 ${
                    activeTab === menu.id
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-dark-100 dark:hover:bg-dark-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {menu.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <motion.div variants={item} className="space-y-6">
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">个人资料</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">用户名</label>
                    <input
                      type="text"
                      defaultValue="zhangsan"
                      className="w-full px-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">邮箱地址</label>
                    <input
                      type="email"
                      defaultValue="zhang@example.com"
                      className="w-full px-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">公司名称</label>
                    <input
                      type="text"
                      placeholder="你的公司名称"
                      className="w-full px-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button className="btn-primary">
                    保存更改
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <motion.div variants={item} className="space-y-6">
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">账户安全</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-dark-200 dark:border-dark-700">
                    <div>
                      <p className="font-semibold">修改密码</p>
                      <p className="text-sm text-dark-600 dark:text-dark-300">上次修改：2024-03-15</p>
                    </div>
                    <button className="btn-secondary">修改</button>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-dark-200 dark:border-dark-700">
                    <div>
                      <p className="font-semibold">两步验证 (2FA)</p>
                      <p className="text-sm text-dark-600 dark:text-dark-300">尚未启用</p>
                    </div>
                    <button className="btn-primary">启用</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">登录会话</p>
                      <p className="text-sm text-dark-600 dark:text-dark-300">1 个活跃会话</p>
                    </div>
                    <button className="btn-secondary">管理</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <motion.div variants={item} className="space-y-6">
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">通知设置</h2>
                <div className="space-y-4">
                  {['视频生成完成', '每周报告', '特别优惠', '新功能公告'].map((notification, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-primary/5 rounded-lg transition-colors">
                      <span className="font-semibold">{notification}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:peer-checked:bg-primary peer-checked:bg-primary" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Integrations */}
          {activeTab === 'integrations' && (
            <motion.div variants={item} className="space-y-6">
              <div className="glass-effect p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">集成</h2>
                <div className="space-y-4">
                  {['Google', 'Slack', 'Zapier'].map((integration, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-dark-200 dark:border-dark-700 rounded-lg">
                      <span className="font-semibold">{integration}</span>
                      <button className="btn-primary">连接</button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Logout */}
      <motion.div variants={item} className="mt-8">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors font-semibold">
          <LogOut className="w-5 h-5" />
          退出登录
        </button>
      </motion.div>
    </motion.div>
  );
}
