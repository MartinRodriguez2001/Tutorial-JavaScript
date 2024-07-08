/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(texto1, texto2){
    let texto1minuscula = texto1.toLowerCase()
    let texto2minuscula = texto2.toLowerCase()

    lista1 = new Array();
    let contador1 = 0
    while (contador1 < texto1minuscula.length ){
        lista1.push(texto1minuscula[contador1])
        contador1 += 1
    }

    let lista2 = new Array();
    let contador2 = 0;
    while (contador2 < texto2minuscula.length){
        lista2.push(texto2minuscula[contador2])
        contador2 += 1  
    }

    let lista1Ordenada = lista1.sort()
    let lista2Ordenada = lista2.sort()
    let stringLista1 = lista1Ordenada.toString()
    let stringLista2 = lista2Ordenada.toString()

    if (texto1minuscula === texto2minuscula && stringLista1 !== stringLista2){
        console.log("No es un anagrama")
    }   
    else if (texto1minuscula !== texto2minuscula && stringLista1 === stringLista2){
        console.log("Es un anagrama")
    }
}
anagrama("animales", "milanesa")
