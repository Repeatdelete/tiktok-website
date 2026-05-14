'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Video, Zap, Clock, Plus } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { icon: Video, label: '生成的视频', value: '247', change: '+12' },
  { icon: TrendingUp, label: '总观看数', value: '125.4K', change: '+8.3%' },
  { icon: Zap, label: '剩余积分', value: '1,850', change: '-150' },
  { icon: Clock, label: '本月使用', value: '89 小时', change: '+45%' },
];

const recentProjects = [
  {
    id: 1,
    name: '产品演示视频',
    status: '已完成',
    date: '2024-05-14',
    views: '2,341',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: '新品上市营销',
    status: '处理中',
    date: '2024-05-13',
    views: '—',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: '客户评价合集',
    status: '已完成',
    date: '2024-05-12',
    views: '5,234',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Dashboard() {
  return (
    <motion.div
      className="p-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Welcome Section */}
      <motion.div variants={item}>
        <div className="glass-effect p-8 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">欢迎回来！👋</h1>
          <p className="text-dark-600 dark:text-dark-300">
            今天又是创作的好日子。让我们开始生成你的下一个爆款视频！
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-effect p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-primary" />
                <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Main Actions */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/app/create"
          className="glass-effect p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">创建新视频</h3>
            <p className="text-sm text-dark-600 dark:text-dark-300">开始生成AI视频</p>
          </div>
        </Link>

        <Link
          href="/app/projects"
          className="glass-effect p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">查看项目</h3>
            <p className="text-sm text-dark-600 dark:text-dark-300">管理所有视频</p>
          </div>
        </Link>

        <Link
          href="/app/billing"
          className="glass-effect p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-4 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">升级计划</h3>
            <p className="text-sm text-dark-600 dark:text-dark-300">获取更多积分</p>
          </div>
        </Link>
      </motion.div>

      {/* Recent Projects */}
      <motion.div variants={item}>
        <div className="glass-effect p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">最近项目</h2>
            <Link href="/app/projects" className="text-primary hover:text-secondary transition-colors">
              查看全部 →
            </Link>
          </div>
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 hover:bg-primary/5 dark:hover:bg-primary/10 rounded-lg transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
                  <div>
                    <p className="font-semibold">{project.name}</p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === '已完成'
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-dark-600 dark:text-dark-300 text-sm min-w-20 text-right">{project.views} 次观看</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
