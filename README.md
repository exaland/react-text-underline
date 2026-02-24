
# react-text-highlight

> [English Readme Here](https://github.com/exaland/react-text-underline/blob/main/README_EN.md)

  ![text-underline-new](https://github.com/user-attachments/assets/d7d0f759-fa54-4670-a904-842d7927392b)

  **Auteur: Exaland Concept - Alexandre MAGNIER**


<a href="https://www.buymeacoffee.com/exaland" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>



> Composants de surlignage & soulignage premium pour React.

  ## Demonstration
[Online Demonstration](https://exaland.github.io/react-text-underline/)

---

8 variants animés : **marker**, **brushstroke**, **gradient**, **slide**, **glow**, **scratch**, **double**, **wave**.

  

## Installation

  

```bash

npm  install  react-text-highlight

# ou

yarn  add  react-text-highlight

# ou

pnpm  add  react-text-highlight

```

  

> Ce composant utilise des classes [Tailwind CSS](https://tailwindcss.com). Assurez-vous que Tailwind est configuré dans votre projet.

  

## Usage

  

```tsx

import TextHighlight from  'react-text-highlight';

  

<TextHighlight  variant="marker"  color="yellow">

livraison express

</TextHighlight>

```

  

## Variants

  

| Variant | Description |

|----------------|-------------------------------------------|

| `marker` | Marqueur fluorescent au hover |

| `brushstroke` | Trait de pinceau SVG sous le texte |

| `gradient` | Underline dégradé animé au hover |

| `slide` | Fond coloré qui glisse depuis la gauche |

| `glow` | Texte lumineux avec halo coloré |

| `scratch` | Trait irrégulier façon crayon |

| `double` | Double ligne élégante |

| `wave` | Soulignage ondulé SVG |

  

## Couleurs disponibles

  

`yellow` · `cyan` · `green` · `pink` · `orange` · `purple` · `blue` · `red` · `neonCyan` · `neonPurple` · `neonGreen`

  

## Props

  

| Prop | Type | Défaut | Description |

|-------------|--------------------|------------|--------------------------------------|

| `variant` | `HighlightVariant` | `'marker'` | Style de mise en valeur |

| `color` | `HighlightColor` | `'yellow'` | Couleur de l'effet |

| `animate` | `boolean` | `true` | Active l'animation au hover |

| `className` | `string` | `''` | Classes CSS additionnelles |

| `children` | `ReactNode` | — | Texte à mettre en valeur |

  

## Exemples

  

```tsx

// Brushstroke permanent (sans hover)

<TextHighlight  variant="brushstroke"  color="cyan"  animate={false}>

applications mobiles

</TextHighlight>

  

// Underline dégradé au hover

<TextHighlight  variant="gradient"  color="purple">

Découvrir

</TextHighlight>

  

// Fond qui glisse

<TextHighlight  variant="slide"  color="green">

éprouvées

</TextHighlight>

  

// Texte brillant néon

<TextHighlight  variant="glow"  color="neonCyan">

BRAND NAME

</TextHighlight>

  

// Trait crayon permanent

<TextHighlight  variant="scratch"  color="orange"  animate={false}>

sur mesure

</TextHighlight>

  

// Double ligne

<TextHighlight  variant="double"  color="pink">

expertise

</TextHighlight>

  

// Soulignage ondulé

<TextHighlight  variant="wave"  color="blue">

solutions clé en main

</TextHighlight>

```

  

## Build

  

```bash

npm  run  build

```

  

## Licence

  

MIT