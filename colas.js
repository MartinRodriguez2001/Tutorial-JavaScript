function Nodo(value){
    this.value = value
    this.next = null
}

function Queue(){
    this.first = null
    this.last = null
    this.size = 0
}

Queue.prototype.enqueue = function (val){
    var newNode = new Nodo(val)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    }else{
        this.last.next = newNode
        this.last = newNode
    }
    return ++this.size
}

Queue.prototype.dequeue = function(){
    if(!this.first) return null
    var temp = this.first
    if(this.first === this.last){
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
}

let nuevaCola = new Queue()
nuevaCola.enqueue(1)
nuevaCola.enqueue(2)
nuevaCola.dequeue()
nuevaCola.enqueue(3)
console.log(nuevaCola)