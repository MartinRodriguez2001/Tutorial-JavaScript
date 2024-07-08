/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let lista = [0,1]
for (let i = 0; i < 20 ; i++){
    lista.push(lista[i] + lista[i+1])
}
console.log(lista)
