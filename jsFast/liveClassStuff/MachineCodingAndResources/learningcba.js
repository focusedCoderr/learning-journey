const book = {
    title : "Javascript Mastery"
}

function describe(authName){
    console.log(`This book is called ${this.title} and is written by ${authName}`);
    
}

// describe.call(book,"hitesh");

// const car = {
//     brand : "Maruti",
//     showBrand(){
//         console.log(`This is a ${this.brand}`);
//     }
// }

// const bike = {
//     brand : "Yamaha"
// };

// car.showBrand.call(bike);

//mini challenge 2

const person1 = {
    aName : 'Gaurav',
    introduce(){
        console.log(`my name is ${this.aName}`);
        
    }
}

const dog1 = {
    adName : "Duffer"

}

// person1.introduce.call(dog1);


const car = { brand: "Toyota" };
function showCar(color, year) {
  console.log(`This is a ${color} ${year} ${this.brand}`);
}
showCar.call(car, "red", 2022);


// showCar.apply(car, ["red", 2022]);

const user = {
    username : "coder123"
}

function login(){
    console.log(`${this.username} has logged in`);
    
}

const toBeCalledLater = login.bind(user);
toBeCalledLater();
