var dibujo, lienzo, t, b;

function inicio(){
     t=document.getElementById("usuario");
     b=document.getElementById("dibujalo");
     dibujo=document.getElementById('dibujito');
     lienzo=dibujo.getContext("2d");

     b.addEventListener("click", dibujarGrilla);

     lienzo.beginPath();
     lienzo.strokeStyle="green";
     lienzo.arc(150,150,100,(Math.PI*2),false);
     lienzo.closePath();
     lienzo.stroke();
}

function dibujarGrilla(){
     var l=lienzo;
     var rayas=Number(t.value);
     var tope=300;
     var linea;
     var anchoLinea=tope/rayas;
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
