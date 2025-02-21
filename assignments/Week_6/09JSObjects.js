// function deepClone(obj) {
//     // Return a deep copy of obj
//     let newObj = {};
//     if(obj.toString()){
//         let str = JSON.stringify(obj);
//         newObj = JSON.parse(str);
//     }
//     return newObj;

// }

function deepClone(obj){
    const newObj = {};
    if(typeof obj === "object" && obj !== null){
        for(let key in obj){
            if(typeof obj[key] === "object" && obj[key].length === undefined){
                // const newObj[key] = {};
// the above line gives error of missing initializer in const declaration
                const objInside = {};
                for(let key2 in obj[key]){
                    // newObj[key][key2] = obj[key][key2];
// The above line gives error of cannot set properties of undefined
                    objInside[key2] = obj[key][key2];
                    newObj[key] = objInside;
                }
            }else if(typeof obj[key] === "object" && obj[key].sort()){
                const arrInside = [];
                obj[key].forEach(element => {
                    arrInside.push(element);
                });
                newObj[key] = arrInside;
            }else{
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

const abc = {
    a: [1,2,3],
    b: {
        x:2,
        y: [2,3,4]
    },
    c: 22

}

console.log(deepClone(abc));

const d= [1,2,3];
console.log(typeof d);

const e = {
    a:2,
    b:3
};

console.log(e.length);