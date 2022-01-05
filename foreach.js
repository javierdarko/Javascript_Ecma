console.log("For y For Each");

/*FOR:



*/
let cursos = [

	{

	titulo: "Aprendiendo JavaScript",
	nivel: "Avanzado"
},
	{

	titulo: "Aprendiendo ECMAScript",
	nivel: "Intermedio"

	}, {
	titulo: "Aprendiendo React",
	nivel: "Básico"
}]

// a la variable i siempre no pase la longitud, 
// entonces la variable incrementa en 1

for (let i = 0; i < cursos.length; i++) {
	console.log(cursos[i].titulo)

	if(i>0){
		break;
	}
}


/*FOR EACH: Es una reduccion del codigo del ciclo For y
para interumpir se debe colocar en primer instancia el return


*/
cursos.forEach((curso, index)=> {
	
	console.log("index",index)
	
	console.log(curso.titulo)
	
	//interrupcion del forEach se coloca antes de mostrar pantalla.

	if(index>0){
		return;
	}

})