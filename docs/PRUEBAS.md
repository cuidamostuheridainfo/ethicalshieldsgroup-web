# Pruebas

Plan de pruebas por etapa, resultados fechados e incidencias. Cada resultado anota la fecha, el entorno (local, `*.pages.dev` o producción), el dispositivo y la cifra que decide.

## Plan por etapa

### Etapa B: preparación
- La compilación (`npm run build`) termina sin errores ni advertencias de tipos.
- La revisión de secretos no encuentra claves, tokens ni `.env` en el repositorio.
- Las pruebas base de Playwright corren contra el servidor local.

### Etapa C: implementación visual
- **Anchos:** 360, 390, 768, 1024, 1280 y 1920 px, sin desborde horizontal.
- **Hero:**
  - la animación corre fluida en escritorio y en un teléfono real;
  - se pausa fuera de pantalla y cuando la pestaña está oculta;
  - con `prefers-reduced-motion` se ve estático;
  - el botón de pausa funciona.
- **Navegación:**
  - cada enlace lleva a su sección;
  - el menú móvil abre y cierra con mouse, toque y teclado (Escape);
  - el foco es visible.
- **Tarjetas:** las cuatro tienen el mismo tamaño y la misma jerarquía en todos los anchos.
- **Lighthouse en teléfono** (mediana de 3): rendimiento ≥ 90, accesibilidad 100, buenas prácticas ≥ 95 y SEO 100.
- **Core Web Vitals de laboratorio:** LCP < 2,5 s y CLS < 0,1.
- **Revisión visual de Jenny** en PC y en su iPhone.

### Etapa D: funcionalidad
- **Enlaces:** todos los internos y externos responden; se excluye WhatsApp.
- **Formulario:**
  - campos obligatorios, formato de correo, largo máximo y motivo dentro de la lista;
  - aceptación de privacidad obligatoria;
  - mensajes de error accesibles;
  - rechazo sin token de Turnstile y frecuencia limitada;
  - texto con HTML o scripts tratado como texto plano en el correo;
  - envío real de prueba o simulación, según la D-05.
- **WhatsApp:** abre `wa.me` con el mensaje correcto, no tapa el formulario ni el botón de enviar en el teléfono y tiene una etiqueta accesible.
- **Accesibilidad:** axe sin violaciones en todas las páginas, recorrido completo con teclado y contraste AA.
- **SEO:**
  - un solo `h1`;
  - título, descripción y canonical correctos;
  - Open Graph visible al compartir por WhatsApp;
  - JSON-LD válido (Rich Results Test);
  - sitemap y robots correctos en producción.
- **Seguridad:** cabeceras presentes y CSP sin violaciones (primero en Report-Only).

### Etapa E: publicación
- `*.pages.dev` responde con `X-Robots-Tag: noindex` y pide acceso con Cloudflare Access.
- Prueba completa en `*.pages.dev`, en PC y en el iPhone de Jenny.
- Lista de lanzamiento aprobada por Jenny antes de conectar el dominio.

## Resultados

Todavía no hay resultados.

## Incidencias

Ninguna.

## Recursos y licencias

Aquí se anota cada imagen, ícono o fuente que se incorpore al proyecto, con su origen y su licencia.

| Recurso | Origen | Licencia | Dónde se usa |
| --- | --- | --- | --- |
| Plus Jakarta Sans 500 y 800 | Paquete npm `@fontsource/plus-jakarta-sans` 5.3.0 (The Plus Jakarta Sans Project Authors) | SIL OFL 1.1, permite el uso comercial | Texto del logo, convertido a trazos (`diseno/logo/`) |
| Símbolo "Evolución de origen" | Redibujado en vector a partir de la imagen aprobada por el comité (16 nov); no se copió ningún archivo | Propiedad del grupo | `diseno/logo/` |
