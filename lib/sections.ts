/**
 * SECTION ACCENT COLORS — single source of truth.
 *
 * Each top-level nav group (see lib/site.ts) gets one accent color, applied
 * consistently via the `--accent` CSS variable (see the `.sec-*` rules in
 * app/globals.css) and, for the site header's active-nav state, directly
 * from `sectionThemes` below. Adjust a color once here and it updates
 * everywhere it is used.
 */

export type SectionKey = 'project' | 'research' | 'build' | 'about';

export interface SectionTheme {
  key: SectionKey;
  label: string;
  /** Hex value. Checked against the paper (#F7F6F3) and card (#FFFFFF)
   *  backgrounds for WCAG AA (4.5:1) before use — see contrast notes in
   *  the portfolio-cleanup-theming work. */
  accent: string;
}

export const sectionThemes: Record<SectionKey, SectionTheme> = {
  project: { key: 'project', label: 'Project', accent: '#2E5C86' },
  research: { key: 'research', label: 'Research', accent: '#9A3A2A' },
  build: { key: 'build', label: 'Build', accent: '#7A5B3E' },
  about: { key: 'about', label: 'About', accent: '#4A4038' },
};

/** Route prefixes mirroring the groups in lib/site.ts `navigation`. */
const routeSections: { prefix: string; section: SectionKey }[] = [
  { prefix: '/overview', section: 'project' },
  { prefix: '/roadmap', section: 'project' },
  { prefix: '/research-log', section: 'project' },
  { prefix: '/anatomy', section: 'research' },
  { prefix: '/materials', section: 'research' },
  { prefix: '/processes', section: 'research' },
  { prefix: '/sources', section: 'research' },
  { prefix: '/design', section: 'build' },
  { prefix: '/prototypes', section: 'build' },
  { prefix: '/testing', section: 'build' },
  { prefix: '/gallery', section: 'build' },
  { prefix: '/about', section: 'about' },
  { prefix: '/deliverables', section: 'about' },
  { prefix: '/integrity', section: 'about' },
];

/** Returns the section a path belongs to, or undefined for the home page and 404. */
export function getSectionForPath(pathname: string): SectionKey | undefined {
  const match = routeSections.find(
    (route) => pathname === route.prefix || pathname.startsWith(`${route.prefix}/`)
  );
  return match?.section;
}

/** CSS class that scopes the `--accent` variable to a section, for use on a page's root element. */
export function sectionClassName(section: SectionKey): string {
  return `sec-${section}`;
}
