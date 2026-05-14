'use client';

import { motion } from 'framer-motion';
import { Play, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-custom text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="glass-effect px-4 py-2 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">AI 驱动的 TikTok 视频生成</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">用 AI 创建</span>
          <br />
          <span>爆款 TikTok 电商视频</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto"
        >
          无需专业技能，一键生成高质量视频。支持病毒视频克隆、批量生成、直接发布到 TikTok Shop。
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: '10K+', label: '视频已生成' },
            { number: '95%', label: '视频转化率' },
            { number: '50+', label: '国家用户' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/signup" className="btn-primary inline-flex items-center justify-center gap-2">
            开始免费试用
            <Play className="w-4 h-4" />
          </Link>
          <button className="btn-secondary inline-flex items-center justify-center gap-2">
            观看演示
            <Play className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Demo Video Area */}
        <motion.div
          variants={item}
          className="relative max-w-3xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-2 md:p-4 hover-scale">
            <div className="bg-dark-900 rounded-lg aspect-video flex items-center justify-center cursor-pointer group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-primary fill-primary" />
                </div>
              </motion.div>
              <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-xs font-semibold">
                演示视频
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={item}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >
          {['⭐ 4.9 评分', '✅ 安全认证', '🚀 快速部署'].map((badge, i) => (
            <div key={i} className="text-sm font-semibold text-dark-600 dark:text-dark-300">
              {badge}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
