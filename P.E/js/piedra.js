//Funcion de numero aleatorio
function aleatorio(minimo, maximo) {
     var numero=Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
     return numero;
}

//Declaracion de variables
var piedra=0;
var papel=1;
var tijera=2;
var opciones=["Piedra", "Papel", "Tijera"];
var opcionUsuario;

var opcionMaquina=aleatorio(0,2);

alert("!!! Bienvenido a Piedra Papel o Tijera!!!")
opcionUsuario=prompt("Que eliges?\nPiedra: 0 / Papel: 1 / Tijera: 2\n", 0);

alert("Elegiste"+" "+opciones[opcionUsuario]);
alert("La computadora eligio"+" "+opciones[opcionMaquina]);

if (opcionUsuario==piedra) {
     if (opcionMaquina=piedra) {
          alert("Empate!!!");
     } else if (opcionMaquina=papel) {
          alert("Perdiste!!!");
     } else if (opcionMaquina=tijera) {
          alert("Ganaste!!!")
     }

} else if (opcionUsuario==papel) {

     if (opcionMaquina=piedra) {
          alert("Ganaste!!!");
     } else if (opcionMaquina=papel) {
          alert("Empate!!!");
     } else if (opcionMaquina=tijera) {
          alert("Perdiste!!!")
     }

} else if(opcionUsuario==tijera) {

     if (opcionMaquina=piedra) {
          alert("Perdiste!!!");
     } else if (opcionMaquina=papel) {
          alert("Ganaste!!!");
     } else if (opcionMaquina=tijera) {
          alert("Empate!!!")
     }

} else {
     alert("Elige una opcion valida");
}

/*Instalar en atom
https://atom.io/packages/atom-runner
https://vwannabe.com/2016/05/26/how-to-use-github-and-atom/
atom runner
git plus
