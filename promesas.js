let miPromesa= new Promise((resolver, rechazar)=>{
    let expresion= 3;
    if(expresion>=2){
    resolver("Resolvió correctamente");
}
    else{

        rechazar("Se produjo un error y esta mal tu expresion");

    }
})


miPromesa.then(valor=>console.log(valor)) .catch(error=>console.log(error));


//Promesa con time out
let promesita= new Promise(resolver=>{
        setTimeout (()=> resolver('Resuelto con promesa y time out'), 3000);

})


promesita.then(valor=>console.log(valor))
//async= indica que una fucnion regresa una promesa
async function miFuncionConPromesa(){
    return "Saludos con promesa y async";

}
//Como es una funcion debe llevar parentesis
//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function miFuncionConPromesaYAwait(){
let mipromo = new Promise(resolve=>{
    resolve('Promesa con await"');
});
//Promesa con await
console.log(await mipromo);

}
miFuncionConPromesaYAwait();

// promesas, await,async,tineout

async function funcionPAT(){
    let mipromesas= new Promise(resolver=>{
        setTimeout(()=> resolver("Funcion promesa con time out y await"),5000);

    });
    console.log(await mipromesas);
    console.log("Fin de la función")
}
funcionPAT();
