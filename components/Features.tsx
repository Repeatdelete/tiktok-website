'use client';

import { motion } from 'framer-motion';
import { Zap, Sparkles, TrendingUp, Cpu, Smartphone, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI 视频生成',
    description: '上传产品图片或描述，AI 自动生成高质量销售视频',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: '病毒视频克隆',
    description: '分析爆款视频，AI 快速复制创意策略并优化',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: '直接发布',
    description: '连接 TikTok 账户，一键发布或定时发送视频',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cpu,
    title: '多模型支持',
    description: '支持 Sora、VEO、Wan 等顶级 AI 模型',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Smartphone,
    title: '批量生成',
    description: '一次性创建数百个视频，管理多个 TikTok 账户',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: BarChart3,
    title: '转化追踪',
    description: '实时监控视频表现，优化营销策略',
    color: 'from-indigo-500 to-blue-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <motion.div
        className="container-custom"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">强大功能</span>
            <br />
            助力电商爆单
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            CreatOK 提供一套完整的 AI 视频工具，帮助您快速创建和管理电商视频
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass-effect p-8 rounded-xl h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Border Animation */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
