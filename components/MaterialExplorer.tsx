'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Badge, StatusBadge } from '@/components/Badge';
import { EmptyState } from '@/components/Callout';
import { DataTable } from '@/components/DataTable';
import { cn, pluralize } from '@/lib/utils';
import { materialStatusLabels, scoreCriteria } from '@/data/materials';
import type { Material, MaterialCategory } from '@/types';

type ViewMode = 'cards' | 'table';

export function MaterialExplorer({
  materials,
  categories,
}: {
  materials: Material[];
  categories: MaterialCategory[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = useMemo(
    () => ({
      q: searchParams.get('q') ?? '',
      category: searchParams.get('category') ?? '',
      status: searchParams.get('status') ?? '',
      view: (searchParams.get('view') === 'table' ? 'table' : 'cards') as ViewMode,
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
      if (next.category) params.set('category', next.category);
      if (next.status) params.set('status', next.status);
      if (next.view === 'table') params.set('view', 'table');
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, state]
  );

  const filtered = useMemo(() => {
    const query = state.q.trim().toLowerCase();
    return materials.filter((material) => {
      if (state.category && material.category !== state.category) return false;
      if (state.status && material.status !== state.status) return false;
      if (!query) return true;
      const haystack = [
        material.name,
        material.category,
        material.description,
        material.intendedComponents.join(' '),
        material.advantages.join(' '),
        material.limitations.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [materials, state]);

  const statuses = useMemo(
    () => Array.from(new Set(materials.map((material) => material.status))).sort(),
    [materials]
  );

  return (
    <div>
      <form
        role="search"
        aria-label="Filter materials"
        onSubmit={(event) => event.preventDefault()}
        className="card p-5 sm:p-6"
      >
        <div className="grid gap-4 lg:grid-cols-[2fr_1.4fr_1fr]">
          <div>
            <label htmlFor="material-search" className="eyebrow mb-1.5 block">
              Search materials
            </label>
            <input
              id="material-search"
              type="search"
              value={state.q}
              onChange={(event) => update({ q: event.target.value })}
              placeholder="Search names, components, advantages, limitations"
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink placeholder:text-ink-faint"
            />
          </div>
          <div>
            <label htmlFor="material-category" className="eyebrow mb-1.5 block">
              Category
            </label>
            <select
              id="material-category"
              value={state.category}
              onChange={(event) => update({ category: event.target.value })}
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink"
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="material-status" className="eyebrow mb-1.5 block">
              Status
            </label>
            <select
              id="material-status"
              value={state.status}
              onChange={(event) => update({ status: event.target.value })}
              className="w-full rounded-[3px] border border-rule-strong bg-paper px-3 py-2 text-[0.9375rem] text-ink"
            >
              <option value="">All statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {materialStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-4">
          <p aria-live="polite" className="font-mono text-micro uppercase text-ink-muted">
            {filtered.length} of {materials.length} {pluralize(materials.length, 'material')}
          </p>
          <fieldset className="flex items-center gap-2">
            <legend className="sr-only">View mode</legend>
            {(['cards', 'table'] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                aria-pressed={state.view === mode}
                onClick={() => update({ view: mode })}
                className={cn(
                  'rounded-[3px] border px-3 py-1.5 font-mono text-micro uppercase transition-colors',
                  state.view === mode
                    ? 'border-uf-blue/40 bg-uf-blue-soft text-uf-blue-deep'
                    : 'border-rule-strong bg-paper-raised text-ink-muted hover:text-ink'
                )}
              >
                {mode === 'cards' ? 'Cards' : 'Comparison table'}
              </button>
            ))}
          </fieldset>
        </div>
      </form>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <EmptyState
            title="No materials match these filters"
            action={
              <button
                type="button"
                onClick={() => update({ q: '', category: '', status: '' })}
                className="rounded-[3px] bg-uf-blue px-5 py-2.5 text-[0.9375rem] font-medium text-white hover:bg-uf-blue-deep"
              >
                Clear all filters
              </button>
            }
          >
            Try a broader search term, or clear the filters to see every record.
          </EmptyState>
        ) : state.view === 'table' ? (
          <ComparisonTable materials={filtered} />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {filtered.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="card flex flex-col p-6 transition-shadow hover:shadow-card">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <StatusBadge status={material.status} label={materialStatusLabels[material.status]} />
        <Badge variant="neutral">{material.category}</Badge>
      </div>

      <h3 className="text-xl leading-snug">
        <Link href={`/materials/${material.id}`} className="hover:text-[var(--accent)] hover:underline">
          {material.name}
        </Link>
      </h3>

      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">{material.description}</p>

      <dl className="spec-rail mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <div className="border-t border-rule pt-2.5">
          <dt>Intended components</dt>
          <dd>{material.intendedComponents.join(', ')}</dd>
        </div>
        <div className="border-t border-rule pt-2.5">
          <dt>Sources recorded</dt>
          <dd className="font-mono">{material.sourceIds.length}</dd>
        </div>
      </dl>

      {material.scores && <ScoreBars scores={material.scores} />}

      <Link
        href={`/materials/${material.id}`}
        className="mt-6 inline-block text-[0.9375rem] font-medium text-[var(--accent)] hover:underline"
      >
        Full record for {material.name}
      </Link>
    </article>
  );
}

/**
 * Horizontal 1–5 score bars. A radar chart would imply more precision than
 * researcher judgements support, so this stays a plain ranked comparison.
 */
export function ScoreBars({ scores }: { scores: NonNullable<Material['scores']> }) {
  const present = scoreCriteria.filter((criterion) => typeof scores[criterion.key] === 'number');
  if (present.length === 0) return null;

  return (
    <div className="mt-5 border-t border-rule pt-4">
      <p className="eyebrow mb-3">Preliminary scoring — 1 to 5</p>
      <ul className="space-y-2">
        {present.map((criterion) => {
          const value = scores[criterion.key] as number;
          return (
            <li key={criterion.key} className="flex items-center gap-3">
              <span className="w-32 shrink-0 font-mono text-micro uppercase text-ink-muted">
                {criterion.label}
              </span>
              <span className="flex gap-1" role="img" aria-label={`${criterion.label}: ${value} out of 5`}>
                {[1, 2, 3, 4, 5].map((step) => (
                  <span
                    key={step}
                    aria-hidden="true"
                    className={cn(
                      'h-2.5 w-5 rounded-[1px]',
                      step <= value ? 'bg-uf-blue' : 'bg-paper-sunken'
                    )}
                  />
                ))}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ComparisonTable({ materials }: { materials: Material[] }) {
  return (
    <DataTable
      caption="Candidate materials compared by category, intended component, status, and preliminary scores. Scores are researcher judgements, not measurements."
      columns={[
        'Material',
        'Category',
        'Intended components',
        'Status',
        ...scoreCriteria.map((criterion) => criterion.label),
      ]}
      rows={materials.map((material) => [
        <Link
          key="name"
          href={`/materials/${material.id}`}
          className="font-medium text-[var(--accent)] hover:underline"
        >
          {material.name}
        </Link>,
        material.category,
        material.intendedComponents.join(', '),
        <StatusBadge key="status" status={material.status} label={materialStatusLabels[material.status]} />,
        ...scoreCriteria.map((criterion) => (
          <span key={criterion.key} className="font-mono">
            {material.scores?.[criterion.key] ?? '—'}
          </span>
        )),
      ])}
    />
  );
}
