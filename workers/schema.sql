CREATE TABLE IF NOT EXISTS pageviews (
  id TEXT PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  path TEXT NOT NULL,
  title TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pageviews_created_at ON pageviews (created_at);
CREATE INDEX IF NOT EXISTS idx_pageviews_path ON pageviews (path);
CREATE INDEX IF NOT EXISTS idx_pageviews_visitor ON pageviews (visitor_id);

CREATE TABLE IF NOT EXISTS online_sessions (
  visitor_id TEXT PRIMARY KEY,
  path TEXT,
  last_seen_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_online_last_seen ON online_sessions (last_seen_at);
