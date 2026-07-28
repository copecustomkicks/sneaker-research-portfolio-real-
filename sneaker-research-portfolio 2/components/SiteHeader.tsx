'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, site } from '@/lib/site';
import { cn } from '@/lib/utils';

/** Shown inline on wide screens. The full set lives in the panel. */
const primaryLinks = [
  { label: 'Overview', href: '/overview' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Research log', href: '/research-log' },
  { label: 'Materials', href: '/materials' },
  { label: 'Prototypes', href: '/prototypes' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the panel on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the panel and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (open) panelRef.current?.querySelector('a')?.focus();
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/92 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <LayerMark />
          <span className="min-w-0">
            <span className="block truncate text-[0.9375rem] font-semibold leading-tight text-ink group-hover:text-uf-blue">
              {site.researcher}
            </span>
            <span className="eyebrow block truncate">Sneaker engineering research</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={cn(
                      'rounded-[3px] px-3 py-2 text-[0.875rem] font-medium transition-colors',
                      isActive(link.href)
                        ? 'text-uf-blue underline decoration-2 underline-offset-[6px]'
                        : 'text-ink-muted hover:bg-paper-sunken hover:text-ink'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="section-menu"
            className="ml-1 flex items-center gap-2 rounded-[3px] border border-rule-strong bg-paper-raised px-3 py-2 font-mono text-micro uppercase text-ink transition-colors hover:bg-paper-sunken"
          >
            <span className="flex flex-col gap-[3px]" aria-hidden="true">
              <span className={cn('h-px w-3.5 bg-ink transition-transform', open && 'translate-y-[4px] rotate-45')} />
              <span className={cn('h-px w-3.5 bg-ink transition-opacity', open && 'opacity-0')} />
              <span className={cn('h-px w-3.5 bg-ink transition-transform', open && '-translate-y-[4px] -rotate-45')} />
            </span>
            {open ? 'Close' : 'Sections'}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="section-menu"
          ref={panelRef}
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-rule bg-paper-raised shadow-lift"
        >
          <nav aria-label="All sections" className="shell py-8">
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {navigation.map((group) => (
                <li key={group.label}>
                  <p className="eyebrow mb-3 border-b border-rule pb-2">{group.label}</p>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          className="group block"
                        >
                          <span
                            className={cn(
                              'block text-[0.9375rem] font-medium group-hover:text-uf-blue group-hover:underline',
                              isActive(item.href) ? 'text-uf-blue' : 'text-ink'
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-muted">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

/**
 * Identity mark: three stacked layers reading as an outsole, midsole, and
 * upper in section. Original geometry — no brand reference.
 */
function LayerMark() {
  return (
    <svg
      viewBox="0 0 28 28"
      className="h-7 w-7 shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="18.5" width="24" height="5" rx="2.5" className="fill-ink" />
      <rect x="3.5" y="12" width="21" height="5" rx="2.5" className="fill-rule-strong" />
      <path
        d="M5 10.5V8.5C5 6 7 4 9.5 4h6.5c3.5 0 7 2.5 7 6.5"
        className="stroke-uf-blue"
        strokeWidth="1.75"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
