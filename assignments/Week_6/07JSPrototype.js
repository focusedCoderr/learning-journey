function Employee(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.applyBonus =  function(percent){
    const increase = (percent/100) * this.salary;
    this.salary += increase;
}

const A = new Employee("Alice", "Manager", 45000);
A.applyBonus(8);
console.log(A.salary);