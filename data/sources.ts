import type { Source, SourceType } from '@/types';

/**
 * RESEARCH LIBRARY — APA 7 STYLE
 *
 * IMPORTANT: every record below is a TEMPLATE, not a real reference.
 * `placeholder: true` makes that visible on the page. Nothing here has been
 * read, because no citation should exist on this site that you have not
 * personally read.
 *
 * To add a real source:
 *   1. Copy one of the templates below.
 *   2. Replace every field with the real values.
 *   3. Set `placeholder: false`.
 *   4. Set `dateAccessed` to the day you actually read it.
 *
 * APA 7 reference patterns:
 *   Journal article  Author, A. A., & Author, B. B. (Year). Title of the article.
 *                    Journal Name, Volume(Issue), pages. https://doi.org/xxxx
 *   Book             Author, A. A. (Year). Title of work (Edition). Publisher.
 *   Standard         Organization. (Year). Title of standard (Standard No. XXXX).
 *   Patent           Inventor, A. A. (Year). Title of patent (U.S. Patent No. X,XXX,XXX).
 *                    U.S. Patent and Trademark Office. URL
 *   Web page         Author, A. A. (Year, Month Day). Title of page. Site Name. URL
 */
export const sources: Source[] = [
  {
    id: 'src-template-journal',
    citation:
      'Author, A. A., & Author, B. B. (Year). Title of the journal article. Journal Name, Volume(Issue), pages. https://doi.org/xxxxx',
    authors: ['Author, A. A.', 'Author, B. B.'],
    year: 'Year',
    type: 'academic-paper',
    doi: '',
    tags: ['template'],
    summary: 'Template record. Replace with a one-paragraph summary of what the paper actually establishes.',
    relevance: 'Explain in one or two sentences why this source matters to a specific decision in this project.',
    keyTakeaway: 'The single most useful thing this source contributed.',
    reliabilityNotes:
      'Note the study design, sample size, funding source, and any limitations the authors state themselves.',
    evidence: 'published-evidence',
    placeholder: true,
  },
  {
    id: 'src-template-book',
    citation: 'Author, A. A. (Year). Title of the book (Edition). Publisher.',
    authors: ['Author, A. A.'],
    year: 'Year',
    type: 'book',
    tags: ['template'],
    summary: 'Template record. Replace with a summary of the chapters actually used, not the whole book.',
    relevance: 'Which specific chapters or techniques inform this project?',
    keyTakeaway: 'The key idea taken from this book.',
    reliabilityNotes:
      'Note whether the book is an established technical reference or a practitioner account, and how current it is.',
    evidence: 'published-evidence',
    placeholder: true,
  },
  {
    id: 'src-template-standard',
    citation: 'Organization. (Year). Title of the standard (Standard No. XXXX). Publisher.',
    authors: ['Standards Organization'],
    year: 'Year',
    type: 'standard',
    tags: ['template', 'testing'],
    summary: 'Template record. Replace with what the standard specifies and which test method it defines.',
    relevance: 'Which of this project\u2019s test methods is derived from or informed by this standard?',
    keyTakeaway: 'The specific method, parameter, or acceptance criterion taken from the standard.',
    reliabilityNotes:
      'Note the edition and whether the full standard was read or only a summary. Do not cite a standard you have only read about secondhand.',
    evidence: 'published-evidence',
    placeholder: true,
  },
  {
    id: 'src-template-patent',
    citation:
      'Inventor, A. A. (Year). Title of the patent (U.S. Patent No. X,XXX,XXX). U.S. Patent and Trademark Office. https://patents.google.com/',
    authors: ['Inventor, A. A.'],
    year: 'Year',
    type: 'patent',
    tags: ['template', 'construction'],
    summary: 'Template record. Replace with what the patent claims and which construction detail it discloses.',
    relevance: 'What does this teach about a construction method relevant to the prototype?',
    keyTakeaway: 'The disclosed technique of interest.',
    reliabilityNotes:
      'A patent shows what was claimed as novel, not that a method is effective or in current production use. Treat claims accordingly.',
    evidence: 'published-evidence',
    placeholder: true,
  },
  {
    id: 'src-template-datasheet',
    citation: 'Manufacturer. (Year). Product name technical data sheet. Manufacturer. URL',
    authors: ['Manufacturer'],
    year: 'Year',
    type: 'material-data-sheet',
    tags: ['template', 'materials'],
    summary: 'Template record. Replace with the specific properties the data sheet reports.',
    relevance: 'Which material record uses values from this sheet?',
    keyTakeaway: 'The property values taken from this document.',
    reliabilityNotes:
      'Data sheet values are manufacturer claims. Record the test method and conditions given; if none are stated, note that explicitly.',
    evidence: 'manufacturer-claim',
    placeholder: true,
  },
];

export const sourceTypeLabels: Record<SourceType, string> = {
  'academic-paper': 'Academic paper',
  book: 'Book',
  standard: 'Standard',
  patent: 'Patent',
  'manufacturer-document': 'Manufacturer document',
  'material-data-sheet': 'Material data sheet',
  'industry-article': 'Industry article',
  video: 'Video',
  interview: 'Interview',
  'supplier-information': 'Supplier information',
  other: 'Other',
};

export const citationStyleNote = 'References follow APA 7th edition.';

export function getSource(id: string): Source | undefined {
  return sources.find((source) => source.id === id);
}

/** Real, non-placeholder sources only. Drives the "sources reviewed" metric. */
export function getRealSources(): Source[] {
  return sources.filter((source) => !source.placeholder);
}
