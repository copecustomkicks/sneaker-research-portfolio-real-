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
export const artifacts: Artifact[] = [];

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
