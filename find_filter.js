console.log("Filter");



/*
Función Filter: Recorre cada elemento del Array y retorna 
un nuevo Array filtrado solom los elementos solidcitados
*/

let vehiculos =[
	{
		id:1,
		marca:"Mazda",
		modelo:2014
	},{
		id: 2,
		marca: "Toyota",
		modelo:2015
	},{
		id:3,
		marca:"Honda",
		modelo: 2018

	}]
	let filtrarVehiculos = vehiculos.filter(vehiculo =>{
		return vehiculo.modelo >2016
		//filter puede devolver un solo objeto...
		//return vehiculo.id===1

	})
	console.log("filtrarVehiculos",filtrarVehiculos);

	/*Funcion Find: Recorre cada elemento del Array y retorna 
	el primer elemtno que coincida con la busqueda por fuera del Array
	*/
	console.log("Función Find");
	let buscarVehiculo = vehiculos.find (vehiculo =>{
		return vehiculo.modelo > 2016
	})
	console.log("buscarVehiculo",buscarVehiculo)