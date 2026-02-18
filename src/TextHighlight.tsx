import React from 'react';

export type HighlightColor =
  | 'yellow'
  | 'cyan'
  | 'green'
  | 'pink'
  | 'orange'
  | 'purple'
  | 'blue'
  | 'red'
  | 'neonCyan'
  | 'neonPurple'
  | 'neonGreen';

export type HighlightVariant =
  | 'marker'
  | 'brushstroke'
  | 'gradient'
  | 'slide'
  | 'glow'
  | 'scratch'
  | 'double'
  | 'wave';

export interface TextHighlightProps {
  children: React.ReactNode;
  variant?: HighlightVariant;
  color?: HighlightColor;
  className?: string;
  animate?: boolean;
}

const COLORS: Record<HighlightColor, { highlight: string; text: string | null }> = {
  yellow:     { highlight: '#fde68a', text: null },
  cyan:       { highlight: '#a5f3fc', text: null },
  green:      { highlight: '#bbf7d0', text: null },
  pink:       { highlight: '#fbcfe8', text: null },
  orange:     { highlight: '#fed7aa', text: null },
  purple:     { highlight: '#ddd6fe', text: null },
  blue:       { highlight: '#bfdbfe', text: null },
  red:        { highlight: '#fecaca', text: null },
  neonCyan:   { highlight: '#06b6d4', text: '#fff' },
  neonPurple: { highlight: '#a855f7', text: '#fff' },
  neonGreen:  { highlight: '#22c55e', text: '#fff' },
};

const GRADIENTS: Record<HighlightColor, string> = {
  yellow:     'linear-gradient(90deg, #fde68a, #fbbf24)',
  cyan:       'linear-gradient(90deg, #a5f3fc, #22d3ee)',
  green:      'linear-gradient(90deg, #bbf7d0, #4ade80)',
  pink:       'linear-gradient(90deg, #fbcfe8, #f472b6)',
  orange:     'linear-gradient(90deg, #fed7aa, #fb923c)',
  purple:     'linear-gradient(90deg, #ddd6fe, #a78bfa)',
  blue:       'linear-gradient(90deg, #bfdbfe, #60a5fa)',
  red:        'linear-gradient(90deg, #fecaca, #f87171)',
  neonCyan:   'linear-gradient(90deg, #06b6d4, #0ea5e9)',
  neonPurple: 'linear-gradient(90deg, #a855f7, #ec4899)',
  neonGreen:  'linear-gradient(90deg, #22c55e, #84cc16)',
};

export function TextHighlight({
  children,
  variant = 'marker',
  color = 'yellow',
  className = '',
  animate = true,
}: TextHighlightProps) {
  const c = COLORS[color] ?? COLORS.yellow;

  /* ────────────────────────────── MARKER ── */
  if (variant === 'marker') {
    return (
      <span
        className={`relative px-1 ${className}`}
        style={{
          background: `linear-gradient(120deg, ${c.highlight} 0%, ${c.highlight} 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: animate ? '0% 55%' : '100% 55%',
          backgroundPosition: '0 88%',
          transition: 'background-size 0.5s cubic-bezier(0.4,0,0.2,1)',
          color: c.text ?? 'inherit',
        }}
        onMouseEnter={(e) =>
          animate && ((e.currentTarget as HTMLElement).style.backgroundSize = '100% 55%')
        }
        onMouseLeave={(e) =>
          animate && ((e.currentTarget as HTMLElement).style.backgroundSize = '0% 55%')
        }
      >
        {children}
      </span>
    );
  }

  /* ────────────────────────── BRUSHSTROKE ── */
  if (variant === 'brushstroke') {
    return (
      <span
        className={`relative inline-block ${className}`}
        style={{ color: c.text ?? 'inherit' }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-6px] w-full overflow-visible pointer-events-none"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          height="12"
        >
          <path
            d="M2 9 C30 3, 70 11, 100 7 C130 3, 160 10, 198 6"
            fill="none"
            stroke={c.highlight}
            strokeWidth="7"
            strokeLinecap="round"
            style={{
              strokeDasharray: 220,
              strokeDashoffset: animate ? 220 : 0,
              transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)',
            }}
            ref={(el) => {
              if (el && animate) {
                requestAnimationFrame(() => {
                  el.style.strokeDashoffset = '0';
                });
              }
            }}
          />
        </svg>
        {children}
      </span>
    );
  }

  /* ─────────────────────────────── SLIDE ── */
  if (variant === 'slide') {
    return (
      <span
        className={`relative inline-block cursor-default ${className}`}
        style={{ color: c.text ?? 'inherit' }}
      >
        <span
          className="absolute inset-0 origin-left"
          style={{
            background: c.highlight,
            transform: 'scaleX(0)',
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 0,
            borderRadius: 2,
          }}
          ref={(el) => {
            if (!el) return;
            const parent = el.parentElement;
            if (!animate) {
              el.style.transform = 'scaleX(1)';
              return;
            }
            parent?.addEventListener('mouseenter', () => (el.style.transform = 'scaleX(1)'));
            parent?.addEventListener('mouseleave', () => (el.style.transform = 'scaleX(0)'));
          }}
        />
        <span className="relative z-10">{children}</span>
      </span>
    );
  }

  /* ──────────────────────────── GRADIENT ── */
  if (variant === 'gradient') {
    return (
      <span
        className={`relative inline-block ${className}`}
        style={{ color: c.text ?? 'inherit' }}
      >
        {children}
        <span
          className="absolute bottom-0 left-0 h-[3px] rounded-full"
          style={{
            background: GRADIENTS[color] ?? GRADIENTS.yellow,
            width: animate ? '0%' : '100%',
            transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
          ref={(el) => {
            if (!el) return;
            const parent = el.parentElement;
            if (!animate) return;
            parent?.addEventListener('mouseenter', () => (el.style.width = '100%'));
            parent?.addEventListener('mouseleave', () => (el.style.width = '0%'));
          }}
        />
      </span>
    );
  }

  /* ───────────────────────────────── GLOW ── */
  if (variant === 'glow') {
    return (
      <span
        className={`relative inline-block font-bold ${className}`}
        style={{
          color: c.highlight,
          textShadow: `0 0 20px ${c.highlight}88, 0 0 40px ${c.highlight}44`,
          transition: 'text-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.textShadow = `0 0 10px ${c.highlight}, 0 0 30px ${c.highlight}cc, 0 0 60px ${c.highlight}66`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.textShadow = `0 0 20px ${c.highlight}88, 0 0 40px ${c.highlight}44`;
        }}
      >
        {children}
      </span>
    );
  }

  /* ─────────────────────────────── SCRATCH ── */
  if (variant === 'scratch') {
    return (
      <span className={`relative inline-block ${className}`}>
        {children}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-4px] w-full overflow-visible pointer-events-none"
          viewBox="0 0 200 8"
          preserveAspectRatio="none"
          height="8"
        >
          <path
            d="M1 5 C10 2, 20 7, 35 4 C50 1, 60 6, 80 4 C100 2, 115 7, 135 5 C155 3, 170 7, 199 4"
            fill="none"
            stroke={c.highlight}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7 C25 5, 50 8, 90 6 C120 4, 155 8, 198 6"
            fill="none"
            stroke={c.highlight}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </span>
    );
  }

  /* ─────────────────────────────── DOUBLE ── */
  if (variant === 'double') {
    return (
      <span className={`relative inline-block ${className}`}>
        {children}
        <span
          className="absolute inset-x-0 rounded-full"
          style={{ bottom: '-3px', height: '1px', background: c.highlight }}
        />
        <span
          className="absolute inset-x-0 rounded-full"
          style={{ bottom: '-7px', height: '3px', background: c.highlight }}
        />
      </span>
    );
  }

  /* ───────────────────────────────── WAVE ── */
  if (variant === 'wave') {
    return (
      <span className={`relative inline-block pb-2 ${className}`}>
        {children}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 w-full overflow-visible pointer-events-none"
          viewBox="0 0 200 6"
          preserveAspectRatio="none"
          height="6"
        >
          <path
            d="M0 3 Q10 0 20 3 Q30 6 40 3 Q50 0 60 3 Q70 6 80 3 Q90 0 100 3 Q110 6 120 3 Q130 0 140 3 Q150 6 160 3 Q170 0 180 3 Q190 6 200 3"
            fill="none"
            stroke={c.highlight}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return <span className={className}>{children}</span>;
}
