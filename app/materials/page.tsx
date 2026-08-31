import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { MaterialExplorer } from '@/components/MaterialExplorer';
import { materials, materialCategories, scoringCaveat, materialStatusLabels } from '@/data/materials';

export const metadata: Metadata = {
  title: 'Materials research',
  description:
    'A structured library of candidate sneaker materials organized by component, with properties, advantages, limitations, manufacturing compatibility, and selection status.',
  alternates: { canonical: '/materials' },
};

export default function MaterialsPage() {
  const evaluated = materials.filter((material) => material.status !== 'researching').length;
  const populated = materialCategories.filter((category) =>
    materials.some((material) => material.category === category)
  );

  return (
    <div className="shell sec-research pb-20">
      <PageHeader
        eyebrow="Materials research"
        title="Candidate materials, by component"
        lede="Each record holds properties, advantages, limitations, manufacturing compatibility, and a selection status. Property values stay blank until a data sheet, a paper, or a measurement fills them in."
        crumbs={[{ label: 'Materials' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Records', value: <span className="font-mono">{materials.length}</span> },
              { label: 'Past researching stage', value: <span className="font-mono">{evaluated}</span> },
              {
                label: 'Categories in use',
                value: (
                  <span className="font-mono">
                    {populated.length} of {materialCategories.length}
                  </span>
                ),
              },
              { label: 'Selected for build', value: <span className="font-mono">0</span> },
            ]}
          />
        }
      />

      <div className="pt-8">
        <Callout tone="provisional" title="These are structural examples">
          The records below show the shape and depth a complete material record should have. Property
          values read &ldquo;to be recorded&rdquo; rather than being filled with plausible numbers.
          Nothing here is a finding. Records live in{' '}
          <code className="font-mono text-[0.875rem]">data/materials.ts</code>.
        </Callout>
      </div>

      <Section
        eyebrow="Library"
        title="Search and compare"
        description="Filters are stored in the page address, so a filtered comparison can be shared."
      >
        {materials.length === 0 ? (
          <EmptyState title="No material records yet">
            Add records to <code className="font-mono text-[0.875rem]">data/materials.ts</code> and they
            will appear here.
          </EmptyState>
        ) : (
          <Suspense
            fallback={<p className="font-mono text-micro uppercase text-ink-muted">Loading filters…</p>}
          >
            <MaterialExplorer materials={materials} categories={materialCategories} />
          </Suspense>
        )}

        <Callout tone="integrity" title="On the preliminary scores" className="mt-8">
          {scoringCaveat}
        </Callout>
      </Section>

      <Section eyebrow="Coverage" title="Categories to populate">
        <p className="mb-6 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
          Thirteen categories are defined. Those without records yet are the visible gaps in the
          materials research.
        </p>
        <ul className="grid gap-px overflow-hidden rounded-card border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {materialCategories.map((category) => {
            const count = materials.filter((material) => material.category === category).length;
            return (
              <li key={category} className="flex items-baseline justify-between gap-3 bg-paper-raised px-5 py-4">
                <span className="text-[0.9375rem] text-ink">{category}</span>
                <span
                  className={
                    count > 0
                      ? 'font-mono text-micro text-[var(--accent)]'
                      : 'font-mono text-micro uppercase text-ink-faint'
                  }
                >
                  {count > 0 ? count : 'none'}
                </span>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section eyebrow="Vocabulary" title="What each status means">
        <dl className="spec-rail grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(materialStatusLabels) as (keyof typeof materialStatusLabels)[]).map((status) => (
            <div key={status} className="border-t border-rule pt-3">
              <dt>{materialStatusLabels[status]}</dt>
              <dd>{statusDefinitions[status]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-[0.9375rem] text-ink-muted">
          Selection rationales are recorded on each material page and summarized on the{' '}
          <Link href="/design" className="text-[var(--accent)] hover:underline">
            design process
          </Link>{' '}
          page.
        </p>
      </Section>
    </div>
  );
}

const statusDefinitions: Record<string, string> = {
  researching: 'Gathering information. Not yet judged against the requirements.',
  candidate: 'Under active consideration for the build.',
  selected: 'Chosen for the prototype, with a written rationale.',
  rejected: 'Ruled out, with a written reason. Kept on record so the reasoning is not lost.',
  tested: 'Evaluated experimentally in this project. See the linked test record.',
};
