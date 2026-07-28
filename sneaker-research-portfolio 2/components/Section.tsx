import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Rendered at the top-right of the heading row. */
  action?: React.ReactNode;
  as?: 'section' | 'div';
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  action,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag id={id} className={cn('py-12 sm:py-16', className)}>
      {(eyebrow || title || description || action) && (
        <div className="mb-8 flex flex-col gap-4 border-b border-rule pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-prose">
            {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
            {title && <h2 className="text-2xl sm:text-[1.75rem]">{title}</h2>}
            {description && (
              <div className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{description}</div>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </Tag>
  );
}

/** The recurring monospace key/value rail. */
export function SpecRail({
  items,
  columns = 2,
  className,
}: {
  items: { label: string; value: React.ReactNode }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <dl className={cn('spec-rail grid grid-cols-1 gap-x-8 gap-y-5', gridCols, className)}>
      {items.map((item) => (
        <div key={item.label} className="border-t border-rule pt-3">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A labeled list used throughout the reference pages. */
export function LabeledList({
  label,
  items,
  empty = 'Not yet recorded',
}: {
  label: string;
  items: string[];
  empty?: string;
}) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      {items.length === 0 ? (
        <p className="text-[0.9375rem] text-ink-muted">{empty}</p>
      ) : (
        <ul className="space-y-1.5 text-[0.9375rem] leading-relaxed text-ink">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
