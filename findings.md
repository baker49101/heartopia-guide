# Heartopia 攻略站资料与发现

## 官方与可信资料源

- Heartopia 官方站：`https://heartopia.xd.com/us`
- Steam 页面：`https://store.steampowered.com/app/4025700/Heartopia/`
- GitHub Pages 自定义域名文档：`https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages`
- Astro GitHub Pages 部署文档：`https://docs.astro.build/en/guides/deploy/github/`
- Astro Content Collections：`https://docs.astro.build/en/guides/content-collections/`
- Pagefind 文档：`https://pagefind.app/docs/`

## 内容策略

- 官方资料用于基础介绍、平台信息、社媒链接和版本消息。
- 社区 wiki、论坛、TapTap、Steam 社区指南可作为攻略结构参考，但具体数值、地点、掉落、活动时间需要二次核验。
- 网站内每条图鉴数据应保留 `sourceUrl` 和 `verifiedAt` 字段。

## 技术发现

- 当前工作目录最初不是 git 仓库。
- 本机可用 Node.js 与 npm；暂未检测到 pnpm。
- GitHub Pages 只能托管静态内容，后台统计和实时在线需要外部服务或 serverless。

## 后续待核验

- 官方是否提供可公开使用的新闻 RSS/API。
- Cloudflare Worker + KV/Durable Object 的最终配额与部署账号信息。
- 用户是否希望后台 `/admin` 需要密码保护，还是先跳转到第三方统计后台。
