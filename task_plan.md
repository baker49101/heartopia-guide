# Heartopia 攻略站任务计划

## 目标

搭建一个轻量、可部署到 GitHub Pages 的 Heartopia / 心动小镇攻略向网站。由于根域名 `qichuan.xyz` 需要继续服务现有博客，攻略站改用 `xdxz.qichuan.xyz` 作为自定义域名。网站需要贴合游戏温暖清新的生活模拟画风，并预留访问统计后台与实时在线“小绿灯”能力。

## 当前任务列表

- [x] 阶段 1：确认技术方向与需求范围
- [x] 阶段 2：初始化 Astro 静态站骨架
- [x] 阶段 3：实现心动小镇风格视觉系统与首页
- [x] 阶段 4：建立攻略文章与图鉴数据结构
- [x] 阶段 5：实现搜索、筛选、统计脚本预留和在线人数组件
- [x] 阶段 6：配置 GitHub Pages、CNAME 与部署说明
- [x] 阶段 7：本地构建验证，递归修复问题

## 技术决策

- 框架：Astro 静态站
- 包管理：npm，本机暂未检测到 pnpm
- 内容：Markdown 内容集合 + JSON/TS 数据
- 搜索：Pagefind，生成静态索引
- 部署：GitHub Pages
- 域名：`xdxz.qichuan.xyz`
- 统计：先预留 Cloudflare Web Analytics / Umami 脚本位
- 实时在线：前端组件调用 `api.qichuan.xyz` 心跳接口，后续可接 Cloudflare Worker

## 风格方向

- 清新、柔和、治愈、生活模拟感
- 奶油白、浅草绿、晴空蓝、浅珊瑚、木质棕
- 手账式分区、贴纸感标签、轻圆角卡片
- 首页直接提供攻略入口，不做营销落地页

## 风险与约束

- GitHub Pages 不能运行传统后端，统计后台与实时在线需要第三方统计或 serverless API。
- Heartopia / 心动小镇资料需要优先引用官方与平台页面，社区资料只作为参考，避免未核验内容进入正式攻略。
- 当前目录初始状态不是 git 仓库，需要用户后续自行或由我协助 `git init` 后推送 GitHub。

## 验证结果

- `npm install`：通过，0 个漏洞。
- `npm run build`：通过，生成 14 个页面、sitemap 和 Pagefind 搜索索引。
- 本地预览：`http://127.0.0.1:4321/`、`/admin/`、`/search/`、`/database/`、`/guides/` 均返回 200。
