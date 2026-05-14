'use client';

import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '功能', href: '#features' },
      { label: '定价', href: '#pricing' },
      { label: '安全', href: '#' },
      { label: '更新日志', href: '#' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: '文档', href: '#' },
      { label: '教程', href: '#' },
      { label: '博客', href: '#' },
      { label: '社区', href: '#' },
    ],
  },
  {
    title: '法律',
    links: [
      { label: '隐私政策', href: '#' },
      { label: '服务条款', href: '#' },
      { label: '联系我们', href: '#' },
      { label: '反馈', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:hello@creatok.ai', label: 'Email' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12 md:py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                C
              </div>
              <span className="font-bold text-xl">CreatOK</span>
            </Link>
            <p className="text-gray-400 text-sm">
              用 AI 创建爆款 TikTok 电商视频
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2024 CreatOK. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
