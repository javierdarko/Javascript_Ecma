//VAR= Se utiliza para declaracion de variables globales 
//y puede ser transformado su valor en cualquier momento

var nombre_var="Juan";
if (nombre_var =="Juan") {
    nombre_var="Miguel";
    
}
console.log(nombre_var);

/*let nombre= 'Javier Beltran';
console.log("Hola " + nombre);*/
//LET= se utiliza para declarar variables en contextos especificos
//Y puede cambiar su valor den dicho contexto


let nombre_let ="Pedro";
if (nombre_let == "Pedro");{
    let nombre_let = "Mario";
console.log("mi nombre es ",nombre_let);
}
console.log("nombre_let",nombre_let);


//CONST= Se utiliza para declarar variables en contextos expecificos, 
//NO pueden cambiar su valor en dicho contexto, se destruyen por fuera del contexto
//Por lo tanto ahorran memoria

const nombre_const= "Diego";
if (nombre_const== "Diego") {
     nombre_const ="Arturo";

    console.log("nombre_const",nombre_const);
}
    console.log("nombre_const",nombre_const);



    /*-Tipos de dato
-If ternario
-Destructuring
-Template
-Arrow funtion
-For Each
-Map
-Find y Filter
*/