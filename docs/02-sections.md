# 02 — Secciones del microsite (en orden de scroll)

`home.html` tiene 8 secciones. Cada una es un `<section>` con su propia ID para anchor links.

## Pre: Gate de acceso (`index.html`, archivo separado)

Pantalla negra full-screen. En el centro:

- Sobre-título pequeño (caption): `SOLO INVITADOS`
- Título grande en serif: `Mundial Marayui`
- Input centrado con placeholder: `Clave de acceso`
- Microcopy debajo del input: `Pedile la clave a Adrian.`
- Fondo: animación de "respiración" sutil — un radial gradient muy oscuro que pulsa lentamente (loop de 6s).

Comportamiento:

- Clave: `Chapa26` (case-sensitive).
- Si es correcta: `sessionStorage.setItem('marayui-access', '1')`, animación de fade a negro, redirige a `home.html`.
- Si es incorrecta: shake horizontal del input (animación CSS keyframes, 400ms) + texto rojo aparece debajo: `Esa no es. Probá de nuevo.`

`home.html` verifica al cargar:
```js
if (sessionStorage.getItem('marayui-access') !== '1') {
  window.location.href = 'index.html';
}
```

---

## 1. HERO

Pantalla completa (`100vh`). Centrado vertical.

**Contenido**:
- Caption arriba: `FINDE LARGO · 25–28 JUNIO 2026`
- Título principal serif gigante: **`MUNDIAL MARAYUI`**
- Subtítulo: `Cuatro días. Una casa. El Mundial en pantalla grande.`
- Countdown en vivo (JS) hasta el **jueves 25 de junio de 2026, 18:00 ART** (zona horaria `America/Argentina/Buenos_Aires`).
  - Formato: `XX días : XX hs : XX min : XX seg`
  - Tabular-nums, pulso sutil cada segundo (escala 1 → 1.02 → 1, 600ms).
- Caret abajo con bounce indicando scroll (`↓` o ícono SVG, 2s loop).

**Visual**:
- Fondo: gradient animado MUY lento (loop 20s) entre `#0A0A0B` y `#141418`.
- Encima: capa de ruido SVG (ver `01-design-system.md`).
- Animación de entrada: el título aparece letra por letra (split text) con stagger 30ms.

---

## 2. EL LUGAR — MARAYUI

**Layout**: dos columnas en desktop (texto izquierda, foto derecha). Una columna en mobile (foto arriba, texto abajo).

**Foto principal**: slot `data-photo-slot="casa-hero"` — 16:9 o 4:3, dominante.

**Texto editorial** (copiar exacto desde `04-content-copy.md`).

**Chips de datos rápidos** (4 píldoras, scroll horizontal en mobile, grid en desktop):
- 🏌️ Cancha de golf 9 hoyos · diseño USGA
- 🎾 Paddle, tenis, frontón
- 🌊 2.500 m a la playa
- 🌳 70 hectáreas · parque diseñado por Carlos Thays

**Galería abajo**: 3 slots para fotos secundarias (`casa-2`, `casa-3`, `casa-4`).

---

## 3. EL CRONOGRAMA — "EL FIXTURE DE LA CASA"

**LA sección.** Diseñada como un fixture de torneo.

**Layout**:
- Mobile: timeline vertical, una card por día.
- Desktop: zigzag — días impares a la izquierda, pares a la derecha, con una línea vertical conectora en el centro.

**Cada día es una card grande con**:
- Número de día gigante en serif (25, 26, 27, 28) — como número de camiseta.
- Etiqueta: `MATCHDAY 1` / `2` / `3` / `4`.
- Subtítulo del día (ej: `LLEGADA`, `ARRANCA EL TORNEO`, `EL DÍA GRANDE`, `VUELTA`).
- Lista de actividades con horario y emoji.

**Contenido exacto de cada día** está en `04-content-copy.md`.

**La card del SÁBADO 27** tiene tratamiento especial:
- Borde sutil dorado (`--accent-gold`).
- Tag rojo arriba: `EL DÍA GRANDE`.
- Glow muy sutil.

---

## 4. LOS TORNEOS

Tres sub-secciones cortas en formato "ficha técnica". Layout: 3 columnas en desktop, stack en mobile.

### ⛳ Copa Marayui de Golf
- 9 hoyos viernes + 9 hoyos sábado = **18 hoyos totales**
- Modalidad: medal play, hándicap aplicado
- Individual, ranking acumulado
- Premio: la **Copa Mabel** (trofeo simbólico de la casa)

### 🎾 Open de Paddle Marayui
- Formato libre, parejas que se armen sobre la marcha
- Round-robin si hay tiempo
- Apto todo nivel

### 🃏 Torneo de Truco "El Envido de Oro"
- Sábado a la noche, después del asado
- Parejas, eliminación directa
- Reglas casa: vale truco a oscuras, no vale flor escondida

Cada ficha es una card con:
- Emoji grande arriba
- Nombre del torneo en serif
- Lista de 3-4 bullets en sans-serif
- Borde sutil que se intensifica en hover

---

## 5. EL FIXTURE DEL MUNDIAL

Tratamiento de "scoreboard". Datos REALES — están todos en `03-fixture-mundial.md`. NO los inventes.

**Estructura**:

1. **Hero del partido del sábado** (Argentina vs Jordania): card grande arriba con tratamiento dorado, label `EL PARTIDO DEL FINDE`, hora destacada.

2. **Fixture de los otros días**: tabla limpia con todos los partidos relevantes del Mundial real esos 4 días, agrupados por día. Mostrar bandera (emoji), hora ART, sede, grupo.

3. **Toggle "Solo destacados / Ver todos"**: por defecto se muestran los partidos más interesantes (los que están marcados como ⭐ en `03-fixture-mundial.md`). Un botón permite expandir a la lista completa.

**Visual**: cada partido es una fila tipo scoreboard con tipografía monoespaciada para horas y números. El de Argentina destaca con color celeste.

---

## 6. LO LOGÍSTICO — "REGLAS DE JUEGO"

Tres tarjetas, layout 3 columnas en desktop, stack en mobile.

### 🛒 Comida
> Se compra TODO allá. Coordinamos por el grupo de WhatsApp el jueves a la mañana antes de salir.

### 🥤 Bebidas
> Cada uno trae lo suyo (y un poquito más). Se carga desde Buenos Aires — allá no hay supermercado grande cerca. Sugerencia: vino + cerveza + algo blanco.

### 💰 Cuota Mabel
> Pequeño costo de mantenimiento. Mabel es la encargada de la casa: limpia los sábados, ordena el quilombo del viernes, compra leña, y básicamente hace que esto funcione. Se divide entre los que vienen. Se paga al llegar.

---

## 7. CONFIRMACIÓN — CTA

Sección final, dramática.

- Título grande: **`¿Te anotás?`**
- Subtítulo: `Confirmá por el grupo de WhatsApp antes del lunes 22 de junio.`
- Botón gigante con animación de pulso: `CONFIRMAR EN WHATSAPP`
  - `<a data-whatsapp-group-link="REEMPLAZAR_CON_LINK_DE_GRUPO">`
  - Si el atributo sigue con `REEMPLAZAR_...`, mostrar fallback: `(pediselo a Adrian)`
- Debajo, lista de confirmados:
  ```html
  <ul data-confirmados>
    <!-- Adrian edita esto a mano -->
  </ul>
  ```
  Si está vacía, mostrar microcopy gris: `Sé el primero en anotarte.`

---

## 8. FOOTER

Pequeño, elegante.

- `Mundial Marayui 2026`
- `Hecho con cariño y un poco de ansiedad por el finde`
- `aubone79 · 2026`
- Una pelota SVG estilizada chica

---

## Navegación

No hay nav bar. El sitio es scroll puro. Sí podés agregar (opcional):

- Un dot navigator vertical en el costado derecho en desktop (≥1024px), que muestra puntos clickeables para saltar a cada sección. Mobile: no se muestra.
- Smooth scroll global con CSS: `html { scroll-behavior: smooth; }`.
