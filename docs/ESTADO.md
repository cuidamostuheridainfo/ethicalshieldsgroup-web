# Estado del proyecto

Última actualización: 23 de noviembre de 2026.

**Resumen para retomar:** estamos en la **Etapa A** y la maqueta de la homepage está en revisión del comité. No hay sitio definitivo, no hay cuentas ni servicios creados y no se tocó el DNS. El hero vigente es el "mar de soluciones": la cúpula de pantallas genéricas, la bajada de las cuatro empresas y la persona realista. Las tarjetas se rediseñaron el 23 nov (imagen arriba, texto abajo sobre fondo claro y textos nuevos). El enlace del comité es https://cuidamostuheridainfo.github.io/ethicalshieldsgroup-web/. El último commit con push es `483a613`; los cambios del 23 nov esperan el commit de Jenny. Los pendientes, en orden, están en `PENDIENTES.md`.

## 23 nov 2026: formulario de contacto en blanco (Jenny)

- El formulario de "Conectemos nuevas oportunidades" es ahora una tarjeta blanca sobre el fondo azul oscuro.
- Etiquetas en negro; "(opcional)" y la nota de la maqueta en gris.
- Campos con fondo blanco y borde azul de la marca (#0E8FCB). Al enfocarlos, el borde pasa a marino y aparece un halo azul.
- La casilla y el enlace de privacidad pasan a azul. El botón "Solicitar información" sigue turquesa y ahora usa la tipografía de la página (antes usaba la del navegador).

## 23 nov 2026: logos y textos en Conoce nuestro ecosistema (Jenny)

- **Logos oficiales** en las cuatro tarjetas, en `diseno/maqueta/logos-empresas/`:
  - Medical Shields: SVG en vector para fondo claro, copiado de `cumbre-web`;
  - Cuidamos tu Herida: PNG a color de 1000 px, de la carpeta de Drive que pasó Jenny;
  - Cumbre CHP: logo de la II Cumbre ("Heridas, Piel y Longevidad"), versión oscura de `cumbre-web`, reducida a 1000 px;
  - Ethical Shields AI: imagen que envió Jenny por el chat, sin el fondo blanco y recortada (1000 px).
  Jenny autorizó leer `cumbre-web` solo para copiar los logos; no se modificó nada ahí.
- **Sin título visible:** el nombre está en el logo. Queda como h3 oculto para lectores de pantalla y buscadores.
- **Orden** igual que en el hero: Medical Shields, Cuidamos tu Herida, Cumbre CHP y Ethical Shields AI. El pie usa el mismo orden.
- **Descripciones nuevas** (ver CONTENIDOS).
- El PNG del primer enlace de Drive ("medebesunosperros.png") era el logo de CTH en blanco: no se usó, porque no se ve sobre fondo blanco.

## 23 nov 2026: texto de trayectoria en Quiénes somos (Jenny)

- El recuadro "[Trayectoria breve…]" se reemplazó por el texto de Jenny (ver CONTENIDOS). "Hace más de seis años" cuenta desde 2019, cuando empezó Medical Shields; Jenny confirmará la fecha.
- El botón "Conoce nuestras empresas" de esta sección pasó a ser el enlace "Descubre cómo nuestras empresas pueden conectar contigo →". Es un enlace y no un botón porque la frase es larga: como botón se partía en dos líneas en PC y en tres en el teléfono.
- Probado en Chrome a 1440, 390 y 360 px: sin errores ni desborde y con un solo h1.

## 23 nov 2026: rediseño de las tarjetas del hero (pedido de Jenny, a partir de una observación de Marisol)

- **Diseño de la tarjeta:** la imagen va arriba, completa y con un corte limpio. Debajo hay una franja casi blanca (#fbfcfe) con el nombre en azul marino y la línea en gris azulado, ambos centrados. El texto ya no tapa la imagen, que antes ocultaba la curación del brazo en CTH y los productos en Medical Shields. La letra es un 5 % más pequeña: los cuatro nombres caben en una línea en todos los anchos. Los puntos de color son más oscuros y llevan un aro suave para verse sobre el fondo claro. El borde y el brillo de cada tarjeta no cambian.
- **Textos:** ver CONTENIDOS. Hay una línea para PC y otra corta para tableta y teléfono.
- **Posiciones y orden:** arriba Medical Shields (izquierda) y Cuidamos tu Herida (derecha); abajo Cumbre CHP (izquierda) y Ethical Shields AI (derecha). En PC, "arriba" es el par exterior, más alto. Las empresas bajan de la cúpula en ese mismo orden.
- **Imagen de Medical Shields:** se quitó la pareja del primer plano, porque no se entendía qué miraban. Se recortó la zona del fondo de la ilustración original: el globo con su red de conexiones y personas cerrando una alianza. Archivo: `escenas-ecosistema/medical-fondo.webp` (406×254). Se intentó editar la imagen con IA en Canva, pero el sistema bloqueó el envío y no se forzó.
- **Alto del hero:** antes medía 900 px como mínimo y la fila de abajo quedaba fuera de pantalla en portátiles, tabletas y teléfonos bajos. Ahora mide lo que la pantalla (mínimo 620 px). Las tarjetas se ubican entre el botón "Conoce nuestras empresas" y el botón de pausa, y el hero solo crece si no caben.
- **WhatsApp en el teléfono:** se oculta mientras se ve el hero, para no tapar las tarjetas, y aparece al bajar. En PC y tableta no cambia.
- **Pruebas:** ver PRUEBAS. Falta la prueba en el iPhone de Jenny.

## 19 nov 2026: textos de las tarjetas del hero (pedido de Jenny)

- Medical Shields: "Especializada en soluciones y tecnología para el sector salud".
- Cuidamos tu Herida: "Especialistas en heridas y piel, para pacientes e instituciones" (propuesta de Claude a partir de la idea de Jenny).
- Ethical Shields AI: "Inteligencia artificial para empresas". Se quitó la etiqueta "En desarrollo" de la tarjeta, porque ahora describe a la empresa y no un producto.
- Cumbre CHP: "Encuentro interdisciplinario de la medicina para el cuidado de heridas y longevidad".

Comprobado en Chrome a 1440, 1024, 390 y 360 px: el texto cabe en las tarjetas y no hay errores.

## 18 nov 2026, noche: hero "mar de soluciones" (concepto de Jenny)

Idea: en el mercado hay miles de opciones y no sabes dónde buscar, pero en Ethical Shields Group están las soluciones. Reemplaza las ventanas en órbita.
- **Cúpula de arriba:** pantallas genéricas del mercado, sin marcas ni texto, todas distintas: 62 en PC (tres anillos) y 16 en teléfono (dos anillos), comprobado en Chrome. Son 72 ilustraciones de rubros variados (tiendas, envíos, bancos, apps, comida, viajes y más), en tonos apagados, generadas con `herramientas/generar_mercado.py` en `diseno/maqueta/mercado/`. Giran despacio, todas juntas.
- **La elección:** a los 2,6 s, y cada 2,3 s después, una pantalla del frente de la cúpula sale y baja hasta quedar junto a la persona, convertida en una empresa del grupo, en este orden: Cuidamos tu Herida, Cumbre CHP, Medical Shields y Ethical Shields AI ("En desarrollo"). Quedan dos a cada lado. Al terminar (unos 11 s), la cúpula se atenúa y las cuatro empresas quedan destacadas. La animación ocurre una sola vez.
- **Teléfono:** las cuatro tarjetas quedan grandes, dos a cada lado de la persona, con nombre y una línea.
- Con movimiento reducido se ve directamente el estado final; la pausa manual y la automática siguen funcionando. Probado en Chrome a 1440 y 390 px, en cuatro momentos de la secuencia, sin errores. Falta la prueba en el teléfono de Jenny.

## 18 nov 2026, noche: cúpula de pantallas y enlace de GitHub Pages

- **Balance con la referencia** (pedido de Jenny, viendo la PC). La persona se ve más pequeña (44 % del alto del hero en PC, 42 % en teléfono) y está un poco más arriba del borde. Las 8 ventanas con nombre quedan más cerca de ella. Encima se agregó una cúpula de tres anillos de pantallas pequeñas, solo con imagen (28, 32 y 36 en PC; 12, 14 y 16 en teléfono), que giran junto con las ventanas en el mismo sentido, con la misma velocidad y con separación uniforme. Las pantallas pequeñas siempre quedan detrás de las ventanas con nombre y de la persona. En Chrome, en 6 anchos, la superposición máxima entre ventanas con nombre es del 5 % en PC y del 0 % en teléfono. Sin errores. Falta la prueba en el teléfono de Jenny.
- **GitHub Pages activo** (18 nov, 18:18): repositorio público, rama `main`, carpeta raíz. https://cuidamostuheridainfo.github.io/ethicalshieldsgroup-web/ abre la maqueta. Comprobado sobre el sitio publicado: el HTML, el JS, las imágenes y el logo responden 200. Probado en Chrome en 6 anchos, sin errores; la superposición máxima entre ventanas con nombre es del 3 %. Cada commit con push lo actualiza en uno o dos minutos.
- **Enlace para el comité:** Jenny eligió hacer público el repositorio y usar GitHub Pages (ver DECISIONES-VIGENTES). Se agregaron `index.html` en la raíz, que lleva a la maqueta, y `.nojekyll`. La copia publicada en Claude queda reemplazada por este enlace.

## 18 nov 2026, noche: copia para el comité

Copia de la maqueta publicada como página privada de Claude para que la revise el comité: "Ethical Shields Group · Propuesta de homepage para el comité", https://claude.ai/artifact/TP96jmDBpF1rEEZ25jmxq6. Es igual a `diseno/maqueta/`, con rutas planas y la foto de fondo y el recorte en WebP (22 y 26 KB). Comprobada en Chrome en 6 anchos, sin errores. Solo la ve Jenny hasta que ella la comparta. No es el sitio ni el entorno de prueba de Cloudflare. Si la maqueta cambia, la copia hay que volver a publicarla.

## 18 nov 2026, noche: paso uniforme y sincronizado (pedido de Jenny)

Las ventanas se amontonaban abajo, al frente, porque el reparto corregido las hacía ir más lento al pasar por delante y por detrás. Se volvió a la separación exacta: todas a la misma distancia y a la misma velocidad. Para que no se tapen, ahora hay **8 ventanas en PC y tableta** (dos por empresa: las cuatro de empresa, Unidad B2B, Medicina en desastres, Nuevas alianzas e IRIS) y **6 en teléfono** (las cuatro de empresa, Unidad B2B e IRIS), en orden alternado por empresa. El cálculo de una vuelta completa da 0 % de superposición entre ventanas en 1440, 1280, 1024, 768, 390 y 360 px, y Chrome no muestra errores. Las otras 8 escenas siguen en el código, sin mostrarse.

## 18 nov 2026, noche: corrección del hero (revisión visual de Claude)

Revisión en Chrome a 1440, 1280, 1024, 768, 390 y 360 px, con la animación en marcha y con movimiento reducido, antes y después de los cambios: sin errores de consola y sin desborde horizontal. Se mantiene la órbita única. Correcciones:
- **Teléfono (hasta 820 px):** menos ventanas y más grandes (reemplazado después: ver la entrada "paso uniforme y sincronizado").
- **Legibilidad:** cada ventana muestra solo la empresa, un título corto y el estado ("En desarrollo" o "En apertura"). Se quitaron las descripciones y los mini dibujos. Texto de 12 px como mínimo (título de 15 px en PC y de 13 px en teléfono); las ventanas del fondo se ven al 80 % por la distancia.
- **Extremos de la órbita:** la rotación lateral máxima bajó de 52° a 38°. El reparto acelerado en los lados se retiró después, porque amontonaba las ventanas al frente.
- **Tableta vertical:** persona más grande y órbita más arriba, para no dejar un hueco bajo el botón.
- **Peso:** las escenas se muestran en WebP de 640 px (35 a 46 KB cada una, unos 160 KB en total, antes 1,2 MB). Los JPG originales quedan en `escenas-ecosistema/` como archivos maestros.
- **Pendiente:** prueba en el iPhone de Jenny.

## 18 nov 2026: órbita única y ordenada

Jenny pidió ordenar el movimiento alrededor de la persona. Las 16 ventanas comparten una sola órbita elíptica, separación angular uniforme, sentido y velocidad comunes. Se eliminan las órbitas contrapuestas, alturas oscilantes, inclinación lateral y desplazamiento por puntero; se ocultan las líneas de conexión y se detienen los movimientos internos para reducir ruido. Se mantienen imágenes, nombres y contenidos, intercalados por empresa. Persona y mensaje conservados.


## 18 nov 2026: todas las pantallas en órbita

Se retiraron las cuatro ventanas grandes de posiciones fijas. Sus imágenes y nombres ahora forman parte de las 16 pantallas orbitales, todas de tamaño compacto y con dos bandas de movimiento. No se borraron las imágenes: se reutilizan dentro de las pantallas. Persona, mensaje y demás secciones conservados.


## 18 nov 2026: hero narrativo de las cuatro empresas

Jenny autorizó aplicar el concepto revisado: cuatro escenas protagonistas y doce ventanas de actividades (16 en total), con movimiento creativo y conexiones. Se conservan la persona, el mensaje y las demás secciones. Nuevos archivos de la maqueta: `hero-ecosistema.css`, `hero-ecosistema.js` y cuatro imágenes originales en `escenas-ecosistema/`. Las ventanas pequeñas incorporan flujos, agenda, redes, capas y estructuras en movimiento. Un pulso vincula explícitamente CTH con Cumbre. B2B se presenta en apertura; AI e IRIS, en desarrollo. Sin publicación ni intervención de otros proyectos. Imágenes generadas como ilustraciones conceptuales: no son fotografías de personal, productos o eventos reales. Las ilustraciones previas se conservan.


## 18 nov 2026: mejora autorizada del hero de la maqueta

Jenny autorizó mejorar solo el hero local, conservar la persona y el mensaje y mantener más de diez pantallas. Se implementaron 16 ventanas en tres distancias, dos caras ilustradas por ventana, orden explícito delante/detrás de la persona, variaciones de escala/altura/contraste, luz ambiental y diez escenas vectoriales originales en `diseno/maqueta/escenas/`. Se conservan los archivos originales de la persona y de las ilustraciones anteriores. Animación sin dependencias; pausa manual, fuera de pantalla, pestaña oculta y preferencia de movimiento reducido. Sin publicación, commits ni cambios en otros proyectos. Validación lógica completada; revisión visual del navegador y teléfono real pendiente. Esta entrada reemplaza el comportamiento previo del reverso transparente.



**18 nov, tarde: pantallas orientadas hacia la persona** (observación de Jenny). La cara ilustrada de las pantallas mira al centro del anillo, es decir, a la persona. Las pantallas más cercanas a la cámara muestran su reverso como un vidrio casi transparente. Probado en Chrome a 1440 y 390 px.

**18 nov, tarde: pantallas con ilustraciones propias** (decisión de Jenny). Las fotos reales no van en las pantallas: rompían la unidad con el resto de la página. Las reemplazan 10 ilustraciones de un solo estilo, líneas turquesa y azul sobre marino, sin texto, generadas con `herramientas/generar_pantallas.py` en `diseno/hero/pantallas/`:
- cuidado de heridas;
- apósitos y productos;
- Cumbre internacional;
- charlas y educación;
- investigación;
- tecnología e IA;
- atención a domicilio;
- gestión;
- formación;
- salud.

Las copias de fotos que se habían traído pasaron a `_borrar/`, que está excluida en `.gitignore`; Jenny la borra a mano. Probado en Chrome a 1440 y 390 px, sin errores.

**18 nov, tarde: la maqueta pasa al repositorio** (pedido de Jenny: ver cómo va quedando de verdad). La maqueta está en `diseno/maqueta/index.html` y se abre en el navegador directo desde la carpeta.
- Jenny eligió la opción 3 de las imágenes de Canva, con las pantallas girando. Por eso el hero tiene:
  - de fondo, una foto realista de la persona de espaldas, sin pantallas (`diseno/hero/fondo-persona.png`, 1680×944, descargada de Canva por Jenny);
  - encima, dos anillos de pantallas en 3D con las nueve áreas, que giran;
  - un recorte de la persona (`diseno/hero/persona-recorte.png`), para que las pantallas de atrás pasen detrás de ella.
- Si falta la foto, la maqueta usa un fondo de respaldo.
- Recorte hecho con rembg (modelo isnet-general-use): `persona-recorte.png`, 206 KB, mismo tamaño que el fondo. Probado en Chrome a 1440 px y a 390 px con la foto real y sin errores: las pantallas pasan por detrás y por delante de la persona.
- El lienzo de diseño queda descartado: se trabaja en el repositorio.

**18 nov, tarde: propuesta de diseño de la homepage (reemplazada por la maqueta del repositorio).** Es un lienzo de diseño (https://claude.ai/artifact/PHntwTBAc38tKZ7TC4nMTh) con la versión de escritorio y la de teléfono. Incluye el hero con dos anillos de pantallas que giran en 3D, la silueta y el botón de pausa, y las cinco secciones con la alternancia propuesta en la D-11. Usa el logo aprobado; los datos que faltan van entre corchetes. Es solo una maqueta: no es código del sitio. Además quedaron decididas la D-06 y la D-07: GesPro e IRIS se presentan en ethicalshields.ai, y el Vademécum de Péptidos se muestra solo en "Descubre nuestra innovación".

**18 nov, tarde: repositorio en GitHub.** Publicado como privado en https://github.com/cuidamostuheridainfo/ethicalshieldsgroup-web, rama `main` (D-08). El primer commit (`b6bba62`) incluye la documentación, el logo y el generador. Se verificó que sin sesión GitHub responde 404, es decir, que el repositorio es privado.

**18 nov, tarde: logo aprobado (propuesta B).** Se generaron:
- las versiones horizontal y vertical, cada una en claro, oscuro, monocromático marino y monocromático blanco;
- el símbolo solo;
- el favicon (SVG y PNG de 32, 180 y 512).

Todo está en `diseno/logo/` (ver `LEEME.md` y `hoja-logo-aprobado.png`). La propuesta A quedó archivada en `propuestas-18nov/`.

**18 nov, tarde: propuesta del logo.** Se redibujó en vector el símbolo "Evolución de origen", tomando como referencia la imagen del logo que aprobó Jenny. Con él se armaron dos composiciones con el nombre nuevo, A y B, cada una en versión clara y oscura, más el símbolo solo. Están en `diseno/logo/`: ver `LEEME.md` y `hoja-comparacion.png`. El generador está en `herramientas/generar_logo.py`. Falta que Jenny confirme que el símbolo es fiel y elija A o B.

**18 nov, tarde: D-01 decidida.** El nombre visible es **Ethical Shields Group**, por el dominio comprado. El logo cambia su composición a ETHICAL SHIELDS GROUP / Salud · Tecnología · Innovación, y el símbolo se mantiene. Se actualizaron DECISIONES-VIGENTES, PENDIENTES, CONTENIDOS y ESTRUCTURA.

**Etapa actual: A, análisis y arquitectura, entregada y en espera de las decisiones de Jenny.** No hay código, no hay cuentas ni servicios creados y no se tocó ningún DNS.

## 18 nov 2026: inicio del proyecto

- **Brief recibido:** la página corporativa de la matriz del grupo, guardado en `docs/BRIEF.md`.
- **Repositorio local creado** (sin código): `Documents/GitHub/ethicalshieldsgroup-web`, con:
  - `CLAUDE.md` y su ritual de inicio;
  - `README.md` y `.gitignore`;
  - `docs/`: ESTADO, PENDIENTES, DECISIONES-VIGENTES, CONTENIDOS, ESTRUCTURA, PRUEBAS y BRIEF.
- **Análisis de la Etapa A**, en `docs/ESTRUCTURA.md`:
  - alcance;
  - arquitectura (Astro estático, recomendado frente a React + Vite);
  - componentes y hero (CSS 3D);
  - dependencias y licencias;
  - formulario sin base de datos;
  - SEO y seguridad;
  - 11 riesgos;
  - estructura del repositorio;
  - plan por etapas con criterios verificables.
- **Fuentes revisadas, solo para leer y sin modificar nada:**
  - documentación y maqueta del ecosistema del repositorio `cumbre-web`, para seguir el mismo método y conocer las decisiones del grupo;
  - carpeta "Prueba de logos para Grupo": solo hay imágenes rasterizadas generadas con IA y no existe un vector del logo.
- **No se pudo verificar:** la plantilla de referencia ni las webs de las empresas, porque no están en la lista de acceso de este entorno.
- **Siguiente paso:** respuestas a D-02 – D-11 y el símbolo del logo en vector (P-01) y autorización de la Etapa B (ver `PENDIENTES.md`).
