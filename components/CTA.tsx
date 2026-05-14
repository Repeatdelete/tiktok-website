'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5 transition-colors duration-300">
      <motion.div
        className="container-custom text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Main Heading */}
        <motion.h2
          variants={item}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          准备好了吗？
          <br />
          <span className="gradient-text">开始创建爆款视频</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto"
        >
          加入数千名成功的卖家，用 AI 驱动您的 TikTok 电商业务。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/signup"
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            免费开始试用
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
          <button className="btn-secondary inline-flex items-center justify-center gap-2">
            联系我们
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Trust Message */}
        <motion.p
          variants={item}
          className="text-dark-500 dark:text-dark-400 mt-8"
        >
          ✅ 无需信用卡 • ✅ 7 天免费试用 • ✅ 随时取消
        </motion.p>
      </motion.div>
    </section>
  );
}
