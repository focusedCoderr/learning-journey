import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async function () {
	try {
		const connection = await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("connected to mongodb");
	} catch (error) {
		console.log(`Errror occured`, error);
	}
};

export default connectDb;
