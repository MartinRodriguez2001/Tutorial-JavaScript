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
    let primeraFila = [""].concat(lista)
    matriz.push(primeraFila)

    for(let i = 0; i < numero; i++){
        let fila = []
        for(let j = 0; j < numero + 1; j++){
            fila.push("C")
        }
        matriz.push(fila)
        matriz[i+1][0] = lista[i]
    }
    console.log(matriz)
    console.log(matriz.map(fila => fila.join(' ')).join('\n'))
    return matriz
}

function interfaz(lista){
    let matriz = crear_matriz_ciudades(lista.length)

}
ciudades()
