/** Small shared helpers. No dependencies, safe to use on client or server. */

export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}

/**
 * Formats an ISO date (YYYY-MM-DD) without timezone drift.
 * `new Date('2026-08-24')` parses as UTC midnight, which can render as the
 * previous day in US timezones — so we format the parts directly.
 */
export function formatDate(iso: string, style: 'long' | 'short' | 'numeric' = 'long'): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) return iso;
  const [, year, month, day] = match;
  const monthIndex = Number(month) - 1;
  const monthsLong = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (style === 'numeric') return `${year}-${month}-${day}`;
  if (style === 'short') return `${monthsShort[monthIndex]} ${Number(day)}, ${year}`;
  return `${monthsLong[monthIndex]} ${Number(day)}, ${year}`;
}

export function formatDateRange(start: string, end?: string): string {
  if (!end || end === start) return formatDate(start);
  return `${formatDate(start, 'short')} – ${formatDate(end, 'short')}`;
}

/** True for strings shaped like YYYY-MM-DD that describe a real calendar day. */
export function isValidIsoDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return false;
  const [, y, m, d] = match.map(Number) as unknown as [string, number, number, number];
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function titleCase(value: string): string {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Sorts unique strings alphabetically. */
export function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : plural ?? `${singular}s`;
}

/** Sums a numeric field, ignoring anything that is not a finite number. */
export function sumBy<T>(items: T[], pick: (item: T) => number | undefined): number {
  return items.reduce((total, item) => {
    const value = pick(item);
    return Number.isFinite(value) ? total + (value as number) : total;
  }, 0);
}
