console.log("Callbacks");
/*
CALLBACK: Es una funciion que se ejecuta cuando algo sucede en otra función
*/
let paises= [
{
    id: 1,
    pais: "Argentina",
    continente: "Sudamerica"
},{
    id:2,
    pais:"Canadá",
    continente:"Norteamerica" 
},{
    id:3,
    pais: "México",
    continente:"Centroamerica"
}];

let tomarPais= (id, callback) =>{

    let idPais= paises.find(pais =>{
        return pais.id ===id;
    })
    if (!idPais) {
        callback("No existe en la Arreglo");
    } else{

        callback(idPais);

    }
}
tomarPais(1,(mensaje)=>{
    console.log("mensaje",mensaje);

})
tomarPais(4,(mensaje)=>{
    console.log("mensaje",mensaje);
})