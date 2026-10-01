/**
 * The four written guides.
 *
 * They are the one part of the site that is an article rather than a tool, so
 * they carry Article JSON-LD and need real publication dates. The dates live
 * here, hand-edited, for the same reason the sitemap refuses a build
 * timestamp: a date that moves on every deploy is a claim Google can check and
 * disbelieve. Revise `modified` when the copy genuinely changes.
 */
import type { RouteKey } from '../i18n/config';
import type { ArticleDates } from './schema';

export type GuideKey = 'teach' | 'avoid' | 'pairs' | 'meanings';

export const GUIDE_KEYS: GuideKey[] = ['teach', 'avoid', 'pairs', 'meanings'];

export const GUIDE_DATES: Record<GuideKey, ArticleDates> = {
  teach: { published: '2026-09-10', modified: '2026-09-10' },
  avoid: { published: '2026-09-10', modified: '2026-09-10' },
  pairs: { published: '2026-09-10', modified: '2026-09-10' },
  meanings: { published: '2026-09-10', modified: '2026-09-10' },
};

export const isGuideKey = (key: RouteKey): key is GuideKey =>
  (GUIDE_KEYS as RouteKey[]).includes(key);
