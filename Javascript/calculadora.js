

function calculadora(){
    let historial = []
    function suma(a, b){
        historial.push(a+b)
        return console.log(a+b)
    }

    function restar(a , b){
        historial.push(a-b)
        return console.log(a-b)
    }
    function history(){
        return console.log(historial)
    }
    function multiplicacion(a, b){
        historial.push(a+b)
        return console.log(a*b)
    }
    function division(a ,b){
        if(b === 0){
            console.log("division por cero no esta permitido")
        }else{
            historial.push(a/b)
            return console.log(a/b)
        }
    }
    return {suma, restar, history, multiplicacion, division};
}
const calculador  = calculadora() //instancia para la calculadora
calculador.suma(1,2)
calculador.restar(2,3)
calculador.history()