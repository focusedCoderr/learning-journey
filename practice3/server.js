import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-type', 'Authorization']
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/", (req,res)=>{
    res.send("Chalo thoda kuch kia")
})

app.get("/sandesh", (req,res)=>{
    res.send("Sandesh is recovering well")
})

//Connect to DB

db();

//User Routes
app.use("/api/v1/users/", userRoutes);


app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})