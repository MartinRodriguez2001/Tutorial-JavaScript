
class animal{
    constructor(nombre, especie, edad, dieta, salud){
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.dieta = dieta
        this.salud = salud
        this.alimento = 50
    }

    alimentar(){
        this.alimento + Math.floor(Math.random() * 10)
    }

}
class mamifero extends animal{
    constructor(nombre, especie, edad, dieta, salud, gestacion){
        super(nombre, especie, edad, dieta, salud);
        this.gestacion = gestacion
    }

}
class reptil extends animal{
    constructor(nombre, especie, edad, dieta, salud, gestacion){
        super(nombre, especie, edad, dieta, salud);
        this.gestacion = gestacion
    }
}


class cuidador{
    constructor(nombre, id){
        this.nombre = nombre
        this.id = id
        this.cargo = []
    }
    asignarAnimal(animal){
        this.cargo.push(animal)
    }
}
class zoologico{
    constructor(){
        this.listaCuidador = []
        this.listaAnimales = []
    }
    agregadoAnimal(animal){
        this.listaAnimales.push(animal)
    }
    agregarCuidador(cuidador){
        this.listaCuidador.push(cuidador)
    }
    mostrarAnimales(){
        console.log(this.listaAnimales)
    }

}
const zoologico1 = new zoologico()
const leopardo = new mamifero("Juan", "leopardo", 4, "carne", "normal", 4)
const tigre = new mamifero("Pepe", "tigre", 2, "carne", "baja", 4)
const cocodrilo = new reptil("coco", "cocodrilo", 5 ,"carne", "alta", 8)
const cuidador1 = new cuidador("martin", 1, leopardo)
zoologico1.agregarCuidador(cuidador1)
cuidador1.asignarAnimal(leopardo)
cuidador1.asignarAnimal(tigre)
tigre.alimentar()
console.log(cuidador1)