import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";

dotenv.config({
	path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log("Mongo Connection error", err);
		process.exit(1);
	});
