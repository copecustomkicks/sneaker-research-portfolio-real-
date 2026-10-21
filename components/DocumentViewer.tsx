/**
 * Primary-document block for a research-log entry: an embedded PDF viewer
 * with "open" and "download" actions. Set it from a log entry's frontmatter:
 *
 *   document: "/documents/my-file.pdf"
 *   documentTitle: "Readable title"
 *   documentMeta: "PDF · 15 pages · 4.7 MB"
 *   documentNote: "One line of context shown under the title."
 *
 * Phones get the buttons only — mobile browsers don't render embedded PDFs
 * reliably, but they open the file fine in their own viewer.
 */
export function DocumentViewer({
  href,
  title,
  meta,
  note,
}: {
  href: string;
  title: string;
  meta?: string;
  note?: string;
}) {
  const fileName = href.split('/').pop();

  return (
    <section aria-labelledby="primary-document" className="card overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-rule px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="eyebrow mb-1.5">Primary document{meta ? ` · ${meta}` : ''}</p>
          <h2 id="primary-document" className="text-xl leading-snug">
            {title}
          </h2>
          {note && <p className="mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-muted">{note}</p>}
        </div>
        <div className="flex shrink-0 flex-wrap gap-2.5">
          <a
            href={href}
            target="_blank"
            rel="noopener"
            className="rounded-[3px] bg-uf-blue px-5 py-2.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-uf-blue-deep"
          >
            Open PDF
          </a>
          <a
            href={href}
            download={fileName}
            className="rounded-[3px] border border-rule-strong px-5 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-uf-blue hover:text-uf-blue"
          >
            Download
          </a>
        </div>
      </div>
      <div className="hidden bg-paper-sunken sm:block">
        <iframe
          src={`${href}#view=FitH`}
          title={title}
          className="block h-[78vh] max-h-[960px] min-h-[520px] w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
