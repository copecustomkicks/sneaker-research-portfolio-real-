import { cn } from '@/lib/utils';

/**
 * Accessible data table.
 * - `caption` is required so every table is described for screen readers.
 * - The horizontal scroll container is focusable and labeled, so keyboard
 *   users can scroll a wide table without a pointer.
 */
export function DataTable({
  caption,
  columns,
  rows,
  className,
  captionVisible = true,
}: {
  caption: string;
  columns: string[];
  rows: React.ReactNode[][];
  className?: string;
  captionVisible?: boolean;
}) {
  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className={cn('overflow-x-auto rounded-card border border-rule bg-paper-raised', className)}
    >
      <table className="w-full min-w-[38rem] text-left text-[0.9375rem]">
        <caption
          className={cn(
            'px-4 py-3 text-left text-[0.9375rem] text-ink-muted',
            captionVisible ? 'caption-top border-b border-rule' : 'sr-only'
          )}
        >
          {caption}
        </caption>
        <thead>
          <tr className="bg-paper-sunken">
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="border-b border-rule-strong px-4 py-2.5 font-mono text-micro font-semibold uppercase text-ink"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-rule last:border-0 align-top">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 leading-snug">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Horizontal 0–100 bar. Uses a progressbar role so the value is announced. */
export function ProgressBar({
  value,
  label,
  size = 'md',
}: {
  value: number;
  label: string;
  size?: 'sm' | 'md';
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn('w-full overflow-hidden rounded-full bg-paper-sunken', size === 'sm' ? 'h-1.5' : 'h-2')}
    >
      <div
        className="h-full rounded-full bg-uf-blue transition-[width] duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
