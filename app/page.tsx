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
import { getSectionForPath, sectionThemes } from '@/lib/sections';
import { getCurrentPhase, getOverallCompletion, phases } from '@/data/phases';
import { getRealSources } from '@/data/sources';
import { prototypes } from '@/data/prototypes';
import { formatDate, pluralize, sumBy } from '@/lib/utils';

export const metadata: Metadata = {
  title: `${site.shortName} — ${site.researcher}`,
  description: site.tagline,
  alternates: { canonical: '/' },
};

/** The six destinations worth surfacing on the home page. */
const highlights = [
  { href: '/research-log', label: 'Research log' },
  { href: '/overview', label: 'Project overview' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/materials', label: 'Materials' },
  { href: '/anatomy', label: 'Sneaker anatomy' },
  { href: '/prototypes', label: 'Prototypes' },
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
      <section
        aria-labelledby="status-heading"
        className="rounded-card bg-ink p-7 text-white sm:p-9"
      >
        <h2 id="status-heading" className="font-mono text-micro font-medium uppercase text-white/50 mb-7">
          Where the project stands
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <p className="font-mono text-micro text-uf-orange-bright">
              Phase {currentPhase.number} of {phases.length}
            </p>
            <p className="mt-2 text-3xl font-semibold leading-tight text-white">
              {currentPhase.name}
            </p>
            <p className="mt-3 text-white/60">Planned {currentPhase.plannedDates}</p>

            <div className="mt-8">
              <PhaseStrip phases={phases} currentId={currentPhase.id} tone="dark" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="font-mono text-micro font-medium uppercase text-white/50">
                Overall progress
              </span>
              <span className="font-mono text-2xl font-semibold text-white">{completion}%</span>
            </div>
            <ProgressBar value={completion} label={`Overall progress, ${completion} percent`} tone="dark" />

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-white/15 pt-3">
                  <dt className="font-mono text-micro font-medium uppercase text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-mono text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-9 border-t border-white/15 pt-6 text-white/60">
          Last updated {latest ? formatDate(latest.date) : 'not yet published'}.{' '}
          <Link href="/roadmap" className="text-white underline underline-offset-2 hover:text-uf-orange-bright">
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
      <Section title="Contents" className="pb-24">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const section = getSectionForPath(item.href);
            const accent = section ? sectionThemes[section].accent : '#0021A5';
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={
                    {
                      borderColor: `${accent}4D`,
                      '--glow': accent,
                    } as React.CSSProperties
                  }
                  className="group flex h-full items-center justify-center rounded-2xl border bg-ink p-6 text-center font-semibold text-white shadow-[0_0_18px_-10px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glow)] hover:shadow-[0_0_28px_-6px_var(--glow)]"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}
