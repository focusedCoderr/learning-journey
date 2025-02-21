function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

Product.prototype.applyDiscount = function(percent){
    this.price = Math.round(this.price-((percent/100)*this.price));
}

Product.prototype.purchase = function(quantity){
    if(quantity>this.stock || this.stock ===0){
        return "Not enough stock";
    }else{
        this.stock -= quantity;
        return this.stock;
    }
}

const a = new Product("Phone", 500, 5);

a.purchase(2);
console.log(a.stock);