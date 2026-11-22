# Web de la Iglesia PRC

Astro + GitHub Pages + panel `/admin` (Decap CMS). Coste: 0 €.

## Puesta en marcha (una sola vez)

1. **Repositorio público** en GitHub (nombre libre, p. ej. `iglesia-prc`). Sube **todo** el contenido de esta carpeta, incluida `.github`.
2. **Settings → Pages → Source: GitHub Actions.** Cada subida a `main` publica la web (1-3 min). Estado en la pestaña *Actions*.
3. **Login del panel (Worker gratuito de Cloudflare):**
   - Despliega [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) en tu cuenta gratuita de Cloudflare (botón *Deploy to Cloudflare Workers* de su README). Anota la URL `https://….workers.dev`.
   - GitHub → Settings → Developer settings → OAuth Apps → *New*. Homepage: la URL de tu web. Callback: `URL_DEL_WORKER/callback`. Crea un *client secret*.
   - En Cloudflare, en el Worker → Settings → Variables: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (como secreto) y `ALLOWED_DOMAINS` = `TU_USUARIO.github.io`.
4. **Edita `public/admin/config.yml`** (botón lápiz en GitHub): las 3 líneas marcadas `CAMBIAR` (repo, URL del Worker, URL de la web).
5. Entra en `https://TU_USUARIO.github.io/TU_REPO/admin/` → *Login with GitHub*. Al autorizar, comprueba que pide el permiso mínimo.

## Uso diario
Todo se edita en `/admin`: versículos, directos (cambia el **Estado** a "En directo ahora" unos minutos antes), anuncios, textos y contacto. Cada *Guardar/Publicar* tarda 1-3 min en verse.

## Notas
- Versículo diario: fecha de Madrid; si añades/quitas versículos, la rotación se desplaza. Para uno concreto usa *Fijar un versículo*.
- **Verifica los 8 versículos de ejemplo** contra tu RVR1960 impresa. Respeta las condiciones de uso de la versión.
- Logo: súbelo en *Inicio y sitio → Logotipo*.
- Desactivar una sección la quita del menú; su URL sigue existiendo.
- Nueva sección: archivo en `src/data/`, página en `src/pages/`, entrada en `secciones.json` y colección en `config.yml`.
- Problemas: mira *Actions* (rojo = error de compilación) y consola del navegador en `/admin`.
