function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for(let key in obj){
        if(obj[key] === undefined || obj[key] === null){
            delete obj[key];
        }
    }
    return obj;
}
// try with && operator and also I have doubt whether for in loop works if we delete one key value pair from the object