'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: '初级',
    price: '29',
    period: '月',
    description: '适合刚开始的创作者',
    features: [
      '50 个视频/月',
      '基础 AI 模型',
      'TikTok 发布',
      '邮件支持',
      '无水印输出',
    ],
    cta: '开始使用',
    highlighted: false,
  },
  {
    name: '专业',
    price: '99',
    period: '月',
    description: '适合活跃卖家',
    features: [
      '500 个视频/月',
      '所有 AI 模型',
      '优先级发布',
      '24/7 支持',
      '无水印输出',
      '批量生成工具',
      '视频分析',
    ],
    cta: '立即升级',
    highlighted: true,
  },
  {
    name: '企业',
    price: '299',
    period: '月',
    description: '适合大型企业',
    features: [
      '无限视频',
      'API 接口',
      '专属客户经理',
      '优先技术支持',
      '自定义集成',
      'SLA 保证',
      '团队协作',
    ],
    cta: '联系销售',
    highlighted: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
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
            灵活的
            <br />
            <span className="gradient-text">定价方案</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            选择适合您的计划，随时升级或降级
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              {/* Highlighted Background */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              )}

              <div
                className={`relative glass-effect p-8 rounded-2xl h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'ring-2 ring-primary/50 hover:shadow-2xl hover:shadow-primary/30'
                    : 'hover:shadow-xl hover:shadow-primary/10'
                }`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                      热门推荐
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-dark-600 dark:text-dark-300 ml-2">/{plan.period}</span>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-2">
                    按年计费可享 20% 折扣
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50'
                      : 'border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Link */}
        <motion.div variants={item} className="text-center mt-16">
          <p className="text-dark-600 dark:text-dark-300 mb-4">
            还有疑问？
          </p>
          <Link href="#" className="text-primary hover:text-secondary font-semibold transition-colors">
            查看常见问题 →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
