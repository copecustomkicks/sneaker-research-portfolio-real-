import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { DataTable } from '@/components/DataTable';
import { StatusBadge } from '@/components/Badge';
import {
  RequirementCard,
  DecisionMatrixTable,
  DecisionRecord,
  DesignReviewEntry,
  RevisionHistory,
  RiskRegister,
  OpenQuestionList,
} from '@/components/DesignBlocks';
import {
  benchmarkNote,
  billOfMaterials,
  decisionMatrices,
  designDecisions,
  designReviews,
  openQuestions,
  requirements,
  risks,
} from '@/data/design';
import { scopeDisclaimer } from '@/data/project';

export const metadata: Metadata = {
  title: 'Design process',
  description:
    'Engineering design record: performance needs, requirements, constraints, weighted decision matrices, design decisions, bill of materials, risk register, and open questions.',
  alternates: { canonical: '/design' },
};

export default function DesignPage() {
  const needs = requirements.filter((requirement) => requirement.type === 'need');
  const specs = requirements.filter((requirement) => requirement.type === 'requirement');
  const constraints = requirements.filter((requirement) => requirement.type === 'constraint');

  return (
    <div className="shell sec-build pb-20">
      <PageHeader
        eyebrow="Design process"
        title="Requirements, decisions, and the reasoning behind them"
        lede="What the shoe has to do, what limits the design, and how choices get made."
        crumbs={[{ label: 'Design process' }]}
        notice={scopeDisclaimer}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Needs and requirements', value: <span className="font-mono">{requirements.length}</span> },
              { label: 'Decision matrices', value: <span className="font-mono">{decisionMatrices.length}</span> },
              { label: 'Risks tracked', value: <span className="font-mono">{risks.length}</span> },
              { label: 'Open questions', value: <span className="font-mono">{openQuestions.length}</span> },
            ]}
          />
        }
      />

      <nav aria-label="Sections on this page" className="mt-10 border-y border-rule py-6">
        <p className="eyebrow mb-3">On this page</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {[
            ['needs', 'Needs'],
            ['requirements', 'Requirements'],
            ['constraints', 'Constraints'],
            ['benchmarking', 'Benchmarking'],
            ['concepts', 'Concept sketches'],
            ['matrices', 'Decision matrices'],
            ['cad', 'CAD and patterns'],
            ['bom', 'Bill of materials'],
            ['prototype-plan', 'Prototype plan'],
            ['risks', 'Risk register'],
            ['reviews', 'Design reviews'],
            ['decisions', 'Decision records'],
            ['questions', 'Open questions'],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-[0.9375rem] text-ink-muted hover:text-[var(--accent)] hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section
        id="needs"
        eyebrow={`${needs.length} recorded`}
        title="User and performance needs"
        description="What the shoe has to do, in plain language."
        className="scroll-mt-24"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {needs.map((requirement) => (
            <RequirementCard key={requirement.id} requirement={requirement} />
          ))}
        </div>
      </Section>

      <Section
        id="requirements"
        eyebrow={`${specs.length} recorded`}
        title="Design requirements"
        description="Each names how it will be verified. Thresholds stay blank until benchmarking sets them."
        className="scroll-mt-24"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {specs.map((requirement) => (
            <RequirementCard key={requirement.id} requirement={requirement} />
          ))}
        </div>
      </Section>

      <Section
        id="constraints"
        eyebrow={`${constraints.length} recorded`}
        title="Constraints"
        description="Boundaries the design cannot cross."
        className="scroll-mt-24"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {constraints.map((requirement) => (
            <RequirementCard key={requirement.id} requirement={requirement} />
          ))}
        </div>
      </Section>

      <Section
        id="benchmarking"
        eyebrow="Phase 2"
        title="Benchmark products"
        description="Physical inspection of existing footwear, recorded by construction type."
        className="scroll-mt-24"
      >
        <Callout tone="integrity" title="How benchmarking is recorded here">
          {benchmarkNote}
        </Callout>
        <div className="mt-6">
          <EmptyState title="No benchmark teardowns recorded yet">
            Teardowns begin in Phase 2. Each one will be added as a research-log entry with
            photographs, and the construction observations will be summarized here.
          </EmptyState>
        </div>
      </Section>

      <Section
        id="concepts"
        eyebrow="Phase 5"
        title="Concept sketches"
        description="Early form and construction concepts, before any geometry is committed to CAD."
        className="scroll-mt-24"
      >
        <EmptyState title="No concept sketches published yet">
          Sketches will appear in the{' '}
          <Link href="/gallery" className="text-[var(--accent)] underline">
            gallery
          </Link>{' '}
          with captions explaining what each concept was testing.
        </EmptyState>
      </Section>

      <Section
        id="matrices"
        eyebrow={`${decisionMatrices.length} matrices`}
        title="Decision matrices"
        description="Criteria and weights are set before scoring."
        className="scroll-mt-24"
      >
        <div className="space-y-6">
          {decisionMatrices.map((matrix) => (
            <DecisionMatrixTable key={matrix.id} matrix={matrix} />
          ))}
        </div>
      </Section>

      <Section
        id="cad"
        eyebrow="Phase 7"
        title="CAD models and pattern iterations"
        description="Last geometry, sole geometry, and the flat patterns derived from them."
        className="scroll-mt-24"
      >
        <EmptyState title="No CAD or pattern work yet">
          Phase 7 produces the first last and sole geometry and the flat pattern set. Screenshots and
          revision notes will be published here and in the gallery, with each pattern revision
          documented against the fit problem it was trying to solve.
        </EmptyState>
      </Section>

      <Section
        id="bom"
        eyebrow={`${billOfMaterials.length} line items`}
        title="Bill of materials"
        description="Nothing is sourced yet. Costs stay blank rather than guessed."
        className="scroll-mt-24"
      >
        <DataTable
          caption="Working bill of materials for the first prototype. Suppliers and costs are not yet established."
          captionVisible={false}
          columns={['Component', 'Material', 'Quantity', 'Supplier', 'Estimated cost', 'Status']}
          rows={billOfMaterials.map((item) => [
            <span key="component" className="font-medium text-ink">
              {item.component}
            </span>,
            item.materialId ? (
              <Link key="material" href={`/materials/${item.materialId}`} className="text-[var(--accent)] hover:underline">
                {item.materialName}
              </Link>
            ) : (
              <span key="material" className="text-ink-muted">
                {item.materialName}
              </span>
            ),
            <span key="qty" className="text-ink-muted">
              {item.quantity}
            </span>,
            <span key="supplier" className="text-ink-muted">
              {item.supplier}
            </span>,
            <span key="cost" className="text-ink-muted">
              {item.estimatedCost}
            </span>,
            <StatusBadge key="status" status={item.status} />,
          ])}
        />
        <p className="mt-4 max-w-prose text-[0.875rem] leading-relaxed text-ink-muted">
          Notes on individual lines:{' '}
          {billOfMaterials
            .filter((item) => item.notes)
            .map((item) => `${item.component} — ${item.notes}`)
            .join(' ')}
        </p>
      </Section>

      <Section
        id="prototype-plan"
        eyebrow="Phase 8"
        title="Prototype plan"
        description="The build sequence, written before the build starts."
        className="scroll-mt-24"
      >
        <Callout tone="provisional" title="Planned sequence, not a completed build">
          <ol className="mt-2 space-y-2">
            {[
              'Confirm equipment access and workspace approval for every process.',
              'Run component experiments on scrap: bonds, seams, foam stacks.',
              'Produce or source the last and verify its dimensions.',
              'Cut and assemble the upper from the current pattern revision.',
              'Prepare surfaces, then bond and clamp the sole unit.',
              'Inspect, photograph, and record failures before wearing it at all.',
            ].map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-mono text-micro text-ink-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Callout>
      </Section>

      <Section
        id="risks"
        eyebrow={`${risks.length} tracked`}
        title="Risk register"
        description="Ordered by likelihood combined with impact. Mitigations are planned actions."
        className="scroll-mt-24"
      >
        <RiskRegister risks={risks} />
      </Section>

      <Section
        id="reviews"
        eyebrow={`${designReviews.length} record`}
        title="Design review history"
        description="Mentor conversations and formal reviews. Nothing here that did not actually happen."
        className="scroll-mt-24"
      >
        <div className="space-y-5">
          {designReviews.map((review) => (
            <DesignReviewEntry key={review.id} review={review} />
          ))}
        </div>
      </Section>

      <Section
        id="decisions"
        eyebrow={`${designDecisions.length} recorded`}
        title="Decision records"
        description="Each choice, with the alternatives rejected."
        className="scroll-mt-24"
      >
        <div className="mb-8">
          <p className="eyebrow mb-3">Revision history</p>
          <RevisionHistory decisions={designDecisions} />
        </div>
        <div className="space-y-6">
          {designDecisions.map((decision) => (
            <DecisionRecord key={decision.id} decision={decision} />
          ))}
        </div>
      </Section>

      <Section
        id="questions"
        eyebrow={`${openQuestions.length} unresolved`}
        title="Open engineering questions"
        description="Recorded as unanswered rather than filled in with a guess."
        className="scroll-mt-24"
      >
        <OpenQuestionList questions={openQuestions} />
      </Section>
    </div>
  );
}
