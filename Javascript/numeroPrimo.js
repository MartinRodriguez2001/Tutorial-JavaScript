/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function primos(numero){
    for (let numerador = 1; numerador <= numero; numerador++){
        if (numero % numerador === 0 && numerador !== 1 && numero !== numerador ){
            var valor = numero % numerador
        }
    }
    if (valor === 0){
            console.log(numero, ":no es primo")
    }else{
        console.log(numero, ":es primo")
    }
}

function NumeroPrimos(limite){
    for(let i = 0; i<= limite; i++){
        console.log(primos(i))
    }
}
primos(20)
NumeroPrimos(100)