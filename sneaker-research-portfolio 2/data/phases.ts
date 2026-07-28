import type { ResearchPhase } from '@/types';

/**
 * PROVISIONAL ROADMAP — EDIT FREELY
 *
 * Phase names, dates, and completion values are planning estimates, not
 * commitments. Update `status`, `completion`, and `actualDates` as work
 * actually happens. The homepage progress dashboard reads directly from
 * this file, so keeping it honest keeps the dashboard honest.
 *
 * `completion` is a 0–100 project-management estimate. It is not a grade
 * and it is not a measure of research quality.
 */
export const phases: ResearchPhase[] = [
  {
    id: 'phase-01',
    number: 1,
    name: 'Project Definition and Background Research',
    status: 'in-progress',
    plannedDates: 'Aug – Sep 2026',
    completion: 10,
    objectives: [
      'Draft and refine the research question with mentor input',
      'Define preliminary scope, deliverables, and out-of-scope items',
      'Establish this portfolio as the running research record',
      'Build an initial reading list across footwear engineering and materials',
    ],
    expectedOutputs: [
      'Written research question and project goal',
      'Preliminary scope statement',
      'Working portfolio site with a repeatable weekly update workflow',
      'Seed bibliography',
    ],
    relatedLinks: [
      { label: 'Project overview', href: '/overview' },
      { label: 'Sources and literature', href: '/sources' },
    ],
    notes:
      'The research question below is a starting point. Expect it to narrow once the prototype category is chosen.',
  },
  {
    id: 'phase-02',
    number: 2,
    name: 'Sneaker Anatomy and Benchmarking',
    status: 'not-started',
    plannedDates: 'Sep 2026',
    completion: 0,
    objectives: [
      'Document every major sneaker component and its function',
      'Disassemble or closely inspect existing footwear to observe construction',
      'Record benchmark observations without claiming published measurements',
    ],
    expectedOutputs: [
      'Completed anatomy reference on this site',
      'Benchmark teardown notes and photographs',
      'Component-level vocabulary for the rest of the project',
    ],
    relatedLinks: [
      { label: 'Sneaker anatomy', href: '/anatomy' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    id: 'phase-03',
    number: 3,
    name: 'Materials Research and Comparison',
    status: 'not-started',
    plannedDates: 'Sep – Oct 2026',
    completion: 0,
    objectives: [
      'Build a candidate material library by component',
      'Collect properties from data sheets and published literature',
      'Separate manufacturer claims from independently published values',
    ],
    expectedOutputs: [
      'Populated material records with cited properties',
      'Comparison tables by component',
      'A shortlist of candidate materials per component',
    ],
    relatedLinks: [{ label: 'Materials research', href: '/materials' }],
  },
  {
    id: 'phase-04',
    number: 4,
    name: 'Manufacturing and Assembly Process Research',
    status: 'not-started',
    plannedDates: 'Oct 2026',
    completion: 0,
    objectives: [
      'Document the standard sequence from pattern to finished shoe',
      'Identify which processes are reproducible with available equipment',
      'Flag processes requiring supervision, ventilation, or PPE',
    ],
    expectedOutputs: [
      'Process reference pages',
      'Equipment and facility access assessment',
      'Safety review of every process under consideration',
    ],
    relatedLinks: [{ label: 'Manufacturing processes', href: '/processes' }],
  },
  {
    id: 'phase-05',
    number: 5,
    name: 'Performance Requirements and Concept Development',
    status: 'not-started',
    plannedDates: 'Oct – Nov 2026',
    completion: 0,
    objectives: [
      'Choose a prototype category and define its use case',
      'Translate the use case into measurable design requirements',
      'Generate and sketch multiple construction concepts',
    ],
    expectedOutputs: [
      'Requirements list with verification methods',
      'Concept sketches',
      'Selected concept direction with rationale',
    ],
    relatedLinks: [{ label: 'Design process', href: '/design' }],
    notes: 'The prototype category is not decided yet. Nothing downstream should assume one.',
  },
  {
    id: 'phase-06',
    number: 6,
    name: 'Material and Process Selection',
    status: 'not-started',
    plannedDates: 'Nov 2026',
    completion: 0,
    objectives: [
      'Score candidate materials against weighted criteria',
      'Select processes compatible with the chosen materials',
      'Record every selection and rejection with a written rationale',
    ],
    expectedOutputs: [
      'Completed decision matrices',
      'Material status changed to selected or rejected with rationale',
      'Draft bill of materials',
    ],
    relatedLinks: [
      { label: 'Design process', href: '/design' },
      { label: 'Materials research', href: '/materials' },
    ],
  },
  {
    id: 'phase-07',
    number: 7,
    name: 'CAD, Pattern Development, and Prototype Planning',
    status: 'not-started',
    plannedDates: 'Nov – Dec 2026',
    completion: 0,
    objectives: [
      'Model or source a last and produce CAD geometry',
      'Develop flat patterns from the three-dimensional form',
      'Write a step-by-step fabrication plan',
    ],
    expectedOutputs: [
      'CAD files and screenshots',
      'Pattern set with revision history',
      'Fabrication plan and tooling list',
    ],
    relatedLinks: [{ label: 'Design process', href: '/design' }],
  },
  {
    id: 'phase-08',
    number: 8,
    name: 'Prototype Fabrication',
    status: 'not-started',
    plannedDates: 'Jan – Feb 2027',
    completion: 0,
    objectives: [
      'Run small component experiments before committing to a full build',
      'Fabricate the first complete prototype',
      'Photograph and document every construction step',
    ],
    expectedOutputs: [
      'Component test samples',
      'Prototype 1',
      'Full construction record',
    ],
    relatedLinks: [{ label: 'Prototype development', href: '/prototypes' }],
  },
  {
    id: 'phase-09',
    number: 9,
    name: 'Testing and Evaluation',
    status: 'not-started',
    plannedDates: 'Feb – Mar 2027',
    completion: 0,
    objectives: [
      'Define pass/fail criteria before running any test',
      'Execute the evaluation methods that are feasible with available equipment',
      'Record raw data, uncertainty, and limitations',
    ],
    expectedOutputs: [
      'Test records with raw data',
      'Failure analysis',
      'Interpretation tied back to the design requirements',
    ],
    relatedLinks: [{ label: 'Testing and results', href: '/testing' }],
    notes:
      'Which evaluation areas are in scope depends on equipment access and mentor approval. Nothing is promised yet.',
  },
  {
    id: 'phase-10',
    number: 10,
    name: 'Iteration and Final Prototype',
    status: 'not-started',
    plannedDates: 'Mar – Apr 2027',
    completion: 0,
    objectives: [
      'Apply test findings to a revised design',
      'Fabricate the final prototype',
      'Document what changed between iterations and why',
    ],
    expectedOutputs: [
      'Prototype 2 or later',
      'Before-and-after comparison',
      'Final bill of materials',
    ],
    relatedLinks: [{ label: 'Prototype development', href: '/prototypes' }],
  },
  {
    id: 'phase-11',
    number: 11,
    name: 'Thesis, Presentation, and Oral Defense Preparation',
    status: 'not-started',
    plannedDates: 'Apr – May 2027',
    completion: 0,
    objectives: [
      'Assemble the research record into a thesis draft',
      'Produce the research poster and presentation',
      'Prepare for the oral defense',
    ],
    expectedOutputs: [
      'Undergraduate honors thesis draft',
      'EML4914 Realization Thesis submission',
      'Research poster, slides, and abstract',
    ],
    relatedLinks: [{ label: 'Final deliverables', href: '/deliverables' }],
  },
];

export function getPhaseByName(name: string): ResearchPhase | undefined {
  return phases.find((phase) => phase.name.toLowerCase() === name.toLowerCase());
}

export function getPhaseById(id: string): ResearchPhase | undefined {
  return phases.find((phase) => phase.id === id);
}

/** The lowest-numbered phase that is still open, or the last phase when all are done. */
export function getCurrentPhase(): ResearchPhase {
  return (
    phases.find((phase) => phase.status === 'in-progress') ??
    phases.find((phase) => phase.status === 'not-started') ??
    phases[phases.length - 1]
  );
}

/** Mean completion across all phases, rounded. A planning estimate only. */
export function getOverallCompletion(): number {
  if (phases.length === 0) return 0;
  const total = phases.reduce((sum, phase) => sum + phase.completion, 0);
  return Math.round(total / phases.length);
}
