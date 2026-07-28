import type {
  BillOfMaterialsItem,
  DecisionMatrix,
  DesignDecision,
  DesignRequirement,
  DesignReview,
  RiskEntry,
} from '@/types';

/**
 * DESIGN PROCESS DATA — EDIT FREELY
 *
 * Requirements start as `not-started` with "to be defined" verification
 * because the prototype category has not been chosen. Fill in real
 * thresholds once Phase 5 sets the use case.
 */

export const benchmarkNote =
  'Benchmarking will be recorded as direct observation of footwear physically inspected, described generically by construction type rather than by brand or model. No proprietary design is reproduced, and no brand marks appear on this site.';

export const requirements: DesignRequirement[] = [
  {
    id: 'req-01',
    code: 'N-01',
    title: 'The shoe stays on the foot during normal walking',
    description:
      'The closure and heel structure must hold the foot in place well enough that the shoe does not slip off or shift noticeably during ordinary walking gait.',
    type: 'need',
    priority: 'must',
    verification: 'Wear trial by the researcher with observation and written notes.',
    status: 'not-started',
    evidence: 'preliminary-assumption',
  },
  {
    id: 'req-02',
    code: 'N-02',
    title: 'The shoe is comfortable enough to wear continuously for a defined period',
    description:
      'No hot spots, pressure points, or discomfort that would end a wear session early. The duration threshold is to be set once the use case is chosen.',
    type: 'need',
    priority: 'must',
    verification: 'Timed wear trial with a written discomfort log.',
    status: 'not-started',
    evidence: 'preliminary-assumption',
  },
  {
    id: 'req-03',
    code: 'R-01',
    title: 'Sole bond survives repeated flexing without visible separation',
    description:
      'The adhesive joint between the upper and the sole unit must not show separation at the bond line after a defined number of flex cycles. Cycle count and inspection method to be defined.',
    type: 'requirement',
    priority: 'must',
    verification: 'Flex cycling followed by visual inspection under raking light. Method to be defined.',
    status: 'not-started',
    evidence: 'preliminary-assumption',
  },
  {
    id: 'req-04',
    code: 'R-02',
    title: 'Total mass falls within a target range',
    description:
      'Mass per shoe should sit within a range appropriate to the chosen category. The target is deliberately blank until benchmarking establishes a defensible range.',
    type: 'requirement',
    priority: 'should',
    verification: 'Weigh the finished prototype on a calibrated scale.',
    status: 'not-started',
    evidence: 'open-question',
  },
  {
    id: 'req-05',
    code: 'R-03',
    title: 'Forefoot flexes without buckling or creasing the upper permanently',
    description:
      'The upper must accommodate forefoot flexion without forming a permanent crease that becomes a failure initiation point.',
    type: 'requirement',
    priority: 'should',
    verification: 'Flex cycling with before-and-after photography at fixed angles.',
    status: 'not-started',
    evidence: 'preliminary-assumption',
  },
  {
    id: 'req-06',
    code: 'C-01',
    title: 'Buildable with accessible equipment',
    description:
      'Every process in the final build sequence must be achievable with equipment available in a university lab, makerspace, or home workshop with appropriate safety controls.',
    type: 'constraint',
    priority: 'must',
    verification: 'Equipment access confirmed and documented before the process enters the build plan.',
    status: 'in-progress',
    evidence: 'design-decision',
  },
  {
    id: 'req-07',
    code: 'C-02',
    title: 'Materials obtainable at prototype quantities',
    description:
      'No material may require a factory minimum order. Anything unavailable in small quantity is out of consideration regardless of its properties.',
    type: 'constraint',
    priority: 'must',
    verification: 'Confirm small-quantity availability and record the supplier before selection.',
    status: 'in-progress',
    evidence: 'design-decision',
  },
  {
    id: 'req-08',
    code: 'C-03',
    title: 'Solvent processes confined to approved ventilated workspace',
    description:
      'Any process using solvent-based cements, primers, or cleaners happens only in an approved space with adequate ventilation and appropriate personal protective equipment.',
    type: 'constraint',
    priority: 'must',
    verification: 'Workspace approval confirmed with the mentor before solvent work begins.',
    status: 'not-started',
    evidence: 'design-decision',
  },
];

export const decisionMatrices: DecisionMatrix[] = [
  {
    id: 'matrix-midsole-route',
    title: 'Midsole fabrication route',
    question: 'How should the midsole be produced given that mold tooling is out of scope?',
    criteria: [
      { name: 'Manufacturability', weight: 0.3, description: 'Achievable with equipment actually available' },
      { name: 'Geometric freedom', weight: 0.2, description: 'How much shape control the route allows' },
      { name: 'Cost', weight: 0.2, description: 'Total cost at prototype quantity' },
      { name: 'Repeatability', weight: 0.2, description: 'Consistency between left and right, and between iterations' },
      { name: 'Weight', weight: 0.1, description: 'Resulting mass for equivalent function' },
    ],
    options: [
      { name: 'Cut and stack sheet foam', scores: {}, notes: 'Leading candidate. Not yet scored.' },
      { name: 'Modify a commercially available midsole', scores: {}, notes: 'Not yet scored.' },
      { name: 'Cast polyurethane in a printed mold', scores: {}, notes: 'Not yet scored.' },
    ],
    scale: '1–5, where 5 is best. Weights sum to 1.',
    status: 'draft',
    caveat:
      'Criteria and weights are set. Scoring is intentionally empty until Phase 6 — filling this in now would be guessing dressed up as analysis.',
  },
  {
    id: 'matrix-bottom-construction',
    title: 'Bottom construction method',
    question: 'Should the shoe be strobel-constructed or board-lasted?',
    criteria: [
      { name: 'Equipment availability', weight: 0.35, description: 'Whether the required machine is actually accessible' },
      { name: 'Flexibility of result', weight: 0.2, description: 'Underfoot flexibility of the finished shoe' },
      { name: 'Assembly difficulty', weight: 0.25, description: 'Difficulty for a first-time builder' },
      { name: 'Weight', weight: 0.1, description: 'Added mass' },
      { name: 'Failure tolerance', weight: 0.1, description: 'How recoverable a mistake is' },
    ],
    options: [
      { name: 'Strobel construction', scores: {}, notes: 'Depends entirely on strobel machine access. Not yet scored.' },
      { name: 'Board lasting', scores: {}, notes: 'Fallback route. Not yet scored.' },
    ],
    scale: '1–5, where 5 is best. Weights sum to 1.',
    status: 'draft',
    caveat: 'Blocked on confirming machine access. Scoring before that would be meaningless.',
  },
];

export const designDecisions: DesignDecision[] = [
  {
    id: 'dd-01',
    date: '2026-08-24',
    title: 'Use a public GitHub repository and static site as the research record',
    context:
      'The project needs one stable public link, a durable record of weekly progress, and organized source material for the thesis. A database or paid CMS would add cost and maintenance overhead for no research benefit.',
    decision:
      'Maintain the research record as Markdown files and typed data files in a public Git repository, published as a statically generated Next.js site on Vercel.',
    rationale:
      'Version control gives a timestamped, restorable history of every change — which is itself evidence of process. Static generation means no runtime dependencies to break during a review. Markdown keeps weekly updates fast enough to actually sustain.',
    alternativesConsidered: [
      'Hosted blog platform — less control over structure, harder to export for the thesis',
      'Shared document folder — no public link, no version history reviewers can inspect',
      'Database-backed application — unnecessary complexity and cost for single-author content',
    ],
    consequences: [
      'Anything committed to the repository is public. Private notes stay out.',
      'Weekly updates require a Git commit, which is a small but real recurring cost.',
      'Content is portable to the thesis without re-keying.',
    ],
    evidence: 'design-decision',
    status: 'accepted',
  },
];

export const designReviews: DesignReview[] = [
  {
    id: 'dr-00',
    date: '2026-08-24',
    title: 'Design review record — no reviews held yet',
    attendees: [],
    agenda: ['Placeholder record showing the structure of a design review entry.'],
    outcomes: [
      'No design review has taken place. This entry exists to show the format and will be replaced by the first real review.',
    ],
    actionItems: [],
    mentorFeedbackRecorded: false,
  },
];

export const risks: RiskEntry[] = [
  {
    id: 'risk-01',
    description: 'Sole-to-upper adhesive bond fails under flex, causing visible separation.',
    category: 'technical',
    likelihood: 'high',
    impact: 'high',
    mitigation:
      'Run adhesive and surface-preparation experiments on scrap early in Phase 8, before committing to a full build. Test the bond before assembling the whole shoe.',
    status: 'not-started',
  },
  {
    id: 'risk-02',
    description: 'No access to a strobel or industrial sewing machine, blocking the intended construction.',
    category: 'technical',
    likelihood: 'medium',
    impact: 'high',
    mitigation:
      'Confirm machine access during Phase 4, well before pattern design. Keep board lasting as a documented fallback so the design can pivot without restarting.',
    status: 'not-started',
  },
  {
    id: 'risk-03',
    description: 'Material lead times push fabrication past the semester boundary.',
    category: 'schedule',
    likelihood: 'medium',
    impact: 'medium',
    mitigation:
      'Order long-lead materials during Phase 6 rather than waiting for the build phase. Track order dates in the weekly log.',
    status: 'not-started',
  },
  {
    id: 'risk-04',
    description: 'Pattern development takes more iterations than scheduled, compressing testing time.',
    category: 'schedule',
    likelihood: 'high',
    impact: 'medium',
    mitigation:
      'Budget for multiple pattern revisions from the start. Use cheap scrap material for early fit tests so iteration is fast and low-cost.',
    status: 'not-started',
  },
  {
    id: 'risk-05',
    description: 'Solvent-based processes cannot be run safely in an available workspace.',
    category: 'safety',
    likelihood: 'medium',
    impact: 'high',
    mitigation:
      'Identify and confirm an approved ventilated workspace with the mentor during Phase 4. Evaluate water-based adhesive alternatives in parallel.',
    status: 'not-started',
  },
  {
    id: 'risk-06',
    description: 'Scope expands beyond what two semesters allow.',
    category: 'scope',
    likelihood: 'medium',
    impact: 'medium',
    mitigation:
      'Keep the out-of-scope list explicit and review it at each design review. Prefer one well-documented prototype over several undocumented ones.',
    status: 'in-progress',
  },
];

export const billOfMaterials: BillOfMaterialsItem[] = [
  {
    id: 'bom-01',
    component: 'Upper base material',
    materialName: 'To be selected — see materials research',
    quantity: 'To be determined',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
    notes: 'Depends on the Phase 6 material selection.',
  },
  {
    id: 'bom-02',
    component: 'Midsole stock',
    materialId: 'eva-sheet-foam',
    materialName: 'EVA sheet foam (candidate)',
    quantity: 'To be determined',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
  },
  {
    id: 'bom-03',
    component: 'Outsole stock',
    materialId: 'carbon-rubber-sheet',
    materialName: 'Carbon rubber sheet (candidate)',
    quantity: 'To be determined',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
  },
  {
    id: 'bom-04',
    component: 'Sole adhesive system',
    materialId: 'polyurethane-cement',
    materialName: 'Polyurethane footwear cement plus substrate primer (candidate)',
    quantity: 'To be determined',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
    notes: 'Primer selection is substrate-specific and must be confirmed with the adhesive supplier.',
  },
  {
    id: 'bom-05',
    component: 'Heel counter and toe puff',
    materialId: 'thermoplastic-counter-sheet',
    materialName: 'Thermoplastic counter sheet (candidate)',
    quantity: 'To be determined',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
  },
  {
    id: 'bom-06',
    component: 'Last',
    materialName: 'To be determined — printed, machined, or commercially sourced',
    quantity: '1 pair',
    supplier: 'Not yet sourced',
    estimatedCost: 'Not yet quoted',
    status: 'not-sourced',
  },
];

export const openQuestions: string[] = [
  'Which prototype category best fits the available equipment, budget, and timeline?',
  'Is a 3D-printed last dimensionally stable enough to survive hand lasting?',
  'Can an acceptable sole bond be achieved with clamping instead of a powered press?',
  'Is strobel construction available, or does the design need to assume board lasting?',
  'How is cushioning compared between foam candidates without a materials testing machine?',
  'What is a defensible target mass range for the chosen category, given that benchmarking has not happened yet?',
  'Which evaluation areas are feasible with equipment that is actually accessible?',
];
