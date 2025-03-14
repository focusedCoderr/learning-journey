require("dotenv").config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    res.send("Hello Everyone");
});

app.get("/sandesh", (req, res)=>{
    res.send("<h1>Sandesh is my love</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`backend practice is running on ${process.env.PORT}`);
})

console.log(process.env)

