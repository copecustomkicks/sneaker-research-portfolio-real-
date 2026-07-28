'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Badge, EvidenceBadge } from '@/components/Badge';
import { EmptyState } from '@/components/Callout';
import { sourceTypeLabels } from '@/data/sources';
import { formatDate, pluralize } from '@/lib/utils';
import type { Source } from '@/types';

export function SourceExplorer({ sources }: { sources: Source[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = useMemo(
    () => ({
      q: searchParams.get('q') ?? '',
      type: searchParams.get('type') ?? '',
      tag: searchParams.get('tag') ?? '',
    }),
    [searchParams]
  );

  const [state, setState] = useState(initial);

  useEffect(() => {
    setState(initial);
  }, [initial]);

  const update = useCallback(
    (patch: Partial<typeof state>) => {
      const next = { ...state, ...patch };
      setState(next);
      const params = new URLSearchParams();
      if (next.q) params.set('q', next.q);
      if (next.type) params.set('type', next.type);
      if (next.tag) params.set('tag', next.tag);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, state]
  );

  const types = useMemo(
    () => Array.from(new Set(sources.map((source) => source.type))).sort(),
    [sources]
  );

  const tags = useMemo(
    () => Array.from(new Set(sources.flatMap((source) => source.tags))).sort(),
    [sources]
  );

  const filtered = useMemo(() => {
    const query = state.q.trim().toLowerCase();
    return sources.filter((source) => {
      if (state.type && source.type !== state.type) return false;
      if (state.tag && !source.tags.includes(state.tag)) return false;
      if (!query) return true;
      const haystack = [
        source.citation,
        source.authors.join(' '),
        source.summary,
        source.relevance,
        source.keyTakeaway,
        source.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [sources, state]);

  return (
    <div>
      <form
        role="search"
        aria-label="Filter sources"
        onSubmit={(event) => event.preventDefault()}
        className="card p-5 sm:p-6"
      >
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <label htmlFor="source-search" className="eyebrow mb-1.5 block">
              Search the library
            </label>
            <input
              id="source-search"
              type="search"
              value={state.q}
              onChange={(event) => update({ q: event.target.value })}
              placeholder="Search citations, authors, summaries, and takeaways"
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink placeholder:text-ink-faint"
            />
          </div>
          <div>
            <label htmlFor="source-type" className="eyebrow mb-1.5 block">
              Source type
            </label>
            <select
              id="source-type"
              value={state.type}
              onChange={(event) => update({ type: event.target.value })}
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink"
            >
              <option value="">All types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {sourceTypeLabels[type]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="source-tag" className="eyebrow mb-1.5 block">
              Topic tag
            </label>
            <select
              id="source-tag"
              value={state.tag}
              onChange={(event) => update({ tag: event.target.value })}
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink"
            >
              <option value="">All tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p aria-live="polite" className="mt-5 border-t border-rule pt-4 font-mono text-micro uppercase text-ink-muted">
          {filtered.length} of {sources.length} {pluralize(sources.length, 'record')}
        </p>
      </form>

      <div className="mt-6 space-y-5">
        {filtered.length === 0 ? (
          <EmptyState
            title="No sources match these filters"
            action={
              <button
                type="button"
                onClick={() => update({ q: '', type: '', tag: '' })}
                className="rounded-[3px] bg-uf-blue px-5 py-2.5 text-[0.9375rem] font-medium text-white hover:bg-uf-blue-deep"
              >
                Clear all filters
              </button>
            }
          >
            Try a broader search term, or clear the filters to see every record.
          </EmptyState>
        ) : (
          filtered.map((source) => <SourceCard key={source.id} source={source} />)
        )}
      </div>
    </div>
  );
}

function SourceCard({ source }: { source: Source }) {
  return (
    <article id={source.id} className="card scroll-mt-24 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="neutral">{sourceTypeLabels[source.type]}</Badge>
        <EvidenceBadge type={source.evidence} />
        {source.placeholder && <Badge variant="outline">Template — not a real reference</Badge>}
      </div>

      {/* The citation is the heading, because in a research library the
          reference string is the thing you scan for. */}
      <h3 className="max-w-prose text-[1.0625rem] font-medium leading-relaxed text-ink">
        {source.citation}
      </h3>

      <dl className="spec-rail mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-t border-rule pt-2.5">
          <dt>Year</dt>
          <dd className="font-mono">{source.year}</dd>
        </div>
        <div className="border-t border-rule pt-2.5">
          <dt>Date accessed</dt>
          <dd className="font-mono">
            {source.dateAccessed ? formatDate(source.dateAccessed, 'short') : 'Not recorded'}
          </dd>
        </div>
        <div className="border-t border-rule pt-2.5">
          <dt>Link or DOI</dt>
          <dd>
            {source.doi ? (
              <a
                href={`https://doi.org/${source.doi}`}
                className="text-uf-blue hover:underline"
                rel="noreferrer noopener"
                target="_blank"
              >
                DOI {source.doi}
              </a>
            ) : source.url ? (
              <a
                href={source.url}
                className="text-uf-blue hover:underline"
                rel="noreferrer noopener"
                target="_blank"
              >
                Open the source
              </a>
            ) : (
              <span className="text-ink-muted">Not recorded</span>
            )}
          </dd>
        </div>
        <div className="border-t border-rule pt-2.5">
          <dt>Record ID</dt>
          <dd className="font-mono">{source.id}</dd>
        </div>
      </dl>

      <div className="mt-7 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
        <Field label="Summary" value={source.summary} />
        <Field label="Relevance to this project" value={source.relevance} />
        <Field label="Key takeaway" value={source.keyTakeaway} />
        <Field label="Reliability and evidence notes" value={source.reliabilityNotes} />
      </div>

      {source.tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {source.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/sources?tag=${encodeURIComponent(tag)}`}
                className="inline-flex rounded-[3px] border border-rule-strong bg-paper-sunken px-2 py-0.5 font-mono text-micro uppercase text-ink-muted transition-colors hover:text-uf-blue"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {source.relatedLogSlugs && source.relatedLogSlugs.length > 0 && (
        <div className="mt-6 border-t border-rule pt-5">
          <p className="eyebrow mb-2">Related log entries</p>
          <ul className="space-y-1.5 text-[0.9375rem]">
            {source.relatedLogSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/research-log/${slug}`} className="text-uf-blue hover:underline">
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[0.9375rem] leading-relaxed text-ink">{value}</p>
    </div>
  );
}
