// function setUsername(username){

//     this.username = username;
//     console.log("Called");
    
// }

// function createUser(username, email, password){

//     this.email = email;
//     this.password = password;
//     setUsername.call(this, username);
// }

// const aUser = new createUser("gyadav187", "gyadav187@gmail.com", "Gaurav@123");

// console.log(aUser);



function setUsername(username){
    this.username = username;
    console.log(`setUsername was called by ${this}`);
}


function setPassword(password){
    this.password = password;
    console.log(`setpassword was called ny ${this}`);
    
}

function user(username, password, email){
    this.email = email;
    setPassword.call(this,password);
    setUsername.call(this,username);
}

const gauravUser = new user("gyadav187",'passwprd123', "gyadav187@gmail.com");
console.log(gauravUser);
























