function getNestedValue(obj, keyPath){
    const arr =[];
    let spstr = "obj.";
    let strToMake = "";
    const str = {...keyPath};
    for(let key in str){
        if(str[key] === "."){
            arr.push(strToMake);
            strToMake = "";
        }else{
            strToMake += str[key];
        }
    }
    arr.push(strToMake);
    // console.log(arr);
    let finalVal = obj;
    for(let element in arr){
        //  finalVal = finalVal[`${arr[element]}`];
        let ref = arr[element]; 
        console.log(ref);
        finalVal = finalVal[ref];
    }
    return finalVal;
    // getting runtime error in the above function. don't know why

    // let pre = "obj.";
    // let final = pre+keyPath;

    // let value = JSON.parse(final);
    // // please confirm why it didn't run
    // return value;
}



const a = {obj:{
    user:{
        address : {
            city : "New York"
        }
    }
}} 

let str = "user.address.city";
console.log(getNestedValue(a,str));
