(function(){
  'use strict';
  var hero=document.querySelector('.hero'), mundo=document.getElementById('mundo'), boton=document.getElementById('pausa');
  var ns='http://www.w3.org/2000/svg';
  var firmas={cth:'Cuidamos tu Herida',cumbre:'Cumbre CHP',medical:'Medical Shields',ai:'Ethical Shields AI'};
  // La narrativa procede de la información y el concepto aprobados por Jenny.
  var escenas=[
    {id:'cth',empresa:'cth',imagen:true,titulo:'Cuidamos tu Herida',texto:'Atención especializada y a domicilio.',estado:'Cuidado y conexión'},
    {id:'cumbre',empresa:'cumbre',imagen:true,titulo:'Cumbre CHP',texto:'Encuentro multidisciplinario de profesionales de la medicina.',estado:'Próximo encuentro'},
    {id:'medical',empresa:'medical',imagen:true,titulo:'Medical Shields',texto:'Alianzas internacionales para el cuidado de la piel y la innovación farmacéutica.',estado:'Nuevas alianzas'},
    {id:'ai',empresa:'ai',imagen:true,titulo:'Ethical Shields AI',texto:'Aplicaciones completas para gestionar empresas con IA.',estado:'En desarrollo'},
    {id:'cth-b2b',empresa:'cth',titulo:'Seguros · Empresas',texto:'Organizaciones · Nueva unidad B2B',estado:'En apertura',tipo:'flujo',pasos:['Seguros','CTH','Empresa'],encuadre:'85% 20%'},
    {id:'cth-formacion',empresa:'cth',titulo:'Adiestramientos',texto:'Formación para farmaceutas',tipo:'agenda',encuadre:'70% 30%'},
    {id:'cth-organiza',empresa:'cth',titulo:'Organización de la Cumbre',texto:'CTH conecta conocimiento',tipo:'red',encuadre:'80% 30%'},
    {id:'cumbre-desastres',empresa:'cumbre',titulo:'Medicina en desastres',texto:'Enfoque del próximo encuentro',tipo:'mapa',encuadre:'0% 25%'},
    {id:'cumbre-longevidad',empresa:'cumbre',titulo:'Longevidad',texto:'Avances tecnológicos',tipo:'celula',encuadre:'100% 15%'},
    {id:'cumbre-multidisciplina',empresa:'cumbre',titulo:'Encuentro multidisciplinario',texto:'Diálogo entre profesionales',tipo:'red',encuadre:'60% 75%'},
    {id:'medical-piel',empresa:'medical',titulo:'Cuidado de la piel',texto:'Soluciones e innovación',tipo:'piel',encuadre:'100% 60%'},
    {id:'medical-farma',empresa:'medical',titulo:'Innovación farmacéutica',texto:'Conocimiento y nuevas alianzas',tipo:'celula',encuadre:'60% 90%'},
    {id:'medical-alianzas',empresa:'medical',titulo:'Alianzas internacionales',texto:'Una red que sigue creciendo',tipo:'mapa',encuadre:'80% 10%'},
    {id:'ai-clientes',empresa:'ai',titulo:'Antes del primer cliente',texto:'Procesos conectados con IA',tipo:'flujo',pasos:['Oportun.','Cliente','Gestión'],encuadre:'15% 15%'},
    {id:'ai-finanzas',empresa:'ai',titulo:'Cobranza · Pagos · Bancos',texto:'Gestión integral · En desarrollo',tipo:'flujo',pasos:['Cobro','Pago','Banco'],encuadre:'60% 20%'},
    {id:'ai-consultorio',empresa:'ai',titulo:'IRIS · Consultorios con IA',texto:'Pacientes y gestión · En desarrollo',tipo:'agenda',encuadre:'100% 25%'}
  ];
  // IRIS se representa como gestión de consultorios en desarrollo, sin atribuir
  // disponibilidad comercial ni automatización de decisiones clínicas.
  var nodos=[], visibles=[], rutas=[], reloj=0, anterior=null, raf=null, manual=false, visible=true;
  var ancho=0,alto=0,movil=false, puntero={x:0,y:0};
  var reducida=window.matchMedia('(prefers-reduced-motion: reduce)');
  var svg=document.createElementNS(ns,'svg');svg.setAttribute('class','rutas-ecosistema');svg.setAttribute('aria-hidden','true');mundo.appendChild(svg);
  function el(tag,clase,texto){var n=document.createElement(tag);if(clase)n.className=clase;if(texto)n.textContent=texto;return n;}
  var dibujos={
    red:'<path d="M20 35Q80-10 140 35M20 35L80 25L140 35M80 25V50"/><circle class="nodo" cx="20" cy="35" r="4"/><circle class="nodo" cx="80" cy="25" r="6"/><circle class="nodo" cx="140" cy="35" r="4"/><circle class="nodo" cx="80" cy="50" r="3"/>',
    mapa:'<path d="M12 35L30 13L49 21L62 8L84 24L102 12L122 24L149 15M12 35L41 48L62 35L93 49L119 37L149 45M30 13Q80 55 149 15M41 48Q80-2 122 24"/><circle class="nodo" cx="30" cy="13" r="3"/><circle class="nodo" cx="93" cy="49" r="3"/><circle class="nodo" cx="149" cy="15" r="3"/>',
    celula:'<ellipse cx="80" cy="28" rx="46" ry="25"/><ellipse class="orbital" cx="80" cy="28" rx="45" ry="13"/><ellipse class="orbital" cx="80" cy="28" rx="15" ry="25"/><circle class="nodo" cx="80" cy="28" r="9"/><circle class="nodo" cx="120" cy="20" r="3"/>',
    piel:'<path class="lamina" d="M30 37L81 15L132 37L81 58Z"/><path class="lamina" d="M30 25L81 3L132 25L81 46Z"/><path class="lamina" d="M30 13L81-9L132 13L81 34Z"/>'
  };
  function mini(e){
    var tipo=e.tipo, n=el('div','mini-escena mini-'+tipo);
    if(tipo==='flujo')e.pasos.forEach(function(p,i){if(i)n.appendChild(el('b','', '›'));var s=el('span','',p);s.style.setProperty('--n',i);n.appendChild(s);});
    else if(tipo==='agenda')for(var j=0;j<3;j++){var c=el('span');for(var k=0;k<3;k++){var l=el('i');l.style.setProperty('--n',j+k);c.appendChild(l);}n.appendChild(c);}
    else {var dibujo=document.createElementNS(ns,'svg');dibujo.setAttribute('viewBox','0 0 160 60');dibujo.innerHTML=dibujos[tipo];n.appendChild(dibujo);}
    return n;
  }
  // Corrección 18 nov: en cada ventana solo la empresa, un título corto y, si aplica, el estado.
  var cortos={"cth": "Atención especializada", "cumbre": "Encuentro multidisciplinario", "medical": "Alianzas internacionales", "ai": "Gestión con IA", "cth-b2b": "Unidad B2B", "cth-formacion": "Adiestramientos", "cth-organiza": "Organiza la Cumbre", "cumbre-desastres": "Medicina en desastres", "cumbre-longevidad": "Longevidad", "cumbre-multidisciplina": "Profesionales de la medicina", "medical-piel": "Cuidado de la piel", "medical-farma": "Innovación farmacéutica", "medical-alianzas": "Nuevas alianzas", "ai-clientes": "Captación de clientes", "ai-finanzas": "Cobranza y pagos", "ai-consultorio": "IRIS · Consultorios"};
  // 18 nov, noche: 8 ventanas en PC y tableta (2 por empresa) y 6 en teléfono, con separación uniforme.
  var enPC=["cth","cumbre","medical","ai","cth-b2b","cumbre-desastres","medical-alianzas","ai-consultorio"];
  var enMovil=["cth","cumbre","medical","ai","cth-b2b","ai-consultorio"];
  var estadosVisibles={'En desarrollo':1,'En apertura':1};
  escenas.forEach(function(e){if(e.id==='ai')e.estado='En desarrollo';if(e.id==='ai-clientes'||e.id==='ai-finanzas')e.estado='En desarrollo';if(e.id==='ai-consultorio')e.estado='En desarrollo';});
  var ordenEmpresas=['cth','cumbre','medical','ai'];
  escenas=ordenEmpresas.flatMap(function(_,fila){return ordenEmpresas.map(function(empresa){return escenas.filter(function(e){return e.empresa===empresa;})[fila];});});
  escenas.forEach(function(e,i){
    var n=el('div','ventana satelite'+(e.imagen?' imagen-empresa':''));n.dataset.empresa=e.empresa;n.dataset.escena=e.id;n.style.setProperty('--desfase',(-i*1.3)+'s');
    ['frente','reverso'].forEach(function(cara){
      var lado=el('div','cara '+cara), arte=el('div','escena-arte');
      var img=el('img');img.src='./escenas-ecosistema/'+e.empresa+'.webp';img.alt='';img.width=640;img.height=400;img.decoding='async';
      if(e.encuadre)arte.style.setProperty('--encuadre',e.encuadre);
      arte.appendChild(img);lado.appendChild(arte);
      var cab=el('div','ventana-cabecera');cab.appendChild(el('span','ventana-indice',firmas[e.empresa]));
      lado.appendChild(cab);
      var texto=el('div','ventana-texto');texto.appendChild(el('strong','',cortos[e.id]||e.titulo));
      if(e.estado&&estadosVisibles[e.estado])texto.appendChild(el('span','ventana-estado',e.estado));
      lado.appendChild(texto);n.appendChild(lado);
    });
    mundo.appendChild(n);nodos.push({nodo:n,datos:e,indice:i,x:0,y:0,movil:enMovil.indexOf(e.id)>=0,pc:enPC.indexOf(e.id)>=0});
  });
  // Cúpula (18 nov, noche): anillos de pantallas pequeñas, solo imagen, que giran junto con las ventanas.
  var mosaico=[], fuentes=['cth','cumbre','medical','ai'], encuadres=['10% 20%','50% 30%','90% 25%','30% 70%','70% 60%','0% 50%','100% 40%','60% 10%'];
  var ANILLOS={pc:[{n:28,w:.07,y:.515,rx:.42,ry:.05},{n:32,w:.06,y:.405,rx:.46,ry:.045},{n:36,w:.052,y:.305,rx:.49,ry:.04}],
               movil:[{n:12,w:.2,y:.53,rx:.5,ry:.04},{n:14,w:.17,y:.43,rx:.53,ry:.035},{n:16,w:.15,y:.34,rx:.56,ry:.03}]};
  var maxPorAnillo=[28,32,36];
  maxPorAnillo.forEach(function(n,k){for(var i=0;i<n;i++){
    var d=el('div','mosaico');var img=el('img');var f=fuentes[(i+k)%4];
    img.src='./escenas-ecosistema/'+f+'.webp';img.alt='';img.decoding='async';img.style.objectPosition=encuadres[(i*3+k)%encuadres.length];
    d.appendChild(img);d.dataset.empresa=f;mundo.appendChild(d);mosaico.push({nodo:d,anillo:k,i:i});
  }});
  function crearRuta(a,b,especial){
    var color='var(--'+escenas[a].empresa+')';
    var p=document.createElementNS(ns,'path');p.setAttribute('class','ruta-vinculo'+(especial?' ruta-organizacion':''));p.style.setProperty('--acento',color);svg.appendChild(p);
    var pulso=document.createElementNS(ns,'circle');pulso.setAttribute('class','ruta-pulso');pulso.setAttribute('r',especial?'2.5':'1.8');pulso.style.setProperty('--acento',color);svg.appendChild(pulso);
    rutas.push({a:a,b:b,path:p,pulso:pulso,indice:rutas.length});
  }
  // Órbita única: sin líneas cruzadas ni rutas entre ventanas.
  function dimensionar(){
    ancho=hero.clientWidth;alto=hero.clientHeight;movil=ancho<=820;svg.setAttribute('viewBox','0 0 '+ancho+' '+alto);
    // En teléfono se muestran 8 ventanas más grandes; en PC y tableta, las 16.
    var lista=movil?enMovil:enPC;
    visibles=nodos.filter(function(p){return lista.indexOf(p.datos.id)>=0;}).sort(function(x,y){return lista.indexOf(x.datos.id)-lista.indexOf(y.datos.id);});
    nodos.forEach(function(p){
      var ver=visibles.indexOf(p);p.pos=ver;p.nodo.style.display=ver<0?'none':'';
      var w=movil?Math.min(142,ancho*.35):Math.min(168,Math.max(142,ancho*.115));
      p.nodo.style.setProperty('--w',w+'px');p.nodo.style.setProperty('--h',(w*(movil?.9:.72))+'px');
    });dibujar();
  }
  function dibujar(){
    var total=visibles.length||1, retrato=alto>ancho*1.1&&!movil;
    visibles.forEach(function(p){
      // Fase común y ángulos exactamente equidistantes: todas pasan al mismo ritmo y a la misma distancia.
      var a=p.pos*Math.PI*2/total+reloj*Math.PI*2/128000;
      var profundidad=(Math.cos(a)+1)/2;
      var escala=.8+profundidad*.2;
      var w=parseFloat(p.nodo.style.getPropertyValue('--w'));
      var radio=movil?ancho/2-w*.16:ancho*.34;
      var x=ancho*.5+Math.sin(a)*radio;
      var y=alto*(retrato?.7:.73)+Math.cos(a)*alto*(movil?.15:.135);
      var rot=Math.sin(a)*38;
      // Las ventanas lejanas pasan detrás de la persona; las cercanas, delante.
      var z=profundidad>.5?110+Math.round(profundidad*30):20+Math.round(profundidad*60);
      p.x=x;p.y=y;
      p.nodo.style.transform='translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) perspective(1100px) rotateY('+rot.toFixed(2)+'deg) scale('+escala.toFixed(3)+')';
      p.nodo.style.zIndex=String(z);
    });
    var fase=reloj*Math.PI*2/128000, conf=ANILLOS[movil?'movil':'pc'];
    mosaico.forEach(function(m){
      var c=conf[m.anillo];if(m.i>=c.n){m.nodo.style.display='none';return;}m.nodo.style.display='';
      var a=(m.i+(m.anillo%2?.5:0))*Math.PI*2/c.n+fase, prof=(Math.cos(a)+1)/2;
      var w=ancho*c.w, x=ancho*.5+Math.sin(a)*ancho*c.rx, y=alto*c.y+Math.cos(a)*alto*c.ry;
      m.nodo.style.width=w+'px';m.nodo.style.height=(w*.62)+'px';
      m.nodo.style.transform='translate3d('+(x-w/2).toFixed(1)+'px,'+(y-w*.31).toFixed(1)+'px,0) perspective(900px) rotateY('+(Math.sin(a)*38).toFixed(1)+'deg) scale('+(.75+prof*.25).toFixed(3)+')';
      m.nodo.style.opacity=(.35+prof*.5).toFixed(2);
      m.nodo.style.zIndex=String(1+Math.round(prof*15));
    });
    rutas.forEach(function(r){
      var a=nodos[r.a],b=nodos[r.b],cx=(a.x+b.x)/2,cy=(a.y+b.y)/2-Math.min(85,alto*.07);
      r.path.setAttribute('d','M'+a.x.toFixed(1)+' '+a.y.toFixed(1)+' Q'+cx.toFixed(1)+' '+cy.toFixed(1)+' '+b.x.toFixed(1)+' '+b.y.toFixed(1));
      var t=(reloj/6500+r.indice*.17)%1,u=1-t;
      r.pulso.setAttribute('cx',(u*u*a.x+2*u*t*cx+t*t*b.x).toFixed(1));r.pulso.setAttribute('cy',(u*u*a.y+2*u*t*cy+t*t*b.y).toFixed(1));
    });
  }
  function cuadro(t){raf=null;if(anterior!==null)reloj+=Math.min(t-anterior,64);anterior=t;dibujar();raf=requestAnimationFrame(cuadro);}
  function aplicar(){
    var detenido=manual||!visible||document.hidden||reducida.matches;
    hero.dataset.detenido=String(detenido);
    if(detenido&&raf!==null){cancelAnimationFrame(raf);raf=null;}
    if(!detenido&&raf===null){anterior=null;raf=requestAnimationFrame(cuadro);}
    if(reducida.matches){puntero.x=0;puntero.y=0;dibujar();}
    boton.disabled=reducida.matches;boton.setAttribute('aria-pressed',String(manual));
    boton.querySelector('span').textContent=reducida.matches?'Movimiento reducido':manual?'Reanudar animación':'Pausar animación';
    document.getElementById('icono-pausa').setAttribute('d',manual||reducida.matches?'M8 5l11 7-11 7z':'M9 5v14M15 5v14');
  }
  boton.addEventListener('click',function(){manual=!manual;aplicar();});
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){visible=e[0].isIntersecting;aplicar();}).observe(hero);
  document.addEventListener('visibilitychange',aplicar);reducida.addEventListener('change',aplicar);window.addEventListener('resize',dimensionar);
  dimensionar();aplicar();
})();
