import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge } from '@/components/Badge';
import { overviewSections, researchQuestion, projectGoal, scopeDisclaimer } from '@/data/project';
import { phases } from '@/data/phases';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Project overview',
  description:
    'Background, problem statement, research question, goal, scope, methodology, success criteria, constraints, risks, and academic context for the sneaker engineering research project.',
  alternates: { canonical: '/overview' },
};

export default function OverviewPage() {
  return (
    <div className="shell sec-project pb-20">
      <PageHeader
        eyebrow="Project overview"
        title="What this project is trying to answer, and how"
        lede="The framing below is under active development. Sections still in draft are labeled as preliminary."
        crumbs={[{ label: 'Overview' }]}
        layout="banner"
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Researcher', value: site.researcher },
              { label: 'Faculty mentor', value: site.mentor },
              { label: 'Program', value: site.program },
              { label: 'Phases planned', value: <span className="font-mono">{phases.length}</span> },
            ]}
          />
        }
        notice={scopeDisclaimer}
      />

      {/* Question and goal, pulled out because they anchor everything else. */}
      <Section eyebrow="Anchors" title="Research question and goal">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card border-uf-blue/25 bg-uf-blue-soft/40 p-6">
            <div className="mb-3 flex items-center gap-2">
              <p className="eyebrow">Preliminary research question</p>
              <Badge variant="outline">Draft</Badge>
            </div>
            <p className="text-lg leading-relaxed text-ink">{researchQuestion}</p>
          </div>
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-2">
              <p className="eyebrow">Preliminary project goal</p>
              <Badge variant="outline">Draft</Badge>
            </div>
            <p className="text-lg leading-relaxed text-ink">{projectGoal}</p>
          </div>
        </div>
      </Section>

      {/* Table of contents for a long page. */}
      <nav aria-label="Overview sections" className="border-y border-rule py-6">
        <p className="eyebrow mb-3">On this page</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {overviewSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-[0.9375rem] text-ink-muted hover:text-[var(--accent)] hover:underline"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="divide-y divide-rule">
        {overviewSections.map((section) => (
          <section key={section.id} id={section.id} className="py-10 sm:py-12">
            <div className="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-12">
              <div>
                <h2 className="text-xl leading-snug">{section.heading}</h2>
                {section.preliminary && (
                  <p className="mt-3">
                    <Badge variant="outline">Preliminary</Badge>
                  </p>
                )}
              </div>
              <div>
                {section.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 max-w-prose text-[1.0625rem] leading-relaxed text-ink last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item, index) => (
                      <li key={index} className="flex max-w-prose gap-3 text-[1.0625rem] leading-relaxed">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-rule-strong" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Section eyebrow="Schedule" title="Project timeline">
        <ol className="divide-y divide-rule overflow-hidden rounded-card border border-rule bg-paper-raised">
          {phases.map((phase) => (
            <li key={phase.id} className="flex flex-wrap items-baseline gap-x-5 gap-y-1 px-5 py-4">
              <span className="font-mono text-micro text-[var(--accent)]">
                P{String(phase.number).padStart(2, '0')}
              </span>
              <span className="text-[0.9375rem] font-medium text-ink">{phase.name}</span>
              <span className="ml-auto font-mono text-micro uppercase text-ink-muted">
                {phase.plannedDates}
              </span>
            </li>
          ))}
        </ol>
        <Callout tone="provisional" title="Provisional schedule" className="mt-6">
          Phase dates are planning estimates maintained in{' '}
          <code className="font-mono text-[0.875rem]">data/phases.ts</code>. See the{' '}
          <Link href="/roadmap" className="text-[var(--accent)] underline">
            full roadmap
          </Link>{' '}
          for objectives, expected outputs, and current status per phase.
        </Callout>
      </Section>
    </div>
  );
}
