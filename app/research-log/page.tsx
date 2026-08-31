import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { Badge, StatusBadge } from '@/components/Badge';
import { LogExplorer } from '@/components/LogExplorer';
import { getLogSummaries, getLatestEntry, getTagCounts } from '@/lib/log';
import { getHoursBySemester, getTotalDocumentedHours } from '@/lib/metrics';
import { uniqueSorted, formatDateRange, pluralize } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Research log',
  description:
    'Weekly research entries documenting materials research, manufacturing study, design decisions, and prototype work. Searchable and filterable by semester, phase, status, and topic.',
  alternates: { canonical: '/research-log' },
};

export default function ResearchLogPage() {
  const entries = getLogSummaries();
  const latest = getLatestEntry();
  const totalHours = getTotalDocumentedHours();
  const bySemester = getHoursBySemester();
  const tagCounts = getTagCounts();

  const semesters = uniqueSorted(entries.map((entry) => entry.semester));
  const phases = uniqueSorted(entries.map((entry) => entry.phase));
  const statuses = uniqueSorted(entries.map((entry) => entry.status));
  const tags = tagCounts.map((tag) => tag.tag);

  return (
    <div className="shell sec-project pb-20">
      <PageHeader
        eyebrow="Research log"
        title="Weekly research entries"
        lede="A running record of what was done each week, what it produced, and what it changed. Failures and dead ends are logged alongside progress — they are part of the evidence."
        crumbs={[{ label: 'Research log' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Entries published', value: <span className="font-mono">{entries.length}</span> },
              { label: 'Documented hours', value: <span className="font-mono">{totalHours}</span> },
              { label: 'Semesters', value: semesters.length ? semesters.join(', ') : '—' },
              {
                label: 'Latest entry',
                value: latest ? formatDateRange(latest.date, latest.endDate) : 'None yet',
              },
            ]}
          />
        }
      />

      {latest && (
        <Section eyebrow="Latest" title="Most recent entry">
          <article className="card border-uf-blue/30 bg-uf-blue-soft/40 p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="blue">Week {String(latest.week).padStart(2, '0')}</Badge>
              <StatusBadge status={latest.status} />
              <Badge variant="neutral">{latest.phase}</Badge>
              {latest.starter && <Badge variant="outline">Starter content</Badge>}
            </div>
            <h2 className="text-2xl leading-snug">
              <Link href={`/research-log/${latest.slug}`} className="hover:text-[var(--accent)] hover:underline">
                {latest.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-prose text-[1.0625rem] leading-relaxed text-ink-muted">
              {latest.summary}
            </p>
            <Link
              href={`/research-log/${latest.slug}`}
              className="mt-5 inline-block text-[0.9375rem] font-medium text-[var(--accent)] hover:underline"
            >
              Read the full entry for week {latest.week}
            </Link>
          </article>
        </Section>
      )}

      <Section
        eyebrow="All entries"
        title="Search and filter"
        description="Filters are stored in the page address, so a filtered view can be copied and shared."
      >
        {entries.length === 0 ? (
          <EmptyState title="No research-log entries yet">
            Entries are Markdown files in <code className="font-mono text-[0.875rem]">content/research-log/</code>.
            Copy <code className="font-mono text-[0.875rem]">_template.md</code>, rename it, fill in the
            frontmatter, and it will appear here on the next deploy.
          </EmptyState>
        ) : (
          <Suspense
            fallback={
              <p className="font-mono text-micro uppercase text-ink-muted">Loading filters…</p>
            }
          >
            <LogExplorer
              entries={entries}
              semesters={semesters}
              phases={phases}
              statuses={statuses}
              tags={tags}
            />
          </Suspense>
        )}
      </Section>

      {entries.length > 0 && (
        <Section eyebrow="Totals" title="Cumulative hours">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            <div className="card p-6">
              <p className="eyebrow">Total documented hours</p>
              <p className="mt-2 font-mono text-4xl font-semibold text-ink">{totalHours}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                Summed from the <code className="font-mono text-[0.875rem]">hours</code> field across{' '}
                {entries.length} {pluralize(entries.length, 'entry', 'entries')}. Hours are self-reported
                and recorded at the time of writing.
              </p>
            </div>
            <ul className="divide-y divide-rule overflow-hidden rounded-card border border-rule bg-paper-raised">
              {bySemester.map((bucket) => (
                <li key={bucket.semester} className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <span className="text-[0.9375rem] font-medium text-ink">{bucket.semester}</span>
                  <span className="font-mono text-[0.9375rem] text-ink-muted">
                    {bucket.entries} {pluralize(bucket.entries, 'entry', 'entries')} · {bucket.hours}{' '}
                    {pluralize(bucket.hours, 'hour')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {tagCounts.length > 0 && (
            <div className="mt-8">
              <p className="eyebrow mb-3">Browse by topic</p>
              <ul className="flex flex-wrap gap-2">
                {tagCounts.map(({ tag, count }) => (
                  <li key={tag}>
                    <Link
                      href={`/research-log?tag=${encodeURIComponent(tag)}`}
                      className="inline-flex items-center gap-2 rounded-[3px] border border-rule-strong bg-paper-raised px-2.5 py-1 font-mono text-micro uppercase text-ink-muted transition-colors hover:border-uf-blue/30 hover:text-uf-blue"
                    >
                      {tag}
                      <span className="text-ink-faint">{count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Callout tone="note" title="How entries are added" className="mt-8">
            Each entry is a single Markdown file. Adding one requires no code changes — the site reads the
            folder at build time and rebuilds itself when the change is pushed. The full workflow is in the
            repository README.
          </Callout>
        </Section>
      )}
    </div>
  );
}
