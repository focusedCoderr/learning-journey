function createStudentProfile(name, age, grade){
    const student = new Object();
    if(typeof(name)=== "string" && age > 5 && typeof(grade)==="string"){
        student.name = name;
        student.age = age;
        student.grade = grade;
    }else{
        return "Invalid input";
    }
    return student;
}

console.log(typeof(""));