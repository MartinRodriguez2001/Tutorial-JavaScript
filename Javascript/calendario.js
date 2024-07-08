
const readlineSync = require('readline-sync');
class Ramo{
    constructor(nombre, creditos, profesor){
        this.lista = []
    }
    agregarInfo(){
        const ramos = {
            nombre: "",
            creditos: Number,
            profesor: ""
        } 
        ramos.nombre  = readlineSync.question('¿Cuál es el nombre de la asignatura: ');
        ramos.creditos  = readlineSync.question('¿Cuantos creditos tiene: ');
        ramos.profesor  = readlineSync.question('¿Cuál es el nombre del profesor: ');
        this.lista.push(ramos)
        console.log(this.lista)
    }
}


class menu{
    constructor(opcion){

    }
}
const arqui = new Ramo()
arqui.agregarInfo()

