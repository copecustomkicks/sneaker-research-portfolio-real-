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
          <Link href="/" className="hover:text-[var(--accent)] hover:underline">
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
                <Link href={item.href} className="hover:text-[var(--accent)] hover:underline">
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

type PageHeaderLayout = 'stacked' | 'split' | 'banner';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
  meta?: React.ReactNode;
  /** Optional provisional / scope notice rendered near the lede. */
  notice?: string;
  /**
   * Arrangement of eyebrow/title/lede/meta. Varies the look of each page's
   * header without changing what's in it:
   *  - stacked: title and lede, meta stats in a full-width row below (default)
   *  - split: title/lede on the left, meta stats as a bordered card alongside
   *  - banner: meta stats as a slim strip above the title
   */
  layout?: PageHeaderLayout;
}

export function PageHeader({ eyebrow, title, lede, crumbs, meta, notice, layout = 'stacked' }: PageHeaderProps) {
  const eyebrowEl = <p className="eyebrow mb-3 text-[var(--accent)]">{eyebrow}</p>;
  const titleEl = (
    <h1 className="max-w-4xl text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{title}</h1>
  );
  const ledeEl = lede && (
    <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{lede}</p>
  );
  const noticeEl = notice && (
    <Callout tone="provisional" title="Provisional" className="mt-7 max-w-3xl">
      {notice}
    </Callout>
  );

  if (layout === 'banner') {
    return (
      <header className="border-b border-[var(--accent)] pb-10 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        {meta && (
          <div className="mb-8 rounded-card border border-rule bg-paper-raised px-5 py-4 sm:px-7">
            {meta}
          </div>
        )}
        {eyebrowEl}
        {titleEl}
        {ledeEl}
        {noticeEl}
      </header>
    );
  }

  if (layout === 'split') {
    return (
      <header className="border-b border-[var(--accent)] pb-10 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="grid gap-8 lg:grid-cols-[1fr_15rem] lg:gap-12">
          <div>
            {eyebrowEl}
            {titleEl}
            {ledeEl}
          </div>
          {meta && (
            <div className="rounded-card border border-[var(--accent)] p-5">{meta}</div>
          )}
        </div>
        {noticeEl}
      </header>
    );
  }

  return (
    <header className="border-b border-[var(--accent)] pb-10 pt-8 sm:pt-12">
      <Breadcrumbs items={crumbs} />
      {eyebrowEl}
      {titleEl}
      {ledeEl}
      {meta && <div className="mt-7">{meta}</div>}
      {noticeEl}
    </header>
  );
}
