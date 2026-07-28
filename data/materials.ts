import type { Material, MaterialCategory } from '@/types';

/**
 * MATERIAL LIBRARY — EDIT AND EXPAND FREELY
 *
 * The records below are STRUCTURAL EXAMPLES. They show the shape of a
 * complete material record and the level of detail to aim for. Property
 * values are deliberately left as "to be recorded" rather than filled with
 * plausible numbers — put a real value in only when you have a data sheet,
 * a paper, or your own measurement, and set the matching `evidence` label:
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
    id: 'eva-sheet-foam',
    name: 'EVA sheet foam (closed-cell, sheet stock)',
    category: 'Cushioning foams',
    intendedComponents: ['Midsole', 'Sockliner'],
    description:
      'Ethylene-vinyl acetate closed-cell foam supplied as flat sheet in a range of densities and thicknesses. Sheet stock is the most likely route to a midsole in this project because it can be cut, stacked, and shaped without compression tooling.',
    properties: [
      { label: 'Density', value: 'To be recorded from supplier data sheet', evidence: 'open-question' },
      { label: 'Asker C hardness', value: 'To be recorded from supplier data sheet', evidence: 'open-question' },
      { label: 'Compression set', value: 'To be recorded; method and duration must be noted', evidence: 'open-question' },
      { label: 'Sheet thickness available', value: 'To be recorded per supplier', evidence: 'open-question' },
    ],
    advantages: [
      'Widely available in small quantities without factory minimums',
      'Cuts, sands, and laminates with accessible tools',
      'Multiple densities can be stacked to approximate a tuned midsole',
    ],
    limitations: [
      'Sheet stock cannot reproduce molded geometry',
      'Lamination lines are a potential failure plane under repeated flex',
      'Foams generally lose properties with use; the rate needs to be established, not assumed',
    ],
    manufacturingCompatibility: [
      'Die cutting and hand cutting',
      'Sanding and shaping',
      'Contact and polyurethane cement bonding',
      'Heat forming, subject to testing',
    ],
    expectedPerformance:
      'Expected to provide usable underfoot cushioning at the cost of geometric freedom. This expectation is a preliminary assumption and has not been tested.',
    weightConsiderations:
      'Density selection directly drives midsole mass. Record the actual mass of every cut sample rather than estimating.',
    costConsiderations: 'Low cost per sheet in small quantities. Record actual prices as they are quoted.',
    availability: 'Available from craft, orthotic, and industrial foam suppliers in small quantities.',
    sustainabilityConsiderations:
      'EVA is not readily recycled in most municipal streams. Recycled-content and bio-based alternatives belong in the sustainable alternatives category for comparison.',
    safetyConsiderations:
      'Sanding produces fine particulate — use dust extraction and a respirator. Heat forming may release fumes; ventilate and follow the safety data sheet.',
    candidateTestingMethods: [
      'Mass measurement of standardized cut samples',
      'Repeatable drop or static-load indentation comparison between candidates',
      'Thickness loss after a defined number of loading cycles',
    ],
    sourceIds: [],
    status: 'researching',
    scores: { manufacturability: 4, cost: 4, weight: 3 },
    rationale:
      'Listed as a leading candidate because it is the most reproducible midsole route without tooling. Not selected — no comparison has been run yet.',
  },
  {
    id: 'engineered-mesh',
    name: 'Engineered mesh (warp-knit or woven, upper weight)',
    category: 'Upper textiles and mesh',
    intendedComponents: ['Upper', 'Vamp', 'Quarter'],
    description:
      'Open-structure textile used across the upper for breathability and low weight. Structure and denier vary widely between suppliers, so "mesh" alone is not a specification.',
    properties: [
      { label: 'Areal weight', value: 'To be recorded per specific mesh', evidence: 'open-question' },
      { label: 'Tensile strength', value: 'To be recorded; note the test standard used', evidence: 'open-question' },
      { label: 'Stretch and recovery', value: 'To be recorded, ideally in both grain directions', evidence: 'open-question' },
    ],
    advantages: ['Low weight', 'High airflow', 'Available in small cuts from garment suppliers'],
    limitations: [
      'Little inherent structure — needs overlays or lamination in load paths',
      'Cut edges may fray without a backing or bound edge',
      'Behavior differs along the grain, which affects pattern layout',
    ],
    manufacturingCompatibility: ['Cutting', 'Lamination to a backing', 'Stitching', 'Lasting'],
    expectedPerformance:
      'Expected to work as an upper base material only in combination with reinforcement. Preliminary assumption.',
    weightConsiderations: 'A primary lever on total shoe mass. Weigh actual swatches at a fixed area.',
    costConsiderations: 'Generally low per yard. Record actual quotes.',
    availability: 'Widely available from technical apparel fabric suppliers.',
    sustainabilityConsiderations:
      'Typically polyester or nylon. Recycled-content versions exist and should be compared directly.',
    safetyConsiderations: 'No unusual hazards in cutting or handling.',
    candidateTestingMethods: [
      'Swatch mass at a fixed area',
      'Simple hand tensile comparison in both grain directions',
      'Abrasion comparison against a fixed abradant',
      'Fray behavior at cut edges after flexing',
    ],
    sourceIds: [],
    status: 'researching',
  },
  {
    id: 'carbon-rubber-sheet',
    name: 'Carbon rubber (sheet stock)',
    category: 'Outsole rubbers',
    intendedComponents: ['Outsole'],
    description:
      'Carbon-filled rubber sheet used for high-wear outsole areas. Sheet stock is the accessible route to an outsole without a compression mold, though it limits the achievable tread geometry.',
    properties: [
      { label: 'Shore A hardness', value: 'To be recorded from supplier data sheet', evidence: 'open-question' },
      { label: 'Abrasion resistance', value: 'To be recorded; note the test standard used', evidence: 'open-question' },
      { label: 'Sheet thickness available', value: 'To be recorded per supplier', evidence: 'open-question' },
    ],
    advantages: [
      'Strong abrasion resistance relative to unfilled rubbers',
      'Available as sheet from shoe-repair and industrial suppliers',
      'Bonds well with standard footwear cements after correct surface preparation',
    ],
    limitations: [
      'Sheet stock restricts tread depth and geometry',
      'Heavier than blown rubber at equal volume',
      'Surface preparation is critical — an unroughed or uncleaned surface is a common bond failure cause',
    ],
    manufacturingCompatibility: [
      'Cutting from sheet',
      'Buffing and roughing',
      'Primer and cement bonding',
      'Pressing',
    ],
    expectedPerformance:
      'Expected to provide durable ground contact with modest traction on smooth surfaces. Preliminary assumption, not measured.',
    weightConsiderations: 'Denser than foam by a large margin; outsole coverage area is a direct mass lever.',
    costConsiderations: 'Moderate cost as sheet stock. Record actual quotes.',
    availability: 'Shoe repair supply houses stock outsole sheet in several thicknesses.',
    sustainabilityConsiderations:
      'Vulcanized rubber is difficult to recycle. Recycled-rubber content sheet exists and should be compared.',
    safetyConsiderations:
      'Buffing produces rubber dust — use extraction and eye protection. Cements used with rubber are usually solvent-based; see the adhesive record.',
    candidateTestingMethods: [
      'Mass of a standardized cut sample',
      'Repeatable inclined-surface or drag friction comparison, dry and wet',
      'Abrasion loss against a fixed abradant over fixed cycles',
      'Peel test of the rubber-to-midsole bond',
    ],
    sourceIds: [],
    status: 'researching',
    scores: { durability: 4, manufacturability: 3, weight: 2 },
  },
  {
    id: 'polyurethane-cement',
    name: 'Polyurethane footwear cement',
    category: 'Adhesives',
    intendedComponents: ['Adhesives and seams', 'Outsole', 'Midsole'],
    description:
      'Solvent-based polyurethane adhesive used for sole attachment in cemented construction. Typically applied to both surfaces, dried, heat-activated, and pressed.',
    properties: [
      { label: 'Open time', value: 'To be recorded from the product data sheet', evidence: 'open-question' },
      { label: 'Activation temperature', value: 'To be recorded from the product data sheet', evidence: 'open-question' },
      { label: 'Peel strength', value: 'To be recorded; supplier figures are claims until independently tested', evidence: 'open-question' },
      { label: 'Required primer', value: 'To be recorded per substrate', evidence: 'open-question' },
    ],
    advantages: [
      'The standard bonding route for cemented sole attachment',
      'Available in small quantities',
      'Remains flexible when cured, which suits a repeatedly flexed joint',
    ],
    limitations: [
      'Substrate-specific — the correct primer for each material must be identified',
      'Requires careful surface preparation, correct drying, and adequate press pressure',
      'Solvent content demands real ventilation, which constrains where work can happen',
    ],
    manufacturingCompatibility: ['Surface roughing', 'Priming', 'Brush or spray application', 'Heat activation', 'Pressing'],
    expectedPerformance:
      'Expected to be the governing joint in the assembly — a likely first failure point and therefore an early testing priority. Preliminary assumption.',
    weightConsiderations: 'Negligible mass contribution relative to structural components.',
    costConsiderations: 'Low per unit, but primers and cleaners add to the real cost.',
    availability: 'Shoe repair and industrial adhesive suppliers.',
    sustainabilityConsiderations:
      'Solvent-based systems carry volatile organic compound emissions. Water-based alternatives should be compared for both performance and handling.',
    safetyConsiderations:
      'FLAGGED. Solvent-based adhesive. Requires ventilation, appropriate gloves, eye protection, and a respirator suited to organic vapor. Read the product safety data sheet before use and follow it. Ignition sources must be kept away from the work area.',
    candidateTestingMethods: [
      'T-peel test on representative substrate pairs',
      'Comparison of prepared versus unprepared surfaces',
      'Bond survival after repeated flex cycles',
    ],
    sourceIds: [],
    status: 'researching',
  },
  {
    id: 'thermoplastic-counter-sheet',
    name: 'Thermoplastic counter and toe-puff sheet',
    category: 'Reinforcement materials',
    intendedComponents: ['Heel counter', 'Toe puff'],
    description:
      'Heat-activated thermoplastic sheet cut to shape and formed between the upper and lining to create a stiff, shaped heel or toe. Sold in several thicknesses and stiffness grades.',
    properties: [
      { label: 'Thickness', value: 'To be recorded per grade', evidence: 'open-question' },
      { label: 'Activation temperature', value: 'To be recorded from the product data sheet', evidence: 'open-question' },
      { label: 'Bending stiffness', value: 'To be recorded; a repeatable comparison method is needed', evidence: 'open-question' },
    ],
    advantages: [
      'Forms to a last with heat and hand pressure',
      'Available in small sheets',
      'Adhesive-backed grades reduce assembly steps',
    ],
    limitations: [
      'Requires controlled heating — overheating distorts the part and can mark the upper',
      'Edges must be skived or they telegraph through the upper as a ridge',
      'Stiffness grades are supplier-specific and not directly comparable across brands',
    ],
    manufacturingCompatibility: ['Die cutting', 'Skiving', 'Heat activation', 'Lasting'],
    expectedPerformance:
      'Expected to provide heel structure adequate for a prototype. Preliminary assumption pending a formability trial.',
    weightConsiderations: 'Small absolute mass; thickness choice matters more for stiffness than for weight.',
    costConsiderations: 'Low in sheet form.',
    availability: 'Shoemaking supply houses.',
    sustainabilityConsiderations: 'Thermoplastic, in principle reprocessable, but not recovered in practice at this scale.',
    safetyConsiderations:
      'FLAGGED. Heat activation involves hot surfaces and possible fumes. Use heat-resistant gloves and ventilation, and follow the product safety data sheet.',
    candidateTestingMethods: [
      'Formability trial on the actual last',
      'Repeatable three-point bending comparison between grades',
      'Shape retention after repeated deformation',
    ],
    sourceIds: [],
    status: 'researching',
  },
  {
    id: 'recycled-pet-upper-textile',
    name: 'Recycled PET upper textile',
    category: 'Sustainable or recycled alternatives',
    intendedComponents: ['Upper', 'Quarter', 'Lining'],
    description:
      'Upper-weight textile made from post-consumer recycled polyester. Included so that a sustainability comparison is built into the material selection rather than added at the end.',
    properties: [
      { label: 'Recycled content', value: 'To be recorded per supplier; verify against certification', evidence: 'open-question' },
      { label: 'Areal weight', value: 'To be recorded', evidence: 'open-question' },
      { label: 'Tensile strength versus virgin equivalent', value: 'To be recorded', evidence: 'open-question' },
    ],
    advantages: [
      'Reduces virgin polymer demand',
      'Increasingly available at small order quantities',
      'Directly comparable to a virgin polyester control',
    ],
    limitations: [
      'Recycled-content claims need verification, not acceptance at face value',
      'Property consistency between lots may be lower than virgin material',
      'Certification does not by itself establish mechanical equivalence',
    ],
    manufacturingCompatibility: ['Cutting', 'Lamination', 'Stitching', 'Lasting'],
    expectedPerformance:
      'Performance relative to virgin polyester is unknown and is exactly what a side-by-side comparison should establish.',
    weightConsiderations: 'Expected to be comparable to virgin equivalents at similar construction. Unverified.',
    costConsiderations: 'Often a small premium over virgin equivalents. Record actual quotes.',
    availability: 'Technical apparel fabric suppliers.',
    sustainabilityConsiderations:
      'The central point of this record. Claims should be traced to a certification scheme and recorded as manufacturer claims until independently supported.',
    safetyConsiderations: 'No unusual hazards in cutting or handling.',
    candidateTestingMethods: [
      'Side-by-side swatch comparison against a virgin control',
      'Mass at fixed area',
      'Abrasion comparison',
    ],
    sourceIds: [],
    status: 'researching',
  },
];

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
