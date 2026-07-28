import type { Deliverable } from '@/types';

/**
 * FINAL DELIVERABLES
 *
 * Each item stays 'not-yet-available' until a real file or link exists.
 * To publish one:
 *   1. Put the file in public/documents/
 *   2. Set `href` to '/documents/your-file.pdf'
 *   3. Change `status` to 'available'
 * Setting `status` to 'available' without an `href` is caught at build time.
 */
export const deliverables: Deliverable[] = [
  {
    id: 'del-poster',
    title: 'Research poster',
    description:
      'Poster summarizing the research question, method, materials work, prototype, and results for the undergraduate research symposium.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-abstract',
    title: 'Abstract',
    description: 'Structured abstract covering purpose, method, results, and conclusions.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-thesis',
    title: 'Undergraduate honors thesis',
    description:
      'Full thesis document drawing on the research log, materials library, design records, and test results collected here.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-realization-thesis',
    title: 'EML4914 Undergraduate Realization Thesis',
    description:
      'Realization Thesis submission for the Department of Mechanical and Aerospace Engineering.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-slides',
    title: 'Presentation slides',
    description: 'Slide deck for the final project presentation.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-defense',
    title: 'Oral defense',
    description: 'Date, format, and any published materials from the oral defense.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-prototype',
    title: 'Final sneaker prototype',
    description:
      'Documentation of the final prototype: construction record, photographs, measurements, and known limitations.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-bom',
    title: 'Final bill of materials',
    description: 'Complete as-built bill of materials with suppliers, quantities, and actual costs.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-test-results',
    title: 'Test results package',
    description: 'Consolidated test records with raw data, calculations, uncertainty, and interpretation.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-lessons',
    title: 'Lessons learned',
    description:
      'What worked, what failed, and what would be done differently — including the failures that produced the most useful information.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
  {
    id: 'del-future-work',
    title: 'Future work',
    description: 'Questions this project raised but could not answer, and how they might be pursued.',
    dueWindow: 'Spring 2027',
    status: 'not-yet-available',
  },
];

export const deliverableStatusLabels: Record<Deliverable['status'], string> = {
  'not-yet-available': 'Not yet available',
  drafting: 'In progress',
  available: 'Available',
};
