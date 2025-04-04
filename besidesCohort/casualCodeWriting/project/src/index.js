import app from './src/app.js';
import dotenv from 'dotenv';
import connectToDb from './db/dbconnect.js';

dotenv.config({
	path: './.env',
});

const PORT = process.env.PORT || 3000;

connectToDb()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on ${PORT}`);
		});
	})
	.catch((err) => {
		console.error('MongoDB Connection error', err);
		process.exit(1);
	});
