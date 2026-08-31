import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail, LabeledList } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge } from '@/components/Badge';
import { processes, processStages, understandingLabels } from '@/data/processes';
import { safetyStatement } from '@/data/project';

export const metadata: Metadata = {
  title: 'Manufacturing processes',
  description:
    'Reference for footwear manufacturing and assembly processes: purpose, tools, inputs, critical variables, common defects, safety requirements, and quality checks.',
  alternates: { canonical: '/processes' },
};

export default function ProcessesPage() {
  const supervised = processes.filter((process) => process.requiresSupervision).length;

  return (
    <div className="shell sec-research pb-20">
      <PageHeader
        eyebrow="Manufacturing processes"
        title="How a sneaker is actually put together"
        lede="Seventeen processes, from last selection through final inspection."
        crumbs={[{ label: 'Processes' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Processes documented', value: <span className="font-mono">{processes.length}</span> },
              { label: 'Requiring supervision', value: <span className="font-mono">{supervised}</span> },
              { label: 'Stages', value: <span className="font-mono">{processStages.length}</span> },
              {
                label: 'Practiced',
                value: (
                  <span className="font-mono">
                    {processes.filter((process) => process.understanding === 'practiced').length}
                  </span>
                ),
              },
            ]}
          />
        }
      />

      <div className="pt-8">
        <Callout tone="safety" title="Safety notice — read before any process work">
          <p className="mb-3">{safetyStatement[0]}</p>
          <p>{safetyStatement[1]}</p>
          <p className="mt-3">
            Descriptions below are research summaries of what each step accomplishes. They are{' '}
            <strong>not operating procedures</strong>. Processes marked{' '}
            <span className="whitespace-nowrap">&ldquo;Requires supervision&rdquo;</span> must not be
            attempted without trained supervision in an approved facility.
          </p>
        </Callout>
      </div>

      <nav aria-label="Process stages" className="mt-10 border-y border-rule py-6">
        <p className="eyebrow mb-3">Jump to stage</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {processStages.map((stage) => (
            <li key={stage.id}>
              <a
                href={`#stage-${stage.id}`}
                className="text-[0.9375rem] text-ink-muted hover:text-[var(--accent)] hover:underline"
              >
                {stage.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {processStages.map((stage) => {
        const stageProcesses = processes.filter((process) => process.stage === stage.id);
        if (stageProcesses.length === 0) return null;

        return (
          <Section
            key={stage.id}
            id={`stage-${stage.id}`}
            eyebrow={`${stageProcesses.length} processes`}
            title={stage.label}
            description={stage.description}
            className="scroll-mt-24"
          >
            <div className="space-y-5">
              {stageProcesses.map((process) => (
                <article key={process.id} id={process.id} className="card scroll-mt-24 p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="neutral">{understandingLabels[process.understanding]}</Badge>
                    {process.requiresSupervision && <Badge variant="orange">Requires supervision</Badge>}
                  </div>

                  <h3 className="text-2xl leading-snug">{process.name}</h3>
                  <p className="mt-3 max-w-prose text-[1.0625rem] leading-relaxed text-ink-muted">
                    {process.purpose}
                  </p>

                  <div className="mt-7">
                    <p className="eyebrow mb-2">What the step does</p>
                    <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">
                      {process.procedureSummary}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2 lg:grid-cols-3">
                    <LabeledList label="Required tools" items={process.requiredTools} />
                    <LabeledList label="Inputs" items={process.inputs} />
                    <LabeledList label="Critical variables" items={process.criticalVariables} />
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
                    <LabeledList label="Common defects" items={process.commonDefects} />
                    <LabeledList label="Quality checks" items={process.qualityChecks} />
                  </div>

                  <div className="mt-8 border-t border-rule pt-7">
                    <Callout
                      tone={process.requiresSupervision ? 'safety' : 'note'}
                      title={process.requiresSupervision ? 'Safety — supervision required' : 'Safety precautions'}
                    >
                      <ul className="space-y-1.5">
                        {process.safetyPrecautions.map((precaution, index) => (
                          <li key={index} className="flex gap-2.5">
                            <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-current opacity-40" />
                            <span>{precaution}</span>
                          </li>
                        ))}
                      </ul>
                      {process.supervisionNote && (
                        <p className="mt-3 font-medium">{process.supervisionNote}</p>
                      )}
                    </Callout>
                  </div>

                  <SpecRail
                    className="mt-8"
                    columns={2}
                    items={[
                      { label: 'Relevance to this prototype', value: process.relevanceToPrototype },
                      {
                        label: 'Current level of understanding',
                        value: understandingLabels[process.understanding],
                      },
                    ]}
                  />

                  <div className="mt-7 border-t border-rule pt-5">
                    <p className="eyebrow mb-2">Sources</p>
                    {process.sourceIds.length === 0 ? (
                      <p className="text-[0.9375rem] text-ink-muted">
                        None recorded yet. Add references in{' '}
                        <code className="font-mono text-[0.875rem]">data/sources.ts</code>, then list their
                        IDs on this process.
                      </p>
                    ) : (
                      <ul className="space-y-1.5 text-[0.9375rem]">
                        {process.sourceIds.map((id) => (
                          <li key={id}>
                            <Link href={`/sources#${id}`} className="text-[var(--accent)] hover:underline">
                              {id}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
