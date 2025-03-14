const registerUser = async (req, res)=>{
    
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message : "All fields are required"
        });
    }
    console.log(name, email, password);
    
    res.send("Registered");
};

export {registerUser};

