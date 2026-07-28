import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { SourceExplorer } from '@/components/SourceExplorer';
import { sources, citationStyleNote, getRealSources, sourceTypeLabels } from '@/data/sources';
import { evidenceTypes } from '@/data/evidence';

export const metadata: Metadata = {
  title: 'Sources and literature',
  description:
    'Research library in APA 7 format: academic papers, books, standards, patents, technical data sheets, and industry sources, each with a summary, relevance note, and reliability assessment.',
  alternates: { canonical: '/sources' },
};

export default function SourcesPage() {
  const real = getRealSources();
  const placeholders = sources.length - real.length;
  const typesInUse = Array.from(new Set(sources.map((source) => source.type)));

  return (
    <div className="shell pb-20">
      <PageHeader
        eyebrow="Research library"
        title="Sources and literature"
        lede="Every reference used here, with what it says and how far it can be trusted."
        crumbs={[{ label: 'Sources' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Sources read', value: <span className="font-mono">{real.length}</span> },
              { label: 'Template records', value: <span className="font-mono">{placeholders}</span> },
              { label: 'Source types in use', value: <span className="font-mono">{typesInUse.length}</span> },
              { label: 'Citation style', value: 'APA 7' },
            ]}
          />
        }
      />

      <div className="grid gap-5 pt-8 lg:grid-cols-2">
        <Callout tone="integrity" title="No citation appears here unless it was read">
          <p>
            The library currently contains {placeholders}{' '}
            {placeholders === 1 ? 'template record' : 'template records'} and {real.length}{' '}
            {real.length === 1 ? 'real reference' : 'real references'}. Templates show the required
            fields for each source type and are labeled as templates wherever they appear.
          </p>
          <p className="mt-3">
            A reference is added only after the source has been read directly. Secondhand citations —
            references copied from another paper&rsquo;s bibliography without reading the original — are
            not recorded here.
          </p>
        </Callout>

        <Callout tone="note" title="Citation style">
          <p>{citationStyleNote}</p>
          <p className="mt-3">
            Reference patterns for each source type are documented at the top of{' '}
            <code className="font-mono text-[0.875rem]">data/sources.ts</code>, so the format does not
            have to be looked up each time a source is added.
          </p>
        </Callout>
      </div>

      <Section
        eyebrow="Evidence labels"
        title="How reliability is recorded"
        description="Each source carries an evidence label, using the same vocabulary as the rest of the site."
      >
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceTypes
            .filter((type) =>
              ['published-evidence', 'manufacturer-claim', 'interpretation'].includes(type.id)
            )
            .map((type) => (
              <li key={type.id} className="border-t border-rule pt-3">
                <p className="eyebrow mb-1">{type.label}</p>
                <p className="text-[0.9375rem] leading-snug text-ink-muted">{type.definition}</p>
              </li>
            ))}
        </ul>
        <p className="mt-6 text-[0.9375rem] text-ink-muted">
          The full vocabulary is on the{' '}
          <a href="/integrity" className="text-uf-blue hover:underline">
            research integrity page
          </a>
          .
        </p>
      </Section>

      <Section
        eyebrow={`${sources.length} records`}
        title="The library"
        description={`Filter by type or topic tag. Types currently in use: ${typesInUse
          .map((type) => sourceTypeLabels[type])
          .join(', ')}.`}
      >
        {/* useSearchParams requires a Suspense boundary during prerendering. */}
        <Suspense
          fallback={
            <div className="card p-6 text-[0.9375rem] text-ink-muted">Loading the library…</div>
          }
        >
          <SourceExplorer sources={sources} />
        </Suspense>
      </Section>
    </div>
  );
}
