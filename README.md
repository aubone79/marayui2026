# Mundial Marayui 2026

Microsite privado para el finde del **25-28 de junio de 2026** en la casa de Marayui, Chapadmalal.

> Privacidad: el sitio queda público una vez deployado, pero no está indexado (`noindex`) y la URL solo la compartís por WhatsApp con los invitados. Repo en GitHub privado.

## Levantarlo localmente

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node (si tenés http-server instalado)
npx http-server -p 8000

# Después abrís: http://localhost:8000
```

## Deploy a Vercel (recomendado)

1. [vercel.com](https://vercel.com) → **Add New → Project → Import Git Repository**.
2. Seleccionar el repo `marayui2026`.
3. **Framework Preset: Other**. **Build Command: (vacío)**. **Output Directory: `./`**.
4. Deploy. URL queda: `https://<proyecto>.vercel.app`.

Con repo privado igual funciona en plan free de Vercel.

## Deploy a GitHub Pages (alternativa)

> Nota: GH Pages con repo privado requiere GitHub Pro ($4/mes). Si el repo es público, el código queda visible — el sitio igual no tiene secretos, así que está bien.

1. **Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`**.
2. Esperar ~1 min. URL queda: `https://<usuario>.github.io/<repo>/`.

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
├── vercel.json
├── assets/
│   ├── img/
│   └── icons/
└── docs/            (specs originales del proyecto, referencia)
```

Ver `CLAUDE.md` para el detalle. Los specs de cada parte están en `docs/`.

---

Hecho con cariño y un poco de ansiedad por el finde.
