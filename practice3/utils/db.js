import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const db = function (){

    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log("Mongo DB Connected")
    })
    .catch((err)=>{
        console.log("Mongo DB not connected")
    })
}
 export default db;
