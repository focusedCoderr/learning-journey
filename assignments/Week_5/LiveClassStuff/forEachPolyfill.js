const arr =[22,33,44,55,66];

if(!Array.prototype.myforEach){
    Array.prototype.myforEach = function(){
        for(let i =0; i <this.length; i++){
            userFn(this[i], i, this);
        }
    }
}

arr.myforEach(userFn, this);


function userFn(element, index, arr1){
    console.log(`The element at index ${index} is ${element} which is equal to ${arr1[index]}`);
}