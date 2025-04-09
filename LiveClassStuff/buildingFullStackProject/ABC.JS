import express from "express";

const app = express();

app.get("/hello", (req, res) => {
	res.send("Hello to you");
});

app.listen(3000, () => {
	console.log("app is listening on 3000");
});
