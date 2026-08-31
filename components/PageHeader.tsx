import { Callout } from '@/components/Callout';

type PageHeaderLayout = 'stacked' | 'split' | 'banner';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: string;
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

export function PageHeader({ eyebrow, title, lede, meta, notice, layout = 'stacked' }: PageHeaderProps) {
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
      <header className="border-b border-[var(--accent)] pt-8 pb-10 sm:pt-12">
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
      <header className="border-b border-[var(--accent)] pt-8 pb-10 sm:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_15rem] lg:items-center lg:gap-12">
          <div>
            {eyebrowEl}
            {titleEl}
            {ledeEl}
            {noticeEl}
          </div>
          {meta && (
            <div className="rounded-card border border-[var(--accent)] p-5">{meta}</div>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-[var(--accent)] pt-8 pb-10 sm:pt-12">
      {eyebrowEl}
      {titleEl}
      {ledeEl}
      {meta && <div className="mt-7">{meta}</div>}
      {noticeEl}
    </header>
  );
}
