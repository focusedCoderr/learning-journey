import express, { urlencoded } from "express";
import "dotenv/config";
import cors from "cors";
import dbconnect from "./utils/dbconnect.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
	origin: process.env.BASE_URL,
	credentials: true,
	methods: ["GET", "POST", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
// connect db

dbconnect();

//import routes
import userRoutes from "./routes/user.routes.js";

app.use(process.env.BASE_EXTENSION, userRoutes);

app.listen(PORT, () => {
	console.log(`Server is serving at port : ${PORT}`);
});
