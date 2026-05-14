'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <motion.div
        className="container-custom max-w-md w-full"
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
            <h1 className="text-3xl font-bold mb-2">欢迎回来</h1>
            <p className="text-dark-600 dark:text-dark-300">
              登录您的 CreatOK 账户
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Remember & Forgot */}
            <motion.div
              variants={item}
              className="flex justify-between items-center text-sm"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-dark-300 text-primary focus:ring-primary"
                />
                <span className="ml-2">记住我</span>
              </label>
              <Link
                href="#"
                className="text-primary hover:text-secondary transition-colors"
              >
                忘记密码？
              </Link>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={item}
              type="submit"
              className="btn-primary w-full mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              登录
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div variants={item} className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-200 dark:border-dark-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-900 text-dark-600 dark:text-dark-300">
                或继续使用
              </span>
            </div>
          </motion.div>

          {/* Social Login */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            <button className="glass-effect py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Google
            </button>
            <button className="glass-effect py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              GitHub
            </button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.p variants={item} className="text-center mt-6 text-dark-600 dark:text-dark-300">
            还没有账户？
            <Link
              href="/signup"
              className="text-primary hover:text-secondary font-semibold transition-colors"
            >
              注册
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
}
