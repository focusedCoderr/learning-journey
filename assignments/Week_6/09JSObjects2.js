function deepClone(obj){
    if(obj ===null || typeof obj !== "object"){
        return obj;
    }

    const clone = Array.isArray(obj) ? []: {};

    for(let key in obj){
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}