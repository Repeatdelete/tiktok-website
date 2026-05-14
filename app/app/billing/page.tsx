'use client';

import { motion } from 'framer-motion';
import { CreditCard, Check, Download } from 'lucide-react';

const plans = [
  {
    name: '基础',
    price: '29',
    current: false,
    features: ['50个视频/月', '基础AI模型', '邮件支持', '无水印'],
  },
  {
    name: '专业',
    price: '99',
    current: true,
    features: ['500个视频/月', '所有AI模型', '24/7支持', '无水印', '优先生成'],
  },
  {
    name: '企业',
    price: '299',
    current: false,
    features: ['无限视频', 'API接口', '专属客户经理', '自定义集成', 'SLA保证'],
  },
];

const invoices = [
  { id: 1, date: '2024-05-01', amount: '$99', status: '已支付' },
  { id: 2, date: '2024-04-01', amount: '$99', status: '已支付' },
  { id: 3, date: '2024-03-01', amount: '$99', status: '已支付' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BillingPage() {
  return (
    <motion.div
      className="p-6 space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-2">订阅与计费</h1>
        <p className="text-dark-600 dark:text-dark-300">管理你的订阅计划和支付方式</p>
      </motion.div>

      {/* Current Plan */}
      <motion.div variants={item} className="glass-effect p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">当前计划</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">专业计划</p>
            <p className="text-dark-600 dark:text-dark-300">$99/月 • 下次续期：2024-06-14</p>
          </div>
          <button className="btn-secondary">更改计划</button>
        </div>
      </motion.div>

      {/* Plans Comparison */}
      <motion.div variants={item}>
        <h2 className="text-xl font-bold mb-4">所有计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-effect p-6 rounded-lg transition-all duration-300 ${
                plan.current ? 'ring-2 ring-primary shadow-lg shadow-primary/30' : ''
              }`}
            >
              {plan.current && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-bold">
                    当前计划
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold gradient-text mb-6">${plan.price}<span className="text-sm text-dark-600 dark:text-dark-300">/月</span></p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-lg font-semibold transition-all ${
                plan.current
                  ? 'bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300 cursor-not-allowed'
                  : 'btn-primary'
              }`}>
                {plan.current ? '当前计划' : '升级'}
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div variants={item} className="glass-effect p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">支付方式</h2>
        <div className="flex items-center justify-between p-4 bg-dark-100 dark:bg-dark-800 rounded-lg">
          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-primary" />
            <div>
              <p className="font-semibold">Visa • 4242</p>
              <p className="text-sm text-dark-600 dark:text-dark-300">有效期至 12/26</p>
            </div>
          </div>
          <button className="text-primary hover:text-secondary transition-colors">
            编辑
          </button>
        </div>
      </motion.div>

      {/* Invoices */}
      <motion.div variants={item} className="glass-effect rounded-lg overflow-hidden">
        <div className="p-6 border-b border-dark-200 dark:border-dark-700">
          <h2 className="text-xl font-bold">发票历史</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-200 dark:border-dark-700 bg-dark-100 dark:bg-dark-800">
              <th className="px-6 py-4 text-left font-semibold">日期</th>
              <th className="px-6 py-4 text-left font-semibold">金额</th>
              <th className="px-6 py-4 text-left font-semibold">状态</th>
              <th className="px-6 py-4 text-left font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, idx) => (
              <tr key={idx} className="border-b border-dark-200 dark:border-dark-700 hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">{invoice.date}</td>
                <td className="px-6 py-4 font-semibold">{invoice.amount}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-secondary transition-colors inline-flex gap-1 items-center">
                    <Download className="w-4 h-4" />
                    下载
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
