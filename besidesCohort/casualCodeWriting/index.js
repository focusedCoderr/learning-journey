class ohBhai {
  constructor(naam, baapKaNaam) {
    this.naam = naam;
    this.baapKaNaam = baapKaNaam;
  }

  avariable = 2;
  // ask chat gpt why can't a class have a const keyword
  // I think answer to this question is because we will make objects out of this class
  // and then if we make const variable then jno object will be able to change the value
  // of that variable...

  // but again the question arises that if we want a propertyy to be always the same for
  // all the objects of that class. then what will we do? there should be something
  // that allows that no one can change some properties
  anotherVariableb = "Hello";
}

class ohBhai2 extends ohBhai {
  constructor(name, naam, baapKaNaam) {
    super(naam, baapKaNaam);
    this.name = name;
  }
}

const obj1 = new ohBhai("golu", "papa");
const obj2 = new ohBhai2("Gaurav Yadav", "golwa", "daddy");

console.log(obj1);
console.log(obj2);

const anotherObject = {
  a: 2,
  b: 3,
};

console.log(anotherObject);

const arr = [1, 2, 3, 4];
console.log(arr);
