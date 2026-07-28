import { cn } from '@/lib/utils';

type CalloutTone = 'note' | 'provisional' | 'safety' | 'integrity';

const tones: Record<CalloutTone, { wrap: string; label: string }> = {
  note: { wrap: 'border-rule bg-paper-raised', label: 'text-ink-muted' },
  provisional: { wrap: 'border-rule-strong bg-paper-sunken hatch', label: 'text-ink-muted' },
  safety: { wrap: 'border-uf-orange/35 bg-uf-orange-soft', label: 'text-uf-orange' },
  integrity: { wrap: 'border-uf-blue/25 bg-uf-blue-soft', label: 'text-uf-blue-deep' },
};

export function Callout({
  tone = 'note',
  title,
  children,
  className,
}: {
  tone?: CalloutTone;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn('rounded-card border px-5 py-4', tones[tone].wrap, className)}>
      <p className={cn('eyebrow mb-1.5', tones[tone].label)}>{title}</p>
      <div className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

export function EmptyState({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="hatch rounded-card border border-dashed border-rule-strong px-6 py-14 text-center">
      <h3 className="text-lg">{title}</h3>
      <div className="mx-auto mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">
        {children}
      </div>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
