# Publicación SALÍPEX — GitHub + Neon + Vercel

Repositorio indicado: https://github.com/juniordurval/SAL-PEX.git

## 1. Subir desde la carpeta descomprimida

**No subas archivos `.env.local`, `.env` ni credenciales.**

```powershell
git init
git branch -M main
git remote add origin https://github.com/juniordurval/SAL-PEX.git
git add .
git commit -m "SALÍPEX: sitio institucional, catálogo y administración"
git push -u origin main
```

Si el repositorio ya tiene commits, **no fuerces el push**: primero clona el repositorio y copia los archivos del proyecto, revisando conflictos antes de hacer commit.

## 2. Crear la base de datos Neon

1. Inicia sesión en https://console.neon.tech y crea un proyecto PostgreSQL (ej. `salipex-demo`).
2. En Connection details, copia la cadena **pooled** de conexión. **No la publiques en GitHub ni la compartas por chat.**
3. En tu computadora ejecuta `npm install`.
4. Duplica `.env.example` a `.env.local` y configura `DATABASE_URL`, `ADMIN_PASSWORD` (16+ caracteres) y `SESSION_SECRET` (32+ caracteres aleatorios).
5. Ejecuta `npm run db:setup`. Se crean `products`, `news`, `contacts`, `quotes` y se agregan productos iniciales sin borrar existentes.
6. Ejecuta `npm run dev` y comprueba `/productos`, `/cotizar`, `/contacto` y `/admin/login`.

## 3. Desplegar con Vercel

1. En https://vercel.com/new, selecciona el repositorio de GitHub e importa el proyecto como **Next.js**.
2. En Settings > Environment Variables, añade `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL` (la URL propia de Vercel después de conocerla).
3. Despliega; si cambias variables, vuelve a desplegar.
4. Valida un envío real de prueba desde `/cotizar` y que aparezca en el panel `/admin`.
5. Solo luego solicita autorización del dominio `salipex.com`; agrega el dominio en Settings > Domains y usa exclusivamente los registros DNS que Vercel indique.

## 4. Datos empresariales pendientes

Correo oficial, WhatsApp, dirección, ubicación de la planta, redes sociales exactas, fichas técnicas, fotografías individuales, información legal, textos de privacidad.

## 5. Antes de publicar para clientes finales

Implementar limitación de intentos de inicio de sesión y anti-spam en formularios, revisar políticas de privacidad y datos personales, reemplazar fotografías recortadas del afiche por fotografías autorizadas individuales, validar datos técnicos. Este proyecto es una demo empresarial, no una plataforma auditada.

## Estado de pruebas

Verificadas: estructura de carpetas, presencia de rutas y archivos, script SQL de creación, ausencia de credenciales reales dentro del paquete. **Pendiente:** `npm install`, `npm run build`, escritura/lectura real contra Neon y publicación GitHub/Vercel. No se afirma que el despliegue esté probado hasta completar esos pasos.
