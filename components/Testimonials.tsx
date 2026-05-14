'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '张三',
    role: 'TikTok 店铺老板',
    image: '👨‍💼',
    content: '使用 CreatOK 后，我的视频转化率提升了 300%！完全改变了我的业务。',
    rating: 5,
  },
  {
    name: '李四',
    role: '电商运营',
    image: '👩‍💼',
    content: '之前我需要花几天时间制作视频，现在几分钟就搞定。效率提升太明显了。',
    rating: 5,
  },
  {
    name: '王五',
    role: '小店店长',
    image: '👨‍🔧',
    content: '病毒视频克隆功能太强大了，直接让我把竞品的创意改成我自己的内容。',
    rating: 5,
  },
  {
    name: '赵六',
    role: '内容创作者',
    image: '👩‍🎨',
    content: '没有视频制作经验也能做出专业的视频，CreatOK 是内容创作者的救星。',
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-dark-900 transition-colors duration-300">
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
            用户好评
            <br />
            <span className="gradient-text">来自真实用户</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-xl"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
