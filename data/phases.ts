import type { ResearchPhase } from '@/types';

/**
 * PROVISIONAL ROADMAP — EDIT FREELY
 *
 * Phase names, dates, and completion values are planning estimates, not
 * commitments. Update `status`, `completion`, and `actualDates` as work
 * actually happens. The homepage progress dashboard, the roadmap page, and
 * the overall-completion figure all read directly from this file — there is
 * no second place that stores a progress number, so keeping this file honest
 * keeps the whole site honest.
 *
 * `completion` is a 0–100 estimate of documented deliverables actually
 * produced against each phase's `expectedOutputs` — not elapsed calendar
 * time, and not a grade. A phase that has been open for a month with little
 * to show should read low; a phase with substantial dated evidence should
 * read high even if it started recently.
 *
 * `status` should track real workflow state, not phase order: mark a phase
 * `'complete'` once its expected outputs are functionally delivered, even if
 * `completion` is a little under 100 to acknowledge known, intentional
 * follow-up (see Phase 1). `getCurrentPhase()` below returns the
 * lowest-numbered phase that is not `'complete'`, so an honest `status` is
 * what keeps "current phase" pointing at the phase where work is actually
 * concentrated, rather than always defaulting to Phase 1.
 */
export const phases: ResearchPhase[] = [
  {
    id: 'phase-01',
    number: 1,
    name: 'Project Definition and Background Research',
    status: 'complete',
    plannedDates: 'Aug – Sep 2026',
    actualDates: 'Aug – Sep 2026',
    completion: 90,
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
      'Marked complete at 90%, not 100%: the research question and several overview sections are intentionally kept labeled "Draft" on the overview page, since the question is expected to narrow once a prototype category is chosen in Phase 5. The portfolio workflow, scope/out-of-scope/deliverables/constraints/risk sections, and a nine-source seed bibliography are in place.',
  },
  {
    id: 'phase-02',
    number: 2,
    name: 'Sneaker Anatomy and Benchmarking',
    status: 'in-progress',
    plannedDates: 'Sep 2026',
    actualDates: 'Started Sep 2026',
    completion: 55,
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
    notes:
      'The anatomy reference (31 components) and three real-shoe component/construction callout studies are well developed. Held at 55%, not higher, because no physical teardown has happened yet: that is still an open "next step" in the research log, and the phase’s own expected output of benchmark teardown notes and photographs does not exist yet.',
  },
  {
    id: 'phase-03',
    number: 3,
    name: 'Materials Research and Comparison',
    status: 'in-progress',
    plannedDates: 'Sep – Oct 2026',
    actualDates: 'Started Sep 2026',
    completion: 12,
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
    notes:
      'Two cited material records exist (EVA and poured-polyurethane footbed foam), both still "researching." That covers one of thirteen material categories on the materials page, so this is an early start, not a populated library.',
  },
  {
    id: 'phase-04',
    number: 4,
    name: 'Manufacturing and Assembly Process Research',
    status: 'in-progress',
    plannedDates: 'Oct 2026',
    actualDates: 'Started Sep 2026',
    completion: 15,
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
    notes:
      'The process reference lists a full pattern-to-shoe sequence, but only four entries (last selection, cemented construction, strobel construction, vulcanized construction) are actually cited to a source — the rest are unverified starter content, the same kind of placeholder the materials page was reset to remove. Held at 15% to reflect the real, sourced fraction, with some credit for genuine manufacturing-adjacent coursework (tooling, costing, lean manufacturing) in the FASH 912 class. No equipment-access assessment or safety review has been done yet.',
  },
  {
    id: 'phase-05',
    number: 5,
    name: 'Performance Requirements and Concept Development',
    status: 'in-progress',
    plannedDates: 'Oct – Nov 2026',
    actualDates: 'Started Sep 2026',
    completion: 18,
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
    notes:
      'Three candidate concept directions are outlined and compared, with five literature sources connected to specific design implications for each — but the prototype category is deliberately not decided yet, no measurable requirements are set, and no concept sketches exist. Nothing downstream should assume a category.',
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

/**
 * The phase actual work is concentrated in right now.
 *
 * Phases are listed in sequence, so the lowest-numbered phase that is not
 * `'complete'` is the one driving current effort — preferring `'in-progress'`
 * over `'not-started'` so a phase that has real but partial work (e.g.
 * materials research running in parallel with anatomy work) still loses to
 * whichever phase is both active and lower-numbered. This only reflects
 * reality if `status` is kept honest in the data above: a phase with
 * functionally delivered outputs should be marked `'complete'` even before
 * `completion` reaches 100, or it will keep wrongly reporting as current.
 */
export function getCurrentPhase(): ResearchPhase {
  return (
    phases.find((phase) => phase.status === 'in-progress') ??
    phases.find((phase) => phase.status === 'not-started') ??
    phases[phases.length - 1]
  );
}

/**
 * Overall completion: the unweighted mean of all eleven phases' `completion`
 * values, rounded to the nearest percent. Every phase counts equally
 * (1/11 each) — there is no per-phase weighting. This is the single
 * source of truth for "overall progress" everywhere on the site (homepage
 * dashboard, roadmap page); nothing hard-codes a separate number.
 */
export function getOverallCompletion(): number {
  if (phases.length === 0) return 0;
  const total = phases.reduce((sum, phase) => sum + phase.completion, 0);
  return Math.round(total / phases.length);
}
