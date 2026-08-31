import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { StatusBadge } from '@/components/Badge';
import { deliverables, deliverableStatusLabels } from '@/data/deliverables';

export const metadata: Metadata = {
  title: 'Final deliverables',
  description:
    'Placeholders for the research poster, abstract, honors thesis, Realization Thesis, presentation slides, oral defense, final prototype, bill of materials, test results, lessons learned, and future work.',
  alternates: { canonical: '/deliverables' },
};

export default function DeliverablesPage() {
  const available = deliverables.filter((item) => item.status === 'available').length;
  const drafting = deliverables.filter((item) => item.status === 'drafting').length;

  return (
    <div className="shell sec-about pb-20">
      <PageHeader
        eyebrow="Final deliverables"
        title="What this project will produce"
        lede="What this project will produce. Nothing is marked available until it exists."
        crumbs={[{ label: 'Deliverables' }]}
        meta={
          <SpecRail
            columns={3}
            items={[
              { label: 'Deliverables planned', value: <span className="font-mono">{deliverables.length}</span> },
              { label: 'In progress', value: <span className="font-mono">{drafting}</span> },
              { label: 'Available', value: <span className="font-mono">{available}</span> },
            ]}
          />
        }
      />

      <div className="pt-8">
        <Callout tone="provisional" title="Nothing here is finished">
          Due windows are provisional and depend on program deadlines and mentor approval. A
          deliverable is marked available only once the file is committed to the repository or a
          working link exists — never in advance.
        </Callout>
      </div>

      <Section eyebrow={`${deliverables.length} items`} title="Deliverables">
        <div className="grid gap-5 lg:grid-cols-2">
          {deliverables.map((item) => (
            <article key={item.id} id={item.id} className="card scroll-mt-24 flex flex-col p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <StatusBadge status={item.status} label={deliverableStatusLabels[item.status]} />
              </div>

              <h3 className="text-lg leading-snug">{item.title}</h3>
              <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                {item.description}
              </p>

              <dl className="spec-rail mt-6 grid grid-cols-2 gap-x-6">
                <div className="border-t border-rule pt-2.5">
                  <dt>Expected</dt>
                  <dd>{item.dueWindow}</dd>
                </div>
                <div className="border-t border-rule pt-2.5">
                  <dt>File</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--accent)] hover:underline" download>
                        Download
                      </a>
                    ) : (
                      <span className="text-ink-muted">Not yet available</span>
                    )}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

    </div>
  );
}
