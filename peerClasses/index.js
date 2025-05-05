import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./utils/dbconnect.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "localhost",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

const port = process.env.PORT || 5600;

db()
	.then(() => {
		console.log("I willl run i think");
	})
	.catch((error) => {
		console.log("I think I will never even come to this");
	});
app.get("/hello", (req, res) => {
	res.send("Hello");
});

app.listen(port, () => {
	console.log(`Example app is listening on port ${port}`);
});
