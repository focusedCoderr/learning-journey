const obj1 = {
    fname: "Gaurav",
    lname: "Yadav",
    getfullName: function(){
        return `${this.fname} ${this.lname}`;
    }
}

const obj2 = {
    fname: "Sandesh",
    lname: "Yadav",

}



console.log(obj2.getfullName());