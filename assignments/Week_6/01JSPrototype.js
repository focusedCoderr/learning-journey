// class abc{
//     constructor(name){
//         this.name =  name;
//     }

//     makeSound(){
//         return "Some generic sound";
//     }
// }
// The above is the new way in ES6 to make classes and constructor and methods. below is the new way.

function Animal(name){
    this.myName = name;
}

Animal.prototype.makeSound = function(){
    return `Some generic sound`;
}

const obj = new Animal("Gaurav");

console.log(obj.makeSound());