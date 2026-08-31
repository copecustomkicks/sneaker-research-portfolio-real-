import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/PageHeader';
import { Section, SpecRail, LabeledList } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge, StatusBadge, EvidenceBadge } from '@/components/Badge';
import { DataTable } from '@/components/DataTable';
import { ScoreBars } from '@/components/MaterialExplorer';
import { materials, getMaterial, materialStatusLabels, scoringCaveat } from '@/data/materials';
import { getSource } from '@/data/sources';
import { getLogSummaries } from '@/lib/log';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) return { title: 'Material not found' };

  return {
    title: material.name,
    description: material.description,
    alternates: { canonical: `/materials/${material.id}` },
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) notFound();

  const relatedEntries = getLogSummaries().filter((entry) =>
    material.relatedLogSlugs?.includes(entry.slug)
  );
  const hasSafetyFlag = material.safetyConsiderations.startsWith('FLAGGED');

  return (
    <div className="shell sec-research pb-20">
      <header className="border-b border-[var(--accent)] pb-9 pt-8 sm:pt-12">
        <Breadcrumbs
          items={[{ label: 'Materials', href: '/materials' }, { label: material.name }]}
        />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <StatusBadge status={material.status} label={materialStatusLabels[material.status]} />
          <Badge variant="neutral">{material.category}</Badge>
          {hasSafetyFlag && <Badge variant="orange">Safety flag</Badge>}
        </div>

        <h1 className="max-w-4xl text-3xl leading-[1.15] sm:text-4xl">{material.name}</h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{material.description}</p>

        <SpecRail
          className="mt-8"
          columns={4}
          items={[
            { label: 'Category', value: material.category },
            { label: 'Intended components', value: material.intendedComponents.join(', ') },
            { label: 'Availability', value: material.availability },
            { label: 'Sources recorded', value: <span className="font-mono">{material.sourceIds.length}</span> },
          ]}
        />
      </header>

      {material.rationale && (
        <div className="pt-8">
          <Callout tone="integrity" title="Status rationale">
            {material.rationale}
          </Callout>
        </div>
      )}

      <Section eyebrow="Properties" title="Recorded properties">
        <DataTable
          caption={`Properties recorded for ${material.name}, each labeled with the type of evidence behind it.`}
          columns={['Property', 'Value', 'Evidence', 'Source']}
          rows={material.properties.map((property) => [
            property.label,
            property.value,
            <EvidenceBadge key="evidence" type={property.evidence} />,
            property.sourceId ? (
              <Link key="source" href={`/sources#${property.sourceId}`} className="text-[var(--accent)] hover:underline">
                {getSource(property.sourceId)?.citation ?? property.sourceId}
              </Link>
            ) : (
              <span key="none" className="text-ink-muted">
                —
              </span>
            ),
          ])}
        />
        {material.scores && (
          <div className="card mt-6 p-6">
            <ScoreBars scores={material.scores} />
            <p className="mt-5 border-t border-rule pt-4 text-[0.875rem] leading-relaxed text-ink-muted">
              {scoringCaveat}
            </p>
          </div>
        )}
      </Section>

      <Section eyebrow="Assessment" title="Advantages and limitations">
        <div className="grid gap-8 sm:grid-cols-2">
          <LabeledList label="Advantages" items={material.advantages} />
          <LabeledList label="Limitations" items={material.limitations} />
        </div>
      </Section>

      <Section eyebrow="Build fit" title="Manufacturing and performance">
        <div className="grid gap-8 sm:grid-cols-2">
          <LabeledList label="Manufacturing compatibility" items={material.manufacturingCompatibility} />
          <LabeledList label="Candidate testing methods" items={material.candidateTestingMethods} />
        </div>

        <SpecRail
          className="mt-10"
          columns={2}
          items={[
            { label: 'Expected performance', value: material.expectedPerformance },
            { label: 'Weight considerations', value: material.weightConsiderations },
            { label: 'Cost considerations', value: material.costConsiderations },
            { label: 'Sustainability considerations', value: material.sustainabilityConsiderations },
          ]}
        />
      </Section>

      <Section eyebrow="Safety" title="Handling and safety considerations">
        <Callout tone={hasSafetyFlag ? 'safety' : 'note'} title={hasSafetyFlag ? 'Requires controls' : 'Handling notes'}>
          {material.safetyConsiderations}
        </Callout>
      </Section>

      <Section eyebrow="References" title="Sources and related entries">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Sources</p>
            {material.sourceIds.length === 0 ? (
              <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
                No sources recorded yet. Property values above stay marked as open questions until a source
                supports them.
              </p>
            ) : (
              <ul className="space-y-2 text-[0.9375rem]">
                {material.sourceIds.map((id) => {
                  const source = getSource(id);
                  return (
                    <li key={id}>
                      <Link href={`/sources#${id}`} className="text-[var(--accent)] hover:underline">
                        {source?.citation ?? id}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <p className="eyebrow mb-2">Related research-log entries</p>
            {relatedEntries.length === 0 ? (
              <p className="text-[0.9375rem] text-ink-muted">None yet.</p>
            ) : (
              <ul className="space-y-2 text-[0.9375rem]">
                {relatedEntries.map((entry) => (
                  <li key={entry.slug}>
                    <Link href={`/research-log/${entry.slug}`} className="text-[var(--accent)] hover:underline">
                      Week {String(entry.week).padStart(2, '0')}: {entry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="mt-10">
          <Link href="/materials" className="text-[0.9375rem] font-medium text-[var(--accent)] hover:underline">
            Back to all material records
          </Link>
        </p>
      </Section>
    </div>
  );
}
