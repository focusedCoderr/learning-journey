function removePassword(user){
    // if(typeof user === "object" && user.username !== undefined && user.password !== undefined){
    //     user.password = undefined;
    // }

    if(typeof user === "object" && user.hasOwnProperty("username") && user.hasOwnProperty("password") ){
        delete user.password;
    }
    return user;
}