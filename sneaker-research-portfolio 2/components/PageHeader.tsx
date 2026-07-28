import Link from 'next/link';
import { Callout } from '@/components/Callout';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-micro uppercase text-ink-muted">
        <li>
          <Link href="/" className="hover:text-uf-blue hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-rule-strong">
                /
              </span>
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-uf-blue hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className="text-ink">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  meta,
  notice,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
  meta?: React.ReactNode;
  /** Optional provisional / scope notice rendered under the lede. */
  notice?: string;
}) {
  return (
    <header className="border-b border-rule pb-10 pt-8 sm:pt-12">
      <Breadcrumbs items={crumbs} />
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="max-w-4xl text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{title}</h1>
      {lede && <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{lede}</p>}
      {meta && <div className="mt-7">{meta}</div>}
      {notice && (
        <Callout tone="provisional" title="Provisional" className="mt-7 max-w-3xl">
          {notice}
        </Callout>
      )}
    </header>
  );
}
