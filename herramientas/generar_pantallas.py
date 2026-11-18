#!/usr/bin/env python3
"""Genera las ilustraciones de las pantallas del hero de Ethical Shields Group.

Estilo único: líneas turquesa y azul sobre azul marino, como hologramas, sin texto
y sin fotos reales. Cada pantalla representa una actividad del grupo.

Uso: python3 herramientas/generar_pantallas.py diseno/hero/pantallas
"""
import os, sys

SALIDA = sys.argv[1] if len(sys.argv) > 1 else "."
os.makedirs(SALIDA, exist_ok=True)

T = "#19E6DF"   # turquesa
A = "#1C8FE6"   # azul
C = "#C9D2F0"   # claro

BASE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="480" height="300">
<defs>
<linearGradient id="f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10205E"/><stop offset="1" stop-color="#060A2A"/></linearGradient>
<radialGradient id="h" cx="50%" cy="55%" r="60%"><stop offset="0" stop-color="#19E6DF" stop-opacity=".22"/><stop offset="1" stop-color="#19E6DF" stop-opacity="0"/></radialGradient>
<filter id="g" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<pattern id="r" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#1C8FE6" stroke-opacity=".10" stroke-width="1"/></pattern>
</defs>
<rect width="480" height="300" fill="url(#f)"/><rect width="480" height="300" fill="url(#r)"/><rect width="480" height="300" fill="url(#h)"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#g)">
{cuerpo}
</g>
</svg>
"""

def linea(d, color=T, w=3, op=1):
    return f'<path d="{d}" stroke="{color}" stroke-width="{w}" stroke-opacity="{op}"/>'

def circ(cx, cy, r, color=T, w=3, fill="none", op=1):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" stroke="{color}" stroke-width="{w}" fill="{fill}" stroke-opacity="{op}"/>'

def rect(x, y, w, h, rx=8, color=T, sw=3, fill="none", op=1):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" stroke="{color}" stroke-width="{sw}" fill="{fill}" stroke-opacity="{op}"/>'

def pulso(y=250, x0=40, x1=440, color=A):
    m = (x0 + x1) // 2
    return linea(f"M{x0} {y} H{m-60} l14 -22 l16 40 l14 -50 l14 32 H{x1}", color, 2.5, .8)

P = {}

# 1. Cuidado de heridas: antebrazo con apósito y cruz de salud
P["cuidado-heridas"] = "".join([
    linea("M60 210 C140 190 260 170 420 150", C, 3, .6),
    linea("M60 250 C150 235 270 215 420 195", C, 3, .6),
    rect(180, 160, 120, 62, 14, T, 3, "#19E6DF22"),
    rect(205, 174, 70, 34, 8, A, 2.5, "#1C8FE633"),
    linea("M240 70 v44 M218 92 h44", T, 6),
    circ(240, 92, 34, T, 2.5, op=.7),
    pulso(268),
])

# 2. Apósitos y productos: cajas de producto y apósito
P["apositos-productos"] = "".join([
    rect(70, 110, 110, 140, 10, A, 3, "#1C8FE622"),
    linea("M70 150 H180 M95 128 h60", A, 2.5, .8),
    rect(150, 80, 120, 170, 10, T, 3, "#19E6DF1A"),
    linea("M150 125 H270 M178 100 h64", T, 2.5, .9),
    linea("M210 160 v40 M190 180 h40", T, 4),
    rect(300, 140, 120, 110, 18, C, 3, "#C9D2F014", .8),
    rect(325, 165, 70, 60, 10, T, 2.5, "#19E6DF2A"),
    linea("M335 195 h50", T, 2, .6),
    linea("M300 140 l-14 -14 M420 140 l14 -14 M300 250 l-14 14 M420 250 l14 14", C, 2, .5),
])

# 3. Cumbre internacional: escenario, pantalla y público
P["cumbre-internacional"] = "".join([
    rect(130, 40, 220, 110, 8, T, 3, "#19E6DF14"),
    circ(240, 95, 32, A, 2.5),
    linea("M208 95 h64 M240 63 c-18 18 -18 46 0 64 M240 63 c18 18 18 46 0 64", A, 2, .9),
    rect(220, 168, 40, 40, 4, C, 2.5, op=.8),
    linea("M60 210 H420", C, 2.5, .6),
] + [circ(70 + i * 34, 240, 9, T, 2.5, op=.85) for i in range(11)]
  + [circ(87 + i * 34, 268, 9, A, 2.5, op=.7) for i in range(10)])

# 4. Charlas y educación: pantalla con video y asistentes en línea
P["charlas-educacion"] = "".join([
    rect(60, 50, 250, 160, 12, T, 3, "#19E6DF14"),
    f'<path d="M165 100 L215 130 L165 160 Z" stroke="{T}" stroke-width="3" fill="#19E6DF33"/>',
    linea("M80 190 H290", C, 3, .5), linea("M80 190 H180", T, 3),
    linea("M150 210 l-20 40 M220 210 l20 40 M120 250 H250", C, 2.5, .6),
] + [rect(335, 50 + i * 56, 90, 44, 8, A, 2.5, "#1C8FE61f") for i in range(4)]
  + [circ(380, 72 + i * 56, 10, T, 2.5) for i in range(4)])

# 5. Investigación científica: matraz y molécula
P["investigacion"] = "".join([
    linea("M130 60 h50 M140 60 v70 l-45 95 a14 14 0 0 0 13 20 h94 a14 14 0 0 0 13 -20 l-45 -95 v-70", T, 3),
    f'<path d="M112 200 l20 -40 h66 l20 40 a8 8 0 0 1 -7 11 h-92 a8 8 0 0 1 -7 -11z" stroke="none" fill="#19E6DF2e"/>',
    circ(150, 185, 6, T, 2.5), circ(172, 200, 4, T, 2.5),
    linea("M300 90 L360 70 L410 110 L390 170 L320 180 L290 130 Z M360 70 L390 170 M300 90 L390 170", A, 2.5, .8),
] + [circ(x, y, 10, T, 3, "#060A2A") for x, y in [(300, 90), (360, 70), (410, 110), (390, 170), (320, 180), (290, 130)]])

# 6. Avances tecnológicos e IA: red neuronal y chip
P["tecnologia-ia"] = "".join([
    rect(190, 100, 100, 100, 12, T, 3, "#19E6DF1a"),
    rect(215, 125, 50, 50, 6, T, 2.5),
    linea("M210 100 v-22 M240 100 v-22 M270 100 v-22 M210 200 v22 M240 200 v22 M270 200 v22 M190 120 h-22 M190 150 h-22 M190 180 h-22 M290 120 h22 M290 150 h22 M290 180 h22", T, 2.5, .8),
    linea("M60 80 L120 60 M60 80 L120 150 M60 220 L120 150 M60 220 L120 240 M60 150 L120 60 M60 150 L120 240", A, 2, .6),
    linea("M360 60 L420 90 M360 150 L420 90 M360 150 L420 210 M360 240 L420 210 M360 60 L420 210", A, 2, .6),
] + [circ(x, y, 9, A, 2.5, "#060A2A") for x, y in [(60, 80), (60, 150), (60, 220), (120, 60), (120, 150), (120, 240), (360, 60), (360, 150), (360, 240), (420, 90), (420, 210)]])

# 7. Atención a domicilio: casa con cruz y ruta
P["atencion-domicilio"] = "".join([
    linea("M120 160 L210 90 L300 160 M140 145 V240 H280 V145", T, 3),
    rect(190, 190, 40, 50, 4, C, 2.5, op=.7),
    linea("M210 118 v40 M190 138 h40", T, 5),
    linea("M300 240 C340 240 340 200 380 200 S420 160 430 140", A, 2.5, .8),
    circ(430, 128, 12, A, 3), circ(430, 128, 4, A, 3),
    linea("M50 240 H430", C, 2, .4),
])

# 8. Formación profesional: birrete y certificado
P["formacion"] = "".join([
    linea("M90 110 L180 70 L270 110 L180 150 Z", T, 3),
    linea("M130 128 v45 c30 22 70 22 100 0 v-45 M270 110 v60", T, 3),
    circ(270, 176, 6, T, 3),
    rect(300, 90, 130, 160, 8, A, 3, "#1C8FE61a"),
    linea("M322 125 h86 M322 150 h86 M322 175 h60", C, 2.5, .6),
    circ(395, 220, 16, T, 3), linea("M386 234 l-6 22 l15 -8 l15 8 l-6 -22", T, 2.5),
])

# 9. Gestión empresarial: tablero con barras, línea y dona
P["gestion"] = "".join([
    rect(50, 50, 380, 210, 12, C, 2.5, "#C9D2F00d", .5),
    linea("M80 230 V170 M115 230 V140 M150 230 V185 M185 230 V115", T, 14),
    linea("M220 200 L270 160 L310 175 L360 110 L400 95", A, 3),
] + [circ(x, y, 5, A, 3, "#060A2A") for x, y in [(220, 200), (270, 160), (310, 175), (360, 110), (400, 95)]] + [
    f'<circle cx="345" cy="215" r="24" stroke="{T}" stroke-width="9" stroke-dasharray="100 151" transform="rotate(-90 345 215)"/>',
    circ(345, 215, 24, A, 9, op=.35),
])

# 10. Salud integral: escudo con pulso
P["salud"] = "".join([
    linea("M240 50 L330 85 V150 C330 205 290 240 240 258 C190 240 150 205 150 150 V85 Z", T, 3),
    f'<path d="M240 70 L312 98 V150 C312 195 280 223 240 238 C200 223 168 195 168 150 V98 Z" stroke="none" fill="#19E6DF1f"/>',
    linea("M175 155 H210 l12 -26 l18 52 l16 -40 l10 14 H305", T, 3.5),
    linea("M60 160 H130 M350 160 H420", A, 2.5, .6),
])

for nombre, cuerpo in P.items():
    with open(os.path.join(SALIDA, nombre + ".svg"), "w", encoding="utf-8") as f:
        f.write(BASE.replace("{cuerpo}", cuerpo))
print(len(P), "pantallas")
