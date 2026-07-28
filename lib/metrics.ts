import { getLogSummaries, getLatestEntry } from '@/lib/log';
import { getCurrentPhase, getOverallCompletion } from '@/data/phases';
import { materials } from '@/data/materials';
import { getRealSources } from '@/data/sources';
import { prototypes } from '@/data/prototypes';
import { tests } from '@/data/tests';
import { formatDate, sumBy } from '@/lib/utils';
import type { ProjectMetric } from '@/types';

/**
 * Every number on the progress dashboard is computed here from the actual
 * content files. Nothing is hard-coded. If a count reads as zero, that is
 * because the underlying data is empty — which is the correct thing to show.
 */

export const completionDisclaimer =
  'Overall completion is the average across the eleven roadmap phases — a planning estimate, not an academic grade.';

export function getProjectMetrics(): ProjectMetric[] {
  const entries = getLogSummaries();
  const latest = getLatestEntry();
  const currentPhase = getCurrentPhase();
  const realSources = getRealSources();
  const documentedHours = sumBy(entries, (entry) => entry.hours);
  const materialsEvaluated = materials.filter((material) => material.status !== 'researching').length;

  return [
    {
      id: 'current-phase',
      label: 'Current phase',
      value: `Phase ${currentPhase.number} — ${currentPhase.name}`,
      derivation: 'First phase in data/phases.ts still marked in-progress or not-started.',
      href: '/roadmap',
    },
    {
      id: 'completion',
      label: 'Overall completion',
      value: getOverallCompletion(),
      unit: '%',
      derivation: 'Mean of the completion values across all eleven phases. A planning estimate, not a grade.',
      href: '/roadmap',
    },
    {
      id: 'entries',
      label: 'Weekly entries',
      value: entries.length,
      derivation: 'Count of published Markdown files in content/research-log/.',
      href: '/research-log',
    },
    {
      id: 'hours',
      label: 'Documented hours',
      value: documentedHours,
      derivation: 'Sum of the `hours` field across every published research-log entry.',
      href: '/research-log',
    },
    {
      id: 'sources',
      label: 'Sources reviewed',
      value: realSources.length,
      derivation: 'Count of records in data/sources.ts that are not marked as placeholders.',
      href: '/sources',
    },
    {
      id: 'materials',
      label: 'Materials evaluated',
      value: materialsEvaluated,
      derivation: 'Material records that have moved past "researching" to candidate, selected, rejected, or tested.',
      href: '/materials',
    },
    {
      id: 'builds',
      label: 'Prototypes and experiments',
      value: prototypes.length,
      derivation: 'Count of records in data/prototypes.ts, including component experiments.',
      href: '/prototypes',
    },
    {
      id: 'tests',
      label: 'Test records',
      value: tests.length,
      derivation: 'Count of records in data/tests.ts.',
      href: '/testing',
    },
    {
      id: 'updated',
      label: 'Last updated',
      value: latest ? formatDate(latest.date) : 'No entries yet',
      derivation: 'Date of the newest published research-log entry.',
      href: latest ? `/research-log/${latest.slug}` : '/research-log',
    },
  ];
}

/** Cumulative hours by semester, newest semester first. */
export function getHoursBySemester(): { semester: string; hours: number; entries: number }[] {
  const buckets = new Map<string, { hours: number; entries: number }>();
  for (const entry of getLogSummaries()) {
    const bucket = buckets.get(entry.semester) ?? { hours: 0, entries: 0 };
    bucket.hours += entry.hours;
    bucket.entries += 1;
    buckets.set(entry.semester, bucket);
  }
  return Array.from(buckets, ([semester, value]) => ({ semester, ...value }));
}

export function getTotalDocumentedHours(): number {
  return sumBy(getLogSummaries(), (entry) => entry.hours);
}
