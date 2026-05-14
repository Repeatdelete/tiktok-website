'use client';

import { motion } from 'framer-motion';
import { Plus, Folder, File, Star, Trash2 } from 'lucide-react';

const folders = [
  { id: 1, name: '产品拍摄', items: 24, color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: '客户反馈', items: 12, color: 'from-purple-500 to-pink-500' },
  { id: 3, name: '模板库', items: 45, color: 'from-green-500 to-emerald-500' },
];

const assets = [
  { id: 1, name: '产品图1.png', type: '图像', size: '2.5 MB', date: '2024-05-14', favorite: true },
  { id: 2, name: '产品演示.mp4', type: '视频', size: '145 MB', date: '2024-05-13', favorite: false },
  { id: 3, name: '背景音乐.mp3', type: '音频', size: '5.2 MB', date: '2024-05-12', favorite: true },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LibraryPage() {
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
          <h1 className="text-3xl font-bold mb-2">资源库</h1>
          <p className="text-dark-600 dark:text-dark-300">管理你的图片、视频和其他资源</p>
        </div>
        <button className="btn-primary inline-flex gap-2 items-center">
          <Plus className="w-5 h-5" />
          上传文件
        </button>
      </motion.div>

      {/* Folders */}
      <motion.div variants={item}>
        <h2 className="text-xl font-bold mb-4">文件夹</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <div key={folder.id} className="glass-effect p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${folder.color} flex items-center justify-center text-white mb-4`}>
                <Folder className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">{folder.name}</h3>
              <p className="text-sm text-dark-600 dark:text-dark-300">{folder.items} 项目</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Assets */}
      <motion.div variants={item}>
        <h2 className="text-xl font-bold mb-4">最近上传</h2>
        <div className="glass-effect rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-200 dark:border-dark-700 bg-dark-100 dark:bg-dark-800">
                <th className="px-6 py-4 text-left font-semibold">文件名</th>
                <th className="px-6 py-4 text-left font-semibold">类型</th>
                <th className="px-6 py-4 text-left font-semibold">大小</th>
                <th className="px-6 py-4 text-left font-semibold">上传日期</th>
                <th className="px-6 py-4 text-left font-semibold">操作</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr key={idx} className="border-b border-dark-200 dark:border-dark-700 hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <File className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{asset.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{asset.type}</td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{asset.size}</td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-300 text-sm">{asset.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className={`p-1 rounded transition-colors ${
                        asset.favorite
                          ? 'text-yellow-500'
                          : 'text-dark-400 hover:text-yellow-500'
                      }`}>
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                      <button className="p-1 hover:text-red-500 rounded transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
