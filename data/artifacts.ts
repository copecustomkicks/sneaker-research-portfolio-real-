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
  {
    id: 'art-kobe-9-component-callouts',
    title: 'Nike Kobe 9 EM Low component callout study',
    date: '2026-09-19',
    type: 'diagram',
    description:
      'A component callout study of the Nike Kobe 9 EM Low, completed for Week 1 of the Footwear Product Development course to practice the week’s component-labeling conventions.',
    caption:
      'Twenty numbered components labeled from heel counter to outsole, applying the location-and-construction naming convention covered in class.',
    src: '/images/kobe-9-component-callouts.png',
    alt: 'Line illustration of a Nike Kobe 9 EM Low basketball shoe with twenty numbered leader lines labeling components including heel counter, collar, quarter, tongue, laces, eyestay, vamp, eyelets, lateral swoosh, midsole panels, and outsole',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-15-week-04-footwear-product-development-fundamentals',
    attributionNotes:
      'Base illustration traced and rendered by the researcher in Adobe Illustrator; numbered callouts are the researcher’s own labeling work. A component-identification study of an existing, named commercial shoe for coursework, not a claim of designing, manufacturing, or being affiliated with the original product.',
  },
  {
    id: 'art-aj1-voodoo-component-callouts',
    title: 'Air Jordan 1 Low OG "Voodoo" component callout study',
    date: '2026-09-19',
    type: 'diagram',
    description:
      'A component callout study of the Air Jordan 1 Low OG "Voodoo" (Zion Williamson), completed for Week 1 of the Footwear Product Development course as a second application of the same labeling system.',
    caption:
      'Twenty-one numbered components labeled from tip to outsole, including the overlay/underlay and cupsole distinctions covered in class.',
    src: '/images/aj1-voodoo-component-callouts.png',
    alt: 'Line illustration of an Air Jordan 1 Low OG "Voodoo" sneaker with twenty-one numbered leader lines labeling components including tip, vamp, quarter overlay, eyestay, tongue, collar, heel tab, cupsole, and outsole',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-15-week-04-footwear-product-development-fundamentals',
    attributionNotes:
      'Base illustration traced and rendered by the researcher in Adobe Illustrator; numbered callouts are the researcher’s own labeling work. A component-identification study of an existing, named commercial shoe for coursework, not a claim of designing, manufacturing, or being affiliated with the original product.',
  },
  {
    id: 'art-puma-rsx-component-callouts',
    title: 'Puma RS-X component callout study',
    date: '2026-09-27',
    type: 'diagram',
    description:
      'A component callout study of the researcher’s own Puma RS-X sneakers, completed for Week 5 of the Footwear Product Development course.',
    caption:
      'Twenty numbered components labeled from toe tip to outsole, on the researcher’s own pair.',
    src: '/images/puma-rsx-component-callouts.png',
    alt: 'Photograph of a colorful Puma RS-X sneaker with twenty numbered leader lines labeling components including toe tip, vamp, lace keeper, tongue tab, collar lining, heel clip, lateral logo, quarter overlay, midsole, and outsole',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-21-week-05-product-development-documentation-and-testing',
    attributionNotes:
      'Photograph of the researcher’s own physical pair, taken and labeled by the researcher. A component-identification study of his own shoe for coursework, not a claim of designing or manufacturing the original product.',
  },
  {
    id: 'art-puma-rsx-construction-callouts',
    title: 'Puma RS-X construction-detail callout study',
    date: '2026-09-27',
    type: 'diagram',
    description:
      'A construction-detail callout study of the researcher’s own Puma RS-X sneakers, completed for Week 5 of the Footwear Product Development course.',
    caption:
      'Six numbered construction features labeled across a side view, top-down view, and outsole view, on the researcher’s own pair.',
    src: '/images/puma-rsx-construction-callouts.png',
    alt: 'Photographs of a colorful Puma RS-X sneaker from side, top-down, and outsole views with six numbered leader lines labeling double stitching, hole punchout eyelets, single stitching, molded outsole, perforated holes in vamp, and stitched logo',
    phaseId: 'phase-02',
    relatedLogSlug: '2026-09-21-week-05-product-development-documentation-and-testing',
    attributionNotes:
      'Photograph of the researcher’s own physical pair, taken and labeled by the researcher. A construction-identification study of his own shoe for coursework, not a claim of designing or manufacturing the original product.',
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
