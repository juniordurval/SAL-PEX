# SALÍPEX — Web institucional y panel administrativo

Proyecto Next.js (App Router) + Tailwind CSS 4 + Neon PostgreSQL para Vercel.

## Qué incluye
- Sitio responsive, Inicio, Nosotros, Productos, detalle de producto, Actualidad, Contacto y Cotizaciones.
- Base PostgreSQL con catálogo, noticias, contactos y solicitudes de cotización.
- Administración privada: login, editar/agregar productos, publicar noticias, consultar mensajes y cambiar estado de cotizaciones.
- Datos iniciales extraídos del afiche adjunto. Imágenes de catálogo recortadas del afiche; reemplazarlas por fotos individuales oficiales para producción.
- Catálogo visible aun sin Neon como vista previa; **los formularios y la edición exigen Neon configurado**.

## Inicio local
Requiere Node.js 20.19+ y npm.

```bash
npm install
cp .env.example .env.local
```

Edita `.env.local`: coloca `DATABASE_URL` de Neon; cambia `ADMIN_PASSWORD` (mínimo 16 caracteres) y `SESSION_SECRET` (mínimo 32 caracteres, `openssl rand -hex 32`). Nunca publiques el archivo ni las credenciales.

```bash
npm run db:setup
npm run dev
```

Abre http://localhost:3000 y http://localhost:3000/admin/login

> `npm run db:setup` crea tablas e inserta catálogo inicial si aún no existe. Es idempotente; no borra contenidos existentes.

## Publicar con Vercel
1. Subir el código a un repositorio privado en GitHub (sin `.env.local`).
2. En Vercel crear **New Project**, importar el repositorio, seleccionar framework Next.js.
3. Crear proyecto en https://console.neon.tech y copiar **pooled connection string**.
4. En Vercel / Project / Settings / Environment Variables registrar `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET` y `NEXT_PUBLIC_SITE_URL` (URL de la demo, o después el dominio final).
5. Ejecutar `npm run db:setup` localmente contra Neon, una vez, antes de probar formularios.
6. Desplegar y verificar Inicio, productos, /cotizar, /contacto y /admin/login.
7. Cuando autoricen usar el dominio, añadir `salipex.com` y `www.salipex.com` en Vercel / Domains; aplicar los registros DNS exactos que Vercel muestre en el registrador. **No cambiar DNS del dominio actual sin autorización y revisión de otros servicios existentes.**

## Información pendiente de confirmación
Dirección legal y física, ubicación de la planta, correo, WhatsApp, enlaces oficiales de redes, fichas técnicas y certificados, precios, inventarios, historia y fotografías originales. No hay carrito ni pasarela de pagos: esta demo recibe **cotizaciones**, no cobra dinero.

## Seguridad y límites
- Login con contraseña fuerte configurada por servidor y cookie firmada HttpOnly, Secure en producción, SameSite Strict y 8 horas de expiración.
- Sin contraseñas predeterminadas; habilitar protección adicional (rate limit, WAF, CAPTCHA y gestión multiusuario) antes de uso comercial público.
- Datos de contacto requieren política de privacidad definitiva. Se incluyen validaciones de servidor y comprobación básica de origen, no constituyen una auditoría de seguridad.
- Panel permite colocar URL HTTPS para nuevas imágenes; no incluye carga de imágenes a almacenamiento. Usar Vercel Blob o Cloudinary como ampliación.
- El contenido se renderiza como texto React sin inyección HTML; no introducir información corporativa no validada.
- Los datos iniciales son demo y se deben revisar; las estadísticas son registros del sistema, no métricas de visitas.
- ExpoCruz 2026 fue del 18 al 27 de septiembre **según el afiche aportado**; la noticia se presenta como participación anunciada, sin afirmar resultados o ventas.

## Archivos principales
- `app/`: páginas, rutas API y estilos.
- `components/`: navegación, fichas, formularios y panel.
- `lib/`: acceso Neon, autenticación, catálogo temporal.
- `scripts/setup.mjs`: creación de tablas y carga inicial.
- `public/images/`: afiche y recortes proporcionados.
