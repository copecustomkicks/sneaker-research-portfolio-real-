import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

/**
 * Renders a Markdown string to HTML.
 *
 * `allowDangerousHtml` is deliberately OFF. Raw HTML inside a research entry is
 * dropped rather than rendered, which keeps a copy-pasted embed from breaking
 * the page layout or injecting a script.
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

/** Strips Markdown syntax down to searchable plain text. */
export function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^[#>\-*+]\s+/gm, ' ')
    .replace(/[*_~]/g, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** ~220 words per minute, floored at one minute. */
export function estimateReadingMinutes(plainText: string): number {
  const words = plainText ? plainText.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 220));
}
