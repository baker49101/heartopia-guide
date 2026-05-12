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

## 地图与攻略扩展资料

- 玩一玩鱼类分布图资料提到水域可按海、湖、河组织，并列出旧海、鲸鱼海、缓风海、东海、城郊湖、草原湖、温泉山湖、森林湖、霞光河、静河、巨木河、潜水河、海钓等区域。该资料属于社区整理，已作为地图结构参考，具体鱼类条件仍标记为待实测。
- TapTap 鱼类观察页聚合了多篇钓鱼攻略，能印证“鱼类按水域、时间、天气、鱼影、爱好等级区分”的攻略组织方式。
- Heartopia.live 有采集攻略页面，可作为采集栏目结构参考，但具体刷新点仍需游戏内核验。
