# CLAUDE.md — Mundial Marayui 2026

> Este archivo es tu briefing principal. Leé esto primero, después navegá a `docs/` según necesites.

## Qué estás construyendo

Un microsite single-page HTML para invitar a un finde de amigos/familia en una casa en Marayui (Chapadmalal, Buenos Aires), del **jueves 25 al domingo 28 de junio de 2026**. Es la última semana de fase de grupos del Mundial 2026 real, así que la temática es mundialista pero los partidos que mostramos son los partidos REALES del torneo, incluido **Argentina vs Jordania el sábado 27 a las 23:00 ART**.

> **Decisión 2026-04-26**: se descartó el gate de acceso con clave `Chapa26`. La privacidad real viene de: (1) repo GitHub privado, (2) `noindex/nofollow`, y (3) compartir la URL solo por WhatsApp con los invitados. El gate JS era seguridad-teatro y agregaba fricción innecesaria.

## Quién es el dueño

Adrian Aubone. Cuenta personal: `aubone79@gmail.com`. Cuenta profesional (Koronet): NO usar para esto.

## Stack

- HTML5 + CSS3 + JavaScript vanilla. CERO frameworks, CERO build, CERO npm.
- Deploy: GitHub Pages directo desde `main` / root del repo público. URL: `https://aubone79.github.io/marayui2026/`.
- Single-page real: todas las secciones en `index.html` con scroll. Sin gate.

## Estructura final esperada

```
/
├── CLAUDE.md                 (este archivo — no lo borres)
├── README.md                 (instrucciones para humanos)
├── index.html                (microsite single-page completo)
├── styles.css
├── app.js
├── docs/
│   ├── 01-design-system.md   (paleta, tipografía, animaciones)
│   ├── 02-sections.md        (las 8 secciones del microsite, en orden)
│   ├── 03-fixture-mundial.md (datos REALES del Mundial 2026 esos 4 días)
│   ├── 04-content-copy.md    (todos los textos en castellano rioplatense)
│   ├── 05-assets.md          (qué fotos buscar, qué placeholders dejar)
│   └── 06-tech-checklist.md  (performance, a11y, deploy, QA)
└── assets/
    ├── img/
    └── icons/
```

## Cómo trabajar

1. **Antes de escribir una sola línea de código**, leé en orden: `docs/01-design-system.md`, `docs/02-sections.md`, `docs/03-fixture-mundial.md`. Esos tres son no-negociables.
2. `docs/04-content-copy.md` tiene los textos exactos. **No los reescribas, no los "mejores".** Adrian eligió cada palabra. Copiá-pegá.
3. `docs/05-assets.md` te dice qué fotos descargar de fuentes públicas y dónde dejar slots vacíos para fotos personales que Adrian va a poner después.
4. `docs/06-tech-checklist.md` es tu QA antes de declarar "listo".

## Reglas duras

- **No inventes fixtures.** Los partidos del Mundial están en `docs/03-fixture-mundial.md` con datos reales chequeados. Usá esos. Si querés agregar más, pediselos a Adrian.
- **No uses logos oficiales** de FIFA, selecciones, o Mundial 2026. Banderas como emojis o círculos de color, sí. Escudos, no.
- **No agregues backend.** Todo estático. No formularios que envían a ningún lado.
- **No agregues tracking, analytics, cookies, ni nada que requiera consentimiento.** Es un evento privado.
- **No uses frameworks JS** (React, Vue, Svelte, etc.). Solo vanilla.
- **Respetá `prefers-reduced-motion`** en TODAS las animaciones.
- **El idioma es español rioplatense con voseo.** "Te anotás", no "te anotas". "Vení", no "ven".

## Modo de operación

Trabajá autónomamente. No me pidas confirmación de cada paso. Si algo es ambiguo, tomá la decisión más sobria/elegante posible y dejá un comentario `<!-- TODO Adrian: [decisión tomada y por qué] -->` en el HTML. Al final, hacé un resumen de:

1. Qué construiste
2. Qué placeholders quedaron pendientes para Adrian (link de WhatsApp, fotos personales, lista de confirmados)
3. Cualquier decisión de diseño que tomaste y vale la pena que Adrian sepa

## Empezá ahora

Leé los docs en orden y construí. Cuando termines, corré una QA mental contra `docs/06-tech-checklist.md` antes de avisar.
