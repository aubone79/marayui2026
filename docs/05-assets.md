# 05 — Assets

## Estrategia general

El sitio carga rápido y se rompe poco si:

1. Las fotos son **locales** (en `assets/img/`), no hot-linked desde Unsplash u otros.
2. Los SVG van **inline** en el HTML donde se usan una vez, o como archivos sueltos en `assets/icons/` cuando se reusan.
3. Las fuentes vienen de Google Fonts con `display=swap`. Una sola request CSS, no múltiples.

---

## Fotos a descargar

Descargá las siguientes y guardalas localmente. **No hot-linkees.** Optimizá: max 1920px de ancho, JPEG calidad 80, o WebP si tu setup lo permite.

### Marayui Country Club / lugar

Buscá en estas fuentes públicas (no oficiales del proyecto, todas públicas):

- `marayui.com.ar` (sitio oficial del country, tiene fotos del casco, golf, parque)
- Búsqueda Google Imágenes: `Marayui Country Club Chapadmalal`
- La nota de La Nación de enero 2023 ("Marayui. El refugio escondido…") tiene fotos buenas del campo de golf y el parque

Guardar como:
- `assets/img/marayui-aerial.jpg` — vista aérea o panorámica del country
- `assets/img/marayui-golf.jpg` — cancha de golf
- `assets/img/marayui-casco.jpg` — el casco principal/club house
- `assets/img/marayui-parque.jpg` — parque/arboleda

### Imágenes ambiente (Unsplash, libres de uso)

Para fotos genéricas premium, usar Unsplash. Búsquedas sugeridas y nombres de archivo:

- `argentine asado night fire` → `assets/img/asado.jpg`
- `paddle court argentina` → `assets/img/paddle.jpg`
- `truco cards argentina table` (si no aparece bueno: `playing cards table moody`) → `assets/img/truco.jpg`
- `argentina coast cliffs ocean` → `assets/img/costa.jpg`
- `golf course misty morning` → `assets/img/golf-mood.jpg`

**Atribución**: Unsplash no requiere atribución obligatoria pero es buena práctica. Dejá un comentario en el HTML cerca de cada `<img>`:
```html
<!-- Photo by [autor] on Unsplash -->
```

---

## Photo slots para Adrian

Adrian va a reemplazar después con fotos personales. Dejá slots con esta estructura:

```html
<div class="photo-slot" data-photo-slot="casa-hero" aria-label="Foto de Adrian: exterior de la casa al atardecer">
  <span class="photo-slot__hint">📸 Reemplazar: exterior de la casa al atardecer</span>
</div>
```

**CSS del slot** (que sea obvio que es un placeholder):

```css
.photo-slot {
  aspect-ratio: 16 / 9;
  border: 2px dashed var(--border-strong);
  background: var(--bg-elevated);
  display: grid;
  place-items: center;
  color: var(--text-tertiary);
  font-size: var(--font-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.photo-slot__hint::before { content: ""; margin-right: 0.5em; }
```

**Slots a dejar**:

| `data-photo-slot` | Ubicación | Aspect ratio sugerido |
|---|---|---|
| `casa-hero` | Sección 2, foto principal | 16:9 |
| `casa-2` | Sección 2, galería | 4:3 |
| `casa-3` | Sección 2, galería | 4:3 |
| `casa-4` | Sección 2, galería | 4:3 |

> Si Adrian ya provee fotos, reemplazá los slots por `<img>` directos. Si no, dejalos así.

---

## OG image (preview de WhatsApp)

`assets/img/og-image.jpg` — 1200×630px. Es lo que ve la gente cuando se comparte el link en WhatsApp/Twitter/etc.

**Composición sugerida**:
- Fondo: foto del campo de golf de Marayui o panorámica del country, oscurecida con un overlay negro al 50%.
- Texto centrado: `MUNDIAL MARAYUI` en serif blanco grande + `25–28 JUNIO 2026` debajo en sans-serif chico.

Si no podés generar la composición programáticamente, dejá un comentario `<!-- TODO Adrian: generar og-image.jpg 1200x630 -->` y usa una de las fotos descargadas como placeholder.

---

## Favicon

SVG inline simple. Una pelota de fútbol estilizada en celeste:

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%230A0A0B' stroke='%236FB6E0' stroke-width='2'/><path d='M16 8 L20 12 L18 18 L14 18 L12 12 Z' fill='%236FB6E0'/></svg>">
```

(Refiná el SVG a tu gusto pero mantenelo simple y monocromático celeste.)

---

## Iconografía

**Inline SVG** para los íconos de UI:

- Caret abajo (hero scroll hint)
- Flecha derecha (botón CTA)
- Checkmark (confirmados)
- Logo de WhatsApp (en el botón de CTA)

**Logo de WhatsApp**: usá el ícono oficial de Lucide (`message-circle` no, mejor el de WhatsApp oficial). Si no encontrás uno limpio, usá el path SVG público:

```svg
<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
```

---

## Tipografía — imports

En `home.html` y `index.html`, en el `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Checklist final de assets

Antes de declarar listo:

- [ ] Todas las fotos están en `assets/img/` (no hay hot-links a Unsplash o externos)
- [ ] Las fotos están comprimidas (cada una < 400KB idealmente)
- [ ] `og-image.jpg` existe y es 1200×630
- [ ] Favicon SVG inline funciona
- [ ] Slots de `data-photo-slot` están claramente marcados visualmente
- [ ] Todos los `<img>` tienen `alt`, `loading="lazy"`, `decoding="async"`
