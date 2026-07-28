import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ResearchPhase } from '@/types';

/**
 * The "you are here" strip: eleven segments, one per phase.
 *
 * This is the single clearest statement of project status on the site — a
 * reviewer should understand where things stand without reading a sentence.
 */
export function PhaseStrip({
  phases,
  currentId,
  showLabels = true,
}: {
  phases: ResearchPhase[];
  currentId: string;
  showLabels?: boolean;
}) {
  const currentIndex = phases.findIndex((phase) => phase.id === currentId);

  return (
    <div>
      <ol className="flex gap-1" aria-label="Research phase progress">
        {phases.map((phase, index) => {
          const done = index < currentIndex;
          const current = index === currentIndex;

          return (
            <li key={phase.id} className="flex-1">
              <Link
                href={`/roadmap#${phase.id}`}
                title={`Phase ${phase.number}: ${phase.name}`}
                className="group block"
              >
                <span
                  className={cn(
                    'block h-2 rounded-full transition-colors',
                    done && 'bg-uf-blue',
                    current && 'bg-uf-orange',
                    !done && !current && 'bg-rule group-hover:bg-rule-strong'
                  )}
                />
                <span className="sr-only">
                  Phase {phase.number}, {phase.name},{' '}
                  {done ? 'complete' : current ? 'in progress' : 'not started'}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      {showLabels && (
        <div className="mt-2 flex justify-between font-mono text-micro uppercase text-ink-faint">
          <span>Phase 1</span>
          <span>Phase {phases.length}</span>
        </div>
      )}
    </div>
  );
}
