/**
 * Turning dictionary entries into the shapes the views and JSON-LD builders
 * expect. Placeholders are resolved once, here, so the FAQPage schema and the
 * visible <details> always carry byte-identical text - the audit script
 * compares the two counts, and Google penalises a mismatch in substance.
 */
import type { Lang } from '../i18n/config';
import { fill, type Vars } from '../i18n';
import type { FaqItem } from './schema';

export interface DictFaq {
  q: string;
  a: string;
}

export function faqItems(faqs: readonly DictFaq[], lang: Lang, vars: Vars = {}): FaqItem[] {
  return faqs.map((faq) => ({
    question: fill(faq.q, lang, vars),
    answer: fill(faq.a, lang, vars),
  }));
}
