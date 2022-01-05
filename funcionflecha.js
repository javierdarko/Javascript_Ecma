console.log("Funciones tipo flecha");

/*
FUNCIONES DE TIPO FLECHA: Son funiones anonimas y se deben guardar
 en variables constantes para que no se modifiquen sus valores en el futuro.
 Solo valen para definir funciones como expresión, no como declaración, por tanto siempre
 hemos de usarla formando parte de una sentencia, una asignación o como argumento de otra función

*/

//function holaMundo(){

//	console.log("Hola Mundo")
//}


//holaMundo();
 //Funcion anonima necesita aignarse a una variable(Const para que no cambie)
//()=>{}

const holaMundo = () =>{

	console.log("Hola Mundo")

}
holaMundo();

//Funcion Flecha con un solo parametro

const holaMundoParam = mensaje =>{

	console.log(mensaje)
}
holaMundoParam("Hola Mundo...");
//Funcion flecha con 2 o más parametros

const holaMundo2p = (mensaje1,mensaje2= "hola") =>{

	console.log(mensaje1,mensaje2)
}
console.log("Hola Mundo...","Cómo están?");




