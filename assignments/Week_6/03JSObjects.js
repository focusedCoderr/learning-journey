function hasDiscount(product){
    // if(typeof product === "object"){
    //     return product.discount ? true : false;
    // }

    return product.hasOwnProperty("discount");
}