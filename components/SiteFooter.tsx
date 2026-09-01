import Link from 'next/link';
import { navigation, site } from '@/lib/site';
import { sectionThemes } from '@/lib/sections';

/** Footer nav groups mirror the four section accents used across the site. */
const groupAccent: Record<string, string> = {
  [sectionThemes.project.label]: sectionThemes.project.accent,
  [sectionThemes.research.label]: sectionThemes.research.accent,
  [sectionThemes.build.label]: sectionThemes.build.accent,
  [sectionThemes.about.label]: sectionThemes.about.accent,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-rule bg-paper-raised">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <p className="eyebrow mb-3">Research portfolio</p>
            <p className="text-[0.9375rem] leading-relaxed text-ink">
              {site.shortName}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
              <span className="text-uf-blue">{site.researcher}</span> &middot; {site.major},{' '}
              <span className="text-uf-blue">{site.university}</span> &middot;{' '}
              <span className="text-uf-blue">{site.program}</span>
            </p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">
              Faculty mentor: <span className="text-uf-blue">{site.mentor}</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
              {navigation.map((group) => {
                const accent = groupAccent[group.label];
                return (
                  <li key={group.label}>
                    <p className="eyebrow mb-3" style={{ color: accent }}>
                      {group.label}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="text-[0.875rem] text-ink-muted hover:text-[var(--group-accent)] hover:underline"
                            style={{ '--group-accent': accent } as React.CSSProperties}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-micro uppercase text-ink-faint">
            &copy; {year} {site.researcher}. Active research record.
          </p>
          <p className="font-mono text-micro uppercase text-ink-faint">
            <Link href="/integrity" className="hover:text-uf-blue hover:underline">
              Research integrity
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
