import type { Artifact, ArtifactType } from '@/types';

/**
 * GALLERY ARTIFACTS
 *
 * Intentionally EMPTY. Add records as you produce real material.
 *
 * `src` is a path relative to /public — for example, a file saved at
 * public/images/week-03-teardown.jpg is referenced as
 * '/images/week-03-teardown.jpg'.
 *
 * If `src` is omitted or the file is missing, the gallery renders a labeled
 * placeholder tile instead of a broken image.
 *
 * `alt` is required on every record. Describe what is visible and what the
 * reader is meant to notice — not "photo of shoe".
 */
export const artifacts: Artifact[] = [
  {
    id: 'art-how-shoes-are-made-cover',
    title: 'Reference copy: How Shoes Are Made',
    date: '2026-09-05',
    type: 'photograph',
    description:
      'The researcher’s own physical copy of Wade Motawi’s How Shoes Are Made, used as a source this week for last measurement terminology, cold cement and vulcanized construction, and footbed materials.',
    caption:
      'Photograph of the researcher’s copy of the source book. The book’s own interior pages are not reproduced here — only cited; see the research library entry for what was drawn from it.',
    src: '/images/how-shoes-are-made-book-cover.jpg',
    alt: 'A hand holding a paperback copy of "How Shoes Are Made: A behind the scenes look at a real sneaker factory" by Wade Motawi, cover showing a sneaker on a factory floor',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-04-week-02-anatomy-terminology',
    attributionNotes:
      'Photograph of the book’s cover only, taken by the researcher of his own physical copy. Cover design and title are the copyrighted work of Wade Motawi; shown here as evidence of the source material, not reproduced as content. Interior pages are cited on the sources page, not reproduced.',
  },
  {
    id: 'art-anatomy-callout-diagram',
    title: 'Sneaker anatomy call-out diagram',
    date: '2026-09-05',
    type: 'diagram',
    description:
      'A labeled side-profile line drawing of a generic low-top sneaker, used to give the anatomy page a visual reference alongside its component tables.',
    caption:
      'Generic low-top silhouette, not modeled on any specific brand or product, with the upper, lasting, and sole components called out by name.',
    src: '/images/sneaker-anatomy-diagram.png',
    alt: 'Line-art side profile of a generic low-top sneaker with labels pointing to the tongue, throat opening, collar, collar lining, heel tab, sock liner, quarter panel, side overlay, heel overlay, heel counter, heel, laces, eyestay, eyelets, vamp, toe box, toe cap, mudguard, insole, midsole, and outsole',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-04-week-02-anatomy-terminology',
    attributionNotes:
      'AI-generated original diagram, produced to illustrate anatomy terminology. Not based on any specific brand or existing product design.',
  },
];

/*
EXAMPLE — copy this, fill it in, and add it to the array above.

{
  id: 'art-01',
  title: 'Midsole cross-section, benchmark teardown',
  date: '2026-09-14',
  type: 'photograph',
  description: 'Cut section through the midsole of a benchmark shoe, showing the foam density transition.',
  caption: 'Cross-section at the midfoot. The lighter upper layer is noticeably softer under thumb pressure.',
  src: '/images/2026-09-14-midsole-section.jpg',
  alt: 'Cut cross-section of a sneaker midsole showing two distinct foam layers with a visible boundary line',
  phaseId: 'phase-02',
  relatedLogSlug: '2026-09-14-week-03-benchmark-teardown',
  attributionNotes: 'Photograph by the researcher. Shoe purchased for teardown; no brand marks shown.',
}
*/

export const artifactTypeLabels: Record<ArtifactType, string> = {
  photograph: 'Photograph',
  sketch: 'Sketch',
  diagram: 'Diagram',
  'cad-screenshot': 'CAD screenshot',
  'material-sample': 'Material sample',
  'manufacturing-trial': 'Manufacturing trial',
  'prototype-iteration': 'Prototype iteration',
  'testing-image': 'Testing image',
  presentation: 'Presentation',
  report: 'Report',
  other: 'Other',
};

export function getArtifact(id: string): Artifact | undefined {
  return artifacts.find((artifact) => artifact.id === id);
}
