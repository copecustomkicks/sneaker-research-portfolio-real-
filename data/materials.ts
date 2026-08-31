import type { Material, MaterialCategory } from '@/types';

/**
 * MATERIAL LIBRARY — EDIT AND EXPAND FREELY
 *
 * Intentionally EMPTY. No material research has been recorded yet.
 * The materials page shows an empty state while this stays empty.
 *
 * Property values are deliberately left as "to be recorded" rather than
 * filled with plausible numbers — put a real value in only when you have a
 * data sheet, a paper, or your own measurement, and set the matching
 * `evidence` label:
 *
 *   'published-evidence'      peer-reviewed or standards literature
 *   'manufacturer-claim'      a supplier data sheet or marketing document
 *   'researcher-observation'  something you saw or handled yourself
 *   'preliminary-assumption'  a working guess you have not verified
 *   'experimental-data'       a value your own testing produced
 *
 * `scores` (1–5) drives the comparison chart. Omit the field entirely when
 * you have no defensible basis for scoring — the chart handles its absence.
 */

export const materialCategories: MaterialCategory[] = [
  'Upper textiles and mesh',
  'Knit materials',
  'Natural leather',
  'Synthetic leather',
  'Reinforcement materials',
  'Cushioning foams',
  'Outsole rubbers',
  'Structural plastics',
  'Insole and sockliner materials',
  'Adhesives',
  'Thread',
  'Coatings and finishes',
  'Sustainable or recycled alternatives',
];

export const materials: Material[] = [];

/*
EXAMPLE — copy this, fill it in with real data once you have a source
for it, and add it to the array above.

{
  id: 'eva-sheet-foam',
  name: 'EVA sheet foam (closed-cell, sheet stock)',
  category: 'Cushioning foams',
  intendedComponents: ['Midsole', 'Sockliner'],
  description: 'What it is and why it is being considered.',
  properties: [
    { label: 'Density', value: 'To be recorded from supplier data sheet', evidence: 'open-question' },
  ],
  advantages: ['...'],
  limitations: ['...'],
  manufacturingCompatibility: ['Die cutting and hand cutting'],
  expectedPerformance: 'What you expect and why, labeled as an assumption until tested.',
  weightConsiderations: '...',
  costConsiderations: '...',
  availability: '...',
  sustainabilityConsiderations: '...',
  safetyConsiderations: '...',
  candidateTestingMethods: ['...'],
  sourceIds: [],
  status: 'researching',
}
*/

export const materialStatusLabels: Record<Material['status'], string> = {
  researching: 'Researching',
  candidate: 'Candidate',
  selected: 'Selected',
  rejected: 'Rejected',
  tested: 'Tested',
};

export const scoreCriteria: { key: keyof NonNullable<Material['scores']>; label: string; note: string }[] = [
  { key: 'durability', label: 'Durability', note: 'Expected resistance to wear and repeated loading' },
  { key: 'weight', label: 'Weight', note: 'Higher score means lighter for the job' },
  { key: 'cost', label: 'Cost', note: 'Higher score means cheaper at prototype quantities' },
  { key: 'manufacturability', label: 'Manufacturability', note: 'How workable it is with available equipment' },
  { key: 'comfort', label: 'Comfort', note: 'Expected contribution to underfoot or against-foot feel' },
  { key: 'sustainability', label: 'Sustainability', note: 'Recycled content, recoverability, and emissions' },
];

export const scoringCaveat =
  'Scores are preliminary 1–5 researcher judgements used to organize comparison, not measurements. A score changes to evidence only when a test record supports it.';

export function getMaterial(id: string): Material | undefined {
  return materials.find((material) => material.id === id);
}

export function getMaterialsByCategory(category: MaterialCategory): Material[] {
  return materials.filter((material) => material.category === category);
}

/** Categories that currently have at least one record. */
export function getPopulatedCategories(): MaterialCategory[] {
  return materialCategories.filter((category) =>
    materials.some((material) => material.category === category)
  );
}
