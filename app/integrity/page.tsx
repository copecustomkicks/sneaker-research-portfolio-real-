import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { EvidenceBadge } from '@/components/Badge';
import { evidenceTypes } from '@/data/evidence';
import {
  aiDisclosure,
  researchIntegrityStatement,
  safetyStatement,
  activeResearchNotice,
} from '@/data/project';

export const metadata: Metadata = {
  title: 'Research integrity',
  description:
    'How this portfolio distinguishes published evidence, manufacturer claims, researcher observations, assumptions, design decisions, experimental data, interpretations, and open questions — plus the safety statement and AI assistance disclosure.',
  alternates: { canonical: '/integrity' },
};

export default function IntegrityPage() {
  return (
    <div className="shell sec-about pb-20">
      <PageHeader
        eyebrow="Research integrity"
        title="How to read what is on this site"
        lede="The labels used across this site to separate evidence from assumption."
        crumbs={[{ label: 'Research integrity' }]}
      />

      <div className="pt-8">
        <Callout tone="integrity" title="Research integrity statement">
          {researchIntegrityStatement.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3' : undefined}>
              {paragraph}
            </p>
          ))}
        </Callout>
      </div>

      <Section
        eyebrow={`${evidenceTypes.length} labels`}
        title="Evidence vocabulary"
        description="These badges appear throughout the site and mean the same thing everywhere."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {evidenceTypes.map((type) => (
            <article key={type.id} className="card p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <EvidenceBadge type={type.id} full />
                <span className="font-mono text-micro uppercase text-ink-faint">
                  shown as &ldquo;{type.short}&rdquo;
                </span>
              </div>
              <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">
                {type.definition}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Practice"
        title="Rules this portfolio follows"
        description="Written down so they survive a busy week."
      >
        <ol className="space-y-0">
          {[
            'Numbers from a data sheet stay attributed to that data sheet. Numbers from testing here are labeled as data and reported with their limits.',
            'A source is cited only after I have read it directly.',
            'Mentor feedback is recorded only when a conversation actually happened, and hours are recorded as worked.',
            'Failures and abandoned approaches stay published, with an explanation of what went wrong.',
            'Unresolved questions stay written down as questions. Corrections happen in place, and the Git history preserves the original.',
          ].map((rule, index) => (
            <li key={index} className="flex gap-5 border-t border-rule py-4 last:border-b">
              <span className="font-mono text-micro text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{rule}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Status" title="Active research record">
        <Callout tone="provisional" title="This site will change">
          <p>{activeResearchNotice}</p>
          <p className="mt-3">
            Every page is versioned in a public Git repository, so the history of what changed and
            when is inspectable. The{' '}
            <Link href="/research-log" className="text-[var(--accent)] underline">
              research log
            </Link>{' '}
            is the chronological record; the reference pages hold the current state of understanding.
          </p>
        </Callout>
      </Section>

      <Section eyebrow="Safety" title="Safety statement">
        <Callout tone="safety" title="Fabrication safety">
          {safetyStatement.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3' : undefined}>
              {paragraph}
            </p>
          ))}
          <p className="mt-3">
            Process descriptions on the{' '}
            <Link href="/processes" className="underline">
              manufacturing processes page
            </Link>{' '}
            are research summaries of what each step accomplishes. They are not operating procedures,
            and processes flagged as requiring supervision are not attempted independently.
          </p>
        </Callout>
      </Section>

      <Section
        eyebrow="Disclosure"
        title="AI assistance disclosure"
        description="Stated plainly rather than left for a reader to wonder about."
      >
        <div className="card p-6 sm:p-8">
          <div className="max-w-prose space-y-4 text-[1.0625rem] leading-relaxed text-ink">
            {aiDisclosure.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Where AI was used</p>
              <ul className="space-y-2 text-[0.9375rem] leading-relaxed text-ink">
                {[
                  'Building this website and its content model',
                  'Drafting and editing explanatory copy',
                  'Improving the clarity of writing I authored',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Where it was not</p>
              <ul className="space-y-2 text-[0.9375rem] leading-relaxed text-ink">
                {[
                  'Generating research findings, conclusions, or citations',
                  'Generating measurements or experimental data',
                  'Writing mentor feedback or deciding what evidence means',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-7 max-w-prose border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-ink-muted">
            Responsibility for every technical claim, source, calculation, and conclusion on this site
            rests with the researcher.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Privacy"
        title="What stays off this site"
        description="The repository behind this portfolio is public. Anything committed to it can be read by anyone."
      >
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Private mentor correspondence',
            'Unpublished data belonging to someone else',
            'Confidential supplier pricing or terms shared in confidence',
            'Personal contact details beyond a professional email address',
            'Credentials, API keys, and environment files',
            'Anything under an NDA or embargo',
          ].map((item) => (
            <li key={item} className="border-t border-rule pt-3 text-[0.9375rem] leading-snug text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
