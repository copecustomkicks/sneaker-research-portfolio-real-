/**
 * Content model for the research portfolio.
 *
 * Every research record on this site is typed here. If the production build
 * fails after you edit a data file, the error message will point back to one
 * of these definitions — that is intentional, it stops malformed research
 * records from reaching the public site.
 */

/* ------------------------------------------------------------------ */
/* Shared vocabulary                                                    */
/* ------------------------------------------------------------------ */

/**
 * How confident we are in a given statement. Used for the evidence badges
 * described in the research-integrity statement.
 */
export type EvidenceType =
  | 'published-evidence'
  | 'manufacturer-claim'
  | 'researcher-observation'
  | 'preliminary-assumption'
  | 'design-decision'
  | 'experimental-data'
  | 'interpretation'
  | 'open-question';

export type WorkStatus = 'not-started' | 'in-progress' | 'complete' | 'blocked' | 'deferred';

export type MaterialStatus = 'researching' | 'candidate' | 'selected' | 'rejected' | 'tested';

export type UnderstandingLevel = 'none' | 'reading' | 'familiar' | 'practiced';

export type SourceType =
  | 'academic-paper'
  | 'book'
  | 'standard'
  | 'patent'
  | 'manufacturer-document'
  | 'material-data-sheet'
  | 'industry-article'
  | 'video'
  | 'interview'
  | 'supplier-information'
  | 'other';

export type ArtifactType =
  | 'photograph'
  | 'sketch'
  | 'diagram'
  | 'cad-screenshot'
  | 'material-sample'
  | 'manufacturing-trial'
  | 'prototype-iteration'
  | 'testing-image'
  | 'presentation'
  | 'report'
  | 'other';

/* ------------------------------------------------------------------ */
/* Research log                                                         */
/* ------------------------------------------------------------------ */

/** Frontmatter fields, exactly as written at the top of a Markdown file. */
export interface ResearchLogFrontmatter {
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** Optional end date for entries covering a range. */
  endDate?: string;
  week: number;
  semester: string;
  phase: string;
  status: WorkStatus | string;
  /** Documented hours for this week. Use 0 rather than guessing. */
  hours: number;
  summary: string;
  tags?: string[];
  /** Path relative to /public, e.g. "/images/week-01-lastvariants.jpg". */
  featuredImage?: string;
  featuredImageAlt?: string;
  /** Set to true for seeded content that is not a verified research record. */
  starter?: boolean;
  /** Set to true to keep an entry out of the published site. */
  draft?: boolean;
}

/**
 * Lightweight shape passed to client components (no HTML payload).
 * Optional frontmatter fields are normalized to definite values here, so
 * consuming components never have to guard against `undefined`.
 */
export interface ResearchLogSummary {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  week: number;
  semester: string;
  phase: string;
  status: string;
  hours: number;
  summary: string;
  tags: string[];
  starter: boolean;
  searchText: string;
}

export interface ResearchLogEntry extends ResearchLogSummary {
  /** Rendered HTML body of the Markdown file. */
  html: string;
  /** Plain-text body, used for client-side search. */
  plainText: string;
  readingMinutes: number;
  featuredImage?: string;
  featuredImageAlt?: string;
}

/* ------------------------------------------------------------------ */
/* Roadmap                                                              */
/* ------------------------------------------------------------------ */

export interface ResearchPhase {
  id: string;
  number: number;
  name: string;
  status: WorkStatus;
  /** Human-readable planned window, e.g. "Aug–Sep 2026". */
  plannedDates: string;
  /** Leave empty until the work actually happens. */
  actualDates?: string;
  /** 0–100. A project-management estimate, not a grade. */
  completion: number;
  objectives: string[];
  expectedOutputs: string[];
  /** Slugs of research-log entries related to this phase. */
  relatedLogSlugs?: string[];
  /** Internal links to related site sections. */
  relatedLinks?: { label: string; href: string }[];
  notes?: string;
}

/* ------------------------------------------------------------------ */
/* Sneaker anatomy                                                      */
/* ------------------------------------------------------------------ */

export interface AnatomyComponent {
  id: string;
  name: string;
  /** Which assembly group the part belongs to. */
  group: 'upper' | 'lower' | 'internal' | 'tooling';
  function: string;
  commonMaterials: string[];
  relevantProperties: string[];
  commonProcesses: string[];
  designTradeoffs: string[];
  questionsToInvestigate: string[];
  relatedSourceIds?: string[];
  relatedFindings?: string;
}

/* ------------------------------------------------------------------ */
/* Materials                                                            */
/* ------------------------------------------------------------------ */

export type MaterialCategory =
  | 'Upper textiles and mesh'
  | 'Knit materials'
  | 'Natural leather'
  | 'Synthetic leather'
  | 'Reinforcement materials'
  | 'Cushioning foams'
  | 'Outsole rubbers'
  | 'Structural plastics'
  | 'Insole and sockliner materials'
  | 'Adhesives'
  | 'Thread'
  | 'Coatings and finishes'
  | 'Sustainable or recycled alternatives';

/**
 * Preliminary 1–5 scoring used for the comparison visualization.
 * These are researcher judgements, not measurements, until a TestRecord
 * exists to back them up.
 */
export interface MaterialScores {
  durability?: number;
  weight?: number;
  cost?: number;
  manufacturability?: number;
  comfort?: number;
  sustainability?: number;
}

export interface MaterialProperty {
  label: string;
  value: string;
  /** Where the number came from. Required so nothing reads as measured fact. */
  evidence: EvidenceType;
  sourceId?: string;
}

export interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  intendedComponents: string[];
  description: string;
  properties: MaterialProperty[];
  advantages: string[];
  limitations: string[];
  manufacturingCompatibility: string[];
  expectedPerformance: string;
  weightConsiderations: string;
  costConsiderations: string;
  availability: string;
  sustainabilityConsiderations: string;
  safetyConsiderations: string;
  candidateTestingMethods: string[];
  sourceIds: string[];
  status: MaterialStatus;
  /** Explain a "selected" or "rejected" status here. */
  rationale?: string;
  /** Omit entirely when there is no defensible basis for scoring. */
  scores?: MaterialScores;
  relatedLogSlugs?: string[];
}

/* ------------------------------------------------------------------ */
/* Manufacturing processes                                              */
/* ------------------------------------------------------------------ */

export interface ManufacturingProcess {
  id: string;
  name: string;
  stage: 'preparation' | 'cutting' | 'upper-assembly' | 'lasting' | 'sole-attachment' | 'finishing';
  purpose: string;
  requiredTools: string[];
  inputs: string[];
  procedureSummary: string;
  criticalVariables: string[];
  commonDefects: string[];
  safetyPrecautions: string[];
  /** True when the process needs trained supervision or specialized equipment. */
  requiresSupervision: boolean;
  /** Short reason shown next to the supervision flag. */
  supervisionNote?: string;
  qualityChecks: string[];
  relevanceToPrototype: string;
  understanding: UnderstandingLevel;
  sourceIds: string[];
  relatedLogSlugs?: string[];
}

/* ------------------------------------------------------------------ */
/* Design process                                                       */
/* ------------------------------------------------------------------ */

export interface DesignRequirement {
  id: string;
  /** Short code used in decision matrices, e.g. "R-04". */
  code: string;
  title: string;
  description: string;
  type: 'need' | 'requirement' | 'constraint';
  priority: 'must' | 'should' | 'could';
  /** How the requirement will be checked. "To be defined" is acceptable. */
  verification: string;
  status: WorkStatus;
  evidence: EvidenceType;
}

export interface DecisionMatrixOption {
  name: string;
  /** Keyed by criterion name. */
  scores: Record<string, number>;
  notes?: string;
}

export interface DecisionMatrix {
  id: string;
  title: string;
  question: string;
  /** Criterion name -> weight. Weights should sum to 1. */
  criteria: { name: string; weight: number; description: string }[];
  options: DecisionMatrixOption[];
  scale: string;
  status: 'draft' | 'under-review' | 'decided';
  outcome?: string;
  caveat: string;
}

export interface DesignDecision {
  id: string;
  date: string;
  title: string;
  context: string;
  decision: string;
  rationale: string;
  alternativesConsidered: string[];
  consequences: string[];
  evidence: EvidenceType;
  status: 'proposed' | 'accepted' | 'superseded' | 'reversed';
  supersededBy?: string;
  relatedLogSlugs?: string[];
}

export interface DesignReview {
  id: string;
  date: string;
  title: string;
  attendees: string[];
  agenda: string[];
  outcomes: string[];
  actionItems: string[];
  /** Only fill this in after a real conversation. */
  mentorFeedbackRecorded: boolean;
}

export interface RiskEntry {
  id: string;
  description: string;
  category: 'technical' | 'schedule' | 'safety' | 'supply' | 'scope';
  likelihood: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
  status: WorkStatus;
}

export interface BillOfMaterialsItem {
  id: string;
  component: string;
  materialId?: string;
  materialName: string;
  quantity: string;
  supplier: string;
  estimatedCost: string;
  status: 'not-sourced' | 'identified' | 'ordered' | 'received';
  notes?: string;
}

/* ------------------------------------------------------------------ */
/* Prototypes                                                           */
/* ------------------------------------------------------------------ */

export interface PrototypeImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Prototype {
  id: string;
  /** "P1", "P2", or "S1" for small component experiments. */
  number: string;
  kind: 'full-shoe' | 'component-experiment';
  title: string;
  date: string;
  purpose: string;
  hypothesis: string;
  materialsUsed: string[];
  processesUsed: string[];
  tools: string[];
  constructionSteps: string[];
  images: PrototypeImage[];
  measurements: { label: string; value: string; method: string }[];
  testingCompleted: string[];
  results: string;
  failures: string[];
  lessonsLearned: string[];
  designChanges: string[];
  nextIteration: string;
  status: WorkStatus;
  relatedLogSlugs?: string[];
}

/* ------------------------------------------------------------------ */
/* Testing                                                              */
/* ------------------------------------------------------------------ */

export interface TestRecord {
  id: string;
  title: string;
  /** Evaluation area, e.g. "Bond strength". */
  category: string;
  objective: string;
  method: string;
  variables: { independent: string[]; dependent: string[]; controlled: string[] };
  equipment: string[];
  sampleInformation: string;
  /** Column headers + rows. Leave rows empty until data exists. */
  data: { columns: string[]; rows: string[][] };
  calculations: string;
  images: PrototypeImage[];
  results: string;
  uncertaintyAndLimitations: string;
  interpretation: string;
  passFailCriteria: string;
  designImplications: string;
  recommendedChanges: string[];
  status: WorkStatus;
  /** Path to a CSV in /public/documents, added later. */
  dataFile?: string;
  relatedPrototypeIds?: string[];
  relatedLogSlugs?: string[];
}

/** Evaluation areas that may or may not end up in scope. */
export interface EvaluationArea {
  name: string;
  whatItWouldMeasure: string;
  feasibility: 'likely' | 'possible' | 'unlikely-without-lab-access';
  equipmentNeeded: string;
}

/* ------------------------------------------------------------------ */
/* Sources                                                              */
/* ------------------------------------------------------------------ */

export interface Source {
  id: string;
  /** Full reference string in APA 7 format. */
  citation: string;
  authors: string[];
  year: string;
  type: SourceType;
  url?: string;
  doi?: string;
  /** ISO date the source was last read. */
  dateAccessed?: string;
  tags: string[];
  summary: string;
  relevance: string;
  keyTakeaway: string;
  reliabilityNotes: string;
  evidence: EvidenceType;
  relatedLogSlugs?: string[];
  relatedMaterialIds?: string[];
  relatedProcessIds?: string[];
  /** True while the record is a structural placeholder, not a real reference. */
  placeholder: boolean;
}

/* ------------------------------------------------------------------ */
/* Artifacts                                                            */
/* ------------------------------------------------------------------ */

export interface Artifact {
  id: string;
  title: string;
  date: string;
  type: ArtifactType;
  description: string;
  caption: string;
  /** Path relative to /public. Missing files fall back to a placeholder tile. */
  src?: string;
  alt: string;
  phaseId?: string;
  relatedLogSlug?: string;
  downloadHref?: string;
  attributionNotes?: string;
}

/* ------------------------------------------------------------------ */
/* Deliverables and metrics                                             */
/* ------------------------------------------------------------------ */

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  dueWindow: string;
  status: 'not-yet-available' | 'drafting' | 'available';
  /** Only set when a real file or link exists. */
  href?: string;
}

export interface ProjectMetric {
  id: string;
  label: string;
  value: string | number;
  /** Short note on how the number is derived. */
  derivation: string;
  unit?: string;
  href?: string;
}
