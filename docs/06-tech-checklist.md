# 06 — Tech Checklist

QA antes de declarar el sitio como "listo". Pasá por TODO esto.

---

## Performance

- [ ] Lighthouse Performance ≥ 90 (mobile y desktop)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 90
- [ ] No hay imágenes sin `loading="lazy"` salvo el hero
- [ ] No hay imágenes sin `decoding="async"`
- [ ] Las imágenes tienen dimensiones (`width`, `height` o `aspect-ratio`) para evitar CLS
- [ ] Google Fonts con `display=swap`
- [ ] Solo UNA request CSS (todo en `styles.css`)
- [ ] Solo UN archivo JS (`app.js`)
- [ ] Total transferred < 1.5MB (sin contar fotos personales que Adrian agregue después)

---

## Accesibilidad

- [ ] Todo `<img>` tiene `alt` (descriptivo, no "imagen de…")
- [ ] Los slots de fotos tienen `aria-label` describiendo qué falta
- [ ] El gate de acceso es navegable por teclado (input + enter)
- [ ] El sitio entero es navegable con teclado (tab/shift-tab orden lógico)
- [ ] Focus states visibles en todos los elementos interactivos
- [ ] Contraste de texto: `text-primary` sobre `bg-base` ≥ 4.5:1 (chequealo)
- [ ] `prefers-reduced-motion` respetado (animaciones desactivadas)
- [ ] Heading hierarchy correcta: un solo `<h1>` por página, `<h2>` para secciones, etc.
- [ ] Idioma declarado: `<html lang="es-AR">`
- [ ] Skip-to-content link al inicio (oculto visualmente, visible al focus)

---

## Funcionalidad — gate de acceso

- [ ] Clave correcta (`Chapa26`) redirige a `home.html`
- [ ] Clave incorrecta muestra error y hace shake
- [ ] La clave es case-sensitive
- [ ] `sessionStorage` se setea correctamente
- [ ] `home.html` redirige a `index.html` si no hay sesión
- [ ] Refrescar `home.html` mantiene la sesión (sessionStorage persiste en la pestaña)
- [ ] Cerrar la pestaña y volver a abrir requiere clave de nuevo (NO localStorage)

---

## Funcionalidad — countdown

- [ ] Cuenta hasta el **jueves 25 de junio de 2026, 18:00 ART** (`America/Argentina/Buenos_Aires`)
- [ ] Se actualiza cada segundo
- [ ] Tabular-nums activado (no salta el layout)
- [ ] Pulso sutil cada segundo
- [ ] Si la fecha ya pasó, muestra: "El finde es ahora 🇦🇷" o similar (cuando lo abrá Adrian post-evento)

```js
// Ejemplo de cálculo respetando timezone
const target = new Date('2026-06-25T18:00:00-03:00');
```

---

## Funcionalidad — fixture toggle

- [ ] Por defecto se muestran solo los partidos destacados
- [ ] Botón "Ver todos los partidos" expande a la lista completa
- [ ] Botón cambia a "Ocultar" cuando está expandido
- [ ] Animación de expand/collapse suave (max-height transition o similar)

---

## Funcionalidad — CTA WhatsApp

- [ ] Si `data-whatsapp-group-link` está reemplazado, el botón abre el link
- [ ] Si no está reemplazado, el botón muestra el fallback "(pediselo a Adrian)"
- [ ] El link abre en nueva pestaña: `target="_blank" rel="noopener"`

---

## Responsive

Probá mentalmente (o con devtools) en estos viewports:

- [ ] iPhone SE (375 × 667)
- [ ] iPhone 14 (390 × 844)
- [ ] iPad (768 × 1024)
- [ ] Desktop estándar (1440 × 900)
- [ ] Desktop wide (1920 × 1080)

En cada uno verificá:

- [ ] No hay scroll horizontal
- [ ] Tipografía legible (no demasiado chica ni gigante)
- [ ] Las cards no se rompen
- [ ] Las fotos no se distorsionan
- [ ] Los chips/píldoras no se cortan
- [ ] El hero ocupa exactamente `100vh` (no `100dvh` que tiene problemas en iOS — usar `100vh` con fallback)

---

## SEO básico (aunque sea privado)

- [ ] `<title>` correcto en `home.html`
- [ ] `<meta name="description">` presente
- [ ] Open Graph tags completos (ver `04-content-copy.md`)
- [ ] Twitter Card tags
- [ ] `<meta name="robots" content="noindex, nofollow">` ← **importante porque es privado**
- [ ] No hay `sitemap.xml` ni `robots.txt` que indexen

---

## Deploy

### GitHub Pages

- [ ] No hay archivos con nombres que rompan en GH Pages (sin `_underscore` al inicio)
- [ ] `index.html` está en la raíz
- [ ] Las rutas a assets son relativas (`assets/img/...`, no `/assets/img/...`)
- [ ] Funciona si la URL termina con `/` y si termina con `/home.html`

### Vercel

- [ ] `vercel.json` está en la raíz con config mínima:
  ```json
  {
    "cleanUrls": true,
    "trailingSlash": false
  }
  ```
- [ ] Build settings: Framework = Other, no build command, output directory = `./`
- [ ] Funciona el routing entre `/` (gate) y `/home.html`

---

## Browser compat

- [ ] Chrome últimas 2 versiones ✓
- [ ] Safari últimas 2 versiones (incluye iOS) ✓
- [ ] Firefox última versión ✓
- [ ] Edge última versión ✓

No te preocupes por IE ni navegadores viejos. Es 2026.

---

## Privacidad

- [ ] CERO Google Analytics
- [ ] CERO Meta Pixel
- [ ] CERO Hotjar / similares
- [ ] CERO cookies banner (porque no usamos cookies)
- [ ] CERO formularios que envían datos a servidores externos

---

## Resumen final para Adrian

Cuando termines, dejale un mensaje en formato:

```
✅ Construido. Resumen:

[Qué se construyó]
- Gate de acceso con clave Chapa26
- Microsite single-page con 8 secciones
- Countdown a 25 jun 2026 18:00 ART
- Fixture del Mundial con datos reales chequeados
- 100% responsive, accesible, sin tracking

[Pendiente para vos]
- Reemplazar link de WhatsApp en línea XX de home.html
- Reemplazar 4 photo-slots con fotos personales (marcados visualmente)
- Editar lista de confirmados a mano cuando empiecen a anotarse
- Generar/aprobar og-image.jpg para preview de WhatsApp

[Decisiones que tomé]
- [Listar cualquier decisión de diseño/copy que valga la pena mencionar]

[Cómo deployar]
Ver README.md para pasos de GitHub Pages y Vercel.
```
