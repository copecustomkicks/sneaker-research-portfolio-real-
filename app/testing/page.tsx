import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail, LabeledList } from '@/components/Section';
import { Callout, EmptyState } from '@/components/Callout';
import { DataTable } from '@/components/DataTable';
import { Badge, StatusBadge } from '@/components/Badge';
import { PrototypeFigure } from '@/components/PrototypeRecord';
import { tests, evaluationAreas, testingScopeNote } from '@/data/tests';
import type { EvaluationArea, TestRecord } from '@/types';

export const metadata: Metadata = {
  title: 'Testing and results',
  description:
    'Test records and possible evaluation areas for the sneaker prototype: objectives, methods, variables, equipment, raw data, uncertainty, interpretation, and design implications.',
  alternates: { canonical: '/testing' },
};

const feasibilityLabels: Record<EvaluationArea['feasibility'], string> = {
  likely: 'Likely feasible',
  possible: 'Possible',
  'unlikely-without-lab-access': 'Unlikely without lab access',
};

const feasibilityVariant: Record<EvaluationArea['feasibility'], 'green' | 'blue' | 'outline'> = {
  likely: 'green',
  possible: 'blue',
  'unlikely-without-lab-access': 'outline',
};

export default function TestingPage() {
  const completed = tests.filter((test) => test.status === 'complete').length;

  return (
    <div className="shell sec-build pb-20">
      <PageHeader
        eyebrow="Testing and results"
        title="What gets measured, how, and how much to trust it"
        lede="Test records with their methods, data, and limitations."
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'Test records', value: <span className="font-mono">{tests.length}</span> },
              { label: 'Completed', value: <span className="font-mono">{completed}</span> },
              { label: 'Evaluation areas considered', value: <span className="font-mono">{evaluationAreas.length}</span> },
              {
                label: 'Likely feasible',
                value: (
                  <span className="font-mono">
                    {evaluationAreas.filter((area) => area.feasibility === 'likely').length}
                  </span>
                ),
              },
            ]}
          />
        }
      />

      <Section
        id="records"
        eyebrow={`${tests.length} recorded`}
        title="Test records"
        description="Method, data, and interpretation kept separate in every record."
        className="scroll-mt-24"
      >
        {tests.length === 0 ? (
          <EmptyState
            title="No testing has been performed"
            action={
              <Link
                href="/prototypes"
                className="inline-block rounded-[3px] border border-rule-strong bg-paper-raised px-5 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-paper-sunken"
              >
                See prototype status
              </Link>
            }
          >
            Testing starts in Phase 9, once something exists to test. Component experiments in Phase 8
            will produce the first measurements.
          </EmptyState>
        ) : (
          <div className="space-y-6">
            {tests.map((test) => (
              <TestRecordCard key={test.id} test={test} />
            ))}
          </div>
        )}
      </Section>

      <Section
        id="evaluation-areas"
        eyebrow="Scope pending"
        title="Possible evaluation areas"
        description="What could be evaluated, and whether the equipment is within reach."
        className="scroll-mt-24"
      >
        <Callout tone="provisional" title="Not a commitment to test all of these">
          {testingScopeNote}
        </Callout>

        <div className="mt-6">
          <DataTable
            caption="Possible evaluation areas, what each would measure, feasibility, and the equipment required."
            captionVisible={false}
            columns={['Evaluation area', 'What it would measure', 'Feasibility', 'Equipment needed']}
            rows={evaluationAreas.map((area) => [
              <span key="name" className="font-medium text-ink">
                {area.name}
              </span>,
              <span key="what" className="text-ink-muted">
                {area.whatItWouldMeasure}
              </span>,
              <Badge key="feas" variant={feasibilityVariant[area.feasibility]}>
                {feasibilityLabels[area.feasibility]}
              </Badge>,
              <span key="equip" className="text-ink-muted">
                {area.equipmentNeeded}
              </span>,
            ])}
          />
        </div>
      </Section>

    </div>
  );
}

function TestRecordCard({ test }: { test: TestRecord }) {
  const hasData = test.data.rows.length > 0;

  return (
    <article id={test.id} className="card scroll-mt-24 p-6 sm:p-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="blue">{test.category}</Badge>
        <StatusBadge status={test.status} />
        {!hasData && <Badge variant="outline">No data recorded yet</Badge>}
      </div>

      <h3 className="text-2xl leading-snug">{test.title}</h3>

      <SpecRail
        className="mt-6"
        columns={2}
        items={[
          { label: 'Objective', value: test.objective },
          { label: 'Pass and fail criteria', value: test.passFailCriteria },
        ]}
      />

      <div className="mt-8 border-t border-rule pt-7">
        <p className="eyebrow mb-2">Method</p>
        <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{test.method}</p>
      </div>

      <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-3">
        <LabeledList label="Independent variables" items={test.variables.independent} />
        <LabeledList label="Dependent variables" items={test.variables.dependent} />
        <LabeledList label="Controlled variables" items={test.variables.controlled} />
      </div>

      <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
        <LabeledList label="Equipment" items={test.equipment} />
        <div>
          <p className="eyebrow mb-2">Sample information</p>
          <p className="text-[0.9375rem] leading-relaxed text-ink">{test.sampleInformation}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-rule pt-7">
        <p className="eyebrow mb-3">Raw data</p>
        {hasData ? (
          <DataTable
            caption={`Raw data for ${test.title}.`}
            captionVisible={false}
            columns={test.data.columns}
            rows={test.data.rows.map((row) =>
              row.map((cell, index) => (
                <span key={index} className="font-mono">
                  {cell}
                </span>
              ))
            )}
          />
        ) : (
          <p className="text-[0.9375rem] text-ink-muted">
            No measurements recorded yet for this test.
          </p>
        )}
        {test.dataFile && (
          <p className="mt-3 text-[0.9375rem]">
            <a href={test.dataFile} download className="text-[var(--accent)] hover:underline">
              Download the raw data as CSV
            </a>
          </p>
        )}
      </div>

      {test.images.length > 0 && (
        <div className="mt-8 border-t border-rule pt-7">
          <p className="eyebrow mb-3">Photographs</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {test.images.map((image) => (
              <PrototypeFigure key={image.src} image={image} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-7 border-t border-rule pt-7 sm:grid-cols-2">
        <Field label="Calculations" value={test.calculations} />
        <Field label="Results" value={test.results} />
        <Field label="Uncertainty and limitations" value={test.uncertaintyAndLimitations} />
        <Field label="Interpretation" value={test.interpretation} />
        <Field label="Design implications" value={test.designImplications} />
      </div>

      <div className="mt-8 border-t border-rule pt-7">
        <LabeledList
          label="Recommended changes"
          items={test.recommendedChanges}
          empty="None recorded"
        />
      </div>

      {test.relatedLogSlugs && test.relatedLogSlugs.length > 0 && (
        <p className="mt-7 border-t border-rule pt-5 text-[0.9375rem]">
          <span className="eyebrow mr-3">Related log</span>
          {test.relatedLogSlugs.map((slug) => (
            <Link key={slug} href={`/research-log/${slug}`} className="mr-3 text-[var(--accent)] hover:underline">
              {slug}
            </Link>
          ))}
        </p>
      )}

      {test.relatedPrototypeIds && test.relatedPrototypeIds.length > 0 && (
        <p className="mt-3 text-[0.9375rem]">
          <span className="eyebrow mr-3">Related build</span>
          {test.relatedPrototypeIds.map((id) => (
            <Link key={id} href={`/prototypes#${id}`} className="mr-3 text-[var(--accent)] hover:underline">
              {id}
            </Link>
          ))}
        </p>
      )}
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[0.9375rem] leading-relaxed text-ink">{value || 'Not yet recorded'}</p>
    </div>
  );
}
