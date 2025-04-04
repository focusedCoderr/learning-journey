import mongoose from 'mongoose';

const connectToDb = async () => {
	try {
		mongoose.connect(`${process.env.MONGO_URI}`);
		console.log('MongoDB Connected');
	} catch (error) {
		console.error('Error connecting MongoDB', error);
		process.exit(1);
	}
};

export default connectToDb;
