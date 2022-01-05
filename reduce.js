
//Sumatoria
    const numeros= [4,9,8,7,1];

 const res = numeros.reduce((numero,item)=>{
    
    return numero= numero+item
    }   );
   console.log(res);


    const mayor = numeros.reduce((numero,item)=>{
        return Math.max(numero,item);
    });
    console.log(mayor);

//Concatenar strings
 const strings=['Que','Tal','Me','llamo','Carlos']


const lol = strings.reduce(( string,item)=>{

    return string += item+' '; //las ' ' son para que haya espacio entre los arreglos

}, ' ' );//  aqui se puede poner un valor inicial
console.log(lol);