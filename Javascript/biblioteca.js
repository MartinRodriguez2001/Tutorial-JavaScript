
class libro{
    constructor(nombre, autor, año){
        this.nombre = nombre
        this.autor = autor
        this.año = año
        this.estado = true
    }
    cambiarEstado(){
        if (this.estado === false){
            console.log("el libro: ", this.nombre, ".Esta prestado")
        } else{
            console.log("el Libro: ", this.nombre, "Está disponible")
            this.estado = false
        }
    }
    devolverLibroPrestado(){
        this.estado = true
    }
}


class bibilioteca{
    constructor(){
        this.libros = []
    }

    addLibro(libro){
        this.libros.push(libro)

    }

    listarlibro(){
        console.log(this.libros)

    }
    prestarLibro(nombre){
        const libro = this.libros.find(est => est.nombre === nombre);
        libro.cambiarEstado()

    }
    devolverLibro(nombre){
        const libro = this.libros.find(est => est.nombre === nombre);
        libro.devolverLibroPrestado()
    }
}
const biblio = new bibilioteca()

const libro1 = new libro("el señor de los anillos", "peter jackson", 2000)
const libro2 = new libro("Harry Potter", "J.K. Rowling", 1997)

biblio.addLibro(libro1)
biblio.addLibro(libro2)

biblio.listarlibro()
biblio.prestarLibro("el señor de los anillos")
biblio.listarlibro()
biblio.devolverLibro("el señor de los anillos")
biblio.listarlibro()