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

export const materials: Material[] = [
  {
    id: 'eva-footbed-foam',
    name: 'EVA foam (footbed/sockliner)',
    category: 'Insole and sockliner materials',
    intendedComponents: ['Sockliner'],
    description:
      'Ethylene-vinyl acetate foam used for footbeds either as compression-molded (contoured to the last) or die-cut (flat sheet stock, sometimes layered) construction. Described as lightweight, inexpensive, and very common in athletic footwear.',
    properties: [
      {
        label: 'Construction route',
        value: 'Compression- or injection-molded for a contoured footbed, or die-cut from flat sheet for the cheapest route',
        evidence: 'published-evidence',
        sourceId: 'src-motawi-how-shoes-are-made',
      },
      {
        label: 'Relative weight',
        value: 'Lighter than a poured polyurethane footbed at equivalent volume',
        evidence: 'published-evidence',
        sourceId: 'src-motawi-how-shoes-are-made',
      },
      {
        label: 'Compression set behavior',
        value:
          'Not quantified in the source read so far — only a qualitative warning that an overly soft, cheap foam can compress and pack out within days, leaving the shoe loose',
        evidence: 'open-question',
      },
    ],
    advantages: ['Lightweight', 'Inexpensive', 'Very common, so widely available and well understood by suppliers'],
    limitations: [
      'Die-cut (flat) construction gives no contoured underfoot support',
      'Cheap, overly soft formulations can compress and pack out within days of wear',
    ],
    manufacturingCompatibility: ['Die cutting', 'Compression molding', 'Injection molding'],
    expectedPerformance:
      'Expected to work well for a die-cut prototype footbed at low cost, with the tradeoff that it will not be contoured to the last. Preliminary assumption, not tested.',
    weightConsiderations: 'One of the lighter footbed options by volume. Record actual mass of any cut sample rather than estimating.',
    costConsiderations: 'Described as inexpensive relative to poured PU. Record actual prices as quoted.',
    availability: 'Widely available as sheet stock for die cutting; compression/injection molding requires tooling access.',
    sustainabilityConsiderations: 'Not addressed in the source read so far.',
    safetyConsiderations: 'No unusual hazards noted for die cutting or handling.',
    candidateTestingMethods: [
      'Compression-set comparison over a defined wear or loading period against candidate foam thicknesses',
      'Mass measurement of standardized cut samples',
    ],
    sourceIds: ['src-motawi-how-shoes-are-made'],
    status: 'researching',
  },
  {
    id: 'pu-footbed-foam',
    name: 'Poured polyurethane (PU) foam (footbed/sockliner)',
    category: 'Insole and sockliner materials',
    intendedComponents: ['Sockliner'],
    description:
      'Polyurethane footbed foam produced by pouring rather than die cutting or compression molding. Described as plush-feeling and longer-lasting than compression-molded EVA, at the cost of added weight.',
    properties: [
      {
        label: 'Construction route',
        value: 'Poured, not die-cut or compression-molded',
        evidence: 'published-evidence',
        sourceId: 'src-motawi-how-shoes-are-made',
      },
      {
        label: 'Relative weight',
        value: 'Heavier than compression-molded EVA at equivalent volume',
        evidence: 'published-evidence',
        sourceId: 'src-motawi-how-shoes-are-made',
      },
      {
        label: 'Durability',
        value: 'Described as longer-lasting than compression-molded EVA, but not quantified',
        evidence: 'published-evidence',
        sourceId: 'src-motawi-how-shoes-are-made',
      },
    ],
    advantages: ['Plush underfoot feel', 'Longer-lasting than compression-molded EVA per the source'],
    limitations: ['Heavier than EVA at equivalent volume', 'Requires a pouring process rather than simple die cutting'],
    manufacturingCompatibility: ['Pouring into a mold'],
    expectedPerformance: 'Expected to outlast an EVA footbed but add mass. Preliminary assumption, not tested.',
    weightConsiderations: 'Heavier than EVA by volume — a direct tradeoff against the durability and feel advantage.',
    costConsiderations: 'Not directly compared to EVA cost in the source read so far.',
    availability: 'Requires a pouring process; not evaluated for accessibility at this project’s scale yet.',
    sustainabilityConsiderations: 'Not addressed in the source read so far.',
    safetyConsiderations: 'Not addressed in the source read so far; treat pour-in-place polyurethane chemistry as solvent/isocyanate work requiring ventilation until confirmed otherwise.',
    candidateTestingMethods: ['Mass comparison against an EVA footbed of the same size', 'Compression-set comparison over a defined wear period'],
    sourceIds: ['src-motawi-how-shoes-are-made'],
    status: 'researching',
  },
];

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
