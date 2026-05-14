'use client';

import { motion } from 'framer-motion';
import { Upload, Wand2, Check, Send } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Upload,
    title: '上传产品',
    description: '上传产品图片或添加产品链接',
  },
  {
    number: 2,
    icon: Wand2,
    title: 'AI 生成',
    description: 'AI 自动创建高质量销售视频',
  },
  {
    number: 3,
    icon: Check,
    title: '审核优化',
    description: '查看预览并进行微调优化',
  },
  {
    number: 4,
    icon: Send,
    title: '一键发布',
    description: '直接发布到 TikTok Shop',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white dark:bg-dark-900 transition-colors duration-300">
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
            简单四步
            <br />
            <span className="gradient-text">快速生成视频</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            从上传到发布，只需几分钟时间
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.number}
                variants={item}
                className="flex gap-6 relative"
              >
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-6 top-20 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-50" />
                )}

                {/* Step Circle */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/50 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 pt-2"
                  whileHover={{ x: 10 }}
                >
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">步骤 {step.number}: {step.title}</h3>
                    <p className="text-dark-600 dark:text-dark-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
