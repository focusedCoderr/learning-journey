import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL);
		// console.log(connection);
		console.log("Connection Successful");
		return connection;
	} catch (error) {
		console.log("Error occured ", error);
	}
};

export default db;
