import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { Badge } from '@/components/Badge';
import { artifacts, artifactTypeLabels } from '@/data/artifacts';
import { getPhaseById } from '@/data/phases';
import { formatDate } from '@/lib/utils';
import type { Artifact } from '@/types';

export const metadata: Metadata = {
  title: 'Gallery and artifacts',
  description:
    'Photographs, sketches, diagrams, CAD screenshots, material samples, manufacturing trials, and project documents, each with a caption, alt text, and the research phase it belongs to.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  const typesPresent = Array.from(new Set(artifacts.map((artifact) => artifact.type)));

  return (
    <div className="shell pb-20">
      <PageHeader
        eyebrow="Gallery"
        title="Artifacts from the process"
        lede="Photographs, sketches, diagrams, and documents from the process."
        crumbs={[{ label: 'Gallery' }]}
        meta={
          <SpecRail
            columns={3}
            items={[
              { label: 'Artifacts published', value: <span className="font-mono">{artifacts.length}</span> },
              { label: 'Types represented', value: <span className="font-mono">{typesPresent.length}</span> },
              { label: 'Every image', value: 'Captioned and described' },
            ]}
          />
        }
      />

      <div className="pt-8">
        <Callout tone="integrity" title="Attribution and permissions">
          Photographs are taken by the researcher unless an artifact record says otherwise. Any image
          from an outside source carries an attribution note. No brand marks, proprietary drawings, or
          copyrighted product imagery are published here.
        </Callout>
      </div>

      <Section
        eyebrow={`${artifacts.length} published`}
        title="All artifacts"
        description="Newest first. Each tile links to the research-log entry it came from, where the context lives."
      >
        {artifacts.length === 0 ? (
          <EmptyState
            title="Nothing has been photographed yet"
            action={
              <Link
                href="/research-log"
                className="inline-block rounded-[3px] border border-rule-strong bg-paper-raised px-5 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-paper-sunken"
              >
                Read the research log
              </Link>
            }
          >
            The gallery fills up as work happens: benchmark teardowns in Phase 2, material samples in
            Phase 3, sketches and CAD in Phases 5 and 7, then build and test photographs. Add records
            to <code className="font-mono text-[0.875rem]">data/artifacts.ts</code> and put the files
            in <code className="font-mono text-[0.875rem]">public/images/</code>.
          </EmptyState>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...artifacts]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((artifact) => (
                <ArtifactTile key={artifact.id} artifact={artifact} />
              ))}
          </div>
        )}
      </Section>

    </div>
  );
}

function ArtifactTile({ artifact }: { artifact: Artifact }) {
  const phase = artifact.phaseId ? getPhaseById(artifact.phaseId) : undefined;

  return (
    <figure id={artifact.id} className="card scroll-mt-24 overflow-hidden">
      {artifact.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={artifact.src}
          alt={artifact.alt}
          loading="lazy"
          className="aspect-[4/3] w-full border-b border-rule bg-paper-sunken object-cover"
        />
      ) : (
        <div className="hatch flex aspect-[4/3] items-center justify-center border-b border-rule">
          <span className="font-mono text-micro uppercase text-ink-muted">No file attached</span>
        </div>
      )}

      <figcaption className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="neutral">{artifactTypeLabels[artifact.type]}</Badge>
          <Badge variant="outline">{formatDate(artifact.date, 'short')}</Badge>
        </div>

        <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">{artifact.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{artifact.caption}</p>

        <dl className="spec-rail mt-5 space-y-3">
          {phase && (
            <div className="border-t border-rule pt-2.5">
              <dt>Phase</dt>
              <dd>
                <Link href={`/roadmap#${phase.id}`} className="text-uf-blue hover:underline">
                  Phase {phase.number} — {phase.name}
                </Link>
              </dd>
            </div>
          )}
          {artifact.relatedLogSlug && (
            <div className="border-t border-rule pt-2.5">
              <dt>From the log</dt>
              <dd>
                <Link
                  href={`/research-log/${artifact.relatedLogSlug}`}
                  className="text-uf-blue hover:underline"
                >
                  Read the entry
                </Link>
              </dd>
            </div>
          )}
          {artifact.downloadHref && (
            <div className="border-t border-rule pt-2.5">
              <dt>File</dt>
              <dd>
                <a href={artifact.downloadHref} download className="text-uf-blue hover:underline">
                  Download {artifact.title}
                </a>
              </dd>
            </div>
          )}
          {artifact.attributionNotes && (
            <div className="border-t border-rule pt-2.5">
              <dt>Attribution</dt>
              <dd className="text-ink-muted">{artifact.attributionNotes}</dd>
            </div>
          )}
        </dl>
      </figcaption>
    </figure>
  );
}
