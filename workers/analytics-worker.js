const CORS_HEADERS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type'
};

const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...CORS_HEADERS,
      ...(init.headers ?? {})
    }
  });

const readJson = async (request) => {
  try {
    return await request.json();
  } catch {
    return {};
  }
};

const normalizePath = (path) => {
  if (typeof path !== 'string' || !path.startsWith('/')) return '/';
  return path.slice(0, 180);
};

const normalizeVisitor = (visitorId) => {
  if (typeof visitorId !== 'string') return crypto.randomUUID();
  return visitorId.replace(/[^a-zA-Z0-9_.:-]/g, '').slice(0, 80) || crypto.randomUUID();
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (!env.DB) {
      return json({ error: 'D1 database binding DB is missing' }, { status: 500 });
    }

    const url = new URL(request.url);

    if (url.pathname === '/pageview' && request.method === 'POST') {
      const body = await readJson(request);
      const visitorId = normalizeVisitor(body.visitorId);
      const path = normalizePath(body.path);
      const title = typeof body.title === 'string' ? body.title.slice(0, 180) : '';
      const referrer = typeof body.referrer === 'string' ? body.referrer.slice(0, 300) : '';
      const userAgent = request.headers.get('user-agent')?.slice(0, 240) ?? '';

      await env.DB.prepare(
        `INSERT INTO pageviews (id, visitor_id, path, title, referrer, user_agent)
         VALUES (?, ?, ?, ?, ?, ?)`
      )
        .bind(crypto.randomUUID(), visitorId, path, title, referrer, userAgent)
        .run();

      return json({ ok: true });
    }

    if (url.pathname === '/online/heartbeat' && request.method === 'POST') {
      const body = await readJson(request);
      const visitorId = normalizeVisitor(body.visitorId);
      const path = normalizePath(body.path);

      await env.DB.prepare(
        `INSERT INTO online_sessions (visitor_id, path, last_seen_at)
         VALUES (?, ?, CURRENT_TIMESTAMP)
         ON CONFLICT(visitor_id)
         DO UPDATE SET path = excluded.path, last_seen_at = CURRENT_TIMESTAMP`
      )
        .bind(visitorId, path)
        .run();

      return json({ ok: true });
    }

    if (url.pathname === '/online' && request.method === 'GET') {
      await env.DB.prepare(
        `DELETE FROM online_sessions WHERE last_seen_at < datetime('now', '-2 minutes')`
      ).run();
      const result = await env.DB.prepare(
        `SELECT COUNT(*) AS online FROM online_sessions
         WHERE last_seen_at >= datetime('now', '-2 minutes')`
      ).first();

      return json({ online: result?.online ?? 0 });
    }

    if (url.pathname === '/stats/today' && request.method === 'GET') {
      const pageviews = await env.DB.prepare(
        `SELECT COUNT(*) AS count FROM pageviews
         WHERE date(created_at, '+8 hours') = date('now', '+8 hours')`
      ).first();
      const visitors = await env.DB.prepare(
        `SELECT COUNT(DISTINCT visitor_id) AS count FROM pageviews
         WHERE date(created_at, '+8 hours') = date('now', '+8 hours')`
      ).first();
      const topPages = await env.DB.prepare(
        `SELECT path, COUNT(*) AS views FROM pageviews
         WHERE date(created_at, '+8 hours') = date('now', '+8 hours')
         GROUP BY path
         ORDER BY views DESC
         LIMIT 8`
      ).all();

      return json({
        pageviews: pageviews?.count ?? 0,
        visitors: visitors?.count ?? 0,
        topPages: topPages?.results ?? []
      });
    }

    return json({ error: 'Not found' }, { status: 404 });
  }
};
