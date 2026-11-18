# Pendientes

Última actualización: 18 de noviembre de 2026 (Etapa A entregada y documentación inicial creada).

## Siguiente paso

1. Jenny publica este repositorio en GitHub con GitHub Desktop, después de responder la D-08.
2. Jenny responde las decisiones D-02 a D-11 y autoriza (o no) la Etapa B.
3. Hasta entonces no se escribe código ni se crea ninguna cuenta o servicio.

## Decisiones de Jenny

Cada decisión trae la recomendación de Claude. El detalle de cada una está en `ESTRUCTURA.md`.

| # | Decisión | Opciones | Recomendación |
| --- | --- | --- | --- |
| ~~D-01~~ | ~~Nombre visible del grupo.~~ **Decidido el 18 nov: Ethical Shields Group.** | | |
| D-02 | **Stack.** | Astro + CSS propio · Astro + Tailwind (como la Cumbre) · React + Vite | Astro + CSS propio. |
| D-03 | **Técnica del hero.** | CSS 3D · video en bucle | CSS 3D. |
| D-04 | **Figura de la persona en el hero.** | Ilustración vectorial original · foto con licencia comercial | Ilustración vectorial original. |
| D-05 | **Formulario.** Mecanismo, buzón de destino y proveedor de correo. | Función de Cloudflare + Turnstile + Brevo, sin guardar datos · solo WhatsApp por ahora | Construirlo en modo simulado ya. Activarlo cuando existan el buzón y el proveedor. |
| D-06 | **Innovación aplicada: qué se muestra y con qué estado.** IRIS todavía no está lista para comercializar; GesPro va primero; el Vademécum es investigación. | Mostrar IRIS como "en desarrollo" · omitir IRIS hasta que esté lista | GesPro y el Vademécum con enlace; IRIS solo si Jenny confirma cómo describir su estado. |
| D-07 | **Destino del botón "Descubre nuestra innovación".** El brief no lo define. | Web de Ethical Shields AI · quitar el botón y dejar enlaces por iniciativa | Quitarlo y dejar un enlace en cada iniciativa: es un paso menos y no favorece a una sola empresa. |
| D-08 | **Cuenta de GitHub, nombre y visibilidad del repositorio.** | Cuenta cuidamostuheridainfo · cuenta propia del grupo | Repositorio **privado** desde el inicio, con el nombre `ethicalshieldsgroup-web`. La cuenta la decides tú; si el grupo va a tener una cuenta propia, conviene crear el repositorio ahí desde el principio. |
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
| P-11 | Descripción breve aprobada de GesPro, IRIS y el Vademécum, con su estado real. | Jenny | Sección de innovación |

## Verificaciones que no pude hacer en esta sesión

- **No pude abrir** la plantilla de referencia (scrolltide.co) ni las webs de las empresas: no están en la lista de acceso de este entorno. Se verifican en la Etapa D, o puedes enviarme capturas de lo que te interese de la referencia.
- **Medical Shields:** en la cuenta de GoDaddy de Daniel aparece `medicalshields.com`, mientras que el correo y el Vademécum usan `medical-shields.com`. Hay que confirmar cuál es la web pública.
