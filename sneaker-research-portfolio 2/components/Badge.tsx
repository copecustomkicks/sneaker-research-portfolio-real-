import { cn } from '@/lib/utils';
import { getEvidence } from '@/data/evidence';
import type { EvidenceType } from '@/types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'blue' | 'orange' | 'green' | 'outline';
  className?: string;
  title?: string;
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'bg-paper-sunken text-ink border-rule-strong',
  blue: 'bg-uf-blue-soft text-uf-blue-deep border-uf-blue/25',
  orange: 'bg-uf-orange-soft text-uf-orange border-uf-orange/25',
  green: 'bg-[#E6F0E9] text-[#1F4D33] border-[#1F4D33]/25',
  outline: 'bg-transparent text-ink-muted border-rule-strong border-dashed',
};

export function Badge({ children, variant = 'neutral', className, title }: BadgeProps) {
  return (
    <span
      title={title}
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-[3px] border px-2 py-0.5 font-mono text-micro font-medium uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Evidence-type badge. The label vocabulary is defined in data/evidence.ts. */
export function EvidenceBadge({ type, full = false }: { type: EvidenceType; full?: boolean }) {
  const evidence = getEvidence(type);
  return (
    <span
      title={evidence.definition}
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-[3px] border px-2 py-0.5 font-mono text-micro font-medium uppercase',
        evidence.className
      )}
    >
      {full ? evidence.label : evidence.short}
    </span>
  );
}

const statusVariant: Record<string, BadgeProps['variant']> = {
  complete: 'green',
  'in-progress': 'blue',
  'not-started': 'outline',
  blocked: 'orange',
  deferred: 'outline',
  researching: 'outline',
  candidate: 'blue',
  selected: 'green',
  rejected: 'orange',
  tested: 'green',
  draft: 'outline',
  'under-review': 'blue',
  decided: 'green',
  proposed: 'outline',
  accepted: 'green',
  superseded: 'outline',
  reversed: 'orange',
  'not-yet-available': 'outline',
  drafting: 'blue',
  available: 'green',
  'not-sourced': 'outline',
  identified: 'blue',
  ordered: 'blue',
  received: 'green',
};

export function StatusBadge({ status, label }: { status: string; label?: string }) {
  const text = label ?? status.replace(/-/g, ' ');
  return <Badge variant={statusVariant[status] ?? 'neutral'}>{text}</Badge>;
}
