import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, LabeledList } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge } from '@/components/Badge';
import { anatomy, anatomyGroups } from '@/data/anatomy';
import { getSource } from '@/data/sources';
import { getArtifact } from '@/data/artifacts';

export const metadata: Metadata = {
  title: 'Sneaker anatomy',
  description:
    'A component-by-component reference for sneaker construction: what each part does, how it relates to neighboring components, and which commonly confused terms it should not be mistaken for.',
  alternates: { canonical: '/anatomy' },
};

export default function AnatomyPage() {
  const diagram = getArtifact('art-anatomy-callout-diagram');

  return (
    <div className="shell sec-research pb-20">
      <PageHeader
        eyebrow="Reference"
        title="Sneaker anatomy"
        lede="Thirty-one components across the upper, lasting, sole, joining, and tooling systems — what each one does and the terms it is easy to confuse it with."
      />

      {diagram?.src && (
        <figure className="mt-8 card overflow-hidden p-0">
          <Image
            src={diagram.src}
            alt={diagram.alt}
            width={1448}
            height={1086}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="w-full"
          />
          <figcaption className="border-t border-rule px-6 py-4 text-[0.9375rem] text-ink-muted">
            {diagram.caption}
          </figcaption>
        </figure>
      )}

      <div className="pt-8">
        <Callout tone="integrity" title="No uncited numbers on this page">
          These entries are deliberately qualitative. Quantitative properties belong in a{' '}
          <Link href="/materials" className="text-[var(--accent)] underline">
            material record
          </Link>{' '}
          with a citation, or in a{' '}
          <Link href="/testing" className="text-[var(--accent)] underline">
            test record
          </Link>{' '}
          with data behind it — not in a general reference where the source would be lost.
        </Callout>
      </div>

      <nav aria-label="Component groups" className="mt-10 border-y border-rule py-6">
        <p className="eyebrow mb-3">Jump to</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {anatomyGroups.map((group) => (
            <li key={group.id}>
              <a
                href={`#group-${group.id}`}
                className="text-[0.9375rem] text-ink-muted hover:text-[var(--accent)] hover:underline"
              >
                {group.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {anatomyGroups.map((group) => {
        const components = anatomy.filter((component) => component.group === group.id);
        if (components.length === 0) return null;

        return (
          <Section
            key={group.id}
            id={`group-${group.id}`}
            eyebrow={`${components.length} components`}
            title={group.label}
            description={group.description}
            className="scroll-mt-24"
          >
            <div className="space-y-5">
              {components.map((component) => (
                <article key={component.id} id={component.id} className="card scroll-mt-24 p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-2xl leading-snug">{component.name}</h3>
                    <Badge variant="neutral">{group.label}</Badge>
                  </div>

                  <p className="mt-3 max-w-prose text-[1.0625rem] leading-relaxed text-ink-muted">
                    {component.function}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <LabeledList label="Common materials" items={component.commonMaterials} />
                    <LabeledList label="Relevant properties" items={component.relevantProperties} />
                    <LabeledList label="Common processes" items={component.commonProcesses} />
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
                    <LabeledList label="Design tradeoffs" items={component.designTradeoffs} />
                    <LabeledList label="Questions to investigate" items={component.questionsToInvestigate} />
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow mb-2">Related sources</p>
                      {component.relatedSourceIds?.length ? (
                        <ul className="space-y-1.5 text-[0.9375rem]">
                          {component.relatedSourceIds.map((id) => {
                            const source = getSource(id);
                            return (
                              <li key={id}>
                                {source ? (
                                  <Link href={`/sources#${source.id}`} className="text-[var(--accent)] hover:underline">
                                    {source.citation}
                                  </Link>
                                ) : (
                                  <span className="text-ink-muted">Unknown source: {id}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="text-[0.9375rem] text-ink-muted">None recorded yet.</p>
                      )}
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Findings from this project</p>
                      <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                        {component.relatedFindings ?? 'No findings yet. This component has not been investigated.'}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>
        );
      })}
    </div>
  );
}
