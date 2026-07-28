import { cn } from '@/lib/utils';

/**
 * Renders trusted Markdown that has already been converted to HTML by
 * lib/markdown.ts. Raw HTML in the source file is stripped during that
 * conversion, so nothing user-authored reaches the DOM unsanitized.
 */
export function Prose({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={cn('prose prose-research max-w-prose', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** For hand-written JSX content that should match the Markdown styling. */
export function ProseBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('prose prose-research max-w-prose', className)}>{children}</div>;
}
