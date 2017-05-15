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

var Pokemon={
     nombre:"Pikachu",
     tipo:"Eléctrico",
     vida:100,
     ataque:55
};

var pikachu=Pokemon;
var bulbasaur=Pokemon;
bulbasaur.nombre="Bulvasaur";
bulbasaur.tipo="Tierra";
bulbasaur.vida="90";
bulbasaur.ataque="50";
