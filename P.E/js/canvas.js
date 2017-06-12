var dibujo, lienzo;

function inicio(){
     dibujo=document.getElementById('dibujito');
     lienzo=dibujo.getContext("2d");

     dibujarGrilla(lienzo);

     lienzo.beginPath();
     lienzo.strokeStyle="green";
     lienzo.arc(150,150,100,(Math.PI*2),false);
     lienzo.closePath();
     lienzo.stroke();
}

function dibujarGrilla(l){
     var tope=300;
     var linea;
     var anchoLinea=30;
     var limite=tope/anchoLinea;
     l.strokeStyle="grey";
     for (linea = 0; linea <= limite; linea++) {
          l.beginPath();
          l.moveTo(linea*anchoLinea,0);
          l.lineTo(linea*anchoLinea,tope);
          l.stroke();
          l.closePath();

          l.beginPath();
          l.moveTo(0,linea*anchoLinea);
          l.lineTo(tope,linea*anchoLinea);
          l.strokeStyle="grey";
          l.stroke();
          l.closePath();
     }
}
