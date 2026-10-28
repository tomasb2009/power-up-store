# TCG Store — Pokémon TCG

Landing page estática para una tienda de productos Pokémon Trading Card Game. Está pensada para mantenerse editando pocos archivos de configuración, sin backend ni panel de administración.

## Requisitos

- Node.js 20 o superior
- npm (incluido con Node.js)

## Cómo ejecutar el proyecto en Windows

Abrí PowerShell en la carpeta del proyecto y ejecutá:

```powershell
npm install
npm run dev
```

Luego abrí la URL que muestre Vite, normalmente `http://localhost:5173`.

Otros comandos:

```powershell
npm run build
npm run preview
```

- `npm run build` genera la versión de producción en `dist/`.
- `npm run preview` sirve esa carpeta para revisar el resultado.

## Dónde editar el contenido

### Productos y precios

Archivo: `src/data/products.ts`

Ahí podés agregar productos, cambiar precios, imágenes, descripciones y stock. Cada producto usa estos campos:

- `id`: identificador único
- `name`: nombre
- `collection`: colección
- `description`: descripción breve
- `price`: precio en ARS, como número entero (ejemplo: `195000`)
- `imageUrl`: URL de la imagen
- `productType`: tipo de producto
- `availability`: `disponible`, `consultar` o `agotado`
- `tag`: etiqueta opcional. Si no la definís, no se muestra

Los productos agotados siguen visibles, pero no invitan a comprar como si hubiera stock.

### Nombre, textos y contacto

Archivo: `src/config/site.ts`

Completá especialmente:

- `name`: nombre comercial
- `whatsappNumber`: número internacional, sin espacios ni símbolos. Ejemplo: `5491112345678`
- `instagramUrl`: URL completa de Instagram. Si está vacío, el enlace no se muestra
- `aboutText`: texto del apartado Sobre nosotros

Mientras `whatsappNumber` esté vacío, los botones de consulta quedan deshabilitados para no generar enlaces rotos.

## Imágenes

- El logo local está en `public/images/logo.jpg`.
- Las imágenes de productos se cargan desde el CDN de GameStop (`media.gamestop.com`), que es la misma fuente del catálogo original. Si alguna URL deja de funcionar, la tarjeta muestra un reemplazo y no se rompe.
- No se descargaron copias locales de esas imágenes.

## Publicar en Vercel

1. Subí el proyecto a GitHub.
2. En [Vercel](https://vercel.com) creá un proyecto e importá el repositorio.
3. Dejá el framework en Vite. El comando de build es `npm run build` y la carpeta de salida es `dist`.
4. No hace falta variable de entorno para Vercel si la tienda se publica en la raíz del dominio.
5. Deploy.

El archivo `vercel.json` redirige las rutas al `index.html`.

## Publicar en GitHub Pages

El proyecto es compatible, pero hay que indicar la ruta base del repositorio.

Ejemplo para un repo llamado `WEB-POKEMON`:

```powershell
$env:VITE_BASE_PATH="/WEB-POKEMON/"; npm run build
```

Luego publicá el contenido de `dist/` con GitHub Pages.

Si usás GitHub Actions, definí `VITE_BASE_PATH` con el nombre del repositorio, incluyendo las barras: `/NOMBRE-DEL-REPO/`.

## Notas

- Los precios están en pesos argentinos y se muestran con formato `$ 195.000`.
- Este sitio es una tienda independiente y no está afiliado a The Pokémon Company, Nintendo, Creatures ni GAME FREAK.
