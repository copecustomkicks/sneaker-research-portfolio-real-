/**
 * Single source of truth for site-wide identity and navigation.
 * Edit this file to change your name, the project title, the mentor, or the
 * production URL. Nothing else needs to change.
 */

export const site = {
  name: 'Engineering a Sneaker from Materials Research to Functional Prototype',
  shortName: 'Sneaker Materials and Manufacturing Research',
  tagline: 'An open research record of the materials, components, and manufacturing decisions behind an original sneaker.',
  researcher: 'Aidan Copeland',
  university: 'University of Florida',
  program: 'University Scholars Program',
  major: 'Mechanical Engineering',
  graduation: 'May 2027',
  mentor: 'Dr. Jessica Allen',
  mentorTitle: 'Faculty Research Mentor',
  // TODO: replace with your real production URL after the first Vercel deploy.
  url: 'https://sneaker-research-portfolio.vercel.app',
  // TODO: replace with the email address you want reviewers to use.
  email: 'your.email@ufl.edu',
  // TODO: replace with your LinkedIn URL, or set to an empty string to hide the link.
  linkedin: '',
  // TODO: drop a PDF at public/documents/resume.pdf, then set this to '/documents/resume.pdf'.
  resume: '',
  // TODO: replace with your repository URL, or set to an empty string to hide the link.
  repository: '',
} as const;

export interface NavItem {
  label: string;
  href: string;
  description: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: 'Project',
    items: [
      { label: 'Overview', href: '/overview', description: 'Question, goal, scope, methodology, and timeline' },
      { label: 'Roadmap', href: '/roadmap', description: 'The eleven provisional research phases' },
      { label: 'Research log', href: '/research-log', description: 'Weekly entries, searchable and filterable' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Sneaker anatomy', href: '/anatomy', description: 'Component-by-component reference' },
      { label: 'Materials', href: '/materials', description: 'Candidate materials and comparisons' },
      { label: 'Processes', href: '/processes', description: 'Manufacturing and assembly methods' },
      { label: 'Sources', href: '/sources', description: 'Research library in APA format' },
    ],
  },
  {
    label: 'Build',
    items: [
      { label: 'Design process', href: '/design', description: 'Requirements, matrices, and decisions' },
      { label: 'Prototypes', href: '/prototypes', description: 'Iterations and component experiments' },
      { label: 'Testing', href: '/testing', description: 'Test records and evaluation areas' },
      { label: 'Gallery', href: '/gallery', description: 'Photographs, sketches, and documents' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Researcher', href: '/about', description: 'Background and contact' },
      { label: 'Deliverables', href: '/deliverables', description: 'Thesis, poster, and final outputs' },
      { label: 'Research integrity', href: '/integrity', description: 'Evidence labels and AI disclosure' },
    ],
  },
];

/** Flat list used for search, sitemaps, and the mobile menu. */
export const allNavItems: NavItem[] = navigation.flatMap((group) => group.items);
