import type { Prototype } from '@/types';

/**
 * PROTOTYPE RECORDS
 *
 * This array is intentionally EMPTY. Nothing has been fabricated.
 * The prototypes page renders a "No prototype fabricated yet" state while
 * this stays empty, which is the honest thing for it to show.
 *
 * When you build something — including a small component experiment such as
 * a bonded scrap sample, a seam test, or a foam stack — copy the template
 * below, uncomment it, fill it in, and add it to the array.
 *
 * Use `kind: 'component-experiment'` for partial builds and `'full-shoe'`
 * for complete prototypes. Number full shoes P1, P2, ... and component
 * experiments S1, S2, ...
 */
export const prototypes: Prototype[] = [];

/*
EXAMPLE — copy this, fill it in, and add it to the array above.

{
  id: 's1-adhesive-peel-samples',
  number: 'S1',
  kind: 'component-experiment',
  title: 'Adhesive peel samples: prepared vs unprepared rubber',
  date: '2027-01-15',
  purpose: 'Establish whether surface roughing measurably changes bond strength on carbon rubber sheet.',
  hypothesis: 'Roughed and primed samples will resist peel noticeably better than untreated samples.',
  materialsUsed: ['Carbon rubber sheet', 'EVA sheet foam', 'Polyurethane cement'],
  processesUsed: ['Surface treatment', 'Adhesive application', 'Pressing'],
  tools: ['Roughing wheel', 'Brush applicator', 'Clamps', 'Spring scale'],
  constructionSteps: [
    'Cut six matched sample pairs.',
    'Rough and prime three pairs; leave three untreated.',
    'Apply cement per the data sheet to all samples.',
    'Clamp for the specified duration and cure.',
  ],
  images: [
    { src: '/images/s1-peel-samples.jpg', alt: 'Six rubber and foam sample pairs clamped on a bench', caption: 'Sample pairs during cure.' },
  ],
  measurements: [
    { label: 'Sample bond area', value: '25 x 100 mm', method: 'Measured with steel rule before bonding' },
  ],
  testingCompleted: ['Hand peel comparison with a spring scale'],
  results: 'Describe what happened. Report numbers only if you measured them.',
  failures: ['Record what went wrong, including procedural mistakes.'],
  lessonsLearned: ['What you would do differently next time.'],
  designChanges: ['What this changes about the build plan.'],
  nextIteration: 'What the next experiment should isolate.',
  status: 'complete',
  relatedLogSlugs: ['2027-01-15-week-20-adhesive-experiments'],
}
*/

export const noPrototypeMessage =
  'No prototype has been fabricated yet. Fabrication is scheduled for Phase 8. Component experiments will appear here first, before any complete shoe exists.';

export function getPrototype(id: string): Prototype | undefined {
  return prototypes.find((prototype) => prototype.id === id);
}

export function getFullShoePrototypes(): Prototype[] {
  return prototypes.filter((prototype) => prototype.kind === 'full-shoe');
}

export function getComponentExperiments(): Prototype[] {
  return prototypes.filter((prototype) => prototype.kind === 'component-experiment');
}
