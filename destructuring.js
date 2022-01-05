console.log("Destructuring");

/*
Asignación Destructuring:
Nos permite tomar los valores de las propiedades de un objeto
de forma directa, utilizando el mismo nombre de la propiedad

*/

let carro ={

	marca : "Ferrari",
	modelo : 2020,
	color : "Rojo"

}
let propiedades = "color";
	console.log("carro",carro ["color"]);
console.log("", carro.marca);
console.log("Carro", carro);


const {marca, modelo ,color } = carro;

console.log("Carro: ",marca);
console.log("Carro", color);