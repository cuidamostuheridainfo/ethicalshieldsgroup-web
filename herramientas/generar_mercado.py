#!/usr/bin/env python3
"""Genera las pantallas del "mar de soluciones" del hero (cúpula de arriba).

Cada pantalla es distinta: otro rubro, otro ícono, otra composición y otro tono.
Representan la oferta genérica del mercado, por eso van sin marcas, sin texto legible
y en tonos apagados. Las cuatro empresas del grupo NO salen de aquí.

Uso: python3 herramientas/generar_mercado.py diseno/maqueta/mercado  (genera m01..m72, todas distintas)
"""
import os, sys

SALIDA = sys.argv[1] if len(sys.argv) > 1 else "."
os.makedirs(SALIDA, exist_ok=True)

# Íconos de rubros genéricos (trazos en una cuadrícula de 24).
ICONOS = {
    "tienda": "M3 9l2-5h14l2 5M4 9v11h16V9M3 9h18M9 20v-6h6v6",
    "carrito": "M3 4h2l2.5 11h11L21 7H6.5M9 20a1 1 0 1 0 0 .1M18 20a1 1 0 1 0 0 .1",
    "camion": "M2 7h12v9H2zM14 10h4l3 3v3h-7M6 19a2 2 0 1 0 0 .1M17 19a2 2 0 1 0 0 .1",
    "banco": "M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18",
    "tarjeta": "M3 6h18v12H3zM3 10h18M6 15h4",
    "grafico": "M4 20V10M10 20V4M16 20v-8M22 20H2",
    "chat": "M4 5h16v11H9l-5 4z",
    "avion": "M2 16l20-8-4 10-5-3-3 4v-5l8-6-11 5z",
    "casa": "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6",
    "auto": "M3 13l2-5h14l2 5v4H3zM7 17v2M17 17v2M6.5 13h.1M17.5 13h.1",
    "comida": "M7 3v8a2 2 0 0 0 4 0V3M9 11v10M16 3c-2 2-2 6 0 8v10",
    "camisa": "M8 3l-5 3 2 4 3-1v12h8V9l3 1 2-4-5-3-2 2h-4z",
    "camara": "M4 7h4l2-3h4l2 3h4v12H4zM12 16a3 3 0 1 0 0-.1",
    "libro": "M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6M20 4v14h-6",
    "musica": "M9 18V5l11-2v13M9 18a3 3 0 1 1-.1 0M20 16a3 3 0 1 1-.1 0",
    "herramienta": "M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-3z",
    "telefono": "M7 2h10v20H7zM11 18h2",
    "nube": "M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8z",
    "candado": "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
    "mapa": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14",
    "fabrica": "M3 20V10l6 4V10l6 4V6l6 3v11z",
    "planta": "M12 21v-9M12 12C12 7 8 5 4 5c0 5 3 7 8 7M12 14c0-4 3-6 8-6 0 4-3 6-8 6",
    "reloj": "M12 3a9 9 0 1 0 .1 0M12 7v5l3 2",
    "regalo": "M3 9h18v4H3zM5 13v8h14v-8M12 9v12M12 9c-2-4-6-4-6-1s4 1 6 1c2 0 6 2 6-1s-4-3-6 1",
    "pesa": "M2 12h20M5 8v8M8 6v12M16 6v12M19 8v8",
    "correo": "M3 6h18v12H3zM3 7l9 6 9-6",
    "maleta": "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
    "foco": "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z",
    "juego": "M6 9h12a3 3 0 0 1 3 3v2a3 3 0 0 1-5 2l-1-1H9l-1 1a3 3 0 0 1-5-2v-2a3 3 0 0 1 3-3zM8 11v3M6.5 12.5h3",
    "edificio": "M5 21V4h10v17M15 9h4v12M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1",
}

# Tonos apagados (fondo, acento) para que la cúpula no compita con las empresas.
TONOS = [("#18234f", "#6f8fd6"), ("#1d1f44", "#9a86d8"), ("#13303f", "#5fb3c4"),
         ("#2a2238", "#c79a72"), ("#1a2a33", "#7fb39a"), ("#2b2033", "#c98aa8"),
         ("#202838", "#a3adc4"), ("#1b2b44", "#d0b26a")]

def bloque_lineas(x, y, n, ancho, color):
    return "".join(f'<rect x="{x}" y="{y + i * 12}" width="{ancho - (i % 2) * 30}" height="5" rx="2.5" fill="{color}" opacity=".45"/>' for i in range(n))

def composicion(tipo, ico, f, a):
    icono = f'<g transform="translate({{tx}},{{ty}}) scale({{s}})" fill="none" stroke="{a}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="{ICONOS[ico]}"/></g>'
    barra = f'<rect x="0" y="0" width="240" height="22" fill="#000" opacity=".22"/><circle cx="12" cy="11" r="3" fill="{a}" opacity=".6"/><rect x="22" y="8" width="60" height="6" rx="3" fill="{a}" opacity=".35"/>'
    if tipo == 0:   # ficha de producto
        cuerpo = (f'<rect x="14" y="34" width="96" height="96" rx="10" fill="{a}" opacity=".16"/>' +
                  icono.format(tx=26, ty=46, s=3) + bloque_lineas(124, 44, 5, 100, a) +
                  f'<rect x="124" y="112" width="70" height="18" rx="9" fill="{a}" opacity=".55"/>')
    elif tipo == 1:  # tablero con barras
        barras = "".join(f'<rect x="{110 + i * 20}" y="{130 - h}" width="12" height="{h}" rx="3" fill="{a}" opacity=".5"/>' for i, h in enumerate([40, 70, 52, 88, 60, 76]))
        cuerpo = icono.format(tx=22, ty=48, s=2.6) + barras + bloque_lineas(16, 118, 1, 80, a)
    elif tipo == 2:  # conversación
        cuerpo = (f'<rect x="14" y="34" width="120" height="26" rx="13" fill="{a}" opacity=".25"/>'
                  f'<rect x="96" y="68" width="128" height="26" rx="13" fill="{a}" opacity=".45"/>'
                  f'<rect x="14" y="102" width="100" height="26" rx="13" fill="{a}" opacity=".25"/>' +
                  icono.format(tx=186, ty=100, s=1.4))
    elif tipo == 3:  # cuadrícula de opciones
        celdas = "".join(f'<rect x="{14 + (i % 4) * 54}" y="{32 + (i // 4) * 54}" width="46" height="46" rx="8" fill="{a}" opacity="{.12 + (i % 3) * .08}"/>' for i in range(8))
        cuerpo = celdas + icono.format(tx=72, ty=40, s=1.7)
    else:            # anuncio grande
        cuerpo = (f'<circle cx="170" cy="85" r="52" fill="{a}" opacity=".14"/>' + icono.format(tx=134, ty=49, s=3) +
                  bloque_lineas(18, 50, 4, 110, a) + f'<rect x="18" y="112" width="80" height="18" rx="9" fill="{a}" opacity=".55"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="240" height="150">'
            f'<rect width="240" height="150" fill="{f}"/>{barra}{cuerpo}</svg>\n')

nombres = list(ICONOS)
total = 0
for i in range(72):
    ico = nombres[i % len(nombres)]
    tipo = (i * 3 + i // len(nombres)) % 5
    f, a = TONOS[(i * 5) % len(TONOS)]
    with open(os.path.join(SALIDA, f"m{i + 1:02d}.svg"), "w", encoding="utf-8") as fh:
        fh.write(composicion(tipo, ico, f, a))
    total += 1
print(total, "pantallas del mercado")
