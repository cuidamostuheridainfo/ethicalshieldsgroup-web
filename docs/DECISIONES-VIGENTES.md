# Decisiones vigentes

Lo que está aquí ya se decidió. No se reabre salvo que Jenny lo pida o aparezca un motivo nuevo. En ese caso se tacha la línea, se anota la fecha y se escribe la decisión que la reemplaza.

## Identidad (brief del 18 nov 2026 y decisiones del grupo)

- **Matriz:** Ethical Shields Group es la empresa matriz de cuatro empresas: Medical Shields, Cuidamos tu Herida (CTH), Ethical Shields AI y Cumbre CHP. Ethical Shields AI es una empresa integrante, no la matriz, y `ethicalshields.ai` no representa al grupo.
- **Nombre visible (D-01, decidido por Jenny el 18 nov):** **Ethical Shields Group**, en línea con el dominio `ethicalshieldsgroup.com`. Se usa en el logo, los títulos, el SEO, los datos estructurados, el WhatsApp y todos los textos. Reemplaza a "Grupo Ethical Shields" en este proyecto. Los otros proyectos (Cumbre, CTH, MS, Ethical Shields AI) actualizan el nombre por separado; este repositorio no los toca.
- **Descriptor:** Salud · Tecnología · Innovación.
- **Dominio:** `ethicalshieldsgroup.com`, comprado en GoDaddy el 18 nov 2026. Sigue registrado en GoDaddy. No se cambian sus DNS sin autorización expresa.
- **Proyección:** internacional.
- **Logo:** símbolo **"Evolución de origen"** (propuesta 4, elegida por el comité el 16 nov). Son dos piezas entrelazadas en azul marino y turquesa que forman un cuadrado, a partir de la cruz de Medical Shields. El símbolo no se crea ni se sustituye sin autorización. Solo se actualiza su composición, que queda así: ETHICAL SHIELDS GROUP / Salud · Tecnología · Innovación. Ya no dice "Grupo Medical Shields" ni "Grupo Ethical Shields".
- **Logo aprobado (18 nov, Jenny): propuesta B.**
  - Símbolo "Evolución de origen", redibujado en vector.
  - ETHICAL SHIELDS GROUP en mayúsculas, con GROUP en peso medio y color de acento.
  - Raya de acento debajo de ETHICAL.
  - Descriptor: Salud · Tecnología · Innovación.
  - Tipografía Plus Jakarta Sans, con el texto convertido a trazos.
  - Archivos y reglas de uso en `diseno/logo/LEEME.md`. Los cambios se hacen en `herramientas/generar_logo.py`.
  - Descartada: la propuesta A ("Ethical Shields Group" en una línea), archivada en `diseno/logo/propuestas-18nov/`.
- **Colores:** azul marino, turquesa, blanco y gris muy claro. Los valores exactos se sacan del logo original (P-02).
- **Datos legales:** el nombre visible es comercial. La denominación jurídica se verifica antes de publicar información legal.

## Propósito y alcance (brief, secciones 2, 3 y 6)

- **Es la puerta de entrada al ecosistema, no un catálogo.** No se duplican los catálogos, servicios, formularios ni la información comercial de las empresas.
- **Mensaje rector:** "Cuatro empresas especializadas. Una visión compartida."
- **Una homepage con navegación por secciones:** Hero, Quiénes somos, Nuestro ecosistema, Innovación aplicada y Contacto. Sin páginas internas extensas por empresa. Sin una sección de historia independiente: la trayectoria va breve dentro de Quiénes somos.
- **Tarjetas de empresa:**
  - cuatro, con igual jerarquía visual;
  - cada una con logo oficial, nombre, descripción breve y el botón "Visitar sitio web";
  - son el elemento principal de navegación.
- **Mensajes aprobados:** son los del brief, copiados en `CONTENIDOS.md`. No se sustituyen sin autorización.
- **Innovación:** solo iniciativas verificadas. GesPro e IRIS pertenecen a Ethical Shields AI. El Vademécum de Investigación en Péptidos es una iniciativa de Medical Shields, no una empresa. No se presentan compuestos de investigación como tratamientos aprobados.
- **WhatsApp flotante:**
  - número de Medical Shields, +58 412-2853958;
  - enlace `https://wa.me/584122853958`;
  - mensaje precargado: "Hola, estoy visitando la página de Ethical Shields Group y quisiera recibir más información";
  - sin chatbot ni automatizaciones.
- **Idiomas:** la web queda preparada para español e inglés, pero solo se publica el español. Sin traducción automática.

## Dirección visual (brief, secciones 4 y 5)

- **Opción C aprobada:** alternancia equilibrada de secciones claras y oscuras.
- **Hero:**
  - azul marino oscuro con iluminación turquesa y tipografía blanca;
  - concepto: una persona contempla un universo de pantallas pequeñas que giran despacio;
  - las pantallas representan las nueve áreas del ecosistema, no solo IA;
  - debe transmitir orden y no caos;
  - incluye una versión estática para movimiento reducido.
- **Se evita:** saturación, exceso de efectos, neones agresivos y estética de videojuego.
- **Referencia (Aperture, de Scrolltide):** solo conceptual. No se copian su código, su diseño exacto, sus imágenes ni sus animaciones.

## Tecnología y organización

- **Proyecto independiente:** repositorio y configuración propios. No se tocan los repositorios, sitios, configuraciones ni bases de datos de la Cumbre, CTH, Medical Shields, Ethical Shields AI, GesPro ni IRIS.
- **Hosting:** Cloudflare Pages Free, en la cuenta corporativa del grupo, con un proyecto propio. Decisión del grupo del 17 y 18 nov.
- **Sin CMS, backend, Supabase, bases de datos ni servicios externos** sin una justificación concreta y la aprobación de Jenny.
- **SEO técnico desde el inicio.** El entorno de prueba no se indexa.
- **Publicación:** primero un entorno de prueba protegido. La producción y el dominio requieren aprobación expresa.
- **Repositorio (D-08, 18 nov):** `ethicalshieldsgroup-web`, **privado**, en la cuenta de GitHub **cuidamostuheridainfo** (la misma de la Cumbre), rama `main`. Dirección: https://github.com/cuidamostuheridainfo/ethicalshieldsgroup-web. Carpeta local: `C:\Users\Jenny Lopez\Documents\GitHub\ethicalshieldsgroup-web`.
- **Commits:** los hace Jenny con GitHub Desktop.
- **Etapas:** A → B → C → D → E. Cada una necesita autorización.

## Propuestas de la Etapa A, en espera de aprobación

Pasan a la sección de decisiones cuando Jenny las apruebe (ver `PENDIENTES.md`):

- Astro estático con TypeScript y CSS propio (D-02).
- Hero con CSS 3D y una imagen fija como primer contenido (D-03), y figura en ilustración vectorial original (D-04).
- Formulario: función de Cloudflare + Turnstile + proveedor de correo, sin guardar datos; modo simulado hasta tener destino (D-05).
- Cloudflare Access en el entorno de prueba (D-09).
- Sin analítica en la primera versión (D-10).

## Decisiones reemplazadas

Ninguna todavía.
