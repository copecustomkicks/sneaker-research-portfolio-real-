import type { EvaluationArea, TestRecord } from '@/types';

/**
 * TEST RECORDS
 *
 * Intentionally EMPTY. No testing has been performed.
 * The testing page shows an empty state while this stays empty.
 *
 * Define `passFailCriteria` BEFORE running a test, not after seeing the
 * result. Leave `data.rows` empty until you have real numbers.
 */
export const tests: TestRecord[] = [];

/*
EXAMPLE — copy this, fill it in, and add it to the array above.

{
  id: 'test-01-bond-peel',
  title: 'Sole bond peel strength, prepared vs unprepared surfaces',
  category: 'Bond strength',
  objective: 'Determine whether surface preparation changes peel resistance enough to justify the extra step.',
  method: 'Describe the actual procedure followed, including any deviation from the plan.',
  variables: {
    independent: ['Surface preparation (roughed+primed / untreated)'],
    dependent: ['Peak peel force'],
    controlled: ['Adhesive product', 'Bond area', 'Cure time', 'Clamp pressure', 'Ambient temperature'],
  },
  equipment: ['Spring scale', 'Fixture', 'Steel rule'],
  sampleInformation: 'n = 3 per condition, cut from the same sheet lot.',
  data: { columns: ['Sample', 'Condition', 'Peak force (N)'], rows: [] },
  calculations: 'Show the arithmetic, not just the answer.',
  images: [],
  results: 'State what the data shows. Do not overstate it.',
  uncertaintyAndLimitations: 'Spring-scale readings are operator-dependent; small n; no environmental control.',
  interpretation: 'What this means for the design, separated clearly from the raw result.',
  passFailCriteria: 'Defined before testing began.',
  designImplications: 'What changes in the build plan because of this.',
  recommendedChanges: [],
  status: 'complete',
  dataFile: '/documents/test-01-bond-peel.csv',
  relatedPrototypeIds: ['s1-adhesive-peel-samples'],
}
*/

export const testingScopeNote =
  'The areas below are POSSIBLE evaluation categories, not a commitment. Which ones happen depends on equipment access, time, material availability, and mentor approval. Several will likely be assessed qualitatively rather than measured.';

export const evaluationAreas: EvaluationArea[] = [
  {
    name: 'Mass',
    whatItWouldMeasure: 'Total mass per shoe and mass by component group.',
    feasibility: 'likely',
    equipmentNeeded: 'Digital scale with adequate resolution',
  },
  {
    name: 'Fit',
    whatItWouldMeasure: 'Internal dimensions against the last and against the researcher\u2019s foot measurements.',
    feasibility: 'likely',
    equipmentNeeded: 'Measuring tape, calipers, foot measurement device',
  },
  {
    name: 'Flexibility',
    whatItWouldMeasure: 'Force required to flex the forefoot to a fixed angle.',
    feasibility: 'possible',
    equipmentNeeded: 'Simple bending fixture with an angle reference and a force gauge',
  },
  {
    name: 'Bending behavior',
    whatItWouldMeasure: 'Where the shoe actually flexes relative to where it was designed to flex.',
    feasibility: 'likely',
    equipmentNeeded: 'Camera and fixed angle reference',
  },
  {
    name: 'Cushioning',
    whatItWouldMeasure: 'Deformation under a known load, or rebound from a fixed drop height.',
    feasibility: 'possible',
    equipmentNeeded: 'Known masses and a dial indicator, or a drop rig with high-speed capture',
  },
  {
    name: 'Compression set',
    whatItWouldMeasure: 'Thickness loss in midsole foam after repeated loading.',
    feasibility: 'possible',
    equipmentNeeded: 'Calipers and a repeatable cyclic loading method',
  },
  {
    name: 'Traction',
    whatItWouldMeasure: 'Slip resistance on defined surfaces, dry and wet.',
    feasibility: 'possible',
    equipmentNeeded: 'Inclined plane or drag sled with a force gauge',
  },
  {
    name: 'Bond strength',
    whatItWouldMeasure: 'Peel or shear resistance of the sole-to-upper joint.',
    feasibility: 'likely',
    equipmentNeeded: 'Spring scale or force gauge with a peel fixture',
  },
  {
    name: 'Seam integrity',
    whatItWouldMeasure: 'Load at which a representative seam fails.',
    feasibility: 'possible',
    equipmentNeeded: 'Tensile fixture and force gauge',
  },
  {
    name: 'Abrasion resistance',
    whatItWouldMeasure: 'Material loss against a fixed abradant over fixed cycles.',
    feasibility: 'possible',
    equipmentNeeded: 'Abrasion rig and precision scale',
  },
  {
    name: 'Durability',
    whatItWouldMeasure: 'Condition after a defined wear period, documented photographically.',
    feasibility: 'likely',
    equipmentNeeded: 'Camera, fixed photography setup, wear log',
  },
  {
    name: 'Breathability',
    whatItWouldMeasure: 'Air permeability of upper materials.',
    feasibility: 'unlikely-without-lab-access',
    equipmentNeeded: 'Air permeability tester',
  },
  {
    name: 'Comfort',
    whatItWouldMeasure: 'Subjective researcher rating over timed wear sessions.',
    feasibility: 'likely',
    equipmentNeeded: 'Structured wear log. Single-subject and subjective by nature.',
  },
  {
    name: 'Manufacturability',
    whatItWouldMeasure: 'Build time, defect count, and rework required per iteration.',
    feasibility: 'likely',
    equipmentNeeded: 'Build log and defect checklist',
  },
];

export function getTest(id: string): TestRecord | undefined {
  return tests.find((test) => test.id === id);
}
