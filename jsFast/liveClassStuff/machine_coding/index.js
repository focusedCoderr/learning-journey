const arr = [1,2,3,4,5,6,7,8,9,10];

function neagtiveIndex(arr){
    return new Proxy(arr,{
        get(target, index){
            if(index<0){
                const targetIndex = target.length + index;
                return target[targetIndex];
            }else{
                return target[index];
            }
        },
        set(target, index, value){
            if(index<0){
                const targetIndex = target.length + index;
                target[targetIndex] = value;
            }else{
                target[index] = value;
            }
            return true;
        }
    });
}