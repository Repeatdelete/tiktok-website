'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: '高效',
    description: '让内容创作变得简单快速',
  },
  {
    icon: Heart,
    title: '用户优先',
    description: '我们为用户的成功而努力',
  },
  {
    icon: Users,
    title: '社区',
    description: '与全球创作者共同成长',
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20">
        <motion.div
          className="container-custom text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            关于 <span className="gradient-text">CreatOK</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8"
          >
            我们的使命是用 AI 驱动技术，让每个人都能成为内容创作大师
          </motion.p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-dark-800">
        <motion.div
          className="container-custom"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">我们的故事</h2>
            <div className="space-y-4 text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              <p>
                CreatOK 诞生于一个简单的想法：为什么内容创作必须这么复杂？
              </p>
              <p>
                我们看到数百万 TikTok 卖家每天都在为创作优质视频而苦恼。他们缺乏技术、时间和资源。
              </p>
              <p>
                所以我们决定改变这一切。利用最先进的 AI 技术，我们创造了一个平台，让任何人都能在几分钟内创建专业级别的电商视频。
              </p>
              <p>
                今天，CreatOK 已经帮助数千名创作者和卖家实现了他们的梦想。我们承诺继续创新，为用户提供最好的工具。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <motion.div
          className="container-custom"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-center mb-16"
          >
            我们的价值观
          </motion.h2>
          <motion.div
            variants={container}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="glass-effect p-8 rounded-xl text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
