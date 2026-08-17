# 走哪啦 (ZounaLa) - 官方产品宣传网站

> **记录走过的路，和发呆的时光。**  
> 专为生活漫步者、户外探索者与回忆收藏家打造的本地优先、零隐私妥协的生活痕迹与 Moment 记录器宣传官网。

---

## 📖 项目简介

本目录（`website/`）包含 **走哪啦 (ZounaLa)** 的官方静态宣传网站源码。设计风格深度对标 **Apple Pro 旗舰产品发布页**（如 iPhone Pro / Apple Watch Ultra），采用极具沉浸感的高级深空暗黑主题、流体毛玻璃质感（Glassmorphism）、微交互动效与 Bento Grid 特性矩阵，全方位呈现产品的核心价值主张与工程美学。

---

## ✨ 网站设计与核心亮点

### 1. 类似苹果官方旗舰级视觉语言
* **深空黑与灵动光晕**：Obsidian `#000000` / `#0a0a0f` 色调搭配多层径向渐变环境光。
* **高斯模糊磨砂玻璃**：顶部导航栏与浮层卡片支持 `backdrop-filter: saturate(180%) blur(20px)`。
* **真实 iPhone 16 Pro 灵动岛机身展示**：外置 4 个响应式悬浮玻璃气泡，直观呈现产品关键卖点。
* **Bento Grid（便当盒网格）**：模块化层次分明地展现足迹追踪、发呆打卡、半年热力图、小组件生态等。

### 2. 突出四大核心特质 (Four Pillars)
* ⚡️ **本地优先 (Local-First Architecture)**：SwiftData + 沙盒持久化，脱网全功能可用，告别云端宕机与网络延迟。
* 🛡️ **密码级安全 (Rock-Solid Security)**：Curve25519 非对称身份密钥、防伪签名二维码名片、全生命周期备份管家。
* 👁️‍🗨️ **绝对隐私 (Absolute Privacy)**：0 广告、0 统计 SDK、0 追踪，Apple FoundationModels 端侧模型本地推理。
* ✨ **精致美学 (Refined Craftsmanship)**：SwiftUI 原生动画流、26 周活跃热力矩阵、340×530 离屏高保真拍立得海报。

### 3. 一目了然的目标用户画像 (Target Audiences)
* 🚶‍♂️ **城市漫步与生活探索者 (City Walkers & Flâneurs)**
* ⛰️ **户外徒步与旅行骑行爱好者 (Hikers, Cyclists & Adventurers)**
* 💌 **亲密伴侣与回忆收藏家 (Couples, Families & Memory Curators)**
* 🔒 **隐私先锋与量化自我践行者 (Privacy Advocates & Quantified Selfers)**

### 4. 丰富的高级前端交互
* **实机体验模拟器 (Interactive Showcase)**：支持 4 大核心 Tab（足迹地图、发呆时间线、亲密里程碑、端侧周报）无缝切换。
* **26 周生活打卡热力图**：根据 182 天连续活跃度动态生成的矩阵图，支持鼠标悬浮 Tooltip 交互。
* **无聊度滑块实时演示**：动态体验从“轻微放空 ☕️”至“实在太无聊了 🤯”的趣味反馈。
* **运动数据看板跳动动画**：模拟户外实时计算距离、卡路里、步数与配速。
* **FAQ 常见问题折叠风琴**：解答关于离线、续航、防发烫与数据迁移的核心疑问。

---

## 📂 目录结构

```text
website/
├── index.html           # 官网主落地页 (Landing Page)
├── privacy.html         # 隐私与数据主权白皮书页面
├── styles.css           # Apple Pro 设计系统样式表（包含全局 CSS 变量与响应式断点）
├── app.js               # 原生 JS 交互引擎（平滑滚动、Tab 切换、模拟器与热力图计算）
├── README.md            # 本说明文档
└── assets/              # 视觉资源目录
    └── images/          # 截图、图标与示例相片
        ├── icon.png     # App 图标 (高清)
        ├── guide.png    # 引导界面精选主图
        ├── UI-1.PNG ~ UI-12.png # 原生 SwiftUI 实机界面截图与素材
        └── ...
```

---

## 🛠 技术栈

* **核心技术**：HTML5（语义化标签 + SEO 元数据规范）、CSS3（现代 CSS 自定义属性、Flexbox/Grid、Keyframes）、原生 JavaScript（ES6+、IntersectionObserver）。
* **依赖情况**：**零外部框架、零第三方 CDN 依赖、零构建打包步骤**，纯静态单页架构，极速加载，脱网即开。
* **响应式适配**：完美适配桌面大屏（4K / Retina）、笔记本、iPad / 平板电脑以及各种尺寸的智能手机移动端。

---

## 🚀 本地运行与预览指南

由于本站为纯静态页面，您可以使用以下任意一种方式在本地运行和预览：

### 方法一：使用 Python 内置简易 HTTP 服务器（推荐）
```bash
# 进入项目根目录
cd /path/to/zounala

# 启动本地服务（指定 website 目录）
python3 -m http.server 8080 --directory website

# 在浏览器中访问：
# http://localhost:8080
```

### 方法二：使用 Node.js / npx
```bash
# 进入 website 目录
cd website

# 使用 serve 运行
npx serve .
```

### 方法三：直接在浏览器中打开
在 macOS 终端中直接运行：
```bash
open website/index.html
```

---

## 🚢 部署上线方式

本网站适合部署在任何静态托管服务平台：

### 1. GitHub Pages
1. 将代码推送到 GitHub 仓库。
2. 在仓库的 **Settings** -> **Pages** 中，将 Source 选为部署分支，路径选择 `/website`（或将 website 内文件置于根目录/gh-pages 分支）。

### 2. Cloudflare Pages / Vercel / Netlify
* **Root Directory**: `website`
* **Build Command**: 留空（无需编译）
* **Output Directory**: `.` 或 `website`

### 3. Nginx / Apache
直接将 `website/` 目录中的所有文件拷贝至 Web 服务器的 `html` 或 `www` 根目录即可。

---

## 📝 维护与个性化定制

* **修改文案与链接**：直接编辑 [`index.html`](file:///Users/dev/Code/aimagent/zounala/website/index.html)，修改标题、App Store 下载链接或 GitHub 地址。
* **修改色彩与排版**：编辑 [`styles.css`](file:///Users/dev/Code/aimagent/zounala/website/styles.css) 顶部的 `:root` 变量（如主强调色 `--apple-blue`、背景底色 `--bg-primary` 等）。
* **替换实机截图**：将新的高清应用截图替换到 [`assets/images/`](file:///Users/dev/Code/aimagent/zounala/website/assets/images/) 目录下同名文件即可。

---

## 📄 许可证与声明

* 走哪啦 (ZounaLa) 品牌及视觉资产保留所有权利。
* 秉承 **Local-First & Absolute Privacy** 理念，本站不包含任何商业追踪脚本与 Cookie 收集。
