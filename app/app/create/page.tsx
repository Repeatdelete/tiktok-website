'use client';

import { motion } from 'framer-motion';
import { Upload, Wand2, Film, Settings2, Play } from 'lucide-react';
import { useState } from 'react';

const templates = [
  {
    id: 1,
    name: '产品展示',
    description: '展示产品特性和优势',
    icon: '🎁',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: '客户评价',
    description: '展示真实用户反馈',
    icon: '⭐',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 3,
    name: '病毒视频',
    description: '克隆热门视频创意',
    icon: '🔥',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 4,
    name: '教程指南',
    description: '创建产品使用教程',
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
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

export default function CreatePage() {
  const [step, setStep] = useState(1);

  return (
    <motion.div
      className="p-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-2">创���新视频</h1>
        <p className="text-dark-600 dark:text-dark-300">选择模板开始生成你的AI视频</p>
      </motion.div>

      {/* Step Indicator */}
      <motion.div variants={item} className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s <= step
                  ? 'bg-gradient-to-br from-primary to-secondary text-white'
                  : 'bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300'
              }`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`h-1 flex-1 mx-2 ${
                  s < step
                    ? 'bg-gradient-to-r from-primary to-secondary'
                    : 'bg-dark-200 dark:bg-dark-700'
                }`}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Step 1: Select Template */}
      {step === 1 && (
        <motion.div variants={item} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">选择模板</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="glass-effect p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
                onClick={() => setStep(2)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{template.icon}</span>
                  <Play className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold mb-2">{template.name}</h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm">{template.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 2: Upload Content */}
      {step === 2 && (
        <motion.div variants={item} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">上传产品信息</h2>
          <div className="glass-effect p-8 rounded-lg border-2 border-dashed border-primary/50">
            <div className="text-center">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-semibold mb-2">拖拽图片或点击上传</p>
              <p className="text-sm text-dark-600 dark:text-dark-300 mb-4">
                支持 JPG, PNG, 最大 10MB
              </p>
              <button className="btn-primary">
                选择文件
              </button>
            </div>
          </div>
          <div className="glass-effect p-4 rounded-lg">
            <label className="block font-semibold mb-2">产品描述</label>
            <textarea
              className="w-full p-3 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              placeholder="输入产品描述、特点或任何你想在视频中展示的信息..."
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              className="btn-secondary"
              onClick={() => setStep(1)}
            >
              返回
            </button>
            <button
              className="btn-primary"
              onClick={() => setStep(3)}
            >
              下一步
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Customize */}
      {step === 3 && (
        <motion.div variants={item} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">自定义设置</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-effect p-4 rounded-lg">
              <label className="block font-semibold mb-2">视频时长</label>
              <select className="w-full p-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>15 秒</option>
                <option>30 秒</option>
                <option>60 秒</option>
              </select>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <label className="block font-semibold mb-2">AI 模型</label>
              <select className="w-full p-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sora (最快)</option>
                <option>VEO (质量最好)</option>
                <option>CogVideoX (平衡)</option>
              </select>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <label className="block font-semibold mb-2">音乐风格</label>
              <select className="w-full p-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>活力</option>
                <option>专业</option>
                <option>轻松</option>
                <option>无声</option>
              </select>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <label className="block font-semibold mb-2">文字风格</label>
              <select className="w-full p-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>现代</option>
                <option>经典</option>
                <option>创意</option>
                <option>无文字</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              className="btn-secondary"
              onClick={() => setStep(2)}
            >
              返回
            </button>
            <button
              className="btn-primary"
              onClick={() => setStep(4)}
            >
              下一步
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4: Generate */}
      {step === 4 && (
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">生成视频</h2>
          <div className="glass-effect p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center animate-spin">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl font-bold mb-2">AI 正在创意工作中...</p>
            <p className="text-dark-600 dark:text-dark-300 mb-6">预计需要 2-5 分钟，你可以继续其他工作</p>
            <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-2/3 animate-pulse" />
            </div>
            <p className="text-sm text-dark-600 dark:text-dark-300">进度: 66%</p>
          </div>
          <button className="btn-primary w-full">
            查看所有生成中的视频
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
