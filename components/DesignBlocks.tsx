import Link from 'next/link';
import { Badge, EvidenceBadge, StatusBadge } from '@/components/Badge';
import { DataTable } from '@/components/DataTable';
import { Callout } from '@/components/Callout';
import { SpecRail } from '@/components/Section';
import { formatDate } from '@/lib/utils';
import type {
  DecisionMatrix,
  DesignDecision,
  DesignRequirement,
  DesignReview,
  RiskEntry,
} from '@/types';

/* ------------------------------------------------------------------ */
/* Requirement card                                                     */
/* ------------------------------------------------------------------ */

const priorityLabels: Record<DesignRequirement['priority'], string> = {
  must: 'Must have',
  should: 'Should have',
  could: 'Could have',
};

const typeLabels: Record<DesignRequirement['type'], string> = {
  need: 'User or performance need',
  requirement: 'Design requirement',
  constraint: 'Constraint',
};

export function RequirementCard({ requirement }: { requirement: DesignRequirement }) {
  return (
    <article id={requirement.id} className="card scroll-mt-24 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="blue">{requirement.code}</Badge>
        <StatusBadge status={requirement.status} />
        <Badge variant="outline">{priorityLabels[requirement.priority]}</Badge>
        <EvidenceBadge type={requirement.evidence} />
      </div>

      <h3 className="text-lg leading-snug">{requirement.title}</h3>
      <p className="mt-2.5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
        {requirement.description}
      </p>

      <SpecRail
        className="mt-6"
        columns={2}
        items={[
          { label: 'Category', value: typeLabels[requirement.type] },
          { label: 'How it will be verified', value: requirement.verification },
        ]}
      />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Decision matrix                                                      */
/* ------------------------------------------------------------------ */

/**
 * Weighted decision matrix.
 *
 * A weighted total is shown only when every option has been scored against
 * every criterion. A partially scored matrix produces a misleading ranking,
 * so it renders as "not yet scored" instead.
 */
export function DecisionMatrixTable({ matrix }: { matrix: DecisionMatrix }) {
  const criteriaNames = matrix.criteria.map((criterion) => criterion.name);

  const isFullyScored =
    matrix.options.length > 0 &&
    matrix.options.every((option) =>
      criteriaNames.every((name) => typeof option.scores[name] === 'number')
    );

  const weightedTotal = (option: DecisionMatrix['options'][number]) =>
    matrix.criteria.reduce(
      (total, criterion) => total + (option.scores[criterion.name] ?? 0) * criterion.weight,
      0
    );

  return (
    <article id={matrix.id} className="card scroll-mt-24 p-6 sm:p-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <StatusBadge status={matrix.status} />
        <Badge variant="outline">{matrix.scale}</Badge>
      </div>

      <h3 className="text-xl leading-snug">{matrix.title}</h3>
      <p className="mt-2.5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
        {matrix.question}
      </p>

      <div className="mt-7">
        <p className="eyebrow mb-3">Criteria and weights</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {matrix.criteria.map((criterion) => (
            <li key={criterion.name} className="border-t border-rule pt-2.5">
              <p className="flex items-baseline justify-between gap-3 text-[0.9375rem] font-medium text-ink">
                <span>{criterion.name}</span>
                <span className="font-mono text-micro text-ink-muted">
                  {criterion.weight.toFixed(2)}
                </span>
              </p>
              <p className="mt-0.5 text-[0.875rem] leading-snug text-ink-muted">
                {criterion.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <DataTable
          caption={`${matrix.title}: options scored against weighted criteria. ${
            isFullyScored ? '' : 'Scoring is not complete, so no ranking is shown.'
          }`}
          captionVisible={false}
          columns={['Option', ...criteriaNames, 'Weighted total', 'Notes']}
          rows={matrix.options.map((option) => [
            <span key="name" className="font-medium text-ink">
              {option.name}
            </span>,
            ...criteriaNames.map((name) => (
              <span key={name} className="font-mono">
                {typeof option.scores[name] === 'number' ? option.scores[name] : '—'}
              </span>
            )),
            <span key="total" className="font-mono">
              {isFullyScored ? weightedTotal(option).toFixed(2) : '—'}
            </span>,
            <span key="notes" className="text-ink-muted">
              {option.notes ?? '—'}
            </span>,
          ])}
        />
      </div>

      {matrix.outcome && (
        <div className="mt-6 border-t border-rule pt-5">
          <p className="eyebrow mb-2">Outcome</p>
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{matrix.outcome}</p>
        </div>
      )}

      <Callout tone="provisional" title="Read this before using the numbers" className="mt-6">
        {matrix.caveat}
      </Callout>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Design review                                                        */
/* ------------------------------------------------------------------ */

export function DesignReviewEntry({ review }: { review: DesignReview }) {
  return (
    <article id={review.id} className="card scroll-mt-24 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="neutral">{formatDate(review.date)}</Badge>
        {review.mentorFeedbackRecorded ? (
          <Badge variant="blue">Mentor feedback recorded</Badge>
        ) : (
          <Badge variant="outline">No mentor feedback recorded</Badge>
        )}
      </div>

      <h3 className="text-lg leading-snug">{review.title}</h3>

      <div className="mt-6 grid gap-7 sm:grid-cols-2">
        <ReviewList label="Agenda" items={review.agenda} />
        <ReviewList label="Outcomes" items={review.outcomes} />
        <ReviewList label="Action items" items={review.actionItems} empty="None recorded" />
        <ReviewList label="Attendees" items={review.attendees} empty="None recorded" />
      </div>
    </article>
  );
}

function ReviewList({
  label,
  items,
  empty = 'Not yet recorded',
}: {
  label: string;
  items: string[];
  empty?: string;
}) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      {items.length === 0 ? (
        <p className="text-[0.9375rem] text-ink-muted">{empty}</p>
      ) : (
        <ul className="space-y-1.5 text-[0.9375rem] leading-relaxed text-ink">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Decision record and revision history                                 */
/* ------------------------------------------------------------------ */

export function DecisionRecord({ decision }: { decision: DesignDecision }) {
  return (
    <article id={decision.id} className="card scroll-mt-24 p-6 sm:p-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="neutral">{formatDate(decision.date)}</Badge>
        <StatusBadge status={decision.status} />
        <EvidenceBadge type={decision.evidence} />
      </div>

      <h3 className="text-xl leading-snug">{decision.title}</h3>

      <div className="mt-6 space-y-6">
        <DecisionField label="Context" value={decision.context} />
        <DecisionField label="Decision" value={decision.decision} />
        <DecisionField label="Rationale" value={decision.rationale} />
      </div>

      <div className="mt-8 grid gap-7 border-t border-rule pt-7 sm:grid-cols-2">
        <ReviewList label="Alternatives considered" items={decision.alternativesConsidered} />
        <ReviewList label="Consequences accepted" items={decision.consequences} />
      </div>

      {decision.relatedLogSlugs && decision.relatedLogSlugs.length > 0 && (
        <div className="mt-7 border-t border-rule pt-5">
          <p className="eyebrow mb-2">Related log entries</p>
          <ul className="space-y-1.5 text-[0.9375rem]">
            {decision.relatedLogSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/research-log/${slug}`} className="text-[var(--accent)] hover:underline">
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function DecisionField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{value}</p>
    </div>
  );
}

/** Compact chronological list of decisions — the "what changed and why" view. */
export function RevisionHistory({ decisions }: { decisions: DesignDecision[] }) {
  const ordered = [...decisions].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <ol className="space-y-0">
      {ordered.map((decision) => (
        <li key={decision.id} className="flex gap-5 border-t border-rule py-4 last:border-b">
          <span className="w-28 shrink-0 pt-0.5 font-mono text-micro uppercase text-ink-muted">
            {formatDate(decision.date, 'numeric')}
          </span>
          <span className="min-w-0">
            <a href={`#${decision.id}`} className="text-[0.9375rem] font-medium text-ink hover:text-[var(--accent)] hover:underline">
              {decision.title}
            </a>
            <span className="mt-1 block text-[0.875rem] leading-snug text-ink-muted">
              {decision.status === 'superseded' && decision.supersededBy
                ? `Superseded by ${decision.supersededBy}`
                : `Status: ${decision.status}`}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Before and after comparison                                          */
/* ------------------------------------------------------------------ */

export interface ComparisonSide {
  label: string;
  heading: string;
  points: string[];
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Side-by-side comparison for pattern revisions, build changes, or any
 * "this is what changed" moment. Images are optional; without them the
 * component renders as two labeled columns of notes.
 */
export function BeforeAfter({
  title,
  before,
  after,
  changeSummary,
}: {
  title: string;
  before: ComparisonSide;
  after: ComparisonSide;
  changeSummary: string;
}) {
  return (
    <article className="card p-6 sm:p-8">
      <h3 className="text-lg leading-snug">{title}</h3>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {[before, after].map((side) => (
          <section key={side.label} className="rounded-card border border-rule bg-paper p-5">
            <p className="eyebrow mb-3">{side.label}</p>
            {side.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={side.imageSrc}
                alt={side.imageAlt ?? ''}
                className="mb-4 w-full rounded-[3px] border border-rule"
              />
            ) : (
              <div className="hatch mb-4 flex h-32 items-center justify-center rounded-[3px] border border-dashed border-rule-strong">
                <span className="font-mono text-micro uppercase text-ink-muted">No image yet</span>
              </div>
            )}
            <h4 className="text-[0.9375rem] font-semibold text-ink">{side.heading}</h4>
            <ul className="mt-2.5 space-y-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">
              {side.points.map((point, index) => (
                <li key={index} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-6 border-t border-rule pt-5">
        <p className="eyebrow mb-2">What changed and why</p>
        <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{changeSummary}</p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Risk register and open questions                                     */
/* ------------------------------------------------------------------ */

const severityRank: Record<RiskEntry['likelihood'], number> = { low: 1, medium: 2, high: 3 };

export function RiskRegister({ risks }: { risks: RiskEntry[] }) {
  const ordered = [...risks].sort(
    (a, b) =>
      severityRank[b.likelihood] * severityRank[b.impact] -
      severityRank[a.likelihood] * severityRank[a.impact]
  );

  return (
    <DataTable
      caption="Risk register, ordered by likelihood combined with impact. Mitigations are planned actions, not completed ones."
      captionVisible={false}
      columns={['Risk', 'Category', 'Likelihood', 'Impact', 'Mitigation', 'Status']}
      rows={ordered.map((risk) => [
        <span key="desc" className="text-ink">
          {risk.description}
        </span>,
        <span key="cat" className="capitalize">
          {risk.category}
        </span>,
        <span key="like" className="font-mono uppercase">
          {risk.likelihood}
        </span>,
        <span key="impact" className="font-mono uppercase">
          {risk.impact}
        </span>,
        <span key="mit" className="text-ink-muted">
          {risk.mitigation}
        </span>,
        <StatusBadge key="status" status={risk.status} />,
      ])}
    />
  );
}

export function OpenQuestionList({ questions }: { questions: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {questions.map((question, index) => (
        <li key={index} className="card flex gap-4 p-5">
          <span className="font-mono text-micro text-[var(--accent)]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[0.9375rem] leading-relaxed text-ink">{question}</span>
        </li>
      ))}
    </ol>
  );
}
