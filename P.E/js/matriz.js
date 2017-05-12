/*alert("Matrices");

var menu=["Productos","Ventas","Contacto"];
document.write(menu[1]);



var dofa=[["Fortalezas","Oportunidades"],["Debilidades","Amenazas"]];
document.write(dofa[0][2]);
*/

function explosion(){
     alert("!!!BOOM!!!");
     document.write("<h1>!!!BOOM!!! Elegiste un area minada</h1>")
}

function ganaste(){
     document.write("Eres un ganador!!!");
}


var campo = [  [1,0,0],
               [0,1,0],
               [1,1,1]];
var x,y;
var textos=["Cesped","Bomba"];

alert("Estas en un campo minado\n"+"Elije una posición entre el 0 y el 2 para el eje X y para el eje Y");
x=prompt("Posición en x? (entre 0 y 2)");
y=prompt("Posición en y? (entre 0 y 2)");


var posicion;
posicion = campo[x][y];
document.write(textos[posicion]);


if(x<3 && y<3){
     document.write("sitio correcto");
}else{
     document.write("te saliste del campo");
     explosion();
}
