# 统计与在线人数 Worker

这个目录是可选后端模板，用于给 GitHub Pages 静态站提供：

- `POST /pageview`：记录页面访问
- `POST /online/heartbeat`：记录在线心跳
- `GET /online`：返回最近 2 分钟在线人数
- `GET /stats/today`：返回今日浏览、访客和热门页面

## Cloudflare D1 初始化

```bash
npx wrangler d1 create heartopia_analytics
npx wrangler d1 execute heartopia_analytics --file workers/schema.sql
```

复制 `workers/wrangler.toml.example` 为 `workers/wrangler.toml`，填入 D1 的 `database_id`。

## 部署

```bash
cd workers
npx wrangler deploy
```

部署时推荐直接挂到主站同域路径：

```text
https://xdxz.qichuan.xyz/api/*
```

这样主站会直接请求当前域名下的 `/api/pageview`、`/api/online/heartbeat`、`/api/online` 和 `/api/stats/today`，不需要新域名。

如果你想改成单独统计域名，也可以在 GitHub Pages 构建环境中设置：

```text
PUBLIC_ANALYTICS_API_BASE=https://your-domain.example/api
```

如果暂时不部署 Worker，主站仍然可以正常静态发布，只是后台指标和在线小绿灯会显示待接入状态。
