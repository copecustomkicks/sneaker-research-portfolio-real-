import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { renderMarkdown, toPlainText, estimateReadingMinutes } from '@/lib/markdown';
import { isValidIsoDate } from '@/lib/utils';
import type { ResearchLogEntry, ResearchLogSummary } from '@/types';

const LOG_DIR = path.join(process.cwd(), 'content', 'research-log');

/**
 * Files starting with "_" are templates, not entries. Everything else with a
 * .md or .mdx extension is picked up automatically — you never edit a list of
 * entries by hand.
 */
function listEntryFiles(): string[] {
  if (!fs.existsSync(LOG_DIR)) return [];
  return fs
    .readdirSync(LOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .filter((file) => !file.startsWith('_'))
    .sort();
}

function fail(file: string, message: string): never {
  throw new Error(
    `Research log error in content/research-log/${file}: ${message}\n` +
      'Fix the frontmatter at the top of that file and save again. ' +
      'See content/research-log/_template.md for the expected fields.'
  );
}

interface RawEntry {
  slug: string;
  file: string;
  data: Record<string, unknown>;
  content: string;
}

function readRawEntries(): RawEntry[] {
  const seenSlugs = new Map<string, string>();
  const seenWeeks = new Map<number, string>();

  const entries = listEntryFiles().map((file) => {
    const raw = fs.readFileSync(path.join(LOG_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, '');

    // ---- validation: these throw during `npm run build`, by design ----
    if (typeof data.title !== 'string' || !data.title.trim()) {
      fail(file, 'the `title` field is missing or empty.');
    }
    if (typeof data.date !== 'string' || !isValidIsoDate(data.date)) {
      fail(file, `\`date\` must be a real calendar date in YYYY-MM-DD form (received: ${String(data.date)}).`);
    }
    if (data.endDate !== undefined && (typeof data.endDate !== 'string' || !isValidIsoDate(data.endDate))) {
      fail(file, `\`endDate\` must be a real calendar date in YYYY-MM-DD form (received: ${String(data.endDate)}).`);
    }
    if (typeof data.week !== 'number' || !Number.isInteger(data.week) || data.week < 0) {
      fail(file, `\`week\` must be a whole number, unquoted (received: ${String(data.week)}).`);
    }
    if (data.hours !== undefined && (typeof data.hours !== 'number' || data.hours < 0)) {
      fail(file, `\`hours\` must be a number, unquoted (received: ${String(data.hours)}).`);
    }
    if (typeof data.summary !== 'string' || !data.summary.trim()) {
      fail(file, 'the `summary` field is missing or empty. One or two sentences is enough.');
    }
    if (data.tags !== undefined && !Array.isArray(data.tags)) {
      fail(file, '`tags` must be a YAML list, for example:\ntags:\n  - materials\n  - planning');
    }

    const previousSlug = seenSlugs.get(slug);
    if (previousSlug) fail(file, `the slug "${slug}" is already used by ${previousSlug}. Rename one of the files.`);
    seenSlugs.set(slug, file);

    const week = data.week as number;
    const previousWeek = seenWeeks.get(week);
    if (previousWeek && !data.draft) {
      fail(file, `week ${week} is already used by ${previousWeek}. Each published entry needs its own week number.`);
    }
    seenWeeks.set(week, file);

    return { slug, file, data, content };
  });

  return entries.filter((entry) => entry.data.draft !== true);
}

function toSummary(entry: RawEntry): ResearchLogSummary {
  const { data, content, slug } = entry;
  const tags = Array.isArray(data.tags) ? (data.tags as unknown[]).map(String) : [];
  const plain = toPlainText(content);
  return {
    slug,
    title: String(data.title),
    date: String(data.date),
    endDate: data.endDate ? String(data.endDate) : undefined,
    week: data.week as number,
    semester: data.semester ? String(data.semester) : 'Unassigned',
    phase: data.phase ? String(data.phase) : 'Unassigned',
    status: data.status ? String(data.status) : 'in-progress',
    hours: typeof data.hours === 'number' ? data.hours : 0,
    summary: String(data.summary),
    tags,
    starter: data.starter === true,
    searchText: [data.title, data.summary, data.phase, data.semester, tags.join(' '), plain]
      .join(' ')
      .toLowerCase(),
  };
}

/** Newest first, ties broken by the higher week number. */
function byNewest(a: { date: string; week: number }, b: { date: string; week: number }): number {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1;
  return b.week - a.week;
}

/** All published entries, newest first, without rendered HTML. */
export function getLogSummaries(): ResearchLogSummary[] {
  return readRawEntries().map(toSummary).sort(byNewest);
}

/** Slugs for `generateStaticParams`. */
export function getLogSlugs(): string[] {
  return readRawEntries().map((entry) => entry.slug);
}

/** A single entry with rendered HTML, or null when the slug does not exist. */
export async function getLogEntry(slug: string): Promise<ResearchLogEntry | null> {
  const raw = readRawEntries().find((entry) => entry.slug === slug);
  if (!raw) return null;

  const summary = toSummary(raw);
  const plainText = toPlainText(raw.content);
  const html = await renderMarkdown(raw.content);
  const data = raw.data;

  return {
    ...summary,
    html,
    plainText,
    readingMinutes: estimateReadingMinutes(plainText),
    featuredImage: data.featuredImage ? String(data.featuredImage) : undefined,
    featuredImageAlt: data.featuredImageAlt ? String(data.featuredImageAlt) : undefined,
  };
}

/** Previous (older) and next (newer) entries for in-entry navigation. */
export function getAdjacentEntries(slug: string): {
  previous: ResearchLogSummary | null;
  next: ResearchLogSummary | null;
} {
  const all = getLogSummaries();
  const index = all.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: all[index + 1] ?? null,
    next: all[index - 1] ?? null,
  };
}

export function getLatestEntry(): ResearchLogSummary | null {
  return getLogSummaries()[0] ?? null;
}

/** Entries whose phase name matches, newest first. */
export function getEntriesByPhase(phaseName: string): ResearchLogSummary[] {
  return getLogSummaries().filter(
    (entry) => entry.phase.toLowerCase() === phaseName.toLowerCase()
  );
}

/** Every tag used across the log, with counts, most-used first. */
export function getTagCounts(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const entry of getLogSummaries()) {
    for (const tag of entry.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag)
  );
}
