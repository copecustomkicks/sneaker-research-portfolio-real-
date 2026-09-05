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
  {
    id: 'src-motawi-how-shoes-are-made',
    citation: 'Motawi, W. (n.d.). How shoes are made: A behind the scenes look at manufacturing.',
    authors: ['Motawi, W.'],
    year: 'n.d.',
    type: 'book',
    tags: ['anatomy', 'processes', 'construction', 'footbeds', 'lasts'],
    dateAccessed: '2026-09-05',
    summary:
      'Practitioner reference covering shoe manufacturing end to end: lasting, cemented (cold cement) and vulcanized sole construction, last measurement terminology and quality-control gauges, and footbed/sockliner construction types and materials.',
    relevance:
      'Primary source for this project’s manufacturing-process detail (cold cement vs. vulcanized construction, lasting sequence, last measurement terminology, last-gauge quality control) and for footbed/sockliner material options.',
    keyTakeaway:
      'Cold cement and vulcanized construction differ specifically in how and when the outsole is built and attached, not just in what adhesive is used; and footbed lifespan is governed by a foam’s compression-set resistance, not just its initial feel.',
    reliabilityNotes:
      'A practitioner/industry manufacturing guide rather than a peer-reviewed source. Author is a footwear industry professional (Wade Motawi). Exact publication year and edition were not visible on the pages reviewed and should be confirmed from the book’s copyright page before this citation is treated as complete.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-patent-resilin-footwear',
    citation:
      '(n.d.). Resilin material footwear and fabrication methods (U.S. Patent No. 11,178,934). U.S. Patent and Trademark Office. https://patents.google.com/patent/US11178934B2/',
    authors: [],
    year: 'n.d.',
    type: 'patent',
    url: 'https://patents.google.com/patent/US11178934B2/',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'terminology', 'construction'],
    summary:
      'Patent disclosure describing a resilin-based footwear construction, using explicit terminology for the vamp, throat, toe tip, heel counter, Strobel/lasting-board relationship, outsole, and adhesive assembly.',
    relevance:
      'Used as a terminology cross-check for external anatomy naming (vamp, throat, toe tip) and for how Strobel and lasting-board construction relate to the sole.',
    keyTakeaway:
      'Confirms that "Strobel" and "lasting board" describe two distinct bottom-closure approaches rather than interchangeable terms.',
    reliabilityNotes:
      'A patent describes one specific embodiment, not a universal definition — used here only for terminology and construction relationships, not as a claim about typical construction. Grant year and named inventor were not confirmed in this pass; verify against the patent record before citing formally.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-patent-midsole-methods',
    citation:
      '(2016). Article of footwear having a midsole and methods of making the same (U.S. Patent Application No. 2016/0302519 A1). U.S. Patent and Trademark Office. https://patents.google.com/patent/US20160302519A1',
    authors: [],
    year: '2016',
    type: 'patent',
    url: 'https://patents.google.com/patent/US20160302519A1',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'terminology', 'construction'],
    summary:
      'Patent application describing an upper, Strobel board, midsole, and outsole in an exploded arrangement, with alternative joining methods between layers.',
    relevance: 'Used to cross-check upper/Strobel/midsole/outsole terminology and how those layers interface and join.',
    keyTakeaway: 'Provides an explicit exploded-view breakdown of how the Strobel board sits between the upper and the midsole.',
    reliabilityNotes:
      'Describes one filed embodiment, not an industry standard. Application publication year is encoded in the publication number itself (2016), so it is treated as confirmed.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-patent-dual-layered-midsole',
    citation:
      '(n.d.). Dual-layered midsole (U.S. Patent No. 12,114,726). U.S. Patent and Trademark Office. https://patents.google.com/patent/US12114726B2/en',
    authors: [],
    year: 'n.d.',
    type: 'patent',
    url: 'https://patents.google.com/patent/US12114726B2/en',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'midsole', 'construction'],
    summary:
      'Patent describing a two-layer midsole construction, useful for reasoning about internal/external midsole zones, plates, Strobel components, outsoles, and sockliner arrangements.',
    relevance: 'Used as a reference for multi-density midsole terminology and how a plate and sockliner relate to a layered midsole.',
    keyTakeaway: 'Supports treating a dual-density midsole as one continuous sole system with distinct material regions, not two separate components.',
    reliabilityNotes:
      'Describes one specific embodiment. Grant year and named inventor were not confirmed in this pass; verify against the patent record before citing formally.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-patent-strobel-manufacturing',
    citation:
      '(2020). Strobel for an article of footwear and method of manufacturing (U.S. Patent Application No. 2020/0170340 A1). U.S. Patent and Trademark Office. https://patents.google.com/patent/US20200170340A1/en',
    authors: [],
    year: '2020',
    type: 'patent',
    url: 'https://patents.google.com/patent/US20200170340A1/en',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'strobel', 'construction'],
    summary: 'Patent application focused specifically on Strobel structure and how it relates to the rest of the sole assembly.',
    relevance: 'Primary source for distinguishing Strobel lasting from board lasting and for describing what the Strobel component physically does.',
    keyTakeaway: 'The Strobel is a flexible bottom closure sewn to the upper perimeter, functionally distinct from a stiffer lasting board.',
    reliabilityNotes:
      'Describes one filed embodiment. Application publication year is encoded in the publication number itself (2020), so it is treated as confirmed.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-shoemakers-academy-shoe-parts',
    citation: 'Shoemakers Academy. (n.d.). Shoe parts diagram. https://shoemakersacademy.com/shoe_parts_diagram/',
    authors: ['Shoemakers Academy'],
    year: 'n.d.',
    type: 'industry-article',
    url: 'https://shoemakersacademy.com/shoe_parts_diagram/',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'terminology'],
    summary: 'Specialist footwear-trade reference naming upper, reinforcement, midsole, outsole, and heel-part terminology.',
    relevance: 'Used as an independent, practitioner-side cross-check on the anatomy vocabulary used throughout this reference.',
    keyTakeaway: 'Confirmed that terms like vamp, quarter, and eyestay are used consistently outside of the patent literature.',
    reliabilityNotes:
      'A trade/practitioner reference rather than a peer-reviewed source; no publication date is given on the page. Used only to corroborate terminology already supported by other sources, not as a standalone authority.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-theseus-footwear-thesis',
    citation:
      '(n.d.). Description of footwear parts [Thesis]. Theseus. https://www.theseus.fi/bitstream/handle/10024/97235/Thesis.pdf?sequence=1',
    authors: [],
    year: 'n.d.',
    type: 'academic-paper',
    url: 'https://www.theseus.fi/bitstream/handle/10024/97235/Thesis.pdf?sequence=1',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'terminology'],
    summary: 'Academic thesis with labeled footwear diagrams and conventional component terminology.',
    relevance: 'Used as an academic cross-check on standard footwear terminology alongside the patent and trade sources.',
    keyTakeaway: 'Diagram labeling matched the anatomy vocabulary already drawn from the patents and Shoemakers Academy.',
    reliabilityNotes:
      'Author and publication year were not evident from the document; identified only by repository handle. Treat as corroborating, not primary, evidence until the author and year are confirmed.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-ncsu-fdra-footwear-materials',
    citation:
      'Leonas, K. (2018, September 29). Footwear materials and fabrication [Conference presentation]. Footwear Distributors and Retailers of America. https://fdra.org/wp-content/uploads/2018/10/KLeonasFDRASustainability-Sept-29-2018_3.pdf',
    authors: ['Leonas, K.'],
    year: '2018',
    type: 'industry-article',
    url: 'https://fdra.org/wp-content/uploads/2018/10/KLeonasFDRASustainability-Sept-29-2018_3.pdf',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'materials', 'fabrication'],
    summary: 'Industry/university presentation on footwear components, fabrication, and performance expectations.',
    relevance: 'Used as an industry-and-university cross-check on component and fabrication terminology ahead of next phase materials research.',
    keyTakeaway: 'Reinforced the component/fabrication vocabulary used in this week’s anatomy reference.',
    reliabilityNotes:
      'Author identified from the source filename; presentation slides rather than a peer-reviewed paper, so treated as industry context rather than primary evidence.',
    evidence: 'published-evidence',
    placeholder: false,
  },
  {
    id: 'src-auburn-footwear-anatomy-thesis',
    citation:
      "Li, G. (n.d.). An approach of applying one specific culture to footwear design through function and fashion [Master's thesis, Auburn University]. AUETD. https://auetd.auburn.edu/bitstream/handle/10415/9277/Gengfu_Li_An_Approach_of_Applying_One_Specific_Culture_to_Footwear_Design_Through_Function_and_Fashion.pdf?isAllowed=y&sequence=6",
    authors: ['Li, G.'],
    year: 'n.d.',
    type: 'academic-paper',
    url: 'https://auetd.auburn.edu/bitstream/handle/10415/9277/Gengfu_Li_An_Approach_of_Applying_One_Specific_Culture_to_Footwear_Design_Through_Function_and_Fashion.pdf?isAllowed=y&sequence=6',
    dateAccessed: '2026-09-04',
    tags: ['anatomy', 'terminology'],
    summary: 'Academic thesis reinforcing footwear anatomy terminology with disassembled-shoe observation examples.',
    relevance: 'Used as an academic reference for anatomy terminology and as an example of documenting a disassembled shoe.',
    keyTakeaway: 'Disassembly-based documentation examples informed the teardown documentation rules used in this reference.',
    reliabilityNotes: 'Author identified from the source filename; publication year was not evident from the document.',
    evidence: 'published-evidence',
    placeholder: false,
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
