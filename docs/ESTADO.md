# Estado del proyecto

Última actualización: 18 de noviembre de 2026.

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
- **Todavía no está en GitHub.** Jenny lo publica con GitHub Desktop, después de decidir la cuenta y la visibilidad (D-08).
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
