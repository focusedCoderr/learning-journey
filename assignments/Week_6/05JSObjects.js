function countProperties(user) {
    // Return the number of properties in user
    if(typeof user == "object"){
        let count = 0;
        for(let property in user){
            count++;
        }
        return count;
    }
  }

  const obj = {};

  console.group(countProperties("abc"));