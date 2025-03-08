let num = "42"

let convertedNum = Number(num);
// let convertedNum = parseInt(num);
// let convertedNum = +num;


// console.log(convertedNum);
// console.log(typeof convertedNum);

// let str = null;
// let convertedStr = String(str);

// console.log(convertedStr);
// console.log(typeof convertedStr);

// console.log(JSON.stringify(str));
// console.log(typeof JSON.stringify(str));

// console.log(str.toString());
// console.log(typeof str.toString());



let a = 10;
let b =  3;


// console.log(a**b);

(function randomNumber09(){
    const rand = Math.random();
    const from0To1Float = rand*10;
    const intValues = Math.ceil(from0To1Float);
    let diceValue = intValues;
    let numberGreaterThan6
    if(intValues>6){
        numberGreaterThan6 = intValues-6;
        diceValue = 6 - numberGreaterThan6;
    }
    console.log(diceValue);
});

// randomNumber09();

// console.log(Math.min());

let message =  "Helloh lo"

// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// console.log(message.indexOf(" lo"));

// console.log(message.slice(1, 5));

const chaiTypes = ["Masala Chai", "Ginger Chai", "Greeen Tea", "Lemon Tea"];

const recipe = {
    name : "Hasala Chai",
    ingredients : {
        teaLeaves : "Assam Tea",
        milk : "Full Cream",
        sugar : "Brown Sugar",
        spices : ["Daalchini", "Ginger"]
    },
    instruction : "Boil and do something"
};


let {name, rhingredients} = recipe;
let [firstChai, secondChai] = chaiTypes;
console.log(rhingredients);
console.log(firstChai);
console.log(secondChai);
console.log(chaiTypes);

