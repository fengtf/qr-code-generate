# 🎨 二维码可视化配置器

一个功能强大、界面精美的二维码在线生成工具，支持丰富的样式自定义和实时预览。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ 主要特性

- 🎯 **实时预览** - 所有配置修改即时生效，所见即所得
- 🎨 **丰富的样式选项** - 支持多种点样式、角落样式、渐变色等
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- 🚀 **快速预设** - 内置多种精美预设样式，一键应用
- 💾 **多格式导出** - 支持 PNG 和 SVG 格式下载
- 🖼️ **中心图片** - 支持添加 Logo 或自定义图片
- 🎭 **角落装饰** - 支持自定义角落图片装饰
- 📐 **智能缩放** - 预览自动适应容器，下载保持原始尺寸
- 🎪 **单屏操作** - 优化的布局设计，所有配置在一屏内完成

## 🖥️ 在线预览

本项目为纯静态网页，可以直接在浏览器中打开使用。

## 📦 安装使用

### 方式一：直接使用

1. 克隆仓库

```bash
git clone https://github.com/yourusername/qr-code-generate.git
cd qr-code-generate
```

2. 使用本地服务器打开

```bash
# 使用 live-server (推荐)
npm install -g live-server
live-server

# 或使用 Python
python -m http.server 8080

# 或使用 Node.js http-server
npx http-server
```

3. 在浏览器中访问 `http://localhost:8080`

### 方式二：在线部署

可以直接部署到以下平台：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

只需将项目文件上传即可，无需构建步骤。

## 📖 功能说明

### 🎨 快速预设

提供 8 种精心设计的预设样式：

- 经典黑白
- 渐变蓝紫
- 活力橙红
- 清新绿色
- 优雅粉紫
- 科技蓝
- 柔和圆点
- 星空璀璨

### ⚙️ 基础配置

- **二维码内容**: 支持文本、URL、WiFi 信息等
- **尺寸设置**: 自定义宽度和高度 (100-2000px)
- **边距控制**: 调整二维码周围的留白
- **渲染类型**: 选择 SVG 或 Canvas 渲染
- **整体形状**: 方形或圆形

### 🔧 高级选项

#### QR 选项

- **版本控制**: 0-40，自动或手动指定
- **容错率**: L(7%)、M(15%)、Q(25%)、H(30%)

#### 点样式

- **点类型**: 方形、圆点、圆角、超圆角、优雅、优雅圆角、星形
- **点颜色**: 纯色或渐变
- **渐变选项**: 线性/径向渐变，支持旋转角度

#### 角落样式

- **方块类型**: 方形、圆点、超圆角
- **点类型**: 方形、圆点、星形
- **颜色自定义**: 独立设置角落颜色

#### 背景样式

- **背景颜色**: 支持透明或任意颜色
- **圆角设置**: 0-1 之间的圆角系数

#### 中心图片

- **图片来源**: URL 或本地上传
- **尺寸控制**: 0-1 之间的比例
- **边距设置**: 图片周围留白
- **背景处理**: 可选隐藏图片下方的点

#### 角落图片

- **装饰图片**: 支持 SVG 格式的角落装饰
- **上传方式**: URL 或本地上传

### 💾 导出功能

- **PNG 格式**: 适合一般使用，支持高分辨率
- **SVG 格式**: 矢量格式，可无限缩放
- **配置导出**: 一键复制 JSON 配置代码

## 🎯 使用场景

- 📱 个人名片/社交媒体
- 🏪 商家收款码
- 🌐 网站/APP 推广
- 📄 文档/产品标识
- 🎫 活动签到/门票
- 📡 WiFi 密码分享
- 🎁 创意设计/装饰

## 🎨 配置代码示例

```javascript
const qrConfig = {
  type: 'svg',
  shape: 'square',
  width: 400,
  height: 400,
  margin: 20,
  data: 'https://github.com',
  qrOptions: {
    typeNumber: 0,
    errorCorrectionLevel: 'Q',
  },
  dotsOptions: {
    type: 'rounded',
    color: '#000000',
  },
  cornersSquareOptions: {
    type: 'extra-rounded',
    color: '#000000',
  },
  cornersDotOptions: {
    type: 'dot',
    color: '#000000',
  },
  backgroundOptions: {
    round: 0,
    color: '#ffffff',
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 4,
  },
};
```

## 📱 响应式设计

- **桌面端** (≥1400px): 双列布局，配置和预览并排显示
- **平板端** (≥768px): 优化的双列网格布局
- **移动端** (<768px): 单列布局，配置优先显示

## 🔍 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🚀 性能优化

- 智能预览缩放：大尺寸二维码自动缩放到 400px 预览
- 懒加载：延迟加载确保库文件完全加载
- 防抖处理：优化实时更新性能
- CSS 硬件加速：流畅的动画和过渡效果

## 📂 项目结构

```
qr-code-generate/
├── index.html          # 主页面
├── app.js             # 主应用逻辑
├── presets.js         # 预设配置
├── style.css          # 样式表
├── lib/               # 第三方库
│   └── qr-code-styling.js
└── README.md          # 说明文档
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 更新日志

### v1.0.0 (2025-01-13)

- ✨ 初始版本发布
- 🎨 8 种预设样式
- 📱 响应式设计
- 🖼️ 支持中心图片和角落图片
- 💾 PNG/SVG 导出功能
- 🎯 智能预览缩放
