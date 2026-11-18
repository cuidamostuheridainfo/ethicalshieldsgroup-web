#!/usr/bin/env python3
"""Genera el logo de Ethical Shields Group (versión aprobada: propuesta B).

- Símbolo "Evolución de origen" redibujado en vector a partir de la imagen aprobada
  (misma forma: cruz de dos piezas entrelazadas, azul marino y degradado azul-turquesa).
- Composición aprobada el 18 nov: propuesta B (ETHICAL SHIELDS GROUP en mayúsculas,
  raya de acento bajo ETHICAL y descriptor Salud · Tecnología · Innovación).
- Textos convertidos a trazos con Plus Jakarta Sans (SIL OFL 1.1), la tipografía del
  logo aprobado, para que el logo no dependa de fuentes instaladas.

Uso: python3 herramientas/generar_logo.py <carpeta con plus-jakarta-sans-latin-*-normal.woff2> diseno/logo
Requiere: pip install fonttools brotli uharfbuzz. Fuentes: paquete npm @fontsource/plus-jakarta-sans.
"""
import sys, os
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

FUENTES, SALIDA = sys.argv[1], sys.argv[2]
os.makedirs(SALIDA, exist_ok=True)

MARINO = "#141B4D"
DESC_CLARO = "#4A5280"
DESC_OSCURO = "#C9D2F0"
AZUL_A, AZUL_B, TURQUESA = "#1C8FE6", "#00C2F5", "#19E6DF"

_cache = {}
def fuente(peso):
    if peso not in _cache:
        ruta = os.path.join(FUENTES, f"plus-jakarta-sans-latin-{peso}-normal.woff2")
        tt = TTFont(ruta)
        tt.flavor = None
        import io
        b = io.BytesIO(); tt.save(b); data = b.getvalue()
        face = hb.Face(data); f = hb.Font(face)
        _cache[peso] = (TTFont(io.BytesIO(data)), f, face.upem)
    return _cache[peso]

def texto(cadena, peso, tam, x, y, tracking_em=0.0):
    """Devuelve (path_d, ancho) del texto con línea base en y."""
    tt, f, upem = fuente(peso)
    buf = hb.Buffer(); buf.add_str(cadena); buf.guess_segment_properties()
    hb.shape(f, buf, {"kern": True, "liga": True})
    gs = tt.getGlyphSet(); orden = tt.getGlyphOrder()
    esc = tam / upem
    pen = SVGPathPen(gs)
    cx = 0
    n = len(buf.glyph_infos)
    for i, (inf, pos) in enumerate(zip(buf.glyph_infos, buf.glyph_positions)):
        nombre = orden[inf.codepoint]
        tp = TransformPen(pen, (esc, 0, 0, -esc, x + (cx + pos.x_offset) * esc, y - pos.y_offset * esc))
        gs[nombre].draw(tp)
        cx += pos.x_advance
        if i < n - 1:
            cx += tracking_em * upem
    return pen.getCommands(), cx * esc

def alto_mayus(peso, tam):
    tt, f, upem = fuente(peso)
    return tt["OS/2"].sCapHeight * tam / upem

# ---------- Símbolo: viewBox de referencia 0 0 140 140, trazo 8.6 ----------
TRAZO = 8.6
SIMBOLO_MARINO = "M40,90.5 H7.5 V48.3 H37.5 A16.2,16.2 0 0 1 53.7,64.5 V117.5 A15,15 0 0 0 68.7,132.5 H91.5 V91.3"
SIMBOLO_AZUL = "M49.2,44 V7 H72 A19.5,19.5 0 0 1 91.5,26.5 V48"
CUADRO = (91.5, 48, 130, 91.3, 6.5)  # x1, y1, x2, y2, radio

def simbolo(oscuro, id_sufijo, mono=None, trazo=None):
    trazo = trazo or TRAZO
    x1, y1, x2, y2, r = CUADRO
    cuadro = (f"M{x1},{y1+r} V{y2-r} A{r},{r} 0 0 0 {x1+r},{y2} H{x2-r} A{r},{r} 0 0 0 {x2},{y2-r} "
              f"V{y1+r} A{r},{r} 0 0 0 {x2-r},{y1} H{x1+r} A{r},{r} 0 0 0 {x1},{y1+r} Z")
    marino = "#FFFFFF" if oscuro else MARINO
    g = f"grad-{id_sufijo}"
    if mono:
        return (f'<g fill="none" stroke="{mono}" stroke-width="{trazo}" stroke-linejoin="round">'
                f'<path d="{SIMBOLO_AZUL}"/><path d="{cuadro}"/><path d="{SIMBOLO_MARINO}"/></g>')
    return (f'<defs><linearGradient id="{g}" gradientUnits="userSpaceOnUse" x1="49" y1="10" x2="130" y2="90">'
            f'<stop offset="0" stop-color="{AZUL_A}"/><stop offset="0.45" stop-color="{AZUL_B}"/>'
            f'<stop offset="1" stop-color="{TURQUESA}"/></linearGradient></defs>'
            f'<g fill="none" stroke-width="{trazo}" stroke-linejoin="round">'
            f'<path d="{SIMBOLO_AZUL}" stroke="url(#{g})" stroke-linecap="butt"/>'
            f'<path d="{cuadro}" stroke="url(#{g})"/>'
            f'<path d="{SIMBOLO_MARINO}" stroke="{marino}" stroke-linecap="butt"/>'
            f'</g>')

def svg(ancho, alto, cuerpo, titulo):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {ancho:.1f} {alto:.1f}" '
            f'width="{ancho:.0f}" height="{alto:.0f}" role="img" aria-label="{titulo}">'
            f'<title>{titulo}</title>{cuerpo}</svg>\n')

DESCRIPTOR = "Salud · Tecnología · Innovación"
TITULO = "Ethical Shields Group · Salud · Tecnología · Innovación"

def bloque_b(x0, base1, color, acento, desc, tam=40, centro=None):
    """Nombre en mayúsculas, raya de acento bajo ETHICAL y descriptor (propuesta B, aprobada el 18 nov).
    Con centro=<x>, cada línea se centra en ese eje (versión vertical); la raya sigue al inicio de ETHICAL."""
    _, w1 = texto("ETHICAL SHIELDS", 800, tam, 0, 0, 0.02)
    _, w2 = texto("GROUP", 500, tam, 0, 0, 0.02)
    _, w3 = texto(DESCRIPTOR, 500, 21.5, 0, 0, 0.02)
    wn = w1 + tam * 0.3 + w2
    xn = x0 if centro is None else centro - wn / 2
    xd = x0 + 1 if centro is None else centro - w3 / 2
    d1, _ = texto("ETHICAL SHIELDS", 800, tam, xn, base1, 0.02)
    d2, _ = texto("GROUP", 500, tam, xn + w1 + tam * 0.3, base1, 0.02)
    d3, _ = texto(DESCRIPTOR, 500, 21.5, xd, base1 + 48, 0.02)
    partes = [f'<path d="{d1}" fill="{color}"/>', f'<path d="{d2}" fill="{acento}"/>',
              f'<rect x="{xn+1:.1f}" y="{base1+16}" width="34" height="4" rx="2" fill="{acento}"/>',
              f'<path d="{d3}" fill="{desc}"/>']
    return partes, max(wn, w3)

def colores(tema):
    # tema: claro, oscuro, mono-marino, mono-blanco
    if tema == "claro": return MARINO, "#0E8FCB", DESC_CLARO, None, False
    if tema == "oscuro": return "#FFFFFF", TURQUESA, DESC_OSCURO, None, True
    if tema == "mono-marino": return MARINO, MARINO, MARINO, MARINO, False
    return "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", True

def logo_horizontal(tema):
    color, acento, desc, mono, osc = colores(tema)
    x0 = 166
    partes, w = bloque_b(x0, 68, color, acento, desc)
    cuerpo = simbolo(osc, "h" + tema, mono) + "".join(partes)
    return svg(x0 + w + 4, 140, cuerpo, TITULO)

def logo_vertical(tema):
    color, acento, desc, mono, osc = colores(tema)
    # medir el bloque para centrar
    _, w = bloque_b(0, 0, color, acento, desc)
    ancho = w + 8
    xs = (ancho - 140) / 2
    partes, _ = bloque_b(0, 196, color, acento, desc, centro=ancho / 2)
    cuerpo = f'<g transform="translate({xs:.1f},0)">{simbolo(osc, "v" + tema, mono)}</g>' + "".join(partes)
    return svg(ancho, 256, cuerpo, TITULO)

def solo_simbolo(tema, fondo=None, lado=140, margen=0, trazo=None):
    _, _, _, mono, osc = colores(tema)
    esc = (lado - 2 * margen) / 140
    f = f'<rect width="{lado}" height="{lado}" fill="{fondo}"/>' if fondo else ""
    cuerpo = f + f'<g transform="translate({margen},{margen}) scale({esc:.4f})">{simbolo(osc, "s" + tema + str(lado), mono, trazo)}</g>'
    return svg(lado, lado, cuerpo, "Ethical Shields Group")

def guardar(nombre, contenido):
    open(os.path.join(SALIDA, nombre), "w", encoding="utf-8").write(contenido)

for tema in ("claro", "oscuro", "mono-marino", "mono-blanco"):
    guardar(f"logo-esg-horizontal-{tema}.svg", logo_horizontal(tema))
    guardar(f"logo-esg-vertical-{tema}.svg", logo_vertical(tema))
    guardar(f"simbolo-esg-{tema}.svg", solo_simbolo(tema))
# Favicon: símbolo sobre fondo blanco con margen, legible en pestañas claras y oscuras.
# Trazo más grueso (11 en lugar de 8,6): ajuste óptico para que se lea a 16-32 px. Misma forma.
guardar("favicon.svg", solo_simbolo("claro", fondo="#FFFFFF", lado=140, margen=8, trazo=11))
print("ok")
