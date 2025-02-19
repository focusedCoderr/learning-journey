function Counter(){
    this.count = 0;
}

Counter.prototype.increment = function (){
    return this.count+1;
}

Counter.prototype.decrement = function(){
    return this.count-1;
}

const c1 = new Counter();
console.log(c1.increment());
console.log(c1.decrement());