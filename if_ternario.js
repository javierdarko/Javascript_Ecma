console.log("If Ternario");


/*
IF TERNARIO
Sirve para hacer comprobaciones rapidas de falso o verdadero
*/

let camisa = {
	talla: 34,
	cantidad: 0,
	existencia: false
}
const {talla, cantidad, existencia} = camisa;

let respuesta;

/*if (existencia) {

	respuesta = "Hay "+cantidad+ " camisas";

} else {
	respuesta= "No hay camisas";
}
*/


existencia ? respuesta = "Hay "+cantidad+ " camisas" :
respuesta = "no hay camisas";

console.log ("respuesta", respuesta);
