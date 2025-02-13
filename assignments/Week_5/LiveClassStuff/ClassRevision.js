//Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name: "Lemon Tea",
    type  : "What do I know",
    caffeine : "Less"
}

//Access and print the name and type properties of the tea object

console.log(`The name of the tea is ${teas.name} and the type is ${teas.type}.`);
console.log(`But I can also write this as ${teas["type"]}`);

// Add a new property origin to the tea object

teas["origin"] = "India";
console.log(`The tea is from ${teas["origin"]}`);

// cHANGE THE CAFFEINE LEVEL OF THE OBJECT TO "Medium".

teas.caffeine = "Medium";
// Remove the type property from the tea object.

delete teas.type;

//Check  if teas object has a property origin
// Method 1
// console.log(Object.hasOwn(teas, "origin"));
// Method 2
// let result = false;
// for(let key in teas){
//     if(key === "origin"){
//         result  = true;
//     }
// }

// console.log(result);

// Method 3

console.log("origin" in teas);

// use a for ... in loop to print all properties of the teas object

for(let key in teas){
    console.log(`${key} : ${teas[key]}`);
}

// Create a nested object representing different types of teas and their properties.

const manyTeas = {
   tea1 : {
    nameOfTea : "Lemon Tea",
    type : "good tea",
    caffeine  : true
   },
   tea2 : {
    nameOfTea : "Black Tea",
    type : " Not good tea",
    caffeine  : false
   },

   hello : false


}

for(let key in manyTeas){
    console.log(key.nameOfTea);

    console.log(`${key.nameOfTea} is ${key["type"]}`);
}

// I can't understand the above code. I will come back to it. Let me first complete this class task

// Create a copy of the teas object

const copyOfTeas = {... manyTeas}; // shaloow copy

const secondCopy = manyTeas; // this is not a copy . only reference is copied

const thirdCopy = JSON.parse(JSON.stringify(manyTeas)); // deep copy

console.log(manyTeas);
// console.log(copyOfTeas);
console.log(thirdCopy);
// copyOfTeas.tea1.caffeine = false;
// copyOfTeas.hello = true;
thirdCopy.tea1.caffeine = false;
console.log(manyTeas);
console.log(thirdCopy);

// Add a custom method describe to the tea object that returns a description string.

// Merge to objects representing different teas into one.