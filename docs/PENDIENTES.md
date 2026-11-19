# Pendientes

Última actualización: 19 de noviembre de 2026, cierre de sesión.

## Siguiente paso, en este orden

1. **Respuesta del comité** sobre la maqueta: la portada ("mar de soluciones") y el orden de las secciones. Enlace: https://cuidamostuheridainfo.github.io/ethicalshieldsgroup-web/ (GitHub Pages; se actualiza con cada push). El mensaje para el comité está en el chat del 18 nov.
2. **Prueba en el iPhone de Jenny:** la secuencia completa del hero (la cúpula, la bajada de las cuatro empresas y el estado final), la fluidez, la legibilidad de las tarjetas y el botón de pausa.
3. **Texto de Cuidamos tu Herida** en la tarjeta del hero: Jenny confirma la propuesta ("Especialistas en heridas y piel, para pacientes e instituciones") o elige una alternativa (ver CONTENIDOS).
4. **Opcional, según el comité:** versión corta del texto de la Cumbre en el teléfono, que hoy ocupa cinco líneas.
5. Jenny responde las decisiones D-02, D-05 y D-09 a D-11 y autoriza (o no) la Etapa B. Hasta entonces no se escribe el sitio definitivo ni se crea ninguna cuenta o servicio.

## Limpieza (cuando Jenny lo decida)

- `_borrar/`: fotos descartadas, excluidas en `.gitignore`. Jenny la borra a mano.
- Carpetas que la maqueta ya no usa y se conservan como respaldo: `diseno/hero/pantallas/` (ilustraciones del 18 nov) y `diseno/maqueta/escenas/` (escenas vectoriales anteriores).
- La copia de la maqueta publicada en Claude (https://claude.ai/artifact/TP96jmDBpF1rEEZ25jmxq6) ya no se usa: la reemplaza GitHub Pages.

## Decisiones de Jenny

Cada decisión trae la recomendación de Claude. El detalle de cada una está en `ESTRUCTURA.md`.

| # | Decisión | Opciones | Recomendación |
| --- | --- | --- | --- |
| ~~D-01~~ | ~~Nombre visible del grupo.~~ **Decidido el 18 nov: Ethical Shields Group.** | | |
| D-02 | **Stack.** | Astro + CSS propio · Astro + Tailwind (como la Cumbre) · React + Vite | Astro + CSS propio. |
| ~~D-03~~ | **Decidido en la maqueta (18 nov):** animación propia en JS y CSS, sin librerías ni video. | | |
| ~~D-04~~ | **Decidido el 18 nov:** foto realista generada en Canva (opción 3, sin pantallas), con el recorte de la persona. | | |
| D-05 | **Formulario.** Mecanismo, buzón de destino y proveedor de correo. | Función de Cloudflare + Turnstile + Brevo, sin guardar datos · solo WhatsApp por ahora | Construirlo en modo simulado ya. Activarlo cuando existan el buzón y el proveedor. |
| ~~D-06~~ | **Decidido el 18 nov y ajustado después:** GesPro e IRIS no aparecen en la sección Innovación (van en ethicalshields.ai); en el hero actual tampoco aparece: solo están las cuatro empresas (19 nov). Antes: **Innovación aplicada: qué se muestra y con qué estado.** IRIS todavía no está lista para comercializar; GesPro va primero; el Vademécum es investigación. | Mostrar IRIS como "en desarrollo" · omitir IRIS hasta que esté lista | GesPro y el Vademécum con enlace; IRIS solo si Jenny confirma cómo describir su estado. |
| ~~D-07~~ | **Decidido el 18 nov:** el botón lleva al Vademécum de Péptidos, que es la única iniciativa de la sección. Antes: **Destino del botón "Descubre nuestra innovación".** El brief no lo define. | Web de Ethical Shields AI · quitar el botón y dejar enlaces por iniciativa | Quitarlo y dejar un enlace en cada iniciativa: es un paso menos y no favorece a una sola empresa. |
| ~~D-08~~ | ~~Cuenta de GitHub.~~ **Decidido el 18 nov:** cuidamostuheridainfo; repositorio **público** con GitHub Pages desde el 18 nov, noche (antes privado). | | |
| D-09 | **Protección del entorno de prueba.** | Cloudflare Access (como la Cumbre) · solo `noindex` | Access, con la misma decisión del 18 nov. |
| D-10 | **Analítica.** | Ninguna en la primera versión · Cloudflare Web Analytics (sin cookies) | Ninguna al inicio; se decide antes del lanzamiento. |
| D-11 | **Orden de la alternancia claro/oscuro** (opción C). | Hero oscuro → Quiénes somos claro → Ecosistema oscuro → Innovación claro → Contacto oscuro → pie claro | Esa secuencia. El brief sugiere oscuro también para Innovación; si lo prefieres, Quiénes somos y Ecosistema se ajustan para que no queden dos bloques oscuros seguidos. |

## Recursos y datos

| # | Qué falta | Quién lo tiene | Bloquea |
| --- | --- | --- | --- |
| P-01 | **Hecho el 18 nov: Jenny aprobó la propuesta B.** Versiones horizontal, vertical, monocromáticas, símbolo y favicon en `diseno/logo/`. Solo queda una mejora opcional: si aparece el archivo original del símbolo con sus colores, se ajustan en el generador. Antes: **Logo nuevo: ETHICAL SHIELDS GROUP / Salud · Tecnología · Innovación**, con el símbolo "Evolución de origen" sin cambios. Hace falta el símbolo en vector (SVG, AI o PDF): hoy solo existe en imágenes rasterizadas generadas con IA, con el texto anterior "Grupo Medical Shields". Con el vector, Claude prepara la composición nueva (versiones horizontal, vertical, clara, oscura e ícono) para aprobación. | Jenny o diseño (vector); Claude (composición) | Etapa C (logo definitivo) |
| P-02 | Colores de la marca. Hay valores provisionales tomados de la imagen original (`diseno/logo/LEEME.md`), que sirven para empezar. Se cambian solo si aparece el archivo original. | Jenny, si existe | No bloquea |
| P-03 | Logos oficiales de las cuatro empresas, en SVG o PNG transparente de alta resolución. Hay copias en el repositorio de la Cumbre, pero no se toman sin tu autorización expresa. | Jenny | Tarjetas del ecosistema |
| P-04 | URL definitivas: Medical Shields (`medicalshields.com` o `medical-shields.com`), CTH, Ethical Shields AI (el sitio actual está en Netlify y se reemplazará), Cumbre (en migración), Vademécum de Péptidos, GesPro e IRIS. | Jenny | Etapa D (enlaces) |
| P-05 | Trayectoria breve: uno o dos datos verificables (por ejemplo, el año de origen) para la sección Quiénes somos. | Jenny | Texto final de la sección 2 |
| P-06 | Razón social, RIF y domicilio de la matriz, si difieren del nombre comercial. | Jenny o administración | Política de privacidad y pie legal |
| P-07 | Lista de motivos de contacto. Propuesta para aprobar: Información general · Alianzas estratégicas · Prensa y medios · Proveedores · Otro. | Jenny | Formulario |
| P-08 | Buzón institucional que recibirá el formulario. Hoy no existe correo en `ethicalshieldsgroup.com`. | Jenny | Activar el formulario |
| P-09 | Responsable del tratamiento de datos y plazo de conservación de los correos recibidos, para la política de privacidad. | Jenny | Política de privacidad |
| P-10 | Imagen para redes (1200×630). El favicon ya está hecho (18 nov). | Claude, en la Etapa C | SEO final |
| P-11 | Descripción breve aprobada del Vademécum de Péptidos (GesPro e IRIS ya no se describen aquí). | Jenny | Sección de innovación |

## Verificaciones que no pude hacer en esta sesión

- **No pude abrir** la plantilla de referencia (scrolltide.co) ni las webs de las empresas: no están en la lista de acceso de este entorno. Se verifican en la Etapa D, o puedes enviarme capturas de lo que te interese de la referencia.
- **Medical Shields:** en la cuenta de GoDaddy de Daniel aparece `medicalshields.com`, mientras que el correo y el Vademécum usan `medical-shields.com`. Hay que confirmar cuál es la web pública.
