import mongoose from "mongoose";
import "dotenv/config";

const db = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_DB_URL);
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.log("Error connecting to the database", error);
	}
};

export default db;
