# 心动小镇攻略手账

面向 Heartopia / 心动小镇玩家的轻量攻略站，计划部署到 GitHub Pages，并使用 `qichuan.xyz` 作为自定义域名。

## 技术栈

- Astro 静态站
- Markdown 攻略页
- TypeScript 数据文件
- Pagefind 静态搜索
- GitHub Pages 部署
- Cloudflare Worker + D1 统计模板

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建会输出到 `dist`，并生成 Pagefind 搜索索引。

## 统计配置

主站支持以下环境变量：

```text
PUBLIC_ANALYTICS_API_BASE=https://api.qichuan.xyz
PUBLIC_CF_WEB_ANALYTICS_TOKEN=your-cloudflare-token
PUBLIC_UMAMI_SCRIPT_URL=https://cloud.umami.is/script.js
PUBLIC_UMAMI_WEBSITE_ID=your-umami-website-id
```

只需要今日浏览和基础后台时，配置 `PUBLIC_ANALYTICS_API_BASE` 即可接入 `workers/` 里的 Cloudflare Worker 模板。

## GitHub Pages

仓库包含 `.github/workflows/deploy.yml`。推送到 `main` 后会自动构建并发布 Pages。

自定义域名文件位于 `public/CNAME`，内容为：

```text
qichuan.xyz
```
