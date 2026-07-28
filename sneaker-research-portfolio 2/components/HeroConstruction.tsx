/**
 * SIGNATURE GRAPHIC — layered sneaker section, drawn as flat vector geometry.
 *
 * This is the hero's thesis: a shoe is a stack of engineered layers, and this
 * project is about what each one is and why. All geometry is original and
 * generic. No brand marks, silhouettes, or trade dress are reproduced.
 *
 * Decorative: hidden from assistive technology, with the layer names also
 * present as real text elsewhere on the page.
 */
export function HeroConstruction() {
  const layers = [
    { id: 'upper', label: 'Upper', y: 0 },
    { id: 'lining', label: 'Lining and reinforcement', y: 1 },
    { id: 'strobel', label: 'Strobel / insole board', y: 2 },
    { id: 'midsole', label: 'Midsole', y: 3 },
    { id: 'outsole', label: 'Outsole', y: 4 },
  ];

  return (
    <div className="relative" aria-hidden="true">
      <svg
        viewBox="0 0 520 380"
        className="h-auto w-full motion-safe:animate-rise-in"
        role="presentation"
        focusable="false"
      >
        {/* Measurement grid */}
        <defs>
          <pattern id="hero-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#DEDACF" strokeWidth="1" />
          </pattern>
          <pattern id="hero-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#C4BFB2" strokeWidth="1.6" />
          </pattern>
        </defs>
        <rect width="520" height="380" fill="url(#hero-grid)" opacity="0.55" />

        {/* Exploded layer stack, top to bottom */}
        <g strokeLinejoin="round">
          {/* Upper — outline profile */}
          <path
            d="M60 118 C 66 78, 96 58, 132 58 L 214 58 C 262 58, 302 78, 344 100 L 404 100 C 436 100, 456 112, 456 118 Z"
            fill="#FFFFFF"
            stroke="#14181D"
            strokeWidth="2"
          />
          <path d="M132 58 L 132 118 M 214 58 L 214 118 M 300 78 L 288 118 M 344 100 L 344 118" stroke="#DEDACF" strokeWidth="1.5" />
          {/* Lace lines */}
          <path d="M148 74 L 196 90 M 152 88 L 200 104 M 156 102 L 204 116" stroke="#0021A5" strokeWidth="2" strokeLinecap="round" />

          {/* Lining and reinforcement */}
          <path d="M64 158 L 452 158 L 452 176 L 64 176 Z" fill="url(#hero-hatch)" stroke="#14181D" strokeWidth="1.75" />

          {/* Strobel board */}
          <path d="M62 196 L 454 196 L 454 214 L 62 214 Z" fill="#EFEDE7" stroke="#14181D" strokeWidth="1.75" />
          <path d="M70 205 L 446 205" stroke="#C4BFB2" strokeWidth="1.5" strokeDasharray="5 5" />

          {/* Midsole — the thick cushioning layer */}
          <path
            d="M58 234 C 58 234, 120 228, 260 228 C 380 228, 458 236, 458 236 L 458 288 C 458 288, 380 282, 260 282 C 120 282, 58 288, 58 288 Z"
            fill="#E4E0D6"
            stroke="#14181D"
            strokeWidth="2"
          />
          {/* Foam cell texture */}
          <g fill="#C4BFB2">
            {Array.from({ length: 26 }).map((_, index) => (
              <circle key={index} cx={78 + index * 14.5} cy={248 + (index % 3) * 12} r="2.6" />
            ))}
          </g>

          {/* Outsole with tread */}
          <path
            d="M56 306 C 56 302, 120 298, 260 298 C 384 298, 460 304, 460 308 L 460 336 C 460 340, 384 344, 260 344 C 120 344, 56 340, 56 336 Z"
            fill="#2C2E33"
            stroke="#14181D"
            strokeWidth="2"
          />
          <g stroke="#F7F6F3" strokeWidth="2.5" strokeLinecap="round">
            {Array.from({ length: 15 }).map((_, index) => (
              <line key={index} x1={78 + index * 26} y1="314" x2={78 + index * 26} y2="330" />
            ))}
          </g>
        </g>

        {/* Leader lines and layer index marks */}
        <g stroke="#0021A5" strokeWidth="1.25">
          {layers.map((layer, index) => {
            const y = [88, 167, 205, 258, 322][index];
            return <line key={layer.id} x1="470" y1={y} x2="500" y2={y} />;
          })}
        </g>
        <g fill="#0021A5" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontWeight="600">
          {layers.map((layer, index) => {
            const y = [92, 171, 209, 262, 326][index];
            return (
              <text key={layer.id} x="504" y={y}>
                {String(index + 1).padStart(2, '0')}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

/** The same layer vocabulary as real, readable text. */
export const heroLayers = [
  { number: '01', name: 'Upper', note: 'Wraps the foot and carries the closure' },
  { number: '02', name: 'Lining and reinforcement', note: 'Stiffeners hidden inside the assembly' },
  { number: '03', name: 'Strobel or insole board', note: 'Closes the bottom before the sole goes on' },
  { number: '04', name: 'Midsole', note: 'Cushioning and structure' },
  { number: '05', name: 'Outsole', note: 'Traction and abrasion resistance' },
];
