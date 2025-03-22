import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const registerUser = async (req, res)=>{

    // get Data
    // validate
    // check if user already exists
    // create a user in database
    // create a verification token
    // save token in database
    // send token as email to user
    // send success status to user
    
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message : "All fields are required"
        });
    }
    console.log(name, email, password);

    try {
       const existingUser =  await User.findOne({email});
       if(existingUser){
         return res.status(400).json({
            message : "User already exists"
         });
       }
    //    const newlyCreateduser =  await User.create({
    //         name,
    //         email,
    //         password
    //     })

    //     console.log("hi");
  // _____________testing_________________


  try {
    console.log("Attempting to create user...");
    const newlyCreateduser = await User.create({
        name,
        email,
        password
    });
    console.log("User created:", newlyCreateduser);

    console.log("hi");  // This should print now if user creation succeeds
} catch (err) {
    console.error("User creation failed:", err);
    return res.status(500).json({
        message: "Failed to create user",
        error: err.message
    });
}

        

        if(!newlyCreateduser){
            return res.status(400).json({
                message : "User not registered"
             });
        }
        

        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);

        newlyCreateduser.verificationToken = token;
        await newlyCreateduser.save();

        // send email

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
          });
        
        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL, // sender address
            to: newlyCreateduser.email, // list of receivers
            subject: "Verify your email", // Subject line
            text: `PLease click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            ` // plain text body
          };
        await transporter.sendMail(mailOption);

          res.status(201).json({
            message : "User registered successfully",
            success :  true
          })
        
    } catch (error) {
        res.status(400).json({
            message: "User not registered ",
            error,
            success : false
        });
    }
    
    res.send("Registered");
};

const verifyUser = async (req, res) => {
    const {token} = req.params;

    console.log(token);

    if(!token){
        return res.status(400).json({
            message :  "Invalid token"
        })
    }

    const user = await User.findOne({verificationToken: token});

    if(!user){
        return res.status(400).json({
            message : "Invalid token"
        });
    }

    user.isVerified =  true;
    user.verificationToken = undefined;
    await user.save();
}

const login = async (req, res)=> {

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message : "All fields are required"
        })
    }

    try {
       const user = await User.findOne({email})

       if(!user){
        return res.status(400).json({
            message : "Invalid email or password"
        })
       }

    const isMatch = await bcrypt.compare(password, user.password)
       
    if(!isMatch){
        return res.status(400).json({
            message : "Invalid email or password"
        });
    }

    const token = jwt.sign(
        {id: user._id},
        "shhhhh",
        {
            expiresIn: '24h'
        }
    );

    const cookieOPtions = {
        httpOnly : true,
        secure: true,
        maxAge : 24*60*60*1000
    }
    res.cookie("token", token,cookieOPtions );

    res.status(200).json({
        success: true,
        message : "Login successful",
        token,
    });



} catch (error) {
        
    }

}

export {registerUser, verifyUser, login};

