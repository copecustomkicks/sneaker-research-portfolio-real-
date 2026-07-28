import type { EvidenceType } from '@/types';

/**
 * EVIDENCE VOCABULARY
 *
 * The labels applied across materials, sources, requirements, and decisions.
 * Keeping these definitions in one place is what makes the labels mean the
 * same thing everywhere on the site.
 */
export interface EvidenceDefinition {
  id: EvidenceType;
  label: string;
  short: string;
  definition: string;
  /** Tailwind classes for the badge. */
  className: string;
}

export const evidenceTypes: EvidenceDefinition[] = [
  {
    id: 'published-evidence',
    label: 'Published evidence',
    short: 'Published',
    definition:
      'Stated in peer-reviewed literature, a published standard, or an established technical reference that I have read directly.',
    className: 'bg-uf-blue-soft text-uf-blue-deep border-uf-blue/25',
  },
  {
    id: 'manufacturer-claim',
    label: 'Manufacturer claim',
    short: 'Claim',
    definition:
      'Stated by a supplier, manufacturer, or marketing document. Recorded as a claim, not as a verified property, until independent evidence supports it.',
    className: 'bg-uf-orange-soft text-uf-orange border-uf-orange/25',
  },
  {
    id: 'researcher-observation',
    label: 'Researcher observation',
    short: 'Observed',
    definition:
      'Something I saw, handled, or measured informally. First-hand but not a controlled measurement.',
    className: 'bg-paper-sunken text-ink border-rule-strong',
  },
  {
    id: 'preliminary-assumption',
    label: 'Preliminary assumption',
    short: 'Assumption',
    definition:
      'A working guess used to keep the project moving. Not verified. Should be replaced by evidence or removed.',
    className: 'bg-paper-sunken text-ink-muted border-rule-strong border-dashed',
  },
  {
    id: 'design-decision',
    label: 'Design decision',
    short: 'Decision',
    definition:
      'A choice I made, with a written rationale. Correctness is not implied — only that the reasoning is recorded.',
    className: 'bg-uf-blue-soft text-uf-blue-deep border-uf-blue/25',
  },
  {
    id: 'experimental-data',
    label: 'Experimental data',
    short: 'Data',
    definition:
      'A value produced by testing in this project, reported with its method, sample size, and limitations.',
    className: 'bg-[#E6F0E9] text-[#1F4D33] border-[#1F4D33]/25',
  },
  {
    id: 'interpretation',
    label: 'Interpretation',
    short: 'Interpretation',
    definition:
      'My reading of what evidence means. Kept visually separate from the evidence itself so the two are never conflated.',
    className: 'bg-paper-sunken text-ink border-rule-strong',
  },
  {
    id: 'open-question',
    label: 'Open question',
    short: 'Open',
    definition: 'Not resolved. Written down as unanswered rather than filled in with something plausible.',
    className: 'bg-transparent text-ink-muted border-rule-strong border-dashed',
  },
];

export function getEvidence(id: EvidenceType): EvidenceDefinition {
  return evidenceTypes.find((type) => type.id === id) ?? evidenceTypes[evidenceTypes.length - 1];
}
