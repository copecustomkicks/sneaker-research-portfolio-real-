import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/PageHeader';
import { SpecRail } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge, StatusBadge } from '@/components/Badge';
import { Prose } from '@/components/Prose';
import { getLogEntry, getLogSlugs, getAdjacentEntries } from '@/lib/log';
import { getPhaseByName } from '@/data/phases';
import { formatDateRange, pluralize } from '@/lib/utils';
import { site } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-renders every entry at build time — no runtime rendering cost. */
export function generateStaticParams() {
  return getLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getLogEntry(slug);
  if (!entry) return { title: 'Entry not found' };

  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: `/research-log/${entry.slug}` },
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.summary,
      publishedTime: entry.date,
      authors: [site.researcher],
      tags: entry.tags,
    },
  };
}

export default async function ResearchLogEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getLogEntry(slug);
  if (!entry) notFound();

  const { previous, next } = getAdjacentEntries(slug);
  const phase = getPhaseByName(entry.phase);

  return (
    <div className="shell pb-20">
      <article>
        <header className="border-b border-rule pb-9 pt-8 sm:pt-12">
          <Breadcrumbs
            items={[
              { label: 'Research log', href: '/research-log' },
              { label: `Week ${String(entry.week).padStart(2, '0')}` },
            ]}
          />

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="blue">Week {String(entry.week).padStart(2, '0')}</Badge>
            <StatusBadge status={entry.status} />
            {entry.starter && <Badge variant="outline">Starter content</Badge>}
          </div>

          <h1 className="max-w-4xl text-3xl leading-[1.15] sm:text-4xl">{entry.title}</h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{entry.summary}</p>

          <SpecRail
            className="mt-8"
            columns={4}
            items={[
              { label: 'Date', value: formatDateRange(entry.date, entry.endDate) },
              { label: 'Semester', value: entry.semester },
              {
                label: 'Research phase',
                value: phase ? (
                  <Link href={`/roadmap#${phase.id}`} className="text-uf-blue hover:underline">
                    {entry.phase}
                  </Link>
                ) : (
                  entry.phase
                ),
              },
              {
                label: 'Hours logged',
                value: (
                  <span className="font-mono">
                    {entry.hours} {pluralize(entry.hours, 'hour')}
                  </span>
                ),
              },
            ]}
          />

          {entry.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={`/research-log?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex rounded-[3px] border border-rule-strong bg-paper-sunken px-2 py-0.5 font-mono text-micro uppercase text-ink-muted hover:text-uf-blue"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </header>

        {entry.starter && (
          <div className="pt-8">
            <Callout tone="provisional" title="Starter content">
              This entry was written when the portfolio was set up. It documents planning and site
              configuration, not verified research findings. Replace or revise it as the project develops.
            </Callout>
          </div>
        )}

        {entry.featuredImage && (
          <figure className="pt-8">
            <div className="relative overflow-hidden rounded-card border border-rule bg-paper-sunken">
              <Image
                src={entry.featuredImage}
                alt={entry.featuredImageAlt ?? entry.title}
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
            {entry.featuredImageAlt && (
              <figcaption className="mt-2.5 text-[0.875rem] text-ink-muted">
                {entry.featuredImageAlt}
              </figcaption>
            )}
          </figure>
        )}

        <div className="py-10">
          <Prose html={entry.html} />
        </div>
      </article>

      <nav
        aria-label="Research log entry navigation"
        className="grid gap-4 border-t border-rule pt-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/research-log/${previous.slug}`}
            className="card group p-5 transition-shadow hover:shadow-card"
          >
            <p className="eyebrow mb-1.5">&larr; Previous entry</p>
            <p className="text-[0.9375rem] font-medium text-ink group-hover:text-uf-blue group-hover:underline">
              Week {String(previous.week).padStart(2, '0')}: {previous.title}
            </p>
          </Link>
        ) : (
          <div className="hatch rounded-card border border-dashed border-rule px-5 py-5">
            <p className="eyebrow mb-1.5">Previous entry</p>
            <p className="text-[0.9375rem] text-ink-muted">This is the earliest entry.</p>
          </div>
        )}

        {next ? (
          <Link
            href={`/research-log/${next.slug}`}
            className="card group p-5 text-right transition-shadow hover:shadow-card"
          >
            <p className="eyebrow mb-1.5">Next entry &rarr;</p>
            <p className="text-[0.9375rem] font-medium text-ink group-hover:text-uf-blue group-hover:underline">
              Week {String(next.week).padStart(2, '0')}: {next.title}
            </p>
          </Link>
        ) : (
          <div className="hatch rounded-card border border-dashed border-rule px-5 py-5 text-right">
            <p className="eyebrow mb-1.5">Next entry</p>
            <p className="text-[0.9375rem] text-ink-muted">This is the most recent entry.</p>
          </div>
        )}
      </nav>

      <p className="mt-8">
        <Link href="/research-log" className="text-[0.9375rem] font-medium text-uf-blue hover:underline">
          Back to all research-log entries
        </Link>
      </p>
    </div>
  );
}
