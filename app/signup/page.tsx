'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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

const benefits = [
  '7 天免费试用',
  '无需信用卡',
  '立即获得 50 个免费视频生成配额',
  '完整访问所有 AI 模型',
];

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { name, email, password, agree });
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-br from-white via-blue-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <motion.div
        className="container-custom max-w-lg w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Card */}
        <motion.div
          variants={item}
          className="glass-effect p-8 rounded-2xl"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">开始免费试用</h1>
            <p className="text-dark-600 dark:text-dark-300">
              加入数千名成功的创作者
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={item} className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg mb-6 space-y-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2">
                全名
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
                <input
                  type="text"
                  placeholder="张三"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2">
                电子邮件
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={item}>
              <label className="block text-sm font-semibold mb-2">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-dark-400 hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Terms */}
            <motion.div variants={item}>
              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-4 h-4 rounded border-dark-300 text-primary focus:ring-primary mt-0.5"
                  required
                />
                <span>
                  我同意
                  <Link href="#" className="text-primary hover:text-secondary">
                    服务条款
                  </Link>
                  和
                  <Link href="#" className="text-primary hover:text-secondary">
                    隐私政策
                  </Link>
                </span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={item}
              type="submit"
              disabled={!agree}
              className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              创建账户
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div variants={item} className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-200 dark:border-dark-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300">
                或注册
              </span>
            </div>
          </motion.div>

          {/* Social Signup */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            <button className="glass-effect py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Google
            </button>
            <button className="glass-effect py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              GitHub
            </button>
          </motion.div>

          {/* Login Link */}
          <motion.p variants={item} className="text-center mt-6 text-dark-600 dark:text-dark-300">
            已有账户？
            <Link
              href="/login"
              className="text-primary hover:text-secondary font-semibold transition-colors"
            >
              登录
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
}
