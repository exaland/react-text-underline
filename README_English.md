# react-text-highlight

  **Author: Exaland Concept - Alexandre MAGNIER**

> Premium highlighting & underlining components for React.

8 animated variants: **marker**, **brushstroke**, **gradient**, **slide**, **glow**, **scratch**, **double**, **wave**.

## Installation

```bash
npm install react-text-highlight
# or
yarn add react-text-highlight
# or
pnpm add react-text-highlight
```

> This component uses Tailwind CSS classes. Make sure Tailwind is configured in your project.

## Usage

```tsx
import TextHighlight from 'react-text-highlight';

<TextHighlight variant="marker" color="yellow">

express delivery
</TextHighlight>
```

## Variants

| Variant | Description |

|----------------|-------------------------------------------|
| `marker` | Fluorescent marker on hover |

| `brushstroke` | SVG brush stroke under text |

| `gradient` | Animated gradient underline on hover |

| `slide` | Colored background that slides from the left |

| `glow` | Glowing text with colored halo |

| `scratch` | Irregular pencil stroke |

| `double` | Elegant double line |

| `wave` | SVG wavy underline |

## Available Colors

`yellow` · `cyan` · `green` · `pink` · `orange` · `purple` · `blue` · `red` · `neonCyan` · `neonPurple` · `neonGreen`

## Props

| Prop | Type | Default | Description |

|-------------|--------------------|------------|--------------------------------------|
| `variant` | `HighlightVariant` | `'marker'` | Highlight Style |

| `color` | `HighlightColor` | `'yellow'` | Effect Color |

| `animate` | `boolean` | `true` | Enables hover animation |

| `className` | `string` | `''` | Additional CSS Classes |

| `children` | `ReactNode` | — | Text to Highlight |

## Examples

```tsx
// Permanent Brushstroke (no hover)
<TextHighlight variant="brushstroke" color="cyan" animate={false}>
mobile applications
</TextHighlight>

// Gradient Underline on Hover
<TextHighlight variant="gradient" color="purple">

Discover
</TextHighlight>

// Sliding Background
<TextHighlight variant="slide" color="green">

proven
</TextHighlight>

// Neon Glow Text
<TextHighlight variant="glow" color="neonCyan">
BRAND NAME
</TextHighlight>

// Permanent Pencil Line
<TextHighlight variant="scratch" color="orange" animate={false}>
custom
</TextHighlight>

// Double Line
<TextHighlight variant="double" color="pink">
expertise
</TextHighlight>

// Wavy Underline
<TextHighlight variant="wave" color="blue">
solutions turnkey
</TextHighlight>
```

## Build

```bash
npm run build
```

## License

MIT