# CreatOK - AI TikTok E-commerce Video Generation Platform

一个完整的 Creatok.ai 网站复刻版本，使用 Next.js、React、Tailwind CSS 和 Framer Motion 构建。

## 功能特性

✨ **完整的网站结构**
- 响应式设计（移动端、平板、桌面）
- 暗黑/浅色主题切换
- 平滑动画和交互效果
- 多页面路由（首页、关于、登录、注册等）

🎨 **核心页面**
- **首页** - 英雄区域、功能介绍、工作流程、定价、用户评价、行动号召
- **关于页面** - 品牌故事和核心价值观
- **登录页面** - 用户认证界面
- **注册页面** - 免费试用注册

⚡ **交互功能**
- Framer Motion 动画
- Glass Morphism 设计
- 响应式导航菜单
- 平滑滚动
- 悬停效果
- 主题切换
- 表单交互

## 技术栈

- **框架**: Next.js 14
- **UI 库**: React 18
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion
- **图标**: Lucide React
- **状态管理**: Zustand
- **语言**: TypeScript

## 快速开始

### 前置要求
- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目结构

```
.
├── app/
│   ├── page.tsx                 # 首页
│   ├── layout.tsx               # 根布局
│   ├── globals.css              # 全局样式
│   ├── about/
│   │   └── page.tsx             # 关于页面
│   ├── login/
│   │   └── page.tsx             # 登录页面
│   └── signup/
│       └── page.tsx             # 注册页面
├── components/
│   ├── Header.tsx               # 导航栏
│   ├── Hero.tsx                 # 英雄区域
│   ├── Features.tsx             # 功能介绍
│   ├── HowItWorks.tsx           # 工作流程
│   ├── Pricing.tsx              # 定价表
│   ├── Testimonials.tsx         # 用户评价
│   ├── CTA.tsx                  # 行动号召
│   └── Footer.tsx               # 页脚
├── tailwind.config.js           # Tailwind 配置
├── postcss.config.js            # PostCSS 配置
├── next.config.js               # Next.js 配置
├── tsconfig.json                # TypeScript 配置
└── package.json                 # 项目依赖
```

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run lint` - 运行 ESLint

## 自定义

### 修改颜色主题

编辑 `tailwind.config.js`：

```js
colors: {
  primary: '#6366f1',      // 改为你的主颜色
  secondary: '#8b5cf6',    // 改为你的辅助颜色
}
```

### 修改内容

所有文本内容都在各个组件中，可以直接编辑。

### 添加新页面

在 `app/` 目录下创建新文件夹和 `page.tsx` 文件：

```
app/
  └── your-new-page/
      └── page.tsx
```

## 部署

### Vercel（推荐）

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. 更新 `next.config.js` 的输出配置
2. 推送到 GitHub
3. 在仓库设置中启用 GitHub Pages

### Netlify

连接你的 GitHub 仓库到 Netlify，自动部署。

## 文件许可

MIT License - 自由使用和修改

## 贡献

欢迎提交 Issue 和 Pull Request！

## 支持

如有问题，请提交 Issue 或联系我们。

---

**注意**: 这是一个复刻版本，用于学习和演示目的。所有原始内容和品牌属于 CreatOK 官方。
