# Mundial Marayui 2026

Microsite para el finde del **25-28 de junio de 2026** en la casa de Marayui, Chapadmalal.

> Privacidad: el repo es público (necesario para GitHub Pages free), pero el sitio no está indexado (`noindex, nofollow`) y la URL solo la compartís por WhatsApp con los invitados. No hay nada secreto en el código.

## Levantarlo localmente

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node (si tenés http-server instalado)
npx http-server -p 8000

# Después abrís: http://localhost:8000
```

## Deploy: GitHub Pages

El repo ya está configurado para servirse por GitHub Pages desde `main` / root.

**URL del sitio**: `https://aubone79.github.io/marayui2026/`

Cada `git push` a `main` actualiza el sitio en ~1 minuto.

Si por alguna razón hay que reactivarlo:

1. **Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`** → Save.
2. Esperar ~1 min.

## Cosas a reemplazar antes de mandarlo al grupo

- [ ] Link del grupo de WhatsApp en `index.html` → buscar `data-whatsapp-group-link="REEMPLAZAR_..."`.
- [ ] Fotos personales de la casa → buscar `<div class="photo-slot" ...>` y reemplazar por `<img>`.
- [ ] Lista de confirmados en la sección final → buscar `<ul data-confirmados>` y agregá items `<li>Nombre</li>` a mano.
- [ ] (Opcional) `og-image.jpg` 1200×630 en `assets/img/` para preview de WhatsApp.

## Estructura

```
/
├── index.html       (microsite single-page con las 8 secciones)
├── styles.css
├── app.js
├── assets/
│   ├── img/
│   └── icons/
└── docs/            (specs originales del proyecto, referencia)
```

Ver `CLAUDE.md` para el detalle. Los specs de cada parte están en `docs/`.

---

Hecho con cariño y un poco de ansiedad por el finde.
