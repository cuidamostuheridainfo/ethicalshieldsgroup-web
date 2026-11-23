# Pruebas

## 23 nov 2026: Quiénes somos

Chrome local a 1440×900, 390×844 y 360×740: sin errores de consola ni desborde horizontal; un solo h1; el enlace de cierre ocupa una línea en PC y dos en el teléfono, y lleva a #empresas.

## 23 nov 2026: tarjetas del hero rediseñadas

Chrome local (Playwright) sobre `diseno/maqueta/index.html`, con la animación completa y con movimiento reducido, en 1920×1080, 1440×900, 1366×657, 1280×720, 1024×768, 820×1180, 768×1024, 390×844, 375×667 y 360×740:
- sin errores de consola ni desborde horizontal;
- ninguna tarjeta se superpone con otra ni con el botón "Conoce nuestras empresas";
- los cuatro nombres caben en una línea y los textos caben en su tarjeta, sin tocar la imagen;
- Medical Shields y Cumbre CHP a la izquierda; las empresas bajan en el orden Medical Shields, Cuidamos tu Herida, Cumbre CHP y Ethical Shields AI;
- el botón de pausa detiene la animación;
- WhatsApp: visible en PC y tableta horizontal; en el teléfono y la tableta vertical, oculto en el hero.

Las cuatro tarjetas caben completas en la primera pantalla en todos los tamaños menos dos: en 360×740 faltan 10 px y en 375×667 (iPhone SE) faltan 99 px, así que hay que bajar un poco. Pendiente: iPhone de Jenny.


## 18 nov 2026: órbita única y ordenada

Validación de sintaxis y simulación lógica: 16 ventanas, 32 caras, separación angular uniforme durante un ciclo, ninguna pantalla fija y desplazamiento común sin cruces; dimensiones y posiciones finitas a 360, 390, 768, 820, 1024, 1440 y 1920 px; límites horizontales, pausa, pestaña oculta y movimiento reducido. No se modifican imágenes, persona ni h1. Revisión visual en navegador local pendiente.


## 18 nov 2026: todas las pantallas en órbita

Comprobados sintaxis JavaScript, 16 ventanas orbitales y 32 caras, nombres de empresa en ambas caras, movimiento de las 16 posiciones durante el recorrido, geometría finita y límites horizontales a 360, 390, 768, 820, 1024, 1440 y 1920 px; pausa, pestaña oculta y movimiento reducido. Se conservaron los recursos de imagen y el HTML del mensaje y persona. Prueba lógica con DOM mínimo; revisión visual en navegador y teléfono pendiente.


## 18 nov 2026: hero narrativo del ecosistema

- Recursos: 4 ilustraciones originales generadas con ImageGen integrado para este proyecto, optimizadas a JPEG (aprox. 1,2 MB total). No muestran eventos, pacientes, empleados, productos ni alianzas reales; son escenas conceptuales. Prompts y origen conservados en `diseno/maqueta/escenas-ecosistema/PROMPTS.json`.
- Alcance: 16 ventanas (4 protagonistas + 12 actividades), 32 caras con contenido; 13 conexiones SVG. El mensaje, la persona y las demás secciones se comparan con la versión previa para comprobar su conservación.
- Comprobaciones realizadas: sintaxis JavaScript; recursos locales; simulación de geometría en recorrido completo a 360, 390, 768, 820, 1024, 1440 y 1920 px; pausa global y reanudación sin duplicar bucles; pestaña oculta, fuera de pantalla y movimiento reducido; correspondencia de las actividades con el encargo de Jenny.
- Límite: simulación de lógica, no renderizado en navegador. El acceso del navegador al archivo local sigue bloqueado; no se elude. Pendientes revisión visual y fluidez en teléfono real.


## 18 nov 2026: hero de 16 pantallas, entorno local

- Comprobación de sintaxis JavaScript: correcta.
- Comparación del HTML: se conservan mensaje, persona y secciones fuera del hero; sin cambios en enlaces, formulario ni empresas.
- Simulación del código del hero con DOM mínimo: 16 paneles/32 caras; rutas de diez SVG existentes; geometría finita en muestras de todo el ciclo más largo a 360, 390, 768, 820, 1024, 1440 y 1920 px; paneles por delante y detrás de la persona.
- Simulación de pausa/reanudación, pestaña oculta, salida/entrada del hero y cambios de preferencia de movimiento reducido: correcta, sin bucles duplicados.
- Los diez SVG se analizaron como XML correctamente (aprox. 45 KB en total). Son dibujos vectoriales propios, creados para esta maqueta, sin recursos externos.
- Limitación: estas comprobaciones son de código y simulación lógica, no de renderizado. Pendientes validación visual, fluidez y consumo en navegador/teléfono real. El acceso del navegador al archivo local fue bloqueado; no se eludió.


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
| Foto de fondo del hero (`diseno/hero/fondo-persona.png`) | Generada con IA en Canva por Jenny (18 nov), a partir de la opción 3 y sin pantallas | Uso según los términos de Canva para imágenes generadas | Hero |
| Recorte de la persona (`persona-recorte.png`) | Hecho por Claude con rembg (isnet-general-use) a partir del fondo | Derivado del anterior | Hero |
| Ilustraciones de las pantallas (`diseno/hero/pantallas/*.svg`) | Dibujadas por Claude con `herramientas/generar_pantallas.py` (18 nov). Reemplazan las fotos reales, que se descartaron por decisión de Jenny | Propias | Pantallas del hero |
| Imagen de Medical Shields en el hero (`diseno/maqueta/escenas-ecosistema/medical-fondo.webp`) | Recorte hecho por Claude (23 nov) de la ilustración con IA `medical.jpg`, sin la pareja del primer plano | Derivado de la ilustración original | Tarjeta de Medical Shields en el hero |
| Símbolo "Evolución de origen" | Redibujado en vector a partir de la imagen aprobada por el comité (16 nov); no se copió ningún archivo | Propiedad del grupo | `diseno/logo/` |
