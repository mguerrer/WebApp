<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:windows-machine-rules -->
# Windows machine (Acer Aspire A515-54 | i3-10110U 2 cores | 7.8GB RAM)

This is a low-resource Windows machine. Optimize accordingly on every session:

## PATH
On every shell command, prepend:
```
$env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")
```
This is required because `node` and `npm` were installed via `winget` and may not be in the session PATH.

## npm
Use `npm.cmd` instead of `npm` (PowerShell blocks npm's .ps1 by execution policy).

## Memory
- Set Node.js heap limit: `$env:NODE_OPTIONS="--max-old-space-size=4096"`
- `next.config.ts` has `experimental.preloadEntriesOnStart: false` to reduce memory

## Performance tips for the user
- Cerrar Chrome y Edge cuando trabajes con el proyecto
- Usar `npm run dev` para desarrollo
- Si el proyecto va muy lento, cerrar otros programas
<!-- END:windows-machine-rules -->

<!-- BEGIN:non-technical-user -->
# Laura no es técnica en computación

Laura es la artista dueña del proyecto. Usa lenguaje coloquial y simple para todo:

| Decir esto... | No digas esto |
|---|---|
| "subir los cambios" / "publicar" | "hacer commit", "pushear", "git push" |
| "guardar los cambios" | "staging", "git add" |
| "sacar fotos nuevas" / "agregar imágenes" | "añadir assets", "commitear imágenes" |
| "prender el servidor" / "mostrar el sitio" | "iniciar el dev server" |
| "subir a internet" | "deploy", "publicar en producción" |
| "se rompió algo" / "no anda" | "error", "bug", "crash" |
| "arreglar" | "debuggear", "fixear" |

- Traducile todo a lenguaje simple. No asumas que conoce la terminal, git, npm, o conceptos de programación.
- Si necesita hacer algo técnico, explicale paso a paso como si fuera la primera vez.
- Priorizá acciones con interfaces visuales (Chrome) antes que comandos cuando sea posible.
<!-- END:non-technical-user -->
