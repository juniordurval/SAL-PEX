# SALÍPEX Compacta v5 — Actualización GitHub (Windows CMD)

## Método seguro sin conflictos de merge

1. Descarga y extrae este ZIP. Dentro verás la carpeta `SALIPEX-COMPACTA-V5`.
2. Abre CMD en una carpeta de trabajo, por ejemplo `C:\Users\TU_USUARIO\Documents`.
3. Clona el repositorio existente (o usa tu carpeta clonada correcta si ya la tienes):

```cmd
git clone https://github.com/juniordurval/SAL-PEX.git
cd SAL-PEX
```

4. Copia **el contenido** de `SALIPEX-COMPACTA-V5` dentro de `SAL-PEX` y reemplaza archivos. No copies la carpeta completa como subcarpeta, ni elimines `.git`.
5. Para limpiar archivos viejos que sobren: deja solo los archivos de la versión compacta, exceptuando `.git`, que se conserva.
6. Ejecuta:

```cmd
git status
git add -A
git commit -m "SALÍPEX - diseño compacto responsive v5"
git push origin main
```

Si el repositorio ya existe en tu PC, navega a la carpeta clonada donde `git status` sí funciona y ejecuta `git pull --ff-only` antes de copiar.
En Vercel revisa el nuevo deployment. Esta demo no usa Neon.
