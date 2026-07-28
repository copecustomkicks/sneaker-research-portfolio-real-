import type { MetadataRoute } from 'next';
import { site, allNavItems } from '@/lib/site';
import { getLogSummaries } from '@/lib/log';

/** Generated at build time from the real route list — no manual maintenance. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getLogSummaries();
  const lastModified = entries[0]?.date ? new Date(entries[0].date) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...allNavItems.map((item) => ({
      url: `${site.url}${item.href}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  const logRoutes: MetadataRoute.Sitemap = entries.map((entry) => ({
    url: `${site.url}/research-log/${entry.slug}`,
    lastModified: new Date(entry.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...logRoutes];
}
