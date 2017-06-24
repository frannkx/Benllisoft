
//Declaracion de variables globales

var tablero;

var teclas={
     UP:38,
     DOWN:40,
     LEFT:37,
     RIGHT:39
}
var fondo={
     imagenURL:"img/fondo.png",
     imagenOK: false
};

var mega={
     x:200,
     y:200,
     frenteURL:"img/megaFrente.png",
     frenteOK:false,

     atrasURL:"img/megaAtras.png",
     atrasOK:false,

     izquierdaURL:"img/megaIzquierda.png",
     izquierdaOK:false,

     derechaURL:"img/megaDerecha.png",
     derechaOK:false,

     velocidad:20
};

var faraon={
     x:100,
     y:200,
     frenteURL:"img/faraFrente.png",
     frenteOK:false,

     atrasURL:"img/faraAtras.png",
     atrasOK:false,

     izquierdaURL:"img/faraIzquierda.png",
     izquierdaOK:false,

     derechaURL:"img/faraDerecha.png",
     derechaOK:false
}



//Declaracion de funciones

function inicio(){
     var canvas=document.getElementById("campo");
     tablero=canvas.getContext("2d");

     fondo.imagen= new Image();
     fondo.imagen.src=fondo.imagenURL;
     fondo.imagen.onload=confirmarFondo;

     //Imagen Megaman de Espaldas
     mega.atras= new Image();
     mega.atras.src=mega.atrasURL;
     mega.atras.onload=confirmarAtrasMega;

     //Imagen Megaman de lado Izquierdo
     mega.izquierda= new Image();
     mega.izquierda.src=mega.izquierdaURL;
     mega.izquierda.onload=confirmarFrenteMega;

     //Imagen Megaman de lado Derecha
     mega.derecha= new Image();
     mega.derecha.src=mega.derechaURL;
     mega.derecha.onload=confirmarDerechaMega;

     //Imagen Megaman de Frente al cargar la pagina
     mega.frente= new Image();
     mega.frente.src=mega.frenteURL;
     mega.frente.onload=confirmarFrenteMega;

     //Movimiento de Megaman
     document.addEventListener("keydown", teclado);


     //Imagen Megaman de Faraon al cargar la pagina
     faraon.frente= new Image();
     faraon.frente.src=faraon.frenteURL;
     faraon.frente.onload=confirmarFrenteFara;

     //Imagen Faraon de Espaldas
     faraon.atras= new Image();
     faraon.atras.src=faraon.atrasURL;
     //mega.atras.onload=confirmarAtras;

     //Imagen Faraon de lado Izquierdo
     faraon.izquierda= new Image();
     faraon.izquierda.src=faraon.izquierdaURL;
     //mega.izquierda.onload=confirmarFrente;

     //Imagen Faraon de lado Derecho
     faraon.derecho= new Image();
     faraon.derecho.src=faraon.derechaURL;
     //mega.izquierda.onload=confirmarFrente;

// Movimiento por botones
     // var mAr=document.getElementById("moverAr");
     // mAr.addEventListener("click", movimientoAr);
     //
     // var mDr=document.getElementById("moverDr");
     // mDr.addEventListener("click", movimientoDr);
     //
     // var mIz=document.getElementById("moverIz");
     // mIz.addEventListener("click", movimientoIz);
     //
     // var mAb=document.getElementById("moverAb");
     // mAb.addEventListener("click", movimientoAb);

}

     function teclado(datos){
     //onsole.log("tecla");
     var codigo = datos.keyCode;
     if (codigo==teclas.UP) {
          if (mega.y>=10) {
                mega.y-=mega.velocidad;
                confirmarAtrasMega();
                dibujar();
          }
     }

     if (codigo==teclas.DOWN) {
          if (mega.y<=450) {
               mega.y+=10;
               confirmarFrenteMega();
               dibujar();
          }
     }

     if (codigo==teclas.RIGHT) {
          if (mega.x<=450) {
               mega.x+=10;
               confirmarDerechaMega();
               dibujar();
          }
     }

     if (codigo==teclas.LEFT) {
          if (mega.x>0) {
               mega.x-=10;
               confirmarIzquierdaMega();
               dibujar();
          }
     }

}

// Movimiento por botones
// function movimientoAr(){
//      if (mega.y>=10) {
//           mega.y-=10;
//           dibujar();
//      }
//
// }
//
// function movimientoIz(){
//      if (mega.x<=450) {
//           mega.x+=10;
//           dibujar();
//      }
//
// }
//
// function movimientoDr(){
//      if (mega.x>0) {
//           mega.x-=10;
//           dibujar();
//      }
// }
//
// function movimientoAb(){
//      if (mega.y<=450) {
//           mega.y+=10;
//           dibujar();
//      }
//
// }

function confirmarFondo(){
     fondo.imagenOK=true;
     dibujar();
}

function confirmarFrenteMega(){
     mega.frenteOK=true;
     mega.atrasOK=false;
     mega.izquierdaOK=false;
     mega.derechaOK=false;
     dibujar();
}

function confirmarAtrasMega(){
     mega.frenteOK=false;
     mega.atrasOK=true;
     mega.izquierdaOK=false;
     mega.derechaOK=false;
     dibujar();
}

function confirmarIzquierdaMega(){
     mega.frenteOK=false;
     mega.atrasOK=false;
     mega.izquierdaOK=true;
     mega.derechaOK=false;
     dibujar();
}

function confirmarDerechaMega(){
     mega.frenteOK=false;
     mega.atrasOK=false;
     mega.izquierdaOK=false;
     mega.derechaOK=true;
     dibujar();
}

function confirmarFrenteFara(){
     faraon.frenteOK=true;
     dibujar();
}

function dibujar(){

     //Dibujo de fondo
     if (fondo.imagenOK==true) {
          tablero.drawImage(fondo.imagen, 0, 0);
     }

     //Dibujo de Megaman
     if (mega.frenteOK==true) {
          tablero.drawImage(mega.frente, mega.x, mega.y);
     }

     if (mega.atrasOK==true) {
          tablero.drawImage(mega.atras, mega.x, mega.y);
     }

     if (mega.izquierdaOK==true) {
          tablero.drawImage(mega.izquierda, mega.x, mega.y);
     }

     if (mega.derechaOK==true) {
          tablero.drawImage(mega.derecha, mega.x, mega.y);
     }

     //Dibujo de Faraon
     if (faraon.frenteOK==true) {
          tablero.drawImage(faraon.frente, faraon.x, faraon.y);
     }

     if (faraon.atrasOK==true) {
          tablero.drawImage(faraon.atras, faraon.x, faraon.y);
     }

     if (faraon.izquierdaOK==true) {
          tablero.drawImage(faraon.izquierda, faraon.x, faraon.y);
     }

     if (faraon.derechaOK==true) {
          tablero.drawImage(faraon.derecha, faraon.x, faraon.y);
     }
}
