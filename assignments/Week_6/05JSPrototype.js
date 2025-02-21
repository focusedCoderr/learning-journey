function ShoppingCart(){
    this.items = [];
}

ShoppingCart.prototype.addItem = function(price){
    this.items.push(price);
}
// for in loop was used instead of forEach because array is also an object
ShoppingCart.prototype.getTotalPrice = function(){
    let sum = 0;
    for(element in this.items){
        let value = JSON.parse(`${this.items[element]}`);
        // console.log(sum);
        sum += value;
    }

    

    return sum;
}

const sc = new ShoppingCart();
sc.addItem(10);
sc.addItem(20);
sc.addItem(30);
console.log(sc.items);

let getPrice = sc.getTotalPrice();
console.log(getPrice);

console.log();