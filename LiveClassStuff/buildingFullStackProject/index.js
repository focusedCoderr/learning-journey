import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./utils/dbconnect.js";
import cookieParser from "cookie-parser";

// import all routes

import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(
	cors({
		origin: process.env.BASE_URL,
		credentials: true,
		methods: ["GET", "POST", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-type", "Authorization"],
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send("Cohort");
});

app.get("/gaurav", (req, res) => {
	res.json({
		name: "Gaurav",
	});
});

// connect to db
connectDb();

//user Routes

app.use("/api/v1/users/", userRoutes);

app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});
