# Ethical Shields Group · Página web corporativa

Repositorio público `cuidamostuheridainfo/ethicalshieldsgroup-web` (con GitHub Pages para la maqueta; sin claves ni datos sensibles) de la página corporativa de la matriz del grupo, que se publicará en `https://ethicalshieldsgroup.com`. Es la puerta de entrada al ecosistema y no funciona como catálogo: presenta al grupo y lleva a los visitantes a las webs independientes de sus cuatro empresas (Medical Shields, Cuidamos tu Herida, Ethical Shields AI y Cumbre CHP).

Es un proyecto **independiente**. Por eso no se reutilizan ni se modifican repositorios, configuraciones, bases de datos, dominios ni archivos de la Cumbre, CTH, Medical Shields, Ethical Shields AI, GesPro ni IRIS.

## Ritual de inicio (obligatorio en cada sesión nueva)

Antes de proponer o tocar algo, leer en este orden:

1. `CLAUDE.md` (este archivo): qué es el proyecto y cómo se trabaja.
2. `docs/ESTADO.md`: en qué etapa estamos, qué existe y dónde está.
3. `docs/PENDIENTES.md`: qué falta, quién lo tiene y qué está bloqueado.
4. `docs/DECISIONES-VIGENTES.md`: lo que ya se decidió y no se vuelve a discutir sin motivo.
5. `docs/CONTENIDOS.md`: solo si la sesión toca textos. Los mensajes aprobados no se cambian sin autorización.
6. `docs/ESTRUCTURA.md`: solo si la sesión toca arquitectura, componentes, hero, formulario, SEO o publicación.
7. `docs/PRUEBAS.md`: solo si la sesión prueba, publica o corrige una falla.
8. `docs/BRIEF.md`: el brief original. Se consulta ante cualquier duda de alcance.

Después de leer, decir en dos o tres líneas en qué punto estamos y cuál es el siguiente paso, y esperar confirmación antes de cambiar archivos.

## Cómo se trabaja

- **Etapas autorizadas:** A (análisis y arquitectura), B (preparación), C (implementación visual), D (funcionalidad y pruebas) y E (publicación). No se empieza una etapa sin la autorización expresa de Jenny.
- **Idioma:** español neutro, entendible en Venezuela. Tuteo siempre, nunca voseo.
- **Commits:** los hace Jenny con GitHub Desktop. Claude prepara los archivos y propone el mensaje de commit, pero no hace push.
- **Ejecución en vivo:** un paso a la vez. Claude lleva la lista de pendientes y no la repite completa en cada mensaje.
- **Incertidumbre:** se dice explícitamente, sin rellenar con suposiciones.
- **Datos:** no se inventan cifras, nombres, fechas ni logros. Lo que falta va entre corchetes, por ejemplo [RAZÓN SOCIAL].
- **Afirmaciones sensibles:** no se presentan compuestos de investigación como tratamientos aprobados. No se atribuyen al grupo fabricación ni resultados científicos sin documentar. Tampoco se publica el estado comercial de GesPro o IRIS sin verificarlo.
- **Sin alcance nuevo:** no se agregan CMS, backend, bases de datos, Supabase ni servicios externos sin una justificación concreta y la aprobación de Jenny.
- **Al cerrar una sesión con cambios:** se actualizan `docs/ESTADO.md` y `docs/PENDIENTES.md`. Si hubo decisiones, también `docs/DECISIONES-VIGENTES.md`, y si hubo pruebas, `docs/PRUEBAS.md`.

## Límites que no se cruzan sin autorización expresa

- DNS de GoDaddy y conexión del dominio `ethicalshieldsgroup.com`.
- Crear cuentas, servicios externos, claves o bases de datos.
- Publicar en producción o quitar la protección del entorno de prueba.
- Tocar cualquier otro repositorio o sitio del grupo, aunque sea solo para copiar archivos.

## Mapa del repositorio

| Ruta | Qué es |
| --- | --- |
| `CLAUDE.md` | Este archivo. |
| `README.md` | Presentación breve del repositorio. |
| `index.html`, `.nojekyll` | Raíz de GitHub Pages: llevan a `diseno/maqueta/` para el comité. |
| `docs/BRIEF.md` | Brief original (18 nov 2026). No se edita. |
| `docs/ESTADO.md` | Etapa actual y registro fechado de lo hecho. |
| `docs/PENDIENTES.md` | Decisiones y recursos pendientes, y el siguiente paso. |
| `docs/DECISIONES-VIGENTES.md` | Decisiones tomadas, propuestas en espera de aprobación y decisiones reemplazadas. |
| `docs/CONTENIDOS.md` | Textos aprobados y textos por confirmar, sección por sección. |
| `docs/ESTRUCTURA.md` | Análisis de la Etapa A: arquitectura, componentes, hero, formulario, SEO, seguridad, riesgos y plan. |
| `docs/PRUEBAS.md` | Plan de pruebas por etapa, resultados, incidencias y licencias de los recursos. |
| `diseno/maqueta/index.html` | Maqueta de diseño de la homepage. Se abre en el navegador directo desde la carpeta. No es el sitio final. |
| `diseno/hero/` | Foto de fondo del hero y recorte de la persona. |
| `diseno/logo/` | Logo del grupo: propuestas, versiones aprobadas y `LEEME.md`. |
| `herramientas/generar_logo.py` | Genera los SVG del logo. Los ajustes se hacen aquí, no editando los SVG a mano. |

La estructura del código (`src/`, `public/`, `functions/`, `pruebas/`) está propuesta en `docs/ESTRUCTURA.md` y se crea en la Etapa B, cuando Jenny la autorice.
