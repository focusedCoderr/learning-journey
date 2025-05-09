import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApiResponse } from "../utils/api-response.js";

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL);
		console.log("Mongo DB connected");
	} catch (error) {
		console.log("Unable to connect to DB", error);
		process.exit(1);
	}
};

export default connectDB;
