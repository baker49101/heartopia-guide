/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ANALYTICS_API_BASE?: string;
  readonly PUBLIC_CF_WEB_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_UMAMI_SCRIPT_URL?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  PagefindUI: new (options: Record<string, unknown>) => unknown;
}
