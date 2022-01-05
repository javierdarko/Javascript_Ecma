console.log( ".MAA()");

/*
Funcion MAP(): REcorre cada elemento del Array y retorna
modificaciones que le deseemos realizar al array inicial

*/

let deportes=[

{
	titulo: "Futbol",
	nivel: "Básico"
}, {
	titulo: "Tenis",
	nivel: "Intermedio"
}, {
	titulo:"Golf",
	nivel: "Avanzado"
}]

console.log("deportes",deportes);

let agregarLugar = deportes.map((deporte, index) => {
	
	if (index ===1) {
	deporte.lugar =" Estadio";
 }
 if (index ===2) {
 	deporte.nivel = "Básico";
 }
	return deporte;
})

console.log("agregarLugar",agregarLugar);