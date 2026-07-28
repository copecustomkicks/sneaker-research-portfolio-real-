import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

/**
 * Palette notes
 * -------------
 * The site reads as a technical case study, not a school-spirit page.
 * UF blue is the single structural accent; UF orange appears only on
 * small status marks and never as a large fill.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F6F3', // warm off-white page background
          raised: '#FFFFFF', // cards
          sunken: '#EFEDE7', // wells, table headers
        },
        ink: {
          DEFAULT: '#14181D', // near-black body text
          muted: '#565C66', // secondary text (AA on paper)
          faint: '#7A818C', // metadata only, min 14px
        },
        rule: {
          DEFAULT: '#DEDACF', // hairline borders
          strong: '#C4BFB2',
        },
        uf: {
          blue: '#0021A5',
          'blue-soft': '#E7EAF6',
          'blue-deep': '#00187A',
          orange: '#C43A0E', // darkened from #FA4616 for AA contrast on light backgrounds
          'orange-soft': '#FBEAE3',
        },
        material: {
          foam: '#E4E0D6',
          rubber: '#2C2E33',
          leather: '#9C8468',
          textile: '#7E8B93',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      fontSize: {
        // Nothing smaller than 12px, and 12px is reserved for uppercase mono labels.
        micro: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        prose: '68ch',
        shell: '84rem',
      },
      borderRadius: {
        card: '0.375rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 24, 29, 0.04), 0 1px 12px rgba(20, 24, 29, 0.04)',
        lift: '0 2px 4px rgba(20, 24, 29, 0.06), 0 12px 28px rgba(20, 24, 29, 0.08)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      typography: () => ({
        research: {
          css: {
            '--tw-prose-body': '#14181D',
            '--tw-prose-headings': '#14181D',
            '--tw-prose-links': '#0021A5',
            '--tw-prose-bold': '#14181D',
            '--tw-prose-counters': '#565C66',
            '--tw-prose-bullets': '#C4BFB2',
            '--tw-prose-hr': '#DEDACF',
            '--tw-prose-quotes': '#14181D',
            '--tw-prose-quote-borders': '#0021A5',
            '--tw-prose-captions': '#565C66',
            '--tw-prose-code': '#14181D',
            '--tw-prose-th-borders': '#C4BFB2',
            '--tw-prose-td-borders': '#DEDACF',
            maxWidth: '68ch',
            a: { textUnderlineOffset: '3px' },
            'h2, h3, h4': { letterSpacing: '-0.015em', scrollMarginTop: '6rem' },
            code: {
              fontWeight: '500',
              backgroundColor: '#EFEDE7',
              padding: '0.15em 0.35em',
              borderRadius: '3px',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            table: { fontSize: '0.9375rem' },
            th: { backgroundColor: '#EFEDE7', padding: '0.5rem 0.75rem' },
            td: { padding: '0.5rem 0.75rem' },
            img: { borderRadius: '0.375rem', border: '1px solid #DEDACF' },
            figcaption: { fontSize: '0.875rem' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
