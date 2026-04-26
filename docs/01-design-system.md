# 01 — Design System

## Concepto

"Mundial Marayui" — la casa como base de operaciones durante la última semana de fase de grupos del Mundial 2026 real. Estética: **lujo deportivo argentino + casa de campo + revista deportiva premium**. Mezcla de:

- Editorial deportivo (The Players' Tribune, Copa90, GQ Sport)
- Stripe / Linear minimalismo (espacios negativos, tipografía contundente, microinteracciones precisas)
- Toques mundialistas: trofeo, banderines, números grandes tipo número de camiseta

**NO usar el imaginario gráfico oficial de FIFA/Mundial 2026** (logos, mascotas, marcas registradas). Inspirate en la estética sin copiar nada con copyright.

## Paleta

```css
:root {
  /* Fondos */
  --bg-base: #0A0A0B;          /* fondo principal, negro profundo */
  --bg-elevated: #141418;      /* superficies elevadas, cards */
  --bg-elevated-2: #1C1C22;    /* hovers, segundo nivel */

  /* Texto */
  --text-primary: #F5F5F0;     /* off-white, NO blanco puro */
  --text-secondary: #A8A8AA;   /* texto secundario */
  --text-tertiary: #6B6B70;    /* captions, microcopy */

  /* Acentos */
  --accent-celeste: #6FB6E0;   /* celeste argentino oscurecido */
  --accent-celeste-deep: #5BA8D4;
  --accent-gold: #E8B547;      /* sol/dorado/trofeo */
  --accent-green: #3D7A4E;     /* verde cancha, sutil */
  --accent-red: #E25C4A;       /* alertas, partido importante */

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
}
```

## Tipografía

Importar de Google Fonts con `display=swap`:

- **Display / títulos**: `Fraunces` (700-900). Para los heros, activar:
  ```css
  font-variation-settings: 'SOFT' 100, 'WONK' 1;
  ```
- **Body / UI**: `Inter` (400, 500, 600, 700).
- **Números**: siempre con `font-variant-numeric: tabular-nums;` para que no salten.

## Escala tipográfica

```css
--font-hero: clamp(3.5rem, 9vw, 8rem);          /* hero principal */
--font-display: clamp(2.5rem, 6vw, 5rem);       /* títulos de sección */
--font-h2: clamp(1.75rem, 3.5vw, 2.5rem);
--font-h3: 1.5rem;
--font-body: 1.0625rem;                          /* 17px */
--font-small: 0.875rem;
--font-caption: 0.75rem;                         /* uppercase, tracking-wide */
```

Las captions van con `letter-spacing: 0.12em; text-transform: uppercase;`.

## Espaciado

Sistema de 4px. Variables base:

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
--space-32: 8rem;     /* separación entre secciones grandes */
```

## Animaciones — esto es donde se gana o se pierde

Tomalo en serio. Una animación mediocre es peor que ninguna animación.

### Reglas no negociables

1. **Easing**: NUNCA `ease` por defecto.
   - Entradas: `cubic-bezier(0.22, 1, 0.36, 1)` (out-quint, suave al final)
   - Movimientos suaves: `cubic-bezier(0.65, 0, 0.35, 1)` (in-out)
   - Exits: `cubic-bezier(0.7, 0, 0.84, 0)` (in-quint)

2. **Duración**:
   - Micro-interacciones (hover, focus): 150-250ms
   - Entradas de sección: 600-900ms
   - Hero inicial: hasta 1200ms (es el único que puede ser largo)

3. **Scroll-driven**: usar `IntersectionObserver` para activar entradas de sección.
   - Stagger de elementos hijos: 60-80ms entre uno y otro
   - Translate-Y inicial: 24px
   - Opacidad: 0 → 1

4. **Parallax**: solo en el hero y en la sección de la casa. Usar `transform: translate3d`, NO `top` ni `margin`. Sutil: máximo 30% del scroll real.

5. **Hover states** en cards: lift de -4px con sombra que aparece, en 200ms.

6. **Loading inicial de `home.html`**: el título del hero se compone letra por letra (split text) con stagger de 30ms, en 1.2s.

7. **Reduced motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 200ms !important;
       scroll-behavior: auto !important;
     }
     .parallax { transform: none !important; }
   }
   ```
   Las opacity transitions de 200ms se mantienen.

## Iconografía

- SVG inline para íconos de UI (flechas, checkmarks, close).
- Lucide ([lucide.dev](https://lucide.dev)) si necesitás más — son SVG sueltos open source. Usalos inline, NO via CDN runtime.
- Emojis SOLO en el cronograma de actividades (🔥 parrilla, 🏌️ golf, etc.) porque dan calidez. NO emojis para UI.

## Ruido / textura

El hero tiene un grano sutil. Implementarlo con SVG inline + CSS filter, NO con imagen:

```html
<svg class="noise" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
    <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.04 0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" />
</svg>
```

Posicionarlo absoluto, `pointer-events: none; mix-blend-mode: overlay; opacity: 0.6;`.

## Responsive

Mobile-first. Breakpoints:

```css
/* base: 0 - 639px (mobile) */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1440px) { /* xl */ }
```

El sitio tiene que verse perfecto en un iPhone vertical (375-414px de ancho). Probalo mentalmente ahí primero.
