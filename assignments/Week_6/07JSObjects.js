function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    const ret =[];
    if(obj.toString()){
        if(Object.keys(obj).length ===0){
            return ret;
        }else{
            
            for(let key in obj){
                let arr =[];
                arr.push(key);
                arr.push(obj[key]);
                ret.push(arr);
            }
        }
    }

    return ret;
}