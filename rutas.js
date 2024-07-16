const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lista = []
function ciudades(){
    rl.question("Ingrese el nombre de la siguiente ciudad: ", (nombre) => {
        if (nombre.toLocaleLowerCase() === "salir"){
            rl.close()
            interfaz(lista)
        }else{
            console.log("Nombre:", nombre, "agregado")
            lista.push((nombre.toLocaleUpperCase()).slice(0, 3))
            console.log(lista)
            ciudades()
        }
    })
}
function crear_matriz_ciudades(numero){ //lista.length
    let matriz = []
    matriz.push(lista)

    for(let i = 0; i < numero + 1; i++){
        let fila = []
        for(let j = 0; j < numero + 1; j++){
            fila.push("C")
        }
        matriz.push(fila)
    }
    console.log(matriz)
    console.log(matriz.map(fila => fila.join(' ')).join('\n'))

}

function interfaz(lista){
    crear_matriz_ciudades(lista.length)
}
ciudades()
