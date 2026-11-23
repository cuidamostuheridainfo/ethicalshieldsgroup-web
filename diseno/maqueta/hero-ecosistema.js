/* Hero de Ethical Shields Group · "En un mar de soluciones, el grupo es la respuesta" (18 nov 2026, noche).
   Arriba: una cúpula de pantallas genéricas, todas distintas (./mercado/m01..m66.svg, una distinta por pantalla), que gira despacio.
   La persona elige: cuatro pantallas se encienden, bajan y se convierten en las empresas del grupo,
   dos a cada lado de la persona. Al final la cúpula se atenúa y quedan destacadas las cuatro empresas.
   Respeta pausa manual, pausa fuera de pantalla o con pestaña oculta y movimiento reducido.
   23 nov 2026 (Jenny): tarjetas con imagen arriba y texto abajo; arriba Medical Shields y Cuidamos tu Herida,
   abajo Cumbre CHP y Ethical Shields AI, y bajan en ese orden. El hero mide lo que la pantalla y las tarjetas
   se ubican entre el botón principal y el de pausa; solo si no caben, el hero crece. */
(function(){
  'use strict';
  var hero=document.querySelector('.hero'), mundo=document.getElementById('mundo'), boton=document.getElementById('pausa');
  if(!hero||!mundo)return;
  function el(tag,clase,texto){var n=document.createElement(tag);if(clase)n.className=clase;if(texto)n.textContent=texto;return n;}

  // Las cuatro empresas, en el orden en que la persona las elige. fila 0 = arriba, lado -1 = izquierda.
  // linea: PC; corta: tableta y teléfono (hasta 1100 px).
  var EMPRESAS=[
    {id:'medical',nombre:'Medical Shields',linea:'Representación exclusiva de laboratorios internacionales y marcas en Venezuela',corta:'Representación exclusiva de Lab. internacionales y marcas en Vzla.',lado:-1,fila:0},
    {id:'cth',nombre:'Cuidamos tu Herida',linea:'Atención médica especializada en heridas y piel',corta:'Atención médica especializada',lado:1,fila:0},
    {id:'cumbre',nombre:'Cumbre CHP',linea:'Encuentro interdisciplinario médico',corta:'Encuentro interdisciplinario médico',lado:-1,fila:1},
    {id:'ai',nombre:'Ethical Shields AI',linea:'IA aplicada a empresas',corta:'IA aplicada a empresas',lado:1,fila:1}
  ];
  var INICIO=2600, PASO=2300, VUELO=1700;   // ms: primera elección, separación entre elecciones, duración del vuelo
  var FIN=INICIO+PASO*3+VUELO;               // a partir de aquí la escena queda en su estado final

  // Cúpula: tres anillos en PC, dos en teléfono. Cada pantalla es una imagen distinta.
  var ANILLOS={pc:[{n:18,w:.06,y:.53,rx:.43,ry:.05},{n:22,w:.05,y:.42,rx:.46,ry:.045},{n:26,w:.043,y:.32,rx:.49,ry:.04}],
               movil:[{n:9,w:.19,y:.47,rx:.5,ry:.04},{n:11,w:.16,y:.37,rx:.54,ry:.035}]};
  var mosaico=[], imagen=0;
  [18,22,26].forEach(function(n,k){for(var i=0;i<n;i++){
    var d=el('div','mosaico'),img=el('img');
    img.src='./mercado/m'+String(imagen+1).padStart(2,'0')+'.svg';img.alt='';img.decoding='async';imagen++;
    d.appendChild(img);mundo.appendChild(d);mosaico.push({nodo:d,anillo:k,i:i,x:0,y:0,w:0,prof:0,oculta:false,visible:false});
  }});

  // Tarjetas de las empresas: nacen en la cúpula y bajan junto a la persona.
  var tarjetas=EMPRESAS.map(function(e){
    var t=el('div','tarjeta-empresa');t.dataset.empresa=e.id;
    var foto=el('div','te-foto'),img=el('img');img.src='./escenas-ecosistema/'+(e.id==='medical'?'medical-fondo':e.id)+'.webp';img.alt='';img.decoding='async';foto.appendChild(img);
    var txt=el('div','te-texto');txt.appendChild(el('span','te-nombre',e.nombre));txt.appendChild(el('span','te-linea te-larga',e.linea));txt.appendChild(el('span','te-linea te-corta',e.corta));
    if(e.estado)txt.appendChild(el('span','te-estado',e.estado));
    t.appendChild(foto);t.appendChild(txt);mundo.appendChild(t);
    return {nodo:t,datos:e,origen:null,fuente:null};
  });

  var reloj=0, anterior=null, raf=null, manual=false, visible=true, ancho=0, alto=0, movil=false;
  var reducida=window.matchMedia('(prefers-reduced-motion: reduce)');
  function suave(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}

  // Zona libre para las tarjetas: debajo del botón principal y encima del botón de pausa.
  var zona={T:0,B:0};
  function medirZona(){
    var hr=hero.getBoundingClientRect(), cta=hero.querySelector('a[href="#empresas"]'), pz=document.getElementById('pausa');
    zona.T=cta?cta.getBoundingClientRect().bottom-hr.top+18:alto*.45;
    var B=alto-20; if(pz){var pr=pz.getBoundingClientRect();if(pr.height&&pr.top-hr.top>alto*.6)B=Math.min(B,pr.top-hr.top-12);}
    zona.B=B;
  }
  function plan(){
    // Devuelve el tamaño y las alturas de las dos filas, y cuántos px le faltan al hero (0 si cabe).
    var w=movil?Math.min(168,ancho*.42):Math.min(250,Math.max(190,ancho*.16)), h=w*(ancho<380?1.27:ancho<=1100?1.14:1.1), T=zona.T, B=zona.B, y0, y1, falta;
    if(movil){y0=Math.max(T+h/2,Math.min(alto*.585,B-h-10-h/2));y1=y0+h+10;falta=Math.max(0,y1+h/2-B);}
    else{var d=Math.min(alto*.1,Math.max(0,(B-T)-h));y1=Math.min(alto*.76,B-h/2);y0=y1-d;if(y0-h/2<T){y0=T+h/2;y1=y0+d;}falta=Math.max(0,y1+h/2-B);}
    return {w:w,h:h,y0:y0,y1:y1,falta:falta};
  }
  var P=null;
  function destino(e){
    var w=P.w,h=P.h,x,y=e.fila?P.y1:P.y0;
    if(movil)x=ancho*.5+e.lado*(ancho*.5-w*.5-8);
    else x=ancho*.5+e.lado*ancho*(e.fila?.17:(ancho<1200?.365:.34));
    return {x:x,y:y,w:w,h:h};
  }

  function dibujarMosaico(atenuar){
    var fase=reloj*Math.PI*2/150000, conf=ANILLOS[movil?'movil':'pc'];
    mosaico.forEach(function(m){
      var c=conf[m.anillo];
      if(!c||m.i>=c.n||m.oculta){m.nodo.style.display='none';m.visible=false;return;}
      m.nodo.style.display='';m.visible=true;
      var a=(m.i+(m.anillo%2?.5:0))*Math.PI*2/c.n+fase, prof=(Math.cos(a)+1)/2, w=ancho*c.w;
      m.x=ancho*.5+Math.sin(a)*ancho*c.rx;m.y=alto*c.y+Math.cos(a)*alto*c.ry;m.w=w;m.prof=prof;
      m.nodo.style.width=w+'px';m.nodo.style.height=(w*.625)+'px';
      m.nodo.style.transform='translate3d('+(m.x-w/2).toFixed(1)+'px,'+(m.y-w*.3125).toFixed(1)+'px,0) perspective(900px) rotateY('+(Math.sin(a)*38).toFixed(1)+'deg) scale('+(.75+prof*.25).toFixed(3)+')';
      m.nodo.style.opacity=((.5+prof*.45)*(1-atenuar*.6)).toFixed(2);
      m.nodo.style.zIndex=String(1+Math.round(prof*15));
    });
  }

  function elegirFuente(){
    // La pantalla más cercana al frente del primer anillo que todavía no se eligió.
    var mejor=null;mosaico.forEach(function(m){if(m.visible&&!m.oculta&&m.anillo===0&&(!mejor||m.prof>mejor.prof))mejor=m;});
    return mejor;
  }

  function dibujar(){
    var atenuar=Math.min(1,Math.max(0,(reloj-(FIN-600))/1200));
    dibujarMosaico(atenuar);
    tarjetas.forEach(function(t,k){
      var inicio=INICIO+k*PASO, p=(reloj-inicio)/VUELO, d=destino(t.datos), n=t.nodo;
      if(p<0){n.style.opacity='0';n.style.visibility='hidden';if(t.fuente){t.fuente.oculta=false;t.fuente=null;t.origen=null;}return;}
      if(!t.origen){t.fuente=elegirFuente();if(t.fuente){t.origen={x:t.fuente.x,y:t.fuente.y,w:t.fuente.w,h:t.fuente.w*.625};t.fuente.oculta=true;}else{t.origen={x:d.x,y:alto*.4,w:d.w*.3,h:d.h*.3};}}
      var q=suave(Math.min(1,p)), o=t.origen;
      var x=o.x+(d.x-o.x)*q, y=o.y+(d.y-o.y)*q, w=o.w+(d.w-o.w)*q, h=o.h+(d.h-o.h)*q;
      n.style.visibility='visible';n.style.opacity=String(Math.min(1,.4+p*1.5));
      n.style.width=w+'px';n.style.height=h+'px';
      n.style.transform='translate3d('+(x-w/2).toFixed(1)+'px,'+(y-h/2).toFixed(1)+'px,0)';
      n.dataset.llego=p>=1?'si':'no';
      n.style.setProperty('--revela',Math.min(1,Math.max(0,(p-.35)/.5)).toFixed(2));
    });
  }

  function cuadro(t){raf=null;if(anterior!==null)reloj+=Math.min(t-anterior,64);anterior=t;dibujar();raf=requestAnimationFrame(cuadro);}
  function aplicar(){
    var detenido=manual||!visible||document.hidden||reducida.matches;
    hero.dataset.detenido=String(detenido);
    if(reducida.matches&&reloj<FIN){reloj=FIN+1200;tarjetas.forEach(function(t){t.origen={x:0,y:0,w:0,h:0};});}
    if(detenido&&raf!==null){cancelAnimationFrame(raf);raf=null;}
    if(!detenido&&raf===null){anterior=null;raf=requestAnimationFrame(cuadro);}
    if(detenido)dibujar();
    if(boton){
      boton.disabled=reducida.matches;boton.setAttribute('aria-pressed',String(manual));
      var s=boton.querySelector('span');if(s)s.textContent=reducida.matches?'Movimiento reducido':manual?'Reanudar animación':'Pausar animación';
      var ic=document.getElementById('icono-pausa');if(ic)ic.setAttribute('d',manual||reducida.matches?'M8 5l11 7-11 7z':'M9 5v14M15 5v14');
    }
  }
  function dimensionar(){
    hero.style.minHeight='';
    ancho=hero.clientWidth;alto=hero.clientHeight;movil=ancho<=820;medirZona();P=plan();
    // Si en una pantalla baja las tarjetas no caben, el hero crece solo lo necesario.
    if(P.falta>0){hero.style.minHeight=Math.ceil(alto+P.falta)+'px';ancho=hero.clientWidth;alto=hero.clientHeight;medirZona();P=plan();}
    // Al cambiar de tamaño, las tarjetas que ya llegaron se quedan en su lugar nuevo.
    tarjetas.forEach(function(t){if(reloj>=FIN){t.origen=t.origen||{x:0,y:0,w:0,h:0};}});
    dibujar();
  }
  // WhatsApp: en el teléfono se oculta mientras se ve el hero (el CSS solo lo aplica hasta 820 px).
  var wa=document.querySelector('.whatsapp');
  if(wa&&'IntersectionObserver' in window)new IntersectionObserver(function(e){wa.dataset.oculto=e[0].isIntersecting?'si':'no';},{threshold:.35}).observe(hero);
  if(boton)boton.addEventListener('click',function(){manual=!manual;aplicar();});
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){visible=e[0].isIntersecting;aplicar();}).observe(hero);
  document.addEventListener('visibilitychange',aplicar);
  if(reducida.addEventListener)reducida.addEventListener('change',aplicar);
  window.addEventListener('resize',dimensionar);
  dimensionar();aplicar();
})();
