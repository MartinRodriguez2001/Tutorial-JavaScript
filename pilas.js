function Nodo(value){
    this.value = value
    this.next = null
}

function Stack(){
    this.first = null
    this.last = null
    this.size = 0
}

Stack.prototype.push = function(val){
    var NuevoNodo = new Nodo(val)
    if(!this.first){
        this.first = NuevoNodo
        this.last = NuevoNodo
    }else{
        var temp = this.first
        this.first = NuevoNodo
        this.first.next = temp
    }
    return ++this.size
}

Stack.prototype.pop = function(){
    if(!this.firts) return null
    var temp = this.first
    if(this.first === this.last){
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
}

let nuevoStack = new Stack()

console.log(nuevoStack.push(1))
console.log(nuevoStack.push(2))
console.log(nuevoStack.push(3))

console.log(nuevoStack)