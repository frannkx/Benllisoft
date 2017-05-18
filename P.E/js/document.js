//Document Object Model

/*navigator controla opciones especiales del navegador,
 windows ventana ,
  document html,

var maxima;
maxima=Math.max(5,23,4,5,12,23,100);
document.write(maxima);


//localizacion GPS
function mostrar(pos){
     document.write(pos.coords.latitude+","+pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition(mostrar);
*/
function Pokemon(nombrePokemon, vidaPoke, ataPoke){
     var EstructuraPokemon={
          nombre:nombrePokemon,
          vida:vidaPoke,
          ataque:ataPoke,
          datos:{tipo:"Tierra", debilidad:"Fuego"}
     };
     return EstructuraPokemon;
}

var pikachu=Pokemon("Pikachu", 100, 55);
var bulbasaur=Pokemon("Bulbasaur", 90, 50);
// bulbasaur.nombre="bulbasaur";
// bulbasaur.vida="90";
// bulbasaur.ataque="50";

console.log(bulbasaur);

// document.write(bulbasaur.datos.tipo);
