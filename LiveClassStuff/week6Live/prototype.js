class Person{
    constructor(pehlaNaam, lastNaam){
        this.fname = pehlaNaam;
        this.lname = lastNaam;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}


const p1 = new Person("Gaurav", "Yadav");
const p2 = new Person("Sandesh", "Yadav");

console.log(`${p1.fname} ${p1.lname}`);
console.log(`${p2.fname} ${p2.lname}`);
console.log(p2.getFullName());