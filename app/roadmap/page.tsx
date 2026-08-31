import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail, LabeledList } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { Badge, StatusBadge } from '@/components/Badge';
import { ProgressBar } from '@/components/DataTable';
import { PhaseStrip } from '@/components/PhaseStrip';
import { phases, getOverallCompletion, getCurrentPhase } from '@/data/phases';
import { getEntriesByPhase } from '@/lib/log';
import { completionDisclaimer } from '@/lib/metrics';
import { pluralize } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Research roadmap',
  description:
    'The eleven provisional phases of the project, from background research through prototype fabrication, testing, and thesis preparation, with objectives, expected outputs, and current status.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  const completion = getOverallCompletion();
  const current = getCurrentPhase();

  return (
    <div className="shell sec-project pb-20">
      <PageHeader
        eyebrow="Research roadmap"
        title="Eleven phases from background research to oral defense"
        lede="Objectives and outputs defined up front. Status updated as work happens."
        crumbs={[{ label: 'Roadmap' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Phases', value: <span className="font-mono">{phases.length}</span> },
              {
                label: 'Current phase',
                value: `P${String(current.number).padStart(2, '0')} — ${current.name}`,
              },
              { label: 'Overall completion', value: <span className="font-mono">{completion}%</span> },
              { label: 'Planned span', value: 'Aug 2026 – May 2027' },
            ]}
          />
        }
        notice="Provisional. Phase order, dates, and scope will change as the research develops."
      />

      <Section eyebrow="At a glance" title="Phase completion">
        <div className="card p-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="eyebrow">Overall</span>
            <span className="font-mono text-2xl font-semibold text-ink">{completion}%</span>
          </div>
          <div className="mb-8">
            <PhaseStrip phases={phases} currentId={current.id} showLabels={false} />
          </div>
          <ol className="space-y-4">
            {phases.map((phase) => (
              <li key={phase.id}>
                <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-micro text-[var(--accent)]">
                    P{String(phase.number).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${phase.id}`}
                    className="text-[0.9375rem] text-ink hover:text-[var(--accent)] hover:underline"
                  >
                    {phase.name}
                  </a>
                  <span className="ml-auto font-mono text-micro text-ink-muted">{phase.completion}%</span>
                </div>
                <ProgressBar
                  value={phase.completion}
                  size="sm"
                  label={`Phase ${phase.number}, ${phase.name}, ${phase.completion} percent complete`}
                />
              </li>
            ))}
          </ol>
        </div>
        <Callout tone="provisional" title="What the percentage means" className="mt-6">
          {completionDisclaimer}
        </Callout>
      </Section>

      <Section eyebrow="Detail" title="Every phase">
        <ol className="space-y-5">
          {phases.map((phase) => {
            const related = getEntriesByPhase(phase.name);
            return (
              <li key={phase.id} id={phase.id} className="card scroll-mt-24 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-micro font-semibold text-[var(--accent)]">
                    Phase {String(phase.number).padStart(2, '0')}
                  </span>
                  <StatusBadge status={phase.status} />
                  {phase.completion > 0 && <Badge variant="neutral">{phase.completion}% complete</Badge>}
                </div>

                <h3 className="mt-3 text-2xl leading-snug">{phase.name}</h3>

                <SpecRail
                  className="mt-6"
                  columns={3}
                  items={[
                    { label: 'Planned', value: phase.plannedDates },
                    { label: 'Actual', value: phase.actualDates ?? 'Not started' },
                    {
                      label: 'Related log entries',
                      value: related.length
                        ? `${related.length} ${pluralize(related.length, 'entry', 'entries')}`
                        : 'None yet',
                    },
                  ]}
                />

                <div className="mt-7 grid gap-8 sm:grid-cols-2">
                  <LabeledList label="Objectives" items={phase.objectives} />
                  <LabeledList label="Expected outputs" items={phase.expectedOutputs} />
                </div>

                {phase.notes && (
                  <p className="mt-6 max-w-prose border-l-2 border-rule-strong pl-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {phase.notes}
                  </p>
                )}

                {(related.length > 0 || phase.relatedLinks?.length) && (
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-5">
                    {related.map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/research-log/${entry.slug}`}
                        className="text-[0.875rem] font-medium text-[var(--accent)] hover:underline"
                      >
                        Week {String(entry.week).padStart(2, '0')}: {entry.title}
                      </Link>
                    ))}
                    {phase.relatedLinks?.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-[0.875rem] font-medium text-[var(--accent)] hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Section>
    </div>
  );
}
