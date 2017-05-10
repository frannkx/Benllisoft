
alert("Bienvenido a piedra papel o tijera!!!");



var piedra=0;
var papel=1;
var tijera=2;

var opcionUsuario;
var opcionMaquina=2;

var opciones[piedra, papel, tijera]

function aleatorio(minimo, maximo) {
     var numero=math.floor(math.random()* (maximo - minimo +1)+ minimo);
     return numero;
}



opcionUsuario= prompt("¿Qué Eliges?\n Piedra: 0 / Papel:1 / Tijera:2", 0);


if (opcionUsuario==piedra) {
     alert("Elegiste Piedra");

     if (opcionMaquina==piedra) {
          alert("piedra & piedra  !!! Empate !!!");
     } else if (opcionMaquina==papel) {
          alert("piedra & papel  !!! Perdiste !!!");
     } else {
          alert("piedra & tijera  !!! Ganaste !!!");
     }

} else if (opcionUsuario==papel) {
     alert("Elegiste Papel");

     if (opcionMaquina==piedra) {
          alert("papel & piedra  !!! Ganaste !!!");
     } else if (opcionMaquina==papel) {
          alert("papel & papel  !!! Empate !!!");
     } else {
          alert("papel & tijera  !!! Perdiste !!!");
     }

} else if (opcionUsuario==tijera) {
     alert("Elegiste Tijera");

     if (opcionMaquina==piedra) {
          alert("tijera & piedra  !!! Perdiste !!!");
     } else if (opcionMaquina==papel) {
          alert("tijera & papel  !!! Ganaste !!!");
     } else {
          alert("tijera & tijera  !!! Empate !!!");
     }

} else {
     alert("Elige una opcion valida!!!, elegiste"+opcionUsuario);
}
