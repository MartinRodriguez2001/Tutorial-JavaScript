function persona(nombre, edad,sexo,peso,altura){
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    this.dni = Number
}

persona.prototype.esMayorDeEdad = function (){
    if (this.edad > 18){
        console.log("La persona ES mayor de edad")
    }else{
        console.log("La persona No es mayor de edad")
    }
}
persona.prototype.comprobarSexo = function(){
    if(this.sexo !== "H" && this.sexo !== "M"){
        console.log("El sexo introducido NO es el correcto")
        this.sexo = "H"
    }else{
        console.log("El sexo introducido es correcto")
    }
}
persona.prototype.generarDNI = function(){
    this.dni = Math.floor(Math.random() * 1000000000)
}


function lista(){
    this.listaPersonas = []
}

lista.prototype.agregarPersona = function(nuevaPersona){
    this.listaPersonas.push(nuevaPersona)
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function agregadorDePersonas(){
    rl.question("Ingrese el nombre de la persona: ", (nombre) => {
        rl.question("Ingrese la edad de la persona: ", (edad) => {
            rl.question("Ingrese el sexo de la persona: ", (sexo) => {
                rl.question("Ingrese el peso de la persona: ", (peso) => {
                    rl.question("Ingrese la altura de la persona: ", (altura) => {
                        if (nombre === "salir"){
                            rl.close()
                        }else{
                            const nuevaLista = new lista()
                            const nuevaPersona = new persona(nombre, edad, sexo, peso, altura)
                            nuevaPersona.comprobarSexo()
                            nuevaPersona.esMayorDeEdad()
                            nuevaPersona.generarDNI()
                            nuevaLista.agregarPersona(nuevaPersona)
                            console.log(nuevaLista)
                            agregadorDePersonas()
                        }
                    })
                })
            })
        })
    })
}
agregadorDePersonas()