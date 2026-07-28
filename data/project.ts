/**
 * PROJECT COPY — EDIT THIS FILE FREELY
 *
 * Everything on /overview comes from here, plus the standing statements used
 * across the site. Keep entries short: lists beat paragraphs, and a reviewer
 * scanning the page should get the shape of the project in under a minute.
 *
 * Anything still tentative gets `preliminary: true`, which shows a visible
 * "Preliminary" label on the page.
 */

export interface OverviewSection {
  id: string;
  heading: string;
  /** Each string renders as its own paragraph. Two short ones is plenty. */
  body: string[];
  /** Optional bulleted list rendered under the paragraphs. */
  list?: string[];
  /** Shows a "Preliminary" label so reviewers know this may change. */
  preliminary?: boolean;
}

export const researchQuestion =
  'How can material selection, footwear manufacturing processes, and iterative design methods be combined to build a functional sneaker prototype from scratch?';

export const projectGoal =
  'Understand how sneaker materials, components, and manufacturing processes determine performance — then use that to design, build, and evaluate an original prototype.';

export const homeIntro = [
  'A research record of how a sneaker is actually engineered: what each component does, what it is made of, how it is assembled, and what gets traded away to make it work.',
  'The project runs from materials research through to a prototype built from scratch. Everything is documented as it happens, including what fails.',
];

export const activeResearchNotice =
  'This is an active research record. Scope and findings will change as the project progresses.';

export const scopeDisclaimer =
  'The prototype category and performance targets are not final. Scope depends on equipment access, materials, time, and mentor approval.';

export const researchIntegrityStatement = [
  'This portfolio separates what is known from what is assumed. Every substantive claim carries a label showing the kind of evidence behind it.',
  'Supplier claims stay labeled as claims. Values produced by testing here are labeled as data and reported with their limits. Open questions stay open rather than getting filled in with something plausible.',
];

export const safetyStatement = [
  'Footwear fabrication involves solvent adhesives, cutting tools, heat, and sometimes industrial machinery. This site documents processes for research; it is not a set of operating instructions.',
  'Anything flagged as requiring supervision happens only under qualified direction, in an approved space, with proper ventilation and protective equipment.',
];

export const aiDisclosure = [
  'Generative AI was used to build this website and to organize, outline, and edit written material.',
  'It was not used to generate research findings, citations, measurements, or conclusions. I am responsible for verifying every technical claim, source, calculation, and conclusion here.',
];

export const overviewSections: OverviewSection[] = [
  {
    id: 'background',
    heading: 'Background',
    body: [
      'A sneaker looks like one object but is an assembly of a dozen engineered components, each chosen for a different mix of stiffness, resilience, abrasion resistance, weight, breathability, cost, and manufacturability. Almost none of those decisions are visible to the wearer.',
      'I have run Cope Custom Kicks since 2019 and customized more than fifty pairs. That work is entirely surface work — preparation, masking, paint, finishing, durability. It taught me how footwear materials behave in the hand, and made obvious how little I knew about why the shoe underneath is built the way it is.',
    ],
  },
  {
    id: 'problem-statement',
    heading: 'The gap',
    body: [
      'Footwear construction knowledge sits scattered across industry practice, supplier documents, patents, and trade press, and little of it is written in engineering terms. There is plenty of information about what sneakers are made of. What is hard to find in one place is why those choices were made, what they cost, and what happens when someone with limited equipment tries to reproduce them.',
    ],
  },
  {
    id: 'objectives',
    heading: 'Objectives',
    preliminary: true,
    body: [],
    list: [
      'Document sneaker component architecture and what each part does.',
      'Build a cited material library organized by component, separating published data from supplier claims.',
      'Map the standard manufacturing sequence and identify which steps are reproducible with accessible equipment.',
      'Define measurable performance requirements once a prototype category is chosen.',
      'Select materials and processes using structured methods, recording the rationale.',
      'Develop CAD geometry and flat patterns for an original design.',
      'Fabricate at least one functional prototype and document the build in full.',
      'Evaluate it against the stated requirements, then iterate and record what changed.',
    ],
  },
  {
    id: 'methodology',
    heading: 'Method',
    preliminary: true,
    body: ['An engineering design process rather than a controlled experiment, running in four overlapping modes:'],
    list: [
      'Literature and document review, recorded in the research library with evidence labels.',
      'Physical benchmarking — inspecting and taking apart existing footwear, documented photographically.',
      'Structured selection — weighted decision matrices, with criteria set before scoring.',
      'Build and evaluate — component experiments and prototype iterations, each with a stated purpose and a written outcome including failures.',
    ],
  },
  {
    id: 'scope',
    heading: 'Scope',
    preliminary: true,
    body: [scopeDisclaimer],
    list: [
      'One prototype category, chosen in Phase 5.',
      'One size, built around a single last.',
      'Component experiments — bonds, seams, foam samples, pattern tests — alongside whole-shoe builds.',
      'Materials obtainable in small quantities, with no factory minimum order.',
      'Processes reproducible in a lab, makerspace, or home workshop with proper safety controls.',
    ],
  },
  {
    id: 'out-of-scope',
    heading: 'Out of scope',
    body: ['Named explicitly, so the project stays finishable in two semesters.'],
    list: [
      'Custom injection or compression mold tooling — outside the budget and timeline.',
      'Graded pattern sets across multiple sizes.',
      'Human-subject fit or comfort testing beyond the researcher, which would need IRB review.',
      'Certified laboratory testing to published industry standards.',
      'Commercial production, branding, or sale of the design.',
      'Reverse-engineering any proprietary or trademarked design.',
    ],
  },
  {
    id: 'success-criteria',
    heading: 'What success looks like',
    preliminary: true,
    body: ['Measured by the quality of the documented engineering process, not by producing a commercially viable shoe.'],
    list: [
      'A functional prototype exists and can be worn without immediate structural failure.',
      'Every material and process selection has a written, sourced rationale.',
      'At least one design change is traceable from a test result through to a revised build.',
      'The record is complete enough to write the thesis from, without reconstructing work from memory.',
    ],
  },
  {
    id: 'constraints',
    heading: 'Constraints',
    body: [],
    list: [
      'Two academic semesters alongside coursework.',
      'Self-funded materials budget.',
      'No access to industrial lasting, molding, or press equipment is assumed.',
      'Small-quantity sourcing, which rules out some industry-standard options.',
      'Solvent processes require an approved, ventilated workspace.',
      'Test equipment availability determines which evaluations are feasible.',
    ],
  },
  {
    id: 'risks',
    heading: 'Main risks',
    body: ['The full register with likelihood, impact, and mitigation is on the design process page.'],
    list: [
      'Adhesive bond failure between the upper and the sole unit.',
      'No access to a strobel or industrial sewing machine.',
      'Material lead times delaying fabrication.',
      'Pattern development taking more iterations than scheduled.',
      'Scope expanding past what two semesters allow.',
    ],
  },
  {
    id: 'deliverables',
    heading: 'Deliverables',
    preliminary: true,
    body: ['Final form and dates depend on program requirements and mentor approval.'],
    list: [
      'This portfolio, maintained weekly.',
      'A cited materials and processes reference.',
      'CAD geometry and a pattern set.',
      'At least one functional sneaker prototype.',
      'Test records with raw data and interpretation.',
      'An undergraduate honors thesis and an EML4914 Realization Thesis.',
      'A research poster, presentation, and oral defense.',
    ],
  },
  {
    id: 'ethics-safety',
    heading: 'Ethics and safety',
    body: [
      ...safetyStatement,
      'No human subjects beyond the researcher wearing his own prototype. No proprietary design is copied and no brand marks are reproduced. Supplier information shared in confidence is not published.',
    ],
  },
  {
    id: 'academic-context',
    heading: 'Academic context',
    body: [
      'Conducted through the University of Florida University Scholars Program under Dr. Jessica Allen, in support of an undergraduate honors thesis and an EML4914 Undergraduate Realization Thesis in Mechanical and Aerospace Engineering.',
    ],
  },
];
