'use client';

import { motion } from 'framer-motion';
import { Plus, Mail, Trash2, UserCheck, UserX } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: '张三',
    email: 'zhang@example.com',
    role: '管理员',
    status: '活跃',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: '李四',
    email: 'li@example.com',
    role: '编辑',
    status: '活跃',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: '王五',
    email: 'wang@example.com',
    role: '查看者',
    status: '离线',
    avatar: '👨‍💻',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TeamPage() {
  const [showInviteForm, setShowInviteForm] = useState(false);

  return (
    <motion.div
      className="p-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">团队成员</h1>
          <p className="text-dark-600 dark:text-dark-300">管理你的团队和权限设置</p>
        </div>
        <button
          className="btn-primary inline-flex gap-2 items-center"
          onClick={() => setShowInviteForm(!showInviteForm)}
        >
          <Plus className="w-5 h-5" />
          邀请成员
        </button>
      </motion.div>

      {/* Invite Form */}
      {showInviteForm && (
        <motion.div variants={item} className="glass-effect p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-bold">邀请新成员</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">电子邮件地址</label>
              <input
                type="email"
                placeholder="member@example.com"
                className="w-full px-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">角色</label>
              <select className="w-full px-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>编辑</option>
                <option>查看者</option>
              </select>
            </div>
            <div className="flex gap-4 justify-end">
              <button
                className="btn-secondary"
                onClick={() => setShowInviteForm(false)}
              >
                取消
              </button>
              <button className="btn-primary">发送邀请</button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Members List */}
      <motion.div variants={item} className="glass-effect rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-200 dark:border-dark-700 bg-dark-100 dark:bg-dark-800">
              <th className="px-6 py-4 text-left font-semibold">成员</th>
              <th className="px-6 py-4 text-left font-semibold">邮箱</th>
              <th className="px-6 py-4 text-left font-semibold">角色</th>
              <th className="px-6 py-4 text-left font-semibold">状态</th>
              <th className="px-6 py-4 text-left font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, idx) => (
              <tr key={idx} className="border-b border-dark-200 dark:border-dark-700 hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{member.avatar}</span>
                    <span className="font-semibold">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{member.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    member.status === '活跃'
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-gray-500/20 text-gray-600 dark:text-gray-400'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                      <UserCheck className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-1 hover:bg-red-500/10 rounded transition-colors">
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
