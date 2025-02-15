const arr = [2,5,6,3,7];


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        let newArr = [];
        for(let i = 0; i < this.length; i++){
            const valueToAdd = userFn(this[i], i, this);
            // Do you understand why even after declaring const, each time it can store different value to valueToAdd?
            // console.log(valueToAdd);
            newArr[i] = valueToAdd;
        }
        return newArr;
    }
}

let result  = arr.myMap(userFn, this);
console.log(result);
console.log(arr.map(userFn, this));
function userFn(element, index, arr){
    return element*2;
}


