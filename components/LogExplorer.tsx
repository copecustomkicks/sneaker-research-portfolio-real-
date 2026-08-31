'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Badge, StatusBadge } from '@/components/Badge';
import { EmptyState } from '@/components/Callout';
import { SpecRail } from '@/components/Section';
import { formatDateRange, cn, pluralize } from '@/lib/utils';
import type { ResearchLogSummary } from '@/types';

interface LogExplorerProps {
  entries: ResearchLogSummary[];
  semesters: string[];
  phases: string[];
  statuses: string[];
  tags: string[];
}

const FILTER_KEYS = ['q', 'semester', 'phase', 'status', 'tag'] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

export function LogExplorer({ entries, semesters, phases, statuses, tags }: LogExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Filters live in the URL so a filtered view can be shared or bookmarked.
  const initial = useMemo(() => {
    const values = {} as Record<FilterKey, string>;
    for (const key of FILTER_KEYS) values[key] = searchParams.get(key) ?? '';
    return values;
  }, [searchParams]);

  const [filters, setFilters] = useState<Record<FilterKey, string>>(initial);

  // Keep local state in step with back/forward navigation.
  useEffect(() => {
    setFilters(initial);
  }, [initial]);

  const pushFilters = useCallback(
    (next: Record<FilterKey, string>) => {
      const params = new URLSearchParams();
      for (const key of FILTER_KEYS) {
        if (next[key]) params.set(key, next[key]);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router]
  );

  const update = useCallback(
    (key: FilterKey, value: string) => {
      const next = { ...filters, [key]: value };
      setFilters(next);
      pushFilters(next);
    },
    [filters, pushFilters]
  );

  const clearAll = useCallback(() => {
    const empty = { q: '', semester: '', phase: '', status: '', tag: '' };
    setFilters(empty);
    pushFilters(empty);
  }, [pushFilters]);

  const filtered = useMemo(() => {
    const query = filters.q.trim().toLowerCase();
    return entries.filter((entry) => {
      if (query && !entry.searchText.includes(query)) return false;
      if (filters.semester && entry.semester !== filters.semester) return false;
      if (filters.phase && entry.phase !== filters.phase) return false;
      if (filters.status && entry.status !== filters.status) return false;
      if (filters.tag && !entry.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [entries, filters]);

  const activeCount = FILTER_KEYS.filter((key) => filters[key]).length;
  const visibleHours = filtered.reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <div>
      <form
        role="search"
        aria-label="Filter research log entries"
        onSubmit={(event) => event.preventDefault()}
        className="card p-5 sm:p-6"
      >
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <label htmlFor="log-search" className="eyebrow mb-1.5 block">
              Search entries
            </label>
            <input
              id="log-search"
              type="search"
              value={filters.q}
              onChange={(event) => update('q', event.target.value)}
              placeholder="Search titles, summaries, and entry text"
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink placeholder:text-ink-faint"
            />
          </div>
          <FilterSelect
            id="log-semester"
            label="Semester"
            value={filters.semester}
            options={semesters}
            onChange={(value) => update('semester', value)}
          />
          <FilterSelect
            id="log-phase"
            label="Phase"
            value={filters.phase}
            options={phases}
            onChange={(value) => update('phase', value)}
          />
          <FilterSelect
            id="log-status"
            label="Status"
            value={filters.status}
            options={statuses}
            onChange={(value) => update('status', value)}
            formatOption={(option) => option.replace(/-/g, ' ')}
          />
          <FilterSelect
            id="log-tag"
            label="Topic tag"
            value={filters.tag}
            options={tags}
            onChange={(value) => update('tag', value)}
          />
          <div className="flex items-end">
            <button
              type="button"
              onClick={clearAll}
              disabled={activeCount === 0}
              className="w-full rounded-[3px] border border-rule-strong bg-paper-raised px-4 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-paper-sunken disabled:cursor-not-allowed disabled:opacity-45"
            >
              Clear {activeCount > 0 ? `${activeCount} ${pluralize(activeCount, 'filter')}` : 'filters'}
            </button>
          </div>
        </div>
      </form>

      <p aria-live="polite" className="mt-5 font-mono text-micro uppercase text-ink-muted">
        Showing {filtered.length} of {entries.length} {pluralize(entries.length, 'entry', 'entries')}
        {' · '}
        {visibleHours} {pluralize(visibleHours, 'hour')} in view
      </p>

      <div className="mt-6 space-y-5">
        {filtered.length === 0 ? (
          <EmptyState
            title="No entries match these filters"
            action={
              <button
                type="button"
                onClick={clearAll}
                className="rounded-[3px] bg-uf-blue px-5 py-2.5 text-[0.9375rem] font-medium text-white hover:bg-uf-blue-deep"
              >
                Clear all filters
              </button>
            }
          >
            Try a broader search term, or clear the filters to see every entry.
          </EmptyState>
        ) : (
          filtered.map((entry) => <LogCard key={entry.slug} entry={entry} activeTag={filters.tag} />)
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  id,
  label,
  value,
  options,
  onChange,
  formatOption,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  formatOption?: (option: string) => string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-1.5 block">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {formatOption ? formatOption(option) : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function LogCard({ entry, activeTag }: { entry: ResearchLogSummary; activeTag?: string }) {
  return (
    <article className="card p-6 transition-shadow hover:shadow-card">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="blue">Week {String(entry.week).padStart(2, '0')}</Badge>
        <StatusBadge status={entry.status} />
        {entry.starter && <Badge variant="outline">Starter content</Badge>}
      </div>

      <h3 className="text-xl leading-snug">
        <Link href={`/research-log/${entry.slug}`} className="hover:text-[var(--accent)] hover:underline">
          {entry.title}
        </Link>
      </h3>

      <p className="mt-2.5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
        {entry.summary}
      </p>

      <SpecRail
        className="mt-6"
        columns={4}
        items={[
          { label: 'Date', value: formatDateRange(entry.date, entry.endDate) },
          { label: 'Phase', value: entry.phase },
          { label: 'Semester', value: entry.semester },
          { label: 'Hours', value: <span className="font-mono">{entry.hours}</span> },
        ]}
      />

      {entry.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/research-log?tag=${encodeURIComponent(tag)}`}
                className={cn(
                  'inline-flex rounded-[3px] border px-2 py-0.5 font-mono text-micro uppercase transition-colors',
                  tag === activeTag
                    ? 'border-uf-blue/30 bg-uf-blue-soft text-uf-blue-deep'
                    : 'border-rule-strong bg-paper-sunken text-ink-muted hover:text-uf-blue'
                )}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
