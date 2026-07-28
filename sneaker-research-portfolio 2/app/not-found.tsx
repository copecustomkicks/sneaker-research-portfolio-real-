import Link from 'next/link';
import type { Metadata } from 'next';
import { navigation } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="shell py-20 sm:py-28">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
        That page is not part of this portfolio
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
        The address may have changed, or the page may not have been written yet. Everything published
        so far is listed below.
      </p>

      <div className="mt-12 grid gap-x-10 gap-y-9 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="eyebrow mb-3">{group.label}</p>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-ink hover:text-uf-blue hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12">
        <Link href="/" className="text-[0.9375rem] font-medium text-uf-blue hover:underline">
          Return to the portfolio home page
        </Link>
      </p>
    </div>
  );
}
