import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { PrototypeRecord } from '@/components/PrototypeRecord';
import {
  prototypes,
  getComponentExperiments,
  getFullShoePrototypes,
  noPrototypeMessage,
} from '@/data/prototypes';
import { getPhaseById } from '@/data/phases';

export const metadata: Metadata = {
  title: 'Prototype development',
  description:
    'Iteration record for sneaker prototypes and component experiments: purpose, materials, processes, construction steps, measurements, failures, and lessons learned.',
  alternates: { canonical: '/prototypes' },
};

export default function PrototypesPage() {
  const fullShoes = getFullShoePrototypes();
  const experiments = getComponentExperiments();
  const fabricationPhase = getPhaseById('phase-08');

  return (
    <div className="shell sec-build pb-20">
      <PageHeader
        eyebrow="Prototype development"
        title="Builds, experiments, and what went wrong"
        lede="Every build recorded the same way — including what failed."
        layout="banner"
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Full-shoe prototypes', value: <span className="font-mono">{fullShoes.length}</span> },
              { label: 'Component experiments', value: <span className="font-mono">{experiments.length}</span> },
              {
                label: 'Fabrication phase',
                value: fabricationPhase ? `Phase ${fabricationPhase.number}` : 'Phase 8',
              },
              {
                label: 'Phase status',
                value: fabricationPhase ? fabricationPhase.status.replace(/-/g, ' ') : 'not started',
              },
            ]}
          />
        }
      />

      {prototypes.length === 0 && (
        <div className="pt-8">
          <Callout tone="provisional" title="No prototype fabricated yet">
            {noPrototypeMessage}
          </Callout>
        </div>
      )}

      <Section
        id="experiments"
        eyebrow={`${experiments.length} recorded`}
        title="Component experiments"
        description="Small builds that answer one question each — a bonded sample, a seam test, a foam stack. These come first."
        className="scroll-mt-24"
      >
        {experiments.length === 0 ? (
          <EmptyState
            title="No component experiments yet"
            action={
              <Link
                href="/design#prototype-plan"
                className="inline-block rounded-[3px] border border-rule-strong bg-paper-raised px-5 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-paper-sunken"
              >
                See the planned build sequence
              </Link>
            }
          >
            {null}
          </EmptyState>
        ) : (
          <div className="space-y-6">
            {experiments.map((prototype) => (
              <PrototypeRecord key={prototype.id} prototype={prototype} />
            ))}
          </div>
        )}
      </Section>

      <Section
        id="full-shoe"
        eyebrow={`${fullShoes.length} recorded`}
        title="Full-shoe prototypes"
        description="Complete builds, numbered P1 onward."
        className="scroll-mt-24"
      >
        {fullShoes.length === 0 ? (
          <EmptyState title="No complete shoe has been built">
            This section stays empty until a shoe exists. Fabrication is scheduled for Phase 8, after
            material selection, pattern development, and the component experiments above.
          </EmptyState>
        ) : (
          <div className="space-y-6">
            {fullShoes.map((prototype) => (
              <PrototypeRecord key={prototype.id} prototype={prototype} />
            ))}
          </div>
        )}
      </Section>

    </div>
  );
}
