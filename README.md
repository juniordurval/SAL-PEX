# SALÍPEX · Demo estática sin Neon

Demo institucional elaborada con Next.js 15 y Tailwind CSS 4. No requiere base de datos, cuentas, contraseñas ni variables de entorno.

## Ejecutar
```bash
npm install
npm run dev
```
Visita http://localhost:3000

## Compilar
```bash
npm run typecheck
npm run build
```

## Funciones demo
- Inicio, nosotros, productos, fichas y actualidad basados en material suministrado.
- Cotizaciones y contactos guardados únicamente en localStorage **en el navegador que completó el formulario**.
- Panel público de muestra en `/admin` para revisar los registros de ese navegador, editar nombres de productos y títulos de noticias y exportar datos locales como JSON. No es un panel de acceso restringido.
- Cambios hechos en el panel demo NO afectan el catálogo público, que se genera de archivos estáticos.
- No se envían correos, WhatsApp, solicitudes reales ni datos a servidores.

**No usar para captación de cotizaciones reales:** los registros no llegan a la empresa y pueden perderse si se limpia el navegador. No escribir información personal o sensible real.

## GitHub (desde Windows PowerShell)
Si ya tienes clonación local de `juniordurval/SAL-PEX`, abre esa carpeta y reemplaza sus archivos por los de este ZIP, sin borrar `.git`.
```bash
git status
git add -A
git commit -m "SALÍPEX demo estática sin Neon"
git push origin main
```
Si es la primera vez, clona el repositorio, entra a la carpeta clonada y copia ahí los archivos:
```bash
git clone https://github.com/juniordurval/SAL-PEX.git
cd SAL-PEX
```
No ejecutar `git push --force`. Si tu rama no se llama main, verifica con `git branch --show-current`.

## Vercel
Importar el repositorio o dejar que el push dispare un despliegue. Framework Next.js, Root Directory carpeta raíz. En Settings → Environment Variables elimina antiguas variables como `DATABASE_URL` de esta demo (no se usan). 

## Datos empresariales
Logo/colores: basados en Brandboard SALÍPEX. Productos y presentaciones: basados en el afiche suministrado. Datos de contacto, ubicación, ficha técnica y certificaciones no confirmados y por eso no inventados.


## Versión compacta v5

Ancho máximo de contenido: 1040px, espaciado y tarjetas reducidos, hero compacto; detalles en ACTUALIZAR_GITHUB.md.
