
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(matriz){
    interfaz()
    rl.question("Ingrese la accion que desea realizar: ", (opcion) => {
        switch(opcion){
            case "pintar":
                pintar_punto(matriz)
                break
            case "reemplazar color":
                reemplazo(matriz)
                break
            case "cruz":
                cruz(matriz)
                break
            case "diagonal":
                diagonal(matriz)
                break 
            case "salir":
                rl.close()
                break
            default:
                console.log("opcion invalida")
                menu(matriz);
                break;
        }
    })
}
function interfaz(){
    console.log("--------Menu---------")
    console.log("P                 |Herramienta de punto")
    console.log("C                 |Definir color de brocha")
    console.log("F                 |definir el color de fonsdo actual")
    console.log("pintar            |Pinta un punto con la herramienta y con el color de brocha actuales.")
    console.log("reemplazar color  |Pide el color a reemplazar y luego el color por el que se reemplaza.")
    console.log("rotar             |Rota el lienzo en 90 grados.")
    console.log("diagonal          |Solicita un punto y dibuja una diagonal.")
    console.log("cruz              |Solicita un punto y dibuja una cruz de extremo a extremo.")
    console.log("histograma        |Muestra el histograma de colores.")
    console.log("salir")
    console.log("-------------------------------")
}

function desplegar_lienzo(largo,ancho){
    let matriz = []
    for(let i = 0; i < largo; i++){
        let fila = []
        for(let j = 0; j < ancho; j++){
            fila.push("x")
        }
        matriz.push(fila)
    }
    return matriz
}

function lienzo_pantalla(matriz){
    console.log(matriz.map(fila => fila.join(' ')).join('\n'));
}

function pintar_punto(estado){
    rl.question('Ingrese la coordenada en x: ', (x) => {
        rl.question('Ingrese la coordenanda en y: ', (y) => {
            estado[x-1][y-1] = "P"
            lienzo_pantalla(estado)
            menu(estado)
        })
    })
}

function reemplazo(estado){
    rl.question("Igrese el color original que desea cambiar: ", (colorOriginal) => {
        rl.question("Ingrese el color nuevo: ", (colorNuevo) => {
            for(let i = 0; i < estado.length ; i++){
                for(let j = 0; j < estado[i].length ; j++){
                    if (estado[i][j] === colorOriginal){
                        estado[i][j] = colorNuevo;
                        console.log("Color reemplazado")
                    }
                }
            }
            lienzo_pantalla(estado)
            menu(estado)
        })
    })
}

function rotar(estado){

}

function diagonal(estado){
    rl.question("Ingrese la coordenanda x del centro: ", (x) => {
        rl.question("Ingrese la coordenada y del centro: ", (y) =>{
            for(let i = 1;  i < estado.length; i++){
                estado[i][i+1] = "D"
            }
            lienzo_pantalla(estado)
            menu (estado)
        })
    })
}

function cruz(estado){ 
    rl.question("Ingrese la coordenada x del centro: ", (x) => {
        rl.question("Ingrese la coordenada y del centro: ", (y) => {
            for (let i = 0; i < estado.length; i++){
                estado[i][y-1] = "C"
            }
            for(let j = 0; j < estado.length; j++){
                estado[x-1][j] = "C"
            }
            lienzo_pantalla(estado)
            menu(estado)
        })

    })
}

rl.question('Ingrese el ancho del tablero:  ', (ancho) => {
    rl.question('Ingrese el largo del tablero ', (largo) => {
        let matriz = desplegar_lienzo(ancho,largo)
        lienzo_pantalla(matriz)
        menu(matriz)   
        }) 
    });
