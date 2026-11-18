# Estructura del proyecto: análisis de la Etapa A

## 18 nov 2026: órbita única y ordenada

Distribución actual del hero: una única órbita elíptica paramétrica con 16 ventanas equidistantes y un periodo de 128 segundos. Una sola fase determina posición, escala por profundidad e inclinación. El orden delante/detrás de la persona se deriva de la misma fase. Sin rutas SVG activas, oscilaciones individuales ni paralaje por puntero. Se conservan pausa global y movimiento reducido.


## 18 nov 2026: todas las pantallas en órbita

El hero usa 16 ventanas orbitales compactas en dos bandas de ocho, con radios y tamaños adaptados al ancho. Las cuatro escenas de empresa se integran como ventanas del mismo sistema. Las conexiones siguen sus posiciones; se conservan controles de pausa, movimiento reducido y orden delante/detrás de la persona.


## Implementación local del hero revisado (18 nov 2026)

La maqueta conserva el HTML de las demás secciones y usa dos archivos locales sin dependencias: `diseno/maqueta/hero-ecosistema.css` y `hero-ecosistema.js`. Construye 4 ventanas principales con imágenes originales y 12 ventanas de actividades con capas HTML/SVG. Las ventanas principales derivan su movimiento de posiciones estables para dar tiempo de lectura; las complementarias recorren una órbita elíptica con orden delante/detrás de la persona. Trece rutas SVG vinculan empresas y actividades, incluida CTH→Cumbre; sus pulsos comparten el reloj de la animación. Microanimaciones internas con CSS. Pausa global manual, pestaña oculta, fuera de pantalla y movimiento reducido detienen también las capas internas. Se mantienen las 16 ventanas en móvil, con tamaños y distribución adaptados. No se agregan librerías ni servicios. No cambia la arquitectura del futuro sitio ni autoriza publicación.


Fecha: 18 de noviembre de 2026. Estado: **propuesta en espera de aprobación.** Ninguna de estas recomendaciones está aprobada hasta que Jenny lo indique. Las decisiones que piden su respuesta están en `PENDIENTES.md`, sección "Decisiones de Jenny".

Este documento cubre los nueve entregables de la Etapa A del brief (sección 11).

---

## 1. Resumen del alcance

**Qué es:** una homepage corporativa con navegación por secciones, que presenta al grupo y lleva al visitante a las webs de sus cuatro empresas con el menor número de pasos posible.

**Qué incluye la primera versión:**

| Pieza | Detalle |
| --- | --- |
| Homepage | Cinco secciones: Hero, Quiénes somos, Nuestro ecosistema, Innovación aplicada y Contacto. |
| Página de privacidad | Es necesaria porque el formulario recoge datos personales. El brief pide enlaces de privacidad en el pie. |
| Página 404 | Página propia, sencilla y con la marca. |
| Navegación | Barra fija con Inicio, Quiénes somos, Nuestras empresas, Innovación y Contacto. En teléfono, un menú desplegable sencillo. |
| Tarjetas de empresa | Cuatro tarjetas con la misma jerarquía, cada una con logo, nombre, descripción breve y el botón "Visitar sitio web". |
| Formulario corporativo | Seis campos más la aceptación de la política de privacidad. Tiene protección contra spam y no guarda datos. |
| WhatsApp flotante | Usa el número de Medical Shields y un mensaje precargado, sin chatbot. |
| SEO técnico | Metadatos, Open Graph, canonical, sitemap, robots, datos estructurados e imágenes optimizadas. |
| Preparación bilingüe | La estructura queda lista para el inglés, pero solo se publica el español. |

**Fuera de alcance** (según el brief):
- catálogos, servicios, formularios o información comercial de las empresas;
- páginas internas extensas por empresa;
- una sección de historia independiente;
- CMS, backend, base de datos o Supabase;
- chatbot o automatizaciones de WhatsApp;
- traducción automática o versión en inglés publicada;
- publicación en producción y cambios de DNS sin aprobación expresa.

---

## 2. Arquitectura técnica recomendada

### Recomendación: Astro, con salida estática, TypeScript y CSS propio con variables de diseño

El sitio es contenido estático con dos piezas interactivas pequeñas: la animación del hero y el formulario.

| Criterio | Astro (estático) | React + Vite (SPA) |
| --- | --- | --- |
| HTML que recibe Google | Completo desde el servidor, sin depender de JavaScript. | Se arma en el navegador. Para un SEO fiable necesita prerenderizado adicional. |
| JavaScript que descarga el visitante | Solo el de la animación y el formulario (unos pocos KB). | Además del propio, el motor de React, unos 45 KB comprimidos, sin necesitarlo. |
| Español e inglés | Rutas por idioma integradas. | Hay que montarlas a mano. |
| Sitemap e imágenes | Integraciones oficiales: sitemap y optimización a AVIF/WebP en la compilación. | Hay que montar plugins. |
| Cloudflare Pages | Publica la carpeta `dist/` sin adaptador. | También es compatible. |
| Coherencia con el grupo | Es el stack que se aprobó como definitivo para la Cumbre (14 oct). | No coincide con lo aprobado. |

**Conclusión:** React + Vite funcionaría, pero para este caso agrega peso y pasos sin aportar nada. Astro entrega mejor SEO y mejor rendimiento con menos dependencias. Si más adelante una pieza necesitara React, Astro lo permite solo en esa pieza.

**CSS propio en lugar de Tailwind:** es una sola página con un sistema visual pequeño. Basta un archivo de variables (colores, tipografía, espacios) y estilos por componente, y así hay una dependencia menos. Si Jenny prefiere usar Tailwind, igual que la Cumbre, el cambio no afecta al resto de la arquitectura.

### Publicación

- **Cloudflare Pages Free**, en la cuenta corporativa del grupo, con un proyecto propio conectado solo a este repositorio.
- **Entorno de prueba:** la dirección `*.pages.dev`, con dos protecciones:
  - `noindex` mediante cabeceras;
  - acceso restringido con Cloudflare Access, la misma decisión que se tomó para la Cumbre el 18 nov.
- **El dominio sigue registrado en GoDaddy.** Conectarlo, por DNS o cambiando los servidores de nombres, es una decisión aparte que requiere la autorización de Jenny.

---

## 3. Estructura de componentes

```
Página (Layout)
├── Head SEO: título, descripción, canonical, Open Graph y JSON-LD
├── Enlace "Saltar al contenido" (accesibilidad)
├── Encabezado: logo del grupo + navegación (escritorio y menú móvil)
├── main
│   ├── Hero (#inicio)
│   │   ├── HeroEscena: persona + pantallas en movimiento (sección 4)
│   │   ├── Título aprobado + descriptor
│   │   └── Botón "Conoce nuestras empresas" → #empresas
│   ├── QuiénesSomos (#quienes-somos), fondo claro
│   │   ├── Título + texto aprobados + trayectoria breve
│   │   └── Botón "Conoce nuestras empresas" → #empresas
│   ├── Ecosistema (#empresas), fondo oscuro
│   │   └── TarjetaEmpresa × 4 (logo, nombre, descripción, "Visitar sitio web")
│   ├── Innovación (#innovacion), fondo claro
│   │   ├── Título + texto aprobados
│   │   ├── TarjetaIniciativa × N (solo las verificadas)
│   │   └── Botón "Descubre nuestra innovación" (destino por decidir)
│   └── Contacto (#contacto), fondo oscuro
│       ├── Título + texto aprobados
│       └── FormularioContacto
├── Pie: logo, descriptor, enlaces a las cuatro empresas, privacidad, aviso legal y ©
└── BotónWhatsApp (flotante)
```

**Los datos van aparte del diseño:**
- los textos van en `src/contenido/es.ts`, preparado para un `en.ts` futuro;
- las empresas y las iniciativas van en `src/datos/`.

Así, cambiar un texto o un enlace no obliga a tocar los componentes.

**La alternancia claro/oscuro (opción C aprobada)** queda así:
- Hero oscuro;
- Quiénes somos claro;
- Ecosistema oscuro;
- Innovación claro;
- Contacto oscuro;
- pie claro.

Es una propuesta: el brief pide fondo oscuro para "ecosistema e innovación, donde aporten jerarquía". Ver la decisión D-11 en `PENDIENTES.md`.

**Punto por resolver:** el brief nombra el botón "Descubre nuestra innovación", pero no dice a dónde lleva. La página no tiene páginas internas, así que hay dos opciones: dirigirlo a la web de Ethical Shields AI o quitarlo y dejar los enlaces en cada iniciativa. Es la decisión D-07.

---

## 4. Propuesta para el hero animado

### Concepto

En primer plano, una persona de espaldas contempla un espacio azul marino. Alrededor, en tres capas de profundidad, flotan pantallas pequeñas que giran despacio. Cada pantalla representa una de las nueve áreas del ecosistema:
- salud;
- atención especializada;
- tecnología;
- consultoría empresarial;
- investigación científica;
- formación profesional;
- inteligencia artificial;
- automatización;
- gestión empresarial.

Una luz turquesa sale de detrás de la figura. Las pantallas siguen un orden geométrico, como un arco o una órbita amplia, y no se distribuyen al azar. El efecto que se busca es de orden y conexión, no de caos tecnológico.

**Contenido de las pantallas:**
- ilustraciones o íconos originales, uno por área, en turquesa y blanco sobre azul marino;
- sin capturas reales de sistemas;
- sin fotos de pacientes ni de heridas: es sensible y es material de CTH;
- sin logos de terceros.

**Referencia visual:** la plantilla Aperture de Scrolltide es solo conceptual. No pude abrirla desde este entorno, porque el sitio no está en la lista de acceso. La propuesta parte de tu descripción y no copia nada de esa plantilla. Si quieres, en la Etapa C describes o capturas lo que te gusta de ella, para afinar.

### Técnica recomendada: transformaciones 3D de CSS con un script mínimo

| Opción | Peso | Teléfono | Accesibilidad | Mantenimiento | Veredicto |
| --- | --- | --- | --- | --- | --- |
| **A. CSS 3D** (`perspective`, `rotateY`, `translateZ`) con 12 a 18 pantallas en HTML y unos 3–5 KB de TypeScript propio | Muy bajo | La tarjeta gráfica hace el trabajo. En teléfono se usan menos pantallas. | Se pausa y se detiene con facilidad. | Sin dependencias. | **Recomendada** |
| B. Video en bucle (WebM/MP4) con imagen fija | 1–3 MB | Bueno, pero se pierde nitidez y se descarga peso extra. | Necesita controles de pausa. | Cada cambio exige volver a renderizar. | Alternativa si se quiere una estética de render 3D |
| C. WebGL con three.js | Más de 150 KB de librería | Consume batería y calienta el teléfono. | Complejo. | Alto. | Descartada. En la Cumbre también se descartó three.js. |
| D. Lottie o GSAP | 30–70 KB | Bueno. | Correcta. | Depende de un tercero. | Innecesaria para este movimiento |

**Rendimiento:** el elemento LCP (el primero grande que pinta la pantalla) es una imagen fija del hero, en AVIF/WebP y precargada.
- La animación arranca después de la carga, con `requestIdleCallback` o un retardo corto.
- Se pausa cuando el hero sale de la pantalla (IntersectionObserver) y cuando la pestaña no está visible.
- Solo se animan `transform` y `opacity`, para no forzar recálculos de diseño.
- Se usan 6 a 8 pantallas en teléfono y 12 a 18 en escritorio.

**Movimiento reducido:** con `prefers-reduced-motion: reduce` se ve la composición estática, la misma escena sin giro. Además, conviene un botón discreto de pausa, que pide WCAG 2.2.2 para animaciones de más de 5 segundos.

**La persona:** es la decisión D-04, porque afecta a la licencia y a la calidad.
- **Recomendada:** ilustración vectorial original de una silueta de espaldas, con luz turquesa. Es liviana, nítida en cualquier pantalla, tiene licencia propia y no muestra a una persona identificable.
- **Alternativa:** foto de banco de imágenes con licencia comercial verificada, de espaldas y sin rostro.
- **No recomendada:** imagen generada con IA sin revisar sus términos de uso comercial, o la foto de una persona real del equipo sin su consentimiento escrito.

---

## 5. Dependencias y licencias

| Dependencia | Para qué | Licencia | Notas |
| --- | --- | --- | --- |
| Astro | Generador del sitio | MIT | Versión estable al iniciar la Etapa B, fijada en `package-lock.json`. |
| @astrojs/sitemap | Sitemap | MIT | Oficial. |
| sharp | Optimización de imágenes (la usa Astro) | Apache-2.0 | Solo en la compilación. |
| TypeScript | Tipado | Apache-2.0 | Solo en desarrollo. |
| Fuentes tipográficas | Títulos y texto | SIL OFL, que permite uso comercial | Alojadas en el propio sitio, sin Google Fonts externo, para no dar datos del visitante a terceros y para simplificar la CSP. La familia se elige en la Etapa C. |
| Íconos de las pantallas | Las nueve áreas | Lucide (ISC) o dibujo propio | Se incluyen como SVG, sin librería en tiempo de ejecución. |
| Playwright | Pruebas automáticas | Apache-2.0 | Solo en desarrollo. |
| axe-core | Pruebas de accesibilidad | MPL-2.0 | Solo en desarrollo. |
| Lighthouse | Rendimiento y SEO | Apache-2.0 | Solo en desarrollo. |
| Cloudflare Turnstile | Protección del formulario contra spam | Servicio gratuito de Cloudflare | Hay que crear un widget en la cuenta del grupo. Requiere autorización. |
| Proveedor de correo (Brevo recomendado) | Entregar el formulario por correo | Plan gratuito | Hay que crear la cuenta y autenticar el dominio en DNS. Requiere autorización (decisión D-05). |

**Lo que el visitante no descarga:**
- frameworks de interfaz;
- librerías de animación;
- analítica;
- cookies de terceros.

**Licencias de contenido:** el logo y los logos de las empresas son del grupo. Las imágenes del hero tendrán licencia documentada, con el archivo de origen y la licencia anotados en `docs/PRUEBAS.md`, sección de recursos.

---

## 6. Formulario de contacto: mecanismo propuesto

**El más sencillo y seguro sin base de datos:**

1. El navegador valida los campos y muestra los errores de forma accesible.
2. Turnstile verifica que no sea un robot, sin cookies de seguimiento.
3. Una función de Cloudflare Pages (`functions/api/contacto.ts`) hace lo siguiente:
   - vuelve a validar todo en el servidor (largo, formato y lista cerrada de motivos);
   - comprueba el token de Turnstile;
   - limita la frecuencia de envíos;
   - envía un correo al buzón institucional mediante la API del proveedor.
4. **No se guarda nada.** Los datos solo pasan de camino al correo, y los registros de la función no incluyen nombre, correo ni mensaje.
5. La clave del proveedor y la de Turnstile viven como secretos de Cloudflare, nunca en el repositorio.

**Requisitos antes de activarlo (D-05):**
- buzón de destino;
- cuenta del proveedor;
- autenticación del dominio (SPF/DKIM en GoDaddy);
- widget de Turnstile;
- texto de la política de privacidad.

**Mientras tanto:** el formulario se construye y se prueba en **modo simulado**, que valida todo pero no envía nada, como se hizo con la inscripción de la Cumbre. El botón de WhatsApp queda como canal activo.

**Alternativa descartada por ahora:** enviar con Cloudflare Email Routing, que no necesita un proveedor externo. Exige que el DNS del dominio esté en Cloudflare, y eso no está autorizado.

---

## 7. SEO técnico y seguridad

**SEO:**
- HTML semántico: un solo `h1` (el título del hero), y `h2` en cada sección;
- `lang="es"`, título y descripción únicos, canonical `https://ethicalshieldsgroup.com/`;
- Open Graph y Twitter Card, con una imagen de 1200×630 hecha a partir del logo;
- `sitemap.xml` y `robots.txt` solo en producción;
- datos estructurados JSON-LD:
  - `Organization` con `subOrganization` para las cuatro empresas (solo las URL verificadas);
  - `WebSite`;
- `hreflang` solo cuando exista la versión en inglés;
- imágenes con dimensiones declaradas (sin saltos de diseño), AVIF/WebP y carga diferida debajo del hero;
- metas de Core Web Vitals en teléfono: LCP < 2,5 s, CLS < 0,1 e INP < 200 ms.

**Seguridad, con cabeceras en `public/_headers`:**
- `X-Robots-Tag: noindex` en `*.pages.dev`;
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` y `frame-ancestors 'none'`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy`, con cámara, micrófono, ubicación y pagos apagados;
- CSP estricta: `default-src 'self'`, más Turnstile y la función propia. Primero en modo Report-Only y después activa, con autorización, como en la Cumbre;
- HSTS solo cuando el dominio esté conectado, por etapas y con autorización;
- sin scripts de terceros, salvo Turnstile en el formulario;
- enlaces externos con `rel="noopener"`.

---

## 8. Riesgos técnicos

| # | Riesgo | Impacto | Mitigación |
| --- | --- | --- | --- |
| R1 | **Logo del grupo sin archivo vectorial.** El símbolo "Evolución de origen" solo existe en imágenes rasterizadas generadas con IA (carpeta "Prueba de logos para Grupo") y en recortes. | Se vería borroso en pantallas de alta densidad, no serviría para imprenta y no da colores exactos. | Pedir o encargar el vector (SVG) antes de la Etapa C. Si no llega, solo se usa una versión provisional marcada como tal en el entorno de prueba. |
| R2 | ~~**Dos nombres en uso.**~~ **Resuelto el 18 nov: Ethical Shields Group (D-01).** Antes: "Ethical Shields Group" en el brief y "Grupo Ethical Shields" en lo aprobado el 16 y 18 nov. | Inconsistencia en el logo, los títulos, el SEO y los datos estructurados. | Decisión D-01 antes de componer el logo. |
| R3 | **Enlaces de empresas sin verificar o en transición:** CTH se está rediseñando; Ethical Shields AI cambiará de sitio; la Cumbre está migrando a Cloudflare; el correo de Medical Shields usa `medical-shields.com` y la web `medicalshields.com`. | Enlaces rotos o hacia sitios viejos. | Verificar las cuatro URL antes de la Etapa D, con una prueba automática de enlaces en cada publicación. |
| R4 | **Afirmaciones de innovación:** IRIS no está lista para comercializar y los péptidos son compuestos de investigación. | Riesgo legal y de reputación. | Mostrar solo lo verificado, con su estado real (D-06), y textos revisados por Jenny. |
| R5 | **Rendimiento del hero en teléfonos de gama baja.** | Mala primera impresión y peor SEO. | Imagen fija como LCP, menos pantallas en teléfono, pausa fuera de pantalla y medición en un teléfono real. |
| R6 | **Formulario sin destino definido.** | No se puede activar. | Modo simulado hasta la D-05. WhatsApp sigue activo. |
| R7 | **Indexación accidental del entorno de prueba.** | Contenido duplicado en Google antes del lanzamiento. | `noindex` en las cabeceras y Cloudflare Access. Se verifica con una prueba automática. |
| R8 | **Datos legales faltantes** (razón social, RIF y domicilio). | La política de privacidad queda incompleta. | No se publica en producción sin ellos (brief, sección 1). |
| R9 | **Logos de las empresas:** solo hay copias en el repositorio de la Cumbre, y el brief prohíbe reutilizar archivos de otros proyectos. | Bloquea las tarjetas. | Jenny entrega los originales o autoriza expresamente copiarlos (recurso P-03). |
| R10 | **Referencia visual con derechos de terceros.** | Riesgo de copiar. | El diseño es original y no se usa código, imágenes ni animaciones de la plantilla. |
| R11 | **Pieza visual de la persona del hero.** | Licencia o calidad insuficiente. | Decisión D-04, con la licencia documentada. |

---

## 9. Estructura propuesta del repositorio (se crea en la Etapa B)

```
ethicalshieldsgroup-web/
├── CLAUDE.md · README.md · .gitignore
├── package.json · package-lock.json · astro.config.mjs · tsconfig.json
├── docs/                     documentación (ya creada)
├── src/
│   ├── pages/
│   │   ├── index.astro       homepage
│   │   ├── privacidad.astro  política de privacidad
│   │   └── 404.astro
│   ├── layouts/Base.astro    head SEO, encabezado, pie y WhatsApp
│   ├── components/           Encabezado, Hero, HeroEscena, QuienesSomos, Ecosistema,
│   │                         TarjetaEmpresa, Innovacion, TarjetaIniciativa, Contacto,
│   │                         FormularioContacto, Pie, BotonWhatsApp, DatosEstructurados
│   ├── contenido/es.ts       textos aprobados (en.ts en el futuro)
│   ├── datos/                empresas.ts, iniciativas.ts, sitio.ts (URL, WhatsApp)
│   ├── scripts/              hero.ts, formulario.ts, menu.ts
│   ├── estilos/              tokens.css (colores, tipografía, espacios), global.css
│   └── assets/               logo, logos de empresas e imágenes del hero (optimizadas al compilar)
├── public/
│   ├── _headers · robots.txt
│   └── favicon e imagen para redes
├── functions/api/contacto.ts  función del formulario (Etapa D)
├── pruebas/                  Playwright, axe, enlaces, cabeceras y Lighthouse
└── herramientas/             verificación previa a la publicación
```

---

## 10. Plan de implementación y pruebas

Cada etapa termina con sus pruebas documentadas en `PRUEBAS.md` y con la autorización de Jenny para pasar a la siguiente.

| Etapa | Entregable | Criterio de aceptación verificable |
| --- | --- | --- |
| **A** Análisis | Este documento y la documentación del repositorio. | Jenny responde las decisiones D-02 a D-11 y autoriza la Etapa B. |
| **B** Preparación | Repositorio en GitHub, proyecto Astro vacío, estructura, tokens, `_headers` y `robots` de prueba, pruebas base. | `npm run build` sin errores. Las pruebas base corren. No hay secretos en el repositorio. |
| **C** Visual | Homepage completa con datos provisionales marcados, hero animado, navegación y tarjetas. | Revisión visual de Jenny en PC y teléfono (360, 390, 768, 1280 y 1920 px). Movimiento reducido verificado. Lighthouse en teléfono ≥ 90 en rendimiento y 100 en accesibilidad y SEO. Sin desbordes horizontales. |
| **D** Funcionalidad | Enlaces confirmados, formulario (simulado o real según la D-05), WhatsApp, privacidad, SEO y cabeceras. | Prueba de enlaces sin fallas. Formulario: validación, envío de prueba o simulación, rechazo de spam y de datos inválidos. axe sin violaciones. Navegación completa con teclado. CSP sin violaciones. JSON-LD válido. |
| **E** Publicación | Despliegue en `*.pages.dev` con Access, prueba final y, con autorización aparte, conexión del dominio. | `noindex` verificado en el entorno de prueba. Prueba en el iPhone de Jenny. Lista de lanzamiento firmada por Jenny antes de tocar el DNS. |

---

## 11. Recursos y datos pendientes

La lista completa, con su responsable, está en `PENDIENTES.md`, secciones "Decisiones de Jenny" y "Recursos y datos". **No se necesita ninguna contraseña ni clave secreta** en esta etapa. Las claves de Turnstile y del proveedor de correo las crea Jenny y se guardan directamente en Cloudflare cuando llegue la Etapa D.
