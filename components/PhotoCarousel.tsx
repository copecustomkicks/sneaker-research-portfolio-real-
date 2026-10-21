'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface CarouselPhoto {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Swipeable photo carousel for research-log entries. Uses native scroll-snap,
 * so swipe and trackpad scrolling work without JS; the buttons and counter
 * are a progressive enhancement.
 *
 * Add photos in an entry's frontmatter under `photos:` and place `{{photos}}`
 * on its own line in the body where the carousel should appear.
 */
export function PhotoCarousel({ photos, label }: { photos: CarouselPhoto[]; label?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(Math.max(0, Math.min(photos.length - 1, i)));
  }, [photos.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + photos.length) % photos.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
  };

  const current = photos[index];

  return (
    <figure
      className="not-prose my-8"
      role="region"
      aria-roledescription="carousel"
      aria-label={label ?? 'Photo carousel'}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1);
        if (e.key === 'ArrowLeft') go(index - 1);
      }}
    >
      <div className="relative overflow-hidden rounded-card border border-rule bg-paper-sunken">
        <div
          ref={track}
          tabIndex={0}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] w-full shrink-0 snap-center"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${photos.length}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule-strong bg-paper-raised/90 text-ink shadow-sm transition-colors hover:text-uf-blue"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule-strong bg-paper-raised/90 text-ink shadow-sm transition-colors hover:text-uf-blue"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <figcaption className="min-h-[2.75rem] text-[0.875rem] leading-relaxed text-ink-muted" aria-live="polite">
          {current?.caption ?? current?.alt}
        </figcaption>
        <p className="shrink-0 font-mono text-micro uppercase text-ink-muted">
          {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </p>
      </div>

      {photos.length > 1 && (
        <div className="mt-3 flex gap-1.5" role="tablist" aria-label="Choose photo">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === index ? 'bg-uf-blue' : 'bg-rule-strong hover:bg-ink-muted'
              }`}
            />
          ))}
        </div>
      )}
    </figure>
  );
}
