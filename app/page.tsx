import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroConstruction } from '@/components/HeroConstruction';
import { Section } from '@/components/Section';
import { EmptyState } from '@/components/Callout';
import { Badge, StatusBadge } from '@/components/Badge';
import { ProgressBar } from '@/components/DataTable';
import { PhaseStrip } from '@/components/PhaseStrip';
import { site } from '@/lib/site';
import { getLatestEntry, getLogSummaries } from '@/lib/log';
import { getCurrentPhase, getOverallCompletion, phases } from '@/data/phases';
import { getRealSources } from '@/data/sources';
import { prototypes } from '@/data/prototypes';
import { activeResearchNotice } from '@/data/project';
import { formatDate, pluralize, sumBy } from '@/lib/utils';

export const metadata: Metadata = {
  title: `${site.shortName} — ${site.researcher}`,
  description: site.tagline,
  alternates: { canonical: '/' },
};

/** The six destinations worth surfacing on the home page. */
const highlights = [
  { href: '/research-log', label: 'Research log', note: 'Week-by-week record of the work' },
  { href: '/overview', label: 'Project overview', note: 'Question, method, scope, and limits' },
  { href: '/roadmap', label: 'Roadmap', note: 'Eleven phases and where things stand' },
  { href: '/materials', label: 'Materials', note: 'Candidate materials and comparisons' },
  { href: '/anatomy', label: 'Sneaker anatomy', note: 'What each component does' },
  { href: '/prototypes', label: 'Prototypes', note: 'Builds, experiments, and failures' },
];

export default function HomePage() {
  const latest = getLatestEntry();
  const entries = getLogSummaries();
  const currentPhase = getCurrentPhase();
  const completion = getOverallCompletion();

  const stats = [
    { label: 'Weeks logged', value: entries.length },
    { label: 'Hours documented', value: sumBy(entries, (entry) => entry.hours) },
    { label: 'Sources read', value: getRealSources().length },
    { label: 'Builds and tests', value: prototypes.length },
  ];

  return (
    <div className="shell">
      {/* Hero — title, one sentence, byline. Nothing else. */}
      <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow mb-4">
            {site.university} &middot; {site.program}
          </p>
          <h1 className="text-balance text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem]">
            Engineering a sneaker from materials research to functional prototype
          </h1>
          <p className="mt-6 max-w-[46ch] text-xl leading-relaxed text-ink-muted">
            An open record of how a sneaker is designed, built, and tested — kept week by week
            as the work happens.
          </p>

          <p className="mt-7 text-ink-muted">
            {site.researcher} &middot; {site.major} &middot; Mentored by {site.mentor}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/research-log"
              className="rounded-[3px] bg-uf-blue px-6 py-3 font-medium text-white transition-colors hover:bg-uf-blue-deep"
            >
              Read the research log
            </Link>
            <Link
              href="/overview"
              className="rounded-[3px] border border-rule-strong bg-paper-raised px-6 py-3 font-medium text-ink transition-colors hover:bg-paper-sunken"
            >
              Project overview
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroConstruction />
        </div>
      </section>

      {/* Status — the block that answers "where is this project right now?" */}
      <section aria-labelledby="status-heading" className="card p-7 sm:p-9">
        <h2 id="status-heading" className="eyebrow mb-7">
          Where the project stands
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <p className="font-mono text-micro text-uf-orange">
              Phase {currentPhase.number} of {phases.length}
            </p>
            <p className="mt-2 text-3xl font-semibold leading-tight text-ink">
              {currentPhase.name}
            </p>
            <p className="mt-3 text-ink-muted">Planned {currentPhase.plannedDates}</p>

            <div className="mt-8">
              <PhaseStrip phases={phases} currentId={currentPhase.id} />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="eyebrow">Overall progress</span>
              <span className="font-mono text-2xl font-semibold text-ink">{completion}%</span>
            </div>
            <ProgressBar value={completion} label={`Overall progress, ${completion} percent`} />
            <p className="mt-2 text-[0.875rem] text-ink-muted">
              A planning estimate across eleven phases, not a grade.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-rule pt-3">
                  <dt className="eyebrow">{stat.label}</dt>
                  <dd className="mt-1 font-mono text-3xl font-semibold text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-9 border-t border-rule pt-6 text-ink-muted">
          Last updated {latest ? formatDate(latest.date) : 'not yet published'}.{' '}
          <Link href="/roadmap" className="text-uf-blue hover:underline">
            See the full roadmap
          </Link>
        </p>
      </section>

      {/* Latest entry */}
      <Section
        eyebrow="Latest update"
        title="Most recent entry"
        action={
          <Link href="/research-log" className="font-medium text-uf-blue hover:underline">
            All {entries.length} {pluralize(entries.length, 'entry', 'entries')}
          </Link>
        }
      >
        {latest ? (
          <article className="card p-7 sm:p-9">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="blue">Week {String(latest.week).padStart(2, '0')}</Badge>
              <StatusBadge status={latest.status} />
              {latest.starter && <Badge variant="outline">Starter content</Badge>}
            </div>
            <h3 className="text-2xl leading-snug sm:text-3xl">
              <Link href={`/research-log/${latest.slug}`} className="hover:text-uf-blue hover:underline">
                {latest.title}
              </Link>
            </h3>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-muted">
              {latest.summary}
            </p>
            <p className="mt-7 font-mono text-micro uppercase text-ink-faint">
              {formatDate(latest.date)} &middot; {latest.hours} {pluralize(latest.hours, 'hour')}{' '}
              &middot; {latest.phase}
            </p>
          </article>
        ) : (
          <EmptyState title="No entries yet">The first weekly entry will appear here.</EmptyState>
        )}
      </Section>

      {/* Six destinations, not sixteen. The rest live in the Sections menu. */}
      <Section eyebrow="Contents" title="What is documented here" className="pb-24">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="card block h-full p-6 transition-shadow hover:shadow-card"
              >
                <span className="block text-lg font-semibold text-ink">{item.label}</span>
                <span className="mt-1.5 block text-ink-muted">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-prose text-ink-muted">{activeResearchNotice}</p>
      </Section>
    </div>
  );
}
