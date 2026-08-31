import Link from 'next/link';
import { Badge, StatusBadge } from '@/components/Badge';
import { DataTable } from '@/components/DataTable';
import { LabeledList, SpecRail } from '@/components/Section';
import { formatDate } from '@/lib/utils';
import type { Prototype, PrototypeImage } from '@/types';

/**
 * Full record for one prototype or component experiment.
 *
 * Every section renders even when its data is empty, so a gap in the record
 * is visible rather than silently hidden.
 */
export function PrototypeRecord({ prototype }: { prototype: Prototype }) {
  return (
    <article id={prototype.id} className="card scroll-mt-24 p-6 sm:p-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="blue">{prototype.number}</Badge>
        <Badge variant="neutral">
          {prototype.kind === 'full-shoe' ? 'Full shoe' : 'Component experiment'}
        </Badge>
        <StatusBadge status={prototype.status} />
      </div>

      <h3 className="text-2xl leading-snug">{prototype.title}</h3>

      <SpecRail
        className="mt-6"
        columns={3}
        items={[
          { label: 'Date', value: formatDate(prototype.date) },
          { label: 'Purpose', value: prototype.purpose },
          { label: 'Hypothesis', value: prototype.hypothesis || 'None stated' },
        ]}
      />

      <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2 lg:grid-cols-3">
        <LabeledList label="Materials used" items={prototype.materialsUsed} />
        <LabeledList label="Processes used" items={prototype.processesUsed} />
        <LabeledList label="Tools" items={prototype.tools} />
      </div>

      {prototype.constructionSteps.length > 0 && (
        <div className="mt-8 border-t border-rule pt-7">
          <p className="eyebrow mb-3">Construction steps</p>
          <ol className="space-y-2 text-[0.9375rem] leading-relaxed text-ink">
            {prototype.constructionSteps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-mono text-micro text-ink-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {prototype.images.length > 0 && (
        <div className="mt-8 border-t border-rule pt-7">
          <p className="eyebrow mb-3">Photographs</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {prototype.images.map((image) => (
              <PrototypeFigure key={image.src} image={image} />
            ))}
          </div>
        </div>
      )}

      {prototype.measurements.length > 0 && (
        <div className="mt-8 border-t border-rule pt-7">
          <p className="eyebrow mb-3">Measurements</p>
          <DataTable
            caption={`Measurements recorded for ${prototype.number}, with the method used for each.`}
            captionVisible={false}
            columns={['Measurement', 'Value', 'Method']}
            rows={prototype.measurements.map((measurement) => [
              measurement.label,
              <span key="value" className="font-mono">
                {measurement.value}
              </span>,
              <span key="method" className="text-ink-muted">
                {measurement.method}
              </span>,
            ])}
          />
        </div>
      )}

      <div className="mt-8 border-t border-rule pt-7">
        <p className="eyebrow mb-2">Results</p>
        <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink">
          {prototype.results || 'Not yet recorded.'}
        </p>
      </div>

      <div className="mt-8 grid gap-8 border-t border-rule pt-7 sm:grid-cols-2">
        <LabeledList
          label="Testing completed"
          items={prototype.testingCompleted}
          empty="No testing performed on this build"
        />
        <LabeledList label="Failures" items={prototype.failures} empty="None recorded" />
        <LabeledList label="Lessons learned" items={prototype.lessonsLearned} />
        <LabeledList label="Design changes" items={prototype.designChanges} />
      </div>

      <SpecRail
        className="mt-8"
        columns={2}
        items={[
          { label: 'Next iteration', value: prototype.nextIteration || 'Not yet planned' },
          {
            label: 'Related log entries',
            value:
              prototype.relatedLogSlugs && prototype.relatedLogSlugs.length > 0 ? (
                <span className="flex flex-wrap gap-x-3 gap-y-1">
                  {prototype.relatedLogSlugs.map((slug) => (
                    <Link key={slug} href={`/research-log/${slug}`} className="text-[var(--accent)] hover:underline">
                      {slug}
                    </Link>
                  ))}
                </span>
              ) : (
                'None linked'
              ),
          },
        ]}
      />
    </article>
  );
}

/**
 * Local image with a caption. Uses a plain <img> rather than next/image
 * because these files are added by hand at unknown dimensions, and a missing
 * file should degrade to a caption rather than break the build.
 */
export function PrototypeFigure({ image }: { image: PrototypeImage }) {
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full rounded-card border border-rule bg-paper-sunken"
      />
      <figcaption className="mt-2 text-[0.875rem] leading-snug text-ink-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}
