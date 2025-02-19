function Robot(name, batteryLevel){
    this.name = name;
    this.batteryLevel = batteryLevel;
}

Robot.prototype.charge =  function(){
    this.batteryLevel =  Math.min(this.batteryLevel +20, 100);
}

//code written by me:
// function Robot(name, batteryLevel) {
//     // Initialize name and batteryLevel properties
//   this.name = name;
//   this.batteryLevel = batteryLevel;
// }

// // Define charge method on Robot's prototype
// Robot.prototype.charge = function(){
//   const increment = 20;
//   let toAdd;
//   if(this.batteryLevel + increment <=100){
//     this.batteryLevel += increment;
//   }else{
//     toAdd = 100-this.batteryLevel;
//     this.batteryLevel += toAdd;
//   }
// }

const r1 = new Robot("Gaurav", 9);
// r1.charge();
// r1.charge();
// console.log(r1.batteryLevel);
console.log(Math.min(r1.batteryLevel +20, 100));