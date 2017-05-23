//Document Object Model

function Pokemon(n,v,a){
     this.grito="Pika!";
     this.nombre=n;
     this.vida=v;
     this.ataque=a;
     this.gritar=function(){
          alert(this.grito);
     }
}

function inicio(){
     var rattata=new Pokemon("Pikachu", 100, 55);
     rattata.vida=rattata.vida-13;
     nombrePokemon.innerText=rattata.nombre;
     datosPokemon.innerText="Vida: "+rattata.vida+" "+"Ataque: "+rattata.ataque;
     if(nombrePokemon.innerText=="Rattata"){
          document.getElementById("imagen").src="img/rattata.png";
     }
     if(nombrePokemon.innerText=="Pikachu"){
          document.getElementById("imagen").src="img/pikachu.png";
     }
}




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
/*function Pokemon(nombrePokemon, vidaPoke, ataPoke){
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

console.log(bulbasaur);*/

// document.write(bulbasaur.datos.tipo);
