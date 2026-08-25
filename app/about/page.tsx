import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SpecRail } from '@/components/Section';
import { Callout } from '@/components/Callout';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About the researcher',
  description: `${site.researcher} is a mechanical engineering student at the ${site.university} researching sneaker materials, construction, and manufacturing through the ${site.program}.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="shell pb-20">
      <PageHeader
        eyebrow="About the researcher"
        title={site.researcher}
        lede={`${site.major} student at the ${site.university}, researching how sneakers are engineered and manufactured through the ${site.program}.`}
        crumbs={[{ label: 'About' }]}
        meta={
          <SpecRail
            columns={4}
            items={[
              { label: 'University', value: site.university },
              { label: 'Major', value: site.major },
              { label: 'Anticipated graduation', value: site.graduation },
              { label: 'Faculty mentor', value: site.mentor },
            ]}
          />
        }
      />

            <Section eyebrow="Biography" title="Background">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-ink">
              <p>
                I am a mechanical engineering student at the University of Florida, graduating in{' '}
                {site.graduation}. My work centers on product development: material selection, CAD,
                prototyping, testing, and design for manufacturing.
              </p>
              <p>
                Since 2019 I have run Cope Custom Kicks, a hand-painted custom sneaker business, and
                customized more than fifty pairs. That work is all surface work — preparation, masking,
                paint, finishing, durability under real wear. It taught me how footwear materials behave
                in the hand, and made obvious how little I knew about why the shoe underneath is built
                the way it is.
              </p>
              <p>
                This project is my attempt to answer that with engineering methods rather than styling,
                and to move toward footwear product development as a career.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="card p-6">
                <p className="eyebrow mb-3">Relevant experience</p>
                <ul className="space-y-3 text-[0.9375rem] leading-relaxed text-ink">
                  {[
                    'Custom sneaker design and finishing — 50+ pairs since 2019',
                    'Surface preparation, masking, coatings, sealing, and durability assessment',
                    'Product development and iterative design',
                    'Material selection and design for manufacturing',
                    'CAD modeling and prototyping',
                    'Testing, quality control, and failure analysis',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 border-t border-rule pt-3 first:border-0 first:pt-0">
                      <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule-strong" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <p className="eyebrow mb-3">Contact</p>
                <ul className="space-y-3 text-[0.9375rem]">
                  <li>
                    <a href={`mailto:${site.email}`} className="text-uf-blue hover:underline">
                      Email {site.researcher.split(' ')[0]}
                    </a>
                    <span className="mt-0.5 block text-[0.875rem] text-ink-muted">{site.email}</span>
                  </li>
                  <li className="border-t border-rule pt-3">
                    {site.linkedin ? (
                      
                        href={site.linkedin}
                        className="text-uf-blue hover:underline"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        LinkedIn profile
                      </a>
                    ) : null}
                        className="text-uf-blue hover:underline"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        LinkedIn profile
                      </a>
                    ) : null}
                  </li>
                  <li className="border-t border-rule pt-3">
                    {site.resume ? (
                      <a href={site.resume} download className="text-uf-blue hover:underline">
                        Download résumé (PDF)
                      </a>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="h-full">
            <div className="card h-full overflow-hidden">
              <Image
                src="/images/aidan-copeland-headshot.jpg"
                alt="Aidan Copeland"
                width={640}
                height={920}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Academic context"
        title="Program and mentorship"
        description="This project is conducted for academic credit and is supervised."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: site.program,
              body: 'A University of Florida program pairing undergraduates with faculty mentors for an independent research project, culminating in a poster, presentation, and thesis.',
            },
            {
              title: 'Faculty mentorship',
              body: `Research is conducted under the direction of ${site.mentor}. Mentor feedback is recorded in the research log only when a conversation actually took place.`,
            },
            {
              title: 'Thesis pathway',
              body: 'The work is expected to support an undergraduate honors thesis and an EML4914 Undergraduate Realization Thesis in Mechanical and Aerospace Engineering.',
            },
          ].map((item) => (
            <article key={item.title} className="card p-6">
              <h3 className="text-lg leading-snug">{item.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Standing" title="What this portfolio does and does not claim">
        <Callout tone="integrity" title="An undergraduate research record">
          <p>
            This is documentation of an undergraduate research project in progress. It records what I
            have read, built, measured, and decided, along with the reasoning behind each. It does not
            represent professional footwear engineering credentials, and nothing here should be read
            as an authoritative reference on footwear design.
          </p>
          <p className="mt-3">
            Where a claim on this site comes from a source, that source is cited. Where it comes from
            my own observation or assumption, it is labeled as such. The{' '}
            <Link href="/integrity" className="text-uf-blue underline">
              research integrity page
            </Link>{' '}
            explains the labeling system in full.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
