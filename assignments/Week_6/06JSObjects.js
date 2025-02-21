function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    let ret = {};
    if(typeof obj1 === "object" && typeof obj2 === "object"){
        if(Object.keys(obj1).length !=0 && Object.keys(obj2).length !=0){
            const obj3 ={};
            for(let key in obj1){
                if(obj2.hasOwnProperty(key)){
                    obj3[key] = obj2[key];
                    delete obj2[key];
                }else{
                    obj3[key] = obj1[key];
                }
            }
            for(let key in obj2){
                obj3[key] = obj2[key];
            }
            return obj3;
        }
        else if(Object.keys(obj1).length === 0){
            ret = obj2;
        }else{
            ret = obj1;
        }

        return ret;
    }
}

const obj1 = {};
const obj2 = {city:"New York"};

console.log(mergeObjects(obj1, obj2));





