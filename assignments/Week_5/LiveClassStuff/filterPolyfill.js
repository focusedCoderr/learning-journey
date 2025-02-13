const arr = [22,33,44,55,66];

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const newArr = [];
        let counter = 0;
        for(i=0; i< this.length; i++){
            if(userFn(this[i], i, this)){
                // newArr.push(this[i]);
                newArr[counter] = this[i];
                counter += 1;
            }
        }
        return newArr;
    }
}
const res = arr.myFilter(userFn, this);

console.log(res);

function userFn(element, index, arr){

    if(element%3 ===0){
        return true;
    }else{
        return false;
    }
}


