
function animal(nombre, especie, edad, dieta, salud){
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.dieta = dieta
        this.salud = salud
        this.comida = 50
}

animal.prototype.alimentar = function(){
    this.comida = this.comida + Math.floor(Math.random() * 10)
    
}

function cuidador(nombre, id){
    this.nombre = nombre
    this.id = id
    this.cargo = []
}

cuidador.prototype.asignarAnimales = function(animal){
    this.cargo.push(animal)
}

function zoologico(){
    this.listaCuidadores = []
    this.listaAnimales = []
}

zoologico.prototype.agregadoAnimal = function(animal){
    this.listaAnimales.push(animal)
}

zoologico.prototype.agregarCuidadores = function(cuidador){
    this.listaCuidadores.push(cuidador)
}
zoologico.prototype.mostrarAnimales = function(){
    console.log(this.listaAnimales)
}

const zoologico1 = new zoologico()
const leopardo = new animal("Juan", "leopardo", 4, "carne", "normal")
const cuidador1 = new cuidador("martin", 1, leopardo)
zoologico1.agregarCuidadores(cuidador1)
cuidador1.asignarAnimales(leopardo)
leopardo.alimentar()
console.log(cuidador1)