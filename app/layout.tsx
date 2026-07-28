import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.researcher}`,
    template: `%s — ${site.researcher}`,
  },
  description: site.tagline,
  applicationName: site.shortName,
  authors: [{ name: site.researcher }],
  keywords: [
    'footwear engineering',
    'sneaker materials',
    'shoe manufacturing',
    'mechanical engineering',
    'undergraduate research',
    'University Scholars Program',
    'University of Florida',
    'prototype development',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.shortName,
    title: `${site.shortName} — ${site.researcher}`,
    description: site.tagline,
    url: site.url,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${site.name}. Research portfolio by ${site.researcher}, ${site.university}.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.shortName} — ${site.researcher}`,
    description: site.tagline,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org description of the project, for search engines.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ResearchProject',
    name: site.name,
    alternateName: site.shortName,
    description: site.tagline,
    url: site.url,
    founder: {
      '@type': 'Person',
      name: site.researcher,
      affiliation: { '@type': 'CollegeOrUniversity', name: site.university },
    },
    parentOrganization: { '@type': 'CollegeOrUniversity', name: site.university },
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[3px] focus:border focus:border-uf-blue focus:bg-paper-raised focus:px-4 focus:py-2 focus:text-[0.875rem] focus:font-medium focus:text-uf-blue"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
