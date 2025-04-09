import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({}));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send("Cohort");
});

app.get("/gaurav", (req, res) => {
	res.json({
		name: "Gaurav",
	});
});

app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});
