import type { APIRoute } from 'astro';
import { SITE_URL } from '../lib/schema';

/**
 * robots.txt. Everything on this site is public and crawlable; only the
 * generated JSON payloads are pointless for a crawler to index, and they are
 * left allowed anyway so Googlebot can render the page fully.
 */
const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
