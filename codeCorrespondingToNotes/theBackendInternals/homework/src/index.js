// import express from "express";
// import "dotenv/config";

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
// 	res.status(200).json({
// 		message: "Yes you have come at home page",
// 	});
// });

// app.listen(PORT, () => {
// 	console.log("I am listening at port : ", PORT);
// });

import cohortExpress from "./cohortExpressClone.js";
import "dotenv/config";

const app = cohortExpress();
const PORT = process.env.PORT || 2500;

app.getCallPar("/", (req, res) => {
	res.setMyStatus(200);
	res.end(
		JSON.stringify({
			message: "Welcome to the my owndddnnnnnnn home route",
		})
	);
});
app.postCallPar("/", (req, res) => {});

app.suno(PORT).aurPhir((name) => {
	console.log(`Server has been started on port: ${PORT} by ${name}`);
});
