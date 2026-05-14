'use client';

import { motion } from 'framer-motion';
import { Search, Filter, Download, Trash2, Eye, MoreVertical } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: '产品演示视频',
    thumbnail: '🎬',
    date: '2024-05-14',
    duration: '0:45',
    views: '2,341',
    status: '已完成',
    size: '45.2 MB',
  },
  {
    id: 2,
    title: '新品上市营销',
    thumbnail: '🎥',
    date: '2024-05-13',
    duration: '1:20',
    views: '—',
    status: '处理中',
    size: '—',
  },
  {
    id: 3,
    title: '客户评价合集',
    thumbnail: '📱',
    date: '2024-05-12',
    duration: '1:05',
    views: '5,234',
    status: '已完成',
    size: '52.1 MB',
  },
  {
    id: 4,
    title: '教程说明书',
    thumbnail: '📚',
    date: '2024-05-11',
    duration: '2:30',
    views: '1,203',
    status: '已完成',
    size: '78.5 MB',
  },
  {
    id: 5,
    title: '节日促销视频',
    thumbnail: '🎉',
    date: '2024-05-10',
    duration: '0:30',
    views: '8,932',
    status: '已完成',
    size: '38.9 MB',
  },
  {
    id: 6,
    title: '品牌宣传片',
    thumbnail: '🌟',
    date: '2024-05-09',
    duration: '3:15',
    views: '12,456',
    status: '已完成',
    size: '95.3 MB',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  return (
    <motion.div
      className="p-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-2">我的项目</h1>
        <p className="text-dark-600 dark:text-dark-300">管理和查看你所有生成的视频</p>
      </motion.div>

      {/* Toolbar */}
      <motion.div variants={item} className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
          <input
            type="text"
            placeholder="搜索项目..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <button className="glass-effect p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          {selectedItems.length > 0 && (
            <button className="glass-effect p-2 rounded-lg hover:bg-red-500/10 transition-colors text-red-500">
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Projects Table */}
      <motion.div variants={item} className="glass-effect rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-200 dark:border-dark-700">
              <th className="px-6 py-4 text-left">
                <input type="checkbox" className="w-4 h-4 rounded" />
              </th>
              <th className="px-6 py-4 text-left font-semibold">项目名称</th>
              <th className="px-6 py-4 text-left font-semibold">时长</th>
              <th className="px-6 py-4 text-left font-semibold">观看数</th>
              <th className="px-6 py-4 text-left font-semibold">状态</th>
              <th className="px-6 py-4 text-left font-semibold">日期</th>
              <th className="px-6 py-4 text-left font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <tr key={idx} className="border-b border-dark-200 dark:border-dark-700 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    onChange={(e) =>
                      setSelectedItems(
                        e.target.checked
                          ? [...selectedItems, project.id]
                          : selectedItems.filter((id) => id !== project.id)
                      )
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.thumbnail}</span>
                    <div>
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-sm text-dark-600 dark:text-dark-300">{project.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{project.duration}</td>
                <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{project.views}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === '已完成'
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-dark-600 dark:text-dark-300 text-sm">{project.date}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                      <Eye className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                      <Download className="w-5 h-5 text-primary" />
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

      {/* Pagination */}
      <motion.div variants={item} className="flex justify-center gap-2">
        <button className="px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 hover:bg-primary/10 transition-colors">上一页</button>
        <button className="px-4 py-2 rounded-lg bg-primary text-white">1</button>
        <button className="px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 hover:bg-primary/10 transition-colors">2</button>
        <button className="px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 hover:bg-primary/10 transition-colors">下一页</button>
      </motion.div>
    </motion.div>
  );
}
